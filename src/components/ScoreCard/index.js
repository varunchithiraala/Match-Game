import './index.css'

const ScoreCard = props => {
  const {score, onPlayAgain} = props

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <div className="score-card-container">
      <div className="score-card-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="score-card-image"
          alt="trophy"
        />
        <p className="score-card-text">YOUR SCORE</p>
        <p className="score-card-value">{score}</p>
        <button
          className="score-card-button"
          onClick={onClickPlayAgain}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            className="score-card-reset-icon"
            alt="reset"
          />
          <p className="score-card-play-again">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
