import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Times({times}){
    return(
        <TimesList>
            <Link to= {`/`}>
            <Texto> {times.hour} </Texto>
            </Link>
            </TimesList>
    )
}

const Texto = styled.div`
color: #E0EEEE;
font-size: 18px;
margin-top: 5px;
`

const TimesList = styled.div`
width: 350px;
height: 150px;
background: #104E8B;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
margin-bottom: 20px;
`