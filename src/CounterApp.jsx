import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {

  //count : 이전 또는 현재 값. setCount() : count 값을 변경하는 함수, 반드시 이걸 거쳐야 함
  const [count, setCount] = useState(0)
  //
  {/*

  */}

  return (
    <>
    <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count + 2)}>+2</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* <button onClick={setCount(0)}>Reset</button> */} : onClick 이벤트 핸들러에 setCount(0) 함수를 직접 호출하는 것은 잘못된 방식입니다. 이렇게 하면 컴포넌트가 렌더링될 때마다 setCount(0)이 실행되어 count가 항상 0으로 초기화됩니다. 대신, onClick 이벤트 핸들러에 함수를 전달해야 합니다. 예를 들어, onClick={() => setCount(0)}와 같이 작성하면 버튼이 클릭될 때만 setCount(0)이 실행되어 count가 0으로 초기화됩니다.

      

       {/* <button
          className="counter"
          onClick={() => setCount((count) => count + 1)} // JS 함수 호출X; 함수정의O 
        >
          Count is {count}
        </button> */}
    </>
  )
}

export default CounterApp;