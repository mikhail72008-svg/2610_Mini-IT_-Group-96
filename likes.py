from database import connect

def like_post(user_id, post_id):
    conn = connect()
    cursor = conn.cursor()

    # Prevent duplicate likes
    cursor.execute(
        "SELECT * FROM likes WHERE user_id=? AND post_id=?",
        (user_id, post_id)
    )

    if cursor.fetchone():
        conn.close()
        return {"message": "Already liked"}

    cursor.execute(
        "INSERT INTO likes (user_id, post_id) VALUES (?, ?)",
        (user_id, post_id)
    )

    conn.commit()
    conn.close()

    return {"message": "Post liked"}


def unlike_post(user_id, post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM likes WHERE user_id=? AND post_id=?",
        (user_id, post_id)
    )

    conn.commit()
    conn.close()

    return {"message": "Post unliked"}


def get_like_count(post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT COUNT(*) FROM likes WHERE post_id=?",
        (post_id,)
    )

    count = cursor.fetchone()[0]
    conn.close()

    return {"likes": count}
def has_liked(user_id, post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM likes WHERE user_id=? AND post_id=?",
        (user_id, post_id)
    )

    liked = cursor.fetchone() is not None

    conn.close()

    return liked