import './index.css'

const Header = props => {
  const {score} = props

  return (
    <div className="Header">
      <div className="iconDiv">
        <img
          className="quizImg"
          alt="quiz"
          src="https://ik.imagekit.io/sdce03tuc/360_F_64197195_bGtFNqSvL6wuSN3ppKNLmk3gi8Ba9Gwa.jpg"
        />
        <h1 className="heading">Quiz App</h1>
      </div>

      <p className="score">{`Score : ${score}`}</p>
    </div>
  )
}

export default Header