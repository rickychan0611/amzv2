import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ProductsContextProvider from "./context/ProductsContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductsContextProvider>
          <AppRoutes />
        </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
