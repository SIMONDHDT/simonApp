function calcul()
{
  var nbrLitre = document.getElementById('litre').value;
  var nbrKm = document.getElementById('km').value;
  var prix = document.getElementById('prix').value;
  var paragrapheResultat = document.getElementById('resultat');


  if(nbrEnfant)
  {
    if(!isNaN(nbrEnfant))
    {
      //verifier que la variable est un nombre entier supérieur ou égal à 1
      if(parseFloat(nbrEnfant) == parseInt(nbrEnfant) && nbrEnfant >= 1)
      {
        var premierEnfant = 95.80;
        var deuxiemeEnfant = 177.27;
        var plusDeTroisEnfants = 264.67;

        if(nbrEnfant == 1)
        {
          var resultatCalcul = premierEnfant;

          paragrapheResultat.innerHTML = '<p class="border">Vous avez droit à <b>' + resultatCalcul.toFixed(2) + ' €</b> d\'allocations familiales<p>';
        }
        if(nbrEnfant == 2)
        {
          var resultatCalcul = premierEnfant + deuxiemeEnfant;

          paragrapheResultat.innerHTML = '<p class="border">Vous avez droit à <b>' + resultatCalcul.toFixed(2) + ' €</b> d\'allocations familiales<p>';
        }
        if(nbrEnfant > 2)
        {
          var enfantSupTrois = (nbrEnfant - 2) * plusDeTroisEnfants;
          var resultatCalcul = premierEnfant + deuxiemeEnfant + enfantSupTrois;

          paragrapheResultat.innerHTML = '<p class="border">Vous avez droit à <b>' + resultatCalcul.toFixed(2) + ' €</b> d\'allocations familiales<p>';
        }
      }
      else
      {
        alert('Veuillez entrer un nombre entier supérieur ou égal à 1 .');
      }
    }
    else
    {
      alert('Veuillez entrer un nombre .');
    }
  }
  else
  {
    alert('Veuillez entrer le nombre d\'enfants .');
  }
}
