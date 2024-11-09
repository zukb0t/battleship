function Ship(length){
    
    let counter = 0;

    const isSunk = () => counter === length;
    const hit = () => counter++;
    const getHits = () => counter;
    
    return {length:length, hit, getHits, isSunk};
}

export default Ship;