let field = document.getElementById("field");
let standard = document.getElementById("generate");
standard.addEventListener("click", generateField);
let random = document.getElementById("random");
random.addEventListener("click", makeRandom)

function generateField() {
    reset();
    var size = 10;
    var consoleBoard = "\n";
    var board = "\n";
    var teller = 0;

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            teller = teller + 1;
            if ((x + y) % 2 == 0) {
                consoleBoard += "i";
                field.innerHTML += "<div class='square white'>" + teller + "</div>";
            } else {
                consoleBoard += "#";
                field.innerHTML += "<div class='square black'>" + teller + "</div>";
            }
        }
        consoleBoard += "\n";
    }
}




function makeRandom() {
    reset();
    var size = 10;
    var consoleBoard = "\n";
    var board = "\n";
    var teller = 0;

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            teller = teller + 1;
            if ((x + y) % 2 == 0) {
                consoleBoard += "i";
                field.innerHTML += "<div class='square white'>" + teller + "</div>";
            } else {
                consoleBoard += "#";
                field.innerHTML += "<div class='square black'>" + teller + "</div>";
            }
        }
        consoleBoard += "\n";
    }

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.background = bgColor;
        }
    
    random_bg_color();
}

function reset() {
    field.innerHTML = "";
}