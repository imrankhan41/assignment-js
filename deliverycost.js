function deliveryCost(amountOfShirts){
    if (typeof amountOfShirts != "number" || typeof amountOfShirts == "symbol" || typeof amountOfShirts == "function" ){
        console.log("Please input number to get correct result!")
    }
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
const totalShirts =500;
const totalCost = deliveryCost(totalShirts);
console.log(totalCost);