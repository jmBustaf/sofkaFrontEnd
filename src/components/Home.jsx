import React from "react"
import AppBar from "./AppBar"
import { Box } from '@material-ui/core'
import { useHistory } from 'react-router'
import Button from '@material-ui/core/Button'
/* import { useStyles } from '../styles/style-home' */
import Typography from "@material-ui/core/Typography";

const Home = () => {  
  const history = useHistory()
  /* const classes = useStyles() */

  const goHistory = async () => {
    history.push('/history') 
  }
  
  const goRegister = async () => {
    history.push('/register') 
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