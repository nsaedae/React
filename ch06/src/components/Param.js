import React from 'react';
import { useParams } from 'react-router-dom';

const Param = () => {

    // URL Params를 수신하기 위한 Hook 선언
    const params = useParams();

    return (
        <div className='Param'>
            <h4>URL Param</h4>
            <p>
                {params.name && <span>이름 : {params.name}</span>}<br />
                {params.age  && <span>나이 : {params.age}</span>}<br />
                {params.addr && <span>주소 : {params.addr}</span>}<br />
            </p>
        </div>
    );
};

export default Param;