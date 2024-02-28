import os
from flask import Flask, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Apply, Job

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
    return [j.to_dict() for j in jobs], 200 


# @app.route('/jobs')
# def all_jobs():
#     jobs = Job.query.all()
#     return [j.to_dict() for j in jobs], 200 
