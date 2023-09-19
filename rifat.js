function mindGame(positiveNumber) {
    const task1 = positiveNumber * 3;
    const task2 = task1 + 10;
    const task3 = task2 / 2;
    const task4 = task3 - 5;
    return task4;
}





function evenOdd(string) {
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }
}
  





function isLGSeven(number) {
    const value = 7;
    if (value > number) {
        return number - value;

    }
    else {
        return number * 2;
    }
}





function findingBadData(array) {
    let badData = 0;
    let goodData = 0;
    for (var i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < 0) {
            badData++;
        } else {
            goodData++;
        }
    }
    return badData;
}








function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    const firstFriend = 21;
    const secondFriend = 32;
    const thirdFriend = 43;
    const totalDiamond = firstFriend * firstFriendGem + secondFriend * secondFriendGem + thirdFriend * thirdFriendGem;
    if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}
