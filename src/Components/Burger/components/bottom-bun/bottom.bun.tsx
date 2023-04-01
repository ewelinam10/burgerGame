import React, {useState} from 'react';
import {BottomBunStyled} from "./bottom-bun.style";

const BottomBun = () => {
    const [isWarm, setIsWarmState] = useState<boolean>(true);
    // useEffect(() => {
    //     const interval = getIntervalToSetWarmBun(isWarm, setIsWarmState);
    //     return () => { clearInterval(interval) };
    // });
    return (
        <BottomBunStyled>
        </BottomBunStyled>
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

//

export default BottomBun;