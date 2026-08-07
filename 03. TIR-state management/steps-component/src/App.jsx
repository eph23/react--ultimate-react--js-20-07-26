import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function Button({ textColor, backgroundColor, onClick, text }) {
    return (
        <button
            style={{
                backgroundColor: backgroundColor ,
                color: textColor ,
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrev() {
        if (step > 1) {
            setStep((currentStep) => currentStep - 1);
        }
    }

    function handleNext() {
        if (step < messages.length) {
            setStep((currentStep) => currentStep + 1);
        }
    }

    function handleOpen() {
        setIsOpen((currentOpenState) => !currentOpenState);
    }

    return (
        <>
            <button className="close" onClick={handleOpen}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>
                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <Button
                            textColor="#fff"
                            backgroundColor="#7950f2"
                            onClick={handlePrev}
                            text="Previous"
                        />

                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
