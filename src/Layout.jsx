import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Content from "./Content";

function Layout() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
}

export default Layout;
