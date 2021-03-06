const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);
const allMessages = document.getElementById("allMessages");

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const rowData = {
        AUTHOR: username,
        MESSAGE: message,
    }
    database.push(rowData);
}

// Set database "child_added" event listener here
database.on("child_added",addMessageToBoard);
function addMessageToBoard(rowDataRef){
    const row = rowDataRef.val();
    if (row.hasOwnProperty('AUTHOR')) {
        const name = row.AUTHOR;
        const message = row.MESSAGE;

        const paragraph = document.createElement("p");
        paragraph.innerText = name + ": " + message;
        allMessages.appendChild(paragraph); 
    }

}