
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  
  const signUpBtn = document.querySelector("#signupText");
  
  signUpBtn.addEventListener('click',function(){
    console.log("signuop btn clicked")
    openSignUpForm()
  })
  
  function openSignUpForm(){
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myFormSignUp").style.display = "block"
  }
  