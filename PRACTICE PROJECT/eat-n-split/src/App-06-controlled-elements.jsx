import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}

function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt="friend.name" />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are equal</p>}
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}

function FriendList({ friends, onSelection, selectedFriend }) {
    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <Friend
                        key={friend.id}
                        friend={friend}
                        onSelection={onSelection}
                        selectedFriend={selectedFriend}
                    />
                ))}
            </ul>
        </div>
    );
}

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleAddName(event) {
        setName(() => event.target.value);
    }
    function handleAddImage(event) {
        setName(() => event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = { name, image: `${image}?=${id}`, balance: 0, id };
        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>📝Friend's Name</label>
            <input type="text" value={name} onChange={handleAddName} />

            <label>🖼️Image URL</label>
            <input type="text" value={image} onChange={handleAddImage} />

            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill({ selectedFriend }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend = bill ? bill - paidByUser : "";

    function handleSetBill(event) {
        setBill(() => Number(event.target.value));
    }
    function handlePaidByUser(event) {
        setPaidByUser(() =>
            Number(event.target.value) > bill
                ? paidByUser
                : Number(event.target.value),
        );
    }
    function handleWhoIsPaying(event) {
        setWhoIsPaying(() => event.target.value);
    }

    return (
        <form className="form-split-bill">
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>💲Total Bill</label>
            <input type="text" value={bill} onChange={handleSetBill} />

            <label>💰 Your Portion</label>
            <input type="text" value={paidByUser} onChange={handlePaidByUser} />

            <label>💳 {selectedFriend.name}'s Portion</label>
            <input type="text" disabled value={paidByFriend} />

            <label>💸 Who is paying?</label>
            <select value={whoIsPaying} onChange={handleWhoIsPaying}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);

    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleAddShowFriend() {
        setShowAddFriend((showAddFriend) => !showAddFriend);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelection(friend) {
        setSelectedFriend((currentSelected) =>
            currentSelected?.id === friend.id ? null : friend,
        );
        setShowAddFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleAddShowFriend}>
                    {showAddFriend ? "Close" : "Add friend"}
                </Button>
            </div>
            <div>
                {selectedFriend && (
                    <FormSplitBill selectedFriend={selectedFriend} />
                )}
            </div>
        </div>
    );
}

export default App;
