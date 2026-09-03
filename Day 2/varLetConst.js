const browserName = "Chrome";

function getBrowserName(){
    const browserName = "Firefox";
    if(browserName === "Chrome"){
        console.log("The browser is Chrome");
    }else {
        console.log("The browser is Firefox");
    }    
}

console.log("The browser is " + browserName);

getBrowserName();