const time =['09:00', '11:00', '12:30', '14:00', '16:45']
const todo =['수업', '과제', '점심식사', '주간회의', '자료조사']

/*
        위의 2개의 배열을 객체 배열 1개로 변경.
        {time: '09:00', todo: '과제'}
*/

const schedule = [
    {time: '09:00', todo: '수업'}, 
    {time: '11:00', todo: '과제'}, 
    {time: '12:30', todo: '점심식사'}, 
    {time: '14:00', todo: '주간회의'}, 
    {time: '16:45', todo: '자료조사'}
]

// printColumn 에 work 라는 값을 입력 work는 아직 입력없음
function printColumn /*바꿔도됨*/ (work/*바꿔도됨2*/) {
    const tr = document.createElement('tr')
    for(let key in work/*바꿔도됨2*/) {
        const td = document.createElement('td')
        td.textContent = work/*바꿔도됨2*/[key]
        tr.appendChild(td)
    }
    return tr
}

document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root')
    const table = document.createElement('table')
    table.innerHTML=`<tr>
    <th>시간</th>
    <th>할일</th>
    </tr>`
    root.appendChild(table)
    schedule.forEach(work/*바꿔도됨2*/ => {
        const trResult/*바꿔도됨3*/ = printColumn(work/*바꿔도됨2*/)
        table.appendChild(trResult/*바꿔도됨3*/)
    })
})

// function printColumn (work) {
//     const tr = document.createElement('tr')
//     for(let key in work) {
//         const td = document.createElement('td')
//         td.textContent = work[key]
//         tr.appendChild(td)
//     }
//     return tr
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const root = document.getElementById('root')
//     const table = document.createElement('table')
//     table.innerHTML=`<tr>
//     <th>시간</th>
//     <th>할일</th>
//     </tr>`
//     root.appendChild(table)
//     schedule.forEach(work => {
//         const trResult = printColumn(work)
//         table.appendChild(trResult)
//     })
// })