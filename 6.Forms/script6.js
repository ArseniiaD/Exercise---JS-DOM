// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
    const input1 = document.querySelector("#firstname");
    const span1 = document.querySelector("#display-firstname");
    const typeFirstname = () => {
      span1.textContent = input1.value;
      console.log(span1.textContent);
    }
    input1.addEventListener("keyup", typeFirstname);

// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
    const input2 = document.querySelector("#age");
    const truth = document.querySelector("#a-hard-truth");
    const showTruth = () => {
      if (input2.value >= 18) {
         truth.style.visibility = "visible";
      }
      else if (input2.value < 18) {
        truth.style.visibility = "hidden";
      }
   }
input2.addEventListener("keyup", showTruth);
input2.addEventListener("click", showTruth);

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
    const pwd = document.querySelector("#pwd");
    const pwdConfirm = document.querySelector("#pwd-confirm");
    const hint = () => {
        if (pwd.value !== pwdConfirm.value && pwdConfirm.value.length || pwd.value.length < 6) {
            pwd.style.background = "red";
            pwdConfirm.style.background = "red";
        }
        else if (pwd.value === pwdConfirm.value && pwdConfirm.value.length && pwd.value.length > 6) {
            pwd.style.background = "white";
            pwdConfirm.style.background = "white";
        }
}
    pwd.addEventListener("keyup", hint);
    pwdConfirm.addEventListener("keyup", hint);

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const body = document.querySelector("body");
const select = document.querySelector("select");
const darkMode = () => {
if (select.value == "dark") {
   body.style.background = "black";
   body.style.color = "white"; 
}
else {
   body.style.background = "white";
   body.style.color = "black"; 
}
}
select.addEventListener("change", darkMode);
//(event) + event.target.value