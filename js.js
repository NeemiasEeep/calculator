function insert(num){
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}
function limpar() {
    document.getElementById('visor').innerHTML="";
}
function apagar() {
    var visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length-1);
}
function final(){
    var visor = document.getElementById('visor').innerHTML;

    if (visor) {
        document.getElementById('visor').innerHTML = eval(visor);
    } else {
        document.getElementById('visor').innerHTML="Deu ruim";
    }
}