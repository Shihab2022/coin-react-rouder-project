import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Compomants/HomePage/HomePage";
import CoinCard from "./Compomants/CoinCard/CoinCard";
import Contact from "./Compomants/Contact/Contact";
import About from "./Compomants/About/About";
import Header from "./Compomants/Header/Header";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/coin" element={<CoinCard></CoinCard>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
