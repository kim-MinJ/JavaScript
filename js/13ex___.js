const add = () => {
    console.log(100+1000)
}

const sub = () => {
    return 100-1000;
}

const multiply = (num1, num2) => {
    console.log('num1*num2 : ', num1*num2)
}

const div = (num1, num2) => {
    return num1/num2
}

add()
add()
add()



let result = sub()
console.log('뺄셈', result)
console.log('뺄셈', sub())



multiply(23, 56)
multiply(111, 23)


result = div (77, 13)
console.log('나누기:', result)
console.log('나누기:', div(77,13))
console.log('나눈 결과 소수점:', result.toFixed(3))


// 함수 정의 => 함수 호이스팅(끌어올리기) 가능한 것은 function 사용할때만 가능


