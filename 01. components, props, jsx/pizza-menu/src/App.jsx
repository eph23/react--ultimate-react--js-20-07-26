function Header() {
    return <h1>Fast React Pizza</h1>;
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
            <h2>Pizza Spinaci</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
            <Pizza />
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer>{new Date().toLocaleTimeString()} We are currently open</footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
1;
export default App;
