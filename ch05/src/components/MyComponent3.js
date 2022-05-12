import React, { useState } from 'react';

const MyComponent3 = ({children}) => {
    //state 선언
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const onClickHandler = (e) => {
        setList(e.target.value)
    }

    return (
        <div className='MyComponent3'>
            <h5>MyComponent3</h5>
            <p>컴포넌트 내용 : {children}</p>
            <ul>
                {list.map(((value, index)=><li key={index}>{value}</li>))}
            </ul>

            <input  type="text"
                    value={value}
                    onChange={onChangeHandler}/>

            <button onClick={onClickHandler}>등록</button>


        </div>
    );
};

export default MyComponent3;