const REST_API_KEY ='7e9fadefd5ef8460bc84f062071afcf5'
const headers = {
    method : 'GET', 
    headers : {Authorization: `KakaoAK ${REST_API_KEY}`}
}
const query = '트와이스'
const url =`https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

// 비동기 함수의 처리를 기다려야 하는 경우를 테스트
// result, result2 변수가 fetch 실행 결과를 받기 위한 예시

let result
// fetch 비동기 함수이므로 await로 실행완료까지 대기
// 이렇게 쓰지 맙시다. => await, then 을 같이 사용하는 것은 추천하지 않는다.
await fetch(url, headers)        
.then(response => {
    console.log('response 수신완료 :', response.status)
    return response.json()
})
.then(data => {
    result = data
    return data
})
.catch(error => console.error('fetch 실패 : ', error))        


let result2
// 정상적인 async/await : await 와 then() 은 함께 사용하면 중복된 의미.
async function loadData2() {
try {  //오류 검사
    const response = await fetch(url, headers)
    const data = await response.json()
    console.log(data);
    result2 = data
}     catch (error) {  // 오류 처리 구문
    console.error('오류 :', error)}
}
await loadData2()
console.log('result2 :', result2)
console.log('result2 :', result2.documents[0].image_url)

//  또는 loadData2().then(() => {   ...   })

/*
// await loadData() 또는
// loadData() 가 비동기  함수가 되었으므로 then 사용하여 처리.
loadData().then(() => {
console.log('result :', result)
console.log('result :', result.documents[0].image_url)    
})
*/