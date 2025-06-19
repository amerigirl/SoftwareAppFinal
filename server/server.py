from flask import Flask, jsonify
from flask_cors import CORS
from  flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, MovieModel
from resources import MovieResource


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
api.add_resource(MovieResource, '/api/movie')


# create a route
@app.route("/api/home", methods=["GET"])
def return_home():
    movies = MovieModel.query.all()
    return jsonify([
        {"title": movie.title, "year": movie.year, "genre": movie.genre}
        for movie in movies
    ])


#run the app and create tables

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=8080)