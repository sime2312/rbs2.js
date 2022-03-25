// const users = [
//     { id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false },
//     { id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true },
//     { id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false },
//     { id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true },
//     { id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false },
//     { id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true },
//     { id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false },
//     { id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false }
// ];

//     const userjose = users.find(user => user.firstName === 'Jose');
//     console.log(userjose);
//     const premiummember = users.filter(user => user.isPremiumMember === true);
//     console.log(premiummember);
//     const userLastName = users.map(users => users.lastName);
//       console.log(userLastName);
//       const Nameslogins = users.map(user => user.name + user .logins > 10);
//       console.log(Nameslogins);
//       const y = users.filter(user => user.logins > 10).map(user => user.firstName + " " + user.lastName);
// console.log(y);
// const totallogin = users.reduce((total,item) => {
 //    return total + item.logins
// }, 0)
// console.log(totallogin);

const hands = ['rock' , 'paper', 'scissors'];

 let getHands = () => {
     return hands[parseInt(Math.random()*10)%3];
 }

 let play1 = {
   name: 'Alex',
     getHands: getHands }

 let play2 = {
    name: 'Abel',
    getHands: getHands,
 }


 let play3 = {
     name: 'sime',
     getHands: getHands,
 }


 let play4 = {
     name: 'barkon',
     getHands: getHands,
 }

 const winConditions = {
    rock: 'scissors',
     paper: 'rock',
     scissors: 'paper'
 }

 let playRound = (A1, A2) => {

     let A1Hand = A1.getHands();
    let A2Hand = A2.getHands();

    console.log(A1.name, 'threw', A1Hand);
    console.log(A2.name, 'threw', A2Hand);

    if (A1Hand === A2Hand) {
       // tie
        console.log("it's a tie");
       return null;
    } else if (winConditions[A1Hand] === A2Hand) {
        // A1 wins or A2loses
        console.log(A1.name, 'wins!');
        return A1;
    } else {
       // A2 wins or A1 loses
       console.log(A2.name, 'wins!');
        return A2;
   } }
 let playGame = (player1, player2, playUntil) => {

    let player1Wins = 0;
   let player2Wins = 0;     while (player1Wins < playUntil && player2Wins < playUntil) {
      console.log('Current Score: ', player1.name, ':' ,player1Wins)
       console.log('Current Score: ', player2.name, ':' ,player2Wins)        if (!playRound(player1, player2)) {

       } else if (playRound(player1, player2) === player1) {
           player1Wins++;
       } else {
           player2Wins++;
        }
  }

     if (player1Wins === playUntil) {
         return player1;
    } else {
        return player2;
     }
 }

let playTournament = (A1,A2,A3,A4,playUntil) => {
    let winnerRound1 = playGame(A1,A3,playUntil);
    let winnerRound2 = playGame(A2,A4,playUntil);
     let tournamentWinner = playGame(winnerRound1, winnerRound2, playUntil).name;
   let winningStatement = tournamentWinner + ' is the world champion';

    return winningStatement
 }

 console.log(playTournament(play1, play2, play3, play4, 8));




