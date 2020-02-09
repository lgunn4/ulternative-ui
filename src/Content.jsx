import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./components/FrontPage/containers/FrontPage";
import ExplorePage from "./components/ExplorePage/containers/ExplorePage";

function Content() {
    return (
        <main>
            <div className='content'>
            <Switch>
                <Route exact path="/ulternative-ui/" component={FrontPage}/>
                <Route exact path="/ulternative-ui/explore" component={ExplorePage}/>
            </Switch>
            </div>
        </main>
    );
}

export default Content;
