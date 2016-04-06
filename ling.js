function Ling(text) {
	try {
		if (text === undefined) {
			throw "Missing Argument: No Text Provided";
		}
		
		var arr = text.split(" ");
		var uniqueWords = unique(arr);
		var uniqueWordswithCount = unique(arr, {count: true});

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

		return {
			text: text,
			count: count,
			vocabComplexity: vocabComplexity,
			uniqueCount: uniqueWordsCounter,
			unique: uniqueWords,
			get: get,
			mostCommonWord: mostCommonWord,
			letters: lettersUsed
		}

	} catch (err) {
		console.error(err);
	}
}