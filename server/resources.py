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

class Movies(Resource):
    @marshal_with(movieFields)
    def get(self):
        return MovieModel.query.all() #builds the sql query