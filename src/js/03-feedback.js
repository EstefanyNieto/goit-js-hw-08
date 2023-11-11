const form = document.querySelector(".feedback-form");

const LOCAL_STORAGE_KEY = "feedback-form-state";

let data = {}

const collectData = () => {
    try{
        let formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(!formData){
            return
        }
        data = formData;
        form.email.value = data.email;
        form.message.value = data.message;
    }
    catch (error){
        console.log(error.message);
    }
}

const onFormInput = () => {
    const {email, message} = form.elements;
    data.email = email.value;
    data.message = message.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

}

const onFormSubmit = (event) => {
    event.preventDefault();
    const {email, message} = event.target.elements;
    if(email.value === "" || message.value === ""){
        return alert ("The form must be filled out!")
    }else{
        console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
        event.target.reset();
        localStorage.removeItem(LOCAL_STORAGE_KEY)
    }

}

collectData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput)
