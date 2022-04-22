// Interfaccia smartphone
interface Smartphone {

    credito: number;
    numerochiamate: number;

    ricarica(credito: number, unaRicarica: number): void;
    chiamata(credito: number, minutiRicarica: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void;
}


class User implements Smartphone {

    
    public numerochiamate: number;
    public credito: number;

    
    constructor(_credito: number, _numerochiamate:  number) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    } 



    
    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }

    
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }

    
    public numero404():number{
        return this.credito;
    }

    
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }

    
    public azzeraChiamate():void{
        this.numerochiamate=0;
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
    console.log("---PRIMO UTENTE---")

    console.log("Numero delle chiamate"+FirstUser.getNumeroChiamate());
    console.log("Valore della carica disponibile"+FirstUser.numero404());
    FirstUser.azzeraChiamate();
    console.log("Dopo l'azzeramento delle chiamate: " + FirstUser.getNumeroChiamate());

    FirstUser.azzeraChiamate();

     //Seconduser
    console.log("---SECONDO UTENTE---")

    console.log("Numero delle chiamate"+SecondUser.getNumeroChiamate());
    console.log("Valore della carica disponibile"+SecondUser.numero404());
    SecondUser.azzeraChiamate();
    console.log("Dopo l'azzeramento delle chiamate: " + SecondUser.getNumeroChiamate());

    //Thirduser
    console.log("---TERZO UTENTE---")

    console.log("Numero delle chiamate"+ThirdUser.getNumeroChiamate());
    console.log("Valore della carica disponibile"+ThirdUser.numero404());
    ThirdUser.azzeraChiamate();
    console.log("Dopo l'azzeramento delle chiamate: " + ThirdUser.getNumeroChiamate());

































