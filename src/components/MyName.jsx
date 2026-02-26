function MyName() {
  const myname = 'Ярослав'
  const year = 2026
  const price = 50
  const isLogged = false
  const user = 'Растаявший ледник'
  const fruits = ['яблоко', 'банан', 'апельсин']

  return (
      <>
        <p>{myname}</p>
        <p>{year}</p>
        <p>Цена: {50} рублей.</p>
        <p>Статус: пользователь {isLogged ? 'онлайн' : 'офлайн'}</p>
        <p>Привет, {user ? user : 'Гость'}</p>
        <p>{[fruits.join(', ')]}</p>
      </>
  )

}

export default MyName