/* seerToMon ; Problem1*/
/*function declaration*/
function seerToMon(seer){
    /*error handling start*/
    if (typeof seer != "number" ||typeof seer == "symbol" ||typeof seer == "function"  ){
        console.log("Please input number to get correct result!")
    }
    /*error handling end*/
    else{
        const mon = 40 ;
        const reusltInMon = seer / mon ;
        return reusltInMon;
    }
    
}
/*function call */
const seerAmount =8025;
const outputInMon = seerToMon(seerAmount);
console.log(outputInMon);