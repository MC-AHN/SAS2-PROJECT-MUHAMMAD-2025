import { Datas } from "../Model/datas.js"

const Datass = new Datas()

const form = document.getElementById("form")

form.addEventListener("submit", (f) => {
    f.preventDefault()

    Datass.postData()

    form.reset()
})