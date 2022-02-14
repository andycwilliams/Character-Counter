// Get the Sidebar
// const mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
// const overlayBg = document.getElementById("myOverlay");

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

// ----------------------------------------------------------------

const checkText = () => {
  // const finalCount = `Your text contains:`;
  // document.getElementById("finalCount").innerHTML = finalCount;
  const userText = document.getElementById("userText").value;
  // const countLetters = userText.replace(/\s+/g, "").length;
  // const finalCount = `Your text contains:`;
  // const characterTotal = document.getElementById("characterTotal");

  if (userText === "") {
    console.log("Please enter some text.");
  }

  if (document.getElementById("letterCheck").checked) {
    const countLetters = "";
    // finalCount.innerHTML = `${countLetters} letters.`;
    // return countLetters;
    if (countLetters > 0) {
      console.log(`${countLetters} letters.`);
    } else {
      console.log("No letters detected.");
    }
  }
  if (document.getElementById("numberCheck").checked) {
    const countNumbers = "";
    if (countNumbers > 0) {
      console.log(`${countNumbers} numbers.`);
    } else {
      console.log("No numbers detected.");
    }
  }
  if (document.getElementById("characterCheck").checked) {
    const countCharacters = userText.replace(/\s+/g, "").length;
    if (countCharacters > 0) {
      console.log(`${countCharacters} characters.`);
    } else {
      console.log("No characters detected.");
    }
    // finalCount.innerHTML = `${countCharacters} characters.`;
    return countCharacters;
  }
  if (document.getElementById("specialCharCheck").checked) {
    const countSpecialCharacters = "";
    console.log(`${countSpecialCharacters} special characters.`);
  }
  if (document.getElementById("wordCheck").checked) {
    const countWords = "";
    console.log(`${countWords} words.`);
  }
  if (document.getElementById("sentenceCheck").checked) {
    const countSentences = "";
    console.log(`${countSentences} sentences.`);
  }
  // const joinedUserArr = userArr.join("");
  // const userArrLength = joinedUserArr.length;

  // let result = "";
  // for (i = 0; i < getCharCount; i++) {
  //   result += joinedUserArr.charAt(Math.floor(Math.random() * userArrLength));
  // }

  // const finalCount = `Your text contains: \n ${countLetters} letters. ${countNumbers} numbers. ${countCharacters} characters. ${countSpecialCharacters} special characters. ${countWords} words. ${countSentences} sentences.`;
  // document.getElementById("finalCount").innerHTML = finalCount;
  // const finalCount = `Your text contains:`;

  // characterTotal.innerHTML = userText.length + " characters";

  counterFunction();
};

const counterFunction = () => {
  const characterLimit = document.getElementById("characterLimit");
  const characterTotal = document.getElementById("characterTotal");
  const userText = document.getElementById("userText").value;

  const maxLength = 100;
  const currentLength = userText.length;
  const remainingCount = maxLength - currentLength;

  if (remainingCount < 0) {
    characterLimit.innerHTML =
      '<span style="color: red;">You have exceeded the limit of ' +
      maxLength +
      " characters</span>";
  } else {
    characterLimit.innerHTML = remainingCount + " characters remaining";
  }

  characterTotal.innerHTML = userText.length + " characters";
};

// ----------------------------------------------------------------

// const charTypeArr = {
//   // uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
//   // lowercase: ["abcdefghijklmnopqrstuvwxyz"],
//   letters: ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"],
//   numbers: ["0123456789"],
//   specialCharacters: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
// };
