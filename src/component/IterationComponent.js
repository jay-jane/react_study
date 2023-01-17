
const IterationComponent = () => {
    const arr = [1, 2, 3, 4, 5];
    // const newArr = arr.map(function(item, index, arr) {
    //     return item * 10;
    // }); //es5

    // const newArr = arr.map((item, index, arr) => item * 10); //es6
    // console.log(newArr);

    //반복처리(태그)
    //리액트에서 반복 처리 시 태그에 key(고유한 값)를 작성해야 함
    //key는 화면에서 렌더링 할 때 참조하는 값
    const newArr = arr.map((item, index) => <li key={index}>{item}</li>);
    console.log(newArr);
    return (
        <>
            <ul>
                {newArr}<br/>
                {arr.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default IterationComponent;