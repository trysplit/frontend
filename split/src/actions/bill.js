import axios from 'axios';




export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILUTRE';
export const getBill = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
      .get('https://split-the-bill-2.herokuapp.com/api/bills')
      .then(res => {console.log(res.data); 
          dispatch({ type: FETCH_SUCCESS, payload: res.data })})
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response })); 
  }

export const ADD_BILL = 'ADD_BILL';
export const SUCCESS_ADD_BILL = 'SUCCESS_ADD_BILL';
export const FAILED_BILL = 'FAILED_BILL';
export const addBill = (bill) => dispatch => {
    dispatch({type: ADD_BILL });
        axios
        .post("https://split-the-bill-2.herokuapp.com/api/", bill)
            .then((res) => {
                dispatch({ type: SUCCESS_ADD_BILL, payload: res.data })
            })
            .catch(err => dispatch({ type: FAILED_BILL, payload: err }))
    };

export const SUCCESS_DELETE_BILL = 'SUCCESS_DELETE_BILL';
export const DELETE_BILL = 'DELETE_BILL';
export function deleteBill(id) {
    return dispatch => {
        dispatch({ type: DELETE_BILL });
        axios
            .delete(`https://split-the-bill-2.herokuapp.com/api/${id}`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: SUCCESS_DELETE_BILL, payload: id });
            })
            .catch(err => err => dispatch({ type: FAILED_BILL, payload: err }))
    };
};