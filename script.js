'use strict';

//Create Web application that displays traffic-light that periodically changes active light.

// //Create variables for the traffic light.
// const redLight = document.querySelector('.red-light');
// const yellowLight = document.querySelector('.yellow-light');
// const greenLight = document.querySelector('.green-light');

// //Create a function to change the color of the traffic light.
// function changeLight() {
// 	redLight.classList.toggle('active');
// 	yellowLight.classList.toggle('active');
// 	greenLight.classList.toggle('active');
// }

// //Create a function to set the interval for the traffic light.
// function setInterval() {
// 	setInterval(changeLight, 1000);
// }

// //Call the function to set the interval.
// setInterval();

const circles = document.querySelectorAll('.circle');
let activeLight = 0;

setInterval(() => {
	changeLight();
}, 1500);

function changeLight() {
	circles[activeLight].className = 'circle';
	activeLight++;

	activeLight > 2 ? (activeLight = 0) : '';

	const currentLight = circles[activeLight];

	currentLight.classList.add(currentLight.getAttribute('color'));
}
