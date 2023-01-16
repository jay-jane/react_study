import { Fragment } from "react";
import IterationComponent from "./component/IterationComponent";

const App = () => {
    //컴포넌트 반복 p.180
    //map(콜백(item, index, arr))
    return (
        <Fragment>
            <IterationComponent/>
        </Fragment>
    )
}

export default App;