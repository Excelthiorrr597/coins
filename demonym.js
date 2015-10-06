window.onload = function(){

var ajaxParams = {
	url: 'https://restcountries.eu/rest/v1/all',
	success: sucFunc

}

function sucFunc(responseData){
	console.log(responseData)
	return responseData
}

$.ajax(ajaxParams)























}