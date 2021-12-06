var input = document.getElementsByTagName('input')[0];
var btn = document.getElementsByTagName('button')[0];
var toDolist = document.getElementsByClassName('todos')[0];
var count = 0;

btn.addEventListener('click', () => {
    var para = document.createElement('p');
    para.setAttribute("key", count);
    count += 1;
    para.innerHTML = input.value;
    toDolist.appendChild(para);
    input.value = "";

    para.addEventListener("click", () => {
        toDolist.removeChild(para);
    });
    
});



