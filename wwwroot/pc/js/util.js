jQuery.support.cors=true;
var util = {
    requestURL: 'http://aliyun.mikoshu.me:8055',
    getCurrentDateTime: function () { 
        var d = new Date(); 
        var year = d.getFullYear(); 
        var month = d.getMonth() + 1; 
        var date = d.getDate(); 
        var week = d.getDay(); 
        var curDateTime = year; 
        if (month > 9) 
        curDateTime = curDateTime + "年" + month; 
        else
        curDateTime = curDateTime + "年0" + month; 
        if (date > 9) 
        curDateTime = curDateTime + "月" + date + "日"; 
        else
        curDateTime = curDateTime + "月0" + date + "日"; 
        var weekday = ""; 
        if (week == 0) 
        weekday = "星期日"; 
        else if (week == 1) 
        weekday = "星期一"; 
        else if (week == 2) 
        weekday = "星期二"; 
        else if (week == 3) 
        weekday = "星期三"; 
        else if (week == 4) 
        weekday = "星期四"; 
        else if (week == 5) 
        weekday = "星期五"; 
        else if (week == 6) 
        weekday = "星期六"; 
        curDateTime = curDateTime + "， " + weekday; 
        return curDateTime; 
    },
    showCal: function (){ 
        var D=new Date(); 
        var yy=D.getFullYear(); 
        var mm=D.getMonth()+1; 
        var dd=D.getDate(); 
        var ww=D.getDay(); 
        var ss=parseInt(D.getTime() / 1000); 
        if (yy<100) yy="19"+yy; 
            return this.GetLunarDay(yy,mm,dd); 
    },   
    GetLunarDay: function (solarYear,solarMonth,solarDay){ 
        var CalendarData=new Array(100); 
        var madd=new Array(12); 
        var tgString="甲乙丙丁戊己庚辛壬癸"; 
        var dzString="子丑寅卯辰巳午未申酉戌亥"; 
        var numString="一二三四五六七八九十"; 
        var monString="正二三四五六七八九十冬腊"; 
        var weekString="日一二三四五六"; 
        var sx="鼠牛虎兔龙蛇马羊猴鸡狗猪"; 
        var cYear,cMonth,cDay,TheDate; 
        CalendarData = new Array(0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5,0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95); 
        madd[0]=0; 
        madd[1]=31; 
        madd[2]=59; 
        madd[3]=90; 
        madd[4]=120; 
        madd[5]=151; 
        madd[6]=181; 
        madd[7]=212; 
        madd[8]=243; 
        madd[9]=273; 
        madd[10]=304; 
        madd[11]=334; 
         
        function GetBit(m,n){ 
        return (m>>n)&1; 
        } 
        //农历转换 
        function e2c(){ 
        TheDate= (arguments.length!=3) ? new Date() : new Date(arguments[0],arguments[1],arguments[2]); 
        var total,m,n,k; 
        var isEnd=false; 
        var tmp=TheDate.getYear(); 
        if(tmp<1900){ 
        tmp+=1900; 
        } 
        total=(tmp-1921)*365+Math.floor((tmp-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-38; 
         
        if(TheDate.getYear()%4==0&&TheDate.getMonth()>1) { 
        total++; 
        } 
        for(m=0;;m++){ 
        k=(CalendarData[m]<0xfff)?11:12; 
        for(n=k;n>=0;n--){ 
        if(total<=29+GetBit(CalendarData[m],n)){ 
        isEnd=true; break; 
        } 
        total=total-29-GetBit(CalendarData[m],n); 
        } 
        if(isEnd) break; 
        } 
        cYear=1921 + m; 
        cMonth=k-n+1; 
        cDay=total; 
        if(k==12){ 
        if(cMonth==Math.floor(CalendarData[m]/0x10000)+1){ 
        cMonth=1-cMonth; 
        } 
        if(cMonth>Math.floor(CalendarData[m]/0x10000)+1){ 
        cMonth--; 
        } 
        } 
        } 
         
        function GetcDateString(){ 
        var tmp=""; 
        /*显示农历年：（ 如：甲午(马)年 ）*/
        /*tmp+=tgString.charAt((cYear-4)%10); 
        tmp+=dzString.charAt((cYear-4)%12); 
        tmp+="("; 
        tmp+=sx.charAt((cYear-4)%12); 
        tmp+=")年 ";*/
        if(cMonth<1){ 
        tmp+="(闰)"; 
        tmp+=monString.charAt(-cMonth-1); 
        }else{ 
        tmp+=monString.charAt(cMonth-1); 
        } 
        tmp+="月"; 
        tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"三十")); 
        if (cDay%10!=0||cDay==10){ 
        tmp+=numString.charAt((cDay-1)%10); 
        } 
        return tmp; 
        } 
        //solarYear = solarYear<1900?(1900+solarYear):solarYear; 
        if(solarYear<1921 || solarYear>2020){ 
            return ""; 
        }else{ 
            solarMonth = (parseInt(solarMonth)>0) ? (solarMonth-1) : 11; 
            e2c(solarYear,solarMonth,solarDay); 
            return GetcDateString(); 
        } 
    },
    getTime: function(){
        var date = this.getCurrentDateTime(); 
        var calendar = this.showCal(); 
        return date+'， 农历'+calendar
    },
    getUserInfo: function(){
        if(sessionStorage.token){
            var token = sessionStorage.token;
            this.client({
                url: this.requestURL+'/web/v1/medic/getInformation',
                success: function(data){
                    if(data.code == 1){

                    }else{
                        layer.msg(data.msg);
                    }
                    console.log(data);
                }
            })
        }else{
            layer.msg('请先登录！');
            window.location.href = "login.html";
        }
    },
    client: function(obj){
        var index = layer.load(0);
        var time = setTimeout(function(){
            layer.close(index);
            layer.msg('请求超时，请检查网络！')
        },5000);
        obj.xhrFields = {withCredentials: true};
        if(!obj.data){
            obj.data = {};
        }
        obj.crossDomain = true;
        //obj.data.access_token = sessionStorage.token;
        obj.complete = function(e){
            if(e.responseJSON.code == '10002'){
                layer.msg('登录超时，请重新登录！');
                setTimeout(function(){window.location.href = "login.html";},1000);
            }
            clearTimeout(time);
            layer.close(index);
        }
        obj.error = function(e){
            layer.msg(e.status +" " +e.statusText);
            clearTimeout(time);
            layer.close(index);
        }
        $.ajax(obj);

    },
    pageClient: function(obj,page){
        var index = layer.load(0);
        //var index = layer.load(0, {shade: [0.1,'#fff']});
        var time = setTimeout(function(){
            layer.close(index);
            layer.msg('请求超时，请检查网络！')
        },5000);
        obj.xhrFields = {withCredentials: true};
        if(!obj.data){
            obj.data = {};
        }
        obj.crossDomain = true;
        //obj.data.access_token = sessionStorage.token;
        obj.data.pageNum =  page;
        util.currentPage = page;
        obj.complete = function(e){
            if(e.responseJSON.code == '10002'){
                layer.msg('登录超时，请重新登录！');
                setTimeout(function(){window.location.href = "login.html";},1000);
            }
            clearTimeout(time);
            layer.close(index);
        }
        obj.error = function(e){
            layer.msg(e.status +" " +e.statusText);
            clearTimeout(time);
            layer.close(index);
        }
        $.ajax(obj);
    },
    currentPage: 1,
    getDateStr: function(str){
        if(str == ''){
            return '';
        }
        var dateArr = str.split('-');
        dateArr.map(function(val,i){
            dateArr[i] = parseInt(val);
        });
        return dateArr.join('-');
    },
    getAge: function(sDate1){    //sDate1和sDate2是2006-12-18格式  
       var  aDate,  oDate1,  oDate2,  iDays  
       aDate  =  sDate1.split("-")  
       oDate1  =  new  Date(aDate[1]  +  '-'  +  parseInt(aDate[2])  +  '-'  +  parseInt(aDate[0]))    //转换为12-18-2006格式   
       oDate2  =  new  Date(); 
       iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数  
       var y = parseInt(iDays/30);
       var d = iDays%30;
       return  y+'月'+d+'天';
   },
   getTimeFromNum: function(inputTime,type){ 
        var date = new Date(inputTime);  
        var y = date.getFullYear();    
        var m = date.getMonth() + 1;    
        m = m < 10 ? ('0' + m) : m;    
        var d = date.getDate();    
        d = d < 10 ? ('0' + d) : d;    
        var h = date.getHours();  
        h = h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        var second = date.getSeconds();  
        minute = minute < 10 ? ('0' + minute) : minute;    
        second = second < 10 ? ('0' + second) : second; 
        if(type == 1 ){
            return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;   
        }else{
            return y + '-' + m + '-' + d
        }  
           
   },
   getQueryString: function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        if(window.location.href.indexOf("?") > 0){
            var r = window.location.href.split('?')[1].match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }else{
            return '';
        }
        
        
   }    
}