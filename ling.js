function Ling(text) {
	try {
		if (text === undefined) {
			throw "Missing Argument: No Text Provided";
		}
		
		var Dictionary = "hello love think do be the best you can people amazing".split(" ");

		var arr = text.split(" ");
		var uniqueWords = unique(arr);
		var uniqueWordswithCount = unique(arr, {count: true});
		var letters = lettersUsed();

		function count() {
			return arr.length;
		}

		function uniqueWordsCounter() {
			return uniqueWords.length;
		}

		function lettersUsed() {
			var letters = [];
			console.log(uniqueWords);

			for (wordidx in uniqueWords) {
				var word = uniqueWords[wordidx];

				for (var i = 0; i < word.length; i++) {
					var char = word.charAt(i);

					if (!contains(letters, char)) {
						letters.push(char);
					}
				}
			}

			return letters;
		}

		function math() {
			var opStack = [];
			var degree = [];
			for (var i = 0; i < arr.length; i++) {
				switch(arr[i]) {
					case '+':
						stack.push(arr[i]);
						break;
					case '-':
						stack.push(arr[i]);
						break;
					case '*':
						stack.push(arr[i]);
						break;
					case '/':
						stack.push(arr[i]);
						break;
					default:
						if (!isInt(arr[i])) {
							degree.push(arr[i]);
						}

				} 
			}
		}

		function mostCommonWord() {
			var max = {word: "placeholder", count: -1};
			console.log(uniqueWordswithCount);
			for (var wordObj in uniqueWordswithCount) {
				if (uniqueWordswithCount[wordObj].count > max.count)
					max = wordObj;
			}
			return max;
		}

		function vocabComplexity() {
			return uniqueWordsCounter() / count() * 100;
		}

		function get(word) {
			var result = arr.indexOf(word);

			if (result >= 0) {
				return result;
			} else {
				return "Not Found";
			}
		}

		function newWord() {
			return makeNewWord(Dictionary, letters);
		}

		function getHtml(website) {
			function makeHttpObject() {
			  try {return new XMLHttpRequest();}
			  catch (error) {}
			  try {return new ActiveXObject("Msxml2.XMLHTTP");}
			  catch (error) {}
			  try {return new ActiveXObject("Microsoft.XMLHTTP");}
			  catch (error) {}			

			  throw new Error("Could not create HTTP request object.");
			}
			var request = makeHttpObject();
			request.open("GET", website, true);
			request.send(null);
			request.onreadystatechange = function() {
			  if (request.readyState == 4)
			    return request.responseText;
			};			
		}


		// Private Functions
		function unique(array, object) {
			// Gets the Unique Values in an Array;
			if (object !== undefined && object.count == true) {
				uniqueArr = {};
				for (var i = 0; i < array.length; i++) {
					if (uniqueArr[array[i]] === undefined) {
						uniqueArr[array[i]] = {
							word: array[i],
							count: 1,
						}
					} else {
						uniqueArr[array[i]].count++;
					}
				}
			} else {
				var uniqueArr = [];
				for (var i = 0; i < array.length; i++) {
					if (!contains(uniqueArr, array[i])) {
						uniqueArr.push(array[i]);
					} else {
						continue;
					}
				}				
			}


			return uniqueArr;
		}

		function contains(array, object) {
			for (var i = 0; i < array.length; i++) {
				if (array[i] == object) {
					return true;
				} 
			}
			return false;
		}

		// Given an Array of Letters, will
		// make random new word
		function makeNewWord(dictionary, letters) {
			var possible = [];
			for (word in dictionary) {
				//console.log(letters);
				if (letters.length == 0) {
					break;
				}

				for (var i = 0; i < word.length; i++) {
					var char = word.charAt(i);

					if (contains(letters, char)) {
						letters.push(char);
					}
				}				
			}

			return possible;
		}

		function isInt(value) {
			var x;
			if (isNan(value)) {
				return false;
			}
			x = parseFloat(value);
			return (x | 0) === x; 
		}


		return {
			text: text,
			count: count,
			vocabComplexity: vocabComplexity,
			uniqueCount: uniqueWordsCounter,
			unique: uniqueWords,
			get: get,
			mostCommonWord: mostCommonWord,
			letters: lettersUsed,
			getHtml: getHtml
		}

	} catch (err) {
		console.error(err);
	}
}