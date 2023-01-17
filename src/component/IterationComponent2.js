import { useState } from "react";

const IterationComponent2 = () => { //filter, map***
    //반복할 데이터 (state)
    const arr = [
        { id: 1, topic: 'hi' },
        { id: 2, topic: 'zzz' },
        { id: 3, topic: 'see' }
    ];
    const [list, setList] = useState(arr);
    //반복처리 (map)
    const newList = list.map(item =>
        <li key={item.id} onDoubleClick={() => handleDbcl(item.id)}>
            {item.topic}
        </li>
    );

    //인풋 데이터 관리
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }

    //버튼 클릭 시 input 값을 list 마지막에 추가
    const handleClick = () => {
        let obj = { id: list[list.length - 1].id + 1, topic: data }
        let newnewList = list.concat(obj); //원본 수정 없이 새로운 list 리턴
        setList(newnewList);
        setData('');
        // list.push(obj); //state 직접 변경x

    }

    //삭제 기능 - 익명함수(=>)는 호이스팅할 수 없음.. 선언된 곳 위에 위치해야 함
    //이벤트 안에서 함수를 호출로 연결하기
    // on ~ = {() => 함수()} - 익명 함수 안에서 함수 호출
    const handleDbcl = id => {
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열 생성
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponent2;