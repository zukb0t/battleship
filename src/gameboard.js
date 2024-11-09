import Ship from './ship';

function Gameboard(){
    let ships = [];
    let shipCoordinates = [];
    let missedCoordinates = [];
    let hitCoordinates = [];
    let sunkedShips = new Set();

    let board = [['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                ];

    function clear(){
         board = [['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                 ['','','','','','','','','',''],
                ];
        ships = [];
        shipCoordinates = [];
    }

    const getBoard = () => board;
    const getShips = () => ships;
    const inBoard = (x,y) => (x >= 0 && x < 10) && (y >= 0 && y < 10);
    const shipExists = (x,y) => getBoard()[x][y] == 'X';
        
    function placeShip(x, y, length, orientation){
        if(!inBoard(x,y)){
            return 'out of bounds';
        }
        if(!inBoard(x+length, y+length)){
            return 'out of bounds';
        }
        for(let i = 0; i < length; i++){
            if(orientation === 'vertical' && shipExists(i+x,y)){
                return 'ship is placed there';
            }
            if(orientation === 'horizontal' && shipExists(x, i+y)){
                return 'ship is placed there';
            }
        }

        const ship = Ship(length);
        ships.push(ship);
        for(let i = 0; i < length; i++){
            if(orientation === 'vertical'){
                board[i + x][y] = 'X';
                shipCoordinates.push([i+x, y]);
                ship["coordinates"] = [...shipCoordinates];
            }
            else{
                board[x][i + y] = 'X';
                shipCoordinates.push([x, i+y]);
                ship["coordinates"] = [...shipCoordinates];
            }
        }
        return 'ship is placed';
    }

    function checkForAttacks(x, y, hits){
        while(hits.length !== 0){
            const check = hits.shift();
            const [coordX, coordY] = check;
            if(coordX === x && coordY === y){
                return true;
            }
        }
        return false;
    }

    function receiveAttack(x, y){
        if(checkForAttacks(x,y,hitCoordinates) || checkForAttacks(x,y,missedCoordinates)){
            return 'attack was declared there';
        }
        for(let i = 0; i < ships.length; i++){
            const currentShip = ships[i];
            const coordinates = currentShip.coordinates;
            for(let j = 0; j < coordinates.length; j++){
                const [coordX , coordY] = coordinates[j];
                if(coordX == x && coordY == y){
                    board[x][y] = 'hit';
                    currentShip.hit();
                    hitCoordinates.push([x, y]);
                    if(currentShip.isSunk() && !sunkedShips.has(currentShip)){
                        sunkedShips.add(currentShip);
                        return 'ship got sunked';
                    }
                    else{
                        return 'ship was hit';
                    }
                }
            }
        }
        console.log('?');
        board[x][y] = 'missed';
        missedCoordinates.push([x, y]);
        return 'ship was not hit';
    }

    function isAllSunked(){
        return ships.length === sunkedShips.size;
    }

    function defaultShips(){
        const carrier = placeShip(0,0,5,'horizontal');
        const battleship = placeShip(2,1,4,'vertical');
        const cruiser = placeShip(4,4,3,'vertical');
        const submarine = placeShip(6,5,3,'vertical');
        const destroyer = placeShip(6,0,2,'vertical');
    }

    function placeRandom(){
        let shipArray = [5,4,3,3,2];
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        let orientation = Math.random() < 0.50 ? 'horizontal' : 'vertical';
        let ship = '';
        while(shipArray.length > 0){
            let current = shipArray[0];
            ship = placeShip(x,y,current,orientation);
            if(ship === 'ship is placed'){
                shipArray.shift();
                ship = '';
            }
            console.log(ship);
             x = Math.floor(Math.random() * 9);
             y = Math.floor(Math.random() * 9);
             orientation = Math.random() < 0.50 ? 'horizontal' : 'vertical';
        }
    }

    return {clear, getBoard, shipExists, placeShip, getShips, receiveAttack, isAllSunked, defaultShips, placeRandom};
}

export default Gameboard;