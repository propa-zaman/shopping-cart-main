// add event listener to the plus button
// get the value inside the case number
// convert the number
// calculate the new case number
// set the value to case number filed

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}

function updateCaseTotalPrice(newCaseNumber){

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalelement = document.getElementById('case-total');
    caseTotalelement.innerText = caseTotalPrice;

}




document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    
    updateCaseTotalPrice(newCaseNumber);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubtotal();


})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubtotal();
})