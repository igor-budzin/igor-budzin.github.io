;(function() {

	var hex = document.getElementById('hex');
	var rgb = document.getElementById('rgb');
	var hexBtn = document.getElementById('hexBtn');
	var rgbBtn = document.getElementById('rgbBtn');

	function hexToRgb(hex) {
		var regular = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

		hex = hex.replace(regular, function(str, r, g, b) {
			return r + r + g + g + b + b;
		});

		var colorArr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		if(colorArr === null) {
			return null;
		}

		var result = {
			r: parseInt(colorArr[1], 16),
			g: parseInt(colorArr[2], 16),
			b: parseInt(colorArr[3], 16)
		};

		return result;
	}

	function rgbToHex(rgb) {
		 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

		 return "#" +
			("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
	}

	hex.addEventListener('keyup', function() {
		var rgbValue = 'rgb(' + hexToRgb(hex.value).r + ', ' + hexToRgb(hex.value).g + ', ' + hexToRgb(hex.value).b + ')';
		document.querySelector('body').style.backgroundColor = rgbValue;
		rgb.value = rgbValue;
	});

	rgb.addEventListener('keyup', function() {
		hex.value = rgbToHex(rgb.value);
		document.querySelector('body').style.backgroundColor = rgb.value;
	});

	hexBtn.addEventListener('click', function() {
		if(hex.value.length > 0) {
			hex.select();
			document.execCommand('copy');
			hex.setSelectionRange(0, 0);
		}
	});

	rgbBtn.addEventListener('click', function() {
		if(rgb.value.length > 0) {
			rgb.select();
			document.execCommand('copy');
			rgb.setSelectionRange(0, 0);
		}
	});

})();
