import './index.css'
import HelloWorld from './components/HelloWorld'
import MyName from './components/MyName.jsx'
import Greeting from './components/Greeting.jsx'
import Product from './components/Product.jsx'
import UserCard from './components/UserCard.jsx'
import Message from './components/Message.jsx'
import Counter from './components/Counter.jsx'
import Toggle from './components/Toggle.jsx'
import Seasons from './components/Seasons.jsx'
import LikeButton from './components/LikeButton.jsx'
import ShowPassword from './components/ShowPassword.jsx'
import RollTheDice from './components/RollTheDice.jsx'
import Input from './components/sprint4/Input.jsx'
import Input2 from './components/sprint4/Input2.jsx'

function App() {
  const productList = [
      {id: 1, title: 'Porsche Cayenne S 4.8 AT, 2007', price: 3600000, inStock: true},
      {id: 2, title: 'Peugeot 308 1.5 AT, 2019', price: 1210000, inStock: true},
      {id: 3, title: 'Hyundai Solaris 1.6 MT, 2015', price: 965000},
      {id: 4, title: 'Chevrolet Trax 1.4 AT, 2019', price: 1430000},
      {id: 5, title: 'Hyundai Creta 2.0 AT, 2021', price: 1540000},
      {id: 6, title: 'Chery Tiggo 7 Pro 1.5 CVT, 2022', price: 1790000},
      {id: 7, title: 'Hyundai i30 1.6 AT, 2011', price: 848000},
      {id: 8, title: 'Nissan Note 1.2 AT, 2018', price: 1580000},
      {id: 9, title: 'Mercedes-Benz C-класс 1.6 AT, 2014', price: 1999999},
      {id: 10, title: 'BMW X5 3.0 AT, 2022', price: 7950000}
  ]

  return (
      <>
        <HelloWorld />
        <MyName />
        <Greeting name = {'Ярослав'} age = {24} />
        <Greeting name = {'Николай'} age = {46} />
        <Greeting name = {'Сергей'} age = {52} />
        <Product title = {'BMW M4 3.0 MT, 2015, 82 496 км'} price = { 4809000 } inStock = {true} />
        <Product title = {productList[0].title} price = {productList[0].price} inStock = {true} />
        <Product title = {productList[1].title} price = {productList[1].price} inStock = {true} />
        <Product title = {productList[2].title} price = {productList[2].price} inStock = {true} />
        <Product title = {productList[3].title} price = {productList[3].price} inStock = {true} />
        <hr />
        <UserCard name = {'Владимир'} email = {'valdimir@vladimir.de'} avatarUrl = {'https://img.freepik.com/free-photo/expressive-redhead-bearded-man_176420-32277.jpg?semt=ais_related_payload_trends&w=740&q=80'} />
        <UserCard><p>Я ребенок?</p></UserCard>
        <Message text = {'Внимание! Ваш компьютер заражен!'} type = 'error' />
        <Message text = {'Ваш компьютер в безопасности.'} type = 'success' />
        <Message text = {'Извлеките дискету из дисковода'} type = 'info'/>
        <br />
        <Counter />
        <Toggle />
        <br/>
        <Seasons />
        <LikeButton/>
        <ShowPassword />
        <RollTheDice />
        <h2>Sprint 4</h2>
        <Input />
        <br />
        <Input2 />
      </>

    )
  }

  export default App;