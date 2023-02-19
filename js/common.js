
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString); 
    return currentPhoneTotal;
}

function setTextElementById(elementId, value){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function calculateSubtotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
 
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementById('sub-total', currentSubTotal);
    
}
// calculateTotal
const taxAmmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmmount = parseFloat(taxAmmountString);
setTextElementById('tax-ammunt', taxAmmount);

const finalAmmount = taxAmmount + subTotal;
setTextElementById('final-ammount', finalAmmount);