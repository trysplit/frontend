import {
    ADD_BILL,
    SUCCESS_BILL,
    FAILED_BILL,
    FETCH_BILL,
    SUCCESS_ADD_BILL,
    SUCCESS_DELETE_BILL,
    DELETE_BILL,
} from '../actions/bill';

const initialState = {
    bill: [],
    addBill: false,
    billReveal: false,
    deleteBill: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL:
            return {
                ...state,
                addBill: true
            }
        case SUCCESS_BILL:
            return {
                ...state,
                addBill: false,
                billReveal: true,
                bill: action.payload
            }
        case FAILED_BILL:
            return {
                ...state,
                error: action.payload.error,
                addBill: false
            }
        case FETCH_BILL:
            return {
                ...state,
                error: '',
                addBill: true
            }
        case SUCCESS_ADD_BILL:
            return {
                ...state,
                error: '',
                addBill: false,
                billReveal: true,
                bill: [...state.bill, action.payload]
            }
        case SUCCESS_DELETE_BILL:
            return {
                ...state,
                error: '',
                DELETE_BILL: false,
                bill: state.bill.filter(bill => bill.id !== action.payload)
            }
        case DELETE_BILL:
            return {
                ...state,
                error: '',
                DELETE_BILL: true
            }
        default:
            return state;
    }
}

