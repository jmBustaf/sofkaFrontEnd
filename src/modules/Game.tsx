import React from "react"
import AppBar from "../components/AppBar"
import ModalConfirm from "../components/ModalConfirm"
import { Box } from '@material-ui/core'
import ModalError from "../components/ModalError"
import { useState, useEffect } from 'react'
import { useLocation, } from 'react-router-dom'
import { IQuestion } from "../models/question"
import { getQuestionLevel, getQuestion } from '../services/question'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { randomNum } from '../utils/functions'
import ModalFinished from "../components/ModalFinished"
import { getGame, updateGame } from "../services/game"
import { IGame } from "../models/game" 

const Game = (): JSX.Element => {
  const [questions, setQuestions] = useState<IQuestion[]>()
  const [question, setQuestion] = useState<IQuestion>()  
  const [game, setGame] = useState<IGame>()
  const [level, setLevel] = useState(1)
  const [arrayIds, setArrayIds] = useState<any[]>([])
  const [idQuestion, setIdQuestion] = useState<number>()
   const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [score, setScore] = useState(0)
  
  const [openDialogConfirm, setOpenDialogConfirm] = useState(false)
  const [openDialogError, setOpenDialogError] = useState(false)  
  const [openDialogFinished, setOpenDialogFinished] = useState(false)
  const location: any = useLocation()

  useEffect(() => {
    getQuestions(level)
    findGame()
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
    const number = randomNum(arrayIds)
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
    loadQuestion()
   }, [idQuestion])
  
   const getQuestions = async (level) => {
    const { data, error } = await getQuestionLevel(level)
    setQuestions(data)    
    if (error) return error
   }

  const findGame = async () => {
    const { data, error } = await getGame(location.state.data.id)
    setGame(data)    
    if (error) return error
  }

  useEffect(() => {
    getQuestions(level)
  }, [level])

  const openConfirmDialog = () => {
    setOpenDialogConfirm(true)
  }

  const openErrorDialogError = () => {
    setOpenDialogError(true)
  }

  const openFinishedDialog = () => {
    setOpenDialogFinished(true)
  }

  const updateCurrentGame = async () => {
    await updateGame({
      ...game,
      score: score + 100
    })
  }

  const continueGame = async () => {
    setLevel(level+1)
    setScore(score + 100)
  }

  const finishGame = () => {
    openFinishedDialog()
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

  return (
    <>
      <ModalConfirm
        open={openDialogConfirm}
        setOpen={setOpenDialogConfirm}
        continueGame={continueGame}
        level={level}
        finishGame={finishGame}
        updateCurrentGame={updateCurrentGame}
      />
      <ModalError
        open={openDialogError}
        setOpen={setOpenDialogError}
        updateCurrentGame={updateCurrentGame}
      />
      <ModalFinished
        open={openDialogFinished}
        setOpen={setOpenDialogFinished}
      />
      <AppBar/>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '4vh' }}>
          <h2>Nombre participante: { location.state.data.name_player}</h2>
          <h2>Puntaje acumulado: {score}</h2>
        </div>
        <h3 style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',}}>Pregunta nivel {level}: <br/> { question?.statement}</h3>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 1,
            marginTop: '4vh'
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
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
              <Button variant="contained" size="large" type="submit" style={{marginTop: '5vh'}}>
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