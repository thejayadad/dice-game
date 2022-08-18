

function rollDice(){
    let de1 = document.getElementById("de1");
    let de2 = document.getElementById("de2");
    let result = document.getElementById("result");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let total = d1 + d2;
    de1.innerHTML = d1;
    de2.innerHTML = d2;
    result.innerHTML = ` You rolled ${total}`;
}