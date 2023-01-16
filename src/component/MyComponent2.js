import { Fragment } from "react"

const MyComponent2 = ({name}) => {
    return (
        <Fragment>
        <div>
            두 번째 컴포넌트
            프롭스 값 : {name}
        </div>
        </Fragment>
    )
}

export default MyComponent2;
