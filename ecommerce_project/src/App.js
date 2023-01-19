import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';
import Item from './Item';
import Items from './Items';
import Additem from './Additem';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore } from 'redux'
import rootReducer from './Reducers/rootReducer'
import { Provider } from 'react-redux';
function App() {
  const persistConfig = {
    key: 'root',
    storage: storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="/" element={<Items />} />
              <Route exact path="/additem" element={<Additem />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}
export default App;
