import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountryInfo from "./pages/CountryInfo";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:id" element={<CountryInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
