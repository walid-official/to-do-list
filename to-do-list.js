let inputValue = document.getElementById("input");
let inputContent = document.getElementById("input-content");
let submit = document.getElementById("btn");

submit.addEventListener("click", function(){
    if(inputValue.value.length == 0){
        alert("Enter Your Task...")
    }else{
        inputContent.innerHTML += 
        `<div  class="task">
            <span id="taskName">
                ${inputValue.value}
            </span>
        </div>
        `
        let task = document.getElementsByClassName('task');
        task.style.backgroundColor = 'white'
        task.style.color = 'black'
        task.style.padding = '10px'
    }
});

