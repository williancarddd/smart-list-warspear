import React, { useEffect, useReducer } from 'react'
import { reducer_list } from './reducer_list'
import {types} from '../../Context/ContextList/types_reducer'
import {uuid } from 'uuidv4'

// here is the context only  of the list members
export const ContextList = React.createContext()

export function ContextListComponent({children}){
  const [state, dispatch] = useReducer(reducer_list, [])
  
  function addMember(nickname, level, classs) {
    const dataMember = {
      id: uuid(),
      name: nickname,
      level: level,
      class: classs
    }
    dispatch({type: types.ADD_MEMBER, payload: dataMember})
  }

  return (
    <>
      <ContextList.Provider value={{state, addMember}}>
        {children}
      </ContextList.Provider>
    </>
  )
}