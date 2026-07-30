const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Shirts", quantity: 3, packed: true },
];

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

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
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
