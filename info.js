function password()
{
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(document.pswd.value.match(pass))
    {
        return true;
    }
    else
    {
        alert("Match the formatting")
        return false;
    }
}


function rePassword()
{
    var FP = document.signup.pswd.value;
    var RP = document.signup.repswd.value;

    if(FP == RP)
    {
        return true;
    }
    else
    {
        alert("Password don't match! Please try again");
        return false;
    }
}
function Username()
{
    var u = document.signup.uName.value;
    if(u=="")
    {
        alert("Enter a username");
        document.signup.uName.focus();
        return false;
    }else if(!u[0].upper())
    {
        return false;
    }else if(u.length > 6)
    {
        alert("There must be atleast 6 characters");
        document.signup.uName.select();
        return false;
    }
    return true;
}

function formValid()
{
    clearErrors();
    return password(input) && rePassword() && Username();
}
