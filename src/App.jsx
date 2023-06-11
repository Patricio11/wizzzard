import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/layouts/auth";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Landing from "./pages/landing";
import Dashboard from "./components/layouts/dashboard";
import MyClass from "./pages/dashboard/my_class";
import Forms from "./pages/dashboard/forms";
import Curriculum from "./pages/dashboard/curriculum";
// import Caps from "./pages/dashboard/caps";
// import Resources from "./pages/dashboard/resources";


const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        
        <Route element={<Auth />}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Registration/>}/>
        </Route>

        <Route element={<Dashboard />}>
          <Route path="my-class" element={<MyClass/>}/>
          <Route path="school" element={<Forms/>}/>
          <Route path="time-table" element={<Login/>}/>
          <Route path="settings" element={<Login/>}/>
          {/* <Route path="caps" element={<Caps/>}/> */}
          <Route path="curriculum" element={<Curriculum/>}/>
          <Route path="curriculum/:id" element={<Curriculum/>}/>
          {/* <Route path="minutes" element={<Login/>}/> */}
          <Route path="calender" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div> ;
};

export default App;
