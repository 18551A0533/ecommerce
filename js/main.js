fetch("https://18551a0533.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	  displayData(data)
})
function displayData(info){
	console.log(info.mobiles[info.mobiles.length-1])
}
