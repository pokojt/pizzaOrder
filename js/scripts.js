function PizzaOrder(quantity, pizzaSize, toppings) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
};

PizzaOrder.prototype.price = function() {
  var price = 14;
  var specialToppings = ["Extra Cheese", "Extra Sauce", "Garlic", "Roasted Peppers", "Pepperoni", "Sausage", "Spinach", "Pineapple", "Canadian Bacon", "Bacon", "Onions", "Mushrooms"];

  for (var i = 0; i < specialToppings.length; i++) {
    if(this.toppings === specialToppings[i]) {
      price += .50;
    }
  }
  if (this.pizzaSize === "Small") {
    price -= 2;
  }
  if (this.pizzaSize === "Large") {
    price += 2;
  }
  if (this.pizzaSize === "XL") {
    price += 4;
  }
  return price;
};


// $(document).ready(function() {
//   $("form#new-order").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedQuantity = $("input#inputtedQuantity").val();
//     var inputtedSize = $("input#inputtedSize").val();
//     var inputtedToppings = $("input#inputtedToppings").val();
//     var newPizzaOrder = new PizzaOrder (inputtedQuantity, inputtedSize, inputtedToppings);
//
//     $("ul#orders").append("<li><span class='order'>" + newPizzaOrder.fullOrder() + "</span></li>");
//
//     $("input#inputtedQuantity").val("");
//     $("input#inputtedSize").val("");
//     $("input#inputtedToppings").val("");
//
//     $(".order").last().click(function() {
//       $("#show-order").show();
//       $("#show-order h2").text(newPizzaOrder.fullName());
//       $(".quantity").text(newPizzaOrder.firstName);
//       $(".size").text(newPizzaOrder.lastName);
//     });
//   });
//
// });
