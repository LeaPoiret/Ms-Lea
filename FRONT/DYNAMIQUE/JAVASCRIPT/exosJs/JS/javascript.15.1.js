var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",

function(){
var txt = document.getElementsByName("prenom");
for(i=0;i<txt.length;i++){
console.log(txt[i].value)
    alert("Vous avez saisi : " + "'" + txt[i].value + "'")

}
}
)






















