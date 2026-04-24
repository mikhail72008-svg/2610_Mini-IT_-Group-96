from database import connect
from datetime import datetime

# CREATE POST
def create_post(user_id, content):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO posts (user_id, content, created_at) VALUES (?, ?, ?)",
        (user_id, content, datetime.now())
    )

    conn.commit()
    conn.close()

    print("Post created successfully")


# GET ALL POSTS
def get_all_posts():
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM posts ORDER BY created_at DESC"
    )

    posts = cursor.fetchall()

    conn.close()

    return posts


# DELETE POST
def delete_post(post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM posts WHERE id = ?",
        (post_id,)
    )

    conn.commit()
    conn.close()

    print("Post deleted successfully")
    