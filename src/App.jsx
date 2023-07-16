import * as React from 'react';
import {Box, Button, Container, Divider, Paper, Typography} from '@mui/material';
import './App.css';

export default function App() {
  return (
    <>
    <Box
      sx={{
        display: "grid",
        alignItems: "center", 
        width: "100%",
        height: "100%",
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/04/13/04/29/web-page-2226631_1280.jpg")',
        backgroundSize: "cover",
        opacity: ".2",
        inset: "0",
        zIndex: "-1",
        isolation: "isolate",
        position: "absolute"
      }}
    />

    <Container
      sx={{
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        width: "100%",
      }}
    >
      <Box 
        sx={{
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          width: "70%",
        }}
      >
        <Typography sx={{fontSize: "28px", textAlign: "center"}}>
          <b>Vitor Borges</b><br></br>Desenvolvedor Fullstack
        </Typography>
        <img src={require('./assets/perfil.jpeg')} alt="Foto de Vitor Borges"
        style={{border: "2px solid grey", borderRadius: "50%", width: "150px"}}
        />
      </Box>
    </Container>
    </>
  );
}