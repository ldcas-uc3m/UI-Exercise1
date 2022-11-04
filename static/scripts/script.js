function noot() {
    $('#demo').show()
    return "noot noot"
}

/* --- FORMS --- */
// Get the modal
var login_modal = document.getElementById('popup_login');
var signup_modal = document.getElementById('popup_signup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == login_modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == signup_modal) {
    modal.style.display = "none";
  }
}



/* --- COOKIES --- */

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
  return "";
}

function test() {
  setCookie("test", "test", 1);
  console.log("noot");

  return;
}


function signUp() {
  setCookie("email", $('#signup_email')[0].value, 2);
  setCookie("psw",  $('#psw_email')[0].value, 2);
  setCookie("username",  $('#signup_username')[0].value, 2);
  setCookie("name_surname",  $('#signup_name_surname')[0].value, 2);
  setCookie("date_of_birth",  $('#signup_date_of_birth')[0].value, 2);

  document.getElementById('msg').style.display='none';

  return true;
}

function logIn(cookie) {
  exists = getCookie(cookie)
  if (exists == cookie) {
    return true;
  }
  else {

  }
}


function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
      alert("Welcome again " + user);
  } else {
      user = prompt("Please enter your name:","");
      if (user != "" && user != null) {
          setCookie("username", user, 30);
      }
  }
}

function main() {
    setCookie("username", "pipo", 1)
    console.log(getCookie("username"))
    console.log("a")
}