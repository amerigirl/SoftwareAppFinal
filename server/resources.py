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

class MovieResource(Resource):
    def get(self):
        movies = Movie.query.all()
        return [
            {"title": m.title, "year": m.year, "genre": m.genre}
            for m in movies
        ]