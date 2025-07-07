import React, { ReactNode } from "react"

import Navbar from "../components/Navbar"
import Player from "../components/Player"
import { Container } from "@mui/material"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container style={{margin: '90px auto'}}>
                { children }
            </Container>
            <Player />
        </>
    )
}

export default MainLayout