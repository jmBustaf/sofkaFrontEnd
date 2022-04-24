import { AxiosClient } from '../config/axios'

/**
 * This method is used to connect with backend and get question
 * @return games
*/
export const getQuestion = async (id: any): Promise<any> => {
  try {
    const response = await AxiosClient.get(`/question?id=${id}`)
    return { data: response.data }
  } catch (error:any) {
    return { error  }
  }
}

/**
 * This method is used to connect with backend and get list of questions
 * @return {Array} games
*/
export const getQuestionLevel = async (level) => {
  try {
    const response = await AxiosClient.get(`/question/listCategory?level=${level}`)
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}