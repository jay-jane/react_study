import { Fragment, useState } from "react"
import HookEffect from "./hook/HookEffect";
import HookQ from "./hook/HookQ";
import HookQ2 from "./hook/HookQ2";
import HookReducer from "./hook/HookReducer";
import HookReducer2 from "./hook/HookReducer2";
import HookRef from "./hook/HookRef";



const App = () =>{

    /* 
    p.223
    1.필수 훅
     useState()
      컴포넌트에서 상태값을 제어하는 기본이 되는 hook

     useEffect()
      컴포넌트의 라이프사이클(생명주기)을 다룹니다.
      mount, mount이후,state변경될 때 ,unmount이전에 특정작업을 수행할 수 있습니다.

     useRef()
      태그의 이름 달기
    
    2. 부가적인 훅
     useReducer()
      useState의 사용을 외부에서 사용할 수 있게 해주는 훅(state의 변경을 외부에서 제어할 수 있음)
      const[현재값, reducer를 업데이트할 수 있는 함수] = useReducer(외부에서 사용 할 reducer함수, reducer의 초기값);
    */

    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(!visible);
        }


    return(

        <Fragment>
          <button onClick={handleClick}>{visible ? '숨기기' : '보이기'}</button> 

          {visible ? <HookEffect/>: null}

          <hr/>
          {/* ref훅 */}
          <HookRef/>

          {/* 훅실습 */}
          <hr/>
          <HookQ/><hr/>
          <HookQ2/><hr/>

          {/* 리듀서 */}
          <HookReducer/><hr/>
          <HookReducer2/>

        </Fragment>
    )
}

export default App;