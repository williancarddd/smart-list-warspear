export function Member({nickname, class_char, level_char}){
  return (
    <>
    <tr className='line-member'>
      <td>
        {nickname}
      </td>
      <td>
        {class_char}
      </td>
      <td>
        {level_char}
      </td>
    </tr>
    </>
  )
}