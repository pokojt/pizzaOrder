describe ('PizzaOrder', function() {
  it("creates a new pizza order with the given properties", function() {
    var testOrder = new PizzaOrder("1", "Large", "name", "Just Cheese", [], 16);
    expect(testOrder.quantity).to.equal("1");
    expect(testOrder.pizzaSize).to.equal("Large");
    expect(testOrder.pizzaName).to.equal("name");
    expect(testOrder.toppings).to.equal("Just Cheese");
    expect(testOrder.toppingsPrice).to.eql([]);
    expect(testOrder.price).to.equal(16);
  });

  it("adds the calculatePrice method to the order", function() {
    var testOrder = new PizzaOrder("1", "Large", "name", "Just Cheese", [], 16);
    expect(testOrder.calculatePrice()).to.equal(16);
  });

  it("adds the orderSummary method to the order", function() {
    var testOrder = new PizzaOrder("1", "Large", "name", "Just Cheese", [], 16);
    expect(testOrder.orderSummary()).to.equal("Large name")
  });
});
