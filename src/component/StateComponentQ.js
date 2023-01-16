import { useState } from "react";

const StateComponentQ = () => {
    // let [cnt, setCnt] = useState(0);
    // let inc = () => setCnt(++cnt); //state, setState
    // let dec = () => setCnt(--cnt);
    // let reset = () => setCnt(0);

    const [cnt, setCnt] = useState(0); //const 변수 사용, setter를 이용해서 값 변경하기
    let inc = () => setCnt(cnt + 1); //state, setState
    let dec = () => setCnt(cnt - 1);
    let reset = () => setCnt(0);

    return (
        <div>
            <hr/>
            <h3>카운트 : {cnt}</h3>
            <button onClick={inc}>증가</button>
            <button onClick={dec}>감소</button>
            <button onClick={reset}>초기화</button>
        </div>
    )
}

export default StateComponentQ;