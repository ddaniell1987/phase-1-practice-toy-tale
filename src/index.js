let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetchToyData() {
  fetch("http://localhose:3000/toys")
  .then(response => response.json())
  .then(toys => toys.forEach(toy => appendEachToytoDiv(toy)))
};

function appendEachToytoDiv(toy) {
  const toyContainer = document.getElementById("toy-collection");
  const card = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const btn = document.createElement("button");
}

h2.innerHTML =toy.name;
img.src = toy.img;
p.innerHTML = toy.likes;
btn.className = "like-btn";
btn.innerHTML = "like";

card.appendChild(h2);
card.appendChild(img);
card.appendChild(p);
card.appendChild(btn);

function likeToy(toy) {
  let likes = toy.likes;
  let configurationObject = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "likes": likes + 1

    }),
  }
  fetch(`http://localhost:3000/toys/${toy.id}`, configurationObject);
  return likes + 1
}