let json = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

function getName(input) {
	let output = input.displayedName.displayedName.value[0]
	return output
}


function getShopsList(input) {
	let output = []
 input = input.stock.stocks["34"]
	for (let [key,value] of Object.entries(input)) {
		if (parseInt(value) > 0) {
			output.push(key)
		}	
	}
	return output
}


function getMax(input) {
	input = input.stock.stocks["34"]
	let output = Object.values(input).map(function(number) {
		return parseInt(number)
	})
	for (let [key, value] of Object.entries(input)) {
		if (parseInt(value) == Math.max.apply(Math, output)) {
			let result = `${key}: ${value}`
			return result
		}
	}
}

console.log(getName(json))
console.log(getShopsList(json))
console.log(getMax(json))
