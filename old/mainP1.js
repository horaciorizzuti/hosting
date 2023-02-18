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
    console.log(resultado.results[0]); 
    //console.log(name); 
    //console.log(picture); 

    document.querySelector("#name").innerHTML = name + " " +lastName;  
    document.querySelector("#hr").innerHTML = name + " " +lastName;
    
    document.querySelector("#pais").innerHTML = "Vivo en " + pais;
    document.querySelector("#mail").innerHTML = "mi mail es " + email;
    document.querySelector("#cell").innerHTML = "mi celular es " + cell;



    // document.querySelector(".rojo").innerHTML = lastName;  
    document.querySelector("#hr").style.color= "red";
    document.querySelector("#name").style.color= "blue";
    document.querySelector(".foto").style.backgroundImage=`url(${picture})`;
    document.querySelector("#name").style.color= "blue";


}
getData()