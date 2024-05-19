
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var lastNumber = -1; 

function get() {
    var x;

    do {
        x = getRndInteger(0, 4);
    } while (x === lastNumber);
    
    lastNumber = x; 
    
    if (x == 0) {
        document.getElementById("demo").innerHTML = "<p>Be the change that you wish to see in the world.</p>";
    } else if (x == 1) {
        document.getElementById("demo").innerHTML = "<p>If you tell the truth, you don't have to remember anything.</p>";
    } else if (x == 2) {
        document.getElementById("demo").innerHTML = "<p>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>";
    } else if (x == 3) {
        document.getElementById("demo").innerHTML = "<p>In three words I can sum up everything I've learned about life: it goes on.</p>";
    } else if (x == 4) {
        document.getElementById("demo").innerHTML = "<p>A friend is someone who knows all about you and still loves you.</p>";
    }
}
