import React from "react";
import "./App.css"
import { Barbershop } from "./Barbershop";
import { Topbar } from "./Topbar";
const App: React.FC = () => {
  return <div>
    <header>
  <Topbar />
</header>
    <Barbershop />
    
  </div>
};
export default App;