import CartWidget from "./components/CardWidget/CardWidget"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting = {'Bienvenido'}/>
    </>
  )
}

export default App