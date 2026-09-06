arr1 = [10, 120, 30, 40, 50];
arr2 = [20, 40, 60, 80, 100];

function intersection(arr1, arr2) {

    let commonElements = [];
    let uncommonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }else {
            uncommonElements.push(arr1[i]);
        }
    }
    console.log("Common Elements:" + commonElements);
    console.log("Uncommon Elements:" + uncommonElements);
}

intersection(arr1, arr2); // Output: [20, 40]