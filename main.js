 let billEl = document.querySelector("#bill");
 let noOfPeopleEl = document.querySelector("#people");
 let tipPercentages = document.querySelectorAll(".cl-tip");
 let tipAmountPerPersonEl = document.querySelector("#tip-per-person");
 let totalAmountPerPersonEl = document.querySelector("#total-per-person");
 let tipResetbtn = document.querySelector("#reset-btn");

 let billAmount = 0;
 let noOfPeople = 0;
 let tipPercentage = 0;
 let tipAmountPerPersonElValue = 0;
 let totalAmountPerPersonElValue = 0;

billEl.addEventListener("keyup", e => {
   billAmount = Number(e.target.value);
   calculateTip();
})

 noOfPeopleEl.addEventListener("keyup", e => {
    noOfPeople = Number(e.target.value);
    calculateTip();
 })

Array.from(tipPercentages).forEach(tipPercentages => {
   tipPercentages.addEventListener("click", e => {
      if (e.target.innerText.includes("%")) {
         tipPercentage = Number(e.target.innerText.replace("%", ""));
         applyActiveClass(e.target.innerText);
         calculateTip();
      }
   })
})

function calculateTip() {
   let tipAmount = billAmount * (tipPercentage / 100);
   let totalAmount = billAmount + tipAmount;
   let tipAmountPerPerson = tipAmount / noOfPeople;
   let totalAmountPerPerson = totalAmount / noOfPeople;

   updateValues({
      tipAmountPerPerson,
      totalAmountPerPerson,
   })
}

function updateValues({tipAmountPerPerson, totalAmountPerPerson}) {
   tipAmountPerPersonEl.innerText = tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
   totalAmountPerPersonEl.innerText = totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}

function applyActiveClass(innerTextPect) {
   Array.from(tipPercentages).forEach(tipPercentages => {
         if (tipPercentages === innerTextPect) {
            tipPercentages.classList.add("active");
         } else {
            tipPercentages.classList.remove("active");
         }
   })
}

tipResetbtn.addEventListener("click", function(){
   billEl.value = "";
   billAmount = 0;
   noOfPeopleEl.value = "";
   noOfPeople = 0;
   tipAmountPerPersonEl.textContent = "$0.00";
   tipAmountPerPersonElValue = 0;
   totalAmountPerPersonEl.textContent = "$0.00";
   totalAmountPerPersonElValue = 0;
})