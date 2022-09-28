const isPalindrome = (head) => {
let palindrome = true

  for (let i = 0; i <head.length / 2; i++) {
    if (head[i] !== head[head.length - i - 1] || head.length < 4) {
      palindrome = false
      break
    } 
  }
  return palindrome
};

console.log(isPalindrome([1, 2, 2, 1]));
console.log(isPalindrome([1, 2]));
console.log(isPalindrome([1, 1]));
console.log(isPalindrome([1, 2, 3, 4]));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('racear'));
