describe ('PizzaOrder', function() {
  it("creates a new pizza order with the given properties", function() {
    var testOrder = new PizzaOrder("1", "Large", "cheese");
    expect(testOrder.quantity).to.equal("1");
    expect(testOrder.pizzaSize).to.equal("Large");
    expect(testOrder.toppings).to.equal("cheese");
  });

  it("adds the price method to the order", function() {
    var testOrder = new PizzaOrder("1", "Large", "cheese");
    expect(testOrder.price()).to.equal(16);
  });
});


//just cheese small: 12, medium: 14, large: 16, xl: 18
