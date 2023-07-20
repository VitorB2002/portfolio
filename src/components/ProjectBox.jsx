import * as React from 'react';
import {Box, Button, Container, Typography} from '@mui/material';

export default function ProjectBox(props) {

  const handleClick = () => {
    console.log(props.link)
  }

  return (
    <Container sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <b>{props.nome}</b>
      <Box sx={{display: "flex", gap: "15px", marginTop: "15px"}}>
        <img 
          src={props.imagem} 
          alt={props.nome + " imagem"}
          width={250}
          height={'auto'}
          ></img>
        <Typography textAlign={'justify'}>
          {props.descricao}
        </Typography>
      </Box>
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