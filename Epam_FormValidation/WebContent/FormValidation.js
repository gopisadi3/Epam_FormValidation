
function validate_Uname() {
    var uname = document.getElementById("uname").value;
    if (isAvailable(uname)) {
        document.getElementById('unamemsg').innerHTML = 'Username invalid';
    }
}
function isAvailable(uname) {
    return true;
}
function validate_Email() 
{
    var email       = document.getElementById("email").value;
    var emailRegex  = new RegExp('[a-zA-A_.0-9]+@[a-zA-Z]*.[a-zA-A]+');

    if (!emailRegex.test(email)) 
    {
        document.getElementById('emailmsg').innerHTML = 'Please enter  a valid email';
    } 
    else 
    {
        document.getElementById('emailmsg').innerHTML = '';
    }
}

function validate_Pass() 
{
    var pass        = document.getElementById("pass").value;
    var lenRegex    = new RegExp('[a-zA-Z0-9#$%^&@!*]{8,}');
    var specRegex   = new RegExp('.*[!@#$%^&*].*');
    var capRegex    = new RegExp('.*[A-Z].*');
    var passMsg = document.getElementById('passmsg');
    if (!lenRegex.test(pass))
    {
        passMsg.innerHTML = 'Password should be min 8 characters long';
    }
    else if (!specRegex.test(pass))
    {
        passMsg.innerHTML = 'Password should contain atleast 1 special character';
    } 
    else if (!capRegex.test(pass))
    {
        passMsg.innerHTML = 'Password should contain atleast 1 capital letter';
    } 
    else
    {
        passMsg.innerHTML = '';
    }
}

function validate_ConPass()
{
    var pass    = document.getElementById('pass').value;
    var conPass = document.getElementById('con_pass').value;

    if (pass != conPass) {
        document.getElementById('con_passmsg').innerHTML = 'Confirm Password Not Matched';
    }
    else
    {
        document.getElementById('con_passmsg').innerHTML = '';
    }
}

function validate_Form() {
    var unameMsg    = document.getElementById('unamemsg').innerHTML;
    var emailMsg    = document.getElementById('emailmsg').innerHTML;
    var passMsg     = document.getElementById('passmsg').innerHTML;
    var conPassMsg  = document.getElementById('con_passmsg').innerHTML;
    if (unameMsg == 'Username Invalid' && emailMsg == '' && passMsg == '' && conPassMsg == '') {
        alert('Form  Successfully submitted');
        return true;
    }
    alert('Form Validation failed');
    return false;
}