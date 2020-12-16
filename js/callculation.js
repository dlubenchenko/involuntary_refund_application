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







function arystan() {
    const arystanAll = document.getElementById('arystan').value.split(/\n/gi)
    // console.log(arystanAll)
    let arystanParse = ''

    for (let i = 0; i < arystanAll.length; i++) {
        const el = arystanAll[i].split(' ');
        const a = new Date(el[2].split('.').reverse()).toString().split(' ')
        // console.log(el)
        // console.log(a)
        arystanParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(-2)} ${el[3].replace(':','')} ${el[5].replace(':','')}\n`
        // console.log(arystanParse)
        document.querySelector('.result').value = arystanParse
    }

}