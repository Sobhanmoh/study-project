const UserList = () => {
    const users = [
        { id: 1, name: "sobhan", age:16 },
        { id: 2, name: "Ali", age:30 },
        { id: 3, name: "saman", age:26 },
    ]


  return <div>
    { users.map(user => (
        <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
        </div>
    )) }
  </div>
  
}

export default UserList