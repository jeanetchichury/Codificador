// var str = document.querySelector('p').textContent
// var coded = [str.charCodeAt(0), str.charCodeAt(1), str.charCodeAt(2), str.charCodeAt(3), str.charCodeAt(4), str.charCodeAt(5), str.charCodeAt(6), str.charCodeAt(7)]
// var decoded = String.fromCharCode(coded[0], coded[1], coded[2], coded[3], coded[4], coded[5], coded[6], coded[7])
var tipo = document.querySelector('#tipo')
var valor = document.getElementsByClassName('coded')
tipo.addEventListener('change', function (){
    if (tipo.value != 'cifra'){
        for (i=0;i<valor.length;i++)
        valor[i].style.display = "none"
        }
    else {
        for (i=0;i<valor.length;i++)
        valor[i].style.display = "block"
        }
})

var coded = ""
function toCifra(msg, num){
    let asc
    for (i=0; i<msg.length; i++){
        if (msg[i] == " ")
        coded += " "
        else {
            if (msg.charCodeAt(i)+num>122)
            asc = msg.charCodeAt(i)+num-26
            else
            asc = msg.charCodeAt(i)+num
            coded += String.fromCharCode(asc)
        }
    }
return coded
}
var decoded = ""
function toNormal(msg, num){
    let letra
    for (i=0; i<msg.length; i++){
        if (msg[i] == " ")
        coded += " "
        else {
            if (msg.charCodeAt(i)-num<97)
            letra = msg.charCodeAt(i)-num+26
            else
            letra = msg.charCodeAt(i)-num
            coded += String.fromCharCode(letra)
        }
    }
return coded
}