codes={};
function assignCodes(node,pat)
{
	pat=pat||'';
	if(typeof node==type '')
	{
		codes[node]=pat;
	}
	else
	{
		assignCodes(node[0],pat+'0');
		assignCodes(node[1],pat+'1');
	}
	return codes;
}
console.log(assignCodes([['a', ['g', 'c']], [['f', ['b', 'd']], 'e']]]);


