/*Variables*/
var Hiring=true;

/*functions*/
function hiringPage(){
    if(Hiring==true){
        document.getElementById("NHire").style.display="none";
        document.getElementById("YHire").style.display="inline-block";
    }
    else if(Hiring==false){
        document.getElementById("YHire").style.display="none";
        document.getElementById("NHire").style.display="inline-block";
    }
    else{
        document.body.innerHTML="Javascript error";
    }
}
window.addEventListener(onload, hiringPage());
/*function calls*/

/*Notebook

*/