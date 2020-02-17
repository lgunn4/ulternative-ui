import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./components/FrontPage/containers/FrontPage";
import ExplorePage from "./components/ExplorePage/containers/ExplorePage";
import CategoryPage from "./components/CategoryPage/containers/CategoryPage";

function Content() {
    return (
        <main>
            <div className='content'>
            <Switch>
                <Route exact path="/ulternative-ui/" component={FrontPage}/>
                <Route exact path="/ulternative-ui/explore" component={ExplorePage}/>
                <Route exact path="/ulternative-ui/category/:id" component={CategoryPage} />
            </Switch>
            </div>
        </main>
    );
}

export default Content;
