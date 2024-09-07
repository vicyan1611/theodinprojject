const btn = document.querySelector("button");
const textinput = document.querySelector("#item");

const itemlist = document.querySelector(".items-list");

const createListItem = (str) => {
  const li = document.createElement("li");

  const mspan = document.createElement("span");
  mspan.textContent = str;
  li.appendChild(mspan);

  const mbutton = document.createElement("button");
  mbutton.textContent = "Delete";
  li.appendChild(mbutton);

  mbutton.addEventListener("click", (e) => {
    li.remove();
  });

  return li;
};

btn.addEventListener("click", (e) => {
  itemlist.appendChild(createListItem(textinput.value));
});
