from auth import register_user, login_user
from posts import create_post, get_all_posts

print(register_user("vinay", "1234"))

print(login_user("vinay", "1234"))

create_post(1, "My first integrated post")

print(get_all_posts())