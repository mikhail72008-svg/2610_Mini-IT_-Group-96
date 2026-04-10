from PyQt5.QtWidgets import QApplication, QLabel

app = QApplication([])
label = QLabel("App is working!")
label.show()
app.exec_()

from database import create_tables

create_tables()

print("Database ready!")