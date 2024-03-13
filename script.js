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
    console.log(storedPassword);


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


var itemPrices = {
    "item1": 10,
    "item2": 20,
    "item3": 15
};

var shoppingCart = {};

function addToCart(itemId, itemName, itemPrice) {
    if (!shoppingCart[itemId]) {
        shoppingCart[itemId] = {
            name: itemName,
            price: itemPrice,
            quantity: 1
        };
    } else {
        shoppingCart[itemId].quantity++;
    }
    updateCartDisplay();
}

function removeFromCart(itemId) {
    if (shoppingCart[itemId]) {
        shoppingCart[itemId].quantity--;
        if (shoppingCart[itemId].quantity === 0) {
            delete shoppingCart[itemId];
        }
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    var cartItemsElement = document.getElementById("cartItems");
    var cartTotalPriceElement = document.getElementById("cartTotalPrice");

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
}

document.addEventListener("DOMContentLoaded", function() {
    var itemButtons = document.querySelectorAll(".item-button");

    itemButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var itemId = button.getAttribute("id");
            var itemName = button.textContent.trim().split(" - ")[0];
            var itemPrice = itemPrices[itemId];
            addToCart(itemId, itemName, itemPrice);
        });
    });

    var purchaseButton = document.getElementById("purchaseButton");
    if (purchaseButton) {
        purchaseButton.addEventListener("click", function(event) {
            event.preventDefault();
            purchaseCart();
        });
    }
});
