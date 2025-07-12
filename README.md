# FastAPI and JWT Authentication

Step 1:
python -m venv venv

Step 2:
.\venv\Scripts\activate

Step 3: to install all dependencies 

pip install -r requirements.txt

Step 4:
python.exe -m pip install --upgrade pip

Step 5:

Please downgrade bcrypt to a compatible version, the below version works well with passlib

pip install bcrypt==3.2.0

Step 6:
uvicorn main:app --reload

Step 7:

http://127.0.0.1:8000/redoc

Download OpenAPI specification

Step 8:

Create database test 

Step 9:

Create user using Postman or Insomnia

Step 10: 

Right click index.html, open with Live Server. And then login, then will appear home.html when we success to login.