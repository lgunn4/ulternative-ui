import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./containers/FrontPage";
import Explore from "./containers/Explore";
import Category from "./containers/Category";

function Content() {
    return (
        <main>
            <div className='content'>
            <Switch>
                <Route exact path="/" component={FrontPage}/>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/category/:id" component={Category} />
            </Switch>
            </div>
        </main>
    );
}

export default Content;
