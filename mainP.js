const getData = async ()=>{
    let address = 'https://randomuser.me/api/';
    let petition = await fetch(address); 
    let resultado = await petition.json();   
    let name = resultado.results[0].name.first;
    let lastName = resultado.results[0].name.last
    let picture = resultado.results[0].picture.large
    let email = resultado.results[0].email
    let cell = resultado.results[0].cell
    let pais = resultado.results[0].location.country
    // console.log(resultado.results[0]); 

    const nameLastName = name + " " +lastName;
    document.querySelector("#name").innerHTML = nameLastName.toUpperCase();
    document.querySelector("#hr").innerHTML = nameLastName;

    function check() {

        if((document.getElementById("myData").textContent) === "Mis Datos") {
            function misDatos(){
                document.querySelector("#pais").innerHTML = "Vivo en " + pais;
                document.querySelector("#mail").innerHTML = "mi mail es " + email;
                document.querySelector("#cell").innerHTML = "mi celular es " + cell;
                };
            misDatos();
        };
      };
    
    check()

    document.querySelector("#hr").style.color= "#ed0e29";
    document.querySelector("#name").style.color= "#2a8fde";
    document.querySelector(".foto").style.backgroundImage=`url(${picture})`;
}

getData()






