from flask import Blueprint

location = Blueprint('location', __name__)

@location.route('/location')
def explore_location():
    return "Location feature working"
