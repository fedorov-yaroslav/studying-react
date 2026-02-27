function ArrayAndObjects() {
  const person = {name: 'John', age: 25, city: 'New York'}
  const car = {brand: 'Skoda', model: 'Rapid', year: 2015}
  person.age = 26
  delete person.city
  const student = {name: 'Anna', grades: {math: 5, english: 4}}
  student.grades.english = 5
  const phone = {brand: 'Nokia', model: 7600, price: 13500}
  car.color = ''
  const person2 = {...person}
  person2.name = 'Anna'
  const fruits = ['apple', 'banana', 'orange']
  fruits.push('grape')
  fruits.shift()
  const books = [{title: '1984', author: 'George Orwell'}, {title: 'Brave New World', author: 'Aldous Huxley'}]
  books[2] = {title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón'}
  const OrwellBook = books.find(book => book.author === 'George Orwell')
  const numbers = [1,2,3,4,5,6,7,8,9,10]
  const numbersSquared = numbers.map(number => number ** 2).join(' ')
  const users = [
      {name: 'John', age: 16},
      {name: 'Anna', age: 23},
      {name: 'Bill', age: 68}
  ]
  users.forEach(user => {user.isAdmin = false})

  return (
      <>
        <p>brand: {car.brand}, model: {car.model} </p>
        <ul>
          {Object.keys(person).map((key) =>
              (<li key = {key}>{key}</li>)
          )}
        </ul>
        <ul>
          {Object.entries(person).map(([key, value]) =>
              (<li key = {key}>{value}</li>)
          )}
        </ul>
        <p>{String(person.hasOwnProperty('city'))}</p>
        <ul>
          {Object.entries(person).map(([key, value]) =>
              (<li key = {key}>{value}</li>)
          )}
        </ul>
        <p>{student.grades.math}</p>
        <p>Цена: {phone.price}</p>
        <ul>
          {Object.entries(person2).map(([key, value]) =>
              (<li key = {key}>{key}: {value}</li>)
          )}
        </ul>
        <ul>
          {fruits.map((fruit, index) =>
            (<li key = {index}>{fruit}</li>)
            )}
        </ul>
        <ul>
          {books.map((book, index) =>
              (<li key = {index}>{book.title}</li>)
          )}
        </ul>
        <p>{OrwellBook.title}</p>
        <p>{
          numbers.filter(number => number % 2 === 0).join(' ')
        }</p>
        <p>{numbersSquared}</p>
        <p>{numbers.reduce((acc, curr) => acc + curr, 0)}</p>
        <ul>
          {users
              .filter((user) => user.age >= 18)
              .map((user, index)=>
              (<li key = {index}>{user.name}</li>)
          )}
        </ul>
        <p>{String(users[0].isAdmin)}</p>
      </>
  )
}

export default ArrayAndObjects