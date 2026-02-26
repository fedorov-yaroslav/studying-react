function Message({text, type}) {
  let className = 'info'
  if (type === 'success'){
    className = 'success'
  }
  else if (type === 'error'){
    className = 'error'
  }

  return (
      <>
        <p className = {className}>{text}</p>
      </>
  )
}

export default Message