import { createContext, useContext, useState } from 'react'

const StateContext = createContext({})

export const StateProvider = ({ children }) => {
    const serviceName = 'Super Web Site'
    const [isLogin, setIsLogin] = useState(false)
    const [isOn, setIsOn] = useState(false)

    return (
        <StateContext.Provider
            value={{ serviceName, isLogin, setIsLogin, isOn, setIsOn }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)