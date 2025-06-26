//  배열 메소드 연습 (2)
// 1. splice - 배열에 새로운 요소를 추가/삭제
let fruits = ['banana', 'mango', 'orange', 'apple']

fruits.splice(2, 0, 'lemon')
// 2 : 새로운 데이터 'lemon'이 추가될 위치
// 0 : 삭제할 데이터 갯수
// 그 뒤의 값들 : 추가될 데이터

console.log(fruits.toString())
// banana, mango, lemon, orange, apple


fruits = ['banana', 'mango', 'orange', 'apple']
fruits.splice(1,1) //리턴이 없다. 또는 사용 안한다.
// 1: 추가될 위치 인덱스
//  1: 삭제할 데이터 갯수
// 추가할 값 없음.
console.log(fruits.toString()) // fruits 자체가 바뀝니다.
// banana, orange, apple

// 2, slice() : 배열의 특정 부분을 자르기하여 새로운 배열을 생성
fruits = ['banana', 'mango', 'orange', 'apple']
let myfruits =fruits.slice(1,3)  //메소드 결과 리턴이 있다. 리턴이 중요.
// 1 : 시작위치 인덱스
// 3 : 마지막 위치 인덱스(포함 X)
// 자르기한 배열의 갯수 = 3-1 = 2개
console.log(fruits.toString())  // fruits 는 변화가 없음.
console.log(myfruits.toString()) // myfruits 는 새로운 배열

// slice() 의 입력값이 1개 인 경우 - 마지막 인덱스 생략(끝까지)
myfruits = fruits.slice(1)
console.log('aps', myfruits.toString())
// slice() 의 입력값이 음수 인 경우 - 맨뒤 -1부터 접근
myfruits = fruits.slice(-3, -1)
console.log('aps', myfruits.toString())  //'mango'. 'orange'

myfruits = fruits.slice(-1)
console.log('aps', myfruits.toString()) //'apple'

// 3, indexof()
const fruits1 = ['Apple', 'Orange', 'Apple', 'Mango'];
let position = fruits1.indexOf("Apple")
console.log('Apple 의 첫번째 위치:', position)  //0

//4. lastIndexof()
position = fruits1.lastIndexOf("Apple") //2
console.log('Apple 의 마지막 위치:', position)
position = fruits1.lastIndexOf("Lemon") // 없는 값. -1
console.log('Lemon 의 첫번째 위치:', position)

//5. includes()
position = fruits1.includes("Lemon") // 포함되지 않음. false
console.log('Lemon 의 포함여부:', position)

//6. find() : 인자가 콜백함수-참 또는 거짓을 리턴
                // forEach 처럼 배열 요소를 하나씩 가져와 함수에 전달합니다.
                                                // ㄴ 값, 인덱스, 원본배열
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); //함수에 대입한 조건식이 참인 첫번째 값

function myFunction(value, index, array) { //값, 인덱스, 원본배열
return value > 18;
}
console.log('18보다 큰 첫번째 값 :', first) //25
//화살표 함수로 변경
first = numbers.find(value => value > 25 && value <30)
console.log('18보다 큰 첫번째 값 :', first) //29

// 7. findIndex()
first = numbers.findIndex(myFunction)
console.log('18보다 큰 첫번째 값의 인덱스 :', first) //3

// 8.findLast()
last = numbers.findLast(myFunction)
console.log('18보다 큰 마지막 값 :', last) //29

// 9.findLastIndex()
last = numbers.findLastIndex(myFunction)
console.log('18보다 큰 마지막 값 인덱스 :', last) //4