import { useEffect, useState } from "react";

function Clock() {

    const [time, setTime] =     useState(new Date());

    useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
        }, 1000);
    return () => clearInterval(intervalId);
}, []);

    return (
        <div className="clock-container">
            <h1 className="time">{time.toLocaleTimeString()}</h1>
    </div>
    );
}

export default Clock;
