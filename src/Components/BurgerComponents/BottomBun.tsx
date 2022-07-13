import React, { useEffect, useState } from 'react';
import './../../styles/bottomBun.scss'
const BottomBun = () => {
    const [isWarm, setIsWarmState] = useState<boolean>(true);
    // useEffect(() => {
    //     const interval = getIntervalToSetWarmBun(isWarm, setIsWarmState);
    //     return () => { clearInterval(interval) };
    // });
    return (
        <div id="bottom-bun">
        </div>
    );
};

function getIntervalToSetWarmBun(isWarm: boolean, setIsWarmState: Function) {
    return setInterval(() => {
        setIsWarmState(false);
        if (isWarm) {
            alert("bulka ciepła!")
        } else {
            alert("buła zimna!")
        }
    }, 3000)
}

export default BottomBun;