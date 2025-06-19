from flask import Flask, jsonify
from flask_cors import CORS
from  flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
from resources import Movies


#app instance
app = Flask(__name__)
CORS(app)

#connect to a DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///movies.db'
#added from class notes to prevent bug issue
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#initializing the database w/app
db.init_app(app) 

#add for migrations
migrate = Migrate(app, db)

#add for API
api = Api(app)

#add resource to API
api.add_resource(Movies, '/api/movie')


# create a route
@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message': 'Welcome to The Treasure Trove!'
    })

#run the app and create tables

with app.app_context():
    db.create_all()
    app.run(debug=True, port=8080) #uploaded from 5000 because of conflict with the frontend


if __name__ == '__main__':
    app.run(debug=True)