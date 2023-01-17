
/*
이미지 가져오기
 1. 외부 서버에서 경로 참조받기 - 일반적인 방법
 2. src폴더 밑에 img파일 참조 - 비효율적
 3. public폴더 밑에 넣는 경우 이미지 바로 참조 가능
*/

import { useState } from "react";

// import img1 from '../img/img1.png';
// import img2 from '../img/img2.png';
const IterationComponentQ = () => {

    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ];
    // const [img, setImg] = useState({src: 'img/img1.png'});
    const [list, setList] = useState(<img src='/img/img1.png' alt=""/>);
    const newArr = arr.map(item =>
        <div key={item.title}>
            <img src={item.src} alt="" width="100" onClick={() => 
                setList(image(item.src))
            }></img>
            <p>{item.title}</p>
            <p>가격 : {item.price}</p>
        </div >);
    
    const image = link => <img src={link} alt=""></img>;
    // const handleContent = (a) => {
    //     setImg({src: a});
    // }

    return (
        <>
            <h3>이미지 데이터 반복</h3>
            {/* 1 */}
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="이미지" width="100"/> */}
            {/* 2 */}
            {/* <img src={img1} alt="" width="100" />
            <img src={img2} alt="" width="100" /> */}
            {/* 3 */}
            {/* <img src="/img/duck.jpg" width="100" /> */}
            <div style={{textAlign: "center"}}>
                {list}
                {/* <img src={img.src} alt="" width="200"/> */}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {newArr}
            </div>
        </>
    )
}

export default IterationComponentQ;