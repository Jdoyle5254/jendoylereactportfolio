import React from "react"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import NavBar from "./components/NavBar"
import LinksMenu from "./components/LinksMenu"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <LinksMenu/>
    <Footer />
    </div>
  );
}

export default App;
