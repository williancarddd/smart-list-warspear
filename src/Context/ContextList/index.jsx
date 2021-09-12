import React, { useReducer } from 'react'
import { reducer_list } from './reducer_list'

// here is the context only  of the list members
export const ContextList = React.createContext()

export function ContextListComponent({children}){
  const [state, dispatch] = useReducer(reducer_list, [
    { id:1,
      name: 'Favoniy',
      level: 30,
      class:'xamã'
    },
    { id:1,
      name: 'Blockead',
      level: 32,
      class:'rogue'
    }
  ])
  return (
    <>
      <ContextList.Provider value={{state, dispatch}}>
        {children}
      </ContextList.Provider>
    </>
  )
}