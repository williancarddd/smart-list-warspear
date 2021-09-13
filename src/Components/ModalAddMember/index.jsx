import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import { ContextList } from '../../Context/ContextList'
import './style.scss'
export function ModalAddMember({visibleA , callbackVisible}){ 
  const {addMember} = useContext(ContextList)
  const {register, handleSubmit} = useForm()
  const [result, setResult] = useState()
  const onSubmit = data => setResult(data)
  useEffect(() => {
    if( result ){
      addMember(result.nickname, result.level, result.class)
      setResult(e => e = undefined)
    }
    
  }, [result])
  return (
    <>
      <Rodal onClose={() => {callbackVisible(!visibleA)}} visible={visibleA} duration={20} customStyles={{'backgroundColor': '#03000D'}}>
        <form className="container-modal" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="member" className='label-modal'  >NickName</label>
              <input type="text" className='input-modal' name='nickname' {...register('nickname')} />
            </div>
            <div>
                <label htmlFor="level" className='label-modal' >level</label>
                <input type="number" className='input-modal' name='level' {...register('level')} />
            </div>
            <div>
                <label htmlFor="class" className='label-modal'>class</label>
                <input type="text" className='input-modal' name='class' {...register('class')}/>
            </div>
            <div>
                <button type='submit' className='button-modal' onClick={() => callbackVisible(!visibleA)}>Save</button>
            </div>
        </form>
      
    </Rodal>
    </>
  )
}