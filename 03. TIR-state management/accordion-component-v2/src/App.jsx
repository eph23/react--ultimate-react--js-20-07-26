import { useState } from "react";
import data from "./data";

function Accordion() {
    const [currentlyOpen, setCurrentlyOpen] = useState(null);

    return (
        <div className="accordion">
            {data.map((item, index) => (
                <AccordionItem
                    currentlyOpen={currentlyOpen}
                    onOpen={setCurrentlyOpen}
                    key={index + 1}
                    title={item.title}
                    num={index}
                >
                    {item.text}
                </AccordionItem>
            ))}
        </div>
    );
}

function AccordionItem({ num, title, currentlyOpen, onOpen, children }) {
    const isOpen = num === currentlyOpen;

    function handleToggle() {
        onOpen(isOpen ? "null" : num);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}

function App() {
    return (
        <div>
            <Accordion />
        </div>
    );
}

export default App;
