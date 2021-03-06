import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const textFieldStyle = {
  display: "flex",
  width: "100%"
};

const contactForm = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const SubmitPostComponent = props => (
  <React.Fragment>
    <div style={contactForm}>
      <form onSubmit={props.onSubmit}>
        <TextField
          name="title"
          label="title"
          type="text"
          required
          style={textFieldStyle}
        />
        <TextField
          style={textFieldStyle}
          required
          name="content"
          label="content"
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          name="submit"
          style={textFieldStyle}
        >
          Submit
        </Button>
      </form>
    </div>
  </React.Fragment>
);

export default SubmitPostComponent;
