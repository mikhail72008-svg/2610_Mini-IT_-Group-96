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
# GET USER PROFILE
# =========================
def get_user_profile(user_id):

    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT username, bio
        FROM users
        WHERE id = ?
        """,
        (user_id,)
    )

    user = cursor.fetchone()

    conn.close()

    return user

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

# =========================
# UPDATE PROFILE
# =========================
def update_profile(user_id, username, bio):

    conn = connect()
    cursor = conn.cursor()

    # Check if username already exists
    cursor.execute(
        """
        SELECT id
        FROM users
        WHERE username = ?
        AND id != ?
        """,
        (username, user_id)
    )

    if cursor.fetchone():
        conn.close()
        return {
            "status": "error",
            "message": "Username already exists."
        }

    cursor.execute(
        """
        UPDATE users
        SET username = ?, bio = ?
        WHERE id = ?
        """,
        (username, bio, user_id)
    )

    conn.commit()
    conn.close()

    return {
        "status": "success",
        "message": "Profile updated successfully."
    }