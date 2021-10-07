function redirect(){
	window.location = "https://involuntary-squad.web.app/";
}

let formSelect = document.querySelector('.form-select')
let selected = document.querySelector('.form-select')
let secondBlock = document.querySelector('.second-block')
let thirdBlock = document.querySelector('.third-block')
let fourthBlock = document.querySelector('.fourth-block')

let options = {
	select: ['Парсер', 'Повернення', 'Переоформлення', 'Інфо по АК'],
	0: ['Kiwi', 'GloryHoliday', 'FlyArystan', 'S7', 'SkyUP', 'TUI'],
	1: ['Повне', 'Часткове'],
	2: ['Amadeus', 'Sabre'],
	3: [],
}

let block = `
	<div class="btn-toolbar position-absolute top-50 start-50 translate-middle" role="toolbar">
		<div class="btn-group btn-group delete" role="group">
		</div>
	</div>`

secondBlock.insertAdjacentHTML('afterbegin', block)
let btnGroup = document.querySelector('.btn-group')

options.select.forEach((e, i) => {
	formSelect.insertAdjacentHTML(
		'beforeend',
		`<option value="${i}">${e}</option>`
	)
})

selected.addEventListener('change', () => {
	choiceFilter(thirdBlock)
	choiceFilter(btnGroup)
	choiceFilter(fourthBlock)
	options[selected.value].forEach((e) => {
		btnGroup.insertAdjacentHTML(
			'beforeend',
			`<button type="button" class="btn btn-light">${e}</button>`
		)
	})
})

let choiceFilter = (choice) => {
	while (choice.firstChild) {
		choice.removeChild(choice.firstChild)
	}
}

btnGroup.addEventListener('click', (e) => {
	let textarea = `
	<div class="form-floating mt-3 mb-3">
		<textarea class="form-control parser-field" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
		<label for="floatingTextarea2" class="pl-3"> Вставити строку ${e.path[0].innerText}</label>
	</div>`
	choiceFilter(thirdBlock)
	choiceFilter(fourthBlock)
	if (selected.value === '0') {
		thirdBlock.insertAdjacentHTML('afterbegin', textarea)
	}
	// console.log(e.path[0].innerText)
	parse(e.path[0].innerText)
})

let parse = (a) => {
	let parserField = document.querySelector('.parser-field')
	parserField.addEventListener('change', () => {
		choiceFilter(fourthBlock)
		if (parserField.value.length > 10) {
			switch (a) {
				case 'TUI':
					fourthBlock.insertAdjacentHTML(
						'afterbegin',
						`<div class="m-2">${tui(parserField.value)}</div>`
					)
					break
				case 'SkyUP':
					fourthBlock.insertAdjacentHTML(
						'afterbegin',
						`<div class="m-2">${skyUp(parserField.value)}</div>`
					)
					break
				case 'S7':
					fourthBlock.insertAdjacentHTML(
						'afterbegin',
						`<div class="m-2">${s7(parserField.value)}</div>`
					)
					break
				case 'FlyArystan':
					fourthBlock.insertAdjacentHTML(
						'afterbegin',
						`<div class="m-2">${arystan(parserField.value)}</div>`
					)
					break
				case 'GloryHoliday':
					fourthBlock.insertAdjacentHTML(
						'afterbegin',
						`<div class="m-2">${glory(parserField.value)}</div>`
					)
					break

				case 'Kiwi':
					fourthBlock.insertAdjacentHTML(
						'afterbegin',
						`<div class="m-2">${kiwi(parserField.value)}</div>`
					)
					break
				default:
					break
			}
		}
	})
}
