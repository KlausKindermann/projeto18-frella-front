import styled from "styled-components"
import axios from "axios"
import Places from "./places.js";
import { useEffect, useState } from "react";

export default function ScreenOne() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const URL = "https://viagens-api.onrender.com/places";
        const promise = axios.get(URL);
        promise.then((res) => {
            setPlaces(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])


    return (
        <ScreenPlacesSelect>
            <Header>Viagens Alucinantes</Header>
            <BoxAction>Selecione o seu destino</BoxAction>
            <ContainerPlaces>
                {places.map((img) => <Places key={img.id} img={img} />)}
            </ContainerPlaces>
        </ScreenPlacesSelect>
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
const ScreenPlacesSelect = styled.div`
background-color: #E0EEEE;
`
const ContainerPlaces = styled.div`
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