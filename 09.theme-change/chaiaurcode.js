const allSpanButtons = document.querySelectorAll("span");
/*console.log( allSpanButtons);  */

const body = document.querySelector("body");
/* console.log( body); */

allSpanButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    /*  console.log(e);
    console.log(e.target); */
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id; // u can do this also
    }
  });
});
