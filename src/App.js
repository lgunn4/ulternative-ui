import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </div>
  );
}

export default App;
