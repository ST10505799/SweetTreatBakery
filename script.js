document.addEventListener("DOMContentLoaded", function () { 
  const button =
document.getElementById("moreInfoButton");
  const moreInfo =
document.getElementById("moreInfo");

  button.addEventListener("click",
function () {
         if (moreInfo.hidden) {
             moreInfo.hidden = false;
             bitton.textContent = "Show
Less";
         } else {
             moreInfo.hidden = true;
             button.textContent = "Learn
More";
         }
    });
});
  
