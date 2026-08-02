import { useState } from "react";

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleStep(event) {
        setStep(Number(event.target.value));
    }

    function handleCountIncrease() {
        setCount((currentCount) => currentCount + step);
    }
    function handleCountDecrease() {
        setCount((currentCount) => currentCount - step);
    }
    function handleCount(event) {
        setCount(Number(event.target.value));
    }

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <div className="container">
            <div className="buttons">
                <span>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={step}
                        onChange={handleStep}
                    />
                </span>
                <h3>step: {step}</h3>
            </div>

            <div className="buttons">
                <button onClick={handleCountDecrease}>-</button>
                <span>
                    <input type="text" value={count} onChange={handleCount} />
                </span>
                <button onClick={handleCountIncrease}>+</button>
            </div>
            <div>
                <h3>Count: {count}</h3>
            </div>

            <h1>
                <span>{count === 0 ? "Today is " : ""}</span>
                <span>
                    {count < 0 ? `${Math.abs(count)} days ago was ` : ""}
                </span>
                <span>
                    {count > 0 ? `${Math.abs(count)} days from today is ` : ""}
                </span>

                <span>{date.toDateString()}</span>
            </h1>
            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
        </div>
    );
}

function App() {
    return <Counter />;
}

export default App;
