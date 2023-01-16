import { useState } from "react";
// import EventComponent from "./EventComponent";

const EventComponent2 = () => {
    //객체로 state 관리
    const [data, setData] = useState({name: '', topic: ''});
    
    const handleChange = (e) => {
        // console.log(data); //state 기본값 : 객체
        //객체 안에서 key 바꾸기 - ["키"] : 값
        const copy = {...data, [e.target.name] : e.target.value}; //데이터 복사
        setData(copy);
    }
    // const handleTopic = (e) => {
    //     const copy = {...data, [e.target.name] : e.target.value};
    //     setData(copy);
    // }

    const handleClick = () => {
        alert(`${data.name}님 topic - ${data.topic}`);
        setData({name: '', topic: ''}); //state(객체) 초기화
    }

    return (
        <>
            <hr/>
            <h3>리액트 이벤트 핸들링(객체)</h3>
            <input type="text" name="name" onChange={handleChange} value={data.name}/>
            <div>결과 : {data.name}</div>
            <input type="text" name="topic" onChange={handleChange} value={data.topic} />
            <div>결과 : {data.topic}</div>
            <button type="button" onClick={handleClick}>변경</button>
        </>
    )
}

export default EventComponent2;