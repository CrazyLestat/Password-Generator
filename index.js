// Array containing all possible characters
let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "/", "*", "-", "+", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "`", ";", "", ":", '"', "<", ">", "?", ",", ".", "/", "\\", "|", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"] 
// Random number generate for the length of the array (not including the last number of the length since arrays are 0 indexed)

// Get all relevant elements from the DOM
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let inputEl = document.querySelector("#input-el")
let backgroundChange = document.getElementsByClassName("password")

function get() {
    let userValue = inputEl.value
  let password = "";
  if (userValue <= 0) {
      for (let i = 0; i < 5; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
  }
  else {
    for (let i = 0; i < userValue; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }}
    return password;
}

function generatePass() {
    /* Remove the dots when adding a value to the input */
    for (let i = 0; i < backgroundChange.length; i++) {
    backgroundChange[i].style.background = "#273549"
    }
    /*Generate 4 random passwords to replace the existing ones*/
    let a = ""
    let b = ""
    let c = ""
    let d = ""
    a += get()
    b += get()
    c += get()
    d += get()
    /* If inputs already have a value replace that value with the one created above*/
    if(button1.value != "") {
         button1.value = a;
         button2.value = b;
         button3.value = c;
         button4.value = d;
    }
    /* If not just generate a random password */
    else {
        button1.value += get()
        button2.value += get()
        button3.value += get()
        button4.value += get()
    }
    }



function copy1() {
  button1.select();
  document.execCommand('copy')
}
function copy2() {
  button2.select();
  document.execCommand('copy')
}
function copy3() {
  button3.select();
  document.execCommand('copy')
}
function copy4() {
  button4.select();
  document.execCommand('copy')
}



