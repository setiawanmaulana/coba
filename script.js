const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  
  setTimeout(function() {
    cookieBox.classList.add("show");
  });
  

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
    });
  });
};


//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

let wheel = document.querySelector(".wheel");
  let href = document.querySelector(".link");
      let spinBtn = document.querySelector(".wrapper");
      let value = Math.floor(Math.random()  * 6400);

      spinBtn.onclick = function () {
        wheel.style.transform = "rotate(" + value + "deg)";
        value = Math.floor(Math.random()  * 6400);

        setTimeout(() => {
          Swal.fire({
            titleText: "Claim Your Daimond",
            text: "Click ''OK'' to claim then fill in the form and the prize will be sent immediately.",
            imageUrl: "asset/Cz3DMSB.png",

            imageWidth: 200,
            imageAlt: "Custom image"
          }).then((result) =>{
            if(result.value){
              document.location.href = href;
            }
          });
        }, 5000);
    };
