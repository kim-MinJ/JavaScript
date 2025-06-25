// const time =['09:00', '11:00', '12:30', '14:00', '16:45']
// const todo =['수업', '과제', '점심식사', '주간회의', '자료조사']

//     const times = document.getElementById('time')
//     for(let m of time){
//         const th = document.createElement('th')
//         th.textContent=m
//         th.classList.add('red')
//         times.appendChild(th)
//     }

//     const todos = document.getElementById('todo')
//     for(let m of todo){
//         const th = document.createElement('th')
//         th.textContent=m
//         th.classList.add('red')
//         todos.appendChild(th)
//     }

    const time =['09:00', '11:00', '12:30', '14:00', '16:45']
const todo =['수업', '과제', '점심식사', '주간회의', '자료조사']

const timeTB = document.querySelectorAll('tr#time > td')
const todoTB = document.querySelectorAll('tr#todo > td')

for (let i=0; i < time.length; i++) {
    timeTB[I].textContent = time[i]
    todoTB[i].textContent = todo[i]
}