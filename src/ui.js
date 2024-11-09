import Players from './players';
const person = Players();
const enemy = Players();

const gameboards = document.querySelector('.gameboards');
const human = document.querySelector('#gameboard-human');
const computer = document.querySelector('#gameboard-computer');

const message = document.querySelector('.message');
const start = document.querySelector('.start-button');
const randomize = document.querySelector('.randomize-button');

function renderBoard(board, playerBoard, current, opponent = false){
    playerBoard.textContent = '';
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('x-value',i);
            square.setAttribute('y-value', j);
            if(current.player.shipExists(i, j) && !opponent){
                square.style.backgroundColor = 'blue';
            }
            if(board[i][j] === 'hit'){
                square.textContent = 'H';
                square.style.backgroundColor = 'green';
            }
            if(board[i][j] === 'missed'){
                square.textContent = 'M';
                square.style.backgroundColor = 'red'
            }
            playerBoard.appendChild(square);
        }
    }
    return playerBoard;
}

function checkWinner(){
    console.log(enemy.player.isAllSunked());
    if(person.player.isAllSunked()){
        message.textContent = 'computer wins';
    }
    if(enemy.player.isAllSunked()){
        message.textContent = 'you win';
    }
}

function board(){
    person.player.defaultShips();
    const humanBoard = person.player.getBoard();
    const renderHumanBoard = renderBoard(humanBoard, human, person);
    gameboards.appendChild(renderHumanBoard);

    enemy.player.placeRandom();
    const computerBoard = enemy.player.getBoard();
    const renderComputerBoard = renderBoard(computerBoard, computer, enemy, true);
    gameboards.appendChild(renderComputerBoard);

}

export function randomizeShips(){
    randomize.addEventListener('click', function(){
        human.innerHTML = '';
        person.player.clear();
        console.log(person.player.getBoard());
        person.player.placeRandom();
        const humanBoard = person.player.getBoard();
        const renderHumanBoard = renderBoard(humanBoard, human, person);
        gameboards.appendChild(renderHumanBoard);
    })
}

export function startGame(){
    start.addEventListener('click', function(){
        randomize.style.display = "none";
        computer.addEventListener('click', (event) => {
            const x = event.target.getAttribute('x-value');
            const y = event.target.getAttribute('y-value');
            enemy.player.receiveAttack(x,y);
            const computerBoard = enemy.player.getBoard();
            renderBoard(computerBoard, computer, enemy, true);

            setTimeout(() => {
                let x = Math.floor(Math.random() * 9);
                let y = Math.floor(Math.random() * 9);
                person.player.receiveAttack(x, y);
                const humanBoard = person.player.getBoard();
                renderBoard(humanBoard, human, person);
            },2000);
            checkWinner();
        });
    })
}

export default board;