import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Layout/Header/Header";
import Content from "./Content";
import Footer from "./components/Layout/Footer/Footer";

function Layout() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Layout;
