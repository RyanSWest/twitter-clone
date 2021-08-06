import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Post from './Post'

function App() {
  return (
    <div className="app">
    
      <Sidebar/>
     
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
