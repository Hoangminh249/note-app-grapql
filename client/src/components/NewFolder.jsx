import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { addNewFolder } from "../utils/folderUtils";
import { useSearchParams, useNavigate } from "react-router-dom";

function NewFolder(props) {
  const [newFolderName, setNewFolderName] = useState();
  const [open, setOpen] = useState(false);
  const [searchPrams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  const popupName = searchPrams.get("popup")

  const handleOpenPopup = () => {
    // setOpen(true);
    setSearchParams({popup : "add-folder"})
  };
  const handleClose = () => {
    // setOpen(false);
    setNewFolderName("");
    navigate(-1)
  };

  const handleNewFolderNameChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleAddNewFolder = async () => {
    const { addFolder } = await addNewFolder({ name: newFolderName });
    console.log({ addFolder });
    handleClose();
  };

  useEffect(() => {
    if (popupName === "add-folder") {
        setOpen(true);
        return;
    }
    setOpen(false);
  },[popupName])

  return (
    <div>
      <Tooltip title="Add Folder" onClick={handleOpenPopup}>
        <IconButton>
          <CreateNewFolderOutlined sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Folder name"
            fullWidth
            size="small"
            variant="standard"
            sx={{
              width: "400px",
            }}
            autoComplete="off"
            value={newFolderName}
            onChange={handleNewFolderNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancel</Button>
          <Button onClick={handleAddNewFolder}> Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewFolder;
