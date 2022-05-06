import './App.css';
import Steps1 from './Steps/1';
import Steps2 from './Steps/2';
import Steps3 from './Steps/3';
import Steps4 from './Steps/4';
import Steps5 from './Steps/5';

import Graph from './Components/Graph';

function App() {
  return (
    <main className="main">
      <div>Visx med Jacob!</div>
      <Graph />
      <Steps1 />
      <Steps2 />
      <Steps3 />
      <Steps4 />
      <Steps5 />
    </main>
  );
}

export default App;
