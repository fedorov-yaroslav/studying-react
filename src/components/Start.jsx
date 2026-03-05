import { useState, useEffect } from 'react'

function Start() {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com/')
        .then(res => res.json())
        .then(data => setFact(data.data[0]))
        .catch(err => console.log(err))

  }, [])

  return (
    <>
      <h1>Cat Fact</h1>
      <p style = {{color: 'white', fontSize: '1.3rem'}}>{fact || 'Loading...'}</p>
    </>
  )
}

export default Start