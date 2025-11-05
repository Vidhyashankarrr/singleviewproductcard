
let productTitle=document.getElementById("productTitle");
let productPrice=document.getElementById("productPrice")
let productDescription=document.getElementById("productDescription");
let mainImg=document.getElementById("mainImg");




function setDataIntoUi(productData){
    productTitle.textContent=productData.title
    productPrice.textContent= `$${productData.price}`;
    productDescription.textContent = productData.description
    mainImg.src = productData.image
}




const apiCallForAProduct = async (id) => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let dataOfAProduct = await response.json();
    console.log(dataOfAProduct);
    setDataIntoUi(dataOfAProduct);
    
}
let params= new URLSearchParams(window.location.search);
let id  = params.get("id");

document.getElementById("addToCartBtn").addEventListener("click", function() {
  alert("✅ Product added to cart!");
});

apiCallForAProduct(id);