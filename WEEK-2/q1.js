
let total = 0; 
let prices = prompt("enter thr amount of items here spesrated by the commas");
let pricesarray = prices.split(',').map(price =>  parseFloat(price.trim()));
for (const price of pricesarray) {
    total += price ;
    
    
};

console.log("Total of bill is " + total);