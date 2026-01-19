// Selecting elements
let bagBtn = document.getElementById("bagBtn");
let wishBtn = document.getElementById("wishBtn");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let countText = document.getElementById("count");
let message = document.getElementById("message");

// Item count variable
let count = 0;

// Add to Bag
bagBtn.addEventListener("click", function () {
    message.textContent = "Item added to bag 👜";
});

// Move to Wishlist
wishBtn.addEventListener("click", function () {
    message.textContent = "Item moved to wishlist ❤️";
});

// Plus button
plusBtn.addEventListener("click", function () {
    count++;
    countText.textContent = count;
    message.textContent = "Sale item added ➕";
});

// Minus button (IMPORTANT RULE)
minusBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        countText.textContent = count;
        message.textContent = "Sale item removed ➖";
    } else {
        message.textContent = "Count cannot go below 0 ❌";
    }
});
