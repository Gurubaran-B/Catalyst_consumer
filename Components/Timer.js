import React from "react";

function Timer({minutes, seconds, setMinutes, setSeconds, setGameStatus}) {

    if (seconds > 0)
        {
            setTimeout(() => setSeconds(seconds - 1 ), 1000);
        }
    else if (seconds === 0)
        { 
            if (minutes > 0)
                {
                    setTimeout(() => {setMinutes(minutes - 1 ); setSeconds(59);}, 1000); 
                }
        }

    if ((minutes === 0) && (seconds ===0))
    {
        setGameStatus(false);
    }

    return (
        <span style={{fontSize : "inherit"}}>{(minutes > 9) ? minutes : `0${minutes}`} : {(seconds > 9) ? seconds : `0${seconds}`}</span>
    );
};

export default Timer;