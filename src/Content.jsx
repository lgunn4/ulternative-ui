import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./components/FrontPage/FrontPage";

function Content() {
    return (
        <main>
            <div className='content'>
            <Switch>
                <Route exact path="/" component={FrontPage}/>
            </Switch>
            </div>
        </main>
    );
}

export default Content;
