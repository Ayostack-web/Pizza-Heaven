
const Order = () => {
  return (
    <section id="order" className="order section">
      <h2>Place Your Order</h2>

      <form id="orderForm">
        {/* Favorite Pizza Selection */}
        <h3>Select Your Favorite Pizzas:</h3>
        <label>
          <input type="checkbox" name="pizza" value="Margherita" />
          Margherita
        </label><br />
        <label>
          <input type="checkbox" name="pizza" value="Pepperoni" />
          Pepperoni
        </label><br />
        <label>
          <input type="checkbox" name="pizza" value="BBQ Chicken" />
          BBQ Chicken
        </label> <br /> 

       

        {/* Quantity Selection */}
        <h3>Quantity:</h3>
        <input type="number" name="quantity" min="1" max="10" defaultValue="1" />

        {/* Payment Method */}
        <h3>Choose Payment Method:</h3>
        <label>
          <input type="radio" name="payment" value="Credit Card" />
          Credit Card
        </label><br />

       <select name="cardType" defaultValue="verve">
     <optgroup label="Card Type">
    <option value="mastercard">Mastercard</option>
    <option value="visa">Visa</option>
    <option value="verve">Verve</option>
    <option value="other">Other</option>
    </optgroup>
   </select>


        <label>
          <input type="radio" name="payment" value="PayPal" />
          PayPal
        </label><br />
        <label>
          <input type="radio" name="payment" value="Cash on Delivery" />
          Cash on Delivery
        </label><br />

        {/* Submit Button */}
        <button type="submit">Place Order</button>
      </form>
    </section>
  );
};

export default Order;
