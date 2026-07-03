from flask import Flask, request, jsonify, render_template, session, redirect, url_for
from datetime import datetime
from flask_cors import CORS

from database import create_tables

from auth import (
    register_user,
    login_user,
    search_users
)

from posts import (
    create_post,
    get_all_posts,
    delete_post,
    get_user_posts,
    get_most_liked_posts,
    search_posts
)

from likes import (
    like_post,
    unlike_post,
    get_like_count
)

from comments import (
    create_comment,
    get_comments,
    delete_comment
)

app = Flask(__name__)
app.secret_key = "mmuhub_secret_key"
CORS(app)

# Create database tables when app starts
create_tables()
def time_ago(timestamp):

    if isinstance(timestamp, str):
        timestamp = datetime.fromisoformat(timestamp)

    now = datetime.now()
    diff = now - timestamp

    seconds = diff.total_seconds()

    if seconds < 60:
        return "Just now"

    elif seconds < 3600:
        minutes = int(seconds // 60)
        return f"{minutes} min ago"

    elif seconds < 86400:
        hours = int(seconds // 3600)
        return f"{hours} hour ago" if hours == 1 else f"{hours} hours ago"

    elif seconds < 172800:
        return "Yesterday"

    elif diff.days < 7:
        return f"{diff.days} days ago"

    elif diff.days < 30:
        weeks = diff.days // 7
        return f"{weeks} week ago" if weeks == 1 else f"{weeks} weeks ago"

    elif diff.days < 365:
        months = diff.days // 30
        return f"{months} month ago" if months == 1 else f"{months} months ago"

    else:
        years = diff.days // 365
        return f"{years} year ago" if years == 1 else f"{years} years ago"

# =========================
# AUTH ROUTES
# =========================

@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()

    return jsonify(
        register_user(
            data["username"],
            data["email"],
            data["password"]
        )
    )


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()

    result = login_user(
        data["email"],
        data["password"]
    )

    if result["status"] == "success":
        session["user"] = result["user"]

    return jsonify(result)


# =========================
# POST ROUTES
# =========================

@app.route("/api/posts", methods=["POST"])
def create():

    if "user" not in session:
        return jsonify({
            "message": "Please login first."
        }), 401

    data = request.get_json()

    return jsonify(
        create_post(
            session["user"]["id"],
            data["content"]
        )
    )

@app.route("/api/posts/<int:post_id>", methods=["DELETE"])
def delete(post_id):

    return jsonify(
        delete_post(post_id)
    )

@app.route("/api/posts", methods=["GET"])
def get_posts():
    return jsonify(get_all_posts())


@app.route("/api/posts/user/<int:user_id>", methods=["GET"])
def user_posts(user_id):
    return jsonify(get_user_posts(user_id))


@app.route("/api/posts/most-liked", methods=["GET"])
def most_liked():
    return jsonify(get_most_liked_posts())


# =========================
# SEARCH ROUTES
# =========================

@app.route("/api/search/posts/<string:keyword>", methods=["GET"])
def search_post_route(keyword):
    return jsonify(search_posts(keyword))


@app.route("/api/search/users/<string:keyword>", methods=["GET"])
def search_user_route(keyword):
    return jsonify(search_users(keyword))


# =========================
# LIKE ROUTES
# =========================

@app.route("/api/likes", methods=["POST"])
def like():
    data = request.get_json()

    return jsonify(
        like_post(
            data["user_id"],
            data["post_id"]
        )
    )


@app.route("/api/likes", methods=["DELETE"])
def unlike():
    data = request.get_json()

    return jsonify(
        unlike_post(
            data["user_id"],
            data["post_id"]
        )
    )


@app.route("/api/likes/<int:post_id>", methods=["GET"])
def get_likes(post_id):
    return jsonify(get_like_count(post_id))


# =========================
# COMMENT ROUTES
# =========================

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


@app.route("/api/comments/<int:post_id>", methods=["GET"])
def fetch_comments(post_id):
    return jsonify(get_comments(post_id))


@app.route("/api/comments/<int:comment_id>", methods=["DELETE"])
def remove_comment(comment_id):
    return jsonify(delete_comment(comment_id))


# =========================
# HOME ROUTE
# =========================

@app.route("/", methods=["GET"])
def home():

    if "user" in session:
        return redirect(url_for("homepage"))

    return render_template("login.html")


# =========================
# PAGE ROUTES
# =========================

@app.route("/Homepage.html")
def homepage():

    if "user" not in session:
        return redirect(url_for("login_page"))

    posts = get_all_posts()

    formatted_posts = []

    for post in posts:
        formatted_posts.append({
    "id": post[0],
    "username": post[1],
    "content": post[2],
    "time": time_ago(post[3]),
    "likes": get_like_count(post[0])["likes"]
})

    return render_template(
        "Homepage.html",
        username=session["user"]["username"],
        posts=formatted_posts
    )

@app.route("/Following.html")
def following():
    return render_template("Following.html")

@app.route("/Search.html")
def search():
    return render_template("Search.html")

@app.route("/Profile.html")
def profile():
    return render_template("Profile.html")

@app.route("/Trending.html")
def trending():
    return render_template("Trending.html")

@app.route("/Map.html")
def map_page():
    return render_template("Map.html")

@app.route("/Register.html")
def register_page():
    return render_template("Register.html")

@app.route("/login.html")
def login_page():
    return render_template("login.html")


# =========================
# RUN APP
# =========================

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login_page"))
if __name__ == "__main__":
    app.run(debug=True)