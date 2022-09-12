from app import db
from datetime import datetime


class Players(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(120), nullable=False)
    lname = db.Column(db.String(120), index=True, nullable=False)
    dob = db.Column(db.String(50), index=True, nullable=False)
    weight = db.Column(db.Integer, index=True, nullable=False)
    team = db.Column(db.String(50), index=True, nullable=False)
    country = db.Column(db.String(50), index=True, nullable=False)
    position = db.Column(db.String(120), index=True, nullable=False)
    matches = db.Column(db.Integer, index=True, nullable=False)
    goals = db.Column(db.Integer, index=True, nullable=False)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(120), index=True, nullable=False)
    email = db.Column(db.String(120), index=True, nullable=False)
