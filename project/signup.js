const submitButton = document.querySelector("#submitButton")
const submitionName = document.querySelector("#submitionName")
const submitionEmail = document.querySelector("#submitionEmail")
const submissionNumber=document.querySelector("#submitionNumber")
const submissionAge=document.querySelector("#submitionAge")
const submissionMessage=document.querySelector("#submitionMessage")

const database = firebase.database().ref();

submitButton.addEventListener("click", onSubmit)
function onSubmit(c){
    //c.preventDefault()
    const name = submissionName.value;
    const email = submissionEmail.value;
    const number = submissionNumber.value;
    const age = submissionAge.value;
    const message = submissionMessage.value;
    const sailor = {
        name: name,
        email: email,
        number: number,
        age: age,
        message: message
    };
    database.push(sailor);
}
