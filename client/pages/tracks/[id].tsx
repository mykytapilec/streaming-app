import { Button, Grid2 } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import { useRouter } from "next/router";

const TrackPage = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Text 1',
        listens: 100,
        picture: 'picture 1',
        audio: 'audio 1',
        comments: []
    }
    const router = useRouter()

    return (
        <MainLayout>
           <Button variant="outlined" style={{ fontSize: 32 }} onClick={() => router.push('/tracks')}>Back to list</Button>
           <Grid2 container style={{ margin: '20px 0' }}>
            <img src={track.picture} alt={track.name} width={200} height={200} />
            <div style={{ marginLeft: 20 }}>
                <h1>Track name {track.name}</h1>
                <h1>Artist name {track.artist}</h1>
                <h1>Listens {track.listens}</h1>
            </div>
           </Grid2>
        </MainLayout>
    )
}

export default TrackPage;