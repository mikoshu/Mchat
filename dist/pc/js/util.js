jQuery.support.cors=!0;var util={requestURL:"http://aliyun.mikoshu.me:8055/mchat-web",getCurrentDateTime:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),a=e.getDay(),o=t;o=r>9?o+"年"+r:o+"年0"+r,o=n>9?o+"月"+n+"日":o+"月0"+n+"日";var i="";return 0==a?i="星期日":1==a?i="星期一":2==a?i="星期二":3==a?i="星期三":4==a?i="星期四":5==a?i="星期五":6==a&&(i="星期六"),o=o+"， "+i},showCal:function(){{var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();e.getDay(),parseInt(e.getTime()/1e3)}return 100>t&&(t="19"+t),this.GetLunarDay(t,r,n)},GetLunarDay:function(e,t,r){function n(e,t){return e>>t&1}function a(){u=3!=arguments.length?new Date:new Date(arguments[0],arguments[1],arguments[2]);var e,t,r,a,o=!1,f=u.getYear();for(1900>f&&(f+=1900),e=365*(f-1921)+Math.floor((f-1921)/4)+g[u.getMonth()]+u.getDate()-38,u.getYear()%4==0&&u.getMonth()>1&&e++,t=0;;t++){for(a=c[t]<4095?11:12,r=a;r>=0;r--){if(e<=29+n(c[t],r)){o=!0;break}e=e-29-n(c[t],r)}if(o)break}i=1921+t,l=a-r+1,s=e,12==a&&(l==Math.floor(c[t]/65536)+1&&(l=1-l),l>Math.floor(c[t]/65536)+1&&l--)}function o(){var e="";return 1>l?(e+="(闰)",e+=m.charAt(-l-1)):e+=m.charAt(l-1),e+="月",e+=11>s?"初":20>s?"十":30>s?"廿":"三十",(s%10!=0||10==s)&&(e+=f.charAt((s-1)%10)),e}var i,l,s,u,c=new Array(100),g=new Array(12),f="一二三四五六七八九十",m="正二三四五六七八九十冬腊";return c=new Array(2635,333387,1701,1748,267701,694,2391,133423,1175,396438,3402,3749,331177,1453,694,201326,2350,465197,3221,3402,400202,2901,1386,267611,605,2349,137515,2709,464533,1738,2901,330421,1242,2651,199255,1323,529706,3733,1706,398762,2741,1206,267438,2647,1318,204070,3477,461653,1386,2413,330077,1197,2637,268877,3365,531109,2900,2922,398042,2395,1179,267415,2635,661067,1701,1748,398772,2742,2391,330031,1175,1611,200010,3749,527717,1452,2742,332397,2350,3222,268949,3402,3493,133973,1386,464219,605,2349,334123,2709,2890,267946,2773,592565,1210,2651,395863,1323,2707,265877),g[0]=0,g[1]=31,g[2]=59,g[3]=90,g[4]=120,g[5]=151,g[6]=181,g[7]=212,g[8]=243,g[9]=273,g[10]=304,g[11]=334,1921>e||e>2020?"":(t=parseInt(t)>0?t-1:11,a(e,t,r),o())},getTime:function(){var e=this.getCurrentDateTime(),t=this.showCal();return e+"， 农历"+t},getUserInfo:function(){if(sessionStorage.token){{sessionStorage.token}this.client({url:this.requestURL+"/web/v1/medic/getInformation",success:function(e){1==e.code||layer.msg(e.msg),console.log(e)}})}else layer.msg("请先登录！"),window.location.href="login.html"},client:function(e){var t=layer.load(0),r=setTimeout(function(){layer.close(t),layer.msg("请求超时，请检查网络！")},5e3);e.xhrFields={withCredentials:!0},e.data||(e.data={}),e.crossDomain=!0,e.complete=function(e){"10002"==e.responseJSON.code&&(layer.msg("登录超时，请重新登录！"),setTimeout(function(){var e=window.location.href;window.location.href=e.indexOf("/admin/")>0?"../login.html":"login.html"},1e3)),clearTimeout(r),layer.close(t)},e.error=function(e){layer.msg(e.status+" "+e.statusText),clearTimeout(r),layer.close(t)},$.ajax(e)},pageClient:function(e,t){var r=layer.load(0),n=setTimeout(function(){layer.close(r),layer.msg("请求超时，请检查网络！")},5e3);e.xhrFields={withCredentials:!0},e.data||(e.data={}),e.crossDomain=!0,e.data.pageNum=t,util.currentPage=t,e.complete=function(e){"10002"==e.responseJSON.code&&(layer.msg("登录超时，请重新登录！"),setTimeout(function(){var e=window.location.href;window.location.href=e.indexOf("/admin/")>0?"../login.html":"login.html"},1e3)),clearTimeout(n),layer.close(r)},e.error=function(e){layer.msg(e.status+" "+e.statusText),clearTimeout(n),layer.close(r)},$.ajax(e)},currentPage:1,getDateStr:function(e){if(""==e)return"";var t=e.split("-");return t.map(function(e,r){t[r]=parseInt(e)}),t.join("-")},getAge:function(e,t){var r;r=e.split("-"),bDate=t.split("-");var n=bDate[0],a=bDate[1],o=bDate[2],i=n-r[0],l=a-r[1],s=o-r[2],u=12*i*30+30*l+s;return parseInt(u/30)+"月"+parseInt(u%30)+"天"},getTimeFromNum:function(e,t){if(!e)return"";var r=new Date(e),n=r.getFullYear(),a=r.getMonth()+1;a=10>a?"0"+a:a;var o=r.getDate();o=10>o?"0"+o:o;var i=r.getHours();i=10>i?"0"+i:i;var l=r.getMinutes(),s=r.getSeconds();return l=10>l?"0"+l:l,s=10>s?"0"+s:s,1==t?n+"-"+a+"-"+o+" "+i+":"+l+":"+s:n+"-"+a+"-"+o},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)");if(window.location.href.indexOf("?")>0){var r=window.location.href.split("?")[1].match(t);return null!=r?unescape(r[2]):null}return""}};