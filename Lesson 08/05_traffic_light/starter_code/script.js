// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// when you click stop, switch class to red

// when you click slow, switch class to yellow

// when you click go, switch class to green
function turnOff(){
    document.querySelector("#stopLight").classList.remove("stop");
    document.querySelector("#slowLight").classList.remove("slow");
    document.querySelector("#goLight").classList.remove("go");
}

function stopLight(){
    document.getElementById('stopLight').classList.add('red');
    document.getElementById('slowLight').classList.remove('yellow');
    document.getElementById('goLight').classList.remove('green');
}

function slowLight(){
    document.getElementById('stopLight').classList.remove('red');
    document.getElementById('slowLight').classList.add('yellow');
    document.getElementById('goLight').classList.remove('green');
}

function goLight(){
    document.getElementById('stopLight').classList.remove('red');
    document.getElementById('slowLight').classList.remove('yellow');
    document.getElementById('goLight').classList.add('green');
}

document.getElementById('stopButton').addEventListener('click', stopLight);
document.getElementById('slowButton').addEventListener('click', slowLight);
document.getElementById('goButton').addEventListener('click', goLight);