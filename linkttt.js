
var linkX = "X";
var zeldaO = "O";
var turn = linkX
var gameWon = false;
var reset = document.querySelector('.nextRound')

// if (gamewon === true,) {

// }

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

var tile = document.querySelectorAll('div')
for (var i = 0; i < tile.length; i++) {   
    tile[i].addEventListener('click', function (event){
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
        targetBox.classList.toggle('link');    
    } else if (targetBox.textContent == '' && turn == zeldaO) {
        targetBox.classList.toggle('zelda');
        }
checkWin()    
changeTurn()   
})
}

var linkScoreCounter = document.querySelector('.scorecounter1')
var zeldaScoreCounter = document.querySelector('.scorecounter2')


document.querySelector('.reset').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

//  document.querySelector('.nextRound').addEventListener('click', function() {
//     if (document.querySelector('div').classList.contains("box")){
//         document.querySelector('div').classList.remove() && docu.querySelector('div').textContent == ""
        
//     }
//  }) 
  
// var tile = document.querySelectorAll('div')
// for (var i = 0; i < tile.length; i++) {  
//  document.querySelector('.nextRound').addEventListener('click', function (){ 
//         tile[i].innerHTML = "" 
//     })  

// document.querySelector('.nextRound').addEventListener('click', function (){ 
//     document.querySelectorAll('div').className == "" && tile.textContent == '';
// })  

// tile[1].addEventListener('click', function (){
//         if (tile[1].textContent == '' && turn == player1){
//             tile[1].textContent = "X"
//         } else if (tile[1].textContent == '' && turn == player2){ 
//             tile[1].textContent = 'O'z
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
    
    if (b0.classList.contains('link') && b1.classList.contains('link') && b2.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;
        
    } else if 
    (b0.classList.contains('link') && b3.classList.contains('link')&& b6.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;
        
    } else if 
    (b0.classList.contains('link') && b4.classList.contains('link') && b8.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;
        
    } else if
    (b1.classList.contains('link') && b4.classList.contains('link') && b7.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;

    } else if
    (b2.classList.contains('link') && b5.classList.contains('link') && b8.classList.contains('link')){
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;

    } else if
    (b2.classList.contains('link') && b4.classList.contains('link') && b6.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;
        
    } else if
    (b3.classList.contains('link') && b4.classList.contains('link') && b5.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;
        
    } else if
    (b6.classList.contains('link') && b7.classList.contains('link') && b8.classList.contains('link')) {
        document.querySelector('.result').innerHTML = "Link Wins!"
        gameWon = true;
        linkScoreCounter.innerHTML = parseInt(linkScoreCounter.innerHTML) + 1;
        
    } else if
    (b0.classList.contains('zelda') && b1.classList.contains('zelda') && b2.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;

    } else if 
    (b0.classList.contains('zelda') && b3.classList.contains('zelda') && b6.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;
        
    } else if 
    (b0.classList.contains('zelda') && b4.classList.contains('zelda') && b8.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;

    } else if 
    (b1.classList.contains('zelda') && b4.classList.contains('zelda') && b7.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;
        
    } else if
    (b2.classList.contains('zelda') && b5.classList.contains('zelda') && b8.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;
       
    } else if
    (b2.classList.contains('zelda') && b4.classList.contains('zelda') && b6.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;
        
    } else if
    (b3.classList.contains('zelda') && b4.classList.contains('zelda') && b5.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;
        
    } else if
    (b6.classList.contains('zelda') && b7.classList.contains('zelda') && b8.classList.contains('zelda')) {
        document.querySelector('.result').innerHTML = "Zelda Wins!"
        gameWon = true;
        zeldaScoreCounter.innerHTML = parseInt(zeldaScoreCounter.innerHTML) + 1;
        
    } else if 
    ((b0.classList.contains('link') || b0.classList.contains('zelda')) && (b1.classList.contains('link') || b1.classList.contains('zelda')) && (b2.classList.contains('link') || b2.classList.contains('zelda')) && (b3.classList.contains('link') || b3.classList.contains('zelda')) && (b4.classList.contains('link') || b4.classList.contains('zelda')) && (b5.classList.contains('link') || b5.classList.contains('zelda')) && (b6.classList.contains('link') || b6.classList.contains('zelda')) && (b7.classList.contains('link') || b7.classList.contains('zelda')) && (b8.classList.contains('link') || b8.classList.contains('zelda'))) {
            document.querySelector('.result').innerHTML = "It's a Draw!";
        }
}
reset.addEventListener('click', function(event){
    for (var i = 0; i < 9; i++){
        tile[i].classList.remove("link")
        tile[i].classList.remove("zelda")
        gameWon = false
        document.querySelector('.result').innerHTML = "";
        turn = linkX
    }
})











