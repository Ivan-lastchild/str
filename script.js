let userString = prompt("How much is the fish?");

let userId ;

do {
    userId = +prompt("Set id from 1 to 4");
} while (isNaN(userId) || userId<0 || userId>=5);

if (userId === 1){

    let unicodeOfLetter ;
    do {
        unicodeOfLetter = +prompt("write the serial number of the item");
    } while (isNaN(unicodeOfLetter) || unicodeOfLetter > userString.length);
    console.log(`Юнікод символу під номером "${unicodeOfLetter}" має такий вигляд - ${userString.charCodeAt(unicodeOfLetter-1)}`);

} else if(userId === 2){

    let deletedElemNumber;
    do {
        deletedElemNumber = +prompt("Write the number of the element you want to delete");
    } while (isNaN(deletedElemNumber) || deletedElemNumber > userString.length || deletedElemNumber < 1);
    console.log(`Після видалення символу під номером "${deletedElemNumber}" рядок має такий вигляд - ${userString.replace(userString[deletedElemNumber-1], "")}`);

} else if (userId === 3){

    let emoji = ["🤿","🎱","🥎","🏀","⚽️","🏐","🥮","🥄","🙂","😅"];
    let replaceElemNumber;
    do {
        replaceElemNumber = +prompt("write the number of the element you want to change");
    } while (isNaN(replaceElemNumber) || replaceElemNumber > userString.length);
    let randomNum = getRandomIntInclusive(0,9);
    console.log(`Після заміни символу під номером "${replaceElemNumber}" рядок має такий вигляд - ${userString.replace(userString[replaceElemNumber-1], emoji[randomNum])}`);

} else {
    let countOfThing = 0;
    for (let i = 0; i <userString.length; i++){
        if(userString[i] !== " "){
            countOfThing++;
        }
    }
    console.log(`У рядку "${userString}" ${countOfThing} символів, не враховуючи пробілів`)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
