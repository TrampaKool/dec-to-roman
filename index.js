const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanOutput = document.getElementById("roman-output");
const userNum = document.getElementById("user-num");
const errorMsg = document.getElementById("error-msg");

const inputFilter = /\./;

const alertUser = (str) => {
  /**
   * Takes a string and displays
   * it in the output box
   */
  errorMsg.innerText = str;
  errorMsg.style.display = "block";
}

const convertToRoman = (int) => {
  /**
   * Takes an integer and
   * returns a string of
   * the number in roman
   * rumerals
   */
  const table = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let str = "";

  for (let i = 0;i < 13;i++) {
    while (int >= table[i][1]) {
      str += table[i][0];
      int -= table[i][1];
    }
  }
  return str;
}

const displayOutput = (int) => {
  /**
   * Takes an integer and displays
   * it to the user below its
   * roman numerals version
   */
  romanOutput.innerText = convertToRoman(int);
  userNum.innerText = int;
}

convertBtn.addEventListener("click", () => {
  /**
   * Checks the user's input. The user
   * is alerted if the input is invalid.
   * If the input is valid the result
   * is displayed
   */
  errorMsg.style.display = "none";
  output.style.display = "block";

  let userInput = numberInput.value;

  if (inputFilter.test(userInput) || !userInput) {
    alertUser("Please enter a valid number");
    return;
  }
  userInput = parseInt(numberInput.value);

  if (userInput < 1) {
    alertUser("Please enter a number greater than or equal to 1");
  }else if (userInput > 3999) {
    alertUser("Please enter a number less than or equal to 3999");
  }else {
    displayOutput(userInput);
  }
  numberInput.value = "";
  numberInput.focus();
});