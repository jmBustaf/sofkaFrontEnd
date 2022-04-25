export const randomNum = (myArray) => {
    const rand = Math.floor(Math.random()*myArray.length);
    const rValue = myArray[rand];
    return rValue
}