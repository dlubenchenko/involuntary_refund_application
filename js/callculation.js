const involDt = 'inv rf dt'.toUpperCase(),
    doi = 'DOI - ',
    tkt = 'TKT - ',
    newTkt = 'NEWTKT - ',
    newTktDoi = 'DOI - ',
    cpns = 'CPN TO REF - ',
    reissue = 'REISSUE-0',
    farePaid = 'FARE PAID',
    farePaidAdd = 'FARE PAID + ADD PAID',
    tktPrice = 'TKT PRICE',
    totRef = 'TOT TO REF',
    fpCahsCc = 'FP CC + FP CASH'
let fareUsed = 'FARE USED'
const taxToRef = 'TAX TO REF'


function twdCallculation() {
    const tempTwdTax = document.querySelectorAll('div')[1].children[0].value
    const twdTax = tempTwdTax
        .replace(/\n/g,' ')
        .replace(/:/g,' ')
        .replace(/-/g,' ')
        .replace(/BSR/g,'BSR ')
        .replace(/ROE/g,'ROE ')
        .split(' ')
        .filter(tax => tax != '')
        
        console.log(twdTax)
        document.forms.ticket1[3].value = twdTax[twdTax.indexOf('TKT')+1]
        document.forms.ticket1[4].value = twdTax.indexOf('DOI') === -1 ? twdTax[twdTax.indexOf('ISSUED')+1] : twdTax[twdTax.indexOf('DOI')+1]
        document.querySelectorAll('div')[20].lastElementChild.value = twdTax.indexOf('BSR') === -1 ? 1 : Number(twdTax[twdTax.indexOf('BSR')+1])
        document.querySelectorAll('div')[21].lastElementChild.value = twdTax.indexOf('ROE') === -1 ? 1 : +twdTax[twdTax.indexOf('ROE')+1]

        let allInfo = {}
for (let i = 0; i < document.forms.ticket1.querySelectorAll('div').length; i++) {
    let temp = document.forms.ticket1.querySelectorAll('div')[i].lastElementChild.id
    allInfo[temp] = document.forms.ticket1.querySelectorAll('div')[i].lastElementChild.value
    }
    document.forms.itemsCheck.querySelectorAll('div')[0].children[0].value = `${involDt} ${allInfo.cancelledflight} ${allInfo.reason} / ${tkt}${allInfo.ticketnumber}`
    console.log(allInfo)
}






 // parser glory
function glory() {
    const gloryAll = document.getElementById('glory').value.split(/\n/gi)
    console.log(gloryAll)
    let gloryParse = ''

    for (let i = 0; i < gloryAll.length; i++) {
        const el = gloryAll[i].split(' ');
        const a = new Date(el[4]).toString().split(' ')
        const b = new Date(el[5]).toString().split(' ')
        console.log(el)
        console.log(a)
        gloryParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(-2)} ${a[4].split(':').join('').slice(0, 4)} ${b[4].split(':').join('').slice(0, 4)} ${b[2]}${b[1].toUpperCase()}${b[3].slice(-2)}\n`
        console.log(gloryParse)
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
    for (let i = 0; i < kiwiAll.length / 15; i++){
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
    const findTaxes = document.querySelector('.ticket textarea').value
        .replace(/\n/g,' ')
        .split(' ')
    const taxesFqq = document.querySelector('#fqq').value
        .replace(/\n/g,' ')
        .split(' ')
    const bsr = +document.querySelector('#bsr').value,
        roe = +document.querySelector('#roe').value,
        nuc = +document.querySelector('#nuc').value,
        fare = +document.querySelector('#farepaid').value
        // console.log(findTaxes)
    // console.log(findTaxes)
    // console.log(taxesFqq)
    let currency = taxesFqq[0]
    console.log(currency)

    // фільтр всіх такс
    let allTaxes = findTaxes
        .filter(tax => tax != '' && tax.indexOf('TX') && tax.indexOf(currency))
        .map(tax => {
            return {
                name: tax.slice(-2),
                value: Number(tax.slice(0, -2))
            }
        })
    // console.log(allTaxes)

    // фільтр FQQ такс
    const allTaxesFqq = taxesFqq
        .filter(tax => tax != '' && tax.slice(-2).indexOf('YQ') && tax.slice(-2).indexOf('YR') && tax.indexOf(currency))
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


    // розстановка такс окремо
    for (let i = 0; i < result.length; i++) {
        document.querySelectorAll('.taxes')[i].style.display = 'grid'
        document.querySelectorAll('.taxes')[i].value = result[i].value + ' ' + result[i].name
    }

    // такси окремо в строку
    const taxRef = result.map((key) => {
        return (key.value + key.name)
    })

    // сумма такс
    const sumTax = document.querySelector('#taxtoref').value = result.map((key) => {
        return key.value
    }).reduce((acc, key) => {
        return acc + key
    }, 0).toFixed(2)
    // console.log(sumTax)



    // використанний/до повернення тариф/такси / розрахунки
    const usedFare = document.querySelector('#fareused').value = (nuc * roe * bsr).toFixed(2)
    const fareRef = +fare - (+usedFare).toFixed(2)
    const totalToRef = document.querySelector('#tottoref').value = (+fareRef + +sumTax).toFixed(2)
    // console.log(usedFare)
    // console.log(fareRef)
    // console.log(sumTax)
    // console.log(totalToRef)


}
