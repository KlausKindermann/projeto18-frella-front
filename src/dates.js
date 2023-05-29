import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Dates({date}){
    return(
        <DatesList>
            <Link to= {`/times`}>
            <Texto> {date.day} </Texto>
            </Link>
            </DatesList>
    )
}

const Texto = styled.div`
color: #E0EEEE;
font-size: 18px;
margin-top: 5px;
`

const DatesList = styled.div`
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