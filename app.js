function add(){
    let fn=document.getElementById("fn").value
    let ln=document.getElementById("ln").value
    let com=parseFloat(fn)+parseFloat(ln)
    document.getElementById("output").innerHTML=com
}
function sub(){
    let fn=document.getElementById("fn").value
    let ln=document.getElementById("ln").value
    let com=parseFloat(fn)-parseFloat(ln)
    document.getElementById("output").innerHTML=com
}