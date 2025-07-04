 
 const input = document.getElementById("input");
 const button = document.getElementById("myBtn");
 const result = document.getElementById("result");

     function isPalindrome(word) {
 word = word.toLowerCase();
  return word === [...word].reverse().join("");
}

 button.addEventListener("click", () => {
        const word = input.value.trim();
        if (!word) return;
        
    
  const ok = isPalindrome(word);
  result.textContent = ok? `"${word}" is a palindrome` : `"${word}" is not a palindrome`
 })
 
 

