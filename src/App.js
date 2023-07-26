import './index.css';
import {Navbar} from "./components/Navbar";
import {HomePage} from "./pages/HomePage";
import {AboutUs} from "./pages/AboutUs";
import {Contacts} from "./pages/Contacts";
import {Route, Routes} from "react-router-dom";
import {SinglePost} from "./pages/SinglePost";
import {Posts} from "./pages/Posts";
import {RequireAuth} from "./hoc/RequireAuth";
import {Login} from "./pages/Login";

function App() {
  return (
      <div className="container">
          <Navbar/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/Contacts' element={  <Contacts/>}/>
              <Route path='/posts/:id' element={ <SinglePost /> }/>
              <Route path='/posts' element={
                  <RequireAuth>
                      <Posts/>
                      </RequireAuth>
                      }
              />
              <Route path='/login' element={  <Login/>}/>
          </Routes>
      </div>


  );
}

export default App;
