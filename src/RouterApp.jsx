import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import CounterApp from "./CounterApp";
import TodoListApp from "./TodoListApp";
import HomeApp from "./HomeApp";

function LinkButtonPageApp() {
    return (
        <div>
            <h1>App 목록</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default function RouterApp() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LinkButtonPageApp />} />
                <Route path="/home" element={<HomeApp />} />
                <Route path="/counter" element={<CounterApp />} />
                <Route path="/todos" element={<TodoListApp />} />
            </Routes>
        </BrowserRouter>
    );
}