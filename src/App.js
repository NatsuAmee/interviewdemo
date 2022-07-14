import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserModification from './layout/UserModification';
import UserList from './layout/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/edit'element={<UserModification/>}/>
      </Routes>
    </div>
  );
}

export default App;
