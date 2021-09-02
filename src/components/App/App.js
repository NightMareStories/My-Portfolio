import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../Main/Main';
import './App.scss';
import Footer from '../Footer/Footer';
import ModalPortfolio from '../Modal/ModalPortfolio/ModalPortfolio';
// import Rates from '../../projects/src/App';
// import '../../css/components/App/App.css';

/* <picture>
                    <source srcSet="img/about-text-img.webp" type="image/webp" />
                    <img src="img/about-text-img.png" alt="" />
                </picture> */

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/rates" />
                    <Route exact path="/portfolio" component={ModalPortfolio}/>
                </Switch>
                <Main />
                <Footer />

            </Router>


        </>
    );
}

export default App;