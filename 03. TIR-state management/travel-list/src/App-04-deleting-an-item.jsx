import { useState } from "react";

function Logo() {
    return <h1>🌴Far Away🧳</h1>;
}

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        console.log(newItem);

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    function handleChange(event) {
        setDescription(event.target.value);
    }
    function handleSelect(event) {
        console.log(event.target.value);
        setQuantity(Number(event.target.value));
    }

    return (
        <div className="add-form" onSubmit={handleSubmit}>
            <form className="add-form">
                <h3>What do you need for your trip?</h3>
                <select value={quantity} onChange={handleSelect}>
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                        (num) => (
                            <option value={num} key={num}>
                                {num}
                            </option>
                        ),
                    )}
                </select>
                <input
                    type="text"
                    placeholder="Item..."
                    value={description}
                    onChange={handleChange}
                />
                <button>Add Item</button>
            </form>
        </div>
    );
}

function Item({ item, onDeleteItem }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

function PackingList({ items, onDeleteItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                    />
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
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} />
            <State />
        </div>
    );
}

export default App;
