import {
  Box,
  Grid2 as Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";

function AdditionalInformationForm({ formData, handleChange, formErrors }) {
  return (
    <Box component="form" sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <Grid>
          <RadioGroup
            name="recording"
            value={formData.recording ? "yes" : "no"}
            onChange={(e) =>
              handleChange({
                target: { name: "recording", value: e.target.value === "yes" },
              })
            }
          >
            <FormLabel component="legend">
              Will the event be recorded?
            </FormLabel>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {formErrors.recording && (
            <FormLabel error sx={{ color: "error.main", mt: 1 }}>
              {formErrors.recording}
            </FormLabel>
          )}
        </Grid>
        <Grid>
          <RadioGroup
            name="computerAsst"
            value={formData.computerAsst ? "yes" : "no"}
            onChange={(e) =>
              handleChange({
                target: { name: "computerAsst", value: e.target.value === "yes" },
              })
            }
          >
            <FormLabel component="legend">
              Is Computer/Laptop Assistance Required?
            </FormLabel>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {formErrors.computerAsst && (
            <FormLabel error sx={{ color: "error.main", mt: 1 }}>
              {formErrors.computerAsst}
            </FormLabel>
          )}
        </Grid>
        <Grid>
          <RadioGroup
            name="wifiAccess"
            value={formData.wifiAccess ? "yes" : "no"}
            onChange={(e) =>
              handleChange({
                target: { name: "wifiAccess", value: e.target.value === "yes" },
              })
            }
          >
            <FormLabel component="legend">
              Is Wi-Fi Access Required?
            </FormLabel>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {formErrors.wifiAccess && (
            <FormLabel error sx={{ color: "error.main", mt: 1 }}>
              {formErrors.wifiAccess}
            </FormLabel>
          )}
        </Grid>

        <TextField
          select
          fullWidth
          required
          label="Mics Needed"
          name="micsNeeded"
          type="number"
          value={formData.micsNeeded}
          onChange={handleChange}
          error={!!formErrors.micsNeeded}
          helperText={formErrors.micsNeeded}
        >
          {["Yes", "No"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Special Requirements"
          name="extraInformation"
          value={formData.extraInformation}
          onChange={handleChange}
          placeholder="Additional setup requirements or special instructions"
          error={!!formErrors.extraInformation}
          helperText={formErrors.extraInformation}
        />
      </Grid>
    </Box>
  );
}

AdditionalInformationForm.propTypes = {
  formData: PropTypes.shape({
    recording: PropTypes.bool.isRequired,
    computerAsst: PropTypes.bool.isRequired,
    wifiAccess: PropTypes.bool.isRequired,
    micsNeeded: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    extraInformation: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    recording: PropTypes.string,
    computerAsst: PropTypes.string,
    wifiAccess: PropTypes.string,
    micsNeeded: PropTypes.string,
    extraInformation: PropTypes.string,
  }),
};

export default AdditionalInformationForm;

