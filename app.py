from flask import Flask, render_template, request, redirect

app = Flask(__name__)

username = ""

@app.route("/", methods=["GET", "POST"])
def login():
    global username

    if request.method == "POST":
        username = request.form.get("username")

        if not username:
            username = "Guest"

        return redirect("/feed")

    return render_template("login.html")

@app.route("/feed")
def feed():
    return render_template("feed.html", username=username)

app.run(debug=True)