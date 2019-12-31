import React, { useContext } from 'react'
import Countdown from "react-countdown"
import styled from 'styled-components'
import HnyText from './hnyText'

const Digit = styled.div`
    color: #ecf0f1;
    font-size: 130px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    `

const Block = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    font-family: 'Kanit', sans-serif;
`


const countdown = () => {
    const Completionist = () => <HnyText />

    const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        return (
            <Completionist />
        )
    } else {
        return (
        <Block>
            <Digit>
                {hours} :
            </Digit>
            <Digit>
                {minutes} :
            </Digit>
            <Digit>
                {seconds}
            </Digit>
        </Block>
        )
    }
    }
    return <Countdown date={new Date("Jan 1, 2020 00:00:00").getTime()} renderer={renderer} />
}


export default countdown
