import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/header/dashboard/Dashboard";
import Header from "./pages/header/Header";
import NoMatch from "./pages/header/noMatch/NoMatch";

function App() {
   return (
      <div className="App">
         <>
            <Header />
            <Routes>
               <Route path="/" element={<Dashboard />} />
               <Route path="*" element={<NoMatch />} />
            </Routes>
         </>
      </div>
   );
}

export default App;
