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
        allInfo.push({
            name: key.id,
            value: key.value
        })
    })
    // console.log(allInfo)

    const involDt = 'INV RF DT ',
        doi = 'DOI - ',
        tkt = 'TKT - ',
        newTkt = 'NEWTKT - ',
        emdNum = 'EMD - ',
        cpns = `CPN TO REF - ${allInfo[32].value}`,
        reissue = 'REISSUE-0',
        farePaid = 'FARE PAID',
        farePaidAdd = 'FARE PAID + ADD PAID',
        tktPrice = 'TKT PRICE',
        totRef = 'TOT TO REF',
        fpCahsCc = 'FP CC + FP CASH',
        fareUsed = 'FARE USED',
        taxToRef = 'TAX TO REF'

    const tktNum = [
        [],
        [],
        [],
        []
    ]
    for (let i = 0; i < allInfo.length; i++) {
        const el = allInfo[i];
        if (el.name.slice(0, 6) === 'ticket' && el.value != '') {
            tktNum[1].push(`${tkt}${el.value.trim()} ${doi}${allInfo[11].value.trim()}`)
        }
        if (el.name.slice(0, 15) === 'newticketnumber' && el.value != '') {
            tktNum[2].push(`${newTkt}${el.value.trim()} ${doi}${allInfo[21].value.trim()}`)
        }
        if (el.name.slice(0, 9) === 'emdnumber' && el.value != '') {
            tktNum[3].push(`${emdNum}${el.value.trim()} ${doi}${allInfo[31].value.trim()}`)
        }
    }

    tktNum[0].push(`${involDt}${allInfo[0].value.trim()} ${allInfo[1].value}`)

    if ('refund5 refund6 refund7'.indexOf(document.itemsCheck.refundType.value) != -1) {
        if (tktNum[2].length > 0) {
            for (let i = 0; i < tktNum[1].length; i++) {
                const el = tktNum[1][i];
                tktNum[0].push(tktNum[1][i])
                tktNum[0].push(tktNum[2][i])
                tktNum[0].push(`${cpns}`)
                tktNum[0].push(`Розрахунки ${i + 1} - квитка`)
            }
        } else {
            for (let i = 0; i < tktNum[1].length; i++) {
                const el = tktNum[1][i];
                tktNum[0].push(tktNum[1][i])
                tktNum[0].push(`${cpns}`)
                tktNum[0].push(`Розрахунки ${i + 1} - квитка`)
            }
        }
    } else if ('refund1 refund2'.indexOf(document.itemsCheck.refundType.value) != -1) {
        if (tktNum[2].length > 0) {
            for (let i = 0; i < tktNum[1].length; i++) {
                const el = tktNum[1][i];
                tktNum[0].push(tktNum[1][i].trim())
                tktNum[0].push(tktNum[2][i].trim())
                tktNum[0].push(`${allInfo[45].value}`)
            }
        } else {
            for (let i = 0; i < tktNum[1].length; i++) {
                const el = tktNum[1][i];
                tktNum[0].push(tktNum[1][i])
                tktNum[0].push(`${allInfo[45].value}`)
            }
        }
    } else if ('refund3 refund4'.indexOf(document.itemsCheck.refundType.value) != -1) {
        if (tktNum[2].length > 0) {
            for (let i = 0; i < tktNum[1].length; i++) {
                const el = tktNum[1][i];
                tktNum[0].push(tktNum[1][i])
                tktNum[0].push(tktNum[2][i])
                tktNum[0].push(`Розрахунки ${i + 1} - квитка`)
            }
        } else {
            for (let i = 0; i < tktNum[1].length; i++) {
                const el = tktNum[1][i];
                tktNum[0].push(tktNum[1][i])
                tktNum[0].push(`Розрахунки ${i + 1} - квитка`)
            }
        }
    }

    if (tktNum[3].length > 0) {
        for (let i = 0; i < tktNum[3].length; i++) {
            tktNum[0].push(tktNum[3][i])
            tktNum[0].push(`${allInfo[45].value}`)
        }
    }
    



    console.log(tktNum)

    var result = document.querySelector('.result').value = `${tktNum[0].join(' / ')}`


}


function clearAll() {
    const inputs = document.querySelectorAll('#ticket input')
    inputs.forEach(key => key.value = '')
    const taxesInputs = document.querySelectorAll('.taxes')
    taxesInputs.forEach(key => key.style.display = 'none')

    const textarea = document.querySelectorAll('ticket textarea')
    textarea.forEach(key => key.value = '')

    const select = document.querySelectorAll('#ticket select')
    select.forEach(key => key.value = '')

    const textareaTkt = document.querySelectorAll('#itemsCheck textarea')
    textareaTkt.forEach(key => key.value = '')

    const textareaInfo = document.querySelectorAll('#ticket textarea')
    textareaInfo.forEach(key => key.value = '')

    const block = document.querySelectorAll('.refund')
    block.forEach(key => key.classList.remove('refund-active'))
    document.getElementsByClassName('cc')[0].style.display = 'none'
    document.getElementsByClassName('cash')[0].style.display = 'none'
    document.querySelector('#emdNumList').value = 'Кількість EMD'
    document.querySelector('#tktNumList').value = 'ticket0'
    document.querySelector('#refundType').value = 'Оберіть тип повернення'
}



















// function twdCallculation() {
//     const tempTwdTax = document.querySelector('textarea#ticket').value
//     const twdTax = tempTwdTax
//         .replace(/\n/g,' ')
//         .replace(/:/g,' ')
//         .replace(/-/g,' ')
//         .replace(/BSR/g,'BSR ')
//         .replace(/ROE/g,'ROE ')
//         .split(' ')
//         .filter(tax => tax != '')
//         .forEach((key, i) => {
//             if (key === 'BSR') {
//                 i++
//                 console.log()
//             } 
//             if (key === 'ROE') {
//                 ++i
//                 console.log(key)
//             }
//         })

//         console.log(twdTax)



// }