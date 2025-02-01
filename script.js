//your JS code here. If required.
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let phone=document.getElementById("phone");
let mail=document.getElementById("mail");
function submit(){
	let a=fname.value;
	let b=lname.value;
	let c=phone.value;
	let d=mail.value;
	alert("First Name: "+a+ " Last Name: "+b+ " Phone Number: "+c+ " Email ID: "+d);
	
}
