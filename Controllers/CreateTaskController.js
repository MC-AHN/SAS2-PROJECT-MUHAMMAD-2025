import { Datas } from "../Model/datas.js";

const Datass = new Datas();

const form = document.getElementById("form");


form.addEventListener("submit", (f) => {
  f.preventDefault();
  
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const status = document.getElementById("status").value;
  const date = document.getElementById("date").value;
  console.log("ini cek", title, description, status, date);
  if (!title || !description || !status || !date) {
    alert("Title, description, status, date is Required");
  } else {
    Datass.postData();
    form.reset();
  }
});
