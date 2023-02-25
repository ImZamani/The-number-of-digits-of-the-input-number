let $ = document
let input = $.querySelector(".input")
let btn = $.querySelector(".btn")
let showResult = $.querySelector(".showResult")


let counter = 0;

btn.addEventListener("click" , ()=> {
    let inputValue = input.value
    if(inputValue == 0){
        counter = 1;
    }else{
        for(let i = 0 ; (inputValue / 10) != 0 ; i++){
            counter++;
            inputValue = Math.floor(inputValue / 10);
        }
    }
    showResult.innerHTML = counter
    counter = 0
    input.value = ""
})