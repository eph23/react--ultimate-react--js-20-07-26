import { useState } from "react";

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

export default Form;
