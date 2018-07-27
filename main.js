let myName = prompt('What\'s your name?');
console.log('What\'s your name?  ' + myName);

let myDMV = confirm("Do you live in the DMV?");
console.log("Do you live in the DMV? " + myDMV);

let myCity = prompt("What city do you live in?");
console.log("What city do you live in? " + myCity);

let myYears = prompt("How many years have you lived there?")
console.log("How many years have you lived there? " + myYears);


if(myDMV === true) {
    alert('Hello ' + myName + '!  DMV is the best region. Especially when you lived in ' + myCity + " " + myYears + " years.")
} else {
    alert("Hello " + myName + "! I've heard of " + myCity + ". How do like living in " +myCity + " after " +myYears+ " years?")

}


let elName = document.getElementById('name');
elName.innerHTML = myName

// let elDMV = document.getElementById('DMV');
// elDMV.innerHTML = myDMV

let elCity = document.getElementById('city')
elCity.innerHTML = myCity

let elYears = document.getElementById('years')
elYears.innerHTML = myYears + myName

console.log(elName);
// console.log(elDMV);
console.log(elCity);
console.log(elYears);
