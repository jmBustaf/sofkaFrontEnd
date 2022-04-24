import React from "react"
import AppBar from "../components/AppBar"
/* import { getGames } from '../services/game' */
import { Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
/* import { useNavigate } from "react-router-dom" */
import { Grid, Typography } from '@material-ui/core'
import HistoryItem from  '../components/HistoryItem'

const History = (): JSX.Element => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const prueba  = ["asd", "dsa", "sda"]
    /* const fetchData = async () => {
      const data = await getGames()
      if (data) setGames(data)
    }
    if (!games) {
      fetchData()
    } */
  }, [])

  return (
    <>
      <AppBar/>
      <Box>
        <div style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
          <Typography variant="h3">Historial de partidas</Typography>
          <div style={{ justifyContent: 'center' }}>
          <Grid /* container justifyContent="center" spacing={4} */>
            {games ? (
              games.map((game, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <HistoryItem />{/* game={game} */}
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