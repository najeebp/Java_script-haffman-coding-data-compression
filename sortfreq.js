function sortFreq(freqs)
{
	letters=new Array();
	tuples=new Array();
	for(var key in freqs)
	{
		letters.push(key);
	}
//	return letters;
	for(var lett in letters )
	{
		tuples.push([freqs[letters[lett]],letters[lett]]);
	}
	tuples.sort();
	return tuples;
	
	
}
console.log(sortFreq({'a': 3, 'c': 2, 'b': 1, 'e': 5, 'd': 1, 'g': 1, 'f': 2}))

