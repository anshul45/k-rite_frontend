import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App;