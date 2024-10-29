import { Provider } from 'react-redux';
import './App.css';
import CounterPage from './pages/CounterPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
}

export default App;
