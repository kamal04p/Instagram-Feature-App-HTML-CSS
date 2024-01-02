let isStatus = document.querySelector("h5")
let btn = document.querySelector("#add")
check = 0;
let con = document.querySelector("#img")
let love = document.querySelector("#love")

let card = document.querySelector("#card")
let crsr = document.querySelector(".cursor")

let elem = document.querySelectorAll(".elem")




btn.addEventListener("click", function(){
    if(check == 0 ){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        check = 1
        btn.innerHTML = "Remove Friend"
        console.log('check 0')
    }else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        check = 0
        btn.innerHTML = "Add Friend"
        console.log('check 1')

    }
});


con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = 0.8
    console.log('dbl clicked')

    setTimeout(function(){
        love.style.opacity = 0  
        love.style.transform = "translate(-50%, -50%) scale(0)"
     }, 500);
    // setTimeout(function(){
    //     love.style.transform = "translate(-50%, -50%) scale(0)"
    //     love.style.opacity = 0  
    //  }, 2000);
});


card.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    // console.log("dets");
});

elem.forEach( function (val) {

    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x + "px";
        // val.childNodes[3].style.top  = dets.y + "px"
        console.log("dets");
    });
    console.log('hola')
})