//Get elements
const daysElement1 = document.getElementById("days");
const hoursElement1 = document.getElementById("hours");
const minutesElement1 = document.getElementById("minutes");
const secondsElement1 = document.getElementById("seconds");

//const day get counter
const jobDay = "20 March 2023";


//function to format the time in a readable format
function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}



//function to countdown to given date date
function countdown() {
	const jobDate = new Date(jobDay); // convert to date data type
	const currentDate = new Date();
	
	//get total seconds, days, hours and minutes.
	const totalSeconds = (jobDate - currentDate) / 1000;
	
	const days = Math.floor((totalSeconds / 3600)/ 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
	
	daysElement1.innerHTML = days;
	hoursElement1.innerHTML = formatTime(hours);
	minutesElement1.innerHTML = formatTime(mins);
	secondsElement1.innerHTML = formatTime(seconds);
}

//call function condown initially
countdown();

setInterval(countdown, 1000);


