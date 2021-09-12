import './style.scss'
export function BannerMembers({text}){
  return (
    <header className='header-banner'>
      <h1>{text}</h1>
    </header>
  )
}