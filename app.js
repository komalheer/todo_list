function getList() {
    var list = [];
    var list_str = localStorage.getItem('todo');
    if (list_str !== null) {
        list = JSON.parse(list_str); 
    }
    return list;
    
}
 
function addItem() {
    var list = getList();
    list.push(document.getElementById('addTodoItem').value);
    localStorage.setItem('todo', JSON.stringify(list));
 
    showInput();
 
    return false;
}
 
function deleteItem() {
 
    var list = getList();
    list.splice(this.getAttribute('id'), 1);
    localStorage.setItem('todo', JSON.stringify(list));
 

    showInput();
 
    return false;
}
 
function showInput() {
    
    var list = getList();
 
    var html = '<ol>';
    for(var j=0; j<list.length; j++) {
        html += '<li >' + list[j] + '<button class="deleteItem" id="' + j  + '">Delete</button></li>';
        
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
