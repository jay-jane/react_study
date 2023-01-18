import { Fragment } from "react";
import './css/App.css'; //css파일 경로
import styleModule from './css/App.module.css';

const App = () => {

    //카멜표기법
    const headStyle = {
        color: "green",
        textAlign: "center"
    }

    return (

        <Fragment>
            <header style={{ backgroundColor: "palegreen" }} className="app_header">
                <p style={headStyle}>헤더(직접스타일링)</p>
            </header>
            <article className="app_article">
                css파일로 디자인
            </article>
            <section className={styleModule.app_wrap}>
                <div className={styleModule.app_item}>
                    <p>css디자인</p>
                    <input className="input_control" type="text" />
                    <input className="input_control" type="password" />
                </div>
            </section>
        </Fragment>
    )
}

export default App;