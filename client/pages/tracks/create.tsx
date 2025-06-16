import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
    return (
        <MainLayout>
            <StepWrapper activeStep={2}>
                <h1>Step 1</h1>
            </StepWrapper>
        </MainLayout>
    )
}

export default Create;