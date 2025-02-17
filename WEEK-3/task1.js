let currentLight = 'red';


function switchLight() {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    redLight.style.backgroundColor = 'grey';
    yellowLight.style.backgroundColor = 'grey';
    greenLight.style.backgroundColor = 'grey';

    if (currentLight === 'red') {
        redLight.style.backgroundColor = 'red';
        currentLight = 'yellow';
    } else if (currentLight === 'yellow') {
        yellowLight.style.backgroundColor = 'yellow';
        currentLight = 'green';
    } else if (currentLight === 'green') {
        greenLight.style.backgroundColor = ' rgb(76, 248, 87)';
        currentLight = 'red';
    }
   
    }
    
    
setInterval(switchLight, 3000); 
