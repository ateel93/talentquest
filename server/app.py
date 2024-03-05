import os
from flask import Flask, request, session, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Apply, Job, Marketing
import random

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
# Need a route for tracker that pulls jobs loged in user has applied for 

