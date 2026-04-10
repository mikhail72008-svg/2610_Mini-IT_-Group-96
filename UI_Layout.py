from PySide6.QtWidgets import *

app = QApplication([])

window = QWidget()
layout = QVBoxLayout()

input_box = QLineEdit()
post_button = QPushButton("Post")
feed = QTextEdit()
feed.setReadOnly(True)

def post():
    text = input_box.text()
    if text:
        feed.append(text)
        input_box.clear()

post_button.clicked.connect(post)

layout.addWidget(input_box)
layout.addWidget(post_button)
layout.addWidget(feed)

window.setLayout(layout)
window.setWindowTitle("MMU Hub")
window.show()

app.exec()