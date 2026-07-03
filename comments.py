from database import connect


def create_comment(post_id, user_id, comment):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO comments (post_id, user_id, comment)
        VALUES (?, ?, ?)
        """,
        (post_id, user_id, comment)
    )

    conn.commit()
    conn.close()

    return {"message": "Comment added successfully"}


def get_comments(post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            comments.id,
            users.username,
            comments.comment
        FROM comments
        JOIN users
        ON comments.user_id = users.id
        WHERE comments.post_id = ?
        ORDER BY comments.id ASC
    """, (post_id,))

    comments = cursor.fetchall()

    conn.close()

    return comments


def delete_comment(comment_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM comments WHERE id=?",
        (comment_id,)
    )

    conn.commit()
    conn.close()

    return {"message": "Comment deleted"}
def get_comment_count(post_id):
    conn = connect()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT COUNT(*) FROM comments WHERE post_id=?",
        (post_id,)
    )

    count = cursor.fetchone()[0]

    conn.close()

    return count