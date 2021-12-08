const com = document.querySelector("#completed");
const pen = document.querySelector("#pending");
const divTodo = document.querySelector(".todos");


fetch("https://jsonplaceholder.typicode.com/todos", {
    "method" : "GET"
})
.then(response => {
    return response.json();
})
.then(data =>{
    const dataArr = data;
    var completedArr = [];
    var pendingArr = [];
    for(var i = 0; i<dataArr.length; i++){
        if(dataArr[i]["completed"] === true){
            completedArr.push(dataArr[i]["title"]);
        }else{
            pendingArr.push(dataArr[i]["title"]);
        }
    }
    com.addEventListener("click", function(){
        document.querySelectorAll(".pending").forEach(e => e.remove());
        
        for(let i =0; i<completedArr.length; i++){
            var para = document.createElement("p");
            para.setAttribute("class", "comp");
            para.innerText = completedArr[i];
            divTodo.append(para);

        }
        
        
    })

    pen.addEventListener("click", function(){
        document.querySelectorAll(".comp").forEach(e => e.remove());

        for(let i =0; i<pendingArr.length; i++){
            var para = document.createElement("p");
            para.setAttribute("class", "pending")
            para.innerText = pendingArr[i];
            divTodo.append(para);
        }
        
    })
    
    
})
.catch(err => {
    console.error(err);
})






