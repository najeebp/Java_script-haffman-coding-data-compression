function encode(str)
{
	var codes={'a': '00', 'c': '011', 'b': '1010', 'e': '11', 'd': '1011', 'g': '010', 'f': '100'};
	var output='';
	for(ch in str)
	{
		output+=codes[str[ch]];
		
	}
	return output;
}
console.log(encode('aaabccdeeeeeffg'));
