import React, { ReactNode } from "react"

import Navbar from "../components/Navbar"
import Player from "../components/Player"
import { Container } from "@mui/material"
import styles from '../styles/layout.module.scss'

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container className={styles.container}>
                { children }
            </Container>
            <Player />
        </>
    )
}

export default MainLayout