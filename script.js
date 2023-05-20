var harrow = document.querySelector("#harrow")
var difflocation = document.querySelector("#difflocation")

var a = 0
harrow.addEventListener("click",function(){
    

   if (a==0) {
    harrow.style.rotate="180deg"
    difflocation.style.display = "block"
    a=1
   } else {
    harrow.style.rotate="0deg"
    difflocation.style.display = "none"
    a=0
   }

})

window.addEventListener("click",function(dets){
    console.log(dets.target)
    if(dets.target==head){
        difflocation.style.display = "none"
        harrow.style.rotate="0deg"
    }
})


