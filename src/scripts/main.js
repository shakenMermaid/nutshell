import newUserCreation from "./User_login/postUserFunction";
import uponClickLogin from "./User_login/fetching";
import displayMessages from"./Messages/MessageGetFunction"
import messageDisplay from "./Messages/MessageGetFunction";
import newEventCreation from "./Events/postEventFunction";

// Event Listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
newUsers.addEventListener("click", ()=> newUserCreation())
existingUserButton.addEventListener("click", ()=>{ uponClickLogin()

// Event Listener for Events
let newEvents = document.getElementById("submitEvent")
newEvents.addEventListener("click", () => newEventCreation())
})
messageDisplay()

