type Props = {
  title: string
}

function Header({ title }: Props) {
  return (
    <header>
      <span className='category'>
        Categoria:<span> {title}</span>
      </span>
    </header>
  )
}

export { Header }
