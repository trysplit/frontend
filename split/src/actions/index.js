// import axios from 'axios'

// // const path = `https://split-the-bill-2.herokuapp.com/api`




// export const ADD_BILL = 'ADD_BILL';
// export const Add_SUCCESS = 'FETCH_BILL';
// export const Add_Failure = 'FAILED_BILL';


// export const addBill = () => {
//     dispatch({ type: addBill });

//     axios
//         .get('')
//         .then(res => {
//             console.log(res, 'Is actions working?')
//             dispatch({ type: ADD_BILL, payload: res.data })
//         })
//         .catch(err => dispatch({ type: Add_Failure, payload: err.response }))
// }
// }
// export function addBill(bill) {
//     return dispatch => {
//         dispatch({ type: ADD_BILL })
//         axiosWithAuth()
//         postMessage(path, bill)
//             .then((res) => {
//                 dispatch({ type: SUCCESS_ADD_BILL, payload: res.data })
//             })
//             .catch(err => dispatch({ type: FAILED_BILL, payload: err }))
//     };
// };

// export function getBill() {
//     return dispatch => {
//         dispatch({ type: FETCH_BILL });
//         axiosWithAuth()
//             .get(path)
//             .then(res => {
//                 dispatch({ type: SUCCESS_BILL, payload: res.data });
//             })
//             .catch(err => dispatch({ type: FAILED_BILL, payload: err }))
//     };
// };

// export function deleteBill(id) {
//     return dispatch => {
//         dispatch({ type: DELETE_BILL });
//         axiosWithAuth()
//             .delete(`https://split-the-bill-2.herokuapp.com/api/${id}`)
//             .then(res => {
//                 console.log(res.data)
//                 dispatch({ type: SUCCESS_DELETE_BILL, payload: id });
//             })
//             .catch(err => err => dispatch({ type: FAILED_BILL, payload: err }))
//     };
// };

