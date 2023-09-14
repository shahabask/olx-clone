import React,{useState} from "react";

export const FirebaseContext = React.createContext(null)
export const AuthContext =React.createContext(null)

export default function Context ({children}){
const [user, setUser] = useState('heloo')

return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
)
}