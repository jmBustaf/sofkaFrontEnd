import React from "react"
import AppBar from "../components/AppBar"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Button from '@material-ui/core/Button'
import { Box, TextField } from '@material-ui/core'
import Typography from "@material-ui/core/Typography"
import { saveGame } from '../services/game'

const Register = (): JSX.Element => {
  const history = useNavigate()  
  const [name, setName] = useState('')
/*   const [data, setData] = useState() */

  const onChandlerText = (text) => {    
    setName(text)
  }

  const goGame = async () => {
    try
    {
      const { data, error } = await saveGame({
        name_player: name,
      })
      if (data) {
        history({pathname: '/game'/* , state:{ data } */}) 
      }
      if (error) {
        return error
      }
    }
    catch(error)
    {
      return error
    }
  }

  return (
    <>
      <AppBar/>
      <Box>
        <div style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
          <Typography variant="h3">Ingresa tu nombre para poder empezar a jugar</Typography>
          <div style={{ justifyContent: 'center' }}>
            <form
              noValidate
              style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row', alignItems: "center", width: '100%'}} 
            >
              <TextField
                name="name"
                label="Nombre jugador" 
                style={{width: '100%'}}
                variant="outlined"
                type='text'
                autoFocus={true}
                onChange={event => onChandlerText(event.target.value)}
                value={name}
              />
            </form>
            <Button onClick={goGame} variant="contained" component="span" size="large">
              Jugar
            </Button>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Register