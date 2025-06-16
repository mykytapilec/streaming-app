import { Button, Grid2, TextField } from "@mui/material";
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
           <h1>Lyrics</h1>
           <p>{track.text}</p>
           <h1>Comments</h1>
           <Grid2 container>
                <TextField label="Your name" fullWidth />
                <TextField label="Comment" fullWidth multiline rows={4} />
                <Button>Send</Button>
           </Grid2>
           <div>   
            {track.comments.map(comment => (
                <div key={comment._id}>
                    <div>Author {comment.username}</div>
                    <div>Comment {comment.text}</div>
                </div>
            ))}
           </div>
        </MainLayout>
    )
}

export default TrackPage;