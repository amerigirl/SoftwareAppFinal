from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class MovieModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer)
    genre = db.Column(db.String(50))
    #addimageurl

#lets us see the object when we print it out
    def __repr__(self):
        return f"<Movie {self.id} {self.title} {self.year} {self.genre}"