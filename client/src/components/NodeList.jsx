import React, { useState } from "react";
import { Grid, List, Card, CardContent, Typography, Tooltip, IconButton } from "@mui/material";
import { Link, Outlet, useParams, useLoaderData,useSubmit } from "react-router-dom";
import { Box } from "@mui/system";
import { NoteAddOutlined } from "@mui/icons-material";

function NodeList() {
  const { nodeId, folderId } = useParams();
  const [activeNoteId, setActiveNoteId] = useState(nodeId);
  const { folder } = useLoaderData();
  const submit = useSubmit();
  console.log(folder);

  const handleAddNewNote = () => {
    submit({
      content: "",
      folderId
    }, {method: "POST", action: `/folders/${folderId}`})
  }

  return (
    <Grid container height="100%">
      <Grid
        item
        xs={4}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#F0EBE3",
          height: "100%",
          overflowY: "auto",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <List
          subheader={
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
              <Tooltip title="add Note" onClick={handleAddNewNote}>
                <IconButton size="small">
                  <NoteAddOutlined />
                </IconButton>
              </Tooltip>
            </Box>
          }
        >
          {folder.notes.map(({ id, content }) => {
            return (
              <Link
                key={id}
                to={`note/${id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveNoteId(id)}
              >
                <Card
                  sx={{
                    mb: "5px",
                    backgroundColor:
                      id === activeNoteId ? "rgb(255 211 140)" : null,
                  }}
                >
                  <CardContent sx={{ pb: "10px", padding: "10px" }}>
                    <div
                      style={{ fontWeight: 14, fontSize: "bold" }}
                      dangerouslySetInnerHTML={{
                        __html: `${content.substring(0, 30) || "Empty"}`,
                      }}
                    />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </List>
      </Grid>

      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default NodeList;
Node;
