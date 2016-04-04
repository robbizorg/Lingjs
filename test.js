

document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("submit").addEventListener("click", function(event) {
		if (document.getElementById("input").value.trim() == "") {
			var nope = document.createElement("p");
			nope.className += "result";
			nope.appendChild(document.createTextNode("Please Enter Something"));

			var result = document.getElementById("results");
			result.appendChild(nope);
			result.appendChild(document.createElement("br"));
		
		} else {
			console.log(document.getElementById("input").value);
			var ling = Ling(document.getElementById("input").value);

			var result = document.getElementById("results");

			var count = document.createElement("p");
			count.className += "result";
			count.appendChild(document.createTextNode("Words: " + ling.count()));

			var complexity = document.createElement("p");
			complexity.className += "result";
			complexity.appendChild(document.createTextNode("Complexity: " + ling.vocabComplexity()));

			var find = document.createElement("p");
			find.className += "result";
			find.appendChild(document.createTextNode("Most Common: " + ling.mostCommonWord()));

			result.appendChild(count);
			result.appendChild(document.createElement("br"));
			result.appendChild(complexity);
			result.appendChild(document.createElement("br"));
			result.appendChild(find);
			result.appendChild(document.createElement("br"));

			document.getElementById("input").value = "";			
		}


	})
});
