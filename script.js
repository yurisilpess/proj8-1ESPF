let p1 = prompt("Enter your NAME");
let p2 = prompt("Enter your POWER");
let p3 = prompt("Enter the name of your VILLAIN");
let p4 = prompt("Enter a LOCATION");
let msg = document.createElementbyID("msg");

msg.innerHTML = `hello ${p1}, your power is ${p2} and you will face-off against ${p3} at ${p4}!`
