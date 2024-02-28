import random
from faker import Faker
from app import app
from models import db, User, Job, Apply

faker = Faker()

job_titles = [
    "Software Engineer", 
    "Data Scientist", 
    "Product Manager", 
    "UX Designer", 
    "Marketing Specialist", 
    "Sales Representative", 
    "Financial Analyst", 
    "HR Manager", 
    "Customer Support Specialist", 
    "Graphic Designer", 
    "Network Administrator", 
    "Content Writer", 
    "Project Manager", 
    "Business Analyst", 
    "Research Scientist"
]

def create_jobs():
    jobs_list = []
    for _ in range(14):
        job = Job(
            title=random.choice(job_titles),
            description=faker.text(),
            salary=f"${random.randint(50000, 120000)} - ${random.randint(80000, 150000)}",
            location=faker.city(),
            skill=faker.word()
        )
        jobs_list.append(job)

    db.session.add_all(jobs_list)
    db.session.commit()

def create_users():
    users_list = []
    for _ in range(14):
        user = User(
            name=faker.name(),
            profession=faker.job(),
            skills=faker.words(),
            contact=faker.phone_number(),
            username=faker.user_name(),
            password=faker.password(),
        )
        users_list.append(user)

    db.session.add_all(users_list)
    db.session.commit()



    if __name__ == '__main__':
        app.app_context().push()
        db.create_all()

        create_jobs()
        create_users()