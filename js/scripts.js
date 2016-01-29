function PizzaOrder(quantity, pizzaSize, toppings, price) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.price = price;
};

  var specialToppings = ["Extra Cheese", "Extra Sauce", "Garlic", "Roasted Peppers", "Pepperoni", "Sausage", "Spinach", "Pineapple", "Canadian Bacon", "Bacon", "Onions", "Mushrooms"];

PizzaOrder.prototype.calculatePrice = function() {

  var medprice = 14;
  var chosenToppings = [];

  for (var i = 0; i < specialToppings.length; i++) {
    // debugger;
    if(this.toppings[i] === specialToppings[i]) {
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
  // debugger;
  for (var i = 0; i < specialToppings.length; i++) {
    if(this.toppings[i] === specialToppings[i]) {
      chosenToppings.push(specialToppings[i]);
    }
  return this.pizzaSize + " " + this.toppings[i];
  }
};


$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    debugger;


    var inputtedQuantity = $("input#inputtedQuantity").val();
    var inputtedSize = $("select#inputtedSize").val();

    var inputtedToppings = [$("input[name=JustCheese]:checked").val(), $("input[name=ExtraCheese]:checked").val(), $("input[name=ExtraSauce]:checked").val(), $("input[name=Garlic]:checked").val(), $("input[name=RoastedPeppers]:checked").val(), $("input[name=Pepperoni]:checked").val(), $("input[name=Sausage]:checked").val(), $("input[name=Spinach]:checked").val(), $("input[name=Pineapple]:checked").val(),
    $("input[name=CanadianBacon]:checked").val(), $("input[name=Bacon]:checked").val(),
    $("input[name=Onions]:checked").val(), $("input[name=Mushrooms]:checked").val()]; ///got from ronando form_dating

    var newPizzaOrder = new PizzaOrder (inputtedQuantity, inputtedSize, inputtedToppings);


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
