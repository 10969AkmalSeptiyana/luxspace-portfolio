import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Provider from "helpers/hooks/useGlobalContext";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="categories/:idc/products/:idp" element={<Details />} />
          <Route path="cart" element={<Cart />} />
          <Route path="congratulation" element={<Congratulation />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
