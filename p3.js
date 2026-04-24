window.onload = function(){


    let tabel ={
        jocuri:new Array(),
        nr:0,
    }

    if(localStorage.getItem("nr"))
    {
        tabel=JSON.parse(localStorage.getItem("nr"));
        console.log(tabel.jocuri);
    }


    var games=new Array();

    for(let i=3; i>=0; i--)
    {
        games[i]=this.document.getElementsByClassName("crds")[i].cloneNode(true);
  
    }

    for(let i=3; i>=tabel.nr; i--)
    {
        
        document.getElementsByClassName("grid-box")[0].lastElementChild.remove()   
    }

    if(tabel.nr==0)
    {
        let d=document.createElement("p");
        d.id="temp";
        d.style.fontSize="100px";
        document.getElementsByClassName("grid-box")[0].appendChild(d); //ca sa nu se micsoreze div-ul cand dispar toate jocurile

    }

    
    
    

    document.getElementById("+").addEventListener("click",add)
    document.getElementById("-").addEventListener("click",rem)
    document.addEventListener("keypress",res)


    function add(){
        if(tabel.nr<4)
        {
            tabel.nr++;
            tabel.jocuri.push(tabel.nr);
            localStorage.setItem("nr",JSON.stringify(tabel));
            if(tabel.nr==1)
            {
                document.getElementById("temp").remove();
            }
            document.getElementsByClassName("grid-box")[0].appendChild(games[tabel.nr-1])
        }
    }

    function rem(){
        if(tabel.nr>0)
        {
            document.getElementsByClassName("grid-box")[0].lastElementChild.remove()
            tabel.nr--;
            tabel.jocuri.pop();
            localStorage.setItem("nr",JSON.stringify(tabel));
            if(tabel.nr==0)
            {
                let d=document.createElement("p");
                d.id="temp";
                d.style.fontSize="100px";
                document.getElementsByClassName("grid-box")[0].appendChild(d); //ca sa nu se micsoreze div-ul cand dispar toate jocurile
            }
        }
        
    }


    function res(event){
        if(event.key=="r")
        {
            localStorage.clear();
            location.reload();
        }
            
    }
}