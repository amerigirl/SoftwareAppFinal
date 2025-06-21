from server import app
from models import db, MovieModel




movies = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "genre": "Drama",
        "imageUrl": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg"
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "genre": "Action",
        "imageUrl": "https://m.media-amazon.com/images/I/51EbJjlLQzL._AC_SY679_.jpg"
    },
    {
        "title": "Pulp Fiction",
        "year": 1994,
        "genre": "Crime",
        "imageUrl": "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "genre": "Drama",
        "imageUrl": "https://m.media-amazon.com/images/I/61KcQf5bYUL._AC_SY679_.jpg"
    },
    {
        "title": "Inception",
        "year": 2010,
        "genre": "Sci-Fi",
        "imageUrl": "https://m.media-amazon.com/images/I/51oDxnYQmGL._AC_SY679_.jpg"
    },
    {
        "title": "Fight Club",
        "year": 1999,
        "genre": "Drama",
        "imageUrl": "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg"
    },
    {
        "title": "The Matrix",
        "year": 1999,
        "genre": "Sci-Fi",
        "imageUrl": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "genre": "Fantasy",
        "imageUrl": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg"
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": 1980,
        "genre": "Sci-Fi",
        "imageUrl": "https://m.media-amazon.com/images/I/51NpxXUQ8GL._AC_SY679_.jpg"
    },
    {
        "title": "The Silence of the Lambs",
        "year": 1991,
        "genre": "Thriller",
        "imageUrl": "https://m.media-amazon.com/images/I/71c9w6bQXRL._AC_SY679_.jpg"
    },
    {
        "title": "Saving Private Ryan",
        "year": 1998,
        "genre": "War",
        "imageUrl": "https://m.media-amazon.com/images/I/51c6S4kGFmL._AC_SY679_.jpg"
    },
    {
        "title": "The Green Mile",
        "year": 1999,
        "genre": "Drama",
        "imageUrl": "https://m.media-amazon.com/images/I/51k0qa6qH-L._AC_SY679_.jpg"
    },
    {
        "title": "Schindler's List",
        "year": 1993,
        "genre": "History",
        "imageUrl": "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_SY679_.jpg"
    },
    {
        "title": "The Lion King",
        "year": 1994,
        "genre": "Animation",
        "imageUrl": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg"
    },
    {
        "title": "Interstellar",
        "year": 2014,
        "genre": "Sci-Fi",
        "imageUrl": "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
    },
    {
        "title": "Gladiator",
        "year": 2000,
        "genre": "Action",
        "imageUrl": "https://m.media-amazon.com"
    }

]

with app.app_context():
    # Clear existing data--not needed but good practice?
    MovieModel.query.delete()
    
    # Create Movie object for EACH movie in db via loop
    movie_objects = [MovieModel(title=movie["title"], year=movie["year"], genre=movie["genre"]) for movie in movies]
    
    # Bulk insert into db
    db.session.add_all(movie_objects)
    db.session.commit()

##debug issue:
 # Debug print
    print("Number of movies in DB after seeding:", MovieModel.query.count())
    for m in MovieModel.query.all():
        print(m)