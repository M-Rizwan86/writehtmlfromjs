let fruits = ["Mango", "banana", "Aam", "Amb"];
function xyz() {
    let list = "";
    
    for (let i = 0; i < fruits.length; i++) {
        list += "<li>" + fruits[i] + "</li>";
    }
    document.getElementById("fruits").innerHTML = list;
}

function xyz2(){
var prompt1=prompt("type any fruit name")
fruits.push(prompt1)
    let list = "";
    
    for (let i = 0; i < fruits.length; i++) {
        list += "<li>" + fruits[i] + "</li>";
    }
    document.getElementById("fruits").innerHTML = list;
}