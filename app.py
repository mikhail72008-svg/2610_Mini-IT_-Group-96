from flask import Flask, render_template, request, redirect

app = Flask(__name__)
CORS(app)

create_tables()



# AUTH ROUTES


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    return jsonify(register_user(data["username"], data["password"]))


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    return jsonify(login_user(data["username"], data["password"]))



# POST ROUTES


@app.route("/api/posts", methods=["POST"])
def create():
    data = request.get_json()
    return jsonify(create_post(data["user_id"], data["content"]))


@app.route("/api/posts", methods=["GET"])
def get_posts():
    return jsonify(get_all_posts())


# GET USER POSTS
@app.route("/api/posts/user/<int:user_id>", methods=["GET"])
def user_posts(user_id):
    return jsonify(get_user_posts(user_id))


# MOST LIKED POSTS
@app.route("/api/posts/most-liked", methods=["GET"])
def most_liked():
    return jsonify(get_most_liked_posts())



# LIKE ROUTES


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

# SEARCH POSTS
@app.route("/api/search/posts/<string:keyword>", methods=["GET"])
def search_post_route(keyword):
    return jsonify(search_posts(keyword))


# SEARCH USERS
@app.route("/api/search/users/<string:keyword>", methods=["GET"])
def search_user_route(keyword):
    return jsonify(search_users(keyword))

# RUN APP

# CREATE COMMENT
@app.route("/api/comments", methods=["POST"])
def add_comment():
    data = request.get_json()

    return jsonify(
        create_comment(
            data["post_id"],
            data["user_id"],
            data["comment"]
        )
    )


# GET COMMENTS
@app.route("/api/comments/<int:post_id>", methods=["GET"])
def fetch_comments(post_id):
    return jsonify(get_comments(post_id))


# DELETE COMMENT
@app.route("/api/comments/<int:comment_id>", methods=["DELETE"])
def remove_comment(comment_id):
    return jsonify(delete_comment(comment_id))

if __name__ == "__main__":
    app.run(debug=True)

    from posts import search_posts
from auth import search_users

from comments import create_comment, get_comments, delete_comment