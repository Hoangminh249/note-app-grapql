import React from "react";
import { Grid, List, Card, CardContent, Typography } from "@mui/material";
import { Link,Outlet } from "react-router-dom";
import { Box } from "@mui/system";

function NodeList() {
  const folder = {
    notes: [
        {
            id:"1", 
            content:"<p>this is a new note</p>"
        }
    ] 
};
  return (
    <Grid container height="100%">
      <Grid item xs={4} sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#F0EBE3",
        height:"100%",
        overflowY:"auto",
        padding:"10px",
        textAlign:"left"
      }}>
        <List
         subheader={
            <Box>
                <Typography sx={{ fontWeight: "bold"}}>
                    Notes
                </Typography>
            </Box>

        }
        >
          {folder.notes.map(({ id, content }) => {
            
            return (
              <Link
                key={id}
                to={`note/${id}`}
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ mb: "5px" }}>
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
          }
          )}
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
