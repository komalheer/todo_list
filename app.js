function getList() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
	
}
 
function addItem() {
	var todos = getlist();
    todos.push(document.getElementById('addTodoItem').value);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    showInput();
 
    return false;
}
 
function deleteItem() {
 
    var todos = getList();
    todos.splice(this.getAttribute('id'), 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 

    showInput();
 
    return false;
}
 
function showInput() {
	
    var todos = getList();
 
    var html = '<ol>';
    for(var j=0; j<todos.length; j++) {
        html += '<li >' + todos[j] + '<button class="deleteItem" id="' + j  + '">Delete</button></li>';
		
    };
    html += '</ol>';
 
    document.getElementById('todoDiv').innerHTML = html;
    var buttonDelete = document.getElementsByClassName('deleteItem');
    for (var j=0; j < buttonDelete.length; j++) {
        buttonDelete[j].addEventListener('click', deleteItem);
    };
	
	
 var addlist = document.querySelector('OL');
addlist.addEventListener('click', function(strikeItem) {
  if (strikeItem.target.tagName === 'LI') {
	
   strikeItem.target.classList.toggle('checked');
	
  }
});

}
 
document.getElementById('addTodo').addEventListener('click', addItem);
showInput();
	document.getElementsByClassName('checked');
	
	
