

import PropTypes from 'prop-types'; //프롭스 타임검증
import { Fragment } from "react";
const MyComponent = (/* props */ {name, age, email}) => {

    /* const {name, age, email} = props; */
    return (
        <Fragment>
        <div>첫 번째 컴포넌트</div>
        <div>props값 : {name}</div>
        <div>props값 : {age}</div>
        <div>props값 : {email}</div>
        </Fragment>
    )
}

/* props의 기본값 지정하기 - 컴포넌트명.defaultProps */
MyComponent.defaultProps = {
    name: "이름없음",
    age: 0,
    email: "없음",
    address: "서울" //강제 지정 - 전달 안 됨
}

/*props의 타입 검증 - 컴포넌트명.propTypes={} */
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string.isRequired //isRequired - 반드시 전달
}

export default MyComponent;
