import Gameboard from './gameboard';

const game = Gameboard();
test('create a game instance', function(){
    expect(game.board.length).toEqual(10);
})

game.placeShip(0,0,3);
game.placeShip(0,2,4);
game.placeShip(0,1,5);

test('[0,0][1,0][2,0] is a ship of length 3', function(){
    expect(game.board[0][0]).toBe('X');
})

test('ship of length 3 is hit three times and sunked', function(){
    expect(game.receiveAttack(0,0)).toBe('ship was hit');
    expect(game.receiveAttack(1,0)).toBe('ship was hit');
    expect(game.receiveAttack(2,0)).toBe('ship got sunked');
})

test('should return attack already declared',function(){
    expect(game.receiveAttack(2,0)).toBe('attack was declared there');
})


test('ship of length 4 was hit once', function(){
    expect(game.receiveAttack(0,2)).toBe('ship was hit');
})

test('ship of length 4 hit counter is 1', function(){
    expect(game.getShips()[1].getHits()).toBe(1);
})

test('is it all sunked?', function(){
    expect(game.isAllSunked()).toBe(false);
})


