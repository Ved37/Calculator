var inp,ans,screen_inp,ans_out;
screen_inp=document.getElementById("useinp");
ans_out=document.getElementById("ansout");
screen_inp="";
function calcad(inp)
{
    screen_inp+=inp;
    useinp.value=screen_inp;
}
function removech()
{
    screen_inp=screen_inp.substring(0, screen_inp.length-1);
    useinp.value=screen_inp;
}
function execm()
{
    if(screen_inp.length=0 || screen_inp=="")
    {
        alert("Need an input");
        return;
    }
    try{
        ans=eval(screen_inp);
        ansout.value=ans;
        document.getElementById("history").innerText+=screen_inp+'='+ans+'\n';
    }
    catch(err)
    {
        alert("Invalid Input");
    }
}
function reset()
{
    useinp.value="";
    ansout.value="";
    screen_inp="";
}
function remhis()
{
    document.getElementById("history").innerText="";
}