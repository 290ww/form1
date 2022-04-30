const input = document.querySelectorAll('.fmain__sec__fgroup__inp');
const lable = document.querySelectorAll('.fmain__sec__fgroup__lbl');

for(let i = 0; i <= (input.length - 1); i++ ){
    input[i].addEventListener('focusout', ()=>{
        if(input[i].value.trim() != ""){
            console.log("add");
            input[i].classList.add('inpFoc');
            lable[i].classList.add('lblFoc');
        }else{
            console.log("remove");
            input[i].value = "";
            input[i].classList.remove('inpFoc');
            lable[i].classList.remove('lblFoc');
        }
    })
}



