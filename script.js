function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}

function validateNSFW(messageText) {
    if(messageText.includes('crap')) {
        return false;
    }
    else return true;
}

function clickListener(event) {
    event.preventDefault(); //prevent from refreshing the page
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if(emailValidate(emailText) !== true) {
        console.log('The email address must contain @');
        return false;
    }
    // console.log('Email:', emailText, 'message:', messageText);

    if(validateNSFW(messageText) !== true) {
        console.log('you bad bad');
        return false;
    }
    console.log('Thanks for your response')


}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', clickListener);