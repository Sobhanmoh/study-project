import { Children, createContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "Sobhan"})

    const updateUser = (newName) => {
        setUser({name: newUpdate})
    }

    return (
    <UserContext.Provider value = {{ user, updateUser }}>
        {Children}

    </UserContext.Provider>
    )
}
export { UserContext, UserProvider }