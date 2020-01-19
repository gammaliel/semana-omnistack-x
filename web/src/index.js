import React from 'react'; // É importado em todo arquivo que possui JSX
import ReactDOM from 'react-dom'; // Realiza a interação com a DOM
import App from './App'; // Uma função que retorna conteúdo HTML/JSX

ReactDOM.render(<App />, document.getElementById('root')); // Renderiza o conteúdo presente em
                                                           // App no index.html