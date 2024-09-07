console.log("Hi");

const container = document.querySelector(".container");

const p = document.createElement("p");
p.textContent = "Hey, I'm red";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "solid 1px black";
div.style.backgroundColor = "pink";

const div_h1 = document.createElement("h1");
div.textContent = "I'm in a div";
div.appendChild(div_h1);

const div_p = document.createElement("p");
div_p.textContent = "Me too!";
div.appendChild(div_p);

container.appendChild(div);

btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.backgroundColor = "green";
});
