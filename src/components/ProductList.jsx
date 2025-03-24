import Product from "./Product";

function ProductList({ desserts, isPending }) {
  return (
    <div>
      <h1 className="desserts-title">Desserts</h1>
      <div className="desserts-container">
        {isPending && <h2>Loading...</h2>}
        {desserts &&
          desserts.map((d) => {
            return <Product key={d.id} d={d} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
