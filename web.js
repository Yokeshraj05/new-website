// function addToCart(name, price) {
//     try {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         let newItem = { name: name, price: price };
//         cart.push(newItem);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         console.log(`Added ${name} to cart. Cart now contains:`, cart);
//         updateCartDisplay();
//     } catch (error) {
//         console.error('Error adding item to cart:', error);
//     }
// }

// function displayCartItems() {
//     try {
//         let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//         let cartItemsHTML = '';
//         let totalPrice = 0;

//         cartItems.forEach(item => {
//             cartItemsHTML += `
//                 <div>
//                     <p>${item.name} - $${item.price.toFixed(2)}</p>
//                 </div>
//             `;
//             totalPrice += item.price;
//         });

//         document.getElementById('cart-items').innerHTML = cartItemsHTML;
//         document.getElementById('total-items').textContent = `Total Items: ${cartItems.length}`;
//         document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
//     } catch (error) {
//         console.error('Error displaying cart items:', error);
//     }
// }

// function updateCartDisplay() {
//     displayCartItems();
//     // Optionally, update any other parts of the UI related to the cart
// }

// document.addEventListener('DOMContentLoaded', function() {
//     if (window.location.pathname === 'cart.html') {
//         displayCartItems();

//         document.getElementById('buy-now').addEventListener('click', function() {
//             alert('Items successfully purchased!');
//             localStorage.removeItem('cart');
//             updateCartDisplay(); // Refresh cart display
//             // Optionally, show a popup or confirmation message
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            // var name = event.target.getAttribute('data-name');
            // var price = parseFloat(event.target.getAttribute('data-price'));
            // addToCart(name, price);
            alert('Successfully purchased!');
        }
    });
});


// var popup1 = document.getElementById("popup");
// var btn = document.getElementById("buy-now");
// var span = document.getElementById("close");
// btn.onclick = function() {
//     popup1.style.display = "block";
// }
// span.onclick = function() {
//     popup1.style.display = "none";
// }




