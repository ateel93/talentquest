import random
from faker import Faker
from app import app
from models import db, User, Job, Apply
import random

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
        selected_title = random.sample(job_titles, 1)[0]
        location_data = {
            'city': faker.city(),
            'state': faker.state(),
            'country': faker.country()
        }
        job = Job(
            title = random.sample(job_titles, 1)[0],
            company=faker.company(),
            description=faker.text(),
            salary=f"${random.randint(50000, 80000)} - ${random.randint(80000, 150000)}",
            location=f"{location_data['city']}, {location_data['state']}, {location_data['country']}",
            skill=faker.word()
        )
        jobs_list.append(job)

    db.session.add_all(jobs_list)
    db.session.commit()

def create_users():
    users_list = []
    image_files= ['ag.jpeg', 'hunter.png', 'jo.jpeg', 'day.png', 'lil.jpeg', 'hats.jpeg', 'teel.jpg', 'ter.jpeg', 'sar.jpeg','el.jpeg', 'm.jpeg', 'mar.jpeg', 'mj.jpeg','kar.jpeg']
    for i in range(14):
        user = User(
            name=faker.name(),
            profession=faker.job(),
            skills=faker.word(),
            contact=faker.phone_number(),
            username=faker.user_name(),
            image=image_files[i % len(image_files)]

            # password=faker.password(),
        )

        # i = ['ag.jpeg', 'day.png','el.jpeg','teel.jpg','hunter.png', 'hats.jpeg', 'lil.jpeg', 'm.jpeg', 'mar.jpeg', 'mj.jpeg', 'ter.jpeg', 'sar.jpeg', 'jo.jpeg', 'kar.jpeg' ]

        # for img in i:
        #     user.image = img

        users_list.append(user)

    db.session.add_all(users_list)
    db.session.commit()



if __name__ == '__main__':
    app.app_context().push()

    create_jobs()
    create_users()