import './index.css'

const NavBar = props => {
  const {score, remainingTime} = props
  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="navbar-logo"
        alt="website logo"
      />
      <ul className="navbar-score-timer-container">
        <li className="navbar-score-item">
          <p className="navbar-score-text">
            Score: <span className="navbar-value">{score}</span>
          </p>
        </li>
        <li className="navbar-timer-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="navbar-timer-icon"
            alt="timer"
          />
          <p className="navbar-value">{remainingTime} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
