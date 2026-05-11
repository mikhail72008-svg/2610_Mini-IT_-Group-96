from flask import Flask, request, jsonify
from database import create_tables
from auth import register_user, login_user
from posts import create_post, get_all_posts
from posts import get_user_posts
from posts import get_most_liked_posts

app = Flask(__name__)

create_tables()

@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    return jsonify(register_user(data["username"], data["password"]))

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    return jsonify(login_user(data["username"], data["password"]))

@app.route("/api/posts", methods=["POST"])
def create():
    data = request.get_json()
    return jsonify(create_post(data["user_id"], data["content"]))

@app.route("/api/posts", methods=["GET"])
def get_posts():
    return jsonify(get_all_posts())


    from flask_cors import CORS
    app = Flask(__name__)
CORS(app)
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from likes import like_post, unlike_post, get_like_count

# LIKE POST
@app.route("/api/likes", methods=["POST"])
def like():
    data = request.get_json()
    return jsonify(like_post(data["user_id"], data["post_id"]))


# UNLIKE POST
@app.route("/api/likes", methods=["DELETE"])
def unlike():
    data = request.get_json()
    return jsonify(unlike_post(data["user_id"], data["post_id"]))


# GET LIKE COUNT
@app.route("/api/likes/<int:post_id>", methods=["GET"])
def get_likes(post_id):
    return jsonify(get_like_count(post_id))

if __name__ == "__main__":
    app.run(debug=True)

    # GET USER POSTS
@app.route("/api/posts/user/<int:user_id>", methods=["GET"])
def user_posts(user_id):
    return jsonify(get_user_posts(user_id))
#  MOST LIKED POSTS
@app.route("/api/posts/most-liked", methods=["GET"])
def most_liked():
    return jsonify(get_most_liked_posts())