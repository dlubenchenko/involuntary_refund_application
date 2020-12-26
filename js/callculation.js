



// parser glory
function glory() {
    const gloryAll = document.getElementById('glory').value.split(/\n/gi)
    // console.log(gloryAll)
    let gloryParse = ''

    for (let i = 0; i < gloryAll.length; i++) {
        const el = gloryAll[i].split(' ');
        const a = new Date(el[4]).toString().split(' ')
        const b = new Date(el[5]).toString().split(' ')
        // console.log(el)
        // console.log(a)
        gloryParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(-2)} ${el[1]}${el[2]} ${a[4].split(':').join('').slice(0, 4)} ${b[4].split(':').join('').slice(0, 4)} ${b[2]}${b[1].toUpperCase()}${b[3].slice(-2)}\n`
        // console.log(gloryParse)
        document.querySelector('.result').value = gloryParse
    }
}





// parser kiwi
function kiwi() {
    const kiwiAll = document.getElementById('kiwi').value.split(/\n/gi)
    // console.log(kiwiAll, kiwiAll.length / 3)
    let kiwiToFilter = []
    let kiwiParse = ''
    let z = 0


    // мощь
    for (let i = 0; i < kiwiAll.length / 15; i++) {
        kiwiToFilter[i] = kiwiAll.slice((i * 15), (i * 15) + 15);
    }
    // console.log(kiwiToFilter)





    for (let i = 0; i < kiwiToFilter.length; i++) {
        const el = kiwiToFilter[i]
        // console.log(el)
        kiwiParse += `${el[10].replace(' ','')} ${el[1].toUpperCase().slice(-6).replace(/ /g,'').length < 5 ? '0' + el[1].toUpperCase().slice(-6).replace(/ /g,'') : el[1].toUpperCase().slice(-6).replace(/ /g,'')} ${el[3]}${el[14]} ${el[0].replace(':','')} ${el[11].replace(':','')} ${el[12].toUpperCase().slice(-6).replace(/ /g,'').length < 5 ? '0' + el[12].toUpperCase().slice(-6).replace(/ /g,'') : el[12].toUpperCase().slice(-6).replace(/ /g,'')}\n`
        document.querySelector('.result').value = kiwiParse
    }
    document.querySelector('.result').value = kiwiParse
}






// parser arystan
function arystan() {
    const arystanAll = document.getElementById('arystan').value.split(/\n/gi)
    // console.log(arystanAll)
    let arystanParse = ''

    for (let i = 0; i < arystanAll.length; i++) {
        const el = arystanAll[i].split(' ');
        const a = new Date(el[2].split('.').reverse()).toString().split(' ')
        // console.log(el)
        // console.log(a)
        arystanParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(-2)} ${el[1].replace('-','')} ${el[3].replace(':','')} ${el[5].replace(':','')}\n`
        // console.log(arystanParse)
        document.querySelector('.result').value = arystanParse
    }

}









function partial() {
    const involDt = 'INV RF DT ',
        doi = 'DOI - ',
        tkt = 'TKT - ',
        newTkt = 'NEWTKT - ',
        emdNum = 'EMD - ',
        reissue = 'REISSUE-0',
        farePaid = 'FARE PAID',
        farePaidAdd = 'FARE PAID + ADD PAID',
        tktPrice = 'TKT PRICE',
        totRef = 'TOT TO REF',
        fpCahsCc = 'FP CC + FP CASH',
        fareUsd = 'FARE USED',
        taxToRef = 'TAX TO REF'

    const taxesFqq = document.querySelector('#fqq').value
        .replace(/\n/g, ' ')
        .split(' ')


    let currencyAll
    let bsrAll


    const info = document.querySelector('#ticket textarea').value
    let allTaxes = []
    const roe = document.querySelector('#roe').value = +info
        .split(/\n/gi)
        .filter(key => key.indexOf('ROE') !== -1)
        .join()
        .split(' ')
        .filter(key => key.slice(0, 3).indexOf('ROE') !== -1)
        .toString()
        .replace(/ROE/, '')
    console.log('ROE', +roe)

    if (info.indexOf('DOI') !== -1) {
        const currency = info
            .split(/\n/gi)
            .filter(key => key.indexOf('TOTAL') !== -1)
            .join()
            .split(' ')
            .slice(1, 2)
            .toString()
        console.log('currency'.toUpperCase(), currency)

        const infoAmadeus = info
            .split(/\n/gi)
            .filter(key => key.indexOf('TX') !== -1)
            .join()
            .replace(/,/g, ' ')
            .split(' ')
            .filter(tax => tax != '' && tax.indexOf(currency) && tax.slice(0, 2).indexOf('TX'))
            .map(tax => {
                return {
                    name: tax.slice(-2),
                    value: Number(tax.slice(0, -2))
                }
            })
        // console.log('infoAmadeus', infoAmadeus)

        const bsr = info
            .split(/\n/gi)
            .filter(key => key.indexOf('BSR') !== -1)
            .join()
            .split(' ')
        // console.log('bsr', bsr)
        console.log('BSR', +bsr[bsr.length - 1].toString())

        const fare = info
            .split(/\n/gi)
            .filter(key => key.indexOf('FARE') !== -1)
            .join()
            .split(' ')
        console.log('FARE', +fare[fare.length - 1].toString())

        allTaxes = infoAmadeus
        currencyAll = currency
        bsrAll = document.querySelector('#bsr').value = +bsr[bsr.length - 1].toString()
    } else {
        const currency = info
            .split(/\n/gi)
            .filter(key => key.indexOf('TOTAL') !== -1)
            .join()
            .split(' ')
            .filter(key => key != '')
        // console.log('currency'.toUpperCase(), currency[currency.length - 1].toString().slice(0, 3))

        const infoSabre = info
            .split(/\n/gi)
            .filter(key => key.indexOf('TAX') !== -1)
            .join()
            .replace(/\n/g, ' ')
            .replace(/,/g, ' ')
            .split(' ')
            .filter(tax => tax != '' && tax.indexOf(currency[currency.length - 1].toString().slice(0, 3)) && tax.slice(0, 3).indexOf('TAX') && tax.indexOf('FARE') && tax.indexOf(currency))
            .map(tax => {
                return {
                    name: tax.slice(-2),
                    value: Number(tax.slice(0, -2))
                }
            })

        // console.log('infoSabre', infoSabre)
        allTaxes = infoSabre
        currencyAll = currency
        bsrAll = bsr
    }
    // фільтр FQQ такс
    const allTaxesFqq = taxesFqq
        .filter(tax => tax != '' && tax.slice(-2).indexOf('YQ') && tax.slice(-2).indexOf('YR') && tax.indexOf(currencyAll))
        .map(tax => {
            return {
                name: tax.slice(-2),
                value: Number(tax.slice(0, -3))
            }
        })
    // пошук одинакових
    const filtertax = (taxValue) => {
        i = 0
        j = 1
        while (i < taxValue.length) {
            while (j < taxValue.length) {
                if (taxValue[i].name === taxValue[j].name) {
                    taxValue[i].value += taxValue[j].value
                    taxValue[j].name = ''
                    taxValue[j].value = ''
                }
                j++
            }
            i++
            j = i + 1
        }
    }
    // виклик фільтру
    filtertax(allTaxesFqq)
    filtertax(allTaxes)

    // видалення пустих значень всіх такс
    const filteredAllTaxes = allTaxes
        .filter(tax => tax.name != '')
        .map(tax => {
            return {
                name: tax.name,
                value: Number(tax.value.toFixed(2))
            }
        })
    console.log('filteredAllTaxes', filteredAllTaxes)


    // видалення пустих значень FQQ такс
    const filteredAllTaxesFqq = allTaxesFqq
        .filter(tax => tax.name != '')
    console.log('filteredAllTaxesFqq', filteredAllTaxesFqq)


    // всі такси - FQQ такси = такси до повернення
    let result = filteredAllTaxes
        .map(tax => {
            for (let i = 0; i < filteredAllTaxesFqq.length; i++) {
                if (tax.name === filteredAllTaxesFqq[i].name) {
                    return {
                        name: tax.name,
                        value: tax.value - filteredAllTaxesFqq[i].value
                    }
                }
            }
            return {
                name: tax.name,
                value: tax.value
            }
        })
        .filter(tax => tax.value > 0)
        .map(tax => {
            if (tax.name === 'YR') {
                return {
                    name: tax.name,
                    value: +(tax.value - +document.querySelector('#yr').value).toFixed(2)
                }
            }
            if (tax.name === 'YQ') {
                return {
                    name: tax.name,
                    value: +(tax.value - +document.querySelector('#yq').value).toFixed(2)
                }
            }
            return {
                name: tax.name,
                value: +tax.value
            }
        })

    console.log('result', result)

    let resultTax = []
    for (let i = 0; i < result.length; i++) {
        resultTax.push(result[i].value.toFixed(2) + result[i].name)
        // console.log(result[i].value + result[i].name)
    }
    console.log(resultTax.join(' / '))

    if (filteredAllTaxesFqq.length > 0) {
        for (let i = 0; i < result.length; i++) {
            document.querySelectorAll('.taxes')[i].style.display = 'grid'
            document.querySelectorAll('.taxes')[i].value = result[i].value + ' ' + result[i].name
        }
    }
    // розстановка такс окремо


    // такси окремо в строку
    const taxRef = result.map((key) => {
        return (key.value + key.name)
    })

    // сумма такс
    const sumTax = document.querySelector('#taxtoref').value = result
        .map((key) => {
            return key.value
        })
        .reduce((acc, key) => {
            return acc + key
        }, 0)
        .toFixed(2)
    console.log(sumTax)



    // використанний/до повернення тариф/такси / розрахунки
    let fare = +document.querySelector('#eqv').value
    let nuc = +document.querySelector('#nuc').value
    let fareUsed = document.querySelector('#fareused').value = currencyAll != 'UAH' && currencyAll != 'RUB' && currencyAll != 'KZT' ? +(nuc * +roe * +bsrAll).toFixed(2) : Math.ceil(nuc * +roe * +bsrAll)
    let fareRef = fare - fareUsed
    let toRef = document.querySelector('#tottoref').value = currencyAll != 'UAH' && currencyAll != 'RUB' && currencyAll != 'KZT' ? (fareRef + +sumTax).toFixed(2) : Math.ceil(fareRef + +sumTax)
    let fp = document.querySelector('#fp').value
    let fpChoice = document.querySelector('#fp').value != 'FP CC + FP CASH' ? fp + ' ' + toRef : 'FP CC ' + (toRef - +document.querySelector('#cash').value) + currencyAll + ' ' + 'FP CASH ' + document.querySelector('#cash').value + currencyAll
    console.log(currencyAll)
    console.log(fareRef)
    console.log(fareUsed)


    let relustCallculation = document.querySelector('#callculation').value = `${fareUsd} ${fareUsed}${currencyAll} / ${taxToRef} ${resultTax.join(' ')} (${sumTax}${currencyAll}) / TO REF ${fpChoice}`

}