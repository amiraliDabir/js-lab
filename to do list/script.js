const d = document
let input = d.getElementById("input")
let deleteTasks = d.querySelectorAll(".delete");
let addTask = d.querySelector(".add");
let finishedTask = d.querySelectorAll(".finished");
let tbody = d.querySelector(".tbody")
let count = 1;


function add() {

    addTask.classList.add("newStyle")

    if (input.value != "") {
        tbody.innerHTML +=

            `<tr>
<td>${++count}</td>
<td>${input.value}</td>
<td>${"in progress"}</td>
<td>
    <button class="delete">DELETE</button>
    <button class="finished">FINISHED</button>
</td>




</tr>`

        input.value = '';



    }
    let deleteTasks = d.querySelectorAll(".delete");
    let finishedTask = d.querySelectorAll(".finished");
    for (const iterator of deleteTasks) {
        iterator.addEventListener("click", Delete)
    }
    for (const iterator of finishedTask) {
        iterator.addEventListener("click", finish)
    }

}


function Delete() {
    this.parentElement.parentElement.innerHTML = "";
}
function finish() {

    this.parentElement.parentElement.style = "color:green ; font-weight:600 "

    this.parentElement.previousElementSibling.innerHTML = "Done"

}


addTask.addEventListener("click", add);

for (const iterator of deleteTasks) {
    iterator.addEventListener("click", Delete)
}
for (const iterator of finishedTask) {
    iterator.addEventListener("click", finish)
}
