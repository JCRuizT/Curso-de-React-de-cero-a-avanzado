import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld }  from './HelloWorld';
import FirstApp from './FirstApp';
import { CounterApp } from './Counters';
import './styles.css';

function App() {
    return <CounterApp value={20}/>
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);