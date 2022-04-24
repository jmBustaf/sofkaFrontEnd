import React from "react"
import AppBar from "../components/AppBar"
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";

const Home = (): JSX.Element => {
  const history = useNavigate()

  const goHistory = () => {
    history('/history') 
  }
  
  const goRegister = () => {
    history('/register') 
  }

  return (
    <>
      <AppBar/>
      <Box>
        <div style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
          <Typography variant="h3">¡Hola, y bienvenido a Quien Quiere Ser Millonario!</Typography>
          <div>
            <Button onClick={goHistory} variant="contained" component="span" style={{marginRight:'5vh'}} size="large">
              Historial
            </Button>
            <Button onClick={goRegister} variant="contained" component="span" size="large">
              Empezar
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Home