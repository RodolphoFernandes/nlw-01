import React from 'react';
import './App.css';


//import Home from './pages/Home';

import Routes from './routes';

//JSX: Sintaxe de XML dentro do javascript

//Conceito de propriedades no componente


/**
 * Conceito de estado e imutabilidade
 * adicionar no import {useState}
 */
function App() {

  return (
    <Routes />
  );

  // const [counter, setCounter] = useState(0); // useState sempre retorna um array [valor do estado, função para atualizar o valor do estado]

  //   function handleButtonClick(){
  //       setCounter(counter + 1);
  //   }


  // return (
  //   <div>
  //     <Header title="Hello World"/>
      
  //     <h1>{counter}</h1>      
  //     <button type="button" onClick={handleButtonClick}>Aumentar</button>

  //   </div>
  // );
}

export default App;
