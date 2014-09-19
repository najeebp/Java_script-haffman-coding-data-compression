function buildtree(tuples)
{
	while(tuples.length > 1)
	{
		var leastTwo=tuples.slice(0,2);
		var theRest=tuples.slice(2);
		var combFreq=leastTwo[0][0]+leastTwo[1][0];
		var n=new Array();
		n.push([combFreq,leastTwo]);
		tuples=theRest.concat(n);
		tuples.sort();
	
	}
	return tuples[0];
}
console.log(buildtree([[1, 'd'], [1, 'g'], [2, 'c'], [2, 'f'], [3, 'a']]));
