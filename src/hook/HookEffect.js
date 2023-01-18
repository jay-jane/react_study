import { useEffect, useState } from "react";

const HookEffect = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }

    //useEffect(함수) - 화면이 mount된 다음 동작
    // useEffect(() => {
    //     console.log(`state값 : ${name}`);
    // });
    
    //useEffect(함수, []) - 화면이 mount된 다음 한 번만 실행(첫 번째 mount에서만 실행)
    // useEffect(() => {
    //     console.log(`state값 : ${name}`);
    // }, []);

    //useEffect(함수, [state]) - 특정 값이 렌더링 될 때만 실행
    // useEffect(() => {
    //     console.log(`state값 : ${age}`);
    // }, [age/* , name */]);
    
    useEffect(() => {
        console.log('name이 변경될 때 rendering')
        //컴포넌트가 unmount 될 때 실행됩니다.
        return () => {
            console.log(('unmount됩니다')); //렌더링이 그려지면, 기존화면은 지워진다.
            console.log(`update전 값:${name}`); //state는 직전 값이 나온다.      
        }
    }, [name]);
    
    return (
        <>
            이름 : <input type="text" onChange={handleName}/><br/>
            나이 : <input type="number" onChange={handleAge}/><br/>

            이름 : {name}, 나이 : {age}
        </>
    )

    
}

export default HookEffect;