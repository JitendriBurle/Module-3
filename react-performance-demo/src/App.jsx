import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App({ products }) {
  const [counter, setCounter] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price;
    }
    return sum;
  }, [products]);

  const handleProductSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
