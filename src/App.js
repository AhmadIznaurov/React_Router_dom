import './index.css';
import {Navbar} from "./components/Navbar";
import {HomePage} from "./pages/HomePage";
import {AboutUs} from "./pages/AboutUs";
import {Contacts} from "./pages/Contacts";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="container">
          <Navbar/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='AboutUs' element={<AboutUs/>}/>
              <Route path='/Contacts' element={  <Contacts/>}/>
          </Routes>
      </div>


  );
}

export default App;
