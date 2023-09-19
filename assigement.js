//! Problem 1: Let’s play a mind game

function mindGame(positiveNumber) {
    const number1 = positiveNumber * 3;
    const number2 = number1 + 10;
    const number3 = number2 / 2;
    const finalNumber = number3 - 5;
    if (typeof positiveNumber !== "number") {
        return "Error!! Input should be a positive number";
    }
    return finalNumber;
}



//* Description: In this function my task is show a positive number. If there is any string ("") type of input then it will show that "Error!! Input should be a positive number".







//! Problem 2: Finding even or odd

function evenOdd(string) {
    if (typeof string !== "string") {
        return "Error!! Input should be a string";
    }
    else if (string.length % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}


//* Description: In this function my task is show a string which is I have to put anything in a string and it will check the length of this string. After that it will show us that it is odd or even . If there is any number type of input then it will show that "Error!! Input should be a string".






//! Problem 3: Is Less or Greater than seven

function isLGSeven(number) {
    const value = 7;

    if (typeof number !== "number") {
        return "Error!! Input should be a number";
    }
    else if (number < value) {
        return number - value;
    }
    else {
        return number * 2;
    }
}




//* Description: In this function my task is show a what is final subtraction after the difference with 7. If the difference input is less then 7 then it will show minus figure which will be input and minus 7 but if input is greater then 7 then it will multiply 2 with the input. If there is any string ("") type of input then it will show that "Error!! Input should be a number".







//! Problem 4: Finding Bad data

function findingBadData(array) {
    let badData = 0;
    let goodData = 0;
    for (var i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < 0) {
            badData++;
        }
        else {
            goodData++;
        }
    }
    if (!Array.isArray(array)) {
        return "Error!! Input should be an array";
    }
    return badData;
}





//* Description: In this function my task is show an array and find bad data length. If there is any string ("") or number type of input then it will show that "Error!! Input should be an array".








//! Problem 5: Convert your gems into diamond

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    const firstFriend = 21;
    const secondFriend = 32;
    const thirdFriend = 43;
    const totalDiamond = firstFriend * firstFriendGem + secondFriend * secondFriendGem + thirdFriend * thirdFriendGem;
    if (
        typeof firstFriendGem !== "number" ||
        typeof secondFriendGem !== "number" ||
        typeof thirdFriendGem !== "number"
    ) {
        return "Error!! Input should be a three number";
    }
    else if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}




//* Description: In this function my task is show three parameter and find out how many diamond are there. If total diamond is greater then 2000 then it will calculate total diamond with minus 2000 but if total diamond is less then 2000 then it will show only total diamond. If there is any string ("") type of input then it will show that "Error!! Input should be a three number".