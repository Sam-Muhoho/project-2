// Akan names array
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

document.getElementById('form-container').addEventListener
//Calculate akan names function
function calculateAkanName (event) {
    document.addEventListener
    event.preventdefault();
    const DD =parseInt(document.getElementById('day').value);
    const MM =parseInt(document.getElementById('month').value);
    const fullyear =parseInt(document.getElementById('year').value);
    const gender =document.querySelector('input'(gender).checked.value)
}

if (day<=0 && day>31) {
    showResult('Day should be between 1 and 31');
    return;
}

if (month<=0 && month>12) {
    showResult('Month should be between 1 and 12');
    return;
}

if (!year<=1900 && year>2025) {
    showResult('Day should be between 1 and 31');
    return;
}


const dayoftheweek = Math.floor ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7

let akanName;
if (gender===male){
    akanName==maleNames[dayoftheweek]
}
    else(gender===female){
        akanName==femaleNames[dayoftheweek]   
}
document.getElementById('results').innerText = "Your Akan name is ${akanName}"