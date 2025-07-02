import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid2, TextField } from "@mui/material";
import { useState } from "react";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState<File | null>(null)
    const [audio, setAudio] = useState<File | null>(null)
    
    const back = () => {
        setActiveStep(activeStep - 1)
    }

    const next = () => {
        setActiveStep(activeStep + 1)
    }
    return (
        <MainLayout>
            {activeStep === 0 && <StepWrapper activeStep={activeStep}>
                <Grid2 container direction="column" style={{ padding: 20 }}>
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