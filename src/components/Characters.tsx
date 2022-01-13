import Character from './Character'
import NavBar from './NavBar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import s from './Characters.module.css'

function Characters() {
  const [personas, setPersonas] = useState([])
  async function getChar() {
    let response = await axios.get('https://swapi.dev/api/people/')
    setPersonas(response.data.results)
  }

  useEffect(() => {
    getChar()
    console.log(personas)
  }, [])

  return (
    <>
      <div className={s.main}>
        <NavBar />
        <div>
          {personas &&
            personas.map((pers, index) => (
              <Character name={pers.name} gender={pers.gender} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Characters
