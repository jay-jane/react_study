
const myReducer = (state, action) => {
    //action은 객체임
    if(action.type === 'increase') {
        state = {value: state.value + 1};
    } else if(action.type === 'decrease') {
        state = {value: state.value - 1};
    } else if(action.type === 'reset') {
        state = {value: 0};
    }

    return state;
}

const nameReducer = (state, action) => {
    // if(action.name == "name") {
    //     state = {...state, ["name"]: action.value};
    // } else if(action.name == "age") {
    //     state = {...state, ["age"]: action.value}
    // }

    state = { ...state, [action.name]: action.value };
    return state;
}

export {myReducer, nameReducer};