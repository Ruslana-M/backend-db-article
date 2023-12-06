
import Backendless from 'backendless';
import './App.css';
import Articles from './component/Articles';
import { Route, Routes } from 'react-router-dom';


function App() {

  Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp(process.env.REACT_APP_BACKENDLESS_ID, process.env.REACT_APP_BACKENDLESS_KEY );
  return (
    <div className="App">

      <Routes>
       <Route path="/articles" element={<Articles/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
