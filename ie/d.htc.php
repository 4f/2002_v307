<?php header( 'Content-Type: text/x-component' ) ; ?>

<PUBLIC:COMPONENT>

<PUBLIC:attach event="onmouseover" onevent="f3()" />
<PUBLIC:attach event="onmouseout" onevent="f3()" />
<PUBLIC:attach event="onclick" onevent="f5()" />
<script LANGUAGE="JScript">
function f3(){className=className=="dt1"?'dtb':'dt1'}
function f5(){i=id.substr(2)
if(nn>0)xl.style.color='#000'
if(nn==i){nn=0;xl=0}else{nn=i;xl=this;xl.style.color='red';if(g1[i]!=i){sr(i);g1[i]=i}}
l5(nn,1,0,ln1/2)
l5(nn,2,Math.ceil(ln1/2),ln1)
a3();cf()
if(nl>-1)ffp.focus()}
</script>
</PUBLIC:COMPONENT>
