document.addEventListener("DOMContentLoaded", function () { 
  const button =
document.getElementById("moreInfoButton");
  const moreInfo =
document.getElementById("moreInfo");
if (button && moreInfo) {
  button.addEventListener("click",
function () {
         if (moreInfo.hidden) {
             moreInfo.hidden = false;
             button.textContent = "Show Less";
         } else {
             moreInfo.hidden = true;
             button.textContent = "Show More";
         }
    });
}
  const inquiryForm = document.getElementById("inquiryForm");
  if (inquiryform) {
  inquiryForm.addEventListener("submit",function(event) {
  event.preventDefault();
  const product = document.getElementById("product").value;
  alert("Thank you for your enquiry about" + product+". We will contact you with pricing and availability details.");
  });
  }
});
  
