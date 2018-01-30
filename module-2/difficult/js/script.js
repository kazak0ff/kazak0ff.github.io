'use strict';

let map = new Map();
let choose = false;
let places = false;


map.set('sharm', 15);
map.set('hurgada', 25);
map.set('taba', 6);

let people = prompt("Please insert number of people", "");

if (people < 0) {
	alert("You insert negative number");
} else {
	map.forEach	((value, key, map) => {
		if (value > people && !choose) {
			places = true;
			choose = confirm(`What about ${key}`);
			if(choose) {
				console.log(map.get(key));
				map.set(key, value - people);
				console.log(map);
			}
		}
	});

	if (!places) alert("No places");
}


