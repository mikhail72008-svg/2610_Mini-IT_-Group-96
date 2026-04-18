from PySide6.QtWidgets import * #Import all widgets from PySide6

app = QApplication([])  #start the application. Required for GUI to run

#Create app layouts and widgets
window = QWidget()     #Create a window widget
layout = QVBoxLayout() #Create a vertical box

#Post functions
input_box = QLineEdit()           #Create input box for user to type in
post_button = QPushButton("Post") #Create button for users to click
feed = QTextEdit()                #Display area for posts/ aka feed
feed.setReadOnly(True)            #Make the feed uneditable

#When button is clicked
def post():
    text = input_box.text() #Get the text from the input box
    if text:                #Check if the text is not empty
        feed.append(text)   #Adds users post to the feed
        input_box.clear()   #Clear the input box after posting

#Call post function
post_button.clicked.connect(post)       #Calls when post button clicked
input_box.returnPressed.connect(post)   #Calls when user press enter while in the input box

#Layouts
layout.addWidget(input_box)   #Add input box to the layout
layout.addWidget(post_button) #Add post button to the layout
layout.addWidget(feed)        #Add feed to the layout

#Apply layout to window
window.setLayout(layout)         #Set the layout for the window
window.setWindowTitle("MMU Hub") #Set the title of the window
window.show()                    #Show the window

#Start application
app.exec()


