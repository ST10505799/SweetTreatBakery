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
  
const productSearch = document.getElementById("productSearch");
const productItems = document.querySelectorAll("#productListli");

if (productSearch) {
  productSearch.addEventListener("input",function() {
         const searchTerm = productSearch.Value.tolowerCase();

productItems.forEach(function(item) {
      const productName = item.textContent.toLowerCase();

      item.style.display = productName.includes(searchTerm) ? "" :
        "none";
                });
        });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit",function(event) {
      event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const messageType = document.getElementById("messageType").value;
    const message = document.getElementById("message").value;

    const recipient = "sweettreatbakery@gmail.com";

    const emailBody =
      "Full Name: " + name + "\n" +
      "Phone Number: " + phone + "\n" +
      "Email: " + email + "\n" +
      "Subject: " + subject + "\n" +
      "Message Type: " + messageType + "\n" +
      "Message: " + message;

    const mailtoLink = "mailto:" + recipient +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" +encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
  });
}
