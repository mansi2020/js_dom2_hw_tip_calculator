// let bill = document.getElementById("billAmount").value;
// console.log(bill);
let button1 = document.getElementsByTagName('button');
let select = document.getElementsByTagName('select');
let main = document.getElementsByClassName('main');
let amountDiv = document.getElementById('amount');
let totalTip = document.querySelector(".total")
console.log(select[0].options);

//object of chhose an option for tip
let tip = {
    0 : 0,
    1 : 30,
    2 : 20,
    3 : 15,
    4 : 10,
    5 : 5,
}

let currency = {
    "Indian Rupees" :1,
    "Us Dollar" : 0.012,
    "Euro" : 0.011,
    "Canadian Dollar" : 0.016,
}
let currencySign = {
    "Indian Rupees" :"Rs",
    "Us Dollar" : "$",
    "Euro" : "€",
    "Canadian Dollar" : "C$",
}

let newDiv = document.createElement('div');
amountDiv.appendChild(newDiv);
button1[0].addEventListener('click',(e)=>{
    totalTip.style.display = "block";
    let bill = document.getElementById("billAmount").value;
    let review = select[0].options.selectedIndex;
    let tipValue =  tip[review]/100;
    // console.log(tipValue);
  
    if(tipValue == 0){
        alert("Please Choose Your Service");
    }
    let noPeople = document.getElementById('numPeople').value;


    let tipAmount = ((tipValue*bill)/noPeople).toFixed(4);    
    newDiv.innerText = `${tipAmount}`;

    let currencyIdx = select[1].options.selectedIndex;
    let currencyValue =  currency[currencyIdx];
    console.log(select[1].options[currencyIdx].value);

    //traverse in currency object
    for (const key in currency) {
        if (select[1].options[currencyIdx].value === key) {
            tipAmount = (tipAmount*currency[key]).toFixed(4);
            let sign = currencySign[key];
            newDiv.innerText = `${sign}. ${tipAmount}`;
        }
    }  
      
});

