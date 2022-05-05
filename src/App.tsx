import React from 'react';
import './css/App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={process.env.PUBLIC_URL + '/logo512-circle.png'} alt="logo" />
      </header>
      <main className="app-email">
        <a href='mailto:contato@pocz.io'>[ contato@pocz.io ]</a>
      </main>
    </div>
  );
}

export default App;
