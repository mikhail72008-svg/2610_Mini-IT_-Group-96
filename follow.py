from database import connect


def follow_user(follower_id, following_id):

    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT OR IGNORE INTO followers
        (follower_id, following_id)
        VALUES (?, ?)
        """,
        (follower_id, following_id)
    )

    conn.commit()
    conn.close()

    return {"message": "User followed"}


def unfollow_user(follower_id, following_id):

    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        DELETE FROM followers
        WHERE follower_id=? AND following_id=?
        """,
        (follower_id, following_id)
    )

    conn.commit()
    conn.close()

    return {"message": "User unfollowed"}


def is_following(follower_id, following_id):

    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM followers
        WHERE follower_id=? AND following_id=?
        """,
        (follower_id, following_id)
    )

    result = cursor.fetchone()

    conn.close()

    return result is not None


def get_following_posts(user_id):

    conn = connect()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            posts.id,
            users.username,
            posts.content,
            posts.created_at
        FROM posts
        JOIN followers
            ON posts.user_id = followers.following_id
        JOIN users
            ON posts.user_id = users.id
        WHERE followers.follower_id = ?
        ORDER BY posts.created_at DESC
    """, (user_id,))

    posts = cursor.fetchall()

    conn.close()

    return posts