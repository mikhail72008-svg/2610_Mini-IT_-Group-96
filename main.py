import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QPushButton, QLabel, QStackedWidget

# LOGIN PAGE
class LoginPage(QWidget):
    def __init__(self, switch_page):
        super().__init__()

        layout = QVBoxLayout()

        self.label = QLabel("Login Page")
        self.button = QPushButton("Login")

        layout.addWidget(self.label)
        layout.addWidget(self.button)

        self.setLayout(layout)

        # When clicked → go to Feed
        self.button.clicked.connect(lambda: switch_page(1))


# FEED PAGE
class FeedPage(QWidget):
    def __init__(self, switch_page):
        super().__init__()

        layout = QVBoxLayout()

        self.label = QLabel("Feed Page")
        self.button = QPushButton("Back to Login")

        layout.addWidget(self.label)
        layout.addWidget(self.button)

        self.setLayout(layout)

        self.button.clicked.connect(lambda: switch_page(0))


# MAIN APP
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("MMU Hub")

        self.stack = QStackedWidget()

        self.login = LoginPage(self.switch_page)
        self.feed = FeedPage(self.switch_page)

        self.stack.addWidget(self.login)  # index 0
        self.stack.addWidget(self.feed)   # index 1

        layout = QVBoxLayout()
        layout.addWidget(self.stack)

        self.setLayout(layout)

    def switch_page(self, index):
        self.stack.setCurrentIndex(index)


# RUN
app = QApplication(sys.argv)
window = MainWindow()
window.show()
sys.exit(app.exec_())

