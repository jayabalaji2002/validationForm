const username = document.getElementById('userName');
const email = document.getElementById('email');
const pswrd = document.getElementById('pswrd');
const pswrdAgain = document.getElementById('pswrd-again');
const form = document.getElementById('form');

form.addEventListener('submit',e =>{
    e.preventDefault();

    validateForm();
})

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
                                            
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}



let validateForm = () =>{
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pswrdValue = pswrd.value.trim();
    const pswrdAgainValue = pswrdAgain.value.trim();

    if(userNameValue === '')
    {
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email ID is Required');
    }
    else{
        setSuccess(email);
    }

    if(pswrdValue === ''){
        setError(pswrd,"Password is Required!");
    }
    else if(pswrdValue.length<8){
        setError(pswrd,"Password must be atleast 8 Character");
    }
    else{
        setSuccess(pswrd);
    }

    if(pswrdAgainValue === ''){
        setError(pswrdAgain,"Please Type Confirm Password");
    }else{
        if(pswrdAgainValue != pswrdValue){
            setError(pswrdAgain,"Password is not equal");
        }
        else{
            setSuccess(pswrdAgain);
        }
    }
}
