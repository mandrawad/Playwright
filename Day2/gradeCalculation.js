var score = 82

function gradeCalculation(score){
    switch(true){
        case (score >= 90):
            return "A";
        case (score >= 80):
            return "B";
        default:
            return "C";
    }
}

console.log(gradeCalculation(score));