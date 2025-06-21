#creates routes

from flask_restful import Resource, reqparse, fields, request, marshal_with
from models import db, MovieModel

#serialize the Rental Model object
movieFields = {
    'id': fields.Integer,
    'title': fields.String, 
    'year': fields.Integer,
    'genre': fields.String,
    'image': fields.String
}

movie_parser = reqparse.RequestParser()
movie_parser.add_argument('title', type=str, required=True, help='Title is required')
movie_parser.add_argument('year', type=int, required=True, help='Year is required')
movie_parser.add_argument('genre', type=str, required=True, help='Genre is required')
movie_parser.add_argument('image', type=str, required=True, help='Image is required')

class MovieResource(Resource):
    @marshal_with(movieFields)
    def get(self, movie_id=None):
        title = request.args.get('title')
        if movie_id:
            movie = MovieModel.query.get_or_404(movie_id)
            return movie
        elif title:
            movie = MovieModel.query.filter_by(title=title).first()
            if movie:
                return [movie]  # Return as a list to match frontend expectation
            else:
                return [], 404
        else:
            movies = MovieModel.query.all()
            return movies

    @marshal_with(movieFields)
    def post(self):
        args = movie_parser.parse_args()
        movie = MovieModel(title=args['title'], year=args['year'], genre=args['genre'])
        db.session.add(movie)
        db.session.commit()
        return movie, 201


#not implemented in the front end yet!!
    @marshal_with(movieFields)
    def put(self, movie_id):
        args = movie_parser.parse_args()
        movie = MovieModel.query.get_or_404(movie_id)
        movie.title = args['title']
        movie.year = args['year']
        movie.genre = args['genre']
        db.session.commit()
        return movie

#not implemeneted in the front end yet!
    def delete(self, movie_id):
        movie = MovieModel.query.get_or_404(movie_id)
        db.session.delete(movie)
        db.session.commit()
        return '', 204