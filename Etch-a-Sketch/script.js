let canvas = document.querySelector(".canvas");
let pixelList = [];

let clear_btn = document.querySelector("#clear-btn");

for (let i = 0; i < 16; ++i) {
  let row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 16; ++j) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    row.appendChild(pixel);
    pixel.style.width = 500.0 / 16;
    pixel.style.height = 500.0 / 16;
    pixelList.push(pixel);
  }
  canvas.appendChild(row);
}

let ondrag = false;
let currentcolor = "black";

let isRainbow = false;

function paintPixel(element, color) {
  element.style.backgroundColor = color;
}

clear_btn.addEventListener("click", () => {
  pixelList.forEach((pixel) => {
    paintPixel(pixel, "#fefefe");
  });
});

const randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
};

canvas.addEventListener("mousedown", (e) => {
  ondrag = true;

  if (isRainbow) {
    paintPixel(e.target, randomColor());
  } else paintPixel(e.target, currentcolor);
});

canvas.addEventListener("mouseover", (e) => {
  if (ondrag) {
    if (isRainbow) paintPixel(e.target, randomColor());
    else paintPixel(e.target, currentcolor);
  }
});

canvas.addEventListener("mouseup", () => {
  ondrag = false;
});

let prevColor = null;
let prevBtn = null;

let selection_panel = document.querySelector(".selection-panel");

selection_panel.addEventListener("click", (e) => {
  if (e.target.className === "color-pixel") {
    isRainbow = false;
    if (prevBtn) {
      prevBtn.style.backgroundColor = "#ededed";
      prevBtn.style.color = "black";
      prevBtn = null;
    }
    currentcolor = window.getComputedStyle(e.target).backgroundColor;
    e.target.style.transform = "scale(1.05)";
    if (prevColor) {
      prevColor.style.transform = "scale(1)";
    }
    prevColor = e.target;
  } else if (e.target.id.includes("mode")) {
    isRainbow = false;
    if (prevColor) {
      prevColor.style.transform = "scale(1)";
      prevColor = null;
    }
    e.target.style.backgroundColor = "#333";
    e.target.style.color = "white";
    if (e.target.id === "eraser-mode") {
      currentcolor = "#fefefe";
    } else if (e.target.id === "rainbow-mode") {
      isRainbow = true;
    }
    if (prevBtn) {
      if (prevBtn === e.target) return;
      prevBtn.style.backgroundColor = "#ededed";
      prevBtn.style.color = "black";
    }

    prevBtn = e.target;
  }
});
