// Learning React
// https://www.youtube.com/watch?v=Ke90Tje7VS0&t=1007s
// self typed

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Counter></Counter>
    </React.StrictMode>
);