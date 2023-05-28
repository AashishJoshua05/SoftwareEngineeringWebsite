from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if username == 'admin' and password == 'password':
        token = "LoggedInDamnThatsCrazy05"
        user = {
            'id' : 1,
            'username' : username,
            'email' : 'admin@example.com'
        }
        return jsonify({'token' : token, 'user' : user}), 200
    else:
        return jsonify({'error': 'Invalid Credentials'}), 401

if __name__ == '__main__':
    app.run()
