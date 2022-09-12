from app import app, db
from app.models import Players, Users
from flask import render_template, request, session
from sqlalchemy import null

# Homepage route
@app.route('/')
def home():
    message = session.get('message')
    return render_template('index.html', message=message)


# premier league page route
# Fetching all the players details from db to update the table dynamically
@app.route('/premierleague')
def premierleague():
    players = Players.query.all()
    for player in players:
        print(player.fname)
    message = session.get('message')
    return render_template('premierleague.html', players=players, message=message)


# Charts route
@app.route('/stats')
def stats():
    message = session.get('message')
    return render_template('chart.html', message=message)


# Aboutus page route
@app.route('/aboutus')
def aboutus():
    message = session.get('message')
    return render_template('aboutus.html', message=message)


# account page route
@app.route('/account')
def account():
    message = ""
    return render_template('account.html', message=message)

# account page route


@app.route('/logout')
def logout():
    session["message"] = ""
    msg = ""
    return render_template('index.html', message=msg)

# register user page route
@app.route('/registerValidate',  methods=["POST", "GET"])
def registerValidate():
    user = Users(
        username=request.form.get("uname"),
        password=request.form.get("pass"),
        email=request.form.get("email")
    )
    db.session.add(user)
    db.session.commit()
    print(f"Successfully registered player!!")
    msg = "successfully registered"
    return render_template('account.html', msg=msg)

# login user page route


@app.route("/login", methods=["POST", "GET"])
def loggedin():
    uname = request.form.get('luname')
    pwd = request.form.get('lpass')
    user = Users.query.filter_by(username=uname).all()
    if(len(user) == 0):
        msg = "user doesn't exist, please register"
        return render_template('account.html', msg=msg)
    else:
        password = user[0].password
        if(password != pwd):
            msg = "username or password is incorrect"
            return render_template('account.html', msg=msg)
        else:
            session["message"] = "successfully loggedin"
            message = "successfully loggedin"
            return render_template('index.html', message=message)


# register player route
@app.route('/registerplayer')
def registerplayer():
    message = session.get('message')
    return render_template('registerplayer.html', message=message)


# edit player route
@app.route('/editplayer')
def editplayer():
    player = null
    message = session.get('message')
    return render_template('editplayer.html', player=player, message=message)


# update player route
@app.route('/update', methods=["POST", "GET"])
def update():
    id = request.form.get('id')
    dbplayer = Players.query.filter_by(id=id).first()
    dbplayer.fname = request.form.get("fname")
    dbplayer.lname = request.form.get("lname")
    dbplayer.dob = request.form.get("dob")
    dbplayer.weight = request.form.get("weight")
    dbplayer.team = request.form.get("team")
    dbplayer.country = request.form.get("country")
    dbplayer.position = request.form.get("position")
    dbplayer.matches = request.form.get("matches")
    dbplayer.goals = request.form.get("goals")
    db.session.commit()
    message = session.get('message')
    return render_template('update.html', message=message)

# player search route


@app.route('/playerSearch', methods=["POST", "GET"])
def playerSearch():
    searchName = request.form.get('searchname')
    player = Players.query.filter(Players.fname.ilike(searchName)).first()
    print(f"player: {player.fname}")
    message = session.get('message')
    return render_template("editingplayer.html", player=player, message=message)


# player registration route
@app.route('/register', methods=["POST", "GET"])
def submit():
    player = playerDetails(request)
    db.session.add(player)
    db.session.commit()
    print(f"Successfully registered player!!")
    message = session.get('message')
    return render_template('submit.html', message=message)

# method to set the form values into a Player object


def playerDetails(request):
    player = Players(
        fname=request.form.get("fname"),
        lname=request.form.get("lname"),
        dob=request.form.get("dob"),
        weight=request.form.get("weight"),
        team=request.form.get("team"),
        country=request.form.get("country"),
        position=request.form.get("position"),
        matches=request.form.get("matches"),
        goals=request.form.get("goals")
    )
    return player


if __name__ == '__main__':
    app.run(debug=True)
