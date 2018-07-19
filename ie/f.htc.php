<?php header( 'text/x-component' ) ; ?>
<PUBLIC:COMPONENT>

<PUBLIC:attach event="onmouseout" onevent="f1(0)" />
<PUBLIC:attach event="onmouseover" onevent="f1(1)" />
<PUBLIC:attach event="onclick" onevent="f2()" />
<PUBLIC:attach event="onmouseup" onevent="f1(0)" />
<script LANGUAGE="JScript">
function f1(i){className=i?'vo':'';filters.gray.enabled=i}
function f2(){i=getAttribute('s');i=='x'?sc(i):eval(i+'9.click()')}
</script>
</PUBLIC:COMPONENT>
