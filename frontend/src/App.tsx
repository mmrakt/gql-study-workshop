import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  // client オブジェクトの作成
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4010/graphql",
  });

  // 全体を ApolloProvider でラップする
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
