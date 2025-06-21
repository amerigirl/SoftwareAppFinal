#creates routes

from flask_restful import Resource, reqparse, fields, marshal_with
from models import db, MovieModel

#serialize the Rental Model object
movieFields = {
    'id': fields.Integer,
    'title': fields.String, 
    'year': fields.Integer,
    'genre': fields.String
    #addimageurl
}

movie_parser = reqparse.RequestParser()
movie_parser.add_argument('title', type=str, required=True, help='Title is required')
movie_parser.add_argument('year', type=int, required=True, help='Year is required')
movie_parser.add_argument('genre', type=str, required=True, help='Genre is required')


class MovieResource(Resource):
    def get(self):
        movies = Movie.query.all()
        return [
            {"title": m.title, "year": m.year, "genre": m.genre}
            for m in movies
        ]