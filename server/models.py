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
    name = db.Column(db.String, nullable=False)
    profession = db.Column(db.String)
    skills = db.Column(db.String)
    contact = db.Column(db.string)
    username = db.Column(db.String, unique=True)
    # password later

    job = db.relationship('Job', back_populates='user')
    applys = db.relationship('Apply', back_populates='user')


class Apply(db.Model):
    __tablename__ = 'applys'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'))
    job_id = db.Column(db.Integer, db.ForeignKey('Jobs.id'))
    # job id (could have resume or date applied)


    job = db.relationship('Job', back_populates='applys')
    user = db.relationship('User', back_populates='applys')


class Job(db.Model, SerializerMixin):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    company = db.Column(db.String, unique=True)
    description = db.Column(db.String)
    salary = db.Column(db.Integer)
    location = db.Column(db.String)
    skill = db.Column(db.String)
    
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates='jobs')
    applys = db.relationship('Apply', back_populates='job')





