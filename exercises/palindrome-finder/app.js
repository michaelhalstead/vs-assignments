let isPalindrome = function(str){
    let strBasic = str.toLowerCase().replace(/[^0-9a-z]/g, '');
    let reverse = str.split('').reverse().join('').toLowerCase().replace(/[^0-9a-z]/g, '');
    return strBasic === reverse;
}

isPalindrome('Star Rats!')
isPalindrome('palindrome')
isPalindrome('I madam, I made radio! So I dared! Am I mad?? Am I ??')