import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid2, IconButton } from "@mui/material";
import styles from '../styles/Player.module.scss'
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Text 1',
        listens: 100,
        picture: '/picture 1',
        audio: 'audio 1',
        comments: []
    }
    const active = false;

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {
                    active ? <PlayArrow /> : <Pause />
                }
            </IconButton>
            <Grid2 container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid2>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{ marginLeft: 'auto'}} />
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    )
}

export default Player;