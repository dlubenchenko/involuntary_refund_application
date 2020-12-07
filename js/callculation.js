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
