/*
Prompt users to enter in Item price and Item Quantity

Calculate discount using subtotal

Write the subtotal, discount and total with innerHTML
*/

// Adds event listener to add oninput events to elements when page loads
window.onload = event => {
	document.getElementById("price").addEventListener("oninput", run);	
	document.getElementById("quantitem").addEventListener("oninput", run);
};

function run(){
	// Gets value from inputs
	var priceOfItem = parseFloat(document.getElementById("price").value);
	var quant = parseInt(document.getElementById("quantitem").value);
	// Calculates subtotal and discounts
	var subtotal = priceOfItem * quant;
	var discount = 0;
	if(subtotal >= 500){
		discount = subtotal * 0.05;
	} else {
		discount = subtotal * 0.03;
	}
	var total = subtotal - discount;
	//Displays result
	document.getElementById("total").innerHTML = `
	Subtotal: S${subtotal.toFixed(2)}<br>
	Discount: $${discount.toFixed(2)}<br>
	Total: $${total.toFixed(2)}<br>
	Programmed by: Vincent Hsiao`;
}