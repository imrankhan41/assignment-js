function totalSales(shirts,pants,shoes){
    if ((typeof  shirts!= "number" || typeof  pants!= "number" || typeof  shoes!= "number")||(typeof  shirts == "symbol" || typeof  pants == "symbol" || typeof  shoe == "symbol") || (typeof  shirts == "function" || typeof  pants == "nfunction" || typeof  shoes == "function")){
        console.log("Please input quantity of shirts, pants & shoes  to see amount of money needed to buy!")
    }
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
const totalSellingAmountInResult = totalSales(1,1,2);
console.log(totalSellingAmountInResult);