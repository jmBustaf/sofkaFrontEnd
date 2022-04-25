import React from "react"
import AppBar from "../components/AppBar"
import { getGames } from '../services/game'
import { Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Grid, Typography } from '@material-ui/core'
import HistoryItem from  '../components/HistoryItem'
import { IGame } from "../models/game" 

const History = (): JSX.Element => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getGames()
      setGames(data)
      if(error) return error
    }
    fetchData()
  }, [])
  
  useEffect(() => {
    console.log(games)
  }, [games])

  return (
    <>
      <AppBar/>
      <Box>
        <div style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
          <Typography variant="h3">Historial de partidas</Typography>
          <div style={{ justifyContent: 'center' }}>
          <Grid>
            {games ? (
              games.map((game: IGame, index: number) => (
                <Grid item key={index}  style={{marginTop: '3vh', marginBottom: '3vh', marginLeft: '3vh', marginRight: '3vh', borderRadius: 1}} >
                  <HistoryItem game={game} /> 
                </Grid>
              ))
            ) : (
              <></>
            )}
          </Grid>
          </div>
        </div>
      </Box>
    </>
  )
}

export default History