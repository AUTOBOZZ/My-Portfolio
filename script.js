var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');


function ValidateName(){

    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter full name';
        return false;
    }
        nameError.innerHTML = '<i class="text-success bi bi-check-lg"></i>';
        return true;

}

function ValidateEmail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
        }
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            emailError.innerHTML = 'Invalid email';
            return false;
            }
            emailError.innerHTML = '<i class="text-success bi bi-check-lg"></i>';
            return true;
}

function ValidatePhone(){
    var phone = document.getElementById('phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        return false;
        }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Enter 10 digit phone number';
        return false;
        }
    phoneError.innerHTML = '<i class="text-success bi bi-check-lg"></i>';
    return true;
}

function ValidateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var minus = required - message.length;

        if(message.length == 0){
        messageError.innerHTML = 'Message is required';
        return false;
        }
        if( minus > 0){
            messageError.innerHTML = minus + ' ' 'Charectors required'
            return false;
        }
        
        messageError.innerHTML = '<i class="text-success bi bi-check-lg"></i>' ;
        return true;

       
}
