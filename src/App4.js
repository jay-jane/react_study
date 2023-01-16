import EventComponent from "./component/EventComponent";
import EventComponent2 from "./component/EventComponent2";
import EventComponentQ from "./component/EventComponentQ";
import EventComponentQ2 from "./component/EventComponentQ2";

const App = () => {
    //이벤트핸들링 p.121
    return (
        <>
            <EventComponent/>
            <EventComponent2/>

            {/* 실습 */}
            <EventComponentQ/>
            <EventComponentQ2/>
        </>
    )
}

export default App;