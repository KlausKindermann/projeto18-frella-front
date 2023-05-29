import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Places({img}){
    return(
        <PlacesList>
            <Link to= {`/dates`}>
            <img src={img.image} alt="Imagem do destino" />
            <Texto> {img.name} </Texto>
            </Link>
            </PlacesList>
    )
}

const Texto = styled.div`
color: #E0EEEE;
font-size: 18px;
margin-top: 5px;
`

const PlacesList = styled.div`
width: 250px;
height: 350px;
background: #104E8B;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
margin-bottom: 20px;
img{
    width: 200px;
    height: 250px;
}
`