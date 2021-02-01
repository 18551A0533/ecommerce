fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	  displayData(data)
})
function displayData(info){
	console.log(info.mobiles[info.mobiles.length-1])
}