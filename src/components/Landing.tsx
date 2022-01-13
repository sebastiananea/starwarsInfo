import s from './Landing.module.css'
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom'

function Landings() {
  let navigate = useNavigate()

  let handleClick = () => {
    navigate('/home')
  }

  return (
    <>
      <div className={s.stars}></div>
      <div className={s.twinkling}></div>
      <div className={s.logo}>
        <img onClick={handleClick} src={logo} alt='' />
      </div>
    </>
  )
}

export default Landings
