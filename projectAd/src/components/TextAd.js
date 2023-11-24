import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function TextAd() {
  const [buttonLabel, setButtonLabel] = React.useState("");
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleButtonLabelChange = (event) => {
    setButtonLabel(event.target.value);
  };
  const handleBack = () => {
    navigate("/create-ads");
  };
  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/text-ads");
      setTimeout(() => {
        navigate("/create-ads");
      }, 600);
    }, 600);
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        border: "1px solid gray",
        width: "95%",
        marginTop: 4,
        marginLeft: 4,
        padding: 2,
        borderRadius: 3,
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Grid item xs={6} sx={{ paddingRight: 2 }}>
          <Grid
            sx={{
              marginBottom: 5,
            }}
          >
            <Typography>Create Text & Media</Typography>
          </Grid>
          <InputLabel sx={{ paddingBottom: 1 }}>Heading 01</InputLabel>
          <TextField
            fullWidth
            label="Add a heading that user get interested"
            id="fullWidth"
            size="small"
            sx={{ paddingBottom: 2 }}
          />
          <InputLabel sx={{ paddingBottom: 1 }}>Heading 02</InputLabel>
          <TextField
            fullWidth
            label="Add a heading that user get interested"
            id="fullWidth"
            size="small"
            sx={{ paddingBottom: 2 }}
          />
        </Grid>
        <Grid item xs={6} sx={{ paddingLeft: 2, marginTop: 7 }}>
          <InputLabel>Description 01</InputLabel>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Add Primary textto help users to understand more about your products services or offers "
            id="fullWidth"
            size="small"
            sx={{
              marginTop: 2,
              paddingBottom: 1,
            }}
          />
        </Grid>
      </Grid>
      {/*  */}
      <Grid container item spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={6}>
          <InputLabel>Business Name</InputLabel>
          <TextField
            fullWidth
            label="Add Your Business name"
            id="input1"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Button Label</InputLabel>
          <Select
            value={buttonLabel}
            onChange={handleButtonLabelChange}
            fullWidth
            displayEmpty
            inputProps={{ "aria-label": "Select Button Label" }}
            size="small"
          >
            <MenuItem value="" disabled>
              Select Button Label
            </MenuItem>
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
          </Select>
        </Grid>
      </Grid>
      {/*  */}
      <Grid container item sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <InputLabel>Website URL</InputLabel>
          <TextField
            fullWidth
            label="Add the URL of landing page you want to redirect users to"
            id="input1"
            size="small"
          />
        </Grid>
      </Grid>
      {isSubmitting && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(7px)",
            border: "1px solid gray",
          }}
        >
          <div
            style={{
              maxWidth: 200,
              maxHeight: 170,
              padding: "20px",
              backgroundColor: "white",
              boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" color="primary">
              Submitted
            </Typography>
          </div>
        </div>
      )}
      <Grid
        container
        item
        sx={{ marginTop: 16, maxHeight: "50em" }}
        justifyContent="flex-end"
      >
        <Grid item sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
