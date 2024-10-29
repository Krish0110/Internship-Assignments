import './App.css';
import InputUser from './components/InputUser';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <InputUser />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
