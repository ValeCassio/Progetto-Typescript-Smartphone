"use strict";
class User {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
let FirstUser = new User(1, 2);
FirstUser.ricarica(10);
FirstUser.chiamata(5);
let SecondUser = new User(3, 4);
SecondUser.ricarica(20);
SecondUser.chiamata(10);
let ThirdUser = new User(5, 6);
ThirdUser.ricarica(30);
ThirdUser.chiamata(15);
//Firstuser
console.log("---PRIMO UTENTE---");
console.log("Numero delle chiamate" + FirstUser.getNumeroChiamate());
console.log("Valore della carica disponibile" + FirstUser.numero404());
FirstUser.azzeraChiamate();
console.log("Dopo l'azzeramento delle chiamate: " + FirstUser.getNumeroChiamate());
FirstUser.azzeraChiamate();
//Seconduser
console.log("---SECONDO UTENTE---");
console.log("Numero delle chiamate" + SecondUser.getNumeroChiamate());
console.log("Valore della carica disponibile" + SecondUser.numero404());
SecondUser.azzeraChiamate();
console.log("Dopo l'azzeramento delle chiamate: " + SecondUser.getNumeroChiamate());
//Thirduser
console.log("---TERZO UTENTE---");
console.log("Numero delle chiamate" + ThirdUser.getNumeroChiamate());
console.log("Valore della carica disponibile" + ThirdUser.numero404());
ThirdUser.azzeraChiamate();
console.log("Dopo l'azzeramento delle chiamate: " + ThirdUser.getNumeroChiamate());
