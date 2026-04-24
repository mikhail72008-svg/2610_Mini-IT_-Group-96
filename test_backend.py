from database import create_tables

create_tables()
from auth import register_user, login_user

register_user("test1", "123")

user = login_user("test1", "123")
print(user)
from posts import create_post, get_all_posts, delete_post

# Create post
create_post(1, "Hello this is my first post")

# Get posts
posts = get_all_posts()
print(posts)

# Delete post (change ID if needed)
# delete_post(1)
import posts

print(dir(posts))