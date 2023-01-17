const scores = [
    {name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
    {name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234"},
]

//fiter (이름만 반환)
const 보충 = scores.filter(score => score.score < 40)
.map(score => score.name)
console.log(보충)

//find ("지영"의 점수"만" 확인) 구현하기 어려움
const 지영score = scores.find(score => score.name === '지영' )
console.log('지영score : ', 지영score.score)