# H1 Goals: 
Create a full stack application using React, Python + Flask and Tailwind CSS. 

![Screenshot 2024-03-07 at 2 05 10 PM](https://github.com/ateel93/talentquest/assets/146662726/f4b1f169-c51f-4b44-b6c2-44e5ff76fbf1)

---


# H1 Introduction: 
Talent Quest is designed to be a one stop shop where users can apply, track and network with other active users. 

![Screenshot 2024-03-07 at 2 05 23 PM](https://github.com/ateel93/talentquest/assets/146662726/3348bb18-3166-483f-89cb-45d345e223cc)

---

# H1 Setup:
You will need React, Python and Flask to run this project. 

# H2 Front End: 
Navigate to the client folder and run:
1. npm install
2. npm start

# H2 To start up the Back End:
Install python shell + flask in your terminal:
1. pipenv install
2. pipenv shell
3. npm install --prefix client

# H2 After installation, navigate into the server folder and follow below:
1. cd server
2. flask db init
3. flask db migrate -m 'initial model'
4. flask db upgrade head
5. python seed.py
6. flask run
