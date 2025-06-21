from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class MovieModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer)
    genre = db.Column(db.String(50))
    image = db.Column(db.String(100))

    #lets us see the object when we print it out
    def __repr__(self):
        return f"<Movie {self.id} {self.title} {self.year} {self.genre} {self.image}"


class SuggestAMovieModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer)
    genre = db.Column(db.String(50))
    comment = db.Column(db.String(500))


#lets us see the object when we print it out
    def __repr__(self):
        return f"<Movie {self.id} {self.title} {self.year} {self.genre} {self.comment}"
    

class GenreModel(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    genre = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return f"<Genre {self.id}, {self.genre}"
    