function perfectFriend(friends){
     if (typeof friends == "number" ||typeof friends == "boolean"|| typeof friends == "bigInt" || typeof friends == "null" || typeof friends == "symbol" || typeof friends == 'function' || typeof friends.isArray != "undefined"){
        return "Please input array to get correct result!";
      }
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
const myFriends =["Shakhawat", "Shahidul", "Alamgir", "Imran","Shahin","Amran","Jamal","Kamal"];
const friendName = perfectFriend(myFriends);
console.log(friendName);

