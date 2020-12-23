import './App.css';
import {HashRouter,Route}from 'react-router-dom';
import Home from './components/Home/Home';
import Tweet from './components/Tweet/Tweet';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index';
import Wisky1221 from './components/Blog/Wisky1221';


function App() {
  return (
    <div className = 'App'>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Route path = '/' exact component = {Home}></Route>
          <Route path = '/tweet' exact component = {Tweet}></Route>
          <Route path = '/wisky1221' exact component = {Wisky1221}></Route>
        </HashRouter>
      </PersistGate>
    </div>
  );
}

export default App;
