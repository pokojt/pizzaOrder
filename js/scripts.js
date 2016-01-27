function PizzaOrder(quantity, pizzaSize, toppings) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}



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
