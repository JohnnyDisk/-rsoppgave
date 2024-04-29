let shop = document.getElementById("shop");

let ShopItemsData = [{
    id: "fdsfds",
    name: "White Thobe",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/white_thobe_product_image.jpg",
},{
    id: "wemlk",
    name: "White Thobe",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/white_thobe_product_image.jpg",
},{
    id: "dsoiusd",
    name: "White Thobe",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/white_thobe_product_image.jpg",
},{
    id: "fdlkjwe",
    name: "White Thobe",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/white_thobe_product_image.jpg",
}]

let generateShop = () => {
    return (shop.innerHTML = ShopItemsData.map((x)=>{
        return ` <div class="card">
    <img src="${x.img}" max-width="200px" width="100%">

    <h1>${x.name}</h1>

    <p class="price">${x.price} kr</p>

    <p>${x.desc}</p>

    <p><button>Add to Cart</button></p>

  </div>` 
    }))};
generateShop();