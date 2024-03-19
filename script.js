var users = JSON.parse(localStorage.getItem('users')) || [];
var currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

//-------------Login & Register -------------//

function register() {
    var registerUsername = document.getElementById("registerUsername").value;
    var registerPassword = document.getElementById("registerPassword").value;
    var registerConfirmPassword = document.getElementById("registerConfirmPassword").value;

    if (registerPassword.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (registerPassword !== registerConfirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (localStorage.getItem(registerUsername)) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    localStorage.setItem(registerUsername, registerPassword);

    console.log("Registration successful!");
}

document.addEventListener("DOMContentLoaded", function() {
    var submitRegisternButton = document.getElementById("registerEnter");
    if (submitRegisternButton) {
        submitRegisternButton.addEventListener("click", function(event) {
            event.preventDefault();
            register();
        });
    }
});


function login() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var storedPassword = localStorage.getItem(loginUsername);


    if (storedPassword === null) {
        alert("Username not found. Please register first.");
        return;
    }

    if (loginPassword !== storedPassword) {
        alert("Incorrect password. Please try again.");
        return;
    }

    console.log("Login successful!");
}

document.addEventListener("DOMContentLoaded", function() {
    var submitLoginButton = document.getElementById("loginEnter");
    if (submitLoginButton) {
        submitLoginButton.addEventListener("click", function(event) {
            event.preventDefault();
            login();
        });
    }
});

//------------- Shopping cart -------------//

var shoppingCart = {};

var storedCart = localStorage.getItem('shoppingCart');
if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
}

var itemPrices = {
    "item1": 10,
    "item2": 20,
    "item3": 15
    // Add more items and their prices as needed
};

function addToCart(itemId, itemName, itemPrice, quantity) {
    if (!shoppingCart[itemId]) {
        shoppingCart[itemId] = {
            name: itemName,
            price: itemPrice,
            quantity: quantity
        };
    } else {
        shoppingCart[itemId].quantity += quantity;
    }
    updateCartDisplay();
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

function removeFromCart(itemId) {
    if (shoppingCart[itemId]) {
        delete shoppingCart[itemId];
    }
    updateCartDisplay();
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

function updateCartDisplay() {
    var cartItemsElement = document.getElementById("cartItems");
    var cartTotalPriceElement = document.getElementById("cartTotalPrice");

    if (!cartItemsElement) {
        console.error("cartItemsElement not found");
        return;
    }

    cartItemsElement.innerHTML = "";

    var totalPrice = 0;

    for (var itemId in shoppingCart) {
        if (shoppingCart.hasOwnProperty(itemId)) {
            var item = shoppingCart[itemId];
            var totalItemPrice = item.price * item.quantity;
            totalPrice += totalItemPrice;

            var cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            cartItemDiv.innerHTML = `
                <p><strong>${item.name}</strong> - $${item.price} (${item.quantity}x)</p>
                <select class="quantity-selector" data-item-id="${itemId}">
                    <option value="1" ${item.quantity === 1 ? 'selected' : ''}>1</option>
                    <option value="2" ${item.quantity === 2 ? 'selected' : ''}>2</option>
                    <option value="3" ${item.quantity === 3 ? 'selected' : ''}>3</option>
                    <option value="4" ${item.quantity === 4 ? 'selected' : ''}>4</option>
                    <option value="5" ${item.quantity === 5 ? 'selected' : ''}>5</option>
                    <!-- Add more options as needed -->
                </select>
                <button class="remove-item" data-item-id="${itemId}">Remove</button>
            `;

            cartItemsElement.appendChild(cartItemDiv);
        }
    }

    cartTotalPriceElement.textContent = totalPrice.toFixed(2);

    var removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            var itemId = button.getAttribute("data-item-id");
            removeFromCart(itemId);
        });
    });

    var quantitySelectors = document.querySelectorAll(".quantity-selector");
    quantitySelectors.forEach(function(selector) {
        selector.addEventListener("change", function(event) {
            var itemId = selector.getAttribute("data-item-id");
            var quantity = parseInt(selector.value);
            shoppingCart[itemId].quantity = quantity;
            updateCartDisplay();
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to item buttons to add items to cart
    var itemButtons = document.querySelectorAll(".item-button");
    itemButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            var itemId = button.getAttribute("id");
            var itemName = button.textContent.trim().split(" - ")[0];
            var itemPrice = itemPrices[itemId];
            addToCart(itemId, itemName, itemPrice, 1); // Adding one item by default
        });
    });

    updateCartDisplay();
});


document.addEventListener("DOMContentLoaded", function() {
    updateCartDisplay();
});
