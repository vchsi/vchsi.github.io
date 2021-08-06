/*
	Prices
Weight (kg)               Cost per kg($)

less than 2.5kg            $3.50 per kg

2.5 to 5 kg                    $2.85 per kg

more than 5kg             $2.45 per kg
*/

function calc(){
	let weight = document.getElementById("weight").value;
	let curShipPrice = 0;
	if(weight <= 0){
		window.alert("Please enter a positive weight decimal!");
		return;
	};
	if(weight < 2.5){
		curShipPrice = 3.50
	} else if (weight <= 5 && weight >= 2.5) {
		curShipPrice = 2.85
	} else {
		curShipPrice = 2.45
	};
	let recipt = `Cost is $ ${curShipPrice.toFixed(2)} per kg<br>`
	let finalPrice = weight * curShipPrice;
	recipt += `Total charge is ${finalPrice.toFixed(2)}`
	document.getElementById("receipt").innerHTML = recipt
};