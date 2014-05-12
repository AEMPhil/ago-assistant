define(["jquery"], function (jquery) {
    return {
        arrayToString: function (array) {
            // Convert an array to a comma separated string.
            var arrayString = "";
            jquery.each(array, function (index, arrayValue) {
                if (index === 0) {
                    arrayString = arrayValue;
                } else if (index > 0) {
                    arrayString = arrayString + "," + arrayValue;
                }
            });
            return arrayString;
        },
		deepArrayToNumber : function (array) {
			array.forEach(function(value, index, arr) {
				if (Array.isArray(value)) {
					arr[index] = DeepArrayToNumber(value);
				} else {
					arr[index] = Number(value);
				}
			});
			return array;
		}
    };
});