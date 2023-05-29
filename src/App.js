import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import ScreenOne from "./ScreenOne"
import ScreenTwo from "./ScreenTwo"
import ScreenTree from "./ScreenTree"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

    return (
        <Screen>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ScreenOne />} />
                    <Route path="/dates" element={<ScreenTwo />} />
                    <Route path="/times" element={<ScreenTree/>} />
                </Routes>
            </BrowserRouter>
        </Screen>
    )
}
const Screen = styled.div`
width: 100%;
height: 100%;
`
