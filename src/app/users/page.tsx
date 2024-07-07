type User = {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string
}



const Users = async() => {
    console.log('users from server component');
    await new Promise(resolve => setTimeout( resolve, 2000))
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json()
    
    
  return (
    <>
        <h2>Users</h2>
        {users.map((user: User) => (
            <div key={user.id} className="border grid gap-2">
                <h3>{user.name}</h3>
                <p>{user.website}</p>
            </div>

        ))}
    </>
  )
}

export default Users