import React from "react"
import AppBar from "../components/AppBar"
import ModalConfirm from "../components/ModalConfirm"
import { Box } from '@material-ui/core'
import ModalError from "../components/ModalError"
import { useState, useEffect } from 'react'
/* import { useLocation, } from 'react-router' */
import { IQuestion } from "../models/question"
import { getQuestionLevel, getQuestion } from '../services/question'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { randomNum } from '../utils/functions'

const Game = (): JSX.Element => {

  const [questions, setQuestions] = useState<IQuestion[]>()
  const [question, setQuestion] = useState<IQuestion>()
  const [level, setLevel] = useState(1)
  const [arrayIds, setArrayIds] = useState<any[]>([])
  const [statement, setStatement] = useState('')
  const [idQuestion, setIdQuestion] = useState<number>()
   const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  
  const [openDialogConfirm, setOpenDialogConfirm] = useState(false)
  const [openDialogError, setOpenDialogError] = useState(false)
  
/*   const location = useLocation()
 */
/*   const playerName = location.state */
/*   const [score, setScore] = useState() */

  useEffect(() => {
    getQuestions(level)
  }, [])

  useEffect(() => {
    const array: any[] = []
    if(questions)
    {
      questions.forEach(element => {
        array.push(element.id)
      });
    }
    setArrayIds(array)
  }, [questions])

  useEffect(() => {
    const min = arrayIds[0]
    const max = arrayIds.pop();
    const number = randomNum(min, max)
    setIdQuestion(number) 
   }, [arrayIds])

   useEffect(() => {
    const loadQuestion = async () => {
      if(idQuestion)
      {
        const currentQuestion = await getQuestion(idQuestion)
        setQuestion(currentQuestion.data)
      }
    }
    if(!question) loadQuestion()
   }, [idQuestion])
   
   

   const getQuestions = async (level) => {
    const { data, error } = await getQuestionLevel(level)
    if (data) 
    {
      setQuestions(data)
    }
    if (error) return error
   }

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === question?.answer) {
      openConfirmDialog()
    } else {
      openErrorDialogError()
    }
  };

  const openConfirmDialog = () => {
    setOpenDialogConfirm(true)
  }

  const openErrorDialogError = () => {
    setOpenDialogError(true)
  }

  return (
    <>
      <ModalConfirm
        open={openDialogConfirm}
        setOpen={setOpenDialogConfirm}
      />
      <ModalError
        open={openDialogError}
        setOpen={setOpenDialogError}
      />
      <AppBar/>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '4vh' }}>
          <h2>Nombre participante:{/*  {{playerName}} */}</h2>
          <h2>Puntaje acumulado: {0}</h2>
        </div>
        <h3 style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',}}>Pregunta: <br/> { question?.statement}</h3>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 1,
            marginTop: '4vh'
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl /* sx={{ m: 3 }} error={error} variant="standard" */>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel id={question?.id} value={question?.options[0]} control={<Radio />} label={question?.options[0]} />
                <FormControlLabel id={question?.id} value={question?.options[1]} control={<Radio />} label={question?.options[1]} />
                <FormControlLabel id={question?.id} value={question?.options[2]} control={<Radio />} label={question?.options[2]} />
                <FormControlLabel id={question?.id} value={question?.options[3]} control={<Radio />} label={question?.options[3]} />
              </RadioGroup>
              <Button variant="contained" size="large" type="submit" style={{marginTop: '5vh'}}> {/*  sx={{ mt: 1, mr: 1 }}  variant="outlined" */}
                Validar Respuesta
              </Button>
            </FormControl>
          </form>
          
        </Box>
      </div>
    </>
  )
}

export default Game