const palindromeInput=document.getElementById("text-input");
const checkInput = document.getElementById("check-btn");
const output = document.getElementById("result");
let isPalindrome = "";

checkInput.addEventListener("click", () => {
  const input = palindromeInput.value
  checkPalindrome(input);
  palindromeInput.value = "";
});


const checkPalindrome = (input) => {
  if(input === ""){
    alert("Please Input a value")
  } else {
    const regex = /[\s_,.\-()\/\\]/g;
    const editedInput = input.replace(regex, "").toLowerCase();
    console.log(editedInput);
    const inputArray = [...editedInput];
    inputArray.reverse();
    const reverse = inputArray.join('');
    console.log(reverse)
    if(editedInput === reverse){
      isPalindrome = "is"
    } else{
      isPalindrome = "is not"
    }
    setOutput(input,isPalindrome);
  }
}

const setOutput = (input, isPalindrome) =>{
  const result = `${input} ${isPalindrome} a palindrome`;
  output.innerText = result;
};