function Logo() {
    return <h1>🌴Far Away🧳</h1>;
}

function Form() {
    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
            <form>
                <input type="text" />
                <select>
                    <option>1</option>
                </select>
                <button>Add Item</button>
            </form>
        </div>
    );
}

function PackingList() {
    return <div className="list"></div>;
}

function State() {
    return (
        <footer className="stats">
            <em>
                You have X items on your list, and you already packed X (X%)
            </em>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <State />
        </div>
    );
}

export default App;
