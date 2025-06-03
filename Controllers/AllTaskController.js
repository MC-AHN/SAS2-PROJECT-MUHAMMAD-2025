import { Datas } from "../Model/datas.js";

const result = document.querySelector("tbody");
const Datass = new Datas();

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  render();
});

async function render() {
  try {
    const datas = await Datass.getData();
    result.innerHTML = "";

    let number = 1;
    datas.forEach((f) => {
      const para = document.createElement("tr");

      para.innerHTML = `
      <td>${number}</td>
      <td>${f.title} </td>
      <td>${f.description} </td>
      <td>${f.is_completed === true ? "Completed" : "Not Completed"}</td>
      <td>${new Date(f.dueDate).toDateString()}</td>
      <button id="edit-${
        f.id
      }" type="button" class="btn btn-warning bg-warning text-white m-1 p-2 " data-bs-toggle="modal" data-bs-target="#detailModal">Edit</button>
      <button id="delete-${
        f.id
      }" class="btn btn-danger bg-danger text-white m-1 p-2">Delete</button>
      `;
      result.appendChild(para);

      number = ++number;
      document.getElementById(`edit-${f.id}`).addEventListener("click", (s) => {
        s.preventDefault();
        editData(`${f.id}`);
      });

      document
        .getElementById(`delete-${f.id}`)
        .addEventListener("click", (s) => {
          s.preventDefault();
          deleteData(`${f.id}`);
        });
    });
  } catch (error) {
    console.error("Error while rendering data: ", error);
  }
}

async function deleteData(id) {
  await Datass.deleteData(id);
  render();
}

async function editData(id) {
  const getUser = await fetch(
    `https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos/${id}`
  );


  if (!getUser.ok) {
    throw new Error(`Error while fetch data user: `);
  }


  window.id = id;
  const dataUser = await getUser.json();
  document.getElementById("titleB").value = dataUser.title;
  document.getElementById("descriptionB").value = dataUser.description;
  document.getElementById("statusB").value = dataUser.is_completed;
  document.getElementById("dateB").value = dataUser.dueDate;
  render();
}

document.getElementById("update").addEventListener("click", async (e) => {
  e.preventDefault();

  console.log(id);
  try {
      await Datass.editData(id);

      render()
  } catch {}
});

