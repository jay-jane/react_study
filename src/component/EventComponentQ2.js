import { useState } from "react";

const EventComponentQ2 = () => {
    
    //객체 하나로 처리하기
    // const [data, setData] = useState({input: '', result: ''});
    // const handle = (e) => {
    //     const copy = {...data, ["input"]: e.target.value};
    //     setData(copy);
    //     console.log(copy);
    // }
    // const click = () => {
    //     const copy = {...data, input: '', result: data.input};
    //     console.log(`${data.input}, ${data.result}`);
    //     setData(copy);
    // }

    // const handle = () => {
    //     //input은 입력값, result는 그대로 유지
    //     setData({input: e.target.value, result: data.result});
    // }
    // const click = () => {
    //     //input은 '', result는 data값으로 변경
    //     setData({input: '', result: data.input});
    // }

    //state를 2개 받아서 처리하기
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const set = (e) => {
        setInput(e.target.value);
    }

    const add = () => {
        setResult(input);
        setInput('');
    }
    
    const enter = (e) => {
        if(e.keyCode === 13) {
            add();
            setInput('');
        }
    }

    return (
        <>
            <hr/>
            <h3>인풋 데이터 핸들링 (실습)</h3>
            클릭 시 데이터는 공백으로, 결과는 인풋 입력값으로 처리<br/>
            (state 2개 또는 객체)<br/>
            <input type="text" onChange={set} onKeyUp={enter} value={input} />
            <button type="button" onClick={add}>추가</button>
            {/* <input type="text" onChange={handle} value={data.input} />
            <button type="button" onClick={click}>추가</button> */}
            <h3>결과</h3>
            <div>{/* data. */result}</div>
            
        </>
    )
}

export default EventComponentQ2;