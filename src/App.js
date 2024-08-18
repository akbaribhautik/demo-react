import logo from './logo.svg';
import './App.css';
import HomeScreen from './HomeScreen'
import { Provider } from 'react-redux'
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
