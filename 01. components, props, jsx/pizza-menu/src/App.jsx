import pizzaData from "./data.js";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza</h1>
        </header>
    );
}

function Pizza(props) {
    if (props.pizzaObj.soldOut) return null;

    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </ul>
            ) : (
                <p>We are still working on our menu. Please come back later!</p>
            )}
        </main>
    );
}

function Order(props) {
    return (
        <div className="order">
            <p>
                We are open until {props.closeHour}:00. Come visit us or order
                online
            </p>
            <div className="btn">Order</div>
        </div>
    );
}

function Notice(props) {
    return (
        <div className="order">
            <p>
                We are open until {props.closeHour}:00. Come visit us or order
                online
            </p>
            <div className="btn">Order</div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 20;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order openHour={openHour} closeHour={closeHour} />
            ) : (
                <Notice openHour={openHour} closeHour={closeHour} />
            )}
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
1;
export default App;
