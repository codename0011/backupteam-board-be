//const 가격 = 10000 // 소비자가격
//const 원화 = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(가격) + "원"
//let 세금 = 가격 / 11 * 10
//세금 = Math.round(세금)
//세금 = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(세금)
//세금 = 세금 + "원"
//let 원가 = 가격 / 11
//원가 =  Math.round(원가)
//원가 = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(원가)
//원가 = 원가 + "원"



const cur통화 = {
    en : {
        format : "en-US",
        currency  : "USD"
    },
    kr : {
        format : "kr-KO",
        currency : "KRW"
    }
}

const 가격format = (가격, 나라) => {
    const 나라code = 나라 || "kr"
    const CUR = cur통화[나라code]
    
    const 가격s = new Intl.NumberFormat(CUR.format, { style: 'currency', currency: CUR.currency }).format(가격)

    let 세금 = 가격 / 11 * 10
    세금 = Math.round(세금)
    세금 = new Intl.NumberFormat(CUR.format, { style: 'currency', currency: CUR.currency }).format(세금)
    
    let 원가 = 가격 / 11
    원가 =  Math.round(원가)
    원가 = new Intl.NumberFormat(CUR.format, { style: 'currency', currency: CUR.currency }).format(원가)


    return {
    가격s,
    세금,
    원가,
    }
}

const 가격 = 10000000
console.log(가격format(가격))
console.log(가격format(2222222,"en"))
console.log(가격format(3333333,"en"))
console.log(가격format(4444444))