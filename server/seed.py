from server import app
from models import db, MovieModel




movies = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "genre": "Drama",
        "image": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg"
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "genre": "Action",
        "image": "https://m.media-amazon.com/images/I/819XyYWjfXL._UF894,1000_QL80_.jpg"
    },
    {
        "title": "Pulp Fiction",
        "year": 1994,
        "genre": "Crime",
        "image": "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "genre": "Drama",
        "image": "https://m.media-amazon.com/images/I/51pv80RoY8L._UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Inception",
        "year": 2010,
        "genre": "Sci-Fi",
        "image": "https://m.media-amazon.com/images/I/71uKM+LdgFL.jpg"
    },
    {
        "title": "Fight Club",
        "year": 1999,
        "genre": "Drama",
        "image": "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg"
    },
    {
        "title": "The Matrix",
        "year": 1999,
        "genre": "Sci-Fi",
        "image": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "genre": "Fantasy",
        "image": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg"
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": 1980,
        "genre": "Sci-Fi",
        "image": "https://m.media-amazon.com/images/I/81tbwARBd4L._UF894,1000_QL80_.jpg"
    },
    {
        "title": "The Silence of the Lambs",
        "year": 1991,
        "genre": "Thriller",
        "image": "https://m.media-amazon.com/images/I/41NbrryC3VL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "title": "Saving Private Ryan",
        "year": 1998,
        "genre": "War",
        "image": "https://m.media-amazon.com/images/I/71NvAIxHNOL._SX342_.jpg"
    },
    {
        "title": "The Green Mile",
        "year": 1999,
        "genre": "Drama",
        "image": "https://m.media-amazon.com/images/I/41q93DnX31L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "title": "Schindler's List",
        "year": 1993,
        "genre": "History",
        "image": "https://m.media-amazon.com/images/I/A1ErGu1XtcL._UF894,1000_QL80_.jpg"
    },
    {
        "title": "The Lion King",
        "year": 1994,
        "genre": "Animation",
        "image": "https://m.media-amazon.com/images/I/41AiTBoCusL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "title": "Interstellar",
        "year": 2014,
        "genre": "Sci-Fi",
        "image": "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
    },
    {
        "title": "Gladiator",
        "year": 2000,
        "genre": "Action",
        "image": "https://m.media-amazon.com/images/I/51DjAuJlXDL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    }

]

with app.app_context():
    # Clear existing data--not needed but good practice?
    MovieModel.query.delete()
    
    # Create Movie object for EACH movie in db via loop
    movie_objects = [MovieModel(title=movie["title"], year=movie["year"], genre=movie["genre"], image=movie["image"]) for movie in movies]
    
    # Bulk insert into db
    db.session.add_all(movie_objects)
    db.session.commit()

##debug issue:
 # Debug print
    print("Number of movies in DB after seeding:", MovieModel.query.count())
    for m in MovieModel.query.all():
        print(m)