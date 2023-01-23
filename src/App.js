import "./App.css";
import LeftSideComponent from "./Components/LeftSideComponent/LeftSideComponent";
import RightSideComponent from "./Components/RightSideComponent/RightSideComponent";
import Card from "./Components/UI/Card/Card";
function App() {
  return (
    <div className="app">
      <LeftSideComponent />
      <RightSideComponent />
      <Card />
    </div>
  );
}

export default App;
