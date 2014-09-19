
function trimTree(tree)
{
	var p=tree[1];
	if(typeof p ==typeof '')
	
		return p;
	
	else
	
		return [trimTree(p[0]),trimTree(p[1])];
}
console.log(trimTree([2,[[1, 'b'],[1, 'd']]]));
