import os
from flask import Flask, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Apply, Job, Marketing

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
    return [job.to_dict() for job in jobs], 200

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


# @app.route('/marketing', methods=['POST'])
# def marketing_signup():
#     if request.method == 'POST':
#         try:
#             json_data = request.get_json()
#             new_marketing = Marketing(
#                 email=json_data.get('email')
#             )
#             db.session.add(new_marketing)
#             db.session.commit()
#             return {"Successfully signed up for marketing"}, 201
#         except: ValueError as e:
#             return {'error': Sign up unsuccessful.}


# Need a route for tracker that pulls jobs loged in user has applied for 

