function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("USA", 100, 20));
console.log(getShippingMessage("UK", 200, 30));
console.log(getShippingMessage("Canada", 50, 15));


