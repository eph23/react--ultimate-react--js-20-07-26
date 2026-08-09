import { useState } from "react";

function BillInput({ bill, onSetBill }) {
    return (
        <div className="inputs">
            <label>How much was the bill?</label>
            <input
                type="text"
                placeholder="Bill value"
                value={bill}
                onChange={(event) => onSetBill(Number(event.target.value))}
            />
        </div>
    );
}

function SelectPercentage({ children, percentage, onSelect }) {
    return (
        <div className="inputs">
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(event) => onSelect(Number(event.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was ok (5%)</option>
                <option value="15">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <div className="message">
            <h3>You pay: ${bill + tip}</h3>
            <span>
                (Bill: ${bill} + Tip: ${tip})
            </span>
        </div>
    );
}

function Reset({ onReset }) {
    return (
        <div className="buttons">
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

function TipCalculator() {
    const [bill, setBill] = useState("");
    const [myPercentage, setMyPercentage] = useState(0);
    const [friendsPercentage, setFriendsPercentage] = useState(0);

    const tip = bill * ((myPercentage + friendsPercentage) / 2 / 100);

    function handleReset() {
        setBill("");
        setMyPercentage(0);
        setFriendsPercentage(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage
                percentage={myPercentage}
                onSelect={setMyPercentage}
            >
                How did you liked the service?
            </SelectPercentage>
            <SelectPercentage
                percentage={friendsPercentage}
                onSelect={setFriendsPercentage}
            >
                How did your friend liked the service?
            </SelectPercentage>
            {bill > 0 && (
                <>
                    <Output bill={bill} tip={tip} />
                    <Reset onReset={handleReset} />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1>Tip Calculator</h1>
            <TipCalculator />
        </div>
    );
}

export default App;
