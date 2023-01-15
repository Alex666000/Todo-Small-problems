import React from "react";
import "./App.css";

// Привет, друзья!
// Давайте усилим нашу текущую сессию!
// -У вас есть 2 массива. Вам следует создать новый компонент TASKS, в котором вы будете рендерить эти массивы.
// -Не забудьте присвоить нашим данным типы.

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}
type DataType = {
    title: string
    tasks: TaskType[]
    students: string[]
}

function App() {

    const data1 = {
        title: "What to do",
        tasks: [
            {taskId: 1, title: "HTML&CSS2", isDone: true},
            {taskId: 2, title: "JS2", isDone: true}
        ],
        students: [
            "Jago Wormald1",
            "Saul Milne2",
            "Aariz Hester3",
        ]
    }
    const data2 = {
        title: "What to learn",
        tasks: [
            {taskId: 1, title: "HTML&CSS", isDone: true},
            {taskId: 2, title: "JS", isDone: true}
        ],
        students: [
            "Rick Kane",
            "Finnlay Bentley",
        ]
    }
    return (
        <div>
            <Tasks data={data1}/>
            <Tasks data={data2}/>
        </div>
    )
}

type TasksPropsType = {
    data: DataType
}

const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                <li>{props.data.tasks.map((task) => {
                    return (
                        <li>
                            <span>{task.taskId}</span>
                            <span>{task.title}</span>
                            <span>{task.isDone}</span>
                        </li>
                    )
                })}</li>
            </ul>
            <ul>
                <li>{props.data.students.map(student =>
                    <li>{student}</li>)}</li>
            </ul>
        </div>
    )
}

export default App;

//--------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Tasks} from "./Tasks";
//
// export type DataType = {
//     title: string
//     tasks: Array<TasksType>
//     students: Array<string>
// }
// export type TasksType = {
//     taskId: number
//     title: string
//     isDone: boolean
// }
//
//
// function App() {
//     const data1= {
//         title: "What to do",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS2", isDone: true},
//             {taskId: 2, title: "JS2", isDone: true}
//         ],
//         students: [
//             'Jago Wormald1',
//             'Saul Milne2',
//             'Aariz Hester3',
//             'Dion Reeve4',
//             'Anisa Ortega5',
//
//         ]
//     }
//     const data2 = {
//         title: "What to learn",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS", isDone: true},
//             {taskId: 2, title: "JS", isDone: true}
//         ],
//         students: [
//             'Rick Kane',
//             'Finnlay Bentley',
//     }
//
//     return (
//         <div className="App">
//             <Tasks data={data1}/>
//             <Tasks data={data2}/>
//         </div>
//     );
// }
//
// export default App;

// import React from 'react';
// import {DataType} from "./App";
//
// type  TasksPropsType = {
//     data: DataType
// }
//
// export const Tasks = (props: TasksPropsType) => {
//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

//--------------------------------------------------------------
