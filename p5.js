window.onload = function(){


    let c=sessionStorage.getItem("user")
    if(c==null)
    {
        window.location.href="login.html";
    }
    let bx=document.getElementsByClassName("big-box")[0]
    let usr=document.createElement("h4")
    usr.innerHTML="Salut, " + c.toUpperCase()
    bx.insertBefore(usr,bx.lastElementChild)


    let vf=this.localStorage.getItem("sub");
    if(vf==1)
    {
        let msg=document.createElement("p");
        msg.style.color="#bef59d"
        msg.innerHTML="Feedback trimis cu succes!"
        document.getElementById("fb").appendChild(msg);
        document.getElementById("b").remove();

    }


    document.getElementById("logout").addEventListener("click",log)

    function log()
    {
        sessionStorage.removeItem("user");
        window.location.href="login.html";
    }

    document.getElementById("fb").addEventListener("submit",sub)

    function sub(event){
        event.preventDefault();
        let n=document.getElementById("nume");
        let p=document.getElementById("prenume");
        let m=document.getElementById("mail");
        let nota=document.getElementById("nota");   
        let nr=0

        if(n.value.length==0)
        {
            document.getElementById("1").style.color="red"
        }
        else{
            document.getElementById("1").style.color="white"
            nr++;
        }


        if(p.value.length==0)
        {
            document.getElementById("2").style.color="red"
        }
        else{
            document.getElementById("2").style.color="white"
            nr++;
        }

        let testemail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(testemail.test(m.value)==false){
            document.getElementById("3").style.color="red"
        }
        else{
            document.getElementById("3").style.color="white"
            nr++;
        }

        if(parseInt(nota.value)<1 || parseInt(nota.value)>10 || nota.value.length==0){
            document.getElementById("4").style.color="red"
        }
        else{
            document.getElementById("4").style.color="white"
            nr++;
        }

        if(nr==4)
        {
            if(document.getElementById("err")!=null)
                document.getElementById("err").remove();
            let msg=document.createElement("p");
            msg.style.color="#bef59d"
            msg.innerHTML="Feedback trimis cu succes!"
            document.getElementById("fb").appendChild(msg);
            document.getElementById("b").remove();
            localStorage.setItem("sub",1);
        }
        else{
            if(document.getElementById("err")==null)
            {
                let msg=document.createElement("p");
                msg.style.color="red"
                msg.innerHTML="Unele câmpuri nu au fost completate corect"
                msg.id="err"
                document.getElementById("fb").appendChild(msg); 
            }

        }
            

    }


    

     
}