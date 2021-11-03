import { useState, useEffect } from 'react'

// components
import { Button } from './Button'

// backend
import { api } from '../services/api'

// styles
import '../styles/sidebar.scss'

// types
import type { Dispatch, SetStateAction } from 'react'
import type { GenreResponseProps } from './typings'

type Props = {
  selectedGenreId: number
  setSelectedGenreId: Dispatch<SetStateAction<number>>
}

function SideBar({ selectedGenreId, setSelectedGenreId }: Props) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data)
    })
  }, [])

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}

export { SideBar }
