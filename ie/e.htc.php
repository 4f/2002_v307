<?php header( 'Content-Type: text/x-component' ) ; ?>

<PUBLIC:COMPONENT>

<PUBLIC:attach event="onmousedown" onevent="o()" />
<PUBLIC:attach event="onmouseout" onevent="o2()" />
<PUBLIC:attach event="onmouseover" onevent="o2()" />
<PUBLIC:attach event="onclick" onevent="o1()" />
<script LANGUAGE="JScript">
function o2(){if(fl2&&fl2.element==element)className=className=='i'?'o':'i'
blur()}
function o(){if(event.button!=1)return
className=className=='i'?'o':'i'
fl2=this}
function o1(){if(pr)pr.className='i'
pr=this
i=id.charAt(0)
if(fl1==i){className='i';sc('r')}else{className='o';sc(i)}
if(m<5.5)blur()
fl2=0
rv()}
</script>
</PUBLIC:COMPONENT>
