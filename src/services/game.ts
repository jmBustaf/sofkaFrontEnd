import { AxiosClient } from '../config/axios'

/**
 * This method is used to connect with backend and get list of games
 * @return {Array} games
*/
export const getGames = async () => {
  try {
    const response = await AxiosClient.get('/game')
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

/**
 * This method is used to connect with backend and save game
 * 
*/
export const saveGame = async (data) => {
  try {
    const response = (await AxiosClient.post('/game', data)).data
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

/**
 * This method is used to connect with backend and update game
 * 
*/
export const updateGame = async (data) => {
  try {
    const response = (await AxiosClient.put('/game', data)).data
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}