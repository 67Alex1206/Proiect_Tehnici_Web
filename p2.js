window.onload = function(){


    document.getElementById("animation1").addEventListener("click",rnd)
    document.getElementsByClassName("big-box")[0].addEventListener("click",res)

    var def=getComputedStyle(document.body).backgroundColor;
    console.log(def.backgroundColor);

    function rnd(event){
        let colors=["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "teal", "brown", "violet", "indigo", "gold"];
        let x=Math.floor(Math.random()*15)
        document.body.style.background=colors[x];
        event.target.classList.add("click1")
        setTimeout(dl1,300)
        function dl1(){
            event.target.classList.remove("click1")
            event.target.classList.add("click2")
        }
        
        setTimeout(dl2,600)
        function dl2(){
            event.target.classList.remove("click2")
        }
        event.stopPropagation();
    

    }

    function res(){
        document.body.style.backgroundColor=def
    }
}