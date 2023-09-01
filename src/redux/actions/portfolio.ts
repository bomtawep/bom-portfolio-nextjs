export interface Portfolio {
    id: number,
    firstname: string,
    lastname: string;
    nickname: string,
    gender: string,
    phone_number: string,
    email: string,
    line_id: string,
    address: string,
}

export enum ActionType {
    PORTFOLIO_PENDING = 'PRODUCT_TYPE_PENDING',
    PORTFOLIO_SUCCESS = 'PORTFOLIO_SUCCESS',
    PORTFOLIO_UPDATE = 'PORTFOLIO_UPDATE',
    PORTFOLIO_FAIL = 'PORTFOLIO_FAIL',
    PORTFOLIO_STORE = 'PORTFOLIO_STORE'
}

interface actionPending {
    type: ActionType.PORTFOLIO_PENDING;
}
interface actionSuccess {
    type: ActionType.PORTFOLIO_SUCCESS;
    payload: Portfolio[];
}
interface actionPortfolioUpdate {
    type: ActionType.PORTFOLIO_SUCCESS;
    payload: Portfolio[];
}
interface actionFail {
    type: ActionType.PORTFOLIO_FAIL;
    payload: string ;
}

export type Action = actionPending | actionSuccess | actionFail | actionPortfolioUpdate;