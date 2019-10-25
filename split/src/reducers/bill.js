import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_BILL,
    SUCCESS_ADD_BILL,
    FAILED_BILL,
    SUCCESS_DELETE_BILL,
    DELETE_BILL
} from '../actions/bill';

const initialState = {
    isFetching: false,
    error: ' ',
    bill: [],
    addBill: false,
    billReveal: false,
    deleteBill: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
        case FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: '',
          bill: action.payload
        };
        case FETCH_FAILURE: 
        return {
            ...state, 
            error: action.payload,
            isFetching: false
        }
        case ADD_BILL:
            return {
                ...state,
            }
        case SUCCESS_ADD_BILL:
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
