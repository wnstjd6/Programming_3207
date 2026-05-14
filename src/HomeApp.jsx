import {useState} from 'react';
import CounterApp from "./CounterApp.jsx";
import TodoListApp from "./TodoListApp.jsx";


function ButtonPageApp({ setPage }) {
  return (
    <>
      <h1>App 목록</h1>
      <ul>
        <li><button style={{fontSize: "1.1rem", width: "100px", height : "100px"}} onClick={() => setPage('counterapp')}><br /> CouterApp</button></li>
        <li><button style={{fontSize: "1.1rem", width: "100px", height : "100px"}} onClick={() => setPage('todolistapp')}><br /> TodoListApp</button></li>
      </ul>
    </>
  );
}

export default function HomeApp() {
  const [page, setPage] = useState('home');
  return (
    <>
    {page === 'home' && <ButtonPageApp setPage={setPage} />}
    {page !== 'home' && <button onClick={() => setPage('home') } style={{position :'fixed', left: '10px', bottom: '10px', cursor: 'pointer', borderRadius : '8px', background : "#eee", border : 'none', padding : '6px'}}>홈으로</button>}
      {page === 'counterapp' && <CounterApp />}

    {page === 'todolistapp' && <TodoListApp />}
    </>
  );
}