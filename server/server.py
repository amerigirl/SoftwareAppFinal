from flask import Flask, jsonify
from flask_cors import CORS
from  flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
#from resources import 


#app instance
app = Flask(__name__)
CORS(app)

#connect to a DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://movies.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# create a route


@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message': 'Welcome to The Treasure Trove!',
        'people': [
            'Alice',
            'Bob',   
            'Charlie',
        ]
    })

#run the app
if __name__ == '__main__':
    app.run(debug=True, port=8080) #uploaded from 5000 because of conflict with the frontend
