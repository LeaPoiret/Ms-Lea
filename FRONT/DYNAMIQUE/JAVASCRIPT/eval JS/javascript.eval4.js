var PU = parseInt(prompt("Saisissez le prix de votre article :"));//parseInt est la pour transformer une chaine de caractère en number
var QTECOM = parseInt(prompt("Saisissez la quantité de vos articles :"));
var PAP = 0;
var TOT = PU * QTECOM;//J'avais mis cette ligne en première ce qui faisait que ça ne marchait pas.

if(TOT>=100 && TOT<=200){
    var resultat = (TOT * 5) / 100;
    var PAP = TOT - resultat;
    alert("Le prix à payer est de : " + PAP + "€ après une remise de 5%");
    console.log("Le prix à payer est de : " + PAP + "€ après une remise de 5%");

    if(PAP < 500){
    var PORT = (PAP * 2) / 100;
    alert("Les frais de ports s'éleves à : " + PORT + "€");
    console.log("Les frais de ports s'éleves à : " + PORT + "€");
        if(PORT < 6){
            var resultat = (PAP + 6);
            alert("Le prix à payer avec les frais de port est de : " + resultat + "€");
            console.log("Le prix à payer avec les frais de port est de : " + resultat + "€");
                    }
                }
                        }
else if(TOT < 100){
    var PAP = TOT
    if(PAP < 500){
        var PORT = (PAP * 2) / 100;
        alert(PORT);
        console.log(PORT);
            if(PORT < 6){
                var resultat = (PAP + 6)
                alert("Les prix a payer avec les frais de port et sans remise est de : " + resultat + "€")
    }
    }
                    }
    else{
        var resultat = (TOT * 10) / 100;
        var PAP = TOT - resultat;
        alert("Le prix à payer sera de : " + PAP + "€ après une remise de 10%");
        console.log("Le prix à payer sera de : " + PAP + "€ après une remise de 10%");

            if( PAP < 500){
                var port = ( PAP * 2) / 100;
                var resultatfinish = PAP + port;
                alert("Les frais de port s'élèves à : " + port + "€");
                console.log("Les frais de port s'élèves à : " + port + "€");

                    if(port < 6){
                        var resultat = ( TOT + 6 );
                        alert(resultat)
                        alert("Le prix avec les frais de port sera de : " + resultat + "€");
                        console.log(" Le prix avce les frais de port sera de : " + resultat + "€");
                                }

                    alert("Le prix à payer après frais de port sera de : " + resultatfinish + "€");
                    console.log("Le prix à payer après frais de port sera de : " + resultatfinish + "€");
                            }
                    else{
                        alert("Le prix à payer après toutes les réduction sera de : " + PAP + "€");
                        }
        }