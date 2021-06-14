let formSelect = document.querySelector('.form-select')
let selected = document.querySelector('.form-select')
let secondBlock = document.querySelector('.second-block')
let options = {
	select: ['Парсер', 'Повернення', 'Переоформлення', 'Інфо по АК'],
	0: ['Kiwi', 'GloryHoliday', 'FlyArystan', 'S7', 'SkyUP', 'TUI'],
	1: ['Повне', 'Часткове'],
	2: ['Amadeus', 'Sabre'],
	3: [
		'Зміна часу',
		'Клас',
		'Лист очік.',
		'Інтервал дат',
		'Code-share',
		'Дод. Авториз.',
	],
}

let block = `
	<div class="btn-toolbar" role="toolbar">
		<div class="btn-group top-0 start-50 translate-middle mt-5 mb-0 btn-group delete" role="group">
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
	choiceFilter(btnGroup)
	options[selected.value].forEach((e) => {
		btnGroup.insertAdjacentHTML(
			'afterbegin',
			`<button type="button" class="btn ${selected.value} btn-outline-secondary">${e}</button>`
		)
	})
})

let choiceFilter = (choice) => {
	while (choice.firstChild) {
		choice.removeChild(choice.firstChild)
	}
}
