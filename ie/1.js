m=navigator.appVersion
i=m.indexOf("MSIE")
l=''+window.location
lt=l.lastIndexOf("/")
y=l.charAt(lt-1)
if(!((i>0)&&(parseInt(m.substr(i+5))>=5)))
location.replace('../../pr/'+y+'/')
else{tn=tm=new Array;tm=c.split(';');for(i=0;i<tm.length;i++)tn[i]=i;d=document;n=0
function r(){i=Math.max(1,Math.floor((d.body.clientWidth-12)/92))
if(i!=n){n=i;f()}}
function f(){if(ch.checked){for(i=0;i<tm.length;i++)for(k=i+1;k<tm.length;k++)if(tm[tn[i]]>tm[tn[k]]){j=tn[i];tn[i]=tn[k];tn[k]=j}}else{for(i=0;i<tm.length;i++)tn[i]=i}
t='<img src=../../ie/'+(y=='h'?'honda':y=='y'?'yamaha':'suzuki')+'.gif border=1><table border=1>'
for(i=0;i<tm.length;i++)
t+=(i%n==0?'<tr border=1 style=text-align:center;vertical-align:bottom;background:#ededed>':'')+'<td width=86 height=100><a accesskey='+tm[tn[i]].charAt(0)+' onclick="open(\''+tn[i]+".htm','"+i+"','scrollbars=1,resizable=1');return false;\" title='"+tm[tn[i]]+"' href="+tn[i]+'.htm hidefocus><img border=0 src=../../i'+y.toLowerCase()+'/'+tn[i]+'.gif><br><u>'+tm[tn[i]].charAt(0)+'</u>'+tm[tn[i]].substr(1)+'</a></td>'+(i%n==n-1?'</tr>':'')
for(k=i;k<i+n-i%n;k++)
t+=(k%n==0?'<tr border=1>':'')+'<td style=text-align:center;vertical-align:middle;height:96><a title=HOME href=../ hidefocus><img border=0 src=../../i/l1.gif></a></td>'+(k%5==n-1?'</tr>':'')
t+='</table>'
tr.innerHTML=t
d.all.tags('TABLE')[1].style.width=92*n+4}
window.onresize=r
d.onkeydown=kp
function kp(){i=event.keyCode;if(event.altKey)return
i==27?window.close():i==84?open('../#'+y,'_self',''):i==83?ch.click():i==67?window.close():i==189?location.assign('../../pr/'+y+'/'):''}
d.write('<style>body{font-size:12;margin:0}button{position:absolute;right:1%;cursor:hand;font:900;background:#004;color:#fff;height:21;width:21}a{font-size:12;position:relative;color:#222;text-decoration:none;letter-spacing:-1}a:visited{color:#555}a:hover,a:active{left:-1;top:-1;border:1;color:#f66;text-decoration:underline}</style><body bgcolor="f0f0f0" background=../../i/b'+y+'.gif onload="r()"><span style=font-family:tahoma;cursor:hand  onclick="ch.checked=!ch.checked;f()" onmouseover="style.background=\'#ffb\'" onmouseout="style.background=\'\'"><input id=ch title=Сортировка/Разсортировка type=checkbox hidefocus onclick="ch.checked=!ch.checked" onmouseover="focus()" onmouseout="blur()" onfocus="style.borderStyle=\'ridge\'" onblur="style.borderStyle=\'\'"> <u>S</u>ort/Unsort</span><button hidefocus onmouseover="focus()" onfocus="style.color=\'red\'" onmouseout="blur()" onblur="style.color=\'\'" onclick="window.close()" title=Close>X</button><table align=center><tr><td align=center id=tr></td></tr></table></body></html>')}