import { BannerMembers } from "../../Components/BannerMembers";
import { ListMembers } from "../../Components/ListMembers";
import { ContextListComponent } from "../../Context/ContextList";
import './style.scss'
function App() {
  return (
    <div className='container' >
      <BannerMembers text='Member Management' />
      <ContextListComponent>
          <ListMembers />
      </ContextListComponent>
    </div>
  );
}

export default App;
