let finalCount = document.getElementById("finalCount");

const checkText = () => {
  const userText = document.getElementById("userText").value;
  let p = document.createElement("p");
  p.innerText = `This text contains...`;
  finalCount.appendChild(p);

  if (userText === "") {
    console.log("Please enter some text.");
  } else {
    // LETTERS
    if (document.getElementById("letterCheck").checked) {
      const lowercaseUserText = userText.toLowerCase();
      const allLetters = "abcdefghijklmnopqrstuvwxyz";
      let letter;
      let count = 0;

      for (let i = 0; i < lowercaseUserText.length; i++) {
        letter = lowercaseUserText.charAt(i);
        if (allLetters.indexOf(letter) > -1) {
          count = count + 1;
        }
      }

      if (count > 0) {
        console.log(`${count} letters.`);
        let li = document.createElement("li");
        li.innerText = ``;
        li.innerText = `${count} letters.`;
        finalCount.appendChild(li);
      } else {
        console.log("No letters detected.");
      }
    }

    // NUMBERS
    if (document.getElementById("numberCheck").checked) {
      const numbers = "0123456789";
      let number;
      let count = 0;

      for (let i = 0; i < userText.length; i++) {
        number = userText.charAt(i);
        if (numbers.indexOf(number) > -1) {
          count = count + 1;
        }
      }

      if (count > 0) {
        console.log(`${count} numbers.`);
        let li = document.createElement("li");
        li.innerText = `${count} numbers.`;
        finalCount.appendChild(li);
      } else {
        console.log("No numbers detected.");
      }
    }

    // SPECIAL CHARACTERS
    if (document.getElementById("specialCharCheck").checked) {
      const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      let specChar;
      let count = 0;

      for (let i = 0; i < userText.length; i++) {
        specChar = userText.charAt(i);
        if (specialCharacters.indexOf(specChar) > -1) {
          count = count + 1;
        }
      }

      if (count > 0) {
        console.log(`${count} special characters.`);
        let li = document.createElement("li");
        li.innerText = `${count} special characters.`;
        finalCount.appendChild(li);
      } else {
        console.log("No special characters detected.");
      }
    }

    // WORDS
    if (document.getElementById("wordCheck").checked) {
      const countWords = "";
      console.log(`${countWords} words.`);
    }

    // SENTENCES
    if (document.getElementById("sentenceCheck").checked) {
      const countSentences = "";
      console.log(`${countSentences} sentences.`);
    }

    // CHARACTERS
    if (document.getElementById("characterCheck").checked) {
      const countCharacters = userText.replace(/\s+/g, "").length;
      if (countCharacters > 0) {
        console.log(`${countCharacters} characters.`);
        let li = document.createElement("li");

        li.innerText = `${countCharacters} characters.`;
        finalCount.appendChild(li);
      } else {
        console.log("No characters detected.");
      }
    }
  }
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

counterFunction();

// ----------------------------------------------------------------

//   specialCharacters: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
