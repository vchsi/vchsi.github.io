window.onload = event => {
	const bmiResult = document.getElementById("bmiResult");
	const bmiStatus = document.getElementById("bmiResult");
	document.getElementById("calculate").addEventListener("click",calcBmi);
	document.getElementById("reset").addEventListener("click",reset);
};
async function calcBmi(){
	let hF = document.getElementById("heightF").value;
	let hI = document.getElementById("heightI").value;
	let wL = document.getElementById("weight").value;
	if(isNaN(hF)||isNaN(hI)||isNaN(wL)||wL===''||hF===''||hI===''||parseFloat(hI)>11||parseInt(hF)!=hF){
		document.getElementById("bmiNo").innerHTML = `Invalid value entered!`
		window.alert("Invalid Value entered");
		return;
	};
	let bmi = parseFloat(wL)*703/((parseFloat(hI) + (parseInt(hF))*12)**2)
	bmi = parseFloat(bmi.toFixed(2))
	document.getElementById("bmiNo").innerHTML = `Your BMI is ${bmi}`
	let cat = ""
	if(bmi < 18.5){
		cat = "Underweight"
	} else if(bmi > 18.5 && bmi < 25){
		cat = "Normal"
	} else if(bmi>25 && bmi < 30){
		cat = "Overweight"
	} else {
		cat = "Obese"
	}
	document.getElementById("bmiResult").innerHTML = `Category: ${cat}`

};
async function reset(){
	document.getElementById("heightF").value = ""
	document.getElementById("heightI").value = ""
	document.getElementById("weight").value = ""
	document.getElementById("bmiNo").innerHTML = ""
	document.getElementById("bmiResult").innerHTML = ""
}