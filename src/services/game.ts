import { AxiosClient } from '../config/axios'

/**
 * This method is used to connect with backend and get list of games
 * @return {Array} games
*/
export const getGames = async (): Promise<any> => {
  try {
    const response = await AxiosClient.get('/game/list')
    return { data: response.data }
  } catch (error:any) {
    return { error: error.response.data.message }
  }
}