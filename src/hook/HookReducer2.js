import { useReducer } from "react";
import { nameReducer } from "./HookReducerComponent";

// const nameReducer = (state, action) => {
//     // if(action.name == "name") {
//     //     state = {...state, ["name"]: action.value};
//     // } else if(action.name == "age") {
//     //     state = {...state, ["age"]: action.value}
//     // }

//     state = { ...state, [action.name]: action.value };
//     return state;
// }


const HookReducer2 = () => {

    const [state, func] = useReducer(nameReducer, { name: '', age: '' });

    const { name, age } = state;

    return (
        <>
            이름 : <input type="text" onChange={(e) => func(e.target)} name="name" /><br />
            나이 : <input type="text" onChange={(e) => func(e.target)} name="age" /><br />

            !!! {name} !!!<br />
            !!! {age} !!!<br />
        </>
    )
}

export default HookReducer2;