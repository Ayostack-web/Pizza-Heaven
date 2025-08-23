export default function Order(){
  return (
    <section id="order" className="bg-blue-50 py-6 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Place Your Order
        </h2>

        {/* Order Form */}
        <form
          id="orderForm"
          className="bg-blue-50 p-6 rounded-2xl shadow-xl space-y-6"
        >
          {/* Favorite Pizza Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Select Your Favorite Pizzas:
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="pizza" value="Margherita" />
                Margherita
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="pizza" value="Pepperoni" />
                Pepperoni
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="pizza" value="BBQ Chicken" />
                BBQ Chicken
              </label>
                <label className="flex items-center gap-2">
                <input type="checkbox" name="pizza" value="Veggie Delight" />
                Veggie Delight
              </label>
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Quantity:
            </h3>
            <input
              type="number"
              name="quantity"
              min="1"
              max="10"
              defaultValue="1"
              className="w-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Choose Payment Method:
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="Credit Card" />
                Credit Card
              </label>

              {/* Card Type Dropdown */}
              <select
                name="cardType"
                defaultValue="verve"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <optgroup label="Card Type">
                  <option value="mastercard">Mastercard</option>
                  <option value="visa">Visa</option>
                  <option value="verve">Verve</option>
                  <option value="other">Other</option>
                </optgroup>
              </select>

              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="PayPal" />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="Cash on Delivery" />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
};


