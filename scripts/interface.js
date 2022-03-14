document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{

        square.addEventListener("click", handleClick)
    })


})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("Fim de Jogo! - E o vencendor foi o jogador: " + playerTime);
        }, 10);

    };
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`

}


var btn = document.querySelector("#refresh");
    btn.addEventListener("click", function(){
    location.reload();
})

// function updateSquares() {

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != "") {
//             square.innerHTML = `<div class= "${symbol}></div>`
//         }
//     })
// }

