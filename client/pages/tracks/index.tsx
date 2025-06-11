import React from "react"

import { Box, Button, Card, Grid2 } from "@mui/material"

import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/router"


const Index = () => {
    const router = useRouter()

    return (
        <MainLayout>
            <Grid2 container spacing={2} justifyContent='center'>
                <Card style={{ width: 900, marginTop: 100 }}>
                    <Box p={2}>
                        <Grid2 container justifyContent="space-between">
                            <h1>Track 1</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Load</Button>
                        </Grid2>
                    </Box>   
                </Card>
            </Grid2>
        </MainLayout>
    )
}

export default Index