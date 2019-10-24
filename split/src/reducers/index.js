import {
    ADD_BILL,
    FETCH_BILL,
    Add_Failure
} from '../actions';

const initialState = {
    bill: [],
    addBill: false,
    billReveal: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL:
            return {
                ...state,
                addBill: true,
                error: ''
            }
        case FETCH_BILL:
            return {
                ...state,
                addBill: false,
                billReveal: true,
                bill: action.payload
            }
        case Add_Failure:
            return {
                ...state,
                error: action.payload,
                addBill: false
            }
        default:
            return state;
    }
}
