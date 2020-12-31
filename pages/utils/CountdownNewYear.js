import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const TextStyled = styled.div`
    font-size: 64px;
`
export default function CountdownTimer(props) {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`2021-1-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            วัน: Math.floor(difference / (1000 * 60 * 60 * 24)),
            ชั่วโมง: Math.floor((difference / (1000 * 60 * 60)) % 24),
            นาที: Math.floor((difference / 1000 / 60) % 60),
            วินาที: Math.floor((difference / 1000) % 60),
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
  
    Object.keys(timeLeft).forEach((interval) => {
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
            {timerComponents.length ? timerComponents : <TextStyled>🎆 🎆 Happy New Year 2021 🎆 🎆</TextStyled>}
        </>
    );
}