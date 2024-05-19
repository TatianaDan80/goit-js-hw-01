function makeTransaction(quantity, pricePerDroid) {
    const totalPice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPice} credits!`;

}
console.log(makeTransaction(3, 100));
console.log(makeTransaction(5, 75));


