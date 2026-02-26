function UserCard({name, email, avatarUrl, role = 'user', children}){
  return (
      <>
        <div className = 'product'>
          <img width = '80px' src={avatarUrl} alt = ''/>
          <p>{name}</p>
          <p>{email}</p>
          <p>Роль: {role}</p>
          {children}
        </div>
      </>
  )
}

export default UserCard