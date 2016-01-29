function PizzaOrder(quantity, pizzaSize, toppings, price) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.price = price;
};

PizzaOrder.prototype.calculatePrice = function() {

  var medprice = 14;
  var chosenToppings = [];
  var specialToppings = ["Extra Cheese", "Extra Sauce", "Garlic", "Roasted Peppers", "Pepperoni", "Sausage", "Spinach", "Pineapple", "Canadian Bacon", "Bacon", "Onions", "Mushrooms"];

  for (var i = 0; i < specialToppings.length; i++) {
    if(this.toppings === specialToppings[i]) {
      chosenToppings.push(specialToppings[i]);
      // price += .50;
    }
  }
  if (this.pizzaSize === "Small") {
    medprice -= 2;
  }
  if (this.pizzaSize === "Large") {
    medprice += 2;
  }
  if (this.pizzaSize === "XL") {
    medprice += 4;
  }
  return medprice + (chosenToppings.length / 2);
};

PizzaOrder.prototype.orderSummary = function() {
  return this.pizzaSize + " " + this.toppings;
};


$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    debugger;


    var inputtedQuantity = $("input#inputtedQuantity").val();
    var inputtedSize = $("select#inputtedSize").val();
    var inputtedToppings = $("checked.inputtedToppings").val();
    var newPizzaOrder = new PizzaOrder (inputtedQuantity, inputtedSize, inputtedToppings);

    var returnvalue = $(".inputtedToppings").prop("checked");


    $("ul#orders").append("<li><span class='order'>" + newPizzaOrder.orderSummary() + "</span></li>");

//clears the input fields after submit
    $("input.inputtedQuantity").val("");
    $("input.inputtedSize").val("");
    $("input.inputtedToppings").val("");

//when you click the appended order, it shows up on the side with more details
    $(".order").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newPizzaOrder.orderSummary());
      $(".quantity").text(newPizzaOrder.quantity);
      $(".size").text(newPizzaOrder.pizzaSize);
      newPizzaOrder.toppings.forEach(function(topping) {
        $("ul#toppings").append("<li>" + inputtedToppings + "</li>");
      });
    });
  });
});
