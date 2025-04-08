
let todoList=[];//empty array
//displayItems();


function addTodo(){
    let inputElement = document.querySelector('#enter').value ;//to enter value
    console.log(inputElement);
    todoList.push(inputElement);//to add multiple element in empty array
    document.querySelector('#enter').value='';// this code used to make text area empty once add button click.
    displayItems();
}

function displayItems(){
    let displayElement  = document.querySelector('#todo-items');
    displayElement.innerText = '';
    for(let i=0;i<todoList.length;i++){
        displayElement.innerText  = displayElement.innerText +  
        '\n ' + todoList[i];
    }
}