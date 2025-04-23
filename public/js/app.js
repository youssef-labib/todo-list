let h1 = document.getElementById("myH1")
let myInput = document.getElementById("myInput")
let taskContainer = document.querySelector(".task-list")

let names = []
let myName = null

myInput.addEventListener("change", (e) => {
    myName = e.target.value
})

document.querySelector("button").addEventListener("click", () => {
    let data = { id: names.length, text: myName, done: false }
    names.push(data)
    console.log(names)
    myInput.value = ""
    updateName()
})

const updateName = () => {
    taskContainer.innerHTML = ""
    names.forEach(name => {
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.textContent = name.text

        let btn = document.createElement("button")
        btn.textContent = "Edit Task"

        let btn2 = document.createElement("button")
        btn2.textContent = "Delete Task"

        let btn3 = document.createElement("button")
        btn3.textContent = "Mark as Done"

        div.appendChild(h1)
        div.appendChild(btn)
        div.appendChild(btn2)
        div.appendChild(btn3)

        btn2.addEventListener("click", () => {
            deleteelement(name.id)
        })

        btn3.addEventListener("click", () => {
            done(name.id)
        })

        if (name.done) {
            h1.style.textDecoration = "line-through"
        }

        btn.addEventListener("click", () => {
            btn.classList.add('hidden')
            let div2 = document.createElement("div")
            let btnSave = document.createElement("button")
            btnSave.textContent = 'Save'
            let inputChange = document.createElement('input')
            inputChange.setAttribute("type", "text")
            inputChange.value = name.text

            div.appendChild(div2)
            div2.appendChild(inputChange)
            div2.appendChild(btnSave)

            btnSave.addEventListener('click', () => {
                btn.classList.remove('hidden')
                let change = inputChange.value
                console.log(change)
                updateElement(name.id, change)
                div2.innerHTML = ''
            })
        })

        taskContainer.appendChild(div)
    })
}

const deleteelement = (i) => {
    let myelement = names.find(e => e.id == i)
    let index = names.indexOf(myelement)
    names.splice(index, 1)
    console.table(names)
    updateName()
}

const updateElement = (i, change) => {
    let updatedElemen = names.find(e => e.id == i)
    updatedElemen.text = change
    console.table(names)
    updateName()
}

const done = (i) => {
    let doneItem = names.find(e => e.id == i)
    doneItem.done = true
    updateName()
}
