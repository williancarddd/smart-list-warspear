import { useContext, useState } from 'react'
import { ContextList } from '../../Context/ContextList'
import { ModalAddMember } from "../ModalAddMember"
import './styele.scss'
export function Button(){
  const { addMember} = useContext(ContextList)
  const [isVisible, setIsVisible] = useState(false)

  function handleButton(visibled){
    setIsVisible(visibled)
  }
  return (
    <>
      <button  className='button-add' onClick={() => handleButton(true)}>Add member</button>
       <ModalAddMember visibleA={isVisible} callbackVisible={handleButton}></ModalAddMember>
    </>
  )
}