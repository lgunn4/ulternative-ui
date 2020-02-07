import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./components/FrontPage/containers/FrontPage";

function Content() {
    return (
        <main>
            <div className='content'>
            <Switch>
                <Route exact path="/ulternative-ui/" component={FrontPage}/>
            </Switch>
            </div>
        </main>
    );
}

export default Content;
