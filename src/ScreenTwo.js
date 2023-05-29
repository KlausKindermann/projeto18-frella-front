import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react";
import Dates from "./dates.js";

export default function ScreenTwo() {
    const [dates, setDates] = useState([])

    useEffect(() => {
        const URL = "https://viagens-api.onrender.com/dates";
        const promise = axios.get(URL);
        promise.then((res) => {
            setDates(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])


    return (
        <ScreenDatesSelect>
            <Header>Viagens Alucinantes</Header>
            <BoxAction>Selecione a sua data</BoxAction>
            <ContainerDates>
                {dates.map((day) => <Dates key={day.id} date={day} />)}
            </ContainerDates>
        </ScreenDatesSelect>
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
const ScreenDatesSelect = styled.div`
background-color: #E0EEEE;
`
const ContainerDates = styled.div`
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