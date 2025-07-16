import Image from "next/image";
import { ITrack } from "../types/track";
import trackStyles from '../styles/TrackItem.module.scss';
import commonStyles from '../styles/common.module.scss';
import { Card, Grid2, IconButton } from "@mui/material";
import { Delete, Pause } from "@mui/icons-material";
import { PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    return (
       <Card className={trackStyles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active ? <PlayArrow /> : <Pause />}
            </IconButton>
            <Image
                width={70}
                height={70}
                className={trackStyles.image}
                src={track.picture}
                alt={track.name}
            />
            <Grid2 container direction="column" className={trackStyles.trackInfo}>
                <div className={commonStyles.track}>{track.name}</div>
                <div className={commonStyles.artist}>{track.artist}</div>
            </Grid2>
            {active && <div>02:42 / 03:22</div>}
            <IconButton style={{ marginLeft: 'auto' }} onClick={e => e.stopPropagation()}>
                <Delete />
            </IconButton>
       </Card>
    )
}

export default TrackItem;