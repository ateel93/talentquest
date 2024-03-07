from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property


# naming conventions (helps with albemic bug)
convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}
db = SQLAlchemy(metadata=MetaData(naming_convention=convention))
bcrypt = Bcrypt()


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    image = db.Column(db.String)
    name = db.Column(db.String, nullable=False)
    profession = db.Column(db.String)
    skills = db.Column(db.String)
    contact = db.Column(db.String)
    username = db.Column(db.String, unique=True)

    applys = db.relationship('Apply', back_populates='user')


class Apply(db.Model, SerializerMixin):
    __tablename__ = 'applys'

    id = db.Column(db.Integer, primary_key=True)
    first=db.Column(db.String)
    last=db.Column(db.String)
    dob=db.Column(db.Integer)
    phone=db.Column(db.Integer)
    email=db.Column(db.String)
    street=db.Column(db.String)
    city=db.Column(db.String)
    state=db.Column(db.String)
    zip=db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('jobs.id'))
   
    job = db.relationship('Job', back_populates='applys')
    user = db.relationship('User', back_populates='applys')

    serialize_rules = ('-job.applys', '-user.applys')


class Job(db.Model, SerializerMixin):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    company = db.Column(db.String, unique=True)
    description = db.Column(db.String)
    salary = db.Column(db.Integer)
    location = db.Column(db.String)
    skill = db.Column(db.String)
    
    applys = db.relationship('Apply', back_populates='job')

class Marketing(db.Model):
    __tablename__ = 'marketing'

    id=db.Column(db.Integer, primary_key = True)
    email=db.Column(db.String)







