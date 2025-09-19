//random hash code
// for that use for loop set limit to 6 starts with 0123456789abcdef
//math.random()
// for start settime interval and adding event listner for click
// for stop set time interval false

//generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// selecting two buttons ok
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

// using method here
let intervalid;
let startColor = () => {
  if (!intervalid) {
    intervalid = setInterval(changeColor, 100);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

let stopColor = function () {
  clearInterval(intervalid);
  intervalid = null;
};

// adding a click event and called or passed a method or func to it
start.addEventListener("click", startColor);
stop.addEventListener("click", stopColor);
