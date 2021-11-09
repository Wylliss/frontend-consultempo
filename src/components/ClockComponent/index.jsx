import React, { useState } from 'react';
import './style.css'

const ComponentClock = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);
    return (
        <>
            <h1 className="font"> {ctime} </h1>
        </>
    );
}

 export default ComponentClock


