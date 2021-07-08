function f1()
 { 
    var p=document.querySele
  
    var p=document.querySelector('#select-phase').value;
    var v=document.getElementById("units").value 
    var q=document.querySelector('#select-use').value
    var kw=3
if(q=="Domestic")
    {
    if(v>=0)
    { if(kw<5)
        {
        if(p=="Single")
        {
            if(v>=0&&v<=150)
            c=g0(v);
            if(v>150&&v<=300)
            c=g150(v);
            if(v>300&&v<=500)
            c=g300(v);
            if(v>500)
            c=g500(v);  
            document.querySelector('.output').textContent=c;
            }
function g0(a)
{
    b=5.5*a;
    return(b+200) ;

}
function g150(a)
{
    b=g0(150);
    c=6*(a-150);
    return(b+c+10);
}
function g300(a)
{
    b=g0(150);
    e=g150(150);
    d=6.5*(a-300);
    return(b+e+d+10);
}
function g500(a)
{
    b=g0(150);
        e=g150(150);
        f=g300(150);
        g=7*(a-500);
        return(b+e+f+g+10);

}
            if(p=="Three")
            {           
                if(v>=0&&v<=150)
                c=g30(v);
                if(v>150&&v<=300)
                c=g3150(v);
                if(v>300&&v<=500)
                c=g3300(v);
                if(v>500)
                c=g3500(v);
                document.querySelector('.output').textContent=c;
                }
function g30(a)
{
    b=6*a;
    return (b+210);

}
function g3150(a)
{
    b=g30(150);
    c=6.5*(a-150);
    return(b+c+10);
}
function g3300(a)
{
    b=g30(150);
    e=g3150(150);
    d=7*(a-300);
    return(b+e+d+10);
}
function g3500(a)
{
         b=g30(150);
        e=g3150(150);
        f=g3300(150);
        g=7.5*(a-500);
        return(b+e+f+g+10);
}
        }
if(kw>=5)
{
if(p=="Single")
        {
            if(v>=0&&v<=150)
            c=g0(v);
            if(v>150&&v<=300)
            c=g150(v);
            if(v>300&&v<=500)
            c=g300(v);
            if(v>500)
            c=g500(v);  
            document.querySelector('.output').textContent=c;
            }
function g0(a)
{
    b=5.5*a;
    return(b+220) ;

}
function g150(a)
{
    b=g0(150);
    c=6*(a-150);
    return(b+c+10);
}
function g300(a)
{
    b=g0(150);
    e=g150(150);
    d=6.5*(a-300);
    return(b+e+d+10);
}
function g500(a)
{
    b=g0(150);
        e=g150(150);
        f=g300(150);
        g=7*(a-500);
        return(b+e+f+g+10);

}
            if(p=="Three")
            {           
                if(v>=0&&v<=150)
                c=g30(v);
                if(v>150&&v<=300)
                c=g3150(v);
                if(v>300&&v<=500)
                c=g3300(v);
                if(v>500)
                c=g3500(v);
                document.querySelector('.output').textContent=c;
                }
function g30(a)
{
    b=6*a;
    return (b+230);

}
function g3150(a)
{
    b=g30(150);
    c=6.5*(a-150);
    return(b+c+10);
}
function g3300(a)
{
    b=g30(150);
    e=g3150(150);
    d=7*(a-300);
    return(b+e+d+10);
}
function g3500(a)
{
         b=g30(150);
        e=g3150(150);
        f=g3300(150);
        g=7.5*(a-500);
        return(b+e+f+g+10);
}
}
}
else
{
    document.querySelector('.output-statement').textContent="Please enter a valid number!";  
}
}
else {
         if(v>=0)
         {
      if(kw<5)         
   {  
      if(p=="Single")
         {
            if(v>=0&&v<=150)
            c=gc0(v);
            if(v>150&&v<=300)
            c=gc150(v);
            if(v>300&&v<=500)
            c=gc300(v);
            if(v>500)
            c=gc500(v);
            document.querySelector('.output').textContent=c;
            }
function gc0(a)
{
    b=5.4*a;
    return (b+250);

}
function gc150(a)
{
    b=g0(150);
    c=6.2*(a-150);
    return(b+c+10);
}
function gc300(a)
{
    b=gc0(150);
    e=gc150(150);
    d=7*(a-300);
    return(b+e+d+10);
}
function gc500(a)
{
    b=cg0(150);
        e=gc150(150);
        f=gc300(150);
        g=7.5*(a-500);
        return(b+e+f+g+10);

}
        if(p=="Three")
        {
            if(v>=0&&v<=150)
            c=gc30(v);
            if(v>150&&v<=300)
            c=gc3150(v);
            if(v>300&&v<=500)
            c=gc3300(v);
            if(v>500)
            c=gc3500(v);
            document.querySelector('.output').textContent=c;
            }
function gc30(a)
{
    b=880;
    return (b+260);

}
function gc3150(a)
{
    b=gc30(150);
    c=6.2*(a-150);
    return(b+c+10);
}
function gc3300(a)
{
    b=gc30(150);
    e=gc3150(150);
    d=7.1*(a-300);
    return(b+e+d+10);
}
function gc3500(a)
{
         b=gc30(150);
        e=gc3150(150);
        f=gc3300(150);
        g=7.7*(a-500);
        return(b+e+f+g+10);
}
}
//>5kw
if(kw>=5)
{
if(p=="Single")
         {
            if(v>=0&&v<=150)
            c=gc0(v);
            if(v>150&&v<=300)
            c=gc150(v);
            if(v>300&&v<=500)
            c=gc300(v);
            if(v>500)
            c=gc500(v);
            document.querySelector('.output').textContent=c;
            }
function gc0(a)
{
    b=5.4*a;
    return (b+300);

}
function gc150(a)
{
    b=g0(150);
    c=6.2*(a-150);
    return(b+c+10);
}
function gc300(a)
{
    b=gc0(150);
    e=gc150(150);
    d=7*(a-300);
    return(b+e+d+10);
}
function gc500(a)
{
    b=cg0(150);
        e=gc150(150);
        f=gc300(150);
        g=7.5*(a-500);
        return(b+e+f+g+10);

}
        if(p=="Three")
        {
            if(v>=0&&v<=150)
            c=gc30(v);
            if(v>150&&v<=300)
            c=gc3150(v);
            if(v>300&&v<=500)
            c=gc3300(v);
            if(v>500)
            c=gc3500(v);
            document.querySelector('.output').textContent=c;
            }
function gc30(a)
{
    b=880;
    return (b+310);

}
function gc3150(a)
{
    b=gc30(150);
    c=6.2*(a-150);
    return(b+c+10);
}
function gc3300(a)
{
    b=gc30(150);
    e=gc3150(150);
    d=7.1*(a-300);
    return(b+e+d+10);
}
function gc3500(a)
{
         b=gc30(150);
        e=gc3150(150);
        f=gc3300(150);
        g=7.7*(a-500);
        return(b+e+f+g+10);
}
}
}
else
{
    document.querySelector('.output-statement').textContent="Please enter a valid number!";  
}

}

}    

