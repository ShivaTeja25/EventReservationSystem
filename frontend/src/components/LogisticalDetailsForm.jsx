import { Box, Grid2 as Grid, TextField, MenuItem, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";

function LogisticalDetailsForm({ formData, handleChange, formErrors }) {
  return (
    <Box component="form" sx={{ mt: 2 }}>
      <Grid container spacing={3}>

          <TextField
            required
            fullWidth
            label="Start Date"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            error={!!formErrors.startDate}
            helperText={formErrors.startDate}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">Start Date</InputAdornment>,
              },
            }}
          />

          <TextField
            required
            fullWidth
            type="time"
            label="Start Time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            error={!!formErrors.startTime}
            helperText={formErrors.startTime}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">Start Time</InputAdornment>,
              },
            }}
          />

          <TextField
            required
            fullWidth
            label="End Date"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            error={!!formErrors.endDate}
            helperText={formErrors.endDate}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">End Date</InputAdornment>,
              },
            }}
          />

        <>
          <TextField
            required
            fullWidth
            type="time"
            label="End Time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            error={!!formErrors.endTime}
            helperText={formErrors.endTime}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">End Time</InputAdornment>,
              },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </>
        <>
          <TextField
            select
            fullWidth
            label="Event Type"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            error={!!formErrors.eventType}
            helperText={formErrors.eventType}
          >
            <MenuItem value="Hybrid">Hybrid</MenuItem>
            <MenuItem value="Virtual">Virtual</MenuItem>
            <MenuItem value="In-Person">In-Person</MenuItem>
          </TextField>
        </>
        <>
          <TextField
            select
            fullWidth
            label="Conference Tool"
            name="conferenceTool"
            value={formData.conferenceTool}
            onChange={handleChange}
            error={!!formErrors.conferenceTool}
            helperText={formErrors.conferenceTool}
          >
            <MenuItem value="Zoom">Zoom</MenuItem>
            <MenuItem value="Teams">Microsoft Teams</MenuItem>
            <MenuItem value="Meet">Google Meet</MenuItem>
          </TextField>
        </>
      </Grid>
    </Box>
  );
}

LogisticalDetailsForm.propTypes = {
  formData: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    conferenceTool: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    startDate: PropTypes.string,
    startTime: PropTypes.string,
    endDate: PropTypes.string,
    endTime: PropTypes.string,
    eventType: PropTypes.string,
    conferenceTool: PropTypes.string,
  }),
};

export default LogisticalDetailsForm;
