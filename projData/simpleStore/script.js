///*
//newcode
"use strict;"
//Vincent Hsiao

//You will create array of objects named inventory
//each product is an object with item and price 
//{item: "itemname": price: 10}

//This function is used to resize the readonly textarea when something is added
//This will be used by the writeToF function and clear function
const autoResize=()=>{let text=document.getElementById("receipt");
let newLines=text.value.split("\n").length-1;text.rows=2+newLines};

const inventory = [
	{item: "Smart Lightbulb", price: 9.00},
	{item: "Desktop", price: 550.00},
	{item: "Workstation Desktop", price: 899.99},
	{item: "Laptop", price: 499.00},
	{item: "Monitor", price: 229.00},
	{item: "TV", price: 699.00},
	{item: "Speakers", price: 39.00},
	{item: "Keyboard", price: 29.00},
	{item: "Mouse", price: 15.00},
];

//declare any global variables
let grandtotal = 0;



//display the inventory in a table on the webpage
window.onload = (event) =>{
const mainTable = document.createElement("table"); mainTable.classList.add("table-content"); 
mainTable.cellSpacing="0";
//Create Header
const caption = document.createElement("caption")
caption.innerHTML = "Store Products"
mainTable.appendChild(caption)
const head = document.createElement("thead")
for (headerObj of ["Name","Cost"]){
	let tempHeaderElem = document.createElement("th")
	tempHeaderElem.innerHTML = headerObj
	head.appendChild(tempHeaderElem)
}
mainTable.appendChild(head)
const body = document.createElement("tbody")
for (itemObj of inventory){
	let tempRow = document.createElement("tr")
	let tempCol1 = document.createElement("td")
	let tempCol2 = document.createElement("td")
	tempCol1.innerHTML = itemObj.item
	tempCol2.innerHTML = `$${itemObj.price.toFixed(2)}`
	tempRow.appendChild(tempCol1);tempRow.appendChild(tempCol2);
	body.appendChild(tempRow)
}
mainTable.appendChild(body)
document.querySelector(".store-products").appendChild(mainTable)
console.log(document.querySelector(".table-content thead:last-child"))
}
// Function used to write string to the textarea
// Called by addItem()
const writeToF = str =>{
	document.getElementById("receipt").value+=`\n${str}`
	autoResize()
}

//function to run when add is clicked
function addItem(){
   const itemName = document.getElementById("prodName").value
   let quant = document.getElementById("quant").value
   if(itemName == "" || quant == "" || isNaN(quant) || quant.includes(".")){
   	window.alert("Invalid Input!")
   return
   }; 
   quant = parseInt(quant)
   const itemPrice = findPrice(itemName)
   if(itemPrice<0){
   	window.alert("Invalid Item")
   	return
   }
   let curPrice = parseFloat(document.getElementById("total").innerHTML)
   curPrice += itemPrice * quant
 //  console.log(curPrice)
   curPrice = curPrice.toFixed(2)
   document.getElementById("total").innerHTML = `${curPrice}`
   writeToF(`${quant} ${itemName} at $${itemPrice.toFixed(2)} each = $${(itemPrice*quant).toFixed(2)}`)
}

//function to run when clear is clicked
function newOrder(){
	document.getElementById("total").innerHTML = "0.00"
	document.getElementById("receipt").value = ""
	autoResize()
//	document.getElementById("prodId").value = ""
	document.getElementById("prodName").value = ""
	document.getElementById("quant").value = ""
}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
//*/
/*
// This is the old code



	"use strict;"
	// Resizes textarea
	function autoResize(){
		let text = document.getElementById("receipt")
		let newLines = text.value.split("\n").length-1
		text.rows = 3 + newLines
	}
	//Products are both findable by ID and Name
	var prodById = {1: ["smartlightbulb","Smart Light Bulb", 9.00], 4: ["webcam", "Webcam", 22.00],
	 2: ["usbkeyboard","USB Keyboard", 9.00], 3: ["wirelesskeyboard", "Wireless Keyboard", 13.00],
	  5: ["mechanicalkeyboard", "Mechanical Keyboard", 55.00], 6: ["portablessd", "Portable SSD", 55.00],
	  7: ["laptop", "Laptop", 540.00], 8: ["desktop","Desktop",650.00], 9: ["monitor","Monitor",150.00]}
	function findById(id){
		let prod = prodById[id];
		if (prod == undefined){
			return "Invalid"
		} else {
			return [id].concat(prod)
		}
	}
	function findByName(name){
		let prod = undefined
		for (const [k, v] of Object.entries(prodById)){
			if(v[0] === name){
				prod = [k].concat(v)
			}
		}
		if(prod == undefined){
			return "Invalid"
		} else {
			return prod
		}
	}
	function addItem(){
		let enteredId = document.getElementById("prodId").value
		let enteredName = document.getElementById("prodName").value
		let enteredQuant = document.getElementById("quant").value
		let selProd = undefined
		if(enteredId==''&&enteredName==''){
			window.alert("Invalid Arguments")
			return
		} else if(enteredId!=''&&enteredName==''){
			selProd = findById(enteredId)
		} else if (enteredId!=''&&enteredName!=''){
			selProd = findById(enteredId)
			if(!Array.isArray(selProd) && selProd.toLowerCase()=="invalid"){
				selProd = findByName(enteredName.replace(" ","").toLowerCase())
			}
		}else if(enteredId==''&&enteredName!=''){
			selProd = findByName(enteredName.replace(" ","").toLowerCase())
		}
		if(selProd=='Invalid'){
			window.alert("Invalid Product")
		
		return}
		let cost = selProd[3]
		if(enteredQuant==''){
			window.alert("Invalid Arguments")
			return
		}
		let total = parseFloat(cost)*parseInt(enteredQuant)
		let curTotal = document.getElementById("total").innerHTML
		if(curTotal == ""){
			curTotal = 0.00
		} else {
			curTotal = parseFloat(curTotal)
		}
		curTotal += total
		document.getElementById("total").innerHTML = curTotal.toFixed(2)
		document.getElementById("receipt").value+=`\n${quant.value} ${selProd[2]+"s"} at $${cost.toFixed(2)} each = $${total.toFixed(2)}`
		autoResize()
	}
	function newOrder(){
		document.getElementById("total").innerHTML = ""
		document.getElementById("receipt").value = ""
		autoResize()
		document.getElementById("prodId").value = ""
		document.getElementById("prodName").value = ""
		document.getElementById("quant").value = ""
	}
	//
//*/