function PizzaOrder(quantity, pizzaSize, pizzaName, toppings, toppingsPrice, price) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.pizzaName = pizzaName;
  this.toppings = toppings;
  this.toppingsPrice = [];
  this.price = price;
};


PizzaOrder.prototype.calculatePrice = function() {

  var specialToppings = ["Extra Cheese", "Extra Sauce", "Garlic", "Roasted Peppers", "Pepperoni", "Sausage", "Spinach", "Pineapple", "Canadian Bacon", "Bacon", "Onions", "Mushrooms"];
  var medprice = 14;
  // var chosenToppings = [];

  // for (var i = 0; i < this.toppings.length; i++) {
  //   for (var j=0, j < specialToppings.length; j++){
  //     if(this.toppings[i] === specialToppings[j]) {
  //     this.toppingsPrice.push(.50);
  //     medprice += .50;
  //     }
  //   }
  // }
  if (this.pizzaSize === "Small") {
    medprice -= 2;
  }
  if (this.pizzaSize === "Large") {
    medprice += 2;
  }
  if (this.pizzaSize === "XL") {
    medprice += 4;
  }
  return medprice;
};

PizzaOrder.prototype.orderSummary = function() {
  return this.pizzaSize + " " + this.pizzaName;
};


$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();

debugger;
    var inputtedQuantity = $("input#inputtedQuantity").val();
    var inputtedSize = $("select#inputtedSize").val();
    var inputtedName = $("input#inputtedName").val();

    var inputtedToppings = [];
      $.each($('input[name="topping"]:checked'), function() {
        toppings.push($(this).val());
      });
    //  [$(this).find("input[name=JustCheese]:checked").val(), $(this).find("input[name=ExtraCheese]:checked").val(), $(this).find("input[name=ExtraSauce]:checked").val(), $(this).find("input[name=Garlic]:checked").val(), $(this).find("input[name=RoastedPeppers]:checked").val(),
    // $(this).find("input[name=Pepperoni]:checked").val(), $(this).find("input[name=Sausage]:checked").val(), $(this).find("input[name=Spinach]:checked").val(), $(this).find("input[name=Pineapple]:checked").val(),
    // $(this).find("input[name=CanadianBacon]:checked").val(), $(this).find("input[name=Bacon]:checked").val(),
    // $(this).find("input[name=Onions]:checked").val(), $(this).find("input[name=Mushrooms]:checked").val()];

    var newPizzaOrder = new PizzaOrder (inputtedQuantity, inputtedSize, inputtedName, inputtedToppings);
    var price = newPizzaOrder.calculatePrice();

    if (inputtedSize === "" || inputtedName === "" || inputtedToppings === 0) {
      alert("Please fill in all fields!");
    }
    else {

      $(".orderList").show();
      $("ul#orders").append("<li><span class='order'>" + newPizzaOrder.orderSummary() + "</span></li>");

      $("input#inputtedQuantity").val("");
      $("select#inputtedSize").val("");
      $('input:checkbox').removeAttr('checked');
      $("input#inputtedName").val("");
    };

//when you click the appended order, it shows up on the side with more details
    $(".order").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newPizzaOrder.orderSummary());
      $(".quantity").text(newPizzaOrder.quantity);
      $(".size").text(newPizzaOrder.pizzaSize);
      $(".price").text(newPizzaOrder.price);
      newPizzaOrder.toppings.forEach(function(inputtedToppings) {
        $("ul#toppings").append("<li>" + toppings[i] + "</li>");
      });
    });
  });
});
