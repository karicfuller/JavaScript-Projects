/* this function gets the task from the input */
function get_todos() {
    /* this creates an array of tasks that are inputed */
    var todos = new Array;
    /* this pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* if the input is not null then JSON.parse will communicate 
    with the web browser to make the task and creates a variable of it */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* this function adds the inputed task to the get_todos function array */
function add() {
    /* this takes the inputed task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* this adds a new task the end of the array */
    todos.push(task);
    /* this converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* this function keeps the tasks permanetly displayed on the screen */
function show() {
    /* this sets the task that was retrieved as a variable */
    var todos = get_todos();
    /* this sets up each task as an unordered list */
    var html = '<ul>';
    /* this displays a task to the list in the order that it is inputed */
    for (var i = O; i < todos.length; i++) {
        /* this also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '" >x</button></li>';
    };

    html += '</ul>';
    /* this displays the task as a list */
    document.getElementById('todos').innerHTML = html;
}
/* this displays the inputed task */
document.getElementById('add').addEventListener('click', add);
show();