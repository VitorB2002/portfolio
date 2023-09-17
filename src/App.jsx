import * as React from 'react';
import {Box, Container, Divider, Grid, List, ListItem, Paper, Typography} from '@mui/material';
import './App.css';
import ProjectBox from './components/ProjectBox';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SkillBox from './components/SkillBox';

export default function App() {
  const style_paper = {
    display:"flex", 
    flexDirection: "column", 
    alignItems: "center", 
    width: "85%", 
    borderRadius: "20px",
    marginBottom: "15px"
  }

  const style_conhecimento = {
    display: "flex", 
    justifyContent: "space-between", 
    width: "150px",
    alignItems: "center",
    gap: "10px",
    padding: "5px",
    borderBottom: "1px solid gray"
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
              padding: "0px 30px 25px 30px"
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
          <Grid container sx={{width: "95%", gap: "15px", justifyContent: "center", marginBottom: "25px"}}>
            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="Javascript"
                url={require("./assets/javascript-logo.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="React"
                url={require("./assets/react-logo.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="HTML"
                url={require("./assets/html-logo.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="CSS"
                url={require("./assets/css-logo.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="Python"
                url={require("./assets/python-logo.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="GIT"
                url={require("./assets/git-logo.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="Agile"
                url={require("./assets/agile.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="UX/UI"
                url={require("./assets/user.png")} 
              />
            </Grid>

            <Grid item style={style_conhecimento}>
              <SkillBox
                skillname="Bancos"
                url={require("./assets/database.png")}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper style={style_paper}>
          <h3>Experiência Profissional</h3>
          <img 
            src={require("./assets/btg.jpeg")} 
            alt={"BTG PACTUAL Logo"}
            width={125}
            height={'auto'}
          />
          <Typography>
            <b>BTG PACTUAL</b>
          </Typography>

          <Typography sx={{textAlign: "center"}}>
            Cargo: <i>Summer Intern</i> <br/>
            Período: Mar/2023 - Julho/2023
          </Typography>
            
          <Typography sx={{textAlign: "justify", padding: "25px"}}>
            Atuei como desenvolvedor fullstack na área de automação do banco, elaborando soluções web para automatizar processos manuais.
            <br/><b>Conhecimentos aplicados</b>: UX/UI, consumo de API’s, disparo de emails, montagem de documentos pdf em python, banco de dados e endpoints.
          </Typography>
        </Paper>

        <Paper style={style_paper}>
          <h3>Experiência Acadêmica</h3>

          <Box paddingBottom={"10px"}>
            <List sx={{textAlign: "center"}}>
              <Typography>
                <b>Universidade de Brasília</b><br/>Engenharia de Software | 2020.1 - 2024.2 (Previsão)<br/>
              </Typography>
                <Divider/>
              <Typography>
                <b>Instituto Federal Goiano</b><br/>Técnico em Automação Industrial | 2017 - 2019
              </Typography>
            </List>
          </Box>
        </Paper>

        <Paper style={style_paper}>
          <h3>Contato</h3>
          <Container sx={{display: "flex", flexDirection: "column", gap: "10px", marginBottom: "15px"}}>
            <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
              <EmailIcon/>
              Email: vitorb.santos2002@gmail.com
            </Box>
            <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
              <PhoneIcon/>
              Telefone: (61) 99215-1043
            </Box>
            <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
              <GitHubIcon/>
              GitHub: <a href='https://github.com/VitorB2002' target='_blank' rel='noreferrer'>https://github.com/VitorB2002</a>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
              <LinkedInIcon/>
              Linkedin: <a href='https://www.linkedin.com/in/vitor-borges-dos-santos-ba1046170/' target='_blank' rel='noreferrer'>https://www.linkedin.com/in/vitor-borges-dos-santos-ba1046170/</a>
            </Box>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}