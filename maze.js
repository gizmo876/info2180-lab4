window.onload = function(){
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
}
