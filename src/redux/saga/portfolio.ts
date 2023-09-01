import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actions/portfolio';

const API_HOST = 'http://localhost:3000'
export const getProductTypes = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PORTFOLIO_PENDING
        });
        try {
            const { data } = await axios.get(`${API_HOST}/portfolio`);
            dispatch({
                type: ActionType.PORTFOLIO_SUCCESS,
                payload: data.data
            });
        } catch(err: any) {
            dispatch({
                type: ActionType.PORTFOLIO_FAIL,
                payload: err.message
            });
        }
    }
}