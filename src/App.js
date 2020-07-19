import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </ BrowserRouter>
    </div>
  );
}

export default App;
