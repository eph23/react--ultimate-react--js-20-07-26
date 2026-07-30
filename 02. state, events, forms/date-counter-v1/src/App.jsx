import { useState } from "react";

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleStepIncrease() {
        setStep((currentStep) => currentStep + 1);
    }
    function handleStepDecrease() {
        setStep((currentStep) => currentStep - 1);
    }

    function handleCountIncrease() {
        setCount((currentCount) => currentCount + step);
    }
    function handleCountDecrease() {
        setCount((currentCount) => currentCount - step);
    }

    return (
        <div className="container">
            <div className="buttons">
                <button onClick={handleStepDecrease}>-</button>
                <span>
                    <h3>Step: {step}</h3>
                </span>
                <button onClick={handleStepIncrease}>+</button>
            </div>

            <div className="buttons">
                <button onClick={handleCountDecrease}>-</button>
                <span>
                    <h3>Count: {count}</h3>
                </span>
                <button onClick={handleCountIncrease}>+</button>
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
        </div>
    );
}

function App() {
    return <Counter />;
}

export default App;
