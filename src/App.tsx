import './App.css'
import { ListOfUsers } from './components/ListOfUsers'
import CreateNewUser from './components/CreateNewUser';

function App() {
  
  return (
    <>
      <h1>Nuestro Proyecto con Redux</h1>

      <ListOfUsers />
      <CreateNewUser />
    </>

  )
}

export default App
