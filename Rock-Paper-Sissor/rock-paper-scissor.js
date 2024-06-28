let user = 0;
let comp = 0;

const main = document.querySelectorAll('.box');
const msg = document.querySelector('#msg');
const userscorepara = document.querySelector('#me')
const compscorepara = document.querySelector('#comp')

const draw = () => {
    console.log("it's draw..")
    msg.innerText = "Game was draw.."
}
const showwinner = (userwin, userchoice, computerturn) => {
    if (userwin) {
        user++
        userscorepara.innerText = user;
        msg.innerText = `"You win" Your ${userchoice} beats ${computerturn}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "Yellow";
    } else {
        comp++;
        compscorepara.innerText = comp;
        msg.innerText = `"You loss" ${computerturn} beats your ${userchoice}`;
        msg.style.backgroundColor = "Red";
        msg.style.color = "Yellow";
    }
}
const compchoice = () => {
    const option = ["paper", 'scissor', 'rock'];
    const randomindex = Math.floor(Math.random() * 3);
    return option[randomindex];
};

const playgame = (userchoice) => {
    console.log("User's choice=", userchoice);
    //comp choice
    const computerturn = compchoice();
    console.log("comp's choice =", computerturn);

    if (userchoice === computerturn) {
        //draw condition
        draw();
    } else {
        let userwin = true;
        if (userchoice === 'rock') {
            userwin = computerturn === 'paper' ? false : true;
        } else if (userchoice === "paper") {
            userwin = computerturn === "scissor" ? false : true;
        } else {
            userwin = computerturn === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, computerturn);
    }
};

main.forEach((ele) => {
    ele.addEventListener('click', () => {
        const userchoice = ele.getAttribute('id');
        playgame(userchoice);
    });
});