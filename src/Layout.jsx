import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Content";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/header/Header";

function Layout() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Layout;
