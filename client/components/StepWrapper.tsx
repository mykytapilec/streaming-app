import { Card, Container, Grid2, Step, StepLabel, Stepper } from "@mui/material";
import { FC } from "react";
import styles from '../styles/TrackItem.module.scss';
import { steps } from "../constants";

interface StepWrapperProps {
    activeStep: number;
    children: React.ReactNode;
}

const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index} completed={activeStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid2 container justifyContent="center" className={styles.stepWrapper}>
                <Card className={styles.card}>
                    {children}
                </Card>
            </Grid2>
        </Container>
    )
}

export default StepWrapper;