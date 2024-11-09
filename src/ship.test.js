import Ship from './ship';
const ship = Ship(3);

test('ship with length 3', function(){
    expect(ship.length).toBe(3);
})


afterEach(() => {
    ship.hit();
})

test('expect ship to be hit once', function(){
    expect(ship.getHits()).toBe(1);
})

test('expect ship to be hit twice', function(){
    expect(ship.getHits()).toBe(2);
})

test('ship is sunked', function(){
    expect(ship.isSunk()).toBeTruthy();
})