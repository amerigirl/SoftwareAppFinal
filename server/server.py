from flask import Flask, jsonify
from flask_cors import CORS


#app instance
app = Flask(__name__)
CORS(app)

# create a route


@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message': 'Welcome to The Treasure Trove!',
        'people': [
            'Alice',
            'Bob',   
            'Charlie',
        ]
    })

#run the app
if __name__ == '__main__':
    app.run(debug=True, port=8080) #uploaded from 5000 because of conflict with the frontend
