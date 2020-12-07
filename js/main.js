function tktNum() {
    if (document.getElementsByClassName('ticketnumber')[10].children[1].className.indexOf(document.itemsCheck.tktNumList.value) != -1) {
        document.getElementsByClassName('ticketnumber')[0].style.display = 'grid'
        document.getElementsByClassName('ticketnumber')[10].style.display = 'grid'
        if (document.getElementsByClassName('newticketnumber')[0].className.indexOf(document.getElementById('refundType').value) != -1) {
            document.getElementsByClassName('newticketnumber')[0].style.display = 'grid'
        } else {
            document.getElementsByClassName('newticketnumber')[0].style.display = 'none'
        }

        for (let i = 1; i < document.getElementsByClassName('ticketnumber')[0].children.length; i++) {
            if (document.getElementsByClassName('ticketnumber')[0].children[i].className.indexOf(document.itemsCheck.tktNumList.value) != -1) {
                document.getElementsByClassName('ticketnumber')[0].children[i].style.display = 'grid'
                document.getElementsByClassName('newticketnumber')[0].children[i].style.display = 'grid'
            } else {
                document.getElementsByClassName('ticketnumber')[0].children[i].style.display = 'none'
                document.getElementsByClassName('newticketnumber')[0].children[i].style.display = 'none'
            }
        }
    } else {
        document.getElementsByClassName('ticketnumber')[0].style.display = 'none'
        document.getElementsByClassName('ticketnumber')[10].style.display = 'none'
        document.getElementsByClassName('newticketnumber')[0].style.display = 'none'
        document.getElementsByClassName('newticketnumber')[10].style.display = 'none'
    }
}


function emdNum() {
    for (let i = 1; i < document.getElementsByClassName('emdnumber')[0].children.length; i++) {
        if (document.getElementsByClassName('emdnumber')[0].children[i].className.indexOf(document.itemsCheck.emdNumList.value) != -1) {
            document.getElementsByClassName('emdnumber')[0].children[i].style.display = 'grid'
        } else {
            document.getElementsByClassName('emdnumber')[0].children[i].style.display = 'none'
        }
    }
}





    


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




function findOption() {
    for (let i = 0; i < document.querySelectorAll('div').length; i++) {
        let a = document.querySelectorAll('div')[i].lastElementChild.id
        if (document.querySelectorAll('div')[i].className.indexOf(document.itemsCheck.refundType.value) != -1) {
            if (a === 'fqq' || a === 'newtax' || a === 'result' || a === 'ticket' || a === 'but') {
                document.querySelectorAll('div')[i].style.display = 'grid'
                document.querySelectorAll('select')[1].style.display = 'grid'
                document.querySelectorAll('select')[2].style.display = 'grid'
            } else {
                document.querySelectorAll('div')[i].style.display = 'grid'
                document.querySelectorAll('select')[1].style.display = 'grid'
                document.querySelectorAll('select')[2].style.display = 'grid'
            }
        } else {
            document.querySelectorAll('div')[i].style.display = 'none'
        }
    }
}

