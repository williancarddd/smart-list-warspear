import { useContext } from "react"
import { ContextList } from "../../Context/ContextList"
import { Member } from "./Member"
import './style.scss'

export function ListMembers(){
  const {state, dispatch} = useContext(ContextList)
  console.log(state)
  return (
    <>
      <div className="list-member">
        <table className='table-members' border='1'>
          <caption>List Members</caption>
          <thead className='head-table-members'>
            <tr>
              <th>NickName</th>
              <th>Class</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody className="body-table-members">
            {
             state.map((e) => {
              return <Member key={e.id} nickname={e.name} level_char={e.level} class_char={e.class} />
             })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}