import React from 'react'
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={"/"}><Home/></Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;