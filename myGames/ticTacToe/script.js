let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let head = document.getElementById('heading');
let win = 1;

// showing / hiding Player name message
// setTimeout(() => {
//     document.getElementById('messagePlayerName').style.display='block';
// },3000);
// setTimeout(() => {
//     document.getElementById('messagePlayerName').style.display='none';
// },10000);
setInterval(() => {
    document.getElementById('messagePlayerName').style.display = 'block';
}, 4001);
var endMsg = setInterval(() => {
    document.getElementById('messagePlayerName').style.display = 'none';
}, 8000);

// Taking players name 
function player1() {
    p1.innerHTML = prompt("Enter your name ", 'Player1')
}
function player2() {
    p2.innerHTML = prompt("Enter your name ", 'Player2')
}

let color;
function p1f(move) {


    p1.style.background = 'green';
    p2.style.background = 'gainsboro';
    mark = 'O';
    color = 'rgb(189, 189, 189)';
    // alert("");
}
function p2f(move) {

    p1.style.background = 'gainsboro';
    p2.style.background = 'green';
    mark = 'X'
    color = 'rgb(255, 245, 129)';
}
function toggle(select) {
    if (select == 10) {
        console.log("Game over");
        // head.style.fontSize='2.2rem';
        head.innerHTML = "Game Over";
    }
    else if (select % 2 == 1) {
        p1f(select);
        console.log(`p1 move ${move} --> O`);

    }
    else if (select % 2 == 0) {
        p2f(select);
        console.log(`p2 move ${move} --> X`);
    }

}


// HTML element and id modify
// let mark='O';
let move = 1;
toggle(move);
let span = document.getElementsByClassName('sing');

let box1 = document.querySelector('#position-1>span');
function boxHTML1() {
    if (box1.innerHTML == 1 && win) {

        box1.innerHTML = mark;
        document.getElementById('position-1').style.background = color;
        span[0].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box2 = document.querySelector('#position-2>span');
function boxHTML2() {
    if (box2.innerHTML == 2 && win) {
        document.getElementById('position-2').style.background = color;
        box2.innerHTML = mark;
        span[1].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box3 = document.querySelector('#position-3>span');
function boxHTML3() {
    if (box3.innerHTML == 3 && win) {
        document.getElementById('position-3').style.background = color;
        box3.innerHTML = mark;
        span[2].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box4 = document.querySelector('#position-4>span');
function boxHTML4() {
    if (box4.innerHTML == 4 && win) {
        document.getElementById('position-4').style.background = color;
        box4.innerHTML = mark;
        span[3].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box5 = document.querySelector('#position-5>span');
function boxHTML5() {
    if (box5.innerHTML == 5 && win) {
        document.getElementById('position-5').style.background = color;
        box5.innerHTML = mark;
        span[4].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box6 = document.querySelector('#position-6>span');
function boxHTML6() {
    if (box6.innerHTML == 6 && win) {
        document.getElementById('position-6').style.background = color;
        box6.innerHTML = mark;
        span[5].style.opacity = 1;
        // box6.style.fontSize
        move++;
        toggle(move);
        GameResult();
    }
}
let box7 = document.querySelector('#position-7>span');
function boxHTML7() {
    if (box7.innerHTML == 7 && win) {
        document.getElementById('position-7').style.background = color;
        box7.innerHTML = mark;
        span[6].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box8 = document.querySelector('#position-8>span');
function boxHTML8() {
    if (box8.innerHTML == 8 && win) {
        document.getElementById('position-8').style.background = color;
        box8.innerHTML = mark;
        span[7].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
let box9 = document.querySelector('#position-9>span');
function boxHTML9() {
    if (box9.innerHTML == 9 && win) {
        document.getElementById('position-9').style.background = color;
        box9.innerHTML = mark;
        span[8].style.opacity = 1;
        move++;
        toggle(move);
        GameResult();
    }
}
function Gvalidity() {

}





// function delay() {
//     let limit=setInterval(() => {


//         runner(select,limit);
//         select++;
//     }, 2000);
// }
// // delay();
// let select=1;
// function runner(select,limit) {
//    // console.log(`delay ${select} ${limit}`);
//     if (select==10) {
//         clearInterval(limit);
//     } 
//     else if (select %2==1) {

//         p1f(select);

//     }
//     else if(select %2==0){

//         p2f(select);
//     }

// }


// Evaluation of the game

let x = 0;
let winner;
// console.log(box[x]);
function GameResult() {
    let box = [box1.innerHTML, box2.innerHTML, box3.innerHTML, box4.innerHTML, box5.innerHTML, box6.innerHTML, box7.innerHTML, box8.innerHTML, box9.innerHTML];

    // if (box[0]==box[1] && box[1]==box[2]) {
    // alert(` Winner is ${box2.innerHTML}`);
    // console.log('hhhhhh',box2.innerHTML);
    // } else {
    //     console.log("continue");
    // }

    for (let i = 0, j = 0, k = 0; i < box.length; i++, j++) {

        if (box[i] == box[++i] && box[i] == box[++i]) {
            console.log(`winner ${box[i]}`); //ok
            winner = box[i];
            break;
        }
        // console.log(`${box[i]}--${box[++i]}-- ${box[++i]}`);
        else if (box[j] == box[j + 3] && box[j] == box[j + 6]) {
            console.log(`winner ${box[j]}`);
            winner = box[j];
            break;
        }
        // console.log(`winner J ${box[j]}--${box[j+3]}---${box[j+6]}`);
        else if (box[k] == box[k + 4] && box[k] == box[k + 8]) {
            winner = box[k];
            break; //ok
        }
        else if (box[k + 2] == box[k + 4] && box[k + 2] == box[k + 6]) {
            winner = box[k];
            break; //ok
        }
    }
    congratulations(winner);
}

//  Congrats

function congratulations(winner) {
    // let replay=document.getElementById('replay'); // no use till now
    if (winner == 'O') {
        head.style.background = 'orange';
        p1.style.background = 'orange';
        head.style.fontSize = '2.2rem';
        head.innerHTML = 'Congratulations!! ' + p1.innerHTML + ' !!WINNER  ';
        win = 0;

    } else if (winner == 'X') {
        head.style.background = 'orange';
        p2.style.background = 'orange';
        head.style.fontSize = '2.2rem';
        head.innerHTML = 'Congratulations!! ' + p2.innerHTML + ' !!WINNER  ';
        // document.getElementById('messagePlayerName').style.display='block';
        // document.getElementById('messagePlayerName').style.fontSize='50px';
        // document.getElementById('messagePlayerName').innerHTML='Game Over';
        win = 0;

    }

}
