import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
);
