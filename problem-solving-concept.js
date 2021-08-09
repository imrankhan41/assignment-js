// 1. conversation feetToInch

function feetToInch(feet){
    let inch = feet/12;
    return inch;
}
let feets = 25;
let result = Math.ceil(feetToInch(feets));
console.log(result);

// 2. conversion centimeterToMeter
function centimeterToMeter(centimeter){
    let meter = centimeter / 100;
    return meter;
}
let centimeters = 25;
let result1 = feetToInch( centimeters);
console.log(result1);

// 3. calculation pageRequirements
// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

function pageRequirements(book1,book2,book3){
    let firstBookPages= 100;
    let secondBookPages = 200;
    let thirdBookPages =300;
    let firstBookTotalPages = firstBookPages * book1;
    let secondBookTotalPages = secondBookPages * book2;
    let thirdBookTotalPages = thirdBookPages * book3;
    let totalPagaes = firstBookTotalPages + secondBookTotalPages + thirdBookTotalPages;
    return totalPagaes;
}

let result2 = pageRequirements(5,7,10);
console.log(result2);

//4. friends bestFriend
function bestFriend(friendName){
    let largeName = friendName[0];
    for(let i=0;i<friendName.length;i++){
        let element = friendName[i];
        if(element.length > largeName.length){
            largeName =element;
        } 
    }
return largeName;
}

let friends = ["sayed","shahin","sadi","shakil","shakhawat","alamin","shanto"];
let result3 = bestFriend(friends);
console.log(result3);

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number

function onlyPositive(numbers1){
    let positive = [];
    for(i=0;i<numbers1.length;i++){
        let element = numbers1[i];
        if(element > -1){
            positive.push(element);
        }
    }
    return positive;
}
let someNumbers = [0,1,0,2,1,5,5,-1,5,8];
let result4 = onlyPositive(someNumbers);
console.log(result4);