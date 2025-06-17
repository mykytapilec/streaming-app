import FileUpload from "@mui/icons-material/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid2 } from "@mui/material";
import { useState } from "react";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    
    const back = () => {
        setActiveStep(activeStep - 1)
    }

    const next = () => {
        setActiveStep(activeStep + 1)
    }
    return (
        <MainLayout>
            {activeStep === 0 && <StepWrapper activeStep={activeStep}>
                <h1>Step 1</h1>
            </StepWrapper>}
            {activeStep === 1 && <StepWrapper activeStep={activeStep}>
                <h1>Step 2</h1>
            </StepWrapper>}
            {activeStep === 2 && <StepWrapper activeStep={activeStep}>
                <h1>Step 3</h1>
            </StepWrapper>}
            <Grid2 container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button disabled={activeStep === 2} onClick={next}>Next</Button>
            </Grid2>
        </MainLayout>
    )
}

export default Create;