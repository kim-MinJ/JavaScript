//https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-video

const REST_API_KEY ='7e9fadefd5ef8460bc84f062071acff5'
const headers = {
    method : 'GET',
    headers : {Authorization: `KakaoAK ${REST_API_KEY}`}
}

const query = 'twice'
const url = `https://dapi.kakao.com/v2/search/vclip?query=${query}`

let result
async function loadData() {
try { 
    const response = await fetch(url, headers)
    const data = await response.json()
    console.log(data);
    result = data
}     catch (error) { 
    console.error('오류 :', error)}
}
await loadData()
console.log('result :', result)
console.log('result :', result.documents[0].image_url)



    function printImage(docs, pos, count) {  //임의로 정한 변수(인자)
        const ul = document.getElementById('kakaoImg')
        for(let i=pos; i < pos + count; i++) {
            console.log(docs[i].image_url)
            const li = document.createElement('li')
            li.innerHTML = `<img src="${docs[i].image_url}" width="400px" height="400px">`
            ul.appendChild(li)
        }
    }