from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)
app.secret_key = "secret123"

# temporary in-memory posts (no database yet)
posts = []

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")

        if not username:
            flash("Username cannot be empty!")
            return redirect("/")

        session["user"] = username
        return redirect("/feed")

    return render_template("login.html")


@app.route("/feed", methods=["GET", "POST"])
def feed():
    if "user" not in session:
        return redirect("/")

    # handle post submission
    if request.method == "POST":
        content = request.form.get("content")

        if content:
            posts.append({
                "user": session["user"],
                "content": content
            })

    return render_template("feed.html", username=session["user"], posts=posts)


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)