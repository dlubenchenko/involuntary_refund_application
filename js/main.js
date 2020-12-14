function findFp() {
    for (let j = 0; j < document.getElementsByClassName('fp').length; j++) {
        if (document.getElementById('fp').value === 'FP CASH') {
            document.getElementsByClassName('cash')[0].style.display = 'grid'
            document.getElementsByClassName('cc')[0].style.display = 'none'
        } else if (document.getElementById('fp').value === 'FP CC') {
            document.getElementsByClassName('cc')[0].style.display = 'grid'
            document.getElementsByClassName('cash')[0].style.display = 'none'
        } else if (document.getElementById('fp').value === 'FP CC + FP CASH') {
            document.getElementsByClassName('cc')[0].style.display = 'grid'
            document.getElementsByClassName('cash')[0].style.display = 'grid'
        } else {
            document.getElementsByClassName('cc')[0].style.display = 'none'
            document.getElementsByClassName('cash')[0].style.display = 'none'
        }
    }
}

function option() {

    const numOfTkt = document.querySelectorAll('.ticketnumber')
    const numOfNewTkt = document.querySelectorAll('.newticketnumber')
    const select = document.querySelectorAll('.refund')
    const emd = document.querySelectorAll('.emdnumber')


    select.forEach((key) => {
        if (key.className.indexOf(document.itemsCheck.refundType.value) != -1) {
            key.classList.add('refund-active')
            numOfNewTkt.forEach((ntkey) => {
                if ('refund2 refund3 refund4 refund6 refund7'.indexOf(document.itemsCheck.refundType.value) != -1) {
                    if (ntkey.className.indexOf(document.itemsCheck.tktNumList.value) != -1) {
                        ntkey.classList.add('ticket-active')
                        document.getElementById('newticketnumber').classList.add('refund-active')
                        document.getElementById('newticketdoi').classList.add('refund-active')
                    } else {
                        ntkey.classList.remove('ticket-active')
                        document.getElementById('newticketnumber').classList.remove('refund-active')
                        document.getElementById('newticketdoi').classList.remove('refund-active')
                    }
                }
            })
            numOfTkt.forEach((tkey) => {
                if (tkey.className.indexOf(document.itemsCheck.tktNumList.value) != -1) {
                    tkey.classList.add('ticket-active')
                    document.getElementById('ticketnumber').classList.add('refund-active')
                    document.getElementById('ticketdoi').classList.add('refund-active')
                } else {
                    tkey.classList.remove('ticket-active')
                    document.getElementById('ticketnumber').classList.remove('refund-active')
                    document.getElementById('ticketdoi').classList.remove('refund-active')
                }
            })
            if (document.querySelectorAll('.emdnumber')[1].className.indexOf(document.itemsCheck.emdNumList.value) != -1) {
                document.getElementById('emdnumber').classList.add('refund-active')
                document.getElementById('emddoi').classList.add('refund-active')
                emd.forEach((key) => {
                    if (key.className.indexOf(document.itemsCheck.emdNumList.value) != -1) {
                        key.classList.add('ticket-active')
                    } else {
                        key.classList.remove('ticket-active')
                    }
                })
            } else {
                document.getElementById('emdnumber').classList.remove('refund-active')
                document.getElementById('emddoi').classList.remove('refund-active')
            }
        } else {
            key.classList.remove('refund-active')
        }
    })
}


function info() {
    const involDt = 'inv rf dt '.toUpperCase(),
    doi = 'DOI - ',
    tkt = 'TKT - ',
    newTkt = 'NEWTKT - ',
    emdNum = 'EMD - ',
    cpns = 'CPN TO REF - ',
    reissue = 'REISSUE-0',
    farePaid = 'FARE PAID',
    farePaidAdd = 'FARE PAID + ADD PAID',
    tktPrice = 'TKT PRICE',
    totRef = 'TOT TO REF',
    fpCahsCc = 'FP CC + FP CASH'
    let fareUsed = 'FARE USED'
    const taxToRef = 'TAX TO REF'

    let allInfo = []
    document.querySelectorAll('.info').forEach((key) => {
        allInfo.push({name: key.id, value: key.value})
    })
    console.log(allInfo)

    let ticketsPlusNew = `${allInfo[2].value != '' ? tkt + allInfo[2].value : ''} ${allInfo[2].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[12].value != '' ? newTkt + allInfo[12].value : ''} ${allInfo[12].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[3].value != '' ? tkt + allInfo[3].value : ''} ${allInfo[3].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[13].value != '' ? newTkt + allInfo[13].value : ''} ${allInfo[13].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[4].value != '' ? tkt + allInfo[4].value : ''} ${allInfo[4].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[14].value != '' ? newTkt + allInfo[14].value : ''} ${allInfo[14].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[5].value != '' ? tkt + allInfo[5].value : ''} ${allInfo[5].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[15].value != '' ? newTkt + allInfo[15].value : ''} ${allInfo[15].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[6].value != '' ? tkt + allInfo[6].value : ''} ${allInfo[6].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[16].value != '' ? newTkt + allInfo[16].value : ''} ${allInfo[16].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[7].value != '' ? tkt + allInfo[7].value : ''} ${allInfo[7].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[17].value != '' ? newTkt + allInfo[17].value : ''} ${allInfo[17].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[8].value != '' ? tkt + allInfo[8].value : ''} ${allInfo[8].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[18].value != '' ? newTkt + allInfo[18].value : ''} ${allInfo[18].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[9].value != '' ? tkt + allInfo[9].value : ''} ${allInfo[9].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[19].value != '' ? newTkt + allInfo[19].value : ''} ${allInfo[19].value != '' ? doi + allInfo[21].value + ' /' : ''}${allInfo[10].value != '' ? tkt + allInfo[10].value : ''} ${allInfo[10].value != '' ? doi + allInfo[11].value + ' /' : ''} ${allInfo[20].value != '' ? newTkt + allInfo[20].value : ''} ${allInfo[20].value != '' ? doi + allInfo[21].value + ' /' : ''}`.trimRight()

    let firstReasone = `${allInfo[0].value != '' ? involDt + allInfo[0].value + ' ' + allInfo[1].value + ' / ' : ''}`
    let emd = ``

    document.querySelector('.result').value = `${firstReasone}${ticketsPlusNew}` 
}