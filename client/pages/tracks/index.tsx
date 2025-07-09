import React, { useState } from "react"

import { Box, Button, Card, Grid2 } from "@mui/material"

import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/router"
import { ITrack } from "../../types/track"
import TrackList from "../../components/TrackList"


const Index = () => {
    const router = useRouter()
    const [tracks, setTracks] = useState<ITrack[]>([
        {
            _id: '1',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'Text 1',
            listens: 100,
            picture: '/picture 1',
            audio: 'audio 1',
            comments: []
        },
        {
            _id: '2',
            name: 'Track 2',
            artist: 'Artist 2',
            text: 'Text 2',
            listens: 200,
            picture: '/picture 2',
            audio: 'audio 2',
            comments: []
        },
        {
            _id: '3',
            name: 'Track 3',
            artist: 'Artist 3',
            text: 'Text 3',
            listens: 300,
            picture: '/picture 3',
            audio: 'audio 3',
            comments: []
        }   
    ])

    return (
        <MainLayout>
            <Grid2 container spacing={2} justifyContent='center'>
                <Card style={{ width: 900, marginTop: 100 }}>
                    <Box p={2}>
                        <Grid2 container justifyContent="space-between">
                            <h1>List of tracks</h1>
                            <Button onClick={() => {
                                console.log('clicked', router)
                                router.push('/tracks/create')
                            }}>Load</Button>
                        </Grid2>
                    </Box>   
                    <TrackList tracks={tracks} />
                </Card>
            </Grid2>
        </MainLayout>
    )
}

export default Index