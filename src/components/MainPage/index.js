import {useState} from 'react'
import OptionsPage from '../OptionsPage'
import Header from '../Header'
import './index.css'

const MainPage = props => {
  const {oneBit, settingIndex, settingScore, score} = props
  const {question, options, answer, id} = oneBit
  const [select, setSelect] = useState([])
  const [isTrue, setIsTrue] = useState('')
  const [disable, setDisable] = useState(false)
  const [disNxt, setDisNxt] = useState(true)
  const [submit, setSubmit] = useState(false)
  const [btnDisable, setBtnDisable] = useState(false)


  const changeIndex = () => {
    settingIndex()
    setIsTrue(false)
  }

  const isRight = isTrue ? 'true' : 'false'

  const inputAnswer = val => {
    setSelect([val])
  }

  const checkAnswer = () => {
    const trimSelect = select[select.length - 1]?.trim().toUpperCase() || ''
    const trimAnswer = answer?.trim().toUpperCase() || ''
    setSubmit(true)

    if (trimSelect !== '') {
      setDisNxt(false)
      setDisable(true)
      setBtnDisable(true)

      if (trimSelect === trimAnswer) {
        setIsTrue(true)
        settingScore(5)
      } else {
        setIsTrue(false)
        settingScore(-1)
      }
    } else {
      setDisable(false)
      alert('Choose Your Answer')
    }
  }

  console.log(select)

  return (
    <div>
      <div>
        <Header score={score} />
      </div>
      <div className="questionDiv">
        <div className="question">
          <p>{question}</p>
        </div>
        <div className="optionDiv">
          {options.map(every => (
            <OptionsPage
              option={every}
              answer={answer}
              question={question}
              id={id}
              key={every}
              inputAnswer={inputAnswer}
              disable={disable}
              select={select}
              submit={submit}
            />
          ))}
        </div>
       
        <div className="buttonDiv">
          <button disabled={btnDisable}  className="checkBtn" type="button" onClick={checkAnswer}>
            SUBMIT
          </button>
          <button
            className="nextBtn"
            disabled={disNxt}
            type="button"
            onClick={changeIndex}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage