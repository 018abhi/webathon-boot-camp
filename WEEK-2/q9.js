let number = prompt("Enter a number: ");
number = parseFloat(number);
function checkprime(num) {
    if(num <= 1 ){
        console.log("No it is not a prime");
    }
    for (let  i = 2 ; i <= Math.sqrt(num) ; i++){
    if(num  % i ===  0){
        return "No it is not a prime number" ;
    }
};
return "Yes it is a prime number";
    

};
console.log(checkprime(number));