import React, { useEffect, useState } from "react";

export default function CountdownTimer(props) {
    const calculateTimeLeft = () => {
        const difference = +new Date("2021-01-01") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                วัน: Math.floor(difference / (1000 * 60 * 60 * 24)),
                ชั่วโมง: Math.floor((difference / (1000 * 60 * 60)) % 24),
                นาที: Math.floor((difference / 1000 / 60) % 60),
                วินาที: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <>
            {props.renderer(timerComponents.length,timerComponents)}
            {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
        </>
    );
}