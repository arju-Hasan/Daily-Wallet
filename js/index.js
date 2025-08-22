// const form = document.getElementById("loginForm");
// const mobile = document.getElementById("mobile");
// const pin = document.getElementById("pin");
// const loginBtn = document.getElementById("loginBtn");
// 
// form.addEventListener("submit", function (e) {
//   if (mobile.value.trim() === "" || pin.value.trim() === "") {
//     e.preventDefault();
//     alert("Please enter Mobile Number and 4 Digit Pin!");
//   } 
// });
 

 function loginFunction() {
   const mobile = document.getElementById("mobile").value.trim();
   const pin = document.getElementById("pin").value.trim();

   if (mobile === "" || pin === "") {
     alert("Please enter Mobile Number and 4 Digit Pin!");
   } else {
   
     window.location.href = "home.html";
   }
 }