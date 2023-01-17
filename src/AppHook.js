import HookEffect from "./hook/HookEffect";

const App = () => {
    /*
    훅(hook) - p.223
        useState() - 컴포넌트에서 상태값을 제어하는 기본이 되는 hook
        useEffect() - 컴포넌트의 라이프사이클(생명주기)을 다룸
         -mount, mount 이후, state 변경 시, unmount 직전에 특정 작업 수행 가능
    */
    return (
        <>
            <HookEffect/>
        </>
    )
}

export default App;