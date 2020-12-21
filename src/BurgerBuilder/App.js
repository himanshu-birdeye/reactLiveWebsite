import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';


class App extends Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawer = () => {
        const currState = this.state.showSideDrawer;
        this.setState({ showSideDrawer: !currState });
    }
    render() {
        return (
            <div>
                <Layout menuClick={this.toggleSideDrawer} showSideDrawer={this.state.showSideDrawer}>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/" exact component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;