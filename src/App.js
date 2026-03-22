import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/dashboard/Dashboard";
import PostUser from "./pages/employee/PostUser";
import UpdateUser from "./pages/employee/UpdateUser";
import Header from "./pages/header/Header";
import NoMatch from "./pages/noMatch/NoMatch";

function App() {
   return (
      <div className="App">
         <>
            <Header />
            <Routes>
               <Route path="/" element={<Dashboard />} />
               <Route path="/employee" element={<PostUser />} />
               <Route path="/employee/:id" element={<UpdateUser />} />
               <Route path="*" element={<NoMatch />} />
            </Routes>
         </>
      </div>
   );
}

export default App;
