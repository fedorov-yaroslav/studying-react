function MyPet({name, type, age, gender, wild, color}) {
  return (
      <>
       <p style = {{color: color}}> Моего питомца зовут {name}, это {type}, {gender}, ему {age} лет.
         {wild ? '👹Дикий зверь' : '😊 Домашний любимец'}
      </p>
      </>
  )
}

export default MyPet;