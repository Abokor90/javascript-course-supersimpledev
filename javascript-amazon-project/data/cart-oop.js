function Cart(localStorageKey) {
const cart = {
cartItems: undefined,

loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

    if (!this.cartItems) {
        this.cartItems = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  },

saveToStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},

addToCart(productId) {
  let matchingItem;

  this.cartItems.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingItem = CartItem;
    }
  });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  this.saveToStorage();
},

removeFromCart(productId) {
  const newCart = [];

  this.cartItems.forEach((CartItem) => {
    if (CartItem.productId !== productId) {
      newCart.push(CartItem);
    }
  });

  this.cartItems = newCart;

  this.saveToStorage();
}, 

updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  this.cartItems.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingItem = CartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  this.saveToStorage();
}

};

return cart;  // return the cart object so we can use outside the function
}

const cart = Cart('cart-oop');
const BusinessCart = Cart('cart-business');



cart.loadFromStorage();

BusinessCart.loadFromStorage();

console.log(cart);
console.log(BusinessCart);