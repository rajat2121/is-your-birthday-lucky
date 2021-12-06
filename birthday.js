// input
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");
// console.log(userInput)


function calSum(dob) {
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let index=0; index <= dob.length; index++) {
        sum =  sum + Number(dob.charAt(index));
    }
    return sum;
}

function luckyOrNotBtn() {
    const dob = dateOfBirth.value;
    const sum = calSum(dob);
    if(sum&&dob) {
    compareValues(sum, Number(luckyNumber.value))
    } else {
        output.innerText = "Please enter both VALUES!"
    }
}

checkBtn.addEventListener("click", luckyOrNotBtn);

// output

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber === 0) {
        output.innerText = "Your Birthday is LUCKY!"
    }  else [
        output.innerText = "Your Birthday is not LUCKY but your you are so lucky !!"
    ]
}
