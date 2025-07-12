import { useRouter } from "next/router";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid2, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import styles from '../../styles/TrackItem.module.scss';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState<File | null>(null)
    const [audio, setAudio] = useState<File | null>(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()
    
    const back = () => {
        setActiveStep(activeStep - 1)
    }

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('artist', artist.value)
            if (picture) {
                formData.append('picture', picture)
            }
            if (audio) {
                formData.append('audio', audio)
            }
            axios.post('http://localhost:5050/tracks', formData)
                .then(() => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    return (
        <MainLayout>
            {activeStep === 0 && <StepWrapper activeStep={activeStep}>
                <Grid2 container direction="column" className={styles.container}>
                    <TextField
                        label="name of track"
                        style={{ marginTop: 10 }}
                    />
                    <TextField
                        label="name of artist"
                        style={{ marginTop: 10 }}
                    />
                     <TextField
                        label="lyrics"
                        multiline
                        rows={3}
                        style={{ marginTop: 10 }}
                    />
                </Grid2>
            </StepWrapper>}
            {activeStep === 1 && <StepWrapper activeStep={activeStep}>
                <FileUpload setFile={setPicture} accept="image/*">
                    <Button>Load album image</Button>
                </FileUpload>
            </StepWrapper>}
            {activeStep === 2 && <StepWrapper activeStep={activeStep}>
                <FileUpload setFile={setAudio} accept="audio/*">
                    <Button>Load audio track</Button>
                </FileUpload>
            </StepWrapper>}
            <Grid2 container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button disabled={activeStep === 2} onClick={next}>Next</Button>
            </Grid2>
        </MainLayout>
    )
}

export default Create;