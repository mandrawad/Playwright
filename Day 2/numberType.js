function numberType(){
    let num = 0.001;
            if(num === 0){
                return "neutral";
            }
            else if(num > 0){
                return "positive";
            } else {
                return "negative";
    }
}

console.log("This is a " + numberType() + " number.");