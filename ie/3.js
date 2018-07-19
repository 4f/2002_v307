m=navigator.appVersion
i=m.indexOf("MSIE")
l=''+window.location
lt=l.lastIndexOf("/")
y=l.charAt(lt-1)
u=parseInt(l.substr(lt+1))
pr=b8=0
if(!((i>0)&&(parseInt(m.substr(i+5))>=5)))
location.replace('../../pr/'+y+'/'+u+'.htm')
else{x=y=='s'?22:y=='y'?46:94;d=document;w=window;py=px=-800;a=new Array;g='</td></tr></table>'
sh=d.createStyleSheet('../c.css')
n=new Array('Модель','Год выпуска','Количество мест','Габариты ДхШхВ (мм)','База (мм)','Дорожный просвет (мм)','Высота посадки (мм)','Минимальный радиус поворота (м)','Полная масса/сухой вес (кг)','Объем двигателя (см куб)','Модель двигателя','Тип двигателя','Диаметр (мм)/ход поршня (мм)','Охлаждение двигателя','Max мощность (лс/обмин)','Max крутяций момент (кгм/обмин)','Степень сжатия','Тип трансмисии','Расход на 100км при 30 км/ч (л)','Расход на 100км при 50 км/ч (л)','Расход на 100км при 60 км/ч (л)','Объем бензобака (л)','Объем маслобачка (л)','Тормоза','Тормоза задние','Тормоза передние','Размер резины','Размер резины спереди','Размер резины сзади','Цена (уе)','Сухой вес (кг)')
p=new Array('oдноместный','двухместный','2-тактный','4-тактный','воздушное','водяное','вариатор','барабанные','дисковые')
t="<table id=hl style=width:100%;height:100%;left:expression(d.body.scrollLeft);top:expression(d.body.scrollTop);display:none;filter:Alpha(opacity=80);z-index:88;position:absolute;background:#555><tr><td align=center valign=middle><table title='You are in HELP. There is no help. Maybe press ESC' id=tdh><tr><td colspan=2>HOT KEYS</td></tr><tr><td>Клавиши '1', 'Alt'+'A'</td><td>Список моделей</td></tr><tr><td>Клавиши '2', 'Alt'+'H|Y|S'</td><td>Мопеды Honda|Yamaha|Suzuki</td></tr><tr><td>Клавиши '3', 'Alt'+'B'</td><td>Заглавная модель</td></tr><tr><td>Клавиши '4', 'Alt'+'P'</td><td>Предыдущая модель</td></tr><tr><td>Клавиши '5', 'Alt'+'C'</td><td>Закрыть окно</td></tr><tr><td>Клавиши '6', 'Alt'+'N'</td><td>Следующая модель</td></tr><tr><td>Клавиши '7', 'Alt'+'E'</td><td>Пограничная модель</td></tr><tr><td>Клавиши '8', 'Alt'+'Y|S'</td><td>Мопеды Yamaha|Suzuki</td></tr><tr><td>Клавиша 'F1'</td><td>Help/Close_help</td></tr><tr><td>Клавиши 'Enter', 'Space bar'</td><td>Клик по активной кнопке</td></tr><tr><td>Клавиша 'Esc'</td><td>Деактивизация Help|Window</td></tr><tr><td>Клавиши 'Tab', 'Shift'+'Tab'</td><td>Навигация по меню</td></tr><tr><td>Клавиши 'Up', 'Down', 'Left', 'Right'</td><td>-/-</td></tr><tr><td>Клавиши 'A', 'H', 'B', 'P', 'C'</td><td>-/-</td></tr><tr><td>Клавиши 'N', 'E', 'Y', 'S'</td><td>-/-</td></tr><tr><td>Клавиша '-'</td><td>Упрощенная версия страницы</td></tr><tr><td>Клавиша 'T'</td><td>Титульная страница</td></tr><table style='font:100 italic 13;color:#fff;width:590;cursor:default;text-align:right'><tr><td>Version 3.07</td></tr></table></td></tr></table><a id=wm title=WebMaster style=display:none;font:10;height:10;filter:dropShadow(offx=1,offy=1,color=white);z-index:90;position:absolute;right:6;bottom:11;color:#000 href=mailto:cdd@ukr.net>&copyLM</a></td></tr></table><table width=100% id=ss1><tr><td><table align=center class=t2><tr><td><table width=555><tr>"
m='<td style=background:c0c0c0;vertical-align:middle rowspan=5><img src=l.gif></td>'
t+=m+'<td colspan=2><img alt="Asia Servise" src=../../i/3.gif></td>'+m+'</tr><tr><td width=66>Адрес:</td><td width=300>Украина, г. Одесса, ул.Новомосковскя дорога 5</td></tr><tr><td>Tелефон:</td><td>+380 48 7430412</td></tr><tr><td>Факс:</td><td>+380 482 377369</td></tr><tr><td>e-mail:</td><td><a href=mailto:spparts@tm.odessa.ua>spparts@tm.odessa.ua</a>'+g+g+g+'<table id=b1 style=position:relative;top:5 cellspacing=0 cellpadding=0 align=center border=0 widht=100%><tr><td><table id=b2 class=t2><tr><td class=td1 width=312><table><tr><td width=200><dl>'
a=tp.split('#');s='<dl>';k=a.length/2
for(i=0;i<k;i++){m='<d'+(i%2?'d':'t')+' onmouseout="md('+i+')" onmouseover="md('+i+')" id=n'+i
t+=m+'f>'+n[parseInt(a[i])];c=a[i+k];s+=m+'s>'+(c.charAt(0)=='*'?p[parseInt(c.charAt(1))]:c)}
t+='<td align=center width=112>'+s+g+'</td><td><table class=t2 width=355><tr><td class=td1 height=16><span style=height:20;filter:dropShadow(color=#a0000000,offy=1,offx=1);letter-spacing:-3>'
m=d.title;s=m.lastIndexOf("'");if(s!=-1&&m.charAt(s-1)==' ')m=m.substr(0,s-1)
t+=m+'<span></td></tr><tr class=td1><td id=ti style=position:relative class=td1 height=250><img src=../../i'+y.toUpperCase()+'/'+u+'.jpg>'+g+'<div style=height:34;filter:dropShadow(offy=3,offx=4,color=gray)>'
b=new Array('All_scooters_in_this_category>*',y=='y'?'Honda>H':'Yamaha>Y','Begin><<','Prev_scooter><','Close>X','Next_scooter>>','End>>>',y=='s'?'Honda>H':'Suzuki>S')
for(i=0;i<b.length;i++)t+='<button hidefocus onmouseover="fs(this)" onclick="bt('+i+')" accesskey='+b[i].charAt(0)+' title='+b[i]+'</button>'
t+='</div>'
t+=g+'<img style=position:relative id=ss src=n.gif>'+g+'<img style=position:absolute;cursor:hand;bottom:0;right:0 onclick="location.assign(\'../\')" border=0 alt=HOME src=../../i/l3.gif>'
d.write(t)
function bt(i){if(i==4){w.close();return}if(i==1||i==7){y=b[i].charAt(0).toLowerCase();i=2}u=i==3?u-1:i==5?u+1:(i-2)/4*x;i=i==0?'':(x+u+1)%(x+1)+'.htm#'+pr;location.assign('../'+y+'/'+i)}
function fs(e){d.all[pr+b8].style.color='';if(e){pr=e.sourceIndex-b8;e.style.color='red'}}
ht=screen.height
function r(){wt=b1.offsetWidth+18;h=ss1.offsetHeight+b2.offsetHeight+34
w.moveTo((screen.width-wt)/2,(ht-h)/2);w.resizeTo(wt,h)}
if(ht<600){d.body.style.overflow='auto';w.resizeTo(screen.width,ht);w.moveTo(0,0)}else if(w.name!=''&&w.name!='LeSsY_MaVpEsSy')ct1=w.setInterval("r()",1)
function f(){r=Math.ceil(-py/4);d.all.ss.style.pixelTop+=r;py+=r
r=Math.ceil(-px/4);d.all.ss1.style.pixelLeft+=r;px+=r
if(r==0)w.clearInterval(ctn)}
function rv(){event.returnValue=false}
function kp(){i=event.keyCode
if(event.altKey)return
if(i==9){i=event.shiftKey?37:39}
if(i>64&&i<91)for(k=0;k<8;k++)if(String.fromCharCode(i)==d.all[b8+k].accessKey)fs(d.all[b8+k])
if(i>48&&i<57)with(d.all[b8+i-49]){focus();click()}
if(i>36&&i<41){fs(d.all[b8+(pr+7+2*Math.floor(i/39))%8]);rv()}
if(i==32||i==13){d.all[b8+pr].focus()}
if(i==27)hl.style.display==''?hp():close()
if(i==123)w.blur()
if(i==189)location.assign('../../pr/'+y+'/'+u+'.htm')
if(i==84)open('../','_self','')}
function ol(){ss1.style.left=px
ss1.style.top=b2.offsetHeight+5
ss.style.top=py-ss.offsetTop+ti.offsetTop+ti.offsetHeight-ss.offsetHeight+1
ss.style.left=-ss.offsetLeft+(ti.offsetWidth-ss.offsetWidth)/2+ti.offsetLeft
ss1.style.visibility=ss.style.visibility='visible'
b8=d.all.tags('BUTTON')[0].sourceIndex
c=location.hash.charAt(1)
pr=c==''?0:parseInt(c)
w.focus()
if(w.name!=''&&ht>599&&w.name!='LeSsY_MaVpEsSy'){r();w.clearInterval(ct1)}
d.all[b8+pr].style.color='red'
d.onkeydown=kp
d.onhelp=hp
w.onerror=oe
w.onresize=zm
ctn=w.setInterval("f()",40)
i=w.opener
if(i&&!i.closed&&i.name=='LeSsY_MaVpEsSy')i.ow(y,u)}
function md(k){i=event.type=='mouseout';d.all['n'+k+'f'].style.backgroundColor=d.all['n'+k+'s'].style.backgroundColor=i?'':'#555'
d.all['n'+k+'f'].style.color=d.all['n'+k+'s'].style.color=i?'':'#fff'}
function hp(){with(hl.style){display=display==''?'none':''}zm();with(wm.style){display=display==''?'none':''}rv()}
function zm(){hl.style.zoom=Math.min(1,d.body.clientHeight/(tdh.offsetHeight+20),d.body.offsetWidth/(tdh.offsetWidth+20))}
function oe(i,k,j){z='';for(x in navigator)z+=x+'='+navigator[x]+';';confirm('Произошел сбой скрипта.\nХотите ли Вы отправить сообщение о ошибке разработчику?')?w.open('mailto:cdd@ukr.net?subject=error.&body='+'Ниже, опишите предисторию появления ошибки... '+z+w.opener+';'+d.referrer+';'+i+';'+k+';'+j,'_self'):w.status='Ok';confirm('Продолжить?\nИначе "Safe Mode".')?w.status='Пожалуйста.':location.assign('../../pr/'+y+'/'+u+'.htm');event.returnValue=true}
w.onload=ol}