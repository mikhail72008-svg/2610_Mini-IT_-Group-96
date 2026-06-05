from database import connect

def register_user(username, password):
    conn = connect()
    cursor = conn.cursor()

    try:
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            (username, password)
        )
        conn.commit()
        return {"status": "success", "message": "User registered"}
    except:
        return {"status": "error", "message": "Username already exists"}
    finally:
        conn.close()


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