const submitButton = document.querySelector("#submitButton")
const submissionName = document.querySelector("#submitionName")
const submissionEmail = document.querySelector("#submitionEmail")
const submissionNumber=document.querySelector("#submitionNumber")
const submissionMessage=document.querySelector("#submitionMessage")

const database = firebase.database().ref();

submitButton.addEventListener("click", onSubmit)
function onSubmit(c){
    const name = submissionName.value;
    const email = submissionEmail.value;
    const number = submissionNumber.value;
    const message = submissionMessage.value;
    const sailor = {
        NAME: name,
        EMAIL: email,
        NUMBER: number,
        MESSAGE: message
    };
    database.push(sailor);
    document.location.href = "Names.html"
}
