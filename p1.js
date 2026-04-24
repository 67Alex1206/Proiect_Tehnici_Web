window.onload = function(){


    var key="col1"
    if(localStorage.getItem(key))
    {
        let c=this.localStorage.getItem(key);
        document.getElementById("nr1").style.background=c;
    }


    document.getElementById("color").addEventListener("click",col)
    document.addEventListener("keypress",res)
    document.getElementsByTagName("button")[1].addEventListener("click",rm)

    function col(){
        let clr=document.getElementById("culoare").value;
        document.getElementById("nr1").style.background=clr;
        localStorage.setItem(key,clr);
    }

    function res(event){
        if(event.key=="r")
        {
            localStorage.clear();
            location.reload();
        }
            
    }

    function rm(){
        document.getElementsByClassName("big-box")[0].remove()
    }

    let h1=document.createElement("h4");
    let h2=document.createElement("h4");
    h1.classList.add("data");
    h2.classList.add("data");
    document.getElementById("fade").appendChild(h1);
    document.getElementById("fade").appendChild(h2);
    document.getElementsByClassName("data")[0].textContent = new Date().toLocaleDateString();

    setInterval(tm, 1000);
    function tm(){
        document.getElementsByClassName("data")[1].textContent = new Date().toLocaleTimeString();
    }

    


}