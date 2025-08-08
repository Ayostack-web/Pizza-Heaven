const Menu = () => {
  return (
    <section id="menu" className="menu section">
      <h2>Featured Menu</h2>

      {/* Menu Cards */}
      <div className="menu-container">
        <div className="menu-item">
          <img src="/img/pizza-slice-presentation-dark.png.jpg" alt="Margherita" />
          <h3>Margherita</h3>
          <p>Classic tomato sauce, fresh mozzarella, and basil.</p>
        </div>

        <div className="menu-item">
          <img src="/img/top-view-pizza.png.jpg" alt="Pepperoni" />
          <h3>Pepperoni</h3>
          <p>Loaded with spicy pepperoni and melted cheese.</p>
        </div>

        <div className="menu-item">
          <img src="/img/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg" alt="BBQ Chicken" />
          <h3>BBQ Chicken</h3>
          <p>Grilled chicken, BBQ sauce, and onions.</p>
        </div>
      </div> <br />

      {/* Menu Table */}
      <h2>🍽️ Our Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Image</th>
            <th>Size</th>
            <th>Regular</th>
            <th>Large</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margherita</td>
            <td><img src="/img/pizza-with-basil-leaves-it-sits-table_1293074-135234.jpg" className="pizza-img" alt="Margherita" /></td>
            <td>Any</td>
            <td>₦4,500</td>
            <td>₦6,500</td>
            <td><span className="status available">Available</span></td>
          </tr>
          <tr>
            <td>Pepperoni Feast</td>
            <td><img src="/img/freshly-baked-gourmet-pizza-rustic-wood-table-generated-by-ai_188544-18731.jpg" className="pizza-img" alt="Pepperoni" /></td>
            <td colSpan="2" className="flat">Flat Rate – ₦7,500</td>
            <td></td>
            <td><span className="status available">Available</span></td>
          </tr>
          <tr>
            <td>Veggie Delight</td>
            <td><img src="/img/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves_2829-6420.jpg" className="pizza-img" alt="Veggie" /></td>
            <td>Medium</td>
            <td>₦5,000</td>
            <td>₦6,800</td>
            <td><span className="status unavailable">Out of Stock</span></td>
          </tr>
          <tr>
            <td>Chef’s Special</td>
            <td><img src="/img/pizza-plate-table-selective-focus_74760-26396.jpg" className="pizza-img" alt="Special" /></td>
            <td>Regular</td>
            <td>₦6,900</td>
            <td>₦9,000</td>
            <td><span className="status available">Available</span></td>
          </tr>
          <tr>
            <td>Chef’s Special</td>
            <td><img src="/img/delicious-pizza-studio_23-2151846558.jpg" className="pizza-img" alt="Special" /></td>
            <td>Large</td>
            <td colSpan="2" className="promo">Promo – ₦8,000</td>
            <td><span className="status available">Available</span></td>
          </tr>
        </tbody>
      </table>

      {/* Legend */}
      <div className="legend">
        <strong>Legend:</strong>
        <ul>
          <li><strong>Flat Rate</strong> – One price for all sizes</li>
          <li><strong>Promo</strong> – Limited time offer price</li>
          <li><span className="status available">Available</span> – Ready to order</li>
          <li><span className="status unavailable">Out of Stock</span> – Temporarily unavailable</li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
