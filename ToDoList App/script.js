const taskform = document.getElementById("taskform");
const task = [];
taskform.addEventListener("submit",function(e){
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;
    const due_date = document.getElementById("due-date").value;

    const task = {title, description, priority, due_date};
tasks.push(task);
this.reset();
});