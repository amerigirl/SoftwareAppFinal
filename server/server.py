from flask import Flask, request, jsonify
from flask_cors import CORS
from  flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, MovieModel, SuggestAMovieModel
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

api.add_resource(MovieResource, '/api/movie', '/api/movie/<int:movie_id>')


# create a route
@app.route("/api/home", methods=["GET"])
def return_home():
    movies = MovieModel.query.all()
    return jsonify([
        {"title": movie.title, "year": movie.year, "genre": movie.genre}
        for movie in movies
    ])

# create a route
@app.route("/api/suggest", methods=["POST"])
def suggest_movie():
    data = request.get_json()

    #required
    title = data.get("title")

    if not title:
        return jsonify({"error": "Title is required"}), 400
    

    year = data.get("year")
    genre = data.get("genre")
    comment = data.get("comment")


    # Create a new suggestion instance
    suggestion = SuggestAMovieModel(
        title=title,
        year=year,
        genre=genre,
        comment=comment
    )

    # Save to the database
    db.session.add(suggestion)
    db.session.commit()

    return jsonify({
    "id": suggestion.id,
    "title": suggestion.title,
    "year": suggestion.year,
    "genre": suggestion.genre,
    "comment": suggestion.comment   
    }), 201



@app.route("/api/genre", methods=["GET"])
def new_genre():
    data = request.json()

    genre = data.get("genre")
    if not genre:
        return jsonify({"error": "Genre is required"}), 400

    genre=genre

#run the app and create tables

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=8080)