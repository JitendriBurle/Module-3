function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <ul>
      {products.map(product => (
        <li
          key={product.id}
          onClick={() => onProductSelect(product)}
        >
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
