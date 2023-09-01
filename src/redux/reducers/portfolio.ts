import { Portfolio, Action, ActionType } from '../actions/portfolio';

interface State {
    ProductTypes: Portfolio[];
    form: {};
    loading: boolean;
    error: string | null;
    nav: boolean;
}

const initialState = {
    ProductTypes: [],
    form: {},
    loading: false, 
    error: null,
    nav: false
}

export const portfolioReducer = (state: State = initialState, action: Action):State => {
    switch(action.type) {
        case ActionType.PORTFOLIO_PENDING:
            return {
                ProductTypes: [],
                form: {},
                loading: true,
                error: null,
                nav: false
            } 
        case ActionType.PORTFOLIO_SUCCESS:
            return {
                ProductTypes: action.payload,
                form: {},
                loading: false,
                error: null,
                nav: true
            }
        case ActionType.PORTFOLIO_SUCCESS:
            return {
                ProductTypes: [],
                form: action.payload,
                loading: false,
                error: null,
                nav: false
            }
        case ActionType.PORTFOLIO_FAIL:
            return {
                ProductTypes: [],
                form: {},
                loading: false,
                error: action.payload,
                nav: false
            }
        default: 
            return state;
    }
}