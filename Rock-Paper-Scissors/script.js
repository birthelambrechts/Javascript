var tie=0
var wins=0
var lose =0

let play = document.getElementById("play");
        play.addEventListener("click", playGame);
        let players = document.getElementById("players");
        players.addEventListener("change", changeGame);
        let p1choice = document.getElementById("p1choice"); //option p1
        let p2choice = document.getElementById("p2choice"); //option p2
        let choices = [ "rock", "paper", "scissors"]; //dropdown
        for (choice of choices) {
            let element = document.createElement("option");
            element.value = choice;
            element.innerHTML = choice;
            p1choice.append(element); //like innerHtml P1
        }
        for (choice of choices) {
            let element = document.createElement("option");
            element.value = choice;
            element.innerHTML = choice;
            p2choice.append(element); //like innerHtml P2
        }

        function playGame(event) {
            let p1value = p1choice.value; //welke van de drie
            let p2value;

            if (p2choice.disabled === false) {
                p2value = p2choice.value; //welke van de drie
            } else {
                p2value = choices[Math.floor(Math.random() * choices.length)]; //random keuze
            }

            document.getElementById("result").innerHTML = compare(p1value, p2value);

        }

        function changeGame(event) {
            if (players.value === "1") { //dropdown choices
                p2choice.disabled = true;
            } else {
                p2choice.disabled = false;
            }
        }

        function compare(p1h, p2h){ 
        if (p1h === p2h) {
            document.getElementById("tie").innerHTML = ++tie;
            return("Tie!");
        } else if (p1h === choices[1] && p2h === choices[0]) {
            document.getElementById("wins").innerHTML = ++wins;
            return("Computer chose rock, you win!");
        } else if (p1h === choices[0] && p2h === choices[2]) {
            document.getElementById("wins").innerHTML = ++wins;
            return("Computer chose scissors, you win!");
        } else if (p1h === choices[2] && p2h === choices[0]) {
            document.getElementById("lose").innerHTML = ++lose;
            return("Computer chose rock, you lose!");
        } else if (p1h === choices[0] && p2h === choices[1]) {
            document.getElementById("lose").innerHTML = ++lose;
            return("Computer chose paper, you lose!");
        } else if (p1h === choices[1] && p2h === choices[2]) {
            document.getElementById("lose").innerHTML = ++lose;
            return("Computer chose scissors, you lose!");
        } else if (p1h === choices[2] || p2h === choices[1]) {
            document.getElementById("wins").innerHTML = ++wins;
            return("Computer chose paper, you win!");
        } else {
            return("Invalid input, please try again. U suck");
        }
    }
    
   