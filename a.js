const i1 = document.getElementById("i1"),
 btn = document.getElementById("b1"),
 a1=document.getElementById("a1");
btn.addEventListener("click",function(){
    a1.href = i1.value;
    i1.value="";
})