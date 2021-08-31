// var str = document.querySelector('p').textContent
// var coded = [str.charCodeAt(0), str.charCodeAt(1), str.charCodeAt(2), str.charCodeAt(3), str.charCodeAt(4), str.charCodeAt(5), str.charCodeAt(6), str.charCodeAt(7)]
// var decoded = String.fromCharCode(coded[0], coded[1], coded[2], coded[3], coded[4], coded[5], coded[6], coded[7])
var msgOriginal = document.querySelector('#decoded')
var numCifra = document.querySelector('#coded')
var tipo = document.querySelector('#tipo')
var valor = document.getElementsByClassName('coded')
var codedMsg = document.querySelector('#codedMsg')
var code = document.querySelector("#code")
var decode = document.querySelector('#decode')
var btn = document.querySelector('button')

// Listener para acrescentar ou não a variação da cifra de Cesar
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

//muda o botão para codificar ou decodificar
code.addEventListener('click', function(){
    btn.textContent = "Codificar mensagem!"
})

decode.addEventListener('click', function(){
    btn.textContent = "Decodificar mensagem!"
})

//Resolução para o evento do botão
btn.addEventListener('click', function(){
    if (btn.textContent == "Codificar mensagem!"){
        if (tipo.value == 'cifra') {
            toCifra(msgOriginal.value, +numCifra.value) 
        }
        else {
            toBase(msgOriginal.value)
        }
    }
    else {
        if (tipo.value == 'cifra') {
            toNormal(codedMsg.value, +numCifra.value)
        }
        else{
            fromBase(codedMsg.value)
        }

    }
})

//função para codificar a mensagem pelo método da cifra de Cesar
function toCifra(lC, num){
    var coded = ""
    let asc
    let msg = lC.toLowerCase()
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
return codedMsg.value = coded
}

//Função para decodificar a mensagem pelo método da Cifra de Cesar
function toNormal(lC, num){
    var decoded = ""
    let letra
    let msg = lC.toLowerCase()
    for (i=0; i<msg.length; i++){
        if (msg[i] == " ")
        decoded += " "
        else {
            if (msg.charCodeAt(i)-num<97)
            letra = msg.charCodeAt(i)-num+26
            else
            letra = msg.charCodeAt(i)-num
            decoded += String.fromCharCode(letra)
        }
    }
return msgOriginal.value = decoded
}

//função para codificar a mensagem pelo método da Base64
function toBase (msg){
    return codedMsg.value = btoa(msg)
}


//função para decodificar a mensagem pelo método da Base64
function fromBase (msg){
    return msgOriginal.value = atob(msg)
}