let arr = prompt("enter an array");
arr = arr.split(',').map(Number);

function findlargestnumber(arr) {
    if (arr.length  === 0){
        return null ; 
    }
    let largest = arr[0];
    for (i = 0 ; i < arr.length ; i++ ){
        if (arr[i] > largest){
            largest = arr[i];
        }

    }
    return largest ;
};
let  largestnumber = findlargestnumber(arr);
console.log("largest number is " + largestnumber );
