 
 const input = document.getElementById("input");
 const button = document.getElementById("myBtn")

 button.addEventListener("click", () => {
        const word = input.value
        function isPalindrome(word) {
 word = word.toLowerCase();
  let revStr = word.split("").reverse().join("");
  if( word !== revStr) {
      alert(`the word, ${word} is not a palindrome`)
  } else {
    alert(`the word, ${word} is a palindrome`)
  }
}
isPalindrome(word)
 })
 
 

