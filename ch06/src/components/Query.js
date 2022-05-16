import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Query = () => {

    // Query Params를 수신하기 위한 Hook 선언
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name');
    const age  = searchParams.get('age');
    const addr = searchParams.get('addr');

    return (
        <div className='Query'>
            <h4>URL Query</h4>
            <p>
                {name && <span>이름 : {name}</span>}<br />
                {age  && <span>나이 : {age}</span>}<br />
                {addr && <span>주소 : {addr}</span>}<br />
            </p>
        </div>
    );
};

export default Query;