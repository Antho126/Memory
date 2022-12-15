function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Number(Math.floor(Math.random() * (max - min + 1)) + min);
}
let cardCode = {
    Ten:"0", //Dix
    Ace:"1", //As
    Jack: "j", //Valet
    Queen: "q", //Dame
    King: "k", //Roi
    Spades: "s", //Pique
    Clubs: "c", //Trèfle
    Hearts: "h", //Coeur
    Diamonds: "d", //Carreau
    Front:"f", //Recto
    Back:"b" //Verso
}

class Card {
    constructor(color,value,isFront){
        this.color = String(color);
        this.value = String(value);
        if(typeof isFront == "boolean"){
            this.isFront = isFront;
        } else {
            this.isFront = (isFront == "f" ? true : false);
        }
    }
    cloneOf(card){
        this.color = card.color;
        this.value = card.value;
        this.isFront = card.isFront;
    }
    getCode(){
        return this.color+this.value+(this.isFront ? "f" : "b");
    }
    fromCode(code){
        this.color = code[0];
        this.value = code[1];
        this.isFront = (code[2] == "f" ? true : false);
    }
    toString(){
        let str = "";
        switch (this.value){
            case cardCode.Jack:
                str += "Valet";
                break;
            case cardCode.King:
                str += "Roi";
                break;
            case cardCode.Queen:
                str += "Dame";
                break;
            case cardCode.Ten:
                str += "10";
                break;
            case cardCode.Ace:
                str += "As";
                break;
            default:
                str += this.value;
                break;
        }
        str += " de ";
        switch (this.color){
            case cardCode.Spades:
                str += "Pique";
                break;
            case cardCode.Clubs:
                str += "Trèfle";
                break;
            case cardCode.Diamonds:
                str += "Carreau";
                break;
            case cardCode.Hearts:
                str += "Coeur";
                break;
        }
        str += " " + (this.isFront ? "Recto" : "Verso");
        return str;
    }
}

let e = new Card(cardCode.Spades,cardCode.Ace,cardCode.Front);
let i = new Card(cardCode.Clubs,cardCode.Ten,cardCode.Front);
