describe ('PizzaOrder', function() {
  it("creates a new pizza order with the given properties", function() {
    var testOrder = new PizzaOrder("1", "Large", [], 16);
    expect(testOrder.quantity).to.equal("1");
    expect(testOrder.pizzaSize).to.equal("Large");
    expect(testOrder.toppings).to.eql([]);
    expect(testOrder.price).to.equal(16)
  });

  it("adds the calculatePrice method to the order", function() {
    var testOrder = new PizzaOrder("1", "Large", ["Just Cheese"]);
    expect(testOrder.calculatePrice()).to.equal(16);
  });

  it("adds the orderSummary method to the order", function() {
    var testOrder = new PizzaOrder("1", "Large", ["Garlic"]);
    expect(testOrder.orderSummary()).to.equal("Large Garlic")
  });
});
