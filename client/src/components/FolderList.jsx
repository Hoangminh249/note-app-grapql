import { List,Card,CardContent,Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {Link } from "react-router-dom"

function FolderList({folders}) {
    return (
        <List 
        sx={{
            width:"100%",
            bgcolor: "#7D9D9C",
            height: "100%",
            padding: "10px",
            textAlign:"left",
            overflowY: "auto"
        }}
        subheader={
            <Box>
                <Typography sx={{ fontWeight: "bold", color:"white" }}>
                    Folders
                </Typography>
            </Box>

        }
        >
            {
                folders.map(({id, name}) => {
                    return(
                    <Link key={id}
                    to={`folders/${id}`}
                    style={{textDecoration: "none"}}
                     >
                     <Card sx={{ mb: "5px" }}>
                        <CardContent sx={{ 
                            padding:"10px",
                            "&last-child":{
                                pb:"10px"
                            }
                            }}>
                        <Typography>{name}</Typography>
                        </CardContent>
                     </Card>
                     </Link>
                    )
                })
            }
        </List>
    );
}

export default FolderList