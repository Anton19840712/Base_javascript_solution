// Form1.HIDDENITEMS_TO.value = JSON.stringify(_items);

let element = [
	{
		Quantity: 500,
		Item: "A1PM001",
		ItemClass: null,
		Company: "PMI",
		UM: "",
		Packs: -1,
		Lot: "AAA555",
		InternalShipmentLineNum: 211371,
		InputedUms: { ConversionQty: 500, Count: 1, QuantityUm: "TB" },
		InputedUmsString: null,
		Sequence: 0,
		ScannedCount: 1,
	},
]

console.log(JSON.stringify(element, null, 15))
//console.log(typeof element)
