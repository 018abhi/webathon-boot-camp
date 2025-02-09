let number = prompt("Enter a number to check it is palindrome or not");
 

function check(number) {
    let str = number.toString();
    let reversestr = str.split('').reverse('').join('');
    if (str === reversestr) {
        console.log("yes it is a palindrome");
    }else {
        console.log(" No it is not a palindrome");
    }
};
console.log(check(number));