document.getElementById("addMoneyBtn").addEventListener("click", function(e) {
   e.preventDefault();
 // validate form inputs
 const bank = document.getElementById("bank").value;
 const accountNumber = document.getElementById("accountNumber").value;
 const amount = parseInt(document.getElementById("addAmount").value);
 const pin = document.getElementById("pin").value;
 const AvailableBalance = parseInt(document.getElementById("AvailableBalance").innerText);
  if (bank === "Select bank") {
     alert("Please select a bank.");
     return;
 }
 if (accountNumber.length !== 11) {
     alert("Please enter a valid 11-digit account number.");
     return;
 }
 if (amount === "" || isNaN(amount)) {
     alert("Please enter a valid amount.");
     return;
 }
 if (pin.length !== 4) {
     alert("Please enter a valid 4-digit PIN.");
     return;
 }
 const newBalance = AvailableBalance + amount;
 document.getElementById("AvailableBalance").innerText = newBalance;
console.log({ bank, accountNumber, amount, pin, AvailableBalance, newBalance });
// reset the input addmony box
document.getElementById("bank").value = "Select bank";
document.getElementById("accountNumber").value = "";
document.getElementById("addAmount").value = "";
document.getElementById("pin").value = "";
});