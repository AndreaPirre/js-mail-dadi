btn.addEventListener("click", function () {
var btn = document.getElementById('btn');
var giocatore = Math.floor(Math.random() * 6 + 1);
var computer = Math.floor(Math.random() * 6 + 1);

if (giocatore > computer) {
    console.log("Vince il giocatore!");
} else if (computer > giocatore) {
    console.log("Vince il computer!");
} else {
    console.log("Avete pareggiato!");
}
});
