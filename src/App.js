import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Compomants/HomePage/HomePage";
import CoinCard from "./Compomants/CoinCard/CoinCard";
import Contact from "./Compomants/Contact/Contact";
import About from "./Compomants/About/About";
import Header from "./Compomants/Header/Header";
import CoinDetails from "./Compomants/CoinDetails/CoinDetails";
import Footer from "./Compomants/Footer/Footer";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/coin" element={<CoinCard></CoinCard>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
