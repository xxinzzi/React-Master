import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./router/Coins";
import Coin from "./router/Coin";
import Chart from "./router/Chart";
import Price from "./router/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
