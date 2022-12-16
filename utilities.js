let ressourcesFolder = "Cards";
let suits = {
    pique:"pique",
    coeur:"coeur",
    carreau:"carreau",
    trefle:"trefle"
};

let values = {
    as:1,
    valet:11,
    dame:12,
    roi:13,
    joker:14
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Number(Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomCard(isFaceUp) {
    let suit = getRandomInt(0, 3);
    let value = getRandomInt(1, 13);
    switch (suit) {
        case 0:
            return new Card(suits.pique, value,isFaceUp);
        case 1:
            return new Card(suits.coeur, value,isFaceUp);
        case 2:
            return new Card(suits.carreau, value,isFaceUp);
        case 3:
            return new Card(suits.trefle, value,isFaceUp);
    }
}

class Card {
    constructor(suit, value,isFaceUp=false) {
        this.suit = suit;
        this.value = value;
        this.isFaceUp = isFaceUp;
        this.id = 0;
        
        this.refreshImage();
    }

    // Méthode pour obtenir la valeur textuelle de la carte
    getName() {
        let value = "";

        switch (this.value) {
            case 1:
                value = "As";
                break;
            case 11:
                value = "Valet";
                break;
            case 12:
                value = "Dame";
                break;
            case 13:
                value = "Roi";
                break;
            default:
                value = this.value;
                break;
        }

        return `${value} de ${this.suit}`;
    }

    // Méthode pour retourner la carte
    flip() {
        this.isFaceUp = !this.isFaceUp;
        this.refreshImage();
    }
    refreshImage(){
        let value = "";
        switch (this.value) {
            case 11:
                value = "Valet";
                break;
            case 12:
                value = "Dame";
                break;
            case 13:
                value = "Roi";
                break;
            default:
                value = this.value;
                break;
        }
        this.image = `${ressourcesFolder}/` + (this.isFaceUp ? `${this.suit}/${value}.png` : "Back.png");
    }
    toHTML(){
        let html = document.createElement("img");
        html.src = this.image;
        html.id = this.id;
        return html;
    }
}

class Memory {
    constructor(rows, cols) {
        this.cardsCount = 0;
        this.data = [];

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                const newCard = getRandomCard(true);
                newCard.id = "c" + this.cardsCount++;
                row.push(newCard);
            }
            this.data.push(row);
        }
    }
    toHTML(){
        const table = document.createElement("table");

        this.data.forEach((row) => {
            const tr = document.createElement("tr");
            row.forEach((card) => {
                const td = document.createElement("td");
                td.append(card.toHTML());
                tr.append(td);
            });
            table.append(tr);
        });

        return table;
    }
}