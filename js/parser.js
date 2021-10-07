// parser glory
function glory(value) {
	let gloryAll = value.trim().split(/\n/gi)
	// console.log(gloryAll)
	let gloryParse = ''

	for (let i = 0; i < gloryAll.length; i++) {
		const el = gloryAll[i].split(' ')
		const a = new Date(el[4]).toString().split(' ')
		const b = new Date(el[5]).toString().split(' ')
		// console.log(el)
		// console.log(a)
		try {
			gloryParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(-2)} ${
				el[1]
			}${el[2]} ${a[4].split(':').join('').slice(0, 4)} ${b[4]
				.split(':')
				.join('')
				.slice(0, 4)} ${b[2]}${b[1].toUpperCase()}${b[3].slice(-2)}</br>`
			// console.log(gloryParse)
		} catch (e) {
			return 'incorrect string'
		}
	}
	// console.log(gloryParse)
	return gloryParse
}

// parser kiwi
function kiwi(value) {
	let kiwiAll = value.trim().split(/\n/gi)
	// console.log(kiwiAll, kiwiAll.length / 3)
	let kiwiToFilter = []
	let kiwiParse = ''

	// мощь
	for (let i = 0; i < kiwiAll.length / 15; i++) {
		kiwiToFilter[i] = kiwiAll.slice(i * 15, i * 15 + 15)
	}
	// console.log(kiwiToFilter)
	try {
		for (let i = 0; i < kiwiToFilter.length; i++) {
			const el = kiwiToFilter[i]
			// console.log(el)
			kiwiParse += `${el[10].replace(' ', '')} ${
				el[1].toUpperCase().slice(-6).replace(/ /g, '').length < 5
					? '0' + el[1].toUpperCase().slice(-6).replace(/ /g, '')
					: el[1].toUpperCase().slice(-6).replace(/ /g, '')
			} ${el[3]}${el[14]} ${el[0].replace(':', '')} ${el[11].replace(
				':',
				''
			)} ${
				el[12].toUpperCase().slice(-6).replace(/ /g, '').length < 5
					? '0' + el[12].toUpperCase().slice(-6).replace(/ /g, '')
					: el[12].toUpperCase().slice(-6).replace(/ /g, '')
			}</br>`
		}
	} catch (e) {
		return 'incorrect string'
	}
	// console.log(kiwiParse)
	return kiwiParse
}

// parser arystan
function arystan(value) {
	let arystanAll = value.trim().split(/\n/gi)
	// console.log(arystanAll)
	let arystanParse = ''
	try {
		for (let i = 0; i < arystanAll.length; i++) {
			const el = arystanAll[i].split(' ')
			const a = new Date(el[2].split('.').reverse()).toString().split(' ')
			// console.log(el)
			// console.log(a)
			arystanParse += `${el[0]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(
				-2
			)} ${el[1].replace('-', '')} ${el[3].replace(':', '')} ${el[5].replace(
				':',
				''
			)}</br>`
		}
	} catch (e) {
		return 'incorrect string'
	}
	// console.log(arystanParse)
	return arystanParse
}

// parser TUI
function tui(value) {
	let tuiAll = value.trim().split(/\n/gi)
	let tui = ''

	try {
		for (let i = 0; i < tuiAll.length; i++) {
			const el = tuiAll[i].split(' ')
			const a = new Date(el[3].split('.').reverse()).toString().split(' ')
			// console.log(a)
			// console.log(el)
			tui += `${el[1]}${el[2]} ${a[2]}${a[1].toUpperCase()}${a[3].slice(
				-2
			)} ${el[5].slice(1, -1)}${el[9].slice(1, -1)} ${el[6].replace(
				':',
				''
			)} ${el[10].replace(':', '')}</br>`
		}
	} catch (error) {
		return 'incorrect string'
	}
	return tui
}

// parser SkyUP
function skyUp(value) {
	try {
		let skyUpAll = value.trim().split(/\n/gi)
		let info = [
			skyUpAll[1].slice(skyUpAll[1].indexOf(':'), -1).split(' '),
			skyUpAll[0]
				.split(' ')
				.filter((e) => e.includes('PQ'))
				.toString(),
		]

		let date = new Date(info[0][1].split('/').reverse()).toString().split(' ')
		// console.log(info)
		// console.log(date)
		return `${info[1]} ${date[2]}${date[1].toUpperCase()}${date[3].slice(
			2
		)} ${info[0][2].replace('-', '')} ${info[0][3].replace(
			':',
			''
		)} ${info[0][5].replace(':', '')}</br>`
	} catch (e) {
		return 'incorrect string'
	}
}

// parser S7
function s7(value) {
	try {
		let month = [
			'янв',
			'фев',
			'мар',
			'апр',
			'май',
			'июнь',
			'июль',
			'авг',
			'сен',
			'окт',
			'ноя',
			'дек',
		]
		let s7Filter = []
		let s7 = ''
		let s7All = value
			.trim()
			.split(/\n/gi)
			.filter(
				(e) =>
					!e.match(/UN\d/) &&
					!e.match(/TK\d/) &&
					!e.match(/HK\d/) &&
					!e.includes('→') &&
					!e.includes(' день') &&
					!e.includes('GMT') &&
					e !== ''
			)
			.map((e) => e.replace('Эконом', ''))
			.map((e) => e.trim())
		for (let i = 0; i < s7All.length / 7; i++) {
			s7Filter[i] = s7All.slice(i * 7, i * 7 + 7)
		}
		// console.log(s7Filter)
		for (let j = 0; j < s7Filter.length; j++) {
			const el = s7Filter[j]
			const date = new Date(
				new Date().getFullYear(),
				el[0],
				month.indexOf(el[1])
			)
				.toString()
				.split(' ')
			// console.log(date)
			s7 += `${el[2]} ${date[2]}${date[1].toUpperCase()}${date[3].slice(2)} ${
				el[3]
			}${el[5]} ${el[4].replace(':', '')} ${el[6].replace(':', '')}</br>`
		}
		return s7
	} catch (error) {
		return 'incorrect string'
	}
}
