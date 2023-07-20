import * as React from 'react';
import {Box, Button, Container, Divider, Grid, List, ListItem, Paper, Typography} from '@mui/material';
import './App.css';
import ProjectBox from './components/ProjectBox';

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
    <Box
      sx={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png")',
        backgroundSize: "100% 100%",
      }}
    >
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
            marginBottom: "15px"
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
          <h3>Projetos</h3>
          <List sx={{overflow: "auto", width: "100%", height: "500px"}}>
            <ListItem>
              <ProjectBox
                nome="MeasureSoftGram" 
                descricao="Projeto criado com o objetivo de medir a qualidade de códigos fontes de forma mais técnica a utilizando métricas. Fui responsável pelo consumo de dados gerado pelas api’s utilizadas e na estrutuação dos endpoints do projeto." 
                imagem={require('./assets/metricas.jpg')}
                link="https://fga-eps-mds.github.io/2021-2-MeasureSoftGram-Doc/"
              />
            </ListItem>

            <Divider variant='middle' sx={{margin: "15px"}}/>

            <ListItem>
              <ProjectBox
                nome="Music Landing Page" 
                descricao="Projeto pessoal criado para a prática do desenvolvimento de landing pages, além disso o mesmo apresenta os grandes impactos que a música tem no cérebro de quem no seu dia a dia não larga uma boa playlist. Para este projeto foram utilizados conhecimentos em JavaScript, HTML e CSS."
                imagem={require('./assets/cranium.png')}
                link="https://vitorb2002.github.io/odin-landing-page/"
              />
            </ListItem>

            <Divider variant='middle' sx={{margin: "15px"}}/>
            
            <ListItem>
              <ProjectBox
                nome="Pedra, Papel e Tesoura" 
                descricao="Projeto pessoal criado para a prática de desenvolvimento de páginas web interativas, o mesmo apresenta o clássico jodo de pedra, papel e tesoura, porém desta vez jogado contra o computador (quem realizar 5 pontos primeiro ganha). Para este projeto foram utilizados conhecimentos em JavaScript, HTML e CSS." 
                imagem={require('./assets/tic_tac_toe.png')}
                link="https://vitorb2002.github.io/rock-paper-scissor/"
              />
            </ListItem>

            <Divider variant='middle' sx={{margin: "15px"}}/>
            
            <ListItem>
              <ProjectBox
                nome="Página de Cadastro" 
                descricao="Projeto pessoal criado para a prática de desenvolvimento de páginas web interativas com validações no front-end, o mesmo apresenta uma tela simples de cadastro(em um site fictício) com campos obrigatórios e entradas esperadas. Para este projeto foram utilizados conhecimentos em JavaScript, HTML e CSS." 
                imagem={require('./assets/conta.png')}
                link="https://vitorb2002.github.io/sign-up-page/"
              />
            </ListItem>

            <Divider variant='middle' sx={{margin: "15px"}}/>
            
            <ListItem>
              <ProjectBox
                nome="Lousa Mágica" 
                descricao="Projeto pessoal criado para a prática de desenvolvimento de páginas web interativas e a criação/alteração de componentes, o mesmo apresenta uma lousa mágica flexível (o usuário pode definir a quantidade de pixels da mesma até o máximo de 100x100 pixels). Para este projeto foram utilizados conhecimentos em JavaScript, HTML e CSS." 
                imagem={require('./assets/board.png')}
                link="https://vitorb2002.github.io/eatch-a-sketch/"
              />
            </ListItem>

            <Divider variant='middle' sx={{margin: "15px"}}/>
            
            <ListItem>
              <ProjectBox
                nome="Calculadora" 
                descricao="Projeto pessoal criado para a prática de desenvolvimento de páginas web interativas, o mesmo apresenta uma calculadora que realiza contas básicas (soma, subtração, divisão e multiplicação). Para este projeto foram utilizados conhecimentos em JavaScript, HTML e CSS." 
                imagem={require('./assets/calculadora.jpg')}
                link="https://vitorb2002.github.io/calculator/"
              />
            </ListItem>
          </List> 
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
      </Container>
    </Box>
  );
}