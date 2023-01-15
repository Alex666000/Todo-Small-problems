import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

// Привет, ребята! Давайте усилим нашу сессию:

// 1. Устанавливаем AXIOS - это библиотека для HTTP-запросов. Мы используем его вместо метода FETCH.

// https://axios-http.com/ru/docs/intro
// yarn add axios

// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//         setTodos(res.data)
//     })

//2. Давайте переместим наш метод map и обернем его новой переменной:
//const mapTodos=todos.map(el => {...

// return (
//     <div className="App">
//         <button onClick={onClickHandler}>CLEAN POSTS</button>
//         <ul>
//             {mapTodos}
//         </ul>
//     </div>
// );

// 3. Создайте новую кнопку для повторного отображения наших данных

// 4. У нас возникла проблема. Код дублируется (axios.get...). Давайте создадим новую функцию и используем ее там, где нам нужно.
//Удачи!

type PropsType=
    {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

function App() {
    const [todos, setTodos] = useState<Array<PropsType>>([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setTodos(response.data))
    },[])

    const onClickHandler = () => {
        setTodos([])
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>CLEAN POSTS</button>
            <ul>
                {todos.map(el => {
                    return (
                        <li>
                            <span>{el.id} - </span>
                            <span>{el.title}</span>
                            <span>{el.completed}</span>
                        </li>
                    )
                })}

            </ul>


        </div>
    );
}

export default App;
//----------------------------------------------------------------------------------------

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios";
//
//
// type PropsType =
//     {
//         userId: number,
//         id: number,
//         title: string,
//         completed: boolean
//     }
//
// function App() {
//     const [todos, setTodos] = useState<Array<PropsType>>([])
//
//     const axiosRequest=()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((res) => {
//                 setTodos(res.data)
//             })
//     }
//
//     useEffect(() => {
//         // fetch('https://jsonplaceholder.typicode.com/todos')
//         //     .then(response => response.json())
//         //     .then(json => setTodos(json))
//
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }, [])
//
//     const mapTodos=todos.map(el=>{
//         return (
//             <li>
//                 <span>{el.id} - </span>
//                 <span>{el.title}</span>
//                 <span>{el.completed}</span>
//             </li>
//         )
//     })
//
//     const onClickHandler = () => {
//         setTodos([])
//     }
//
//     const onClickHandlerForRedisplay=()=>{
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }
//
//     return (
//         <div className="App">
//             <button onClick={onClickHandler}>CLEAN POSTS</button>
//             <button onClick={onClickHandlerForRedisplay}>REDISPLAY</button>
//             <ul>
//                 {/*{todos.map(el => {*/}
//                 {/*    return (*/}
//                 {/*        <li>*/}
//                 {/*            <span>{el.id} - </span>*/}
//                 {/*            <span>{el.title}</span>*/}
//                 {/*            <span>{el.completed}</span>*/}
//                 {/*        </li>*/}
//                 {/*    )*/}
//                 {/*})}*/}
//
//                 {mapTodos}
//             </ul>
//         </div>
//     );
// }
//
// export default App;
