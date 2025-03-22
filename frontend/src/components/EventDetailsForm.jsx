import { Box, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

function EventDetailsForm({ formData, handleChange, formErrors }) {
  return (
    <Box component="form" sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        <TextField
          required
          fullWidth
          label="Event Title"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          error={!!formErrors.eventName}
          helperText={formErrors.eventName}
        />
        <TextField
          required
          fullWidth
          label="Host Name"
          name="hostName"
          value={formData.hostName}
          onChange={handleChange}
          error={!!formErrors.hostName}
          helperText={formErrors.hostName}
        />
        <TextField
          required
          fullWidth
          label="Host Email"
          name="hostEmail"
          type="email"
          value={formData.hostEmail}
          onChange={handleChange}
          error={!!formErrors.hostEmail}
          helperText={formErrors.hostEmail}
        />
        <TextField
          fullWidth
          label="Department"
          name="deptName"
          value={formData.deptName}
          onChange={handleChange}
          error={!!formErrors.deptName}
          helperText={formErrors.deptName}
        />
        <TextField
          required
          fullWidth
          label="Event Location"
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleChange}
          error={!!formErrors.eventLocation}
          helperText={formErrors.eventLocation}
        />
      </Grid>
    </Box>
  );
}

EventDetailsForm.propTypes = {
  formData: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    hostName: PropTypes.string.isRequired,
    hostEmail: PropTypes.string.isRequired,
    deptName: PropTypes.string,
    eventLocation: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    eventName: PropTypes.string,
    hostName: PropTypes.string,
    hostEmail: PropTypes.string,
    deptName: PropTypes.string,
    eventLocation: PropTypes.string,
  }),
};

export default EventDetailsForm;

