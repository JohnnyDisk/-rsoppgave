let thobeShop = document.getElementById("thobeShop");
let keffiyahShop = document.getElementById("keffiyahShop");
let BishtShop = document.getElementById("bishtShop");


let ShopItemsData = [{
    id: "Thobe_item_1",
    name: "White Thobe",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/white_thobe_product_image.jpg",
},{
    id: "Thobe_item_2",
    name: "White Thobe",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/white_thobe_product_image.jpg",
},

// Keffiyah
{
    id: "Keffiyah_item_1",
    name: "Keffiyah Green",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/green_and_white_keffiyah.jpg",
},{
    id: "Keffiyah_item_2",
    name: "Keffiyah Red",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/red_and_white_keffiyah.jpg",
},{
    id: "Keffiyah_item_2",
    name: "Keffiyah Black",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/black_and_white_keffiyah.jpg",
},

// Bishts
{
    id: "Bisht_item_1",
    name: "Bisht Black",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/white_thobe_product_image.jpg",
},{
    id: "Bisht_item_2",
    name: "Bisht White",
    price: "200",
    desc: "Embrace timeless elegance with our premium white thobe, exquisitely crafted for the modern gentleman",
    img: "Images/products/white_thobe_product_image.jpg",
}]

let thobeShopGenerate = () => {
    let thobeItems = ShopItemsData.filter(item => item.id.includes('Thobe'));

    let thobeShopHTML = thobeItems.map(item => {
        return `<div class="card">
            <img src="${item.img}" max-width="200px" height="200px">
            <h1>${item.name}</h1>
            <p class="price">${item.price} kr</p>
            <p>${item.desc}</p>
            <p><button>Add to Cart</button></p>
        </div>`;
    }).join('');

    thobeShop.innerHTML = thobeShopHTML;
};


let keffiyahShopGenerate = () => {
    let keffiyahItems = ShopItemsData.filter(item => item.id.includes('Keffiyah'));
    
    let keffiyahHTML = keffiyahItems.map(item => {
        return `<div class="card">
            <img src="${item.img}" max-width="200px"  height="200px" >
            <h1>${item.name}</h1>
            <p class="price">${item.price} kr</p>
            <p>${item.desc}</p>
            <p><button>Add to Cart</button></p>
        </div>`;
    }).join('');

    keffiyahShop.innerHTML = keffiyahHTML;
};


let bishtShopGenerate = () => {
    let bishtItems = ShopItemsData.filter(item => item.id.includes('Bisht'));
    
    let bishtHTML = bishtItems.map(item => {
        return `<div class="card">
            <img src="${item.img}" max-width="200px" height="200px">
            <h1>${item.name}</h1>
            <p class="price">${item.price} kr</p>
            <p>${item.desc}</p>
            <p><button>Add to Cart</button></p>
        </div>`;
    }).join('');

    bishtShop.innerHTML = bishtHTML;
};

if (window.location.href.includes("thobe")) {
    thobeShopGenerate();
} 
else if (window.location.href.includes("keffiyah")) {
    keffiyahShopGenerate();
} 
else if (window.location.href.includes("bisht")) {
    bishtShopGenerate();
}