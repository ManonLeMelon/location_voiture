// JE N'ARRIVE PAS A LA FAIRE FONCTIONNER JE L'AI MIS EN COMM AFIN DE NE PAS BLOQUER LE SCROLL
// //Ligne du tableau
// var images = [
//     "assets/img/voiture1.jpg",
//     "assets/img/voiture2.jpg",
//     "assets/img/voiture3.jpg",
// ];
// //On pointe sur qu'elle photo apparait quand on ouvre la page donc index
// var index = 0
// var oreo;

// // window.onload écrit en jquery
// $(function(){
//     $("#droite").on("click", imageSuivante);
//     $("#gauche").on("click", imagePrecedante);
//     //On change l'image toutes les 15secondes
// oreo = setInterval(imageSuivante, 15000);
// });

// function imageSuivante(){
//     //GESTION DE L'INDEX
//     //On prend la longueur du tableau (lenght) - une image pour êtrre à la denrière images.
//     if(index >= images.length -1){
//         //on repart du début
//         index = 0;
//     }else{
//         //On passe a l'image suivante
//         index++;
//     }
//     changerImage();
// }

// function imagePrecedante(){
//     //GESTION DE L'INDEX
//     //On prend la longueur du tableau (lenght) - une image pour êtrre à la denrière images.
//     if(index === 0 ){
//         //on repart du début
//         index = images.length -1;
//     }else{
//         //On passe a l'image suivante
//         index--;
//     }

//     changerImage();
// }




//SCROLL
$(function(){
    //Détecter le scroll
    $(window).on("scroll",defilement);
});

function defilement (){
    //On récupère la hauteur de la fenêtre
    var hauteurFenetre = $(window).height();
    //On récupère la hauteur du document
    var hauteurDocument = $(document).height();
    //On récupère la position "haute" du défilement
    var positionHaute = $(document).scrollTop();
    
    //Si le scroll attent le bas du document 
    //PositionHaute + hauteurFenetre = hauteurDocument
    if(positionHaute + hauteurFenetre >= hauteurDocument - 1){
		$("#suite").removeClass("d-none");
	}
	
}
