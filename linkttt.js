
var linkX = "X";
var zeldaO = "O";
var turn = linkX

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
    var targetBox = event.target
    console.log(targetBox)
    if (targetBox.textContent == '' && turn == linkX){
        targetBox.classList.toggle('link');
         targetBox.textContent = "X";
    } else if (targetBox.textContent == '' && turn == zeldaO){ 
        targetBox.classList.toggle('zelda');
         targetBox.textContent = "0";
        }
 changeTurn()
    })

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

b0 = document.querySelector('#b0').textContent
b1 = document.querySelector('#b1').textContent
b2 = document.querySelector('#b2').textContent
b3 = document.querySelector('#b3').textContent
b4 = document.querySelector('#b4').textContent
b5 = document.querySelector('#b5').textContent
b6 = document.querySelector('#b6').textContent
b7 = document.querySelector('#b7').textContent
b8 = document.querySelector('#b8').textContent


// // Set winning Combinations 
winCombo = [
    [b0, b1, b2],
    [b0, b3, b6],
    [b0, b4, b8],
    [b1, b4, b7],
    [b2, b5, b8],
    [b2, b4, b6],
    [b3, b4, b5],
    [b6, b7, b8],
]






