import { useEffect, useRef, useState } from "react";

const HookQ = () => {
    /*
    1, 컴포넌트가 마운트된 이후 한 번만 id태그에 포커스 주기
    2. id, pw는 state로 관리
        로그인 버튼 클릭 시 공백이라면 공백인 태그에 포커스
        로그인 버튼 클릭 시 공백이 아니면 경고창으로 id, pw 출력
    */
    const [id, setId] = useState('');
    const handleId = (e) => {
        setId(e.target.value);
    }
    
    const [pw, setPw] = useState('');
    const handlePw = (e) => {
        setPw(e.target.value);
    }

    const handleClick = () => {
        //일반적으로 로직에는 삼항연산자는 쓰이지 않음
        id !== '' && pw !== '' ?
        alert(`id : ${id}, pw : ${pw}`) :
        id === '' ?
        inputId.current.focus() :
        inputPw.current.focus();
    }

    useEffect(() => {
        inputId.current.focus();
    }, [])

    const inputId = useRef();
    const inputPw = useRef();
   return (
    <div>
        <h3>훅 실습</h3>
        <input type="text" name="id" onChange={handleId} placeholder="아이디" ref={inputId} />
        <input type="password" name="pw" onChange={handlePw} placeholder="비밀번호" ref={inputPw} />
        <button onClick={handleClick}>로그인</button>
    </div>
   )
}

export default HookQ;