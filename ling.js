function Ling(text) {
	try {
		if (text === undefined) {
			throw "Missing Argument: No Text Provided";
		}
		
		var arr = text.split(" ");
		var uniqueWords = unique(arr);

		function count() {
			return arr.length;
		}

		function uniqueWordsCounter() {
			return uniqueWords.length;
		}

		function vocabComplexity() {
			return uniqueWordsCounter() / count() * 100;
		}

		// Private Functions
		function unique(array, object) {
			// Gets the Unique Values in an Array;
			var uniqueArr = [];
			for (var i = 0; i < array.length; i++) {
				if (!contains(uniqueArr, array[i])) {
					uniqueArr.push(array[i]);
				} else {
					continue;
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
			unique: uniqueWords
		}
		
	} catch (err) {
		console.error(err);
	}
}