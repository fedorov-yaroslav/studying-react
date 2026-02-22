  import MyPet from './components/MyPet.jsx'

  function App() {
    const pet1 = {name: 'Кеша', age: 6, type: 'Попугай', gender: 'мальчик', wild: false, color: 'grey'}
    const pet2 = {name: 'Собака', age: 3, type: 'Кошка', gender: 'мальчик', wild: false, color: 'blue'}
    const pet3 = {name: 'Пушистик', age: 12, type: 'Кошка', gender: 'девочка', wild: false, color: 'pink'}

    const rexars = [
      { name: 'Рексар', age: 24, type: 'волк', gender: 'мальчик', wild: true, color: '#FF000F' },
      { name: 'Рексар', age: 13, type: 'волк', gender: 'мальчик', wild: false, color: 'green' }
    ]

    return (
        <>
      <MyPet  name = {pet1.name} age = {pet1.age} type = {pet1.type} gender = {pet1.gender} wild = {false} color = {pet1.color}/>
          <hr/>
      <MyPet  name = {pet2.name} age = {pet2.age} type = {pet2.type} gender = {pet2.gender} wild = {false} color = {pet2.color}/>
          <hr/>
      <MyPet  name = {pet3.name} age = {pet3.age} type = {pet3.type} gender = {pet3.gender} wild = {false} color = {pet3.color}/>
          <hr/>
      <MyPet name = {rexars[0].name} age={rexars[0].age} type={rexars[0].type} gender={rexars[0].gender} wild = {rexars[0].wild}
          color = {rexars[0].color}
      />
          <hr/>
      <MyPet name = {rexars[1].name} age={rexars[1].age} type={rexars[1].type} gender={rexars[1].gender} wild = {rexars[1].wild}
          color = {rexars[1].color}
      />
        </>

    )
  }

  export default App;