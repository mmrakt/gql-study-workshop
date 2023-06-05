import { gql, useQuery } from "@apollo/client";
import {
  ProductsQuery,
  ProductsQueryVariables,
} from "./__generated__/products-query";

const query = gql`
  query ProductsQuery {
    products {
      id
      name
    }
  }
`;

const Products = () => {
  const { data, loading } = useQuery<ProductsQuery, ProductsQueryVariables>(
    query
  );
  if (loading || !data) return null;
  return (
    <>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
