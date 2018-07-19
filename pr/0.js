m=navigator.appVersion
i=m.indexOf("MSIE")
m=parseFloat(m.substr(i+5))
if(i>0&&m>=4)
{function ol(){window.onerror=oe;d=document
if(d.all["s"]){xx=d.all.tags('TABLE')[1].rows
for(i=0;i<xx.length;i++)
{xx[i].onmouseover=xx[i].onmouseout=new Function('','i=event.type=="mouseout";with(this.style){backgroundColor=i?"":"#999999";color=i?"":"#ffffff"}')
xx[i].style.cursor='hand'}}
a=document.links
if(a.length>5&&m>=5){if(a[4].innerText.indexOf('Next')!=-1)mn=4;else
mn=5
a[mn].insertAdjacentHTML('beforeBegin','&nbsp<a href="../../" onclick="ie();return false"> IE5+  </a>')}
else if(m>=5)d.body.insertAdjacentHTML('beforeEnd','<span style=font-family:tahoma;cursor:hand;position:absolute;font-size:13;left:0;top:0 onmouseover="style.background=\'#ffb\'" onmouseout="style.background=\'\'" title="Your choice?" onclick="location.assign(\'../ie/\')"><input type=checkbox onmouseover="focus()" onmouseout="blur()" onfocus="style.borderStyle=\'ridge\'" onblur="style.borderStyle=\'\'" hidefocus>JScript version</span>')
for(i=0;i<a.length;i++)
{j=a[i].innerText.charAt(0)
if(j==' ')j=a[i].innerText.charAt(1)
a[i].at=j.toUpperCase()
if(j!='')a[i].accessKey=j
else
a[i].at=a[i].accessKey}}
function ie(){
l=''+window.location
lt=l.lastIndexOf("/")
y=parseInt(l.substr(lt+1))
if(y||y==0)location.assign('../../ie/'+l.charAt(lt-1)+'/'+y+'.htm')
else
if(l.charAt(lt+1)=='i'||l.length==lt+1)
{if(l.charAt(lt-1)=='r')
location.assign('../ie/')
else
location.assign('../../ie/'+l.charAt(lt-1)+'/')}
else
location.assign('../ie/#'+l.charAt(lt+1))}
function kd(){i=event.keyCode;if(i==27)window.close()
if(i==189)ie()
if(i<64||i>90||event.altKey)return
j=document.activeElement.sourceIndex
for(i=0;i<a.length;i++)
if(j<=a[i].sourceIndex)break
if(j==a[i].sourceIndex)i+=(event.ctrlKey?2:1)*(event.shiftKey?0:1)-1
else
i-=event.shiftKey?1:0
k=event.shiftKey?-1:1
for(j=0;j<a.length;j++)
if(a[(i+k*j+a.length)%a.length].at==String.fromCharCode(event.keyCode))
{if(event.ctrlKey)a[(i+k*j+a.length)%a.length].focus()
else
a[(i+k*j+a.length)%a.length].click()
break}
event.returnValue=false
event.keyCode=0}
function oe(){event.returnValue=true}
window.onload=ol
document.onkeydown=kd}