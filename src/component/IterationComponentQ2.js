import { useState } from "react";

const IterationComponentQ2 = () => {
    //1. select에 컴포넌트 반복으로 옵션 태그 생성하기
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const option = select.map((item, index) =>
        <option key={index}>
            {item}
        </option>
    );

    //2. data는 state로 관리, 화면에 li태그 반복
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];
    const [list, setList] = useState(data);
    const newList = list.map(item =>
        <li key={item.id}>
            {item.type} - {item.teacher}
        </li>
    );

    //3. 셀렉트박스가 바뀔 때 이벤트 객체를 활용해서 선택된 값만 필터링해서 보여주기
    const sel = (e) => {
        const t = data.filter(item => item.type === e.target.value);
        setList(t);
    }

    //4. 검색기능 (대소문자 구분x, type/teacher로 검색 가능하게 만들기)
    const [name, setName] = useState('');
    const content = (e) => {
        setName(e.target.value);
    }

    const search = () => {
        const result = data.filter(item => 
            item.type.toLowerCase().includes(name.toLowerCase()) || 
            item.teacher.includes(name));
        setList(result);
    }

    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            <input type="text" placeholder="ㅗㅗ" onChange={content}></input>
            <button type="button" onClick={search}>검색</button>
            <select onChange={sel}>
                {option}
            </select>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponentQ2;