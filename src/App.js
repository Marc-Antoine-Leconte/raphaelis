import React from 'react'
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import News from "./pages/News";
import WikiGames from "./pages/WikiGames";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={"/accueil"}><Home/></Route>
                <Route path={"/404"}><NotFound/></Route>
                <Route path={"/apropos"}><About/></Route>
                <Route path={"/contact"}><Contact/></Route>
                <Route path={"/jeux"}><Games/></Route>
                <Route path={"/actualite"}><News/></Route>
                <Route path={"/wiki"}><WikiGames/></Route>
                <Route path={"/404"}><NotFound/></Route>
                <Redirect exact path={"/"} to='/accueil' />
                <Redirect path={"*"} to='/404' />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;