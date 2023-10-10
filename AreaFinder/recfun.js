function recarea()
{
     let a= document.getElementById("len").value;
     let b= document.getElementById("wid").value;
     let c= a*b;
     document.getElementById("resrec").innerHTML="The area of rectangle  is: "+c;
   
}

// square
function sqarea()
{
     let a= document.getElementById("side").value;
     let c= a*a;
     document.getElementById("resqu").innerHTML="The area of square is: "+c;
   
}
//circle
function cirarea()
{
     let a= document.getElementById("radius").value;
     let c= 3.14*a*a;
     document.getElementById("rescir").innerHTML="The area of circle is: "+c;
   
}