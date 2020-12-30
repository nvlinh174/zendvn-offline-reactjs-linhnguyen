import logo from './logo.svg';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(1);
    const [isShowForm, setIsShowForm] = useState(false);

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <div className='App'>
            <div className='container my-4'>
                {counter}
                <button onClick={handleClick} className='btn btn-primary'>
                    Click Me
                </button>
            </div>
        </div>
    );
}

export default App;
