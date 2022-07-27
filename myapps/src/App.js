import Driver from "./components/drive/Driver";
import Find from "./components/find/Find";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Luxury from "./components/luxury/Luxury";
import Navabar from "./components/navbar/Navabar";


function App() {
  return (
    <div >
      <Navabar/>
      <Hero/>
      <Find/>
      <Driver/>
      <Luxury/>
      <Footer/>
    </div>
  );
}

export default App;
