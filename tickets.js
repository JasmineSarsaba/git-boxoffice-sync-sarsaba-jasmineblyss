function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium) {
  let price = quantity * basePrice;

  if (isPremium) {
    price = price * 1.50; 
  }

  return Math.floor(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };
