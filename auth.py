from database import connect

def register_user(username, password):
    ...

def login_user(username, password):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE username=? AND password=?",
        (username, password)
    )

    user = cursor.fetchone()
    conn.close()

    if user:
        return {"status": "success", "user": user}
    else:
        return {"status": "error", "message": "Invalid credentials"}


def search_users(keyword):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT id, username FROM users WHERE username LIKE ?",
        ('%' + keyword + '%',)
    )

    users = cursor.fetchall()
    conn.close()

    return users