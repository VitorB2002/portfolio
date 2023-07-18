import * as React from 'react';
import {Box, Button, Container, Divider, Grid, List, ListItem, Paper, Typography} from '@mui/material';
import './App.css';

export default function App() {
  const style_paper = {
    display:"flex", 
    flexDirection: "column", 
    alignItems: "center", 
    width: "60%", 
    borderRadius: "20px",
    marginBottom: "15px"
  }

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
        <Typography sx={{fontSize: "20px", textAlign: "center"}}>
          <b>Vitor Borges</b><br/>Desenvolvedor Fullstack
        </Typography>
        <img src={require('./assets/perfil.jpeg')} alt="Foto de Vitor Borges"
        style={{border: "2px solid grey", borderRadius: "50%", width: "150px"}}
        />
      </Box>

      <Paper style={style_paper}>
        <h3>Sobre Mim</h3>
        <Typography 
          sx={{
            textAlign: "justify",
            padding: "0px 30px 15px 30px"
          }}
        >
          Desenvolvedor apaixonado em tecnologia, venho estudando com o intuito de trabalhar com tecnologia desde o ensino médio, atualmente meus esforços estão voltados para o desenvolvimento fullstack. Estou realizando a graduação em engenharia de software pela UnB e busco oportunidades para aplicar meus conhecimentos, adquirir novas habilidades e trabalhar em equipe.
        </Typography>
      </Paper>
      
      <Paper style={style_paper}>
        <h3>Conhecimentos</h3>
        <Container sx={{display: "flex", justifyContent: "space-around", gap: "15px"}}>
          <List sx={{width: "200px"}}>
            <ListItem sx={{justifyContent: "space-between"}}>
              JavaScript
              <img 
                src={require("./assets/javascript-logo.png")} 
                width={"20px"} 
                height={"20px"}/>
            </ListItem>
            <Divider/>

            <ListItem sx={{justifyContent: "space-between"}}>
              Python
              <img 
                src={require("./assets/python-logo.png")} 
                width={"20px"} 
                height={"20px"}/>
            </ListItem>
            <Divider/>

            <ListItem sx={{justifyContent: "space-between"}}>
              React
              <img 
                src={require("./assets/react-logo.png")} 
                width={"20px"} 
                height={"20px"}/>
            </ListItem>
          </List>

          <List sx={{width: "200px"}}>
            <ListItem sx={{justifyContent: "space-between"}}>
              HTML
              <img 
                src={require("./assets/html-logo.png")} 
                width={"20px"} 
                height={"20px"}/>
            </ListItem>
            <Divider/>

            <ListItem sx={{justifyContent: "space-between"}}>
              CSS
              <img 
                src={require("./assets/css-logo.png")} 
                width={"20px"} 
                height={"20px"}/>
            </ListItem>
            <Divider/>

            <ListItem sx={{justifyContent: "space-between"}}>
              GIT
              <img 
                src={require("./assets/git-logo.png")} 
                width={"20px"} 
                height={"20px"}/>
            </ListItem>
          </List>
        </Container>
        
      </Paper>
      {/* <Grid container spacing={2}>
          <Grid item xs={6}>React</Grid>
          <Grid item xs={6}>Python</Grid>
      </Grid> */}
    </Container>
    </>
  );
}