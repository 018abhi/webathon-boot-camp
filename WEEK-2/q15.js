
 let number = prompt("Enter a number");
number = parseFloat(number);
function checksquare(number) {
    let sqrt = Math.sqrt(number);
    if ( sqrt % 1 === 0 ) {
        return "yes it is a perfect square";

        
        
    }
    else {
        return "no it is not a perfect square";
    }

};
console.log(checksquare(number));