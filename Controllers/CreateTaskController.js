import { Datas } from "../Model/datas.js";

const Datass = new Datas();

const form = document.getElementById("form");

const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const status = document.getElementById("status").value;
const date = document.getElementById("date").value;
console.log(title, description, status, date);

form.addEventListener("submit", (f) => {
  f.preventDefault();

  if (!title || !description || !status || !date) {
    alert("Title, description, status, date is Required");
  } else {
    Datass.postData();
    form.reset();
  }
});
