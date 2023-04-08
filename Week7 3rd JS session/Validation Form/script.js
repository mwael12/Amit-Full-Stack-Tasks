// SignUp Form

// 1. Make all of the input fields mandatory to complete before the form can be submitted.
// 2. Give the &quot;User name&quot; field a required length of between 5 and 20 characters, the &quot;Phone
// number&quot; field a maximum length of 15 characters, and the &quot;Comment&quot; field a maximum
// length of 200 characters.


var userName = document.getElementById("username")
var phoneNumber = document.getElementById("phone")
var comment = document.getElementById("comment")
var button = document.querySelector("#btn")
var errorElement = document.getElementsByClassName("error")[0]
var errorMsgs = ["All Fields Are Required!", 
                "Invalid Username. Must be between 5 and 15 characters",
                "Maximum length of a comment is 200 charachters"]



btn.addEventListener("click",(e)=> {
    e.preventDefault()
    

    if (userName.value === "" || phoneNumber.value === "" || comment.value === "") {
        errorElement.textContent = errorMsgs[0]
    }else if (userName.value.length < 5 || userName.value.length >20){
        errorElement.textContent = errorMsgs[1]
    } else if ( comment.value.length > 5) {
        errorElement.textContent = errorMsgs[2]
    }
    
})

