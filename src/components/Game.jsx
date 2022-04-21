import React from "react"
import AppBar from "./AppBar"
/* import { useState } from 'react' */
import { /* useHistory, */ useLocation, } from 'react-router'

const Game = () => {  

  const location = useLocation()

  const playerName = location.state
 /*  const [score, setScore] = useState() */

  return (
    <>
      <AppBar/>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '4vh' }}>
        <h2>Nombre participante: {playerName}</h2>
        <h2>Puntaje acumulado: </h2>
      </div>
      <h1>sda</h1>
    </>
  )
}

export default Game