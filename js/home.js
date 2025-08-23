// Add Money Section
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


// cash out section
document.getElementById("cashoutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  // validate form inputs
  const agentNumber = document.getElementById("CashoutAgentNumber").value;
  const amount = parseInt(document.getElementById("CashoutAmount").value);
  const pin = document.getElementById("CashoutPin").value;
  const AvailableBalance = parseInt(document.getElementById("AvailableBalance").innerText);
  if (agentNumber.length !== 11) {
    alert("Please enter a valid 11-digit agent number.");
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
  const newBalance = AvailableBalance - amount;
  document.getElementById("AvailableBalance").innerText = newBalance;
  console.log({ agentNumber, amount, pin, AvailableBalance, newBalance });
  // reset the input cashout box
  document.getElementById("CashoutAgentNumber").value = "";
  document.getElementById("CashoutAmount").value = "";
  document.getElementById("CashoutPin").value = "";
});

// transfer section
document.getElementById("transferBtn").addEventListener("click", function (e) {
  e.preventDefault();
  // validate form inputs
  const mobileNumber = document.getElementById("transferAccountNumber").value;
  const amount = parseInt(document.getElementById("transferAmount").value);
  const pin = document.getElementById("transferPin").value;
  const AvailableBalance = parseInt(document.getElementById("AvailableBalance").innerText);
  if (mobileNumber.length !== 11) {
    alert("Please enter a valid 11-digit mobile number.");
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
  const newBalance = AvailableBalance - amount;
  document.getElementById("AvailableBalance").innerText = newBalance;
  console.log({ mobileNumber, amount, pin, AvailableBalance, newBalance });
  // reset the input transfer box
  document.getElementById("transferAccountNumber").value = "";
  document.getElementById("transferAmount").value = "";
  document.getElementById("transferPin").value = "";
});

// Get Bonus
document.getElementById("bonusBtn").addEventListener("click", function (e) {
  e.preventDefault();
  // validate form inputs
  const coupon = document.getElementById("bonusCoupon").value;
  const AvailableBalance = parseInt(document.getElementById("AvailableBalance").innerText);
  if (coupon !== "RAJU") {
    alert("Please enter a valid coupon.");
    return;
  }
  const newBalance = AvailableBalance + 100; // Assuming a fixed bonus amount
  document.getElementById("AvailableBalance").innerText = newBalance;
  console.log({ coupon, AvailableBalance, newBalance });
  // reset the input bonus box
  document.getElementById("bonusCoupon").value = "";
});

// Toggle section
document
  .getElementById("Cardaddmoneybtn")
  .addEventListener("click", function () {
    document.getElementById("addMoneySection").style.display = "block";
    document.getElementById("cashOutSection").style.display = "none";
    document.getElementById("transferSection").style.display = "none";
    document.getElementById("bonusSection").style.display = "none";
    document.getElementById("payBillSection").style.display = "none";
  });
document
  .getElementById("CardcashoutBtn")
  .addEventListener("click", function () {
    document.getElementById("cashOutSection").style.display = "block";
    document.getElementById("addMoneySection").style.display = "none";
    document.getElementById("transferSection").style.display = "none";
    document.getElementById("bonusSection").style.display = "none";
    document.getElementById("payBillSection").style.display = "none";
  });
  document
    .getElementById("CardtransferBtn")
    .addEventListener("click", function () {
      document.getElementById("transferSection").style.display = "block";
      document.getElementById("addMoneySection").style.display = "none";
      document.getElementById("cashOutSection").style.display = "none";
      document.getElementById("bonusSection").style.display = "none";
      document.getElementById("payBillSection").style.display = "none";
    });
    document
      .getElementById("CardbonusBtn")
      .addEventListener("click", function () {
        document.getElementById("bonusSection").style.display = "block";
        document.getElementById("addMoneySection").style.display = "none";
        document.getElementById("transferSection").style.display = "none";
        document.getElementById("cashOutSection").style.display = "none";
        document.getElementById("payBillSection").style.display = "none";
      });
// Pay Bill Section
    document
    .getElementById("CardpayBillBtn")
    .addEventListener("click", function () {
        document.getElementById("payBillSection").style.display = "block";
        document.getElementById("addMoneySection").style.display = "none";
        document.getElementById("transferSection").style.display = "none";
        document.getElementById("cashOutSection").style.display = "none";
        document.getElementById("bonusSection").style.display = "none";
});

// logout section
function logout() {
  // Clear user session data
  localStorage.removeItem("userSession");
  // Redirect to login page
  window.location.href = "./index.html";
}