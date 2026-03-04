import { useState } from 'react'

function CoffeeShop() {
  const products = [
    {id: crypto.randomUUID(), title: 'Матча Тоник', price: 325, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Матча Латте', price: 325, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Чай Латте', price: 360, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Фирменный чай Розмари голд', price: 335, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Фирменный чай Чиллин', price: 335, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Фирменный чай Биарриц', price: 335, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Габа Фермерская', price: 220, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Да Хун Пао', price: 220, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Молочный Улун', price: 220, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Гречишный Чай', price: 200, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Иван Чай', price: 150, category: 'Чай'},
    {id: crypto.randomUUID(), title: 'Эспрессо', price: 220, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Американо', price: 280, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Капучино', price: 295, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Латте', price: 295, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Фильтр кофе', price: 280, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Флэт Уайт', price: 290, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Воронка', price: 290, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Раф Классический', price: 395, category: 'Классика Кофе'},
    {id: crypto.randomUUID(), title: 'Английский Маффин', price: 315, category: 'Завтраки'},
    {id: crypto.randomUUID(), title: 'Йогурт с гранолой и бананом', price: 375, category: 'Завтраки'},
    {id: crypto.randomUUID(), title: 'Сырники творожные с ванилью', price: 300, category: 'Завтраки'},
    {id: crypto.randomUUID(), title: 'Овсяная каша Peanut Jelly', price: 250, category: 'Завтраки'},
    {id: crypto.randomUUID(), title: 'Овсяная каша Cherry Berry', price: 250, category: 'Завтраки'},
    {id: crypto.randomUUID(), title: 'Овсяная каша Spiced Apple', price: 250, category: 'Завтраки'},
    {id: crypto.randomUUID(), title: 'Раф Лавандовый', price: 430, category: 'Фирменные Напитки'},
    {id: crypto.randomUUID(), title: 'Раф Соленая Карамель', price: 430, category: 'Фирменные Напитки'},
    {id: crypto.randomUUID(), title: 'Раф Пуэрториканский', price: 430, category: 'Фирменные Напитки'},
    {id: crypto.randomUUID(), title: 'Джинджер', price: 415, category: 'Фирменные Напитки'},
    {id: crypto.randomUUID(), title: 'Малиновый Латте', price: 370, category: 'Фирменные Напитки'},
    {id: crypto.randomUUID(), title: 'Двойной Гавайский', price: 415, category: 'Фирменные Напитки'},
    {id: crypto.randomUUID(), title: 'Сэндвич-ролл с лососем', price: 510, category: 'Сэндвичи'},
    {id: crypto.randomUUID(), title: 'Сэндвич-ролл с курицей', price: 460, category: 'Сэндвичи'},
    {id: crypto.randomUUID(), title: 'Японский сэндвич с ветчиной Sando', price: 475, category: 'Сэндвичи'},
    {id: crypto.randomUUID(), title: 'Сэндвич с пепперони', price: 355, category: 'Сэндвичи'},
    {id: crypto.randomUUID(), title: 'Сэндвич с курицей и рукколой', price: 355, category: 'Сэндвичи'},
    {id: crypto.randomUUID(), title: 'Улувату', price: 430, category: 'Смузи'},
    {id: crypto.randomUUID(), title: 'Айс Манки', price: 430, category: 'Смузи'},
    {id: crypto.randomUUID(), title: 'Бали Бум', price: 430, category: 'Смузи'},
    {id: crypto.randomUUID(), title: 'Португальский Смузи', price: 430, category: 'Смузи'},
    {id: crypto.randomUUID(), title: 'Лимонад Флауэр Пауэр', price: 370, category: 'Лимонады'},
    {id: crypto.randomUUID(), title: 'Лимонад Кейптаун ', price: 370, category: 'Лимонады'},
    {id: crypto.randomUUID(), title: 'Лимонад Дабл Элевен', price: 370, category: 'Лимонады'},
    {id: crypto.randomUUID(), title: 'Апельсиновый Фреш', price: 420, category: 'Свежевыжатые соки'},
    {id: crypto.randomUUID(), title: 'Грепфрутовый Фреш', price: 420, category: 'Свежевыжатые соки'},
    {id: crypto.randomUUID(), title: 'Яблочный фреш', price: 420, category: 'Свежевыжатые соки'},
    {id: crypto.randomUUID(), title: 'Эспрессо Тоник', price: 345, category: 'Холодный Кофе'},
    {id: crypto.randomUUID(), title: 'Айс Латте', price: 320, category: 'Холодный Кофе'},
    {id: crypto.randomUUID(), title: 'Айс Мэверик Бамбл', price: 415, category: 'Холодный Кофе'},
    {id: crypto.randomUUID(), title: 'Милкшейк', price: 440, category: 'Молочные напитки'},
    {id: crypto.randomUUID(), title: 'Бин Ту Бар какао', price: 345, category: 'Молочные напитки'},
    {id: crypto.randomUUID(), title: 'Альтернативное молоко', price: 240, category: 'Альтернативное молоко'},
    {id: crypto.randomUUID(), title: 'Компот', price: 295, category: 'Компот'},
    {id: crypto.randomUUID(), title: 'Хот-дог классический', price: 315, category: 'Хот-Дог'}
  ]

  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(input.toLowerCase())
    const matchesCategory = selectedCategory === null || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [...new Set(products.map(p => p.category))]

  return (
      <>
        <div>
          {categories.map(category => (
              <button
                  key={category}
                  onClick={() => handleCategory(category)}
              >
                {category}
              </button>
          ))}
        </div>

        <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder='Поиск по названию'
        />

        <ul>
          {filteredProducts.map((product) => (
              <li key={product.id}>
                {product.title} <p>{product.price} ₽</p>
              </li>
          ))}
        </ul>
      </>
  )
}

export default CoffeeShop