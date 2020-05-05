
var thumb = [12,26,35,48];
for(var x=0; x<thumb.length; x++){
   var b=0;
   var z=0;
   var y=0;
   var c=0;
    b= thumb[x] / 10;
    y= Math.trunc(b);
    c= y*10;
    z= thumb[x]-c;
    thumb [x]=y+z;


}
console.log(thumb);