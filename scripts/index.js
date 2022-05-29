// Store cart items in local storage with key: "items"
const url='https://grocery-masai.herokuapp.com/items';
async function getdata(){
    try{
        let res=await fetch(url);
        let alldata=await res.json()
        showdata(alldata.data)
        console.log(alldata.data)

    }catch(error){
      console.log("error",error)
    }
   
}

 getdata()

 var cartData = JSON.parse(localStorage.getItem("cart")) || [];
async function showdata(data){
    let items=document.getElementById("items")
    data.forEach(function(el){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image;
    let price=document.createElement("h1")
    price.innerText=`Price :- ${el.price}`
    let name =document.createElement("h1")
    name.innerText=el.name
    var btn=document.createElement("button")
    btn.innerText="Add TO cart"
    btn.addEventListener("click", function () {
        addToCart(el);
      });
    div.append(img,name,price,btn
        )
    items.append(div)

    })
}

function addToCart(el) {
    console.log(el);
    cartData.push(el);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
    alert("item added to cart");
  }




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
