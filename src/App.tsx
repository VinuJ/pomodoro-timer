import React, { FC, useState, useEffect } from "react"
import "./styles.scss"
import pomodoro from "./pomodoro.png"

interface Props {
  title: string
  changeTime: (type: string, time: number) => void
  type: string
  time: number
  formatTime: (time: number) => string
}

const App: FC = () => {
  const [displayTime, setDisplayTime] = useState(25 * 60)
  const [breakTime, setBreakTime] = useState(5 * 60)
  const [sessionTime, setSessionTime] = useState(25 * 60)
  const [timerOn, setTimerOn] = useState(false)
  const [onBreak, setOnBreak] = useState(false)

  const soundUrl = 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
  const beep = new Audio(soundUrl)

  useEffect(() => {
    if (displayTime === 0) {
      beep.play()
      if (!onBreak) {
        setDisplayTime(breakTime)
        setOnBreak(true)
      } else {
        setDisplayTime(sessionTime)
        setOnBreak(false)
      }
    }
  })

  const formatTime = (time: number): string => {
    let minutes = Math.floor(time / 60) + ""
    let seconds = (time % 60) + ""

    return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`
  }

  const changeTime = (type: string, time: number) => {
    if (type === "break") {
      if (breakTime <= 60 && time < 0) {
        return
      }
      setBreakTime(breakTime + time)
    } else {
      if (sessionTime <= 60 && time < 0) {
        return
      }
      setSessionTime(sessionTime + time)
      if (!timerOn) {
        setDisplayTime(sessionTime + time)
      }
    }
  }

  const controlTime = (): void => {
    let date = new Date().getTime()
    let nextDate = new Date().getTime() + 1000
    if (!timerOn) {
      let interval: any = setInterval(() => {
        date = new Date().getTime()
        if (date > nextDate) {
          setDisplayTime((prev) => {
            return prev - 1
          })
          nextDate += 1000
        }
      }, 30)
      localStorage.clear()
      localStorage.setItem("interval-id", interval)
    }
    if (timerOn) {
      clearInterval(JSON.parse(localStorage.getItem("interval-id") || "{}"))
    }

    setTimerOn(!timerOn)
  }

  const resetTime = (): void => {
    setDisplayTime(25 * 60)
    setBreakTime(5 * 60)
    setSessionTime(25 * 60)
    setTimerOn(false)
    clearInterval(JSON.parse(localStorage.getItem("interval-id") || "{}"))
  }



  return (
    <div className="page-wrapper">
      <h1 className="title">Pomodoro Clock</h1>
      <img src={pomodoro} alt="Pomodoro Timer" className="image" />
      <Length
        title={"Break Length"}
        changeTime={changeTime}
        type={"break"}
        time={breakTime}
        formatTime={formatTime}
      />

      <div className="timer-container">
        <div className='break-message'>{(onBreak) ? 'Break time!' : 'Work time!'}</div>
        <div className="timer">{formatTime(displayTime)}</div>
        <button
          className="play-pause btn-small red darken-1"
          onClick={controlTime}
        >
          {timerOn ? (
            <i className="material-icons">pause</i>
          ) : (
            <i className="material-icons">play_arrow</i>
          )}
        </button>
        <button
          className="play-pause btn-small red darken-1"
          onClick={resetTime}
        >
          <i className="material-icons">autorenew</i>
        </button>
      </div>

      <Length
        title={"Session Length"}
        changeTime={changeTime}
        type={"session"}
        time={sessionTime}
        formatTime={formatTime}
      />
    </div>
  )
}

const Length: FC<Props> = ({ title, changeTime, type, time, formatTime }) => {
  return (
    <div className="length-container">
      <div>{title}</div>
      <div className="time-boxes">
        <button
          className="btn-small red darken-1"
          onClick={() => changeTime(type, -60)}
        >
          <i className="material-icons">arrow_downward</i>
        </button>
        <div>{formatTime(time)}</div>
        <button
          className="btn-small red darken-1"
          onClick={() => changeTime(type, 60)}
        >
          <i className="material-icons">arrow_upward</i>
        </button>
      </div>
    </div>
  )
}

export default App
