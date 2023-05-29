import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react";
import Times from "./times.js";

export default function ScreenTree() {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const URL = "https://viagens-api.onrender.com/times";
        const promise = axios.get(URL);
        promise.then((res) => {
            setTimes(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])


    return (
        <ScreenTimesSelect>
            <Header>Viagens Alucinantes</Header>
            <BoxAction>Selecione o horário</BoxAction>
            <ContainerTimes>
                {times.map((hour) => <Times key={hour.id} times={hour} />)}
            </ContainerTimes>
        </ScreenTimesSelect>
    )
}


const Header = styled.div`
width: 100%;
height: 100px;
background: #104E8B;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 50px;
line-height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: #E0EEEE;
position: fixed;
top: 0;
`
const ScreenTimesSelect = styled.div`
background-color: #E0EEEE;
`
const ContainerTimes = styled.div`
display: flex;
flex-wrap: wrap;
`
const BoxAction = styled.div`
height: 150px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: black;
margin-top: 67px;
`