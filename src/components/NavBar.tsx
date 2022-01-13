import logo from '../img/logo.png'
import s from './NavBar.module.css'
function NavBar() {
  return (
    <div className={s.navbar}>
      <img src={logo} alt='' />
      <div className={s.search}>
        <label htmlFor='name'>Buscar Personaje</label>
        <input name='name' type='text' />
        <div className={s.boton}>Buscar</div>
      </div>
    </div>
  )
}

export default NavBar
