import { BrowserRouter,Routes,Route,Link, useNavigate } from "react-router-dom";
import CounterApp from "./CounterApp";
import TodoListApp from "./TodoListApp";
import HomeApp from "./HomeApp";

function LinkButtonPageApp() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>App 목록</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><button style={{width : '200px', height : '100px', fontSize : '1.1rem'}} onClick={() => navigate('/counter')}>🏠CounterApp</button></li>
                    <li><button style={{width : '200px' , height : '200px', fontSize : '2rem'}} onClick={() => navigate('/todos')}>TodoListApp</button></li>
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