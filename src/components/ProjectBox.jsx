import * as React from 'react';
import {Box, Button, Container, Typography} from '@mui/material';

export default function ProjectBox(props) {

  const handleClick = () => {
    window.open(props.link, "_blank");
  }

  return (
    <Container sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
     
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px", 
        marginTop: "15px", 
        marginBottom: "15px",
        alignItems: "center",
        justifyContent: "center"
        }}
      >
        <img 
          src={props.imagem} 
          alt={props.nome + " imagem"}
          width={70}
          height={70}
          style={{border: "1px groove gray", borderRadius: "15px",padding: "5px", backgroundColor: "#fff"}}
        />
        
        <Typography 
          fontSize={"1em"} 
          fontWeight={900}
        >
          {props.nome}
        </Typography>
      </Box>

      <Typography textAlign={'justify'}>
          {props.descricao}
      </Typography>

      <Button 
        sx={{marginTop: "15px"}}
        variant='contained' 
        onClick={() => handleClick()}
      >
        Saiba Mais
      </Button>
    </Container>
  );
}