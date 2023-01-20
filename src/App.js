import {useState} from 'react';
import './App.css';
import Header from './components/header';
import ContentMint from './components/contentmint';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className="App">
      <Header isConnected={isConnected} setIsConnected={setIsConnected}/>
      <ContentMint isConnected={isConnected} setIsConnected={setIsConnected}/>
    </div>
  );
}

export default App;
