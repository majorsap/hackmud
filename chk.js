function(c, a) //s:#s.n.l, r:false
{
    if (!a) return {ok:false,msg:"No args given."};
    var rb,rm,l=#fs.scripts.lib(), ar=a.a||{}, e=#fs.scripts.get_level({name:a.s.name});
    var sl = l.security_level_names[e];
    if (e == 4) {
        rm = a.s.name+" is safe to run `2(FULLSEC)`.";
        rb = true;
		//run cracker
	
    } else if (e == 3) {
        rm = a.s.name+" is HIGHSEC.";
        rb = true;
		//run cracker

    } else {
        rm = "`5"+a.s.name+" is "+sl+". Caution is advised.`";
        rb = false;
		
    }
    if (!a.r) {
        return { ok:rb, msg:rm };
    } else {
        if (e >= 3) return a.s.call(ar)
        if (a.override) return a.s.call(ar);
        return {ok:rb, msg:rm+"\nNot run. Call with override:true to override."}
    }
}