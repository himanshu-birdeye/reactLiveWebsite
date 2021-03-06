import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 150,
    error: false,
    building:false
};

const INGREDIENT_PRICES = {
    salad: 50,
    bacon: 80,
    meat: 100,
    cheese: 70,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = {
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building:true
            }
            return updateObject(state, updatedState);
            
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]:
                        state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building:true
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 150,
                error: false,
                building:false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};
export default reducer;