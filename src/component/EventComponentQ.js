import { useState } from "react";

const EventComponentQ = () => {

    const [opt, setOpt] = useState('메뉴 선택');

    const selectOption = (e) => {
        // console.log(e.target.value);
        setOpt(e.target.value);
    }
    return (
        <>
            <hr/>
            <h3>select 태그 핸들링 (실습)</h3>
            셀렉트 태그가 바뀔 때 선택한 결과를 아래에 출력하기<br/>
            <select onChange={selectOption}>
                <option>-------</option>
                <option>피자</option>
                <option>피자2</option>
                <option>피자3</option>
            </select>
            <h3>선택한 결과</h3>
            <p>{opt === '-------' ? '메뉴 선택' : opt}</p>
        </>
    )
}

export default EventComponentQ;