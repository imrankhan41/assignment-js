/* seerToMon ; Problem1*/
/*function declaration*/
function seerToMon(seer){
    /*error handling start*/
    if (typeof seer != "number" ||typeof seer == "symbol" ||typeof seer == "function"  ){
        console.log("Please input valid number to get correct result!")
    }
    /*error handling end*/
    else{
        const mon = 40 ;//1 mon = 40 seer
        const reusltInMon = seer / mon ;
        return reusltInMon;
    }
    
}
/*function call */
const seerAmount =8025;
const outputInMon = seerToMon(seerAmount);
console.log(outputInMon);

/* totalSales ; Problem2*/
/*function declaration*/
function totalSales(shirts,pants,shoes){
     /*error handling start*/
    if ((typeof  shirts!= "number" || typeof  pants!= "number" || typeof  shoes!= "number")||(typeof  shirts == "symbol" || typeof  pants == "symbol" || typeof  shoes == "symbol") || (typeof  shirts == "function" || typeof  pants == "function" || typeof  shoes == "function")){
        console.log("Please input quantity of shirts, pants & shoes  to see amount of money needed to buy!")
    }
     /*error handling end*/
    else{
        const oneShirtPrice = 100;
        const onePantPrice = 200;
        const oneShoePrice = 500;
        const totalShirtSellingPrice = oneShirtPrice * shirts ;
        const totalPantSellingPrice = onePantPrice * pants ;
        const totalShoeSellingPrice = oneShoePrice * shoes;
    
        const totalSellingPrice = totalShirtSellingPrice + totalPantSellingPrice + totalShoeSellingPrice ;
        return totalSellingPrice ;
    }
  
}
/*function call */
const totalSellingAmountInResult = totalSales(1,1,2);
console.log(totalSellingAmountInResult);

/* deliveryCost ; problem3*/
/*function declaration*/
function deliveryCost(amountOfShirts){
     /*error handling start*/
    if (typeof amountOfShirts != "number" || typeof amountOfShirts == "symbol" || typeof amountOfShirts == "function" ){
        console.log("Please input valid number to get correct result!")
    }
     /*error handling end*/
    else{
        const first100ShirtDeliveryCost = 100;
        const second100ShirtDeliveryCost = 80;
        const thirdRestShirtDeliveryCost = 50;
        if(amountOfShirts <= 100){
            const firstDeliveryCost = first100ShirtDeliveryCost * amountOfShirts ;
            return firstDeliveryCost;
        }
        else if (amountOfShirts <= 200){
            const firstDeliveryCost = first100ShirtDeliveryCost * 100;
            const secondResTShirt = amountOfShirts - 100;
            const secondDeliveryCost = second100ShirtDeliveryCost * secondResTShirt;
            const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost;
            return totalDeliveryCost;
        }
        else{
            const firstDeliveryCost = first100ShirtDeliveryCost * 100;
            const secondDeliveryCost = second100ShirtDeliveryCost * 100;
            const thirdResTShirt = amountOfShirts - 200;
            const thirdDeliveryCost= thirdRestShirtDeliveryCost * thirdResTShirt;
            const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost + thirdDeliveryCost;
            return totalDeliveryCost;
        }

    }
    
}
/*function call */
const totalShirts =500;
const totalCost = deliveryCost(totalShirts);
console.log(totalCost);

/* perfectFriend ; problem4*/
/*function declaration*/
function perfectFriend(friends){
     /*error handling start*/
    if (typeof friends == "number" ||typeof friends == "boolean"|| typeof friends == "bigInt" || typeof friends == "null" || typeof friends == "symbol" || typeof friends == 'function' || typeof friends.isArray != "undefined"){
       return "Please input array to get correct result!";
     }
      /*error handling end*/
   else {
       let fiveCharElement = friends[0];
       for(let i=0; i<friends.length;i++){
           let element = friends[i];
           if(element.length == 5){
               
               fiveCharElement =element;
               break;
           }  
       } 
       return fiveCharElement; 
     }  
   
}
/*function call */
const myFriends =["Shakhawat", "Shahidul", "Alamgir", "Imran","Shahin","Amran","Jamal","Kamal"];
const friendName = perfectFriend(myFriends);
console.log(friendName);


