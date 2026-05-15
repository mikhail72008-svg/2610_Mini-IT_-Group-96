from auth import login_user
from posts import create_post, get_all_posts
from likes import like_post, get_like_count

print(login_user("vinay", "1234"))

create_post(1, "Testing likes integration")

posts = get_all_posts()

print(posts)

like_post(1, 1)

print(get_like_count(1))