// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = "block";
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

function generatePool() {
  const getCharCount = document.querySelector("#charQuantity").value;
  const userArr = [];
  if (document.getElementById("uppercaseCheck").checked) {
    userArr.push(charTypeArr.uppercase);
  }
  if (document.getElementById("lowercaseCheck").checked) {
    userArr.push(charTypeArr.lowercase);
  }
  if (document.getElementById("numbersCheck").checked) {
    userArr.push(charTypeArr.numbers);
  }
  if (document.getElementById("specialCharCheck").checked) {
    userArr.push(charTypeArr.specialCharacters);
  }

  const joinedUserArr = userArr.join("");
  const userArrLength = joinedUserArr.length;

  let result = "";
  for (i = 0; i < getCharCount; i++) {
    result += joinedUserArr.charAt(Math.floor(Math.random() * userArrLength));
  }

  document.getElementById("finalPassword").innerHTML = result;
}
