const time =['09:00', '11:00', '12:30', '14:00', '16:45']
const todo =['수업', '과제', '점심식사', '주간회의', '자료조사']

/*
        위의 2개의 배열을 객체 배열 1개로 변경.
        {time: '09:00', todo: '과제'}
*/
// 비어있는 배열에 새로운 요소를 추가 : push() 메소드 활용
const schedule = []
for (let i=0;i<time.length; i++) {
    let newItem = {time:time[i], todo:todo[i]}
    //속성이름 : 값
    schedule.push(newItem)
}


// const schedule = [
//     {time: '09:00', todo: '수업'}, 
//     {time: '11:00', todo: '과제'}, 
//     {time: '12:30', todo: '점심식사'}, 
//     {time: '14:00', todo: '주간회의'}, 
//     {time: '16:45', todo: '자료조사'}
// ]


// printColumn 에 work 라는 값을 입력 work는 아직 입력없음
function printColumn /*바꿔도됨*/ (work/*바꿔도됨2*/) {
    const tr = document.createElement('tr')
    for(let key in work/*바꿔도됨2*/) {
        const td = document.createElement('td')
        td.textContent = work/*바꿔도됨2*/[key]   //속성 이름 key에 저장. key 속성의 값을 가져옴.
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

    //71번 misson40~47번줄로 공략

    //'DomContentLoaded' 이벤트 사용할 때에는 모든 리스너를
    //'DomContentLoaded' 이벤트 안에 작성합니다.
    const newBtn = document.getElementById('newBtn')
newBtn.addEventListener('click', ()=>{
    // 입력값 가져와서 newItem 객체 만들기
    const newTime = document.getElementById('newTime').value
    const newTodo = document.getElementById('newTodo').value
    const newItem = {time : newTime, todo : newTodo}
    // printRow 실행하여 tr 전달 받기 - 새로운 일정 tr (행) 만들기
    const newTr = printColumn(newItem)
    // tr을 table에 추가
    schedule.push(newItem) //스케줄 배열에 새로운 일정 추가

    // 스케줄 배열을 time 속성 순서로 정렬
 schedule.sort((a, b) => a.time.localeCompare(b.time))
    //         ㄴ a, b 는 2개의 객체. 2개의 객체 time 속성비교.
    //          ㄴ a.todo.localeCompare(b.todo) 는 todo 속성값으로 정렬

    // newTr 을 table에 추가 -> 정렬된 schedule 배열로 table 다시만들기
    //??misson
    table.innerHTML=`<tr>
    <th>시간</th>
    <th>할일</th>
    </tr>`
    schedule.forEach(work/*바꿔도됨2*/ => {
        const trResult/*바꿔도됨3*/ = printColumn(work/*바꿔도됨2*/)
        table.appendChild(trResult/*바꿔도됨3*/)
    })
        
        
    console.log('새 스케줄 추가 후 : ', schedule)
})
  // newBtn.addEventListener 의 끝
})  //document.addEventListener 의 끝


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