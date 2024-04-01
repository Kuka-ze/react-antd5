import React from 'react'
import './App.css';
import routers from './router';
import { Routes, Link, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App App-header">
            <div className="App App-router">
                {
                    routers.map((item, index) => (
                        <Link className="App App-link" to={item.path} key={index}> {item.name} </Link>
                    ))
                }
            </div>
            <Routes>
                {
                    routers.map((item, index) => (
                        <Route path={item.path} key={index} element={<item.components />}></Route>
                    ))
                }
            </Routes>
        </div >
    );
}

export default App;