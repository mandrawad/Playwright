var browser = "Chrome";
var testType = "Smoke";

function launchBrowser(browser){
    if(browser === "Chrome"){
        console.log("Launching Chrome browser");
    }else{
        console.log("It's not a Chrome browser");
    }
}


function runTests(testType){
    switch(testType){
        case "Smoke":
        default:
            console.log("Running Smoke tests");
            break;
        case "Sanity":
            console.log("Running Sanity tests");
            break;
        case "Regression":
            console.log("Running Regression tests");
            break;
    }
}

launchBrowser(browser);
runTests(testType);