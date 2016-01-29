describe ('PizzaOrder', function() {
  it("creates a new pizza order with the given properties", function() {
    var testOrder = new PizzaOrder("1", "Large", "Extra Cheese", "Garlic");
    expect(testOrder.quantity).to.equal("1");
    expect(testOrder.pizzaSize).to.equal("Large");
    expect(testOrder.toppings).to.equal("Extra Cheese", "Garlic");
  });

  it("adds the price method to the order", function() {
    var testOrder = new PizzaOrder("1", "Large", "Garlic");
    expect(testOrder.price()).to.equal(16.50);
  });
});
