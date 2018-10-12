module.exports = index;


function index(callback){
	console.log("jest fails due to no return")
	callback()
}
