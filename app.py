from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "MMU Hub Running"

app.run(debug=True)