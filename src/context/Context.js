import React, { createContext, useState } from 'react'
import { initialState, reducer } from './reducer/Reducer'

export const SleepContext = createContext()
SleepContext.displayName = 'Sleep Context'

export const SleepProvider = ({ children }) => {
  const [user, setUser] = useState('')

  return (
    <SleepContext.Provider
      value={ {user, setUser} }
    >
      {children}
    </SleepContext.Provider>
  )
}
