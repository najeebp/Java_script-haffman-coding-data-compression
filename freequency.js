
function freequency(strr) {
  freeq={};
  for (var i=0;i<strr.length;i++){
    if (strr[i] in freeq){
      freeq[strr[i]]+=1;
      }
    else{
      freeq[strr[i]]=1}
  }
  return( freeq);
}
console.log(freequency('asianaaassssiiiaaaammmm'));
