const symbols = new Array;

symbols[0] = new Object();
symbols[0] = "img/1.png";

symbols[1] = new Object();
symbols[1] = "img/2.png";

symbols[2] = new Object();
symbols[2] = "img/3.png";

symbols[3] = new Object();
symbols[3] = "img/4.png";

symbols[4] = new Object();
symbols[4] = "img/5.png";

symbols[5] = new Object();
symbols[5] = "img/6.png";

symbols[6] = new Object();
symbols[6] = "img/7.png";

symbols[7] = new Object();
symbols[7] = "img/8.png";

symbols[8] = new Object();
symbols[8] = "img/9.png";

const slots = [0, 0, 0];

document.getElementById("money");

var startingmoney = 20;

function money() {
    document.getElementById("money").innerHTML = `${startingmoney}`;
}
window.onload = money;

function DoSpin() {
    document.getElementById("winning").innerHTML = "";
    var moneys = document.getElementById("money").innerText;
    parseInt(moneys);

    var bet = document.getElementById("yourbet").value;
    parseInt(bet);

    if (bet == "") {
        bet = 1;
    } else {
        bet = parseInt(document.getElementById("yourbet").value);
    }

    if (bet > moneys) {
        alert("You don't have enough Money for this bet!")
    } else {
        moneys = moneys - bet;

        document.getElementById("money").innerHTML = moneys;

        for (i = 0; i < 3; i++) {
            slots[i] = Math.floor(Math.random() * 9);
        }

        document.getElementById("slot1").src = symbols[slots[0]];
        document.getElementById("slot2").src = symbols[slots[1]];
        document.getElementById("slot3").src = symbols[slots[2]];

        if (slots[0] == slots[1] && slots[1] == slots[2]) {
            moneys = (moneys + (bet * 13));
            var winnings = (bet * 13)
            console.log(moneys);
            document.getElementById("money").innerHTML = `${moneys}`;
            document.getElementById("winning").innerHTML = "You have won " + winnings + "$.";
        }
    }
}

