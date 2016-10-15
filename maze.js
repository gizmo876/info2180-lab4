window.onload = function(){
    var hitE= false;
    var borders = document.querySelectorAll(".boundary");
    for (i = 0; i < borders.length;i++){
        borders[i].addEventListener("mouseover",allborders);
    }
}


function allborders(){
    var borders = document.querySelectorAll(".boundary");
    for (var  i = 0; i < borders.length; i++){
        borders[i].className= "boundary youlose";
    }
    document.getElementById("start").addEventListener("click", reset);
}
    
function start(){
    var borders = document.querySelectorAll(".boundary");
        for (i = 0; i < borders.length; i++)
        {
            borders.classList. removeAttribute("you lose");
        }
}
    
function end(){
   var hitE=true;
    if(hitE)
    {
    alert("You Win!");
    } else
    {
        alert("You Lost! Try Again...");
    }
}
