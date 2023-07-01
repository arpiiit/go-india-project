import React from 'react';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

const Compo = () => {
    return (
        <div className='flex mx-auto space-x-16'>
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default Compo;
