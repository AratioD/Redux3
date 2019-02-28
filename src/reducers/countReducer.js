
const initialState = {
    count: 123
};

console.log('initialstate does counterreducer work', initialState.count)

const countReducer = (state = initialState, action) => {
    console.log('intitialState inside reducer', state)
    console.log('reducre runnig', action)
    return state;
}

// export const countNumber = (content) => {
//     return {
//         count: 123
//     }
// }

export default countReducer