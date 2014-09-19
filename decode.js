function decode(tree,str)
{
	var output='';
	p=tree;
	for(bit in str)
	{
		if(str[bit]==0)
			p=p[0];
		else 
			p=p[1];
			
		if (typeof p==typeof '')
		{
			output+=p;
			p=tree;
		}
	}
	return output;
}
	
console.log(decode([2, [[1, 'b'], [1, 'd']]],'aaabccdeeeeeffg'));
