from database import connect
from datetime import datetime

def create_post(user_id, content):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO posts (user_id, content, created_at) VALUES (?, ?, ?)",
        (user_id, content, datetime.now())
    )

    conn.commit()
    conn.close()

    return {"message": "Post created successfully"}


def get_all_posts():
    conn = connect()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            posts.id,
            users.username,
            posts.content,
            posts.created_at
        FROM posts
        JOIN users
            ON posts.user_id = users.id
        ORDER BY posts.created_at DESC
    """)

    posts = cursor.fetchall()

    conn.close()

    return posts

    


def delete_post(post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM posts WHERE id = ?",
        (post_id,)
    )

    conn.commit()
    conn.close()

    return {"message": "Post deleted successfully"}

def get_user_posts(user_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            posts.id,
            users.username,
            posts.content,
            posts.created_at
        FROM posts
        JOIN users
            ON posts.user_id = users.id
        WHERE posts.user_id = ?
        ORDER BY posts.created_at DESC
    """, (user_id,))

    posts = cursor.fetchall()

    conn.close()

    return posts


def get_most_liked_posts():
    conn = connect()
    cursor = conn.cursor()

    cursor.execute("""
SELECT
    posts.id,
    users.username,
    posts.content,
    posts.created_at,
    COUNT(likes.id) AS like_count
FROM posts
JOIN users
ON posts.user_id = users.id
LEFT JOIN likes
ON posts.id = likes.post_id
GROUP BY posts.id
ORDER BY like_count DESC
""")

    posts = cursor.fetchall()
    conn.close()

    return posts

def search_posts(keyword):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT
            posts.id,
            users.username,
            posts.content,
            posts.created_at
        FROM posts
        JOIN users
            ON posts.user_id = users.id
        WHERE posts.content LIKE ?
        """,
        ('%' + keyword + '%',)
    )

    posts = cursor.fetchall()

    conn.close()

    return posts