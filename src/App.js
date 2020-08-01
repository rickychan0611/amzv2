import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ProductsContextProvider from "./context/ProductsContext";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <ProductsContextProvider>
            <AppRoutes />
          </ProductsContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
