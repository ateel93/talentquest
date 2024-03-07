import os
from flask import Flask, request, session, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Apply, Job, Marketing
import random
from sqlalchemy import func

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# app.secret_key = os.environ.get('SECRET_KEY')
db.init_app(app)
migrate = Migrate(app, db)
CORS(app, supports_credentials=True)


@app.route('/jobs')
def all_jobs():
    jobs = Job.query.all()
    return [job.to_dict() for job in jobs], 200 

@app.route('/featured')
def featured_jobs():
    jobs = Job.query.limit(15).all()
    random_jobs = random.sample(jobs, min(5, len(jobs)))
    return jsonify([job.to_dict() for job in random_jobs]), 200

@app.route('/users')
def all_users():
    users = User.query.all()
    return [user.to_dict() for user in users], 200

@app.route('/profile')
def user_profile():
    random_user = User.query.order_by(func.random()).first()

    if random_user:
        return jsonify(random_user.to_dict()), 200
    else:
        return jsonify({'error': 'No users found'}), 404

@app.route('/users/<int:id>')
def user_by_id(id):
    user = user.query.filter(User.id == id).first()

    if user is None:
        return {'error': 'user not found'}, 404
    if request.method == 'GET':
        return user.to_dict(), 200


@app.route('/marketing', methods=['POST'])
def marketing_signup():
    json_data = request.get_json()
    
    new_signup = Marketing(
        email=json_data.get('email')
    )

    db.session.add(new_signup)
    db.session.commit()

    return new_signup.to_dict(),201


@app.route('/apply', methods=['GET', 'POST'])
def all_apply():
    if request.method == 'GET':
        all_applys = Apply.query.all()
        results = []
        for apply in all_applys:
            results.append(apply.to_dict())
        return results, 200
    elif request.method == 'POST':
        json_data = request.get_json()
        try: 
            new_apply = Apply(
                first = json_data.get('first'),
                last = json_data.get('last'),
                dob = json_data.get('dob'),
                phone = json_data.get('phone'),
                email = json_data.get('email'),
                street = json_data.get('street'),
                city = json_data.get('city'),
                state = json_data.get('state'),
                zip = json_data.get('zip'),
                user_id = json_data.get('user_id'),
                job_id = json_data.get('job_id')
            )
        except ValueError as e:
            return {'error': str(e)}, 400
        
        db.session.add(new_apply)
        db.session.commit()
        return new_apply.to_dict(), 201
    
    
@app.route('/deleteapp/<int:id>', methods=['GET','DELETE'])
def delete_app(id):
    app = Apply.query.filter(Apply.id == id).first()
    if request.method == "GET":
        return app.to_dict(), 200
    if request.method == "DELETE":
        db.session.delete(app)
        db.session.commit()

        return {}, 204

