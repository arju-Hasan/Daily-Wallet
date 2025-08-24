const transactiondata = [];

// Add Money Section
document.getElementById("addMoneyBtn").addEventListener("click", function(e) {
   e.preventDefault();
    // card border color change
    // document.getElementById("Cardaddmoneybtn").classList.remove("border-gray-400");
    // document.getElementById("Cardaddmoneybtn").classList.add("border-green-400");

 // validate form inputs
 const billerBank = document.getElementById("billerBank").value;
 const accountNumber = document.getElementById("accountNumber").value;
 const amount = parseInt(document.getElementById("addAmount").value);
 const pin = document.getElementById("pin").value;
 const AvailableBalance = parseInt(document.getElementById("AvailableBalance").innerText);
  if (billerBank === "Select bank") {
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

const data ={
  name: "Add Money",
  Date: new Date().toLocaleDateString(),
}
transactiondata.push(data);

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
 
  const data = {
    name: "Cash Out",
    Date: new Date().toLocaleDateString(),
  };
  transactiondata.push(data);

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

  const data = {
    name: "Transfer Money",
    Date: new Date().toLocaleDateString(),
  };
  transactiondata.push(data);

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
  
  const data = {
    name: "Get Bonus",
    Date: new Date().toLocaleDateString(),
  };
  transactiondata.push(data);

  // reset the input bonus box
  document.getElementById("bonusCoupon").value = "";
});

//pay bill section
document.getElementById("payBillBtn").addEventListener("click", function (e) {
  e.preventDefault();
  // validate form inputs
  const BillerAccountNumber = document.getElementById("BillerAccountNumber").value;
  const amount = parseInt(document.getElementById("payBillAmount").value);
  const pin = document.getElementById("payBillPin").value;
  const AvailableBalance = parseInt(document.getElementById("AvailableBalance").innerText);
  if (bank === "Select option") {
     alert("Please select a Biller Opthion.");
     return;
  }
  if (BillerAccountNumber.length !== 11) {
    alert("Please enter a valid biller account number.");
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

  const data = {
    name: "Pay Bill",
    Date: new Date().toLocaleDateString(),
  };
  transactiondata.push(data);

  // reset the input pay bill box
  document.getElementById("BillerAccountNumber").value = "";
  document.getElementById("payBillAmount").value = "";
  document.getElementById("payBillPin").value = "";
});

// Transactions ‍section
document.getElementById("CardtransactionBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const transactionSection = document.getElementById("transactionSection");
    transactionSection.innerHTML = ""; // Clear previous transactions
    for( data of transactiondata){
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-white p-3 rounded-2xl m-3 flex justify-between items-center">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png" class="mx-auto" alt="">
          </div>
          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.Date}</p>
          </div>
        </div>
        <div>
         <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>`;
      transactionSection.appendChild(div);
    }
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
    document.getElementById("transactionSection").style.display = "none";
  });
document
  .getElementById("CardcashoutBtn")
  .addEventListener("click", function () {
    document.getElementById("cashOutSection").style.display = "block";
    document.getElementById("addMoneySection").style.display = "none";
    document.getElementById("transferSection").style.display = "none";
    document.getElementById("bonusSection").style.display = "none";
    document.getElementById("payBillSection").style.display = "none";
    document.getElementById("transactionSection").style.display = "none";
  });
  document
    .getElementById("CardtransferBtn")
    .addEventListener("click", function () {
      document.getElementById("transferSection").style.display = "block";
      document.getElementById("addMoneySection").style.display = "none";
      document.getElementById("cashOutSection").style.display = "none";
      document.getElementById("bonusSection").style.display = "none";
      document.getElementById("payBillSection").style.display = "none";
      document.getElementById("transactionSection").style.display = "none";
    });
    document
      .getElementById("CardbonusBtn")
      .addEventListener("click", function () {
        document.getElementById("bonusSection").style.display = "block";
        document.getElementById("addMoneySection").style.display = "none";
        document.getElementById("transferSection").style.display = "none";
        document.getElementById("cashOutSection").style.display = "none";
        document.getElementById("payBillSection").style.display = "none";
        document.getElementById("transactionSection").style.display = "none";
      });

    document
    .getElementById("CardpayBillBtn")
    .addEventListener("click", function () {
        document.getElementById("payBillSection").style.display = "block";
        document.getElementById("addMoneySection").style.display = "none";
        document.getElementById("transferSection").style.display = "none";
        document.getElementById("cashOutSection").style.display = "none";
        document.getElementById("bonusSection").style.display = "none";
        document.getElementById("transactionSection").style.display = "none";
    });

    document
      .getElementById("CardtransactionBtn")
      .addEventListener("click", function () {
        document.getElementById("transactionSection").style.display = "block";
        document.getElementById("payBillSection").style.display = "none";
        document.getElementById("addMoneySection").style.display = "none";
        document.getElementById("transferSection").style.display = "none";
        document.getElementById("cashOutSection").style.display = "none";
        document.getElementById("bonusSection").style.display = "none";
      });

//// Toggle section short version
//       // সব card এবং section mapping
// const cardSectionMap = {
//   Cardaddmoneybtn: "addMoneySection",
//   CardcashoutBtn: "cashOutSection",
//   CardtransferBtn: "transferSection",
//   CardbonusBtn: "bonusSection",
//   CardpayBillBtn: "payBillSection",
//   CardtransactionBtn: "transactionSection",
// };
// 
// // সব section ids array আকারে বের করলাম
// const allSections = Object.values(cardSectionMap);
// 
// // loop চালালাম সব card এর জন্য
// Object.keys(cardSectionMap).forEach(cardId => {
//   document.getElementById(cardId).addEventListener("click", function () {
//     const targetSection = cardSectionMap[cardId];
// 
//     // সব section hide করে দিচ্ছি
//     allSections.forEach(secId => {
//       document.getElementById(secId).style.display = "none";
//     });
// 
//     // শুধু ক্লিক করা card এর section দেখাচ্ছি
//     document.getElementById(targetSection).style.display = "block";
//   });
// });

    

// logout section
function logout() {
  // Clear user session data
  localStorage.removeItem("userSession");
  // Redirect to login page
  window.location.href = "./index.html";
};


//  card selector color
const cards = document.querySelectorAll(
  "#Cardaddmoneybtn, #CardcashoutBtn, #CardtransferBtn, #CardbonusBtn, #CardpayBillBtn, #CardtransactionBtn"
);

cards.forEach((card) => {
  card.addEventListener("click", function () {
    // সব কার্ডকে inactive বানাও
    cards.forEach((c) => {
      c.classList.remove("text-blue-400", "border-green-400");
      c.classList.add("text-gray-400", "border-gray-400");
    });

    // শুধু ক্লিক করা কার্ডকে active বানাও
    this.classList.remove("text-gray-400", "border-gray-400");
    this.classList.add("text-blue-400", "border-green-400");
  });
});


// const cards = document.querySelectorAll(
//   "#Cardaddmoneybtn, #CardcashoutBtn, #CardtransferBtn, #CardbonusBtn, #CardpayBillBtn, #CardtransactionBtn"
// );
// 
// cards.forEach(card => {
//   card.addEventListener("click", function () {
//     cards.forEach(c => {
//       c.classList.remove("!text-gray-400");
//       c.classList.add("!text-blue-400");
//       c.classList.remove("border-green-400");
//       c.classList.add("border-gray-400");
//     });
//     this.classList.remove("!text-gray-400");
//     this.classList.add("!text-blue-400");
//     this.classList.remove("border-gray-400");
//     this.classList.add("border-green-400");
//   });
// });

