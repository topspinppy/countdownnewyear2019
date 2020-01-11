import React, { useContext } from 'react'
import Countdown from "react-countdown"
import styled from 'styled-components'
import HnyText from './hnyText'
import px2vw from '../utils/px2vw'
import CountdownNewYear from '../utils/CountdownNewYear'
const Digit = styled.div`
    color: #ecf0f1;
    font-size: 50px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: ${px2vw(10)};
    text-align: center;
    font-family: 'Kanit', sans-serif;

    @media(max-width: 768px) {
        font-size: 30px;
        white-space: wrap;
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${px2vw(20)};
    font-family: 'Kanit', sans-serif;
`


const countdown = () => {
    const renderer = (length, timer) => {
        if(length) {
            return timer 
        } else {
            return (
                <div>
                    timsup
                </div>
            )
        }
    }
    return (
        <Digit>
            <CountdownNewYear renderer={renderer} />
        </Digit>
    )
}


export default countdown
