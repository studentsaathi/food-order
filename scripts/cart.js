let data =JSON.parse(localStorage.getItem("cart"))
data.map(function(el,index){
    
    
    let showdata=document.getElementById("cart")
    let div=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image;
    let type=document.createElement("p")
    type.innerText=el.name;
    let desc=document.createElement("p")
    desc.innerText=el.desc;
    let price=document.createElement("p")
    price.innerText=`PRICE : - ${el.price}`
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
        removeITEM(el,index)

    })
    


    div.append(image,type,price,btn)
    showdata.append(div)
})
function removeITEM(el,index){
    data.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(data))
    alert("items remove ")
    window.location.reload()
} 


var total = data.reduce(function(sum,el,ind,arr){
    return sum+Number(el.price);
},0)
console.log(total);
var length = data.length;
console.log(length);
 document.querySelector("#cart_total").innerText = `Total Price :-${total} RS`

 document.querySelector("#itemno").innerText = `You are ${length} items Sclected`;