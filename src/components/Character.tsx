import s from './Character.module.css'

interface IProps {
  name: string
  gender: string
  img?: string
}

function Character({ name, gender, img }: IProps) {
  return (
    <div>
      <h3 className={s.char}>{name}</h3>
      <h3 className={s.char}>{gender}</h3>
    </div>
  )
}

export default Character
