!function(t,i){function o(t){if(this.options={id:"",canvasId:"verifyCanvas",width:"80",height:"24",type:"blend",code:""},"[object Object]"==Object.prototype.toString.call(t)){for(var i in t)this.options[i]=t[i];console.log(this.options)}else this.options.id=t;this.options.numArr="0,1,2,3,4,5,6,7,8,9".split(","),this.options.letterArr=s(),this._init(),this.refresh()}function s(){var t="0,1,2,3,4,5,6,7,8,9";return t.split(",")}function e(t,i){return Math.floor(Math.random()*(i-t)+t)}function n(t,i){var o=e(t,i),s=e(t,i),n=e(t,i);return"rgb("+o+","+s+","+n+")"}o.prototype={version:"1.0.0",_init:function(){var t=i.getElementById(this.options.id),o=i.createElement("canvas");this.options.width=t.offsetWidth>0?t.offsetWidth:"80",this.options.height=t.offsetHeight>0?t.offsetHeight:"24",o.id=this.options.canvasId,o.width=this.options.width,o.height=this.options.height,o.style.cursor="pointer",o.innerHTML="您的浏览器版本不支持canvas",t.appendChild(o);var s=this;o.onclick=function(){s.refresh()}},refresh:function(){var t=i.getElementById(this.options.canvasId);if(t.getContext)var o=t.getContext("2d");if(o.textBaseline="middle",o.fillStyle=n(180,240),o.fillRect(0,0,this.options.width,this.options.height),"blend"==this.options.type)var s=this.options.numArr.concat(this.options.letterArr);else if("number"==this.options.type)var s=this.options.numArr;else var s=this.options.letterArr;for(var h=1;4>=h;h++){var r=s[e(0,s.length)];this.options.code+=r,o.font=e(.8*this.options.height,this.options.height)+"px SimHei",o.fillStyle=n(50,160),o.shadowOffsetX=e(-3,3),o.shadowOffsetY=e(-3,3),o.shadowBlur=e(-3,3),o.shadowColor="rgba(0, 0, 0, 0.3)";var a=this.options.width/5*h,l=this.options.height/2,p=e(-30,30);o.translate(a,l),o.rotate(p*Math.PI/180),o.fillText(r,0,0),o.rotate(-p*Math.PI/180),o.translate(-a,-l)}for(var h=0;4>h;h++)o.strokeStyle=n(40,180),o.beginPath(),o.moveTo(e(0,this.options.width),e(0,this.options.height)),o.lineTo(e(0,this.options.width),e(0,this.options.height)),o.stroke();for(var h=0;h<this.options.width/4;h++)o.fillStyle=n(0,255),o.beginPath(),o.arc(e(0,this.options.width),e(0,this.options.height),1,0,2*Math.PI),o.fill()},validate:function(t){var t=t.toLowerCase(),i=this.options.code.toLowerCase();return i=i.substring(i.length-4,i.length),console.log(i,t),t==i?!0:!1}},t.GVerify=o}(window,document);