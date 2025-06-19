from server import app
from models import db, Movie



movies = [
    {"title": "The Shawshank Redemption", "year": 1994, "genre": "Drama"},
    {"title": "The Dark Knight", "year": 2008, "genre": "Action"},
    {"title": "Pulp Fiction", "year": 1994, "genre": "Crime"},
    {"title": "Forrest Gump", "year": 1994, "genre": "Drama"},
    {"title": "Inception", "year": 2010, "genre": "Sci-Fi"},
    {"title": "Fight Club", "year": 1999, "genre": "Drama"},
    {"title": "The Matrix", "year": 1999, "genre": "Sci-Fi"},
    {"title": "The Lord of the Rings: The Return of the King", "year": 2003, "genre": "Fantasy"},
    {"title": "Star Wars: Episode V - The Empire Strikes Back", "year": 1980, "genre": "Sci-Fi"},
    {"title": "The Silence of the Lambs", "year": 1991, "genre": "Thriller"},
    {"title": "Saving Private Ryan", "year": 1998, "genre": "War"},
    {"title": "The Green Mile", "year": 1999, "genre": "Drama"},
    {"title": "Schindler's List", "year": 1993, "genre": "History"},
    {"title": "The Lion King", "year": 1994, "genre": "Animation"},
    {"title": "Interstellar", "year": 2014, "genre": "Sci-Fi"},
    {"title": "Gladiator", "year": 2000, "genre": "Action"},
    {"title": "Se7en", "year": 1995, "genre": "Crime"},
    {"title": "Braveheart", "year": 1995, "genre": "History"},
    {"title": "The Departed", "year": 2006, "genre": "Crime"},
    {"title": "Memento", "year": 2000, "genre": "Mystery"},
    {"title": "The Usual Suspects", "year": 1995, "genre": "Crime"},
    {"title": "The Intouchables", "year": 2011, "genre": "Comedy"},
    {"title": "Back to the Future", "year": 1985, "genre": "Adventure"},
    {"title": "The Pianist", "year": 2002, "genre": "Biography"},

]

with app.app_context():
    # Clear existing data--not needed but good practice?
    Movie.query.delete()
    
    # Create Movie object for EACH movie in db via loop
    movie_objects = [Movie(title=movie["title"], year=movie["year"], genre=movie["genre"]) for movie in movies]
    
    # Bulk insert into db
    db.session.add_all(movie_objects)
    db.session.commit()
