module.exports = {
	findMinMax: function(list) {
		var output = [];
		var minimum = list[0];
		var maximum = list[0];
		var counter = 1;
		while (counter < list.length) {
			if (list[counter] < minimum)
				minimum = list[counter];
			if (list[counter] > maximum)
				maximum = list[counter];
			counter += 1;
		}

		if(minimum === maximum)
			output.push(minimum);
		else {
			output.push(minimum);
			output.push(maximum);	
		}
		
		return output;
	}
}