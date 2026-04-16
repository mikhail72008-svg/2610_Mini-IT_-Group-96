from auth import register_user, login_user

register_user("test", "123")

user = login_user("test", "123")
print(user)
