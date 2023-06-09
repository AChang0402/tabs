import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs';

function App() {
  const tabData = [
    {label:"Tab 1", content: "Tab 1 content is showing here"},
    {label:"Tab 2", content: "Tab 2 content is showing here"},
    {label:"Tab 3", content: "Tab 3 content is showing here"}
  ]
  
  return (
    <div className="App">
      <Tabs tabData={tabData}/> 
    </div>
  );
}

export default App;
