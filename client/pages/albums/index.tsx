import React from "react"
import { Container } from "@mui/material"

import MainLayout from "../../layouts/MainLayout"
import styles from '../../styles/pages.module.scss'


const Index = () => {
    return (
        <MainLayout>
            <Container className={styles.center}>
                albums
            </Container>
        </MainLayout>
    )
}

export default Index