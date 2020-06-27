/*Le code est améliorable :
* Si il est laissé ainsi c'est uniquement pour que vous puissiez comprendre la démarche
* Pour l'améliorer : au lieu de génerer un tableau pour chaque bibliothequeDeTest calculer directement la somme
*/


var maisons = [2,16,9,5,20,10,1]
var depart = 0
var departRecherche = 0
var bibliotheque = []
var j = 0
var k = 0
var bibliothequeDeTest = []


for(depart=0;depart!=maisons.length;depart++){ //Incrmentation départ
  j=0
  bibliotheque[depart] = []
  for(departRecherche=depart;departRecherche!=maisons.length && departRecherche<=maisons.length;departRecherche++){ // Incrementation departRecherche
    bibliothequeDeTest = []
    bibliothequeDeTest = [[maisons[depart], depart]]
    k = 1
    bibliotheque
    for (var i=departRecherche+1; i!=maisons.length && i<=maisons.length; i+=2){
      if( k >= 1 ){
         if(!(bibliothequeDeTest[k-1][1]==(i-1))){
          bibliothequeDeTest[k] = [maisons[i], i]
           k += 1
        }
      }
    }
    //Test si il n'existe pas une var bibliothequeDeTest similaire dans bibliotheque[depart][j]
    if(j>=1){
      var sommeBase = 0
      var sommeNew = 0
      bibliotheque[depart][j-1].map((value)=> {
        sommeBase+=value[0]
      })
      bibliothequeDeTest.map((value)=> {
        sommeNew += value[0]
      })
      if (sommeBase<sommeNew){
        bibliotheque[depart][j-1] = bibliothequeDeTest
      }
    }else if (j==0){
      bibliotheque[depart][j] = bibliothequeDeTest
      j+=1
    }
  }
  bibliotheque[depart]=sommeBase
}

var resultat = Math.max(...bibliotheque)

console.log(resultat)