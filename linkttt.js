
var linkX = "X";
var zeldaO = "O";
var turn = linkX
var gameWon = false;

function changeTurn() {
    if (turn === linkX){
        return turn = zeldaO
    } else {
        return turn = linkX
    };
};
// var tile = document.querySelectorAll('.box')
// for (i = 0; i < 9; i++)
//     tile[i].addEventListener('click', function (){
//     if (tile[i].textContent == '' && turn == player1){
//         tile[i].textContent = "X"
//     } else if (tile[i].textContent == '' && turn == player2){ 
//         tile[i].textContent = 'O'
//          }
// changeTurn()
//     })
// var tile = document.querySelectorAll('.box')

addEventListener('click', function (event){
    console.log("Game Won", gameWon);
		if (gameWon) {
	    console.log("STOP");
        event.preventDefault();
        return false;
    }
    var targetBox = event.target
    if (targetBox.textContent!= '') 
        event.preventDefault();
    if (targetBox.textContent == '' && turn == linkX){
        targetBox.textContent = "X";
        targetBox.classList.toggle('link');    
    } else if (targetBox.textContent == '' && turn == zeldaO) {
        targetBox.textContent = "O"; 
        targetBox.classList.toggle('zelda');
        }
checkWin()
changeTurn()
});

document.querySelector('.btm').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

// tile[1].addEventListener('click', function (){
//         if (tile[1].textContent == '' && turn == player1){
//             tile[1].textContent = "X"
//         } else if (tile[1].textContent == '' && turn == player2){ 
//             tile[1].textContent = 'O'
//         }
// changeTurn()
//     })

//  tile[2].addEventListener('click', function (){
//         if (tile[2].textContent == '' && turn == player1){
//                 tile[2].textContent = "X"
//         } else if (tile[2].textContent == '' && turn == player2){ 
//                 tile[2].textContent = 'O'
//         }
// changeTurn()
//     })
               
   
// tile[3].addEventListener('click', function (){
//         if (tile[3].textContent == '' && turn == player1){
//                 tile[3].textContent = "X"
//         } else if (tile[3].textContent == '' && turn == player2){ 
//                 tile[3].textContent = 'O'
//             }
// changeTurn()
//     })
        

// tile[4].addEventListener('click', function (){
//         if (tile[4].textContent == '' && turn == player1){
//                 tile[4].textContent = "X"
//         } else if (tile[4].textContent == '' && turn == player2){ 
//                 tile[4].textContent = 'O'
//             }
// changeTurn()
//     })
        

// tile[5].addEventListener('click', function (){
//         if (tile[5].textContent == '' && turn == player1){
//                 tile[5].textContent = "X"
//         } else if (tile[5].textContent == '' && turn == player2){ 
//                 tile[5].textContent = 'O'
//             }
// changeTurn()
//     })
        

// tile[6].addEventListener('click', function (){
//         if (tile[6].textContent == '' && turn == player1){
//                 tile[6].textContent = "X"
//         } else if (tile[6].textContent == '' && turn == player2){ 
//                 tile[6].textContent = 'O'
//             }
// changeTurn()
//     })
        

// tile[7].addEventListener('click', function (){
//         if (tile[7].textContent == '' && turn == player1){
//                 tile[7].textContent = "X"
//         } else if (tile[7].textContent == '' && turn == player2){ 
//                 tile[7].textContent = 'O'
//         }
//  changeTurn()
//     })

// tile[8].addEventListener('click', function (){
//         if (tile[8].textContent == '' && turn == player1){
//                 tile[8].textContent = "X"
//         } else if (tile[8].textContent == '' && turn == player2){ 
//                 tile[8].textContent = 'O'
//             }
// changeTurn()
//     })
        

// //assigning DOM to the playing board


// var winningCombo = [
//     [b0, b1, b2],
//     [b0, b3, b6],
//     [b0, b4, b8],
//     [b1, b4, b7],
//     [b2, b5, b8],
//     [b2, b4, b6],
//     [b3, b4, b5],
//     [b6, b7, b8],
// ]

// function allChecked(indexes) {
//     return indexes.every(
//       function(indexes){
//         if(winningCombo[indexes].textContent === "X"){
//           return winningCombo[indexes];
//         }
//         else if(winningCombo[indexes].textContent === "O"){
//           return winningCombo[indexes];
//         }
  
//       }
//     )
//   }

var b0 = document.querySelector('#b0')
var b1 = document.querySelector('#b1')
var b2 = document.querySelector('#b2')
var b3 = document.querySelector('#b3')
var b4 = document.querySelector('#b4')
var b5 = document.querySelector('#b5')
var b6 = document.querySelector('#b6')
var b7 = document.querySelector('#b7')
var b8 = document.querySelector('#b8')

function checkWin(){
    
    if (b0.textContent == "X" && b1.textContent == "X" && b2.textContent == "X" ) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if 
    (b0.textContent == "X" && b3.textContent == "X" && b6.textContent == "X") {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if 
    (b0.textContent == "X" && b4.textContent == "X" && b8.textContent == "X") {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if
    (b1.textContent == "X" && b4.textContent == "X" && b7.textContent == "X") {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if
    (b2.textContent == "X" && b5.textContent == "X" && b8.textContent == "X"){
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if
    (b2.textContent == "X" && b4.textContent == "X" && b6.textContent == "X") {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if
    (b3.textContent == "X" && b4.textContent == "X" && b5.textContent == "X") {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if
    (b6.textContent == "X" && b7.textContent == "X" && b8.textContent == "X") {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        
    } else if
    (b0.textContent == "O" && b1.textContent == "0" && b2.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        
    } else if 
    (b0.textContent == "O" && b3.textContent == "O" && b6.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        
    } else if 
    (b0.textContent == "O" && b4.textContent == "O" && b8.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;

    } else if 
    (b1.textContent == "O" && b4.textContent == "O" && b7.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        
    } else if
    (b2.textContent == "O" && b5.textContent == "O" && b8.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
       
    } else if
    (b2.textContent == "O" && b4.textContent == "O" && b6.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        
    } else if
    (b3.textContent == "O" && b4.textContent == "O" && b5.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        
    } else if
    (b6.textContent == "O" && b7.textContent == "O" && b8.textContent == "O") {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        
    } else if 
    ((b0.textContent == 'X' || b0.textContent == 'O') && (b1.textContent == 'X' || b1.textContent == 'O') && (b2.textContent == 'X' || b2.textContent == 'O') && (b3.textContent == 'X' || b3.textContent == 'O') && (b4.textContent == 'X' || b4.textContent == 'O') && (b5.textContent == 'X' || b5.textContent == 'O') && (b6.textContent == 'X' || b6.textContent == 'O') && (b7.textContent == 'X' || b7.textContent == 'O') && (b8.textContent == 'X' || b8.textContent == 'O')) {
            document.querySelector('.result').innerHTML = "It's a Draw!";
            
        }
}











