$(document).ready(function(){

	console.log("ChatJS has been loaded");

	var socket = io('http://localhost:3000');


	socket.on('chat message', function(msg){

	    console.log('message: ' + msg);

	    
  	});



















})