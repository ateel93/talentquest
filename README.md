Goals:
Create a full stack application using React, Python + Flask and Tailwind CSS. 

Introduction: 
Talent Quest is designed to be a one stop shop where users can apply, track and network with other active users. 


Setup:
You will need React, Python and Flask to run this project. 

Front End: 
Navigate to the client folder and run:
1. npm install
2. npm start

To start up the Back End:
Install python shell + flask in your terminal:
1. pipenv install
2. pipenv shell
3. npm install --prefix client

After installation, navigate into the server folder and follow below:
1. cd server
2. flask db init
3. flask db migrate -m 'initial model'
4. flask db upgrade head
5. python seed.py
6. flask run
