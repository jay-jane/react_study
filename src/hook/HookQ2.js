import { useRef, useState } from "react"

const HookQ2 = () => {
    /*
    todolist 만들기
     1. state는 {todo: '', list: []}로 관리하기
     2. 할 일 목록 작성하고 클릭 시 list에 인풋 입력값을 추가하고 map을 통해서 화면 그리기
     3. 등록 버튼 클릭 이후 ref를 활용해서 input 태그에 포커싱 주기
    */
   const [data, setData] = useState({todo: '', list: []});

   const handleChange = (e) => {
    setData({...data, todo: e.target.value});
   }
   
   const handleClick = () => {
    const newList = data.list.concat(data.todo);
    setData({...data, todo: '', list: newList});
    sub.current.focus();
   }

   const newList = data.list.map((item, index) => 
        <li key={index}>
            {index + 1}. {item}
        </li>
    )

    const sub = useRef();
    return(
        <div>
            <h3>ref로 할 일 목록 만들기</h3>
            <input type="text" name="todo" onChange={handleChange} value={data.todo} ref={sub} placeholder="할 일 작성" />
            <button onClick={handleClick}>등록</button>
            <ul style={{listStyle: 'none'}}>
                {newList}
            </ul>
        </div>
    )
}

export default HookQ2;