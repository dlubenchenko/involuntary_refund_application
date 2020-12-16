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

    let allInfo = []
    document.querySelectorAll('.info').forEach((key) => {
        allInfo.push({name: key.id, value: key.value})
    })
    // console.log(allInfo)

    const involDt = 'inv rf dt '.toUpperCase(),
    doi = 'DOI - ',
    tkt = 'TKT - ',
    newTkt = 'NEWTKT - ',
    emdNum = 'EMD - ',
    cpns = `/ CPN TO REF - ${allInfo[32].value}`,
    reissue = 'REISSUE-0',
    farePaid = 'FARE PAID',
    farePaidAdd = 'FARE PAID + ADD PAID',
    tktPrice = 'TKT PRICE',
    totRef = 'TOT TO REF',
    fpCahsCc = 'FP CC + FP CASH',
    fareUsed = 'FARE USED',
    taxToRef = 'TAX TO REF'

    let tickets = []
    let newTickets = []
    let emdTickets = []
    allInfo.forEach((key) => {
        if (key.value !== '') {
            if (!(key.name).indexOf('ticket')) {
                tickets.push(tkt + key.value)
            }
            if (!(key.name).indexOf('doiticket')) {
                tickets.push(doi + key.value)
                console.log(tickets)
            }
        }
        if (key.value !== '') {
            if (!(key.name).indexOf('newticketnumber')) {
                newTickets.push(newTkt + key.value)
            }
            if (!(key.name).indexOf('doinewticketnumber')) {
                newTickets.push(doi + key.value)
                console.log(newTickets)
            }
        }
        if (key.value !== '') {
            if (!(key.name).indexOf('emdnumber')) {
                emdTickets += `${emdNum}${key.value} `
            }
            if (!(key.name).indexOf('doiemdnumber')) {
                emdTickets += `${doi}${key.value} /`
                console.log(emdTickets)
            }
        }
    })

    let ticketInfo = ''
    for (let i = 0; i < tickets.length-1; i++) {
        const el1 = tickets[i];
        const el2 = newTickets[i]
        const el3 = emdTickets[i]
        if (newTickets.length === 0) {
            ticketInfo += `${el1} ${tickets[tickets.length-1]} / `
            console.log(ticketInfo)
        } else {
        ticketInfo += `${el1} ${tickets[tickets.length-1]} / ${el2} ${newTickets[tickets.length-1]} / `
        // console.log('ticketInfo', ticketInfo)
        }
    }


    document.querySelector('.result').value = `${involDt}${allInfo[0].value} ${allInfo[1].value}/ ${ticketInfo}${emdTickets} ${allInfo[32].value !=='' ? cpns : ''}${allInfo[45].value}`
    document.querySelector('.callculation').value = `${farePaid} ${allInfo[33].value} /  ${farePaidAdd} ${allInfo[34].value} / ${tktPrice} ${allInfo[35].value} / ${fareUsed} ${allInfo[36].value} / ${taxToRef} ${allInfo[38].value} / ${totRef} ${allInfo[37].value}`
}


function clearAll() {
    const inputs = document.querySelectorAll('#ticket input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
    const textarea = document.querySelectorAll('ticket textarea')
    for (let i = 0; i < textarea.length; i++) {
        textarea[i].value = ''
    }
    const select = document.querySelectorAll('ticket select')
    for (let i = 0; i < select.length; i++) {
        select[i].value = ''
    }
    const textareaTkt = document.querySelectorAll('#itemsCheck textarea')
    for (let i = 0; i < textareaTkt.length; i++) {
        textareaTkt[i].value = ''
    }
}