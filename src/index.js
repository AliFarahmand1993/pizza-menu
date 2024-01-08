import React from 'react'
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <h1>Hello World</h1>
    )
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

// Before React 18
// React.render(<App />)