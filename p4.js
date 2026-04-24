window.onload = function(){

    let c=sessionStorage.getItem("user");
    if(c){
        window.location.href="feedback.html";
    }





    document.getElementById("lf").addEventListener("submit",sub)

    function sub(event){
        event.preventDefault();
        let user=document.getElementById("username").value;
        let pass=document.getElementById("pass").value;
        

        fetch("users.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let ok=0;

                for (let i=0; i<data.length; i++) {
                    if (data[i].username==user && data[i].password==pass) {
                        ok=1;
                    }
                }


                if(ok==1)
                {
                    sessionStorage.setItem("user", user);
                    window.location.href="feedback.html";
                }
                else{
                    alert("Date greșite");
                }
            })
    }
}