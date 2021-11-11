var a=5
if(a>1)
{
    let flag=0
    for(i=2;i<a;i++)
    {
        if(a%i==0)
        {
            flag=1
            break;

        }
    
    }
    if(flag==1)
    {
        console.log(a,"is not a prime")
    }
    else{
        console.log(a,"is prime")
    }
   
}
