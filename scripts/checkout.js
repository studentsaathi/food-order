let countcart=JSON.parse(localStorage.getItem("cart"))
  
var total = countcart.reduce(function(sum,el){
  return sum+Number(el.price);
},0)
//let item_count=document.getElementById("item_count")
console.log(total);
var length = countcart.length;
console.log(length);
let itemno=document.createElement("h1")

itemno.innerText = `Total Price :-${total} RS`
item_count.append(itemno)

document.querySelector("#totalitem").innerText = `You are ${length} items Sclected`;