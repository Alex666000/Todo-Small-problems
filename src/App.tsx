import React, {useState} from "react";
import "./App.css";
import {Todolist} from "./Todolist";

//1. Давайте создадим кнопку «УДАЛИТЬ ВСЕ ЗАДАЧИ» и разместим ее над кнопками фильтра.
//Нажатие на кнопку удаляет все задачи
//2. Давайте создадим четвертую кнопку фильтра — если вы нажмете на нее, отобразятся первые три задачи.
//3. Переместите все, что связано с фильтрами, в компонент Todolist.tsx. Сделай так, чтобы это работало
//
// let [filter, setFilter] = useState<FilterValuesType>("all");
//
// let tasksForTodolist = tasks;
//
// if (filter === "active") {
//     tasksForTodolist = tasks.filter(t => t.isDone === false);
// }
// if (filter === "completed") {
//     tasksForTodolist = tasks.filter(t => t.isDone === true);
// }
//
// function changeFilter(value: FilterValuesType) {
//     setFilter(value);
// }
export type FilterValuesType = "all" | "active" | "completed" | "three";

type TaskType = { id: number, title: string, isDone: boolean }

function App() {

    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]);


    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function removeAllTasks() {
        setTasks([])
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      removeAllTasks={removeAllTasks}
                      />
        </div>
    );
}

export default App;


//-------------------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
//
//
// export type FilterValuesType = "all" | "active" | "completed" | "three";
//
// function App() {
//
//     let [tasks, setTasks] = useState([
//         {id: 1, title: "HTML&CSS", isDone: true},
//         {id: 2, title: "JS", isDone: true},
//         {id: 3, title: "ReactJS", isDone: false},
//         {id: 4, title: "Rest API", isDone: false},
//         {id: 5, title: "GraphQL", isDone: false},
//     ]);
//
//     const deleteAllTasks = () => {
//         setTasks([])
//     }
//
//     function removeTask(id: number) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     // let [filter, setFilter] = useState<FilterValuesType>("all");
//     //
//     // let tasksForTodolist = tasks;
//     //
//     // if (filter === "active") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === false);
//     // }
//     // if (filter === "completed") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === true);
//     // }
//     //
//     // function changeFilter(value: FilterValuesType) {
//     //     setFilter(value);
//     // }
//
//     return (
//         <div className="App">
//             <Todolist
//                 title="What to learn"
//                 tasks={tasks}
//                 removeTask={removeTask}
//                 //changeFilter={changeFilter}
//                 deleteAllTasks={deleteAllTasks}
//
//             />
//         </div>
//     );
// }
//
// export default App;