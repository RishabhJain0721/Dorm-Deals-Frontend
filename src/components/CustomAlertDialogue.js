import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CustomAlertDialogue(props) {
  return (
    <React.Fragment>
      <Dialog
        open={props.isVisible}
        onClose={props.toggleVisibility}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.onPressed ? props.onPressed() : props.toggleVisibility();
            }}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
