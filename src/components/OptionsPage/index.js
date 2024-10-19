import './index.css'

const OptionsPage = props => {
  const {option, question, inputAnswer, submit, disable, answer, select} = props
  const getValue = event => {
    const val = event.target.value
    inputAnswer(val, option)
  }
  const selected=select[select.length-1]

const redCol =
   (option !== answer  && option===selected&& submit) 
  
  const greenCol =
   (option === answer && answer === selected && submit)

   const choosedColor=redCol?'red':greenCol? 'green' : ''
  return (
    <div className="row">
      <input
        type="radio"
        id={option}
        onChange={getValue}
        value={option}
        name={question}
        disabled={disable}
      />
      <div className={`option ${choosedColor}`}>
        <label htmlFor={option}>{option}</label>
      </div>
    </div>
  )
}

export default OptionsPage