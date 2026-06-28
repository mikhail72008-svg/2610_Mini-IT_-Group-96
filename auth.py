from database import connect


# =========================
# REGISTER
# =========================
def register_user(username, email, password):
    conn = connect()
    cursor = conn.cursor()

    # Check username
    cursor.execute(
        "SELECT * FROM users WHERE username=?",
        (username,)
    )

    if cursor.fetchone():
        conn.close()
        return {
            "status": "error",
            "message": "Username already exists."
        }

    # Check email
    cursor.execute(
        "SELECT * FROM users WHERE email=?",
        (email,)
    )

    if cursor.fetchone():
        conn.close()
        return {
            "status": "error",
            "message": "Email already registered."
        }

    # Insert new user
    cursor.execute(
        """
        INSERT INTO users(username, email, password)
        VALUES (?, ?, ?)
        """,
        (username, email, password)
    )

    conn.commit()
    conn.close()

    return {
        "status": "success",
        "message": "Registration successful."
    }


# =========================
# LOGIN
# =========================
def login_user(email, password):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT id, username, email
        FROM users
        WHERE email=? AND password=?
        """,
        (email, password)
    )

    user = cursor.fetchone()
    conn.close()

    if user:
        return {
            "status": "success",
            "user": {
                "id": user[0],
                "username": user[1],
                "email": user[2]
            }
        }

    return {
        "status": "error",
        "message": "Invalid email or password."
    }


# =========================
# SEARCH USERS
# =========================
def search_users(keyword):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT id, username
        FROM users
        WHERE username LIKE ?
        """,
        ('%' + keyword + '%',)
    )

    users = cursor.fetchall()
    conn.close()

    return users