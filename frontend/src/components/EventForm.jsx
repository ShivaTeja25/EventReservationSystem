import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid2 as Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";


import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Container from "@mui/material/Container";

import AdditionalInformationForm from "./AdditionalInformationForm";
import LogisticalDetailsForm from "./LogisticalDetailsForm";
import EventDetailsForm from "./EventDetailsForm";

const steps = ["Event Details", "Logistical Details", "Additional Information"];

function getStepContent(step, formData, handleChange, formErrors) {
  switch (step) {
    case 0:
      return (
        <EventDetailsForm
          formData={formData}
          handleChange={handleChange}
          formErrors={formErrors}
        />
      );
    case 1:
      return (
        <LogisticalDetailsForm
          formData={formData}
          handleChange={handleChange}
          formErrors={formErrors}
        />
      );
    case 2:
      return (
        <AdditionalInformationForm
          formData={formData}
          handleChange={handleChange}
          formErrors={formErrors}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default function EventForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    eventName: "",
    hostName: "",
    hostEmail: "",
    deptName: "",
    eventLocation: "",
    micsNeeded: 0,
    eventType: "",
    recording: false,
    computerAsst: false,
    wifiAccess: false,
    extraInformation: "",
    conferenceTool: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });

  const [formErrors, setFormErrors] = React.useState({});

  const validateStep = () => {
    const errors = {};
    if (activeStep === 0) {
      if (!formData.eventName) errors.eventName = "Event name is required.";
      if (!formData.hostName) errors.hostName = "Host name is required.";
      if (!formData.hostEmail) errors.hostEmail = "Host email is required.";
    } else if (activeStep === 1) {
      if (!formData.eventLocation)
        errors.eventLocation = "Event location is required.";
      if (!formData.startDate) errors.startDate = "Start date is required.";
      if (!formData.endDate) errors.endDate = "End date is required.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleNext = async () => {
    if (!validateStep()) return;

    if (activeStep === steps.length - 1) {
      try {
        const response = await fetch("http://localhost:8080/data/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setActiveStep(activeStep + 1);
        } else {
          alert("Failed to submit the event request.");
        }
      } catch (error) {
        setActiveStep(activeStep + 1)
        console.error("Error submitting event:", error);
        alert("An error occurred while submitting the event.");
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container>
      <CssBaseline enableColorScheme />
      <Grid
        container
        sx={{
          height: {
            xs: "100%",
            sm: "calc(100dvh - var(--template-frame-height, 0px))",
          },
          mt: { xs: 4, sm: 0 },
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stepper
              id="desktop-stepper"
              activeStep={activeStep}
              sx={{ width: "100%", height: 40 }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Card
            sx={{ display: { xs: "flex", md: "none" }, width: "100%", mb: 4 }}
          >
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Event Details Summary
                </Typography>
                <Typography variant="body1">
                  {activeStep === 0
                    ? "Basic Information"
                    : activeStep === 1
                    ? "Scheduling"
                    : "Final Details"}
                </Typography>
              </div>
            </CardContent>
          </Card>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: "flex", md: "none" } }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">🎉</Typography>
                <Typography variant="h5">
                  Event request submitted successfully!
                </Typography>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, formData, handleChange, formErrors)}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "end",
                    mt: 4,
                    gap: 1,
                  }}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    sx={{ width: { xs: "100%", sm: "fit-content" } }}
                  >
                    {activeStep === steps.length - 1 ? "Submit Event" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
