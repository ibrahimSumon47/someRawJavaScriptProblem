function mindGame(positiveNumber) {
    const task1 = positiveNumber * 3;
    const task2 = task1 + 10;
    const task3 = task2 / 2;
    const task4 = task3 - 5;
    if (typeof positiveNumber !== "number") {
        return "Error!! Input should be a positive number";
    }
    return task4;
}
// const positiveInput = mindGame(5);
// console.log(positiveInput);




function evenOdd(string) {
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }
    if (typeof string !== "string") {
        return "Error!! Input should be a string";
    }
}
  const hiolio = evenOdd("Batch7");
  console.log(hiolio);





function isLGSeven(number) {
    const value = 7;

    if (typeof number !== "number") {
        return "Error!! Input should be a number";
    }
    else if (value > number) {
        return number - value;

    }
    else {
        return number * 2;
    }

}
// const result = isLGSeven(8);
// console.log(result);





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
    if (!Array.isArray(array)) {
        return "Error!! Input should be an array";
    }
    return badData;
}

//   const array = [ 2, -5, -7, -13 ];
//   const result = findingBadData(array);
//   console.log(result);







function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    const firstFriend = 21;
    const secondFriend = 32;
    const thirdFriend = 43;
    const totalDiamond = firstFriend * firstFriendGem + secondFriend * secondFriendGem + thirdFriend * thirdFriendGem;
    if (
        typeof firstFriendGem !== "number" ||
        typeof secondFriendGem !== "number" ||
        typeof thirdFriendGem !== "number"
      ){
        return "Error!! Input should be a number";
      }
    else if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}

// const simpleInput = gemsToDiamond(100, 1, 1);
// console.log(simpleInput);