import React from 'react';
import DataFetching from './components/DataFetching'
import st from './App.module.css'

const App = (porps) => {
  return (
    <div className={st.App}>
       <DataFetching/>    
    </div>
  );
}

export default App;
