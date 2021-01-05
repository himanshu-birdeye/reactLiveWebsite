import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
// import * as actions from '../../store/actions/index';
// import { ThemeProvider } from 'styled-components';
// import { purchaseBurgerSuccess } from '../../store/actions/order';

const checkout = props => {

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/reactLiveWebsite/checkout/contact-data');
    }

    let summary = <Redirect to='/reactLiveWebsite' />

    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to='/reactLiveWebsite' /> : null
        summary =
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={props.ings}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler}
                />
                <Route
                    path={props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
    }
    return summary;

}

const mapStatetoProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStatetoProps)(checkout);