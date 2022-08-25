
let playerInfo = {
    name: "Kola",
    chips: 512
}

let cards = []
let sum = 0;

// this variable stores your card total to indicate if you've hit a Blackjack or not
let hasBlackJack = false;

// this variable stores your card total to indicate if you're still in or out of the game
let isAlive = false;

 let message = "";

 //displaying result message of our card
let messageEl = document.getElementById("message-el");

//"sum-el" id, saved in a variable- using querySelector
let sumEl = document.querySelector("#sum-el");

//"card-el" id, saved in a variable- using querySelector
let cardEl = document.querySelector("#card-el");

//
let playerEl = document.querySelector("#player-el");

playerEl.textContent = playerInfo.name + ":"  + " " + "$" + playerInfo.chips;

//Creating a function getRandomCard() , that always return card number 5 , and 
//Make the function the value of te firstCard, secondCard & newCard variables;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() *13) + 1;
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        
        return randomCard
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {
    // cardEl.textContent = "Cards: " + firstCard +"   "+secondCard;
    cardEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent +=  cards[i]+ " ";

    }
    sumEl.textContent ="Sum: "+ sum;    
    if (sum <= 20) {
        message ="Do you want to draw a new card?";
    }else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive=== true && hasBlackJack === false ) {

        let newPick = getRandomCard();
        sum += newPick;
        cards.push(newPick);
        // console.log(cards);
        renderGame();
    }

}







//PRACTICE ZONE BELOW


// let bj_cards = [7, 3, 9]

// for (i = 0; i < bj_cards.length ; i ++) {
//     console.log(bj_cards[i]);
// }




// let race1Time = 302;
// let race2Time = 312;

// function getFastestTime () {
//     if(race1Time < race2Time) {
//         return race1Time;
//     }else if(race2Time < race1Time) {
//         return race2Time;
//     }else {
//         return race1Time;
//     }

// }

// function getTotalRaceTime () {
//     return race1Time + race2Time;

// }

// let totalRaceTime = getTotalRaceTime() ;

// console.log(totalRaceTime);


// let randomNumber = Math.random();
// console.log(randomNumber);

//Answer: it generates numbers from 0 to 1 (but not inclusive of 1) 0.000 --> 0.99999


// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

// Now in the range 0.000 ---> 5.999

// let flooredNumber = Math.floor(3.45632);

// console.log(flooredNumber);
//positive numbers 3.4532 ==> 3 ; Negative number -3.4532 ==> -4

// let randomFlooredNumber = Math.floor((Math.random() * 6) + 1);

// console.log(randomFlooredNumber);

//1 -> 6

// function rollDice() {
//     let diceNumber = Math.floor(Math.random()* 6 ) + 1;
//     return diceNumber;
// }

// let pick = rollDice();
// console.log(pick);

//AND logical operator


// let hasSolvedChallenge = false;
// let hasHintLeft = false;

// if(hasSolvedChallenge === false && hasHintLeft ===false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution.....")
// }

//OR logical operator 

// let likesDocumentries = true;
// let likesStartUps = false;

// if (likesDocumentries || likesStartUps) {
//     recommendMovie();
// }

// function recommendMovie() {
//     console.log("Hey, check out ths new film we think you will like!")
// }

//Object

//real life e.g of an object

// let  course = {
//     title : "Learn javaScript for free",
//     lessons : 50,
//     creator : "kik",
//     length: 180,
//     level : 2,
//     isFree : true,
//     tags: ["html", "css"]
// }

// console.log(course.length);

// let airbnbCastleListing = {
//     name :" Castle in the forest",
//     guestMax: 20,
//     bedroomNumber: 7,
//     isAvailable : true,
//     guestNames: ["james", "Karen", "Kevwe", "Maro", "Usman"]

// }

// console.log(airbnbCastleListing.bedroomNumber); //7

// console.log(airbnbCastleListing.isAvailable); //true