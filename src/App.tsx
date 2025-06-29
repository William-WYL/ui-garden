// src/App.tsx
import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Welcome to UI Garden</h1>
      <Button label="Click me" />
      {/* 这里可以继续导入和展示其他组件 */}
    </div>
  );
}

export default App;
