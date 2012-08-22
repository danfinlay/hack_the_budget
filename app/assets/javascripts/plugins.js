/* Javascript plotting library for jQuery, v. 0.7.
 * Released under the MIT license by IOLA, December 2007.
 */
(function(b){b.color={};b.color.make=function(d,e,g,f){var c={};c.r=d||0;c.g=e||0;c.b=g||0;c.a=f!=null?f:1;c.add=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]+=j}return c.normalize()};c.scale=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]*=j}return c.normalize()};c.toString=function(){if(c.a>=1){return"rgb("+[c.r,c.g,c.b].join(",")+")"}else{return"rgba("+[c.r,c.g,c.b,c.a].join(",")+")"}};c.normalize=function(){function h(k,j,l){return j<k?k:(j>l?l:j)}c.r=h(0,parseInt(c.r),255);c.g=h(0,parseInt(c.g),255);c.b=h(0,parseInt(c.b),255);c.a=h(0,c.a,1);return c};c.clone=function(){return b.color.make(c.r,c.b,c.g,c.a)};return c.normalize()};b.color.extract=function(d,e){var c;do{c=d.css(e).toLowerCase();if(c!=""&&c!="transparent"){break}d=d.parent()}while(!b.nodeName(d.get(0),"body"));if(c=="rgba(0, 0, 0, 0)"){c="transparent"}return b.color.parse(c)};b.color.parse=function(c){var d,f=b.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10))}if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]))}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55)}if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]))}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){return f(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16))}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){return f(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16))}var e=b.trim(c).toLowerCase();if(e=="transparent"){return f(255,255,255,0)}else{d=a[e]||[0,0,0];return f(d[0],d[1],d[2])}};var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function(c){function b(av,ai,J,af){var Q=[],O={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},az=null,ad=null,y=null,H=null,A=null,p=[],aw=[],q={left:0,right:0,top:0,bottom:0},G=0,I=0,h=0,w=0,ak={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},aq=this;aq.setData=aj;aq.setupGrid=t;aq.draw=W;aq.getPlaceholder=function(){return av};aq.getCanvas=function(){return az};aq.getPlotOffset=function(){return q};aq.width=function(){return h};aq.height=function(){return w};aq.offset=function(){var aB=y.offset();aB.left+=q.left;aB.top+=q.top;return aB};aq.getData=function(){return Q};aq.getAxes=function(){var aC={},aB;c.each(p.concat(aw),function(aD,aE){if(aE){aC[aE.direction+(aE.n!=1?aE.n:"")+"axis"]=aE}});return aC};aq.getXAxes=function(){return p};aq.getYAxes=function(){return aw};aq.c2p=C;aq.p2c=ar;aq.getOptions=function(){return O};aq.highlight=x;aq.unhighlight=T;aq.triggerRedrawOverlay=f;aq.pointOffset=function(aB){return{left:parseInt(p[aA(aB,"x")-1].p2c(+aB.x)+q.left),top:parseInt(aw[aA(aB,"y")-1].p2c(+aB.y)+q.top)}};aq.shutdown=ag;aq.resize=function(){B();g(az);g(ad)};aq.hooks=ak;F(aq);Z(J);X();aj(ai);t();W();ah();function an(aD,aB){aB=[aq].concat(aB);for(var aC=0;aC<aD.length;++aC){aD[aC].apply(this,aB)}}function F(){for(var aB=0;aB<af.length;++aB){var aC=af[aB];aC.init(aq);if(aC.options){c.extend(true,O,aC.options)}}}function Z(aC){var aB;c.extend(true,O,aC);if(O.xaxis.color==null){O.xaxis.color=O.grid.color}if(O.yaxis.color==null){O.yaxis.color=O.grid.color}if(O.xaxis.tickColor==null){O.xaxis.tickColor=O.grid.tickColor}if(O.yaxis.tickColor==null){O.yaxis.tickColor=O.grid.tickColor}if(O.grid.borderColor==null){O.grid.borderColor=O.grid.color}if(O.grid.tickColor==null){O.grid.tickColor=c.color.parse(O.grid.color).scale("a",0.22).toString()}for(aB=0;aB<Math.max(1,O.xaxes.length);++aB){O.xaxes[aB]=c.extend(true,{},O.xaxis,O.xaxes[aB])}for(aB=0;aB<Math.max(1,O.yaxes.length);++aB){O.yaxes[aB]=c.extend(true,{},O.yaxis,O.yaxes[aB])}if(O.xaxis.noTicks&&O.xaxis.ticks==null){O.xaxis.ticks=O.xaxis.noTicks}if(O.yaxis.noTicks&&O.yaxis.ticks==null){O.yaxis.ticks=O.yaxis.noTicks}if(O.x2axis){O.xaxes[1]=c.extend(true,{},O.xaxis,O.x2axis);O.xaxes[1].position="top"}if(O.y2axis){O.yaxes[1]=c.extend(true,{},O.yaxis,O.y2axis);O.yaxes[1].position="right"}if(O.grid.coloredAreas){O.grid.markings=O.grid.coloredAreas}if(O.grid.coloredAreasColor){O.grid.markingsColor=O.grid.coloredAreasColor}if(O.lines){c.extend(true,O.series.lines,O.lines)}if(O.points){c.extend(true,O.series.points,O.points)}if(O.bars){c.extend(true,O.series.bars,O.bars)}if(O.shadowSize!=null){O.series.shadowSize=O.shadowSize}for(aB=0;aB<O.xaxes.length;++aB){V(p,aB+1).options=O.xaxes[aB]}for(aB=0;aB<O.yaxes.length;++aB){V(aw,aB+1).options=O.yaxes[aB]}for(var aD in ak){if(O.hooks[aD]&&O.hooks[aD].length){ak[aD]=ak[aD].concat(O.hooks[aD])}}an(ak.processOptions,[O])}function aj(aB){Q=Y(aB);ax();z()}function Y(aE){var aC=[];for(var aB=0;aB<aE.length;++aB){var aD=c.extend(true,{},O.series);if(aE[aB].data!=null){aD.data=aE[aB].data;delete aE[aB].data;c.extend(true,aD,aE[aB]);aE[aB].data=aD.data}else{aD.data=aE[aB]}aC.push(aD)}return aC}function aA(aC,aD){var aB=aC[aD+"axis"];if(typeof aB=="object"){aB=aB.n}if(typeof aB!="number"){aB=1}return aB}function m(){return c.grep(p.concat(aw),function(aB){return aB})}function C(aE){var aC={},aB,aD;for(aB=0;aB<p.length;++aB){aD=p[aB];if(aD&&aD.used){aC["x"+aD.n]=aD.c2p(aE.left)}}for(aB=0;aB<aw.length;++aB){aD=aw[aB];if(aD&&aD.used){aC["y"+aD.n]=aD.c2p(aE.top)}}if(aC.x1!==undefined){aC.x=aC.x1}if(aC.y1!==undefined){aC.y=aC.y1}return aC}function ar(aF){var aD={},aC,aE,aB;for(aC=0;aC<p.length;++aC){aE=p[aC];if(aE&&aE.used){aB="x"+aE.n;if(aF[aB]==null&&aE.n==1){aB="x"}if(aF[aB]!=null){aD.left=aE.p2c(aF[aB]);break}}}for(aC=0;aC<aw.length;++aC){aE=aw[aC];if(aE&&aE.used){aB="y"+aE.n;if(aF[aB]==null&&aE.n==1){aB="y"}if(aF[aB]!=null){aD.top=aE.p2c(aF[aB]);break}}}return aD}function V(aC,aB){if(!aC[aB-1]){aC[aB-1]={n:aB,direction:aC==p?"x":"y",options:c.extend(true,{},aC==p?O.xaxis:O.yaxis)}}return aC[aB-1]}function ax(){var aG;var aM=Q.length,aB=[],aE=[];for(aG=0;aG<Q.length;++aG){var aJ=Q[aG].color;if(aJ!=null){--aM;if(typeof aJ=="number"){aE.push(aJ)}else{aB.push(c.color.parse(Q[aG].color))}}}for(aG=0;aG<aE.length;++aG){aM=Math.max(aM,aE[aG]+1)}var aC=[],aF=0;aG=0;while(aC.length<aM){var aI;if(O.colors.length==aG){aI=c.color.make(100,100,100)}else{aI=c.color.parse(O.colors[aG])}var aD=aF%2==1?-1:1;aI.scale("rgb",1+aD*Math.ceil(aF/2)*0.2);aC.push(aI);++aG;if(aG>=O.colors.length){aG=0;++aF}}var aH=0,aN;for(aG=0;aG<Q.length;++aG){aN=Q[aG];if(aN.color==null){aN.color=aC[aH].toString();++aH}else{if(typeof aN.color=="number"){aN.color=aC[aN.color].toString()}}if(aN.lines.show==null){var aL,aK=true;for(aL in aN){if(aN[aL]&&aN[aL].show){aK=false;break}}if(aK){aN.lines.show=true}}aN.xaxis=V(p,aA(aN,"x"));aN.yaxis=V(aw,aA(aN,"y"))}}function z(){var aO=Number.POSITIVE_INFINITY,aI=Number.NEGATIVE_INFINITY,aB=Number.MAX_VALUE,aU,aS,aR,aN,aD,aJ,aT,aP,aH,aG,aC,a0,aX,aL;function aF(a3,a2,a1){if(a2<a3.datamin&&a2!=-aB){a3.datamin=a2}if(a1>a3.datamax&&a1!=aB){a3.datamax=a1}}c.each(m(),function(a1,a2){a2.datamin=aO;a2.datamax=aI;a2.used=false});for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aJ.datapoints={points:[]};an(ak.processRawData,[aJ,aJ.data,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];var aZ=aJ.data,aW=aJ.datapoints.format;if(!aW){aW=[];aW.push({x:true,number:true,required:true});aW.push({y:true,number:true,required:true});if(aJ.bars.show||(aJ.lines.show&&aJ.lines.fill)){aW.push({y:true,number:true,required:false,defaultValue:0});if(aJ.bars.horizontal){delete aW[aW.length-1].y;aW[aW.length-1].x=true}}aJ.datapoints.format=aW}if(aJ.datapoints.pointsize!=null){continue}aJ.datapoints.pointsize=aW.length;aP=aJ.datapoints.pointsize;aT=aJ.datapoints.points;insertSteps=aJ.lines.show&&aJ.lines.steps;aJ.xaxis.used=aJ.yaxis.used=true;for(aS=aR=0;aS<aZ.length;++aS,aR+=aP){aL=aZ[aS];var aE=aL==null;if(!aE){for(aN=0;aN<aP;++aN){a0=aL[aN];aX=aW[aN];if(aX){if(aX.number&&a0!=null){a0=+a0;if(isNaN(a0)){a0=null}else{if(a0==Infinity){a0=aB}else{if(a0==-Infinity){a0=-aB}}}}if(a0==null){if(aX.required){aE=true}if(aX.defaultValue!=null){a0=aX.defaultValue}}}aT[aR+aN]=a0}}if(aE){for(aN=0;aN<aP;++aN){a0=aT[aR+aN];if(a0!=null){aX=aW[aN];if(aX.x){aF(aJ.xaxis,a0,a0)}if(aX.y){aF(aJ.yaxis,a0,a0)}}aT[aR+aN]=null}}else{if(insertSteps&&aR>0&&aT[aR-aP]!=null&&aT[aR-aP]!=aT[aR]&&aT[aR-aP+1]!=aT[aR+1]){for(aN=0;aN<aP;++aN){aT[aR+aP+aN]=aT[aR+aN]}aT[aR+1]=aT[aR-aP+1];aR+=aP}}}}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];an(ak.processDatapoints,[aJ,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aT=aJ.datapoints.points,aP=aJ.datapoints.pointsize;var aK=aO,aQ=aO,aM=aI,aV=aI;for(aS=0;aS<aT.length;aS+=aP){if(aT[aS]==null){continue}for(aN=0;aN<aP;++aN){a0=aT[aS+aN];aX=aW[aN];if(!aX||a0==aB||a0==-aB){continue}if(aX.x){if(a0<aK){aK=a0}if(a0>aM){aM=a0}}if(aX.y){if(a0<aQ){aQ=a0}if(a0>aV){aV=a0}}}}if(aJ.bars.show){var aY=aJ.bars.align=="left"?0:-aJ.bars.barWidth/2;if(aJ.bars.horizontal){aQ+=aY;aV+=aY+aJ.bars.barWidth}else{aK+=aY;aM+=aY+aJ.bars.barWidth}}aF(aJ.xaxis,aK,aM);aF(aJ.yaxis,aQ,aV)}c.each(m(),function(a1,a2){if(a2.datamin==aO){a2.datamin=null}if(a2.datamax==aI){a2.datamax=null}})}function j(aB,aC){var aD=document.createElement("canvas");aD.className=aC;aD.width=G;aD.height=I;if(!aB){c(aD).css({position:"absolute",left:0,top:0})}c(aD).appendTo(av);if(!aD.getContext){aD=window.G_vmlCanvasManager.initElement(aD)}aD.getContext("2d").save();return aD}function B(){G=av.width();I=av.height();if(G<=0||I<=0){throw"Invalid dimensions for plot, width = "+G+", height = "+I}}function g(aC){if(aC.width!=G){aC.width=G}if(aC.height!=I){aC.height=I}var aB=aC.getContext("2d");aB.restore();aB.save()}function X(){var aC,aB=av.children("canvas.base"),aD=av.children("canvas.overlay");if(aB.length==0||aD==0){av.html("");av.css({padding:0});if(av.css("position")=="static"){av.css("position","relative")}B();az=j(true,"base");ad=j(false,"overlay");aC=false}else{az=aB.get(0);ad=aD.get(0);aC=true}H=az.getContext("2d");A=ad.getContext("2d");y=c([ad,az]);if(aC){av.data("plot").shutdown();aq.resize();A.clearRect(0,0,G,I);y.unbind();av.children().not([az,ad]).remove()}av.data("plot",aq)}function ah(){if(O.grid.hoverable){y.mousemove(aa);y.mouseleave(l)}if(O.grid.clickable){y.click(R)}an(ak.bindEvents,[y])}function ag(){if(M){clearTimeout(M)}y.unbind("mousemove",aa);y.unbind("mouseleave",l);y.unbind("click",R);an(ak.shutdown,[y])}function r(aG){function aC(aH){return aH}var aF,aB,aD=aG.options.transform||aC,aE=aG.options.inverseTransform;if(aG.direction=="x"){aF=aG.scale=h/Math.abs(aD(aG.max)-aD(aG.min));aB=Math.min(aD(aG.max),aD(aG.min))}else{aF=aG.scale=w/Math.abs(aD(aG.max)-aD(aG.min));aF=-aF;aB=Math.max(aD(aG.max),aD(aG.min))}if(aD==aC){aG.p2c=function(aH){return(aH-aB)*aF}}else{aG.p2c=function(aH){return(aD(aH)-aB)*aF}}if(!aE){aG.c2p=function(aH){return aB+aH/aF}}else{aG.c2p=function(aH){return aE(aB+aH/aF)}}}function L(aD){var aB=aD.options,aF,aJ=aD.ticks||[],aI=[],aE,aK=aB.labelWidth,aG=aB.labelHeight,aC;function aH(aM,aL){return c('<div style="position:absolute;top:-10000px;'+aL+'font-size:smaller"><div class="'+aD.direction+"Axis "+aD.direction+aD.n+'Axis">'+aM.join("")+"</div></div>").appendTo(av)}if(aD.direction=="x"){if(aK==null){aK=Math.floor(G/(aJ.length>0?aJ.length:1))}if(aG==null){aI=[];for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel" style="float:left;width:'+aK+'px">'+aE+"</div>")}}if(aI.length>0){aI.push('<div style="clear:left"></div>');aC=aH(aI,"width:10000px;");aG=aC.height();aC.remove()}}}else{if(aK==null||aG==null){for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel">'+aE+"</div>")}}if(aI.length>0){aC=aH(aI,"");if(aK==null){aK=aC.children().width()}if(aG==null){aG=aC.find("div.tickLabel").height()}aC.remove()}}}if(aK==null){aK=0}if(aG==null){aG=0}aD.labelWidth=aK;aD.labelHeight=aG}function au(aD){var aC=aD.labelWidth,aL=aD.labelHeight,aH=aD.options.position,aF=aD.options.tickLength,aG=O.grid.axisMargin,aJ=O.grid.labelMargin,aK=aD.direction=="x"?p:aw,aE;var aB=c.grep(aK,function(aN){return aN&&aN.options.position==aH&&aN.reserveSpace});if(c.inArray(aD,aB)==aB.length-1){aG=0}if(aF==null){aF="full"}var aI=c.grep(aK,function(aN){return aN&&aN.reserveSpace});var aM=c.inArray(aD,aI)==0;if(!aM&&aF=="full"){aF=5}if(!isNaN(+aF)){aJ+=+aF}if(aD.direction=="x"){aL+=aJ;if(aH=="bottom"){q.bottom+=aL+aG;aD.box={top:I-q.bottom,height:aL}}else{aD.box={top:q.top+aG,height:aL};q.top+=aL+aG}}else{aC+=aJ;if(aH=="left"){aD.box={left:q.left+aG,width:aC};q.left+=aC+aG}else{q.right+=aC+aG;aD.box={left:G-q.right,width:aC}}}aD.position=aH;aD.tickLength=aF;aD.box.padding=aJ;aD.innermost=aM}function U(aB){if(aB.direction=="x"){aB.box.left=q.left;aB.box.width=h}else{aB.box.top=q.top;aB.box.height=w}}function t(){var aC,aE=m();c.each(aE,function(aF,aG){aG.show=aG.options.show;if(aG.show==null){aG.show=aG.used}aG.reserveSpace=aG.show||aG.options.reserveSpace;n(aG)});allocatedAxes=c.grep(aE,function(aF){return aF.reserveSpace});q.left=q.right=q.top=q.bottom=0;if(O.grid.show){c.each(allocatedAxes,function(aF,aG){S(aG);P(aG);ap(aG,aG.ticks);L(aG)});for(aC=allocatedAxes.length-1;aC>=0;--aC){au(allocatedAxes[aC])}var aD=O.grid.minBorderMargin;if(aD==null){aD=0;for(aC=0;aC<Q.length;++aC){aD=Math.max(aD,Q[aC].points.radius+Q[aC].points.lineWidth/2)}}for(var aB in q){q[aB]+=O.grid.borderWidth;q[aB]=Math.max(aD,q[aB])}}h=G-q.left-q.right;w=I-q.bottom-q.top;c.each(aE,function(aF,aG){r(aG)});if(O.grid.show){c.each(allocatedAxes,function(aF,aG){U(aG)});k()}o()}function n(aE){var aF=aE.options,aD=+(aF.min!=null?aF.min:aE.datamin),aB=+(aF.max!=null?aF.max:aE.datamax),aH=aB-aD;if(aH==0){var aC=aB==0?1:0.01;if(aF.min==null){aD-=aC}if(aF.max==null||aF.min!=null){aB+=aC}}else{var aG=aF.autoscaleMargin;if(aG!=null){if(aF.min==null){aD-=aH*aG;if(aD<0&&aE.datamin!=null&&aE.datamin>=0){aD=0}}if(aF.max==null){aB+=aH*aG;if(aB>0&&aE.datamax!=null&&aE.datamax<=0){aB=0}}}}aE.min=aD;aE.max=aB}function S(aG){var aM=aG.options;var aH;if(typeof aM.ticks=="number"&&aM.ticks>0){aH=aM.ticks}else{aH=0.3*Math.sqrt(aG.direction=="x"?G:I)}var aT=(aG.max-aG.min)/aH,aO,aB,aN,aR,aS,aQ,aI;if(aM.mode=="time"){var aJ={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var aK=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var aC=0;if(aM.minTickSize!=null){if(typeof aM.tickSize=="number"){aC=aM.tickSize}else{aC=aM.minTickSize[0]*aJ[aM.minTickSize[1]]}}for(var aS=0;aS<aK.length-1;++aS){if(aT<(aK[aS][0]*aJ[aK[aS][1]]+aK[aS+1][0]*aJ[aK[aS+1][1]])/2&&aK[aS][0]*aJ[aK[aS][1]]>=aC){break}}aO=aK[aS][0];aN=aK[aS][1];if(aN=="year"){aQ=Math.pow(10,Math.floor(Math.log(aT/aJ.year)/Math.LN10));aI=(aT/aJ.year)/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ}aG.tickSize=aM.tickSize||[aO,aN];aB=function(aX){var a2=[],a0=aX.tickSize[0],a3=aX.tickSize[1],a1=new Date(aX.min);var aW=a0*aJ[a3];if(a3=="second"){a1.setUTCSeconds(a(a1.getUTCSeconds(),a0))}if(a3=="minute"){a1.setUTCMinutes(a(a1.getUTCMinutes(),a0))}if(a3=="hour"){a1.setUTCHours(a(a1.getUTCHours(),a0))}if(a3=="month"){a1.setUTCMonth(a(a1.getUTCMonth(),a0))}if(a3=="year"){a1.setUTCFullYear(a(a1.getUTCFullYear(),a0))}a1.setUTCMilliseconds(0);if(aW>=aJ.minute){a1.setUTCSeconds(0)}if(aW>=aJ.hour){a1.setUTCMinutes(0)}if(aW>=aJ.day){a1.setUTCHours(0)}if(aW>=aJ.day*4){a1.setUTCDate(1)}if(aW>=aJ.year){a1.setUTCMonth(0)}var a5=0,a4=Number.NaN,aY;do{aY=a4;a4=a1.getTime();a2.push(a4);if(a3=="month"){if(a0<1){a1.setUTCDate(1);var aV=a1.getTime();a1.setUTCMonth(a1.getUTCMonth()+1);var aZ=a1.getTime();a1.setTime(a4+a5*aJ.hour+(aZ-aV)*a0);a5=a1.getUTCHours();a1.setUTCHours(0)}else{a1.setUTCMonth(a1.getUTCMonth()+a0)}}else{if(a3=="year"){a1.setUTCFullYear(a1.getUTCFullYear()+a0)}else{a1.setTime(a4+aW)}}}while(a4<aX.max&&a4!=aY);return a2};aR=function(aV,aY){var a0=new Date(aV);if(aM.timeformat!=null){return c.plot.formatDate(a0,aM.timeformat,aM.monthNames)}var aW=aY.tickSize[0]*aJ[aY.tickSize[1]];var aX=aY.max-aY.min;var aZ=(aM.twelveHourClock)?" %p":"";if(aW<aJ.minute){fmt="%h:%M:%S"+aZ}else{if(aW<aJ.day){if(aX<2*aJ.day){fmt="%h:%M"+aZ}else{fmt="%b %d %h:%M"+aZ}}else{if(aW<aJ.month){fmt="%b %d"}else{if(aW<aJ.year){if(aX<aJ.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return c.plot.formatDate(a0,fmt,aM.monthNames)}}else{var aU=aM.tickDecimals;var aP=-Math.floor(Math.log(aT)/Math.LN10);if(aU!=null&&aP>aU){aP=aU}aQ=Math.pow(10,-aP);aI=aT/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2;if(aI>2.25&&(aU==null||aP+1<=aU)){aO=2.5;++aP}}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ;if(aM.minTickSize!=null&&aO<aM.minTickSize){aO=aM.minTickSize}aG.tickDecimals=Math.max(0,aU!=null?aU:aP);aG.tickSize=aM.tickSize||aO;aB=function(aX){var aZ=[];var a0=a(aX.min,aX.tickSize),aW=0,aV=Number.NaN,aY;do{aY=aV;aV=a0+aW*aX.tickSize;aZ.push(aV);++aW}while(aV<aX.max&&aV!=aY);return aZ};aR=function(aV,aW){return aV.toFixed(aW.tickDecimals)}}if(aM.alignTicksWithAxis!=null){var aF=(aG.direction=="x"?p:aw)[aM.alignTicksWithAxis-1];if(aF&&aF.used&&aF!=aG){var aL=aB(aG);if(aL.length>0){if(aM.min==null){aG.min=Math.min(aG.min,aL[0])}if(aM.max==null&&aL.length>1){aG.max=Math.max(aG.max,aL[aL.length-1])}}aB=function(aX){var aY=[],aV,aW;for(aW=0;aW<aF.ticks.length;++aW){aV=(aF.ticks[aW].v-aF.min)/(aF.max-aF.min);aV=aX.min+aV*(aX.max-aX.min);aY.push(aV)}return aY};if(aG.mode!="time"&&aM.tickDecimals==null){var aE=Math.max(0,-Math.floor(Math.log(aT)/Math.LN10)+1),aD=aB(aG);if(!(aD.length>1&&/\..*0$/.test((aD[1]-aD[0]).toFixed(aE)))){aG.tickDecimals=aE}}}}aG.tickGenerator=aB;if(c.isFunction(aM.tickFormatter)){aG.tickFormatter=function(aV,aW){return""+aM.tickFormatter(aV,aW)}}else{aG.tickFormatter=aR}}function P(aF){var aH=aF.options.ticks,aG=[];if(aH==null||(typeof aH=="number"&&aH>0)){aG=aF.tickGenerator(aF)}else{if(aH){if(c.isFunction(aH)){aG=aH({min:aF.min,max:aF.max})}else{aG=aH}}}var aE,aB;aF.ticks=[];for(aE=0;aE<aG.length;++aE){var aC=null;var aD=aG[aE];if(typeof aD=="object"){aB=+aD[0];if(aD.length>1){aC=aD[1]}}else{aB=+aD}if(aC==null){aC=aF.tickFormatter(aB,aF)}if(!isNaN(aB)){aF.ticks.push({v:aB,label:aC})}}}function ap(aB,aC){if(aB.options.autoscaleMargin&&aC.length>0){if(aB.options.min==null){aB.min=Math.min(aB.min,aC[0].v)}if(aB.options.max==null&&aC.length>1){aB.max=Math.max(aB.max,aC[aC.length-1].v)}}}function W(){H.clearRect(0,0,G,I);var aC=O.grid;if(aC.show&&aC.backgroundColor){N()}if(aC.show&&!aC.aboveData){ac()}for(var aB=0;aB<Q.length;++aB){an(ak.drawSeries,[H,Q[aB]]);d(Q[aB])}an(ak.draw,[H]);if(aC.show&&aC.aboveData){ac()}}function D(aB,aI){var aE,aH,aG,aD,aF=m();for(i=0;i<aF.length;++i){aE=aF[i];if(aE.direction==aI){aD=aI+aE.n+"axis";if(!aB[aD]&&aE.n==1){aD=aI+"axis"}if(aB[aD]){aH=aB[aD].from;aG=aB[aD].to;break}}}if(!aB[aD]){aE=aI=="x"?p[0]:aw[0];aH=aB[aI+"1"];aG=aB[aI+"2"]}if(aH!=null&&aG!=null&&aH>aG){var aC=aH;aH=aG;aG=aC}return{from:aH,to:aG,axis:aE}}function N(){H.save();H.translate(q.left,q.top);H.fillStyle=am(O.grid.backgroundColor,w,0,"rgba(255, 255, 255, 0)");H.fillRect(0,0,h,w);H.restore()}function ac(){var aF;H.save();H.translate(q.left,q.top);var aH=O.grid.markings;if(aH){if(c.isFunction(aH)){var aK=aq.getAxes();aK.xmin=aK.xaxis.min;aK.xmax=aK.xaxis.max;aK.ymin=aK.yaxis.min;aK.ymax=aK.yaxis.max;aH=aH(aK)}for(aF=0;aF<aH.length;++aF){var aD=aH[aF],aC=D(aD,"x"),aI=D(aD,"y");if(aC.from==null){aC.from=aC.axis.min}if(aC.to==null){aC.to=aC.axis.max}if(aI.from==null){aI.from=aI.axis.min}if(aI.to==null){aI.to=aI.axis.max}if(aC.to<aC.axis.min||aC.from>aC.axis.max||aI.to<aI.axis.min||aI.from>aI.axis.max){continue}aC.from=Math.max(aC.from,aC.axis.min);aC.to=Math.min(aC.to,aC.axis.max);aI.from=Math.max(aI.from,aI.axis.min);aI.to=Math.min(aI.to,aI.axis.max);if(aC.from==aC.to&&aI.from==aI.to){continue}aC.from=aC.axis.p2c(aC.from);aC.to=aC.axis.p2c(aC.to);aI.from=aI.axis.p2c(aI.from);aI.to=aI.axis.p2c(aI.to);if(aC.from==aC.to||aI.from==aI.to){H.beginPath();H.strokeStyle=aD.color||O.grid.markingsColor;H.lineWidth=aD.lineWidth||O.grid.markingsLineWidth;H.moveTo(aC.from,aI.from);H.lineTo(aC.to,aI.to);H.stroke()}else{H.fillStyle=aD.color||O.grid.markingsColor;H.fillRect(aC.from,aI.to,aC.to-aC.from,aI.from-aI.to)}}}var aK=m(),aM=O.grid.borderWidth;for(var aE=0;aE<aK.length;++aE){var aB=aK[aE],aG=aB.box,aQ=aB.tickLength,aN,aL,aP,aJ;if(!aB.show||aB.ticks.length==0){continue}H.strokeStyle=aB.options.tickColor||c.color.parse(aB.options.color).scale("a",0.22).toString();H.lineWidth=1;if(aB.direction=="x"){aN=0;if(aQ=="full"){aL=(aB.position=="top"?0:w)}else{aL=aG.top-q.top+(aB.position=="top"?aG.height:0)}}else{aL=0;if(aQ=="full"){aN=(aB.position=="left"?0:h)}else{aN=aG.left-q.left+(aB.position=="left"?aG.width:0)}}if(!aB.innermost){H.beginPath();aP=aJ=0;if(aB.direction=="x"){aP=h}else{aJ=w}if(H.lineWidth==1){aN=Math.floor(aN)+0.5;aL=Math.floor(aL)+0.5}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ);H.stroke()}H.beginPath();for(aF=0;aF<aB.ticks.length;++aF){var aO=aB.ticks[aF].v;aP=aJ=0;if(aO<aB.min||aO>aB.max||(aQ=="full"&&aM>0&&(aO==aB.min||aO==aB.max))){continue}if(aB.direction=="x"){aN=aB.p2c(aO);aJ=aQ=="full"?-w:aQ;if(aB.position=="top"){aJ=-aJ}}else{aL=aB.p2c(aO);aP=aQ=="full"?-h:aQ;if(aB.position=="left"){aP=-aP}}if(H.lineWidth==1){if(aB.direction=="x"){aN=Math.floor(aN)+0.5}else{aL=Math.floor(aL)+0.5}}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ)}H.stroke()}if(aM){H.lineWidth=aM;H.strokeStyle=O.grid.borderColor;H.strokeRect(-aM/2,-aM/2,h+aM,w+aM)}H.restore()}function k(){av.find(".tickLabels").remove();var aG=['<div class="tickLabels" style="font-size:smaller">'];var aJ=m();for(var aD=0;aD<aJ.length;++aD){var aC=aJ[aD],aF=aC.box;if(!aC.show){continue}aG.push('<div class="'+aC.direction+"Axis "+aC.direction+aC.n+'Axis" style="color:'+aC.options.color+'">');for(var aE=0;aE<aC.ticks.length;++aE){var aH=aC.ticks[aE];if(!aH.label||aH.v<aC.min||aH.v>aC.max){continue}var aK={},aI;if(aC.direction=="x"){aI="center";aK.left=Math.round(q.left+aC.p2c(aH.v)-aC.labelWidth/2);if(aC.position=="bottom"){aK.top=aF.top+aF.padding}else{aK.bottom=I-(aF.top+aF.height-aF.padding)}}else{aK.top=Math.round(q.top+aC.p2c(aH.v)-aC.labelHeight/2);if(aC.position=="left"){aK.right=G-(aF.left+aF.width-aF.padding);aI="right"}else{aK.left=aF.left+aF.padding;aI="left"}}aK.width=aC.labelWidth;var aB=["position:absolute","text-align:"+aI];for(var aL in aK){aB.push(aL+":"+aK[aL]+"px")}aG.push('<div class="tickLabel" style="'+aB.join(";")+'">'+aH.label+"</div>")}aG.push("</div>")}aG.push("</div>");av.append(aG.join(""))}function d(aB){if(aB.lines.show){at(aB)}if(aB.bars.show){e(aB)}if(aB.points.show){ao(aB)}}function at(aE){function aD(aP,aQ,aI,aU,aT){var aV=aP.points,aJ=aP.pointsize,aN=null,aM=null;H.beginPath();for(var aO=aJ;aO<aV.length;aO+=aJ){var aL=aV[aO-aJ],aS=aV[aO-aJ+1],aK=aV[aO],aR=aV[aO+1];if(aL==null||aK==null){continue}if(aS<=aR&&aS<aT.min){if(aR<aT.min){continue}aL=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.min}else{if(aR<=aS&&aR<aT.min){if(aS<aT.min){continue}aK=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.min}}if(aS>=aR&&aS>aT.max){if(aR>aT.max){continue}aL=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.max}else{if(aR>=aS&&aR>aT.max){if(aS>aT.max){continue}aK=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.max}}if(aL<=aK&&aL<aU.min){if(aK<aU.min){continue}aS=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.min}else{if(aK<=aL&&aK<aU.min){if(aL<aU.min){continue}aR=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.min}}if(aL>=aK&&aL>aU.max){if(aK>aU.max){continue}aS=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.max}else{if(aK>=aL&&aK>aU.max){if(aL>aU.max){continue}aR=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.max}}if(aL!=aN||aS!=aM){H.moveTo(aU.p2c(aL)+aQ,aT.p2c(aS)+aI)}aN=aK;aM=aR;H.lineTo(aU.p2c(aK)+aQ,aT.p2c(aR)+aI)}H.stroke()}function aF(aI,aQ,aP){var aW=aI.points,aV=aI.pointsize,aN=Math.min(Math.max(0,aP.min),aP.max),aX=0,aU,aT=false,aM=1,aL=0,aR=0;while(true){if(aV>0&&aX>aW.length+aV){break}aX+=aV;var aZ=aW[aX-aV],aK=aW[aX-aV+aM],aY=aW[aX],aJ=aW[aX+aM];if(aT){if(aV>0&&aZ!=null&&aY==null){aR=aX;aV=-aV;aM=2;continue}if(aV<0&&aX==aL+aV){H.fill();aT=false;aV=-aV;aM=1;aX=aL=aR+aV;continue}}if(aZ==null||aY==null){continue}if(aZ<=aY&&aZ<aQ.min){if(aY<aQ.min){continue}aK=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.min}else{if(aY<=aZ&&aY<aQ.min){if(aZ<aQ.min){continue}aJ=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.min}}if(aZ>=aY&&aZ>aQ.max){if(aY>aQ.max){continue}aK=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.max}else{if(aY>=aZ&&aY>aQ.max){if(aZ>aQ.max){continue}aJ=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.max}}if(!aT){H.beginPath();H.moveTo(aQ.p2c(aZ),aP.p2c(aN));aT=true}if(aK>=aP.max&&aJ>=aP.max){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.max));H.lineTo(aQ.p2c(aY),aP.p2c(aP.max));continue}else{if(aK<=aP.min&&aJ<=aP.min){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.min));H.lineTo(aQ.p2c(aY),aP.p2c(aP.min));continue}}var aO=aZ,aS=aY;if(aK<=aJ&&aK<aP.min&&aJ>=aP.min){aZ=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.min}else{if(aJ<=aK&&aJ<aP.min&&aK>=aP.min){aY=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.min}}if(aK>=aJ&&aK>aP.max&&aJ<=aP.max){aZ=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.max}else{if(aJ>=aK&&aJ>aP.max&&aK<=aP.max){aY=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.max}}if(aZ!=aO){H.lineTo(aQ.p2c(aO),aP.p2c(aK))}H.lineTo(aQ.p2c(aZ),aP.p2c(aK));H.lineTo(aQ.p2c(aY),aP.p2c(aJ));if(aY!=aS){H.lineTo(aQ.p2c(aY),aP.p2c(aJ));H.lineTo(aQ.p2c(aS),aP.p2c(aJ))}}}H.save();H.translate(q.left,q.top);H.lineJoin="round";var aG=aE.lines.lineWidth,aB=aE.shadowSize;if(aG>0&&aB>0){H.lineWidth=aB;H.strokeStyle="rgba(0,0,0,0.1)";var aH=Math.PI/18;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/2),Math.cos(aH)*(aG/2+aB/2),aE.xaxis,aE.yaxis);H.lineWidth=aB/2;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/4),Math.cos(aH)*(aG/2+aB/4),aE.xaxis,aE.yaxis)}H.lineWidth=aG;H.strokeStyle=aE.color;var aC=ae(aE.lines,aE.color,0,w);if(aC){H.fillStyle=aC;aF(aE.datapoints,aE.xaxis,aE.yaxis)}if(aG>0){aD(aE.datapoints,0,0,aE.xaxis,aE.yaxis)}H.restore()}function ao(aE){function aH(aN,aM,aU,aK,aS,aT,aQ,aJ){var aR=aN.points,aI=aN.pointsize;for(var aL=0;aL<aR.length;aL+=aI){var aP=aR[aL],aO=aR[aL+1];if(aP==null||aP<aT.min||aP>aT.max||aO<aQ.min||aO>aQ.max){continue}H.beginPath();aP=aT.p2c(aP);aO=aQ.p2c(aO)+aK;if(aJ=="circle"){H.arc(aP,aO,aM,0,aS?Math.PI:Math.PI*2,false)}else{aJ(H,aP,aO,aM,aS)}H.closePath();if(aU){H.fillStyle=aU;H.fill()}H.stroke()}}H.save();H.translate(q.left,q.top);var aG=aE.points.lineWidth,aC=aE.shadowSize,aB=aE.points.radius,aF=aE.points.symbol;if(aG>0&&aC>0){var aD=aC/2;H.lineWidth=aD;H.strokeStyle="rgba(0,0,0,0.1)";aH(aE.datapoints,aB,null,aD+aD/2,true,aE.xaxis,aE.yaxis,aF);H.strokeStyle="rgba(0,0,0,0.2)";aH(aE.datapoints,aB,null,aD/2,true,aE.xaxis,aE.yaxis,aF)}H.lineWidth=aG;H.strokeStyle=aE.color;aH(aE.datapoints,aB,ae(aE.points,aE.color),0,false,aE.xaxis,aE.yaxis,aF);H.restore()}function E(aN,aM,aV,aI,aQ,aF,aD,aL,aK,aU,aR,aC){var aE,aT,aJ,aP,aG,aB,aO,aH,aS;if(aR){aH=aB=aO=true;aG=false;aE=aV;aT=aN;aP=aM+aI;aJ=aM+aQ;if(aT<aE){aS=aT;aT=aE;aE=aS;aG=true;aB=false}}else{aG=aB=aO=true;aH=false;aE=aN+aI;aT=aN+aQ;aJ=aV;aP=aM;if(aP<aJ){aS=aP;aP=aJ;aJ=aS;aH=true;aO=false}}if(aT<aL.min||aE>aL.max||aP<aK.min||aJ>aK.max){return}if(aE<aL.min){aE=aL.min;aG=false}if(aT>aL.max){aT=aL.max;aB=false}if(aJ<aK.min){aJ=aK.min;aH=false}if(aP>aK.max){aP=aK.max;aO=false}aE=aL.p2c(aE);aJ=aK.p2c(aJ);aT=aL.p2c(aT);aP=aK.p2c(aP);if(aD){aU.beginPath();aU.moveTo(aE,aJ);aU.lineTo(aE,aP);aU.lineTo(aT,aP);aU.lineTo(aT,aJ);aU.fillStyle=aD(aJ,aP);aU.fill()}if(aC>0&&(aG||aB||aO||aH)){aU.beginPath();aU.moveTo(aE,aJ+aF);if(aG){aU.lineTo(aE,aP+aF)}else{aU.moveTo(aE,aP+aF)}if(aO){aU.lineTo(aT,aP+aF)}else{aU.moveTo(aT,aP+aF)}if(aB){aU.lineTo(aT,aJ+aF)}else{aU.moveTo(aT,aJ+aF)}if(aH){aU.lineTo(aE,aJ+aF)}else{aU.moveTo(aE,aJ+aF)}aU.stroke()}}function e(aD){function aC(aJ,aI,aL,aG,aK,aN,aM){var aO=aJ.points,aF=aJ.pointsize;for(var aH=0;aH<aO.length;aH+=aF){if(aO[aH]==null){continue}E(aO[aH],aO[aH+1],aO[aH+2],aI,aL,aG,aK,aN,aM,H,aD.bars.horizontal,aD.bars.lineWidth)}}H.save();H.translate(q.left,q.top);H.lineWidth=aD.bars.lineWidth;H.strokeStyle=aD.color;var aB=aD.bars.align=="left"?0:-aD.bars.barWidth/2;var aE=aD.bars.fill?function(aF,aG){return ae(aD.bars,aD.color,aF,aG)}:null;aC(aD.datapoints,aB,aB+aD.bars.barWidth,0,aE,aD.xaxis,aD.yaxis);H.restore()}function ae(aD,aB,aC,aF){var aE=aD.fill;if(!aE){return null}if(aD.fillColor){return am(aD.fillColor,aC,aF,aB)}var aG=c.color.parse(aB);aG.a=typeof aE=="number"?aE:0.4;aG.normalize();return aG.toString()}function o(){av.find(".legend").remove();if(!O.legend.show){return}var aH=[],aF=false,aN=O.legend.labelFormatter,aM,aJ;for(var aE=0;aE<Q.length;++aE){aM=Q[aE];aJ=aM.label;if(!aJ){continue}if(aE%O.legend.noColumns==0){if(aF){aH.push("</tr>")}aH.push("<tr>");aF=true}if(aN){aJ=aN(aJ,aM)}aH.push('<td class="legendColorBox"><div style="border:1px solid '+O.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aM.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aJ+"</td>")}if(aF){aH.push("</tr>")}if(aH.length==0){return}var aL='<table style="font-size:smaller;color:'+O.grid.color+'">'+aH.join("")+"</table>";if(O.legend.container!=null){c(O.legend.container).html(aL)}else{var aI="",aC=O.legend.position,aD=O.legend.margin;if(aD[0]==null){aD=[aD,aD]}if(aC.charAt(0)=="n"){aI+="top:"+(aD[1]+q.top)+"px;"}else{if(aC.charAt(0)=="s"){aI+="bottom:"+(aD[1]+q.bottom)+"px;"}}if(aC.charAt(1)=="e"){aI+="right:"+(aD[0]+q.right)+"px;"}else{if(aC.charAt(1)=="w"){aI+="left:"+(aD[0]+q.left)+"px;"}}var aK=c('<div class="legend">'+aL.replace('style="','style="position:absolute;'+aI+";")+"</div>").appendTo(av);if(O.legend.backgroundOpacity!=0){var aG=O.legend.backgroundColor;if(aG==null){aG=O.grid.backgroundColor;if(aG&&typeof aG=="string"){aG=c.color.parse(aG)}else{aG=c.color.extract(aK,"background-color")}aG.a=1;aG=aG.toString()}var aB=aK.children();c('<div style="position:absolute;width:'+aB.width()+"px;height:"+aB.height()+"px;"+aI+"background-color:"+aG+';"> </div>').prependTo(aK).css("opacity",O.legend.backgroundOpacity)}}}var ab=[],M=null;function K(aI,aG,aD){var aO=O.grid.mouseActiveRadius,a0=aO*aO+1,aY=null,aR=false,aW,aU;for(aW=Q.length-1;aW>=0;--aW){if(!aD(Q[aW])){continue}var aP=Q[aW],aH=aP.xaxis,aF=aP.yaxis,aV=aP.datapoints.points,aT=aP.datapoints.pointsize,aQ=aH.c2p(aI),aN=aF.c2p(aG),aC=aO/aH.scale,aB=aO/aF.scale;if(aH.options.inverseTransform){aC=Number.MAX_VALUE}if(aF.options.inverseTransform){aB=Number.MAX_VALUE}if(aP.lines.show||aP.points.show){for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1];if(aK==null){continue}if(aK-aQ>aC||aK-aQ<-aC||aJ-aN>aB||aJ-aN<-aB){continue}var aM=Math.abs(aH.p2c(aK)-aI),aL=Math.abs(aF.p2c(aJ)-aG),aS=aM*aM+aL*aL;if(aS<a0){a0=aS;aY=[aW,aU/aT]}}}if(aP.bars.show&&!aY){var aE=aP.bars.align=="left"?0:-aP.bars.barWidth/2,aX=aE+aP.bars.barWidth;for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1],aZ=aV[aU+2];if(aK==null){continue}if(Q[aW].bars.horizontal?(aQ<=Math.max(aZ,aK)&&aQ>=Math.min(aZ,aK)&&aN>=aJ+aE&&aN<=aJ+aX):(aQ>=aK+aE&&aQ<=aK+aX&&aN>=Math.min(aZ,aJ)&&aN<=Math.max(aZ,aJ))){aY=[aW,aU/aT]}}}}if(aY){aW=aY[0];aU=aY[1];aT=Q[aW].datapoints.pointsize;return{datapoint:Q[aW].datapoints.points.slice(aU*aT,(aU+1)*aT),dataIndex:aU,series:Q[aW],seriesIndex:aW}}return null}function aa(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return aC.hoverable!=false})}}function l(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return false})}}function R(aB){u("plotclick",aB,function(aC){return aC.clickable!=false})}function u(aC,aB,aD){var aE=y.offset(),aH=aB.pageX-aE.left-q.left,aF=aB.pageY-aE.top-q.top,aJ=C({left:aH,top:aF});aJ.pageX=aB.pageX;aJ.pageY=aB.pageY;var aK=K(aH,aF,aD);if(aK){aK.pageX=parseInt(aK.series.xaxis.p2c(aK.datapoint[0])+aE.left+q.left);aK.pageY=parseInt(aK.series.yaxis.p2c(aK.datapoint[1])+aE.top+q.top)}if(O.grid.autoHighlight){for(var aG=0;aG<ab.length;++aG){var aI=ab[aG];if(aI.auto==aC&&!(aK&&aI.series==aK.series&&aI.point[0]==aK.datapoint[0]&&aI.point[1]==aK.datapoint[1])){T(aI.series,aI.point)}}if(aK){x(aK.series,aK.datapoint,aC)}}av.trigger(aC,[aJ,aK])}function f(){if(!M){M=setTimeout(s,30)}}function s(){M=null;A.save();A.clearRect(0,0,G,I);A.translate(q.left,q.top);var aC,aB;for(aC=0;aC<ab.length;++aC){aB=ab[aC];if(aB.series.bars.show){v(aB.series,aB.point)}else{ay(aB.series,aB.point)}}A.restore();an(ak.drawOverlay,[A])}function x(aD,aB,aF){if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){var aE=aD.datapoints.pointsize;aB=aD.datapoints.points.slice(aE*aB,aE*(aB+1))}var aC=al(aD,aB);if(aC==-1){ab.push({series:aD,point:aB,auto:aF});f()}else{if(!aF){ab[aC].auto=false}}}function T(aD,aB){if(aD==null&&aB==null){ab=[];f()}if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){aB=aD.data[aB]}var aC=al(aD,aB);if(aC!=-1){ab.splice(aC,1);f()}}function al(aD,aE){for(var aB=0;aB<ab.length;++aB){var aC=ab[aB];if(aC.series==aD&&aC.point[0]==aE[0]&&aC.point[1]==aE[1]){return aB}}return -1}function ay(aE,aD){var aC=aD[0],aI=aD[1],aH=aE.xaxis,aG=aE.yaxis;if(aC<aH.min||aC>aH.max||aI<aG.min||aI>aG.max){return}var aF=aE.points.radius+aE.points.lineWidth/2;A.lineWidth=aF;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aB=1.5*aF,aC=aH.p2c(aC),aI=aG.p2c(aI);A.beginPath();if(aE.points.symbol=="circle"){A.arc(aC,aI,aB,0,2*Math.PI,false)}else{aE.points.symbol(A,aC,aI,aB,false)}A.closePath();A.stroke()}function v(aE,aB){A.lineWidth=aE.bars.lineWidth;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aD=c.color.parse(aE.color).scale("a",0.5).toString();var aC=aE.bars.align=="left"?0:-aE.bars.barWidth/2;E(aB[0],aB[1],aB[2]||0,aC,aC+aE.bars.barWidth,0,function(){return aD},aE.xaxis,aE.yaxis,A,aE.bars.horizontal,aE.bars.lineWidth)}function am(aJ,aB,aH,aC){if(typeof aJ=="string"){return aJ}else{var aI=H.createLinearGradient(0,aH,0,aB);for(var aE=0,aD=aJ.colors.length;aE<aD;++aE){var aF=aJ.colors[aE];if(typeof aF!="string"){var aG=c.color.parse(aC);if(aF.brightness!=null){aG=aG.scale("rgb",aF.brightness)}if(aF.opacity!=null){aG.a*=aF.opacity}aF=aG.toString()}aI.addColorStop(aE/(aD-1),aF)}return aI}}}c.plot=function(g,e,d){var f=new b(c(g),e,d,c.plot.plugins);return f};c.plot.version="0.7";c.plot.plugins=[];c.plot.formatDate=function(l,f,h){var o=function(d){d=""+d;return d.length==1?"0"+d:d};var e=[];var p=false,j=false;var n=l.getUTCHours();var k=n<12;if(h==null){h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(f.search(/%p|%P/)!=-1){if(n>12){n=n-12}else{if(n==0){n=12}}}for(var g=0;g<f.length;++g){var m=f.charAt(g);if(p){switch(m){case"h":m=""+n;break;case"H":m=o(n);break;case"M":m=o(l.getUTCMinutes());break;case"S":m=o(l.getUTCSeconds());break;case"d":m=""+l.getUTCDate();break;case"m":m=""+(l.getUTCMonth()+1);break;case"y":m=""+l.getUTCFullYear();break;case"b":m=""+h[l.getUTCMonth()];break;case"p":m=(k)?("am"):("pm");break;case"P":m=(k)?("AM"):("PM");break;case"0":m="";j=true;break}if(m&&j){m=o(m);j=false}e.push(m);if(!j){p=false}}else{if(m=="%"){p=true}else{e.push(m)}}}return e.join("")};function a(e,d){return d*Math.floor(e/d)}})(jQuery);/*


 * flot.pie plugin for Flot.js
 */
(function(b){function c(D){var h=null;var L=null;var n=null;var B=null;var p=null;var M=0;var F=true;var o=10;var w=0.95;var A=0;var d=false;var z=false;var j=[];D.hooks.processOptions.push(g);D.hooks.bindEvents.push(e);function g(O,N){if(N.series.pie.show){N.grid.show=false;if(N.series.pie.label.show=="auto"){if(N.legend.show){N.series.pie.label.show=false}else{N.series.pie.label.show=true}}if(N.series.pie.radius=="auto"){if(N.series.pie.label.show){N.series.pie.radius=3/4}else{N.series.pie.radius=1}}if(N.series.pie.tilt>1){N.series.pie.tilt=1}if(N.series.pie.tilt<0){N.series.pie.tilt=0}O.hooks.processDatapoints.push(E);O.hooks.drawOverlay.push(H);O.hooks.draw.push(r)}}function e(P,N){var O=P.getOptions();if(O.series.pie.show&&O.grid.hoverable){N.unbind("mousemove").mousemove(t)}if(O.series.pie.show&&O.grid.clickable){N.unbind("click").click(l)}}function G(O){var P="";function N(S,T){if(!T){T=0}for(var R=0;R<S.length;++R){for(var Q=0;Q<T;Q++){P+="\t"}if(typeof S[R]=="object"){P+=""+R+":\n";N(S[R],T+1)}else{P+=""+R+": "+S[R]+"\n"}}}N(O);alert(P)}function q(P){for(var N=0;N<P.length;++N){var O=parseFloat(P[N].data[0][1]);if(O){M+=O}}}function E(Q,N,O,P){if(!d){d=true;h=Q.getCanvas();L=b(h).parent();a=Q.getOptions();Q.setData(K(Q.getData()))}}function I(){A=L.children().filter(".legend").children().width();n=Math.min(h.width,(h.height/a.series.pie.tilt))/2;p=(h.height/2)+a.series.pie.offset.top;B=(h.width/2);if(a.series.pie.offset.left=="auto"){if(a.legend.position.match("w")){B+=A/2}else{B-=A/2}}else{B+=a.series.pie.offset.left}if(B<n){B=n}else{if(B>h.width-n){B=h.width-n}}}function v(O){for(var N=0;N<O.length;++N){if(typeof(O[N].data)=="number"){O[N].data=[[1,O[N].data]]}else{if(typeof(O[N].data)=="undefined"||typeof(O[N].data[0])=="undefined"){if(typeof(O[N].data)!="undefined"&&typeof(O[N].data.label)!="undefined"){O[N].label=O[N].data.label}O[N].data=[[1,0]]}}}return O}function K(Q){Q=v(Q);q(Q);var P=0;var S=0;var N=a.series.pie.combine.color;var R=[];for(var O=0;O<Q.length;++O){Q[O].data[0][1]=parseFloat(Q[O].data[0][1]);if(!Q[O].data[0][1]){Q[O].data[0][1]=0}if(Q[O].data[0][1]/M<=a.series.pie.combine.threshold){P+=Q[O].data[0][1];S++;if(!N){N=Q[O].color}}else{R.push({data:[[1,Q[O].data[0][1]]],color:Q[O].color,label:Q[O].label,angle:(Q[O].data[0][1]*(Math.PI*2))/M,percent:(Q[O].data[0][1]/M*100)})}}if(S>0){R.push({data:[[1,P]],color:N,label:a.series.pie.combine.label,angle:(P*(Math.PI*2))/M,percent:(P/M*100)})}return R}function r(S,Q){if(!L){return}ctx=Q;I();var T=S.getData();var P=0;while(F&&P<o){F=false;if(P>0){n*=w}P+=1;N();if(a.series.pie.tilt<=0.8){O()}R()}if(P>=o){N();L.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')}if(S.setSeries&&S.insertLegend){S.setSeries(T);S.insertLegend()}function N(){ctx.clearRect(0,0,h.width,h.height);L.children().filter(".pieLabel, .pieLabelBackground").remove()}function O(){var Z=5;var Y=15;var W=10;var X=0.02;if(a.series.pie.radius>1){var U=a.series.pie.radius}else{var U=n*a.series.pie.radius}if(U>=(h.width/2)-Z||U*a.series.pie.tilt>=(h.height/2)-Y||U<=W){return}ctx.save();ctx.translate(Z,Y);ctx.globalAlpha=X;ctx.fillStyle="#000";ctx.translate(B,p);ctx.scale(1,a.series.pie.tilt);for(var V=1;V<=W;V++){ctx.beginPath();ctx.arc(0,0,U,0,Math.PI*2,false);ctx.fill();U-=V}ctx.restore()}function R(){startAngle=Math.PI*a.series.pie.startAngle;if(a.series.pie.radius>1){var U=a.series.pie.radius}else{var U=n*a.series.pie.radius}ctx.save();ctx.translate(B,p);ctx.scale(1,a.series.pie.tilt);ctx.save();var Y=startAngle;for(var W=0;W<T.length;++W){T[W].startAngle=Y;X(T[W].angle,T[W].color,true)}ctx.restore();ctx.save();ctx.lineWidth=a.series.pie.stroke.width;Y=startAngle;for(var W=0;W<T.length;++W){X(T[W].angle,a.series.pie.stroke.color,false)}ctx.restore();J(ctx);if(a.series.pie.label.show){V()}ctx.restore();function X(ab,Z,aa){if(ab<=0){return}if(aa){ctx.fillStyle=Z}else{ctx.strokeStyle=Z;ctx.lineJoin="round"}ctx.beginPath();if(Math.abs(ab-Math.PI*2)>1e-9){ctx.moveTo(0,0)}else{if(b.browser.msie){ab-=0.0001}}ctx.arc(0,0,U,Y,Y+ab,false);ctx.closePath();Y+=ab;if(aa){ctx.fill()}else{ctx.stroke()}}function V(){var ac=startAngle;if(a.series.pie.label.radius>1){var Z=a.series.pie.label.radius}else{var Z=n*a.series.pie.label.radius}for(var ab=0;ab<T.length;++ab){if(T[ab].percent>=a.series.pie.label.threshold*100){aa(T[ab],ac,ab)}ac+=T[ab].angle}function aa(ap,ai,ag){if(ap.data[0][1]==0){return}var ar=a.legend.labelFormatter,aq,ae=a.series.pie.label.formatter;if(ar){aq=ar(ap.label,ap)}else{aq=ap.label}if(ae){aq=ae(aq,ap)}var aj=((ai+ap.angle)+ai)/2;var ao=B+Math.round(Math.cos(aj)*Z);var am=p+Math.round(Math.sin(aj)*Z)*a.series.pie.tilt;var af='<span class="pieLabel" id="pieLabel'+ag+'" style="position:absolute;top:'+am+"px;left:"+ao+'px;">'+aq+"</span>";L.append(af);var an=L.children("#pieLabel"+ag);var ad=(am-an.height()/2);var ah=(ao-an.width()/2);an.css("top",ad);an.css("left",ah);if(0-ad>0||0-ah>0||h.height-(ad+an.height())<0||h.width-(ah+an.width())<0){F=true}if(a.series.pie.label.background.opacity!=0){var ak=a.series.pie.label.background.color;if(ak==null){ak=ap.color}var al="top:"+ad+"px;left:"+ah+"px;";b('<div class="pieLabelBackground" style="position:absolute;width:'+an.width()+"px;height:"+an.height()+"px;"+al+"background-color:"+ak+';"> </div>').insertBefore(an).css("opacity",a.series.pie.label.background.opacity)}}}}}function J(N){if(a.series.pie.innerRadius>0){N.save();innerRadius=a.series.pie.innerRadius>1?a.series.pie.innerRadius:n*a.series.pie.innerRadius;N.globalCompositeOperation="destination-out";N.beginPath();N.fillStyle=a.series.pie.stroke.color;N.arc(0,0,innerRadius,0,Math.PI*2,false);N.fill();N.closePath();N.restore();N.save();N.beginPath();N.strokeStyle=a.series.pie.stroke.color;N.arc(0,0,innerRadius,0,Math.PI*2,false);N.stroke();N.closePath();N.restore()}}function s(Q,R){for(var S=false,P=-1,N=Q.length,O=N-1;++P<N;O=P){((Q[P][1]<=R[1]&&R[1]<Q[O][1])||(Q[O][1]<=R[1]&&R[1]<Q[P][1]))&&(R[0]<(Q[O][0]-Q[P][0])*(R[1]-Q[P][1])/(Q[O][1]-Q[P][1])+Q[P][0])&&(S=!S)}return S}function u(R,P){var T=D.getData(),O=D.getOptions(),N=O.series.pie.radius>1?O.series.pie.radius:n*O.series.pie.radius;for(var Q=0;Q<T.length;++Q){var S=T[Q];if(S.pie.show){ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,N,S.startAngle,S.startAngle+S.angle,false);ctx.closePath();x=R-B;y=P-p;if(ctx.isPointInPath){if(ctx.isPointInPath(R-B,P-p)){ctx.restore();return{datapoint:[S.percent,S.data],dataIndex:0,series:S,seriesIndex:Q}}}else{p1X=(N*Math.cos(S.startAngle));p1Y=(N*Math.sin(S.startAngle));p2X=(N*Math.cos(S.startAngle+(S.angle/4)));p2Y=(N*Math.sin(S.startAngle+(S.angle/4)));p3X=(N*Math.cos(S.startAngle+(S.angle/2)));p3Y=(N*Math.sin(S.startAngle+(S.angle/2)));p4X=(N*Math.cos(S.startAngle+(S.angle/1.5)));p4Y=(N*Math.sin(S.startAngle+(S.angle/1.5)));p5X=(N*Math.cos(S.startAngle+S.angle));p5Y=(N*Math.sin(S.startAngle+S.angle));arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]];arrPoint=[x,y];if(s(arrPoly,arrPoint)){ctx.restore();return{datapoint:[S.percent,S.data],dataIndex:0,series:S,seriesIndex:Q}}}ctx.restore()}}return null}function t(N){m("plothover",N)}function l(N){m("plotclick",N)}function m(N,T){var O=D.offset(),R=parseInt(T.pageX-O.left),P=parseInt(T.pageY-O.top),V=u(R,P);if(a.grid.autoHighlight){for(var Q=0;Q<j.length;++Q){var S=j[Q];if(S.auto==N&&!(V&&S.series==V.series)){f(S.series)}}}if(V){k(V.series,N)}var U={pageX:T.pageX,pageY:T.pageY};L.trigger(N,[U,V])}function k(O,P){if(typeof O=="number"){O=series[O]}var N=C(O);if(N==-1){j.push({series:O,auto:P});D.triggerRedrawOverlay()}else{if(!P){j[N].auto=false}}}function f(O){if(O==null){j=[];D.triggerRedrawOverlay()}if(typeof O=="number"){O=series[O]}var N=C(O);if(N!=-1){j.splice(N,1);D.triggerRedrawOverlay()}}function C(P){for(var N=0;N<j.length;++N){var O=j[N];if(O.series==P){return N}}return -1}function H(Q,R){var P=Q.getOptions();var N=P.series.pie.radius>1?P.series.pie.radius:n*P.series.pie.radius;R.save();R.translate(B,p);R.scale(1,P.series.pie.tilt);for(i=0;i<j.length;++i){O(j[i].series)}J(R);R.restore();function O(S){if(S.angle<0){return}R.fillStyle="rgba(255, 255, 255, "+P.series.pie.highlight.opacity+")";R.beginPath();if(Math.abs(S.angle-Math.PI*2)>1e-9){R.moveTo(0,0)}R.arc(0,0,N,S.startAngle,S.startAngle+S.angle,false);R.closePath();R.fill()}}}var a={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(d,e){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+e.color+';">'+d+"<br/>"+Math.round(e.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};b.plot.plugins.push({init:c,options:a,name:"pie",version:"1.0"})})(jQuery);






/* d3 minified */

(function(){function d(a,b){try{for(var c in b)Object.defineProperty(a.prototype,c,{value:b[c],enumerable:!1})}catch(d){a.prototype=b}}function f(a){var b=-1,c=a.length,d=[];while(++b<c)d.push(a[b]);return d}function g(a){return Array.prototype.slice.call(a)}function j(){}function m(a){return a}function n(){return this}function o(){return!0}function p(a){return typeof a=="function"?a:function(){return a}}function q(a,b,c){return function(){var d=c.apply(b,arguments);return arguments.length?a:d}}function r(a){return a!=null&&!isNaN(a)}function s(a){return a.length}function u(a){return a==null}function v(a){return a.trim().replace(/\s+/g," ")}function w(a){var b=1;while(a*b%1)b*=10;return b}function z(){}function A(a){function d(){var c=b,d=-1,e=c.length,f;while(++d<e)(f=c[d].on)&&f.apply(this,arguments);return a}var b=[],c=new j;return d.on=function(d,e){var f=c.get(d),g;return arguments.length<2?f&&f.on:(f&&(f.on=null,b=b.slice(0,g=b.indexOf(f)).concat(b.slice(g+1)),c.remove(d)),e&&b.push(c.set(d,{on:e})),a)},d}function D(a,b){return b-(a?1+Math.floor(Math.log(a+Math.pow(10,1+Math.floor(Math.log(a)/Math.LN10)-b))/Math.LN10):1)}function E(a){return a+""}function F(a){var b=a.lastIndexOf("."),c=b>=0?a.substring(b):(b=a.length,""),d=[];while(b>0)d.push(a.substring(b-=3,b+3));return d.reverse().join(",")+c}function H(a,b){var c=Math.pow(10,Math.abs(8-b)*3);return{scale:b>8?function(a){return a/c}:function(a){return a*c},symbol:a}}function N(a){return function(b){return b<=0?0:b>=1?1:a(b)}}function O(a){return function(b){return 1-a(1-b)}}function P(a){return function(b){return.5*(b<.5?a(2*b):2-a(2-2*b))}}function Q(a){return a}function R(a){return function(b){return Math.pow(b,a)}}function S(a){return 1-Math.cos(a*Math.PI/2)}function T(a){return Math.pow(2,10*(a-1))}function U(a){return 1-Math.sqrt(1-a*a)}function V(a,b){var c;return arguments.length<2&&(b=.45),arguments.length<1?(a=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/a),function(d){return 1+a*Math.pow(2,10*-d)*Math.sin((d-c)*2*Math.PI/b)}}function W(a){return a||(a=1.70158),function(b){return b*b*((a+1)*b-a)}}function X(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}function Y(){d3.event.stopPropagation(),d3.event.preventDefault()}function Z(){var a=d3.event,b;while(b=a.sourceEvent)a=b;return a}function $(a){var b=new z,c=0,d=arguments.length;while(++c<d)b[arguments[c]]=A(b);return b.of=function(c,d){return function(e){try{var f=e.sourceEvent=d3.event;e.target=a,d3.event=e,b[e.type].apply(c,d)}finally{d3.event=f}}},b}function _(a){var b=[a.a,a.b],c=[a.c,a.d],d=bb(b),e=ba(b,c),f=bb(bc(c,b,-e))||0;b[0]*c[1]<c[0]*b[1]&&(b[0]*=-1,b[1]*=-1,d*=-1,e*=-1),this.rotate=(d?Math.atan2(b[1],b[0]):Math.atan2(-c[0],c[1]))*bd,this.translate=[a.e,a.f],this.scale=[d,f],this.skew=f?Math.atan2(e,f)*bd:0}function ba(a,b){return a[0]*b[0]+a[1]*b[1]}function bb(a){var b=Math.sqrt(ba(a,a));return b&&(a[0]/=b,a[1]/=b),b}function bc(a,b,c){return a[0]+=c*b[0],a[1]+=c*b[1],a}function bg(a){return a=="transform"?d3.interpolateTransform:d3.interpolate}function bh(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return(c-a)*b}}function bi(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return Math.max(0,Math.min(1,(c-a)*b))}}function bj(a,b,c){return new bk(a,b,c)}function bk(a,b,c){this.r=a,this.g=b,this.b=c}function bl(a){return a<16?"0"+Math.max(0,a).toString(16):Math.min(255,a).toString(16)}function bm(a,b,c){var d=0,e=0,f=0,g,h,i;g=/([a-z]+)\((.*)\)/i.exec(a);if(g){h=g[2].split(",");switch(g[1]){case"hsl":return c(parseFloat(h[0]),parseFloat(h[1])/100,parseFloat(h[2])/100);case"rgb":return b(bq(h[0]),bq(h[1]),bq(h[2]))}}return(i=br.get(a))?b(i.r,i.g,i.b):(a!=null&&a.charAt(0)==="#"&&(a.length===4?(d=a.charAt(1),d+=d,e=a.charAt(2),e+=e,f=a.charAt(3),f+=f):a.length===7&&(d=a.substring(1,3),e=a.substring(3,5),f=a.substring(5,7)),d=parseInt(d,16),e=parseInt(e,16),f=parseInt(f,16)),b(d,e,f))}function bn(a,b,c){var d=Math.min(a/=255,b/=255,c/=255),e=Math.max(a,b,c),f=e-d,g,h,i=(e+d)/2;return f?(h=i<.5?f/(e+d):f/(2-e-d),a==e?g=(b-c)/f+(b<c?6:0):b==e?g=(c-a)/f+2:g=(a-b)/f+4,g*=60):h=g=0,bs(g,h,i)}function bo(a,b,c){a=bp(a),b=bp(b),c=bp(c);var d=bH((.4124564*a+.3575761*b+.1804375*c)/bB),e=bH((.2126729*a+.7151522*b+.072175*c)/bC),f=bH((.0193339*a+.119192*b+.9503041*c)/bD);return by(116*e-16,500*(d-e),200*(e-f))}function bp(a){return(a/=255)<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function bq(a){var b=parseFloat(a);return a.charAt(a.length-1)==="%"?Math.round(b*2.55):b}function bs(a,b,c){return new bt(a,b,c)}function bt(a,b,c){this.h=a,this.s=b,this.l=c}function bu(a,b,c){function f(a){return a>360?a-=360:a<0&&(a+=360),a<60?d+(e-d)*a/60:a<180?e:a<240?d+(e-d)*(240-a)/60:d}function g(a){return Math.round(f(a)*255)}var d,e;return a%=360,a<0&&(a+=360),b=b<0?0:b>1?1:b,c=c<0?0:c>1?1:c,e=c<=.5?c*(1+b):c+b-c*b,d=2*c-e,bj(g(a+120),g(a),g(a-120))}function bv(a,b,c){return new bw(a,b,c)}function bw(a,b,c){this.h=a,this.c=b,this.l=c}function bx(a,b,c){return by(c,Math.cos(a*=Math.PI/180)*b,Math.sin(a)*b)}function by(a,b,c){return new bz(a,b,c)}function bz(a,b,c){this.l=a,this.a=b,this.b=c}function bE(a,b,c){var d=(a+16)/116,e=d+b/500,f=d-c/200;return e=bG(e)*bB,d=bG(d)*bC,f=bG(f)*bD,bj(bI(3.2404542*e-1.5371385*d-.4985314*f),bI(-0.969266*e+1.8760108*d+.041556*f),bI(.0556434*e-.2040259*d+1.0572252*f))}function bF(a,b,c){return bv(Math.atan2(c,b)/Math.PI*180,Math.sqrt(b*b+c*c),a)}function bG(a){return a>.206893034?a*a*a:(a-4/29)/7.787037}function bH(a){return a>.008856?Math.pow(a,1/3):7.787037*a+4/29}function bI(a){return Math.round(255*(a<=.00304?12.92*a:1.055*Math.pow(a,1/2.4)-.055))}function bJ(a){return i(a,bP),a}function bQ(a){return function(){return bK(a,this)}}function bR(a){return function(){return bL(a,this)}}function bS(a,b){function c(){this.removeAttribute(a)}function d(){this.removeAttributeNS(a.space,a.local)}function e(){this.setAttribute(a,b)}function f(){this.setAttributeNS(a.space,a.local,b)}function g(){var c=b.apply(this,arguments);c==null?this.removeAttribute(a):this.setAttribute(a,c)}function h(){var c=b.apply(this,arguments);c==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,c)}return a=d3.ns.qualify(a),b==null?a.local?d:c:typeof b=="function"?a.local?h:g:a.local?f:e}function bT(a){return new RegExp("(?:^|\\s+)"+d3.requote(a)+"(?:\\s+|$)","g")}function bU(a,b){function d(){var d=-1;while(++d<c)a[d](this,b)}function e(){var d=-1,e=b.apply(this,arguments);while(++d<c)a[d](this,e)}a=a.trim().split(/\s+/).map(bV);var c=a.length;return typeof b=="function"?e:d}function bV(a){var b=bT(a);return function(c,d){if(e=c.classList)return d?e.add(a):e.remove(a);var e=c.className,f=e.baseVal!=null,g=f?e.baseVal:e;d?(b.lastIndex=0,b.test(g)||(g=v(g+" "+a),f?e.baseVal=g:c.className=g)):g&&(g=v(g.replace(b," ")),f?e.baseVal=g:c.className=g)}}function bW(a,b,c){function d(){this.style.removeProperty(a)}function e(){this.style.setProperty(a,b,c)}function f(){var d=b.apply(this,arguments);d==null?this.style.removeProperty(a):this.style.setProperty(a,d,c)}return b==null?d:typeof b=="function"?f:e}function bX(a,b){function c(){delete this[a]}function d(){this[a]=b}function e(){var c=b.apply(this,arguments);c==null?delete this[a]:this[a]=c}return b==null?c:typeof b=="function"?e:d}function bY(a){return{__data__:a}}function bZ(a){return function(){return bO(this,a)}}function b$(a){return arguments.length||(a=d3.ascending),function(b,c){return a(b&&b.__data__,c&&c.__data__)}}function b_(a,b,c){function f(){var b=this[d];b&&(this.removeEventListener(a,b,b.$),delete this[d])}function g(){function h(a){var c=d3.event;d3.event=a,g[0]=e.__data__;try{b.apply(e,g)}finally{d3.event=c}}var e=this,g=arguments;f.call(this),this.addEventListener(a,this[d]=h,h.$=c),h._=b}var d="__on"+a,e=a.indexOf(".");return e>0&&(a=a.substring(0,e)),b?g:f}function ca(a,b){for(var c=0,d=a.length;c<d;c++)for(var e=a[c],f=0,g=e.length,h;f<g;f++)(h=e[f])&&b(h,f,c);return a}function cc(a){return i(a,cd),a}function ce(a,b,c){i(a,cf);var d=new j,e=d3.dispatch("start","end"),f=cn;return a.id=b,a.time=c,a.tween=function(b,c){return arguments.length<2?d.get(b):(c==null?d.remove(b):d.set(b,c),a)},a.ease=function(b){return arguments.length?(f=typeof b=="function"?b:d3.ease.apply(d3,arguments),a):f},a.each=function(b,c){return arguments.length<2?co.call(a,b):(e.on(b,c),a)},d3.timer(function(g){return ca(a,function(a,h,i){function o(f){return m.active>b?q():(m.active=b,d.forEach(function(b,c){(c=c.call(a,n,h))&&j.push(c)}),e.start.call(a,n,h),p(f)||d3.timer(p,0,c),1)}function p(c){if(m.active!==b)return q();var d=(c-k)/l,g=f(d),i=j.length;while(i>0)j[--i].call(a,g);if(d>=1)return q(),ch=b,e.end.call(a,n,h),ch=0,1}function q(){return--m.count||delete a.__transition__,1}var j=[],k=a.delay,l=a.duration,m=(a=a.node).__transition__||(a.__transition__={active:0,count:0}),n=a.__data__;++m.count,k<=g?o(g):d3.timer(o,k,c)})},0,c),a}function co(a){var b=ch,c=cn,d=cl,e=cm;return ch=this.id,cn=this.ease(),ca(this,function(b,c,d){cl=b.delay,cm=b.duration,a.call(b=b.node,b.__data__,c,d)}),ch=b,cn=c,cl=d,cm=e,this}function cq(a,b,c){return c!=""&&cp}function cr(a,b){return d3.tween(a,bg(b))}function cv(){var a,b=Date.now(),c=cs;while(c)a=b-c.then,a>=c.delay&&(c.flush=c.callback(a)),c=c.next;var d=cw()-b;d>24?(isFinite(d)&&(clearTimeout(cu),cu=setTimeout(cv,d)),ct=0):(ct=1,cx(cv))}function cw(){var a=null,b=cs,c=Infinity;while(b)b.flush?b=a?a.next=b.next:cs=b.next:(c=Math.min(c,b.then+b.delay),b=(a=b).next);return c}function cz(a,b){var c=a.ownerSVGElement||a;if(c.createSVGPoint){var d=c.createSVGPoint();if(cy<0&&(window.scrollX||window.scrollY)){c=d3.select(document.body).append("svg").style("position","absolute").style("top",0).style("left",0);var e=c[0][0].getScreenCTM();cy=!e.f&&!e.e,c.remove()}return cy?(d.x=b.pageX,d.y=b.pageY):(d.x=b.clientX,d.y=b.clientY),d=d.matrixTransform(a.getScreenCTM().inverse()),[d.x,d.y]}var f=a.getBoundingClientRect();return[b.clientX-f.left-a.clientLeft,b.clientY-f.top-a.clientTop]}function cA(){}function cB(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function cC(a){return a.rangeExtent?a.rangeExtent():cB(a.range())}function cD(a,b){var c=0,d=a.length-1,e=a[c],f=a[d],g;f<e&&(g=c,c=d,d=g,g=e,e=f,f=g);if(b=b(f-e))a[c]=b.floor(e),a[d]=b.ceil(f);return a}function cE(){return Math}function cF(a,b,c,d){function g(){var g=Math.min(a.length,b.length)>2?cM:cL,i=d?bi:bh;return e=g(a,b,i,c),f=g(b,a,i,d3.interpolate),h}function h(a){return e(a)}var e,f;return h.invert=function(a){return f(a)},h.domain=function(b){return arguments.length?(a=b.map(Number),g()):a},h.range=function(a){return arguments.length?(b=a,g()):b},h.rangeRound=function(a){return h.range(a).interpolate(d3.interpolateRound)},h.clamp=function(a){return arguments.length?(d=a,g()):d},h.interpolate=function(a){return arguments.length?(c=a,g()):c},h.ticks=function(b){return cJ(a,b)},h.tickFormat=function(b){return cK(a,b)},h.nice=function(){return cD(a,cH),g()},h.copy=function(){return cF(a,b,c,d)},g()}function cG(a,b){return d3.rebind(a,b,"range","rangeRound","interpolate","clamp")}function cH(a){return a=Math.pow(10,Math.round(Math.log(a)/Math.LN10)-1),a&&{floor:function(b){return Math.floor(b/a)*a},ceil:function(b){return Math.ceil(b/a)*a}}}function cI(a,b){var c=cB(a),d=c[1]-c[0],e=Math.pow(10,Math.floor(Math.log(d/b)/Math.LN10)),f=b/d*e;return f<=.15?e*=10:f<=.35?e*=5:f<=.75&&(e*=2),c[0]=Math.ceil(c[0]/e)*e,c[1]=Math.floor(c[1]/e)*e+e*.5,c[2]=e,c}function cJ(a,b){return d3.range.apply(d3,cI(a,b))}function cK(a,b){return d3.format(",."+Math.max(0,-Math.floor(Math.log(cI(a,b)[2])/Math.LN10+.01))+"f")}function cL(a,b,c,d){var e=c(a[0],a[1]),f=d(b[0],b[1]);return function(a){return f(e(a))}}function cM(a,b,c,d){var e=[],f=[],g=0,h=Math.min(a.length,b.length)-1;a[h]<a[0]&&(a=a.slice().reverse(),b=b.slice().reverse());while(++g<=h)e.push(c(a[g-1],a[g])),f.push(d(b[g-1],b[g]));return function(b){var c=d3.bisect(a,b,1,h)-1;return f[c](e[c](b))}}function cN(a,b){function d(c){return a(b(c))}var c=b.pow;return d.invert=function(b){return c(a.invert(b))},d.domain=function(e){return arguments.length?(b=e[0]<0?cQ:cP,c=b.pow,a.domain(e.map(b)),d):a.domain().map(c)},d.nice=function(){return a.domain(cD(a.domain(),cE)),d},d.ticks=function(){var d=cB(a.domain()),e=[];if(d.every(isFinite)){var f=Math.floor(d[0]),g=Math.ceil(d[1]),h=c(d[0]),i=c(d[1]);if(b===cQ){e.push(c(f));for(;f++<g;)for(var j=9;j>0;j--)e.push(c(f)*j)}else{for(;f<g;f++)for(var j=1;j<10;j++)e.push(c(f)*j);e.push(c(f))}for(f=0;e[f]<h;f++);for(g=e.length;e[g-1]>i;g--);e=e.slice(f,g)}return e},d.tickFormat=function(a,e){arguments.length<2&&(e=cO);if(arguments.length<1)return e;var f=Math.max(.1,a/d.ticks().length),g=b===cQ?(h=-1e-12,Math.floor):(h=1e-12,Math.ceil),h;return function(a){return a/c(g(b(a)+h))<=f?e(a):""}},d.copy=function(){return cN(a.copy(),b)},cG(d,a)}function cP(a){return Math.log(a<0?0:a)/Math.LN10}function cQ(a){return-Math.log(a>0?0:-a)/Math.LN10}function cR(a,b){function e(b){return a(c(b))}var c=cS(b),d=cS(1/b);return e.invert=function(b){return d(a.invert(b))},e.domain=function(b){return arguments.length?(a.domain(b.map(c)),e):a.domain().map(d)},e.ticks=function(a){return cJ(e.domain(),a)},e.tickFormat=function(a){return cK(e.domain(),a)},e.nice=function(){return e.domain(cD(e.domain(),cH))},e.exponent=function(a){if(!arguments.length)return b;var f=e.domain();return c=cS(b=a),d=cS(1/b),e.domain(f)},e.copy=function(){return cR(a.copy(),b)},cG(e,a)}function cS(a){return function(b){return b<0?-Math.pow(-b,a):Math.pow(b,a)}}function cT(a,b){function f(b){return d[((c.get(b)||c.set(b,a.push(b)))-1)%d.length]}function g(b,c){return d3.range(a.length).map(function(a){return b+c*a})}var c,d,e;return f.domain=function(d){if(!arguments.length)return a;a=[],c=new j;var e=-1,g=d.length,h;while(++e<g)c.has(h=d[e])||c.set(h,a.push(h));return f[b.t].apply(f,b.a)},f.range=function(a){return arguments.length?(d=a,e=0,b={t:"range",a:arguments},f):d},f.rangePoints=function(c,h){arguments.length<2&&(h=0);var i=c[0],j=c[1],k=(j-i)/(a.length-1+h);return d=g(a.length<2?(i+j)/2:i+k*h/2,k),e=0,b={t:"rangePoints",a:arguments},f},f.rangeBands=function(c,h,i){arguments.length<2&&(h=0),arguments.length<3&&(i=h);var j=c[1]<c[0],k=c[j-0],l=c[1-j],m=(l-k)/(a.length-h+2*i);return d=g(k+m*i,m),j&&d.reverse(),e=m*(1-h),b={t:"rangeBands",a:arguments},f},f.rangeRoundBands=function(c,h,i){arguments.length<2&&(h=0),arguments.length<3&&(i=h);var j=c[1]<c[0],k=c[j-0],l=c[1-j],m=Math.floor((l-k)/(a.length-h+2*i)),n=l-k-(a.length-h)*m;return d=g(k+Math.round(n/2),m),j&&d.reverse(),e=Math.round(m*(1-h)),b={t:"rangeRoundBands",a:arguments},f},f.rangeBand=function(){return e},f.rangeExtent=function(){return cB(b.a[0])},f.copy=function(){return cT(a,b)},f.domain(a)}function cY(a,b){function d(){var d=0,f=a.length,g=b.length;c=[];while(++d<g)c[d-1]=d3.quantile(a,d/g);return e}function e(a){return isNaN(a=+a)?NaN:b[d3.bisect(c,a)]}var c;return e.domain=function(b){return arguments.length?(a=b.filter(function(a){return!isNaN(a)}).sort(d3.ascending),d()):a},e.range=function(a){return arguments.length?(b=a,d()):b},e.quantiles=function(){return c},e.copy=function(){return cY(a,b)},d()}function cZ(a,b,c){function f(b){return c[Math.max(0,Math.min(e,Math.floor(d*(b-a))))]}function g(){return d=c.length/(b-a),e=c.length-1,f}var d,e;return f.domain=function(c){return arguments.length?(a=+c[0],b=+c[c.length-1],g()):[a,b]},f.range=function(a){return arguments.length?(c=a,g()):c},f.copy=function(){return cZ(a,b,c)},g()}function c$(a,b){function c(c){return b[d3.bisect(a,c)]}return c.domain=function(b){return arguments.length?(a=b,c):a},c.range=function(a){return arguments.length?(b=a,c):b},c.copy=function(){return c$(a,b)},c}function c_(a){function b(a){return+a}return b.invert=b,b.domain=b.range=function(c){return arguments.length?(a=c.map(b),b):a},b.ticks=function(b){return cJ(a,b)},b.tickFormat=function(b){return cK(a,b)},b.copy=function(){return c_(a)},b}function dc(a){return a.innerRadius}function dd(a){return a.outerRadius}function de(a){return a.startAngle}function df(a){return a.endAngle}function dg(a){function h(f){function o(){h.push("M",e(a(i),g))}var h=[],i=[],j=-1,k=f.length,l,m=p(b),n=p(c);while(++j<k)d.call(this,l=f[j],j)?i.push([+m.call(this,l,j),+n.call(this,l,j)]):i.length&&(o(),i=[]);return i.length&&o(),h.length?h.join(""):null}var b=dh,c=di,d=o,e=dk,f=e.key,g=.7;return h.x=function(a){return arguments.length?(b=a,h):b},h.y=function(a){return arguments.length?(c=a,h):c},h.defined=function(a){return arguments.length?(d=a,h):d},h.interpolate=function(a){return arguments.length?(typeof a=="function"?f=e=a:f=(e=dj.get(a)||dk).key,h):f},h.tension=function(a){return arguments.length?(g=a,h):g},h}function dh(a){return a[0]}function di(a){return a[1]}function dk(a){return a.join("L")}function dl(a){return dk(a)+"Z"}function dm(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("V",(d=a[b])[1],"H",d[0]);return e.join("")}function dn(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("H",(d=a[b])[0],"V",d[1]);return e.join("")}function dp(a,b){return a.length<4?dk(a):a[1]+ds(a.slice(1,a.length-1),dt(a,b))}function dq(a,b){return a.length<3?dk(a):a[0]+ds((a.push(a[0]),a),dt([a[a.length-2]].concat(a,[a[1]]),b))}function dr(a,b,c){return a.length<3?dk(a):a[0]+ds(a,dt(a,b))}function ds(a,b){if(b.length<1||a.length!=b.length&&a.length!=b.length+2)return dk(a);var c=a.length!=b.length,d="",e=a[0],f=a[1],g=b[0],h=g,i=1;c&&(d+="Q"+(f[0]-g[0]*2/3)+","+(f[1]-g[1]*2/3)+","+f[0]+","+f[1],e=a[1],i=2);if(b.length>1){h=b[1],f=a[i],i++,d+="C"+(e[0]+g[0])+","+(e[1]+g[1])+","+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1];for(var j=2;j<b.length;j++,i++)f=a[i],h=b[j],d+="S"+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1]}if(c){var k=a[i];d+="Q"+(f[0]+h[0]*2/3)+","+(f[1]+h[1]*2/3)+","+k[0]+","+k[1]}return d}function dt(a,b){var c=[],d=(1-b)/2,e,f=a[0],g=a[1],h=1,i=a.length;while(++h<i)e=f,f=g,g=a[h],c.push([d*(g[0]-e[0]),d*(g[1]-e[1])]);return c}function du(a){if(a.length<3)return dk(a);var b=1,c=a.length,d=a[0],e=d[0],f=d[1],g=[e,e,e,(d=a[1])[0]],h=[f,f,f,d[1]],i=[e,",",f];dC(i,g,h);while(++b<c)d=a[b],g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),dC(i,g,h);b=-1;while(++b<2)g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),dC(i,g,h);return i.join("")}function dv(a){if(a.length<4)return dk(a);var b=[],c=-1,d=a.length,e,f=[0],g=[0];while(++c<3)e=a[c],f.push(e[0]),g.push(e[1]);b.push(dy(dB,f)+","+dy(dB,g)),--c;while(++c<d)e=a[c],f.shift(),f.push(e[0]),g.shift(),g.push(e[1]),dC(b,f,g);return b.join("")}function dw(a){var b,c=-1,d=a.length,e=d+4,f,g=[],h=[];while(++c<4)f=a[c%d],g.push(f[0]),h.push(f[1]);b=[dy(dB,g),",",dy(dB,h)],--c;while(++c<e)f=a[c%d],g.shift(),g.push(f[0]),h.shift(),h.push(f[1]),dC(b,g,h);return b.join("")}function dx(a,b){var c=a.length-1;if(c){var d=a[0][0],e=a[0][1],f=a[c][0]-d,g=a[c][1]-e,h=-1,i,j;while(++h<=c)i=a[h],j=h/c,i[0]=b*i[0]+(1-b)*(d+j*f),i[1]=b*i[1]+(1-b)*(e+j*g)}return du(a)}function dy(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function dC(a,b,c){a.push("C",dy(dz,b),",",dy(dz,c),",",dy(dA,b),",",dy(dA,c),",",dy(dB,b),",",dy(dB,c))}function dD(a,b){return(b[1]-a[1])/(b[0]-a[0])}function dE(a){var b=0,c=a.length-1,d=[],e=a[0],f=a[1],g=d[0]=dD(e,f);while(++b<c)d[b]=(g+(g=dD(e=f,f=a[b+1])))/2;return d[b]=g,d}function dF(a){var b=[],c,d,e,f,g=dE(a),h=-1,i=a.length-1;while(++h<i)c=dD(a[h],a[h+1]),Math.abs(c)<1e-6?g[h]=g[h+1]=0:(d=g[h]/c,e=g[h+1]/c,f=d*d+e*e,f>9&&(f=c*3/Math.sqrt(f),g[h]=f*d,g[h+1]=f*e));h=-1;while(++h<=i)f=(a[Math.min(i,h+1)][0]-a[Math.max(0,h-1)][0])/(6*(1+g[h]*g[h])),b.push([f||0,g[h]*f||0]);return b}function dG(a){return a.length<3?dk(a):a[0]+ds(a,dF(a))}function dH(a){var b,c=-1,d=a.length,e,f;while(++c<d)b=a[c],e=b[0],f=b[1]+da,b[0]=e*Math.cos(f),b[1]=e*Math.sin(f);return a}function dI(a){function l(h){function y(){l.push("M",g(a(n),k),j,i(a(m.reverse()),k),"Z")}var l=[],m=[],n=[],o=-1,q=h.length,r,s=p(b),t=p(d),u=b===c?function(){return w}:p(c),v=d===e?function(){return x}:p(e),w,x;while(++o<q)f.call(this,r=h[o],o)?(m.push([w=+s.call(this,r,o),x=+t.call(this,r,o)]),n.push([+u.call(this,r,o),+v.call(this,r,o)])):m.length&&(y(),m=[],n=[]);return m.length&&y(),l.length?l.join(""):null}var b=dh,c=dh,d=0,e=di,f=o,g=dk,h=g.key,i=g,j="L",k=.7;return l.x=function(a){return arguments.length?(b=c=a,l):c},l.x0=function(a){return arguments.length?(b=a,l):b},l.x1=function(a){return arguments.length?(c=a,l):c},l.y=function(a){return arguments.length?(d=e=a,l):e},l.y0=function(a){return arguments.length?(d=a,l):d},l.y1=function(a){return arguments.length?(e=a,l):e},l.defined=function(a){return arguments.length?(f=a,l):f},l.interpolate=function(a){return arguments.length?(typeof a=="function"?h=g=a:h=(g=dj.get(a)||dk).key,i=g.reverse||g,j=g.closed?"M":"L",l):h},l.tension=function(a){return arguments.length?(k=a,l):k},l}function dJ(a){return a.source}function dK(a){return a.target}function dL(a){return a.radius}function dM(a){return a.startAngle}function dN(a){return a.endAngle}function dO(a){return[a.x,a.y]}function dP(a){return function(){var b=a.apply(this,arguments),c=b[0],d=b[1]+da;return[c*Math.cos(d),c*Math.sin(d)]}}function dQ(){return 64}function dR(){return"circle"}function dS(a){var b=Math.sqrt(a/Math.PI);return"M0,"+b+"A"+b+","+b+" 0 1,1 0,"+ -b+"A"+b+","+b+" 0 1,1 0,"+b+"Z"}function dW(a,b){a.attr("transform",function(a){return"translate("+b(a)+",0)"})}function dX(a,b){a.attr("transform",function(a){return"translate(0,"+b(a)+")"})}function dY(a,b,c){e=[];if(c&&b.length>1){var d=cB(a.domain()),e,f=-1,g=b.length,h=(b[1]-b[0])/++c,i,j;while(++f<g)for(i=c;--i>0;)(j=+b[f]-i*h)>=d[0]&&e.push(j);for(--f,i=0;++i<c&&(j=+b[f]+i*h)<d[1];)e.push(j)}return e}function eb(){d_||(d_=d3.select("body").append("div").style("visibility","hidden").style("top",0).style("height",0).style("width",0).style("overflow-y","scroll").append("div").style("height","2000px").node().parentNode);var a=d3.event,b;try{d_.scrollTop=1e3,d_.dispatchEvent(a),b=1e3-d_.scrollTop}catch(c){b=a.wheelDelta||-a.detail*5}return b}function ec(a){var b=a.source,c=a.target,d=ee(b,c),e=[b];while(b!==d)b=b.parent,e.push(b);var f=e.length;while(c!==d)e.splice(f,0,c),c=c.parent;return e}function ed(a){var b=[],c=a.parent;while(c!=null)b.push(a),a=c,c=c.parent;return b.push(a),b}function ee(a,b){if(a===b)return a;var c=ed(a),d=ed(b),e=c.pop(),f=d.pop(),g=null;while(e===f)g=e,e=c.pop(),f=d.pop();return g}function eh(a){a.fixed|=2}function ei(a){a!==eg&&(a.fixed&=1)}function ej(){eg.fixed&=1,ef=eg=null}function ek(){eg.px=d3.event.x,eg.py=d3.event.y,ef.resume()}function el(a,b,c){var d=0,e=0;a.charge=0;if(!a.leaf){var f=a.nodes,g=f.length,h=-1,i;while(++h<g){i=f[h];if(i==null)continue;el(i,b,c),a.charge+=i.charge,d+=i.charge*i.cx,e+=i.charge*i.cy}}if(a.point){a.leaf||(a.point.x+=Math.random()-.5,a.point.y+=Math.random()-.5);var j=b*c[a.point.index];a.charge+=a.pointCharge=j,d+=j*a.point.x,e+=j*a.point.y}a.cx=d/a.charge,a.cy=e/a.charge}function em(a){return 20}function en(a){return 1}function ep(a){return a.x}function eq(a){return a.y}function er(a,b,c){a.y0=b,a.y=c}function eu(a){return d3.range(a.length)}function ev(a){var b=-1,c=a[0].length,d=[];while(++b<c)d[b]=0;return d}function ew(a){var b=1,c=0,d=a[0][1],e,f=a.length;for(;b<f;++b)(e=a[b][1])>d&&(c=b,d=e);return c}function ex(a){return a.reduce(ey,0)}function ey(a,b){return a+b[1]}function ez(a,b){return eA(a,Math.ceil(Math.log(b.length)/Math.LN2+1))}function eA(a,b){var c=-1,d=+a[0],e=(a[1]-d)/b,f=[];while(++c<=b)f[c]=e*c+d;return f}function eB(a){return[d3.min(a),d3.max(a)]}function eC(a,b){return d3.rebind(a,b,"sort","children","value"),a.links=eG,a.nodes=function(b){return eH=!0,(a.nodes=a)(b)},a}function eD(a){return a.children}function eE(a){return a.value}function eF(a,b){return b.value-a.value}function eG(a){return d3.merge(a.map(function(a){return(a.children||[]).map(function(b){return{source:a,target:b}})}))}function eI(a,b){return a.value-b.value}function eJ(a,b){var c=a._pack_next;a._pack_next=b,b._pack_prev=a,b._pack_next=c,c._pack_prev=b}function eK(a,b){a._pack_next=b,b._pack_prev=a}function eL(a,b){var c=b.x-a.x,d=b.y-a.y,e=a.r+b.r;return e*e-c*c-d*d>.001}function eM(a){function n(a){c=Math.min(a.x-a.r,c),d=Math.max(a.x+a.r,d),e=Math.min(a.y-a.r,e),f=Math.max(a.y+a.r,f)}if(!(b=a.children)||!(m=b.length))return;var b,c=Infinity,d=-Infinity,e=Infinity,f=-Infinity,g,h,i,j,k,l,m;b.forEach(eN),g=b[0],g.x=-g.r,g.y=0,n(g);if(m>1){h=b[1],h.x=h.r,h.y=0,n(h);if(m>2){i=b[2],eQ(g,h,i),n(i),eJ(g,i),g._pack_prev=i,eJ(i,h),h=g._pack_next;for(j=3;j<m;j++){eQ(g,h,i=b[j]);var o=0,p=1,q=1;for(k=h._pack_next;k!==h;k=k._pack_next,p++)if(eL(k,i)){o=1;break}if(o==1)for(l=g._pack_prev;l!==k._pack_prev;l=l._pack_prev,q++)if(eL(l,i))break;o?(p<q||p==q&&h.r<g.r?eK(g,h=k):eK(g=l,h),j--):(eJ(g,i),h=i,n(i))}}}var r=(c+d)/2,s=(e+f)/2,t=0;for(j=0;j<m;j++)i=b[j],i.x-=r,i.y-=s,t=Math.max(t,i.r+Math.sqrt(i.x*i.x+i.y*i.y));a.r=t,b.forEach(eO)}function eN(a){a._pack_next=a._pack_prev=a}function eO(a){delete a._pack_next,delete a._pack_prev}function eP(a,b,c,d){var e=a.children;a.x=b+=d*a.x,a.y=c+=d*a.y,a.r*=d;if(e){var f=-1,g=e.length;while(++f<g)eP(e[f],b,c,d)}}function eQ(a,b,c){var d=a.r+c.r,e=b.x-a.x,f=b.y-a.y;if(d&&(e||f)){var g=b.r+c.r,h=e*e+f*f;g*=g,d*=d;var i=.5+(d-g)/(2*h),j=Math.sqrt(Math.max(0,2*g*(d+h)-(d-=h)*d-g*g))/(2*h);c.x=a.x+i*e+j*f,c.y=a.y+i*f-j*e}else c.x=a.x+d,c.y=a.y}function eR(a){return 1+d3.max(a,function(a){return a.y})}function eS(a){return a.reduce(function(a,b){return a+b.x},0)/a.length}function eT(a){var b=a.children;return b&&b.length?eT(b[0]):a}function eU(a){var b=a.children,c;return b&&(c=b.length)?eU(b[c-1]):a}function eV(a,b){return a.parent==b.parent?1:2}function eW(a){var b=a.children;return b&&b.length?b[0]:a._tree.thread}function eX(a){var b=a.children,c;return b&&(c=b.length)?b[c-1]:a._tree.thread}function eY(a,b){var c=a.children;if(c&&(e=c.length)){var d,e,f=-1;while(++f<e)b(d=eY(c[f],b),a)>0&&(a=d)}return a}function eZ(a,b){return a.x-b.x}function e$(a,b){return b.x-a.x}function e_(a,b){return a.depth-b.depth}function fa(a,b){function c(a,d){var e=a.children;if(e&&(i=e.length)){var f,g=null,h=-1,i;while(++h<i)f=e[h],c(f,g),g=f}b(a,d)}c(a,null)}function fb(a){var b=0,c=0,d=a.children,e=d.length,f;while(--e>=0)f=d[e]._tree,f.prelim+=b,f.mod+=b,b+=f.shift+(c+=f.change)}function fc(a,b,c){a=a._tree,b=b._tree;var d=c/(b.number-a.number);a.change+=d,b.change-=d,b.shift+=c,b.prelim+=c,b.mod+=c}function fd(a,b,c){return a._tree.ancestor.parent==b.parent?a._tree.ancestor:c}function fe(a){return{x:a.x,y:a.y,dx:a.dx,dy:a.dy}}function ff(a,b){var c=a.x+b[3],d=a.y+b[0],e=a.dx-b[1]-b[3],f=a.dy-b[0]-b[2];return e<0&&(c+=e/2,e=0),f<0&&(d+=f/2,f=0),{x:c,y:d,dx:e,dy:f}}function fg(a,b){function f(a,c){d3.text(a,b,function(a){c(a&&f.parse(a))})}function g(b){return b.map(h).join(a)}function h(a){return d.test(a)?'"'+a.replace(/\"/g,'""')+'"':a}var c=new RegExp("\r\n|["+a+"\r\n]","g"),d=new RegExp('["'+a+"\n]"),e=a.charCodeAt(0);return f.parse=function(a){var b;return f.parseRows(a,function(a,c){if(c){var d={},e=-1,f=b.length;while(++e<f)d[b[e]]=a[e];return d}return b=a,null})},f.parseRows=function(a,b){function k(){if(c.lastIndex>=a.length)return f;if(j)return j=!1,d;var b=c.lastIndex;if(a.charCodeAt(b)===34){var g=b;while(g++<a.length)if(a.charCodeAt(g)===34){if(a.charCodeAt(g+1)!==34)break;g++}c.lastIndex=g+2;var h=a.charCodeAt(g+1);return h===13?(j=!0,a.charCodeAt(g+2)===10&&c.lastIndex++):h===10&&(j=!0),a.substring(b+1,g).replace(/""/g,'"')}var i=c.exec(a);return i?(j=i[0].charCodeAt(0)!==e,a.substring(b,i.index)):(c.lastIndex=a.length,a.substring(b))}var d={},f={},g=[],h=0,i,j;c.lastIndex=0;while((i=k())!==f){var l=[];while(i!==d&&i!==f)l.push(i),i=k();if(b&&!(l=b(l,h++)))continue;g.push(l)}return g},f.format=function(a){return a.map(g).join("\n")},f}function fi(a,b){return function(c){return c&&a.hasOwnProperty(c.type)?a[c.type](c):b}}function fj(a){return"m0,"+a+"a"+a+","+a+" 0 1,1 0,"+ -2*a+"a"+a+","+a+" 0 1,1 0,"+2*a+"z"}function fk(a,b){fl.hasOwnProperty(a.type)&&fl[a.type](a,b)}function fm(a,b){fk(a.geometry,b)}function fn(a,b){for(var c=a.features,d=0,e=c.length;d<e;d++)fk(c[d].geometry,b)}function fo(a,b){for(var c=a.geometries,d=0,e=c.length;d<e;d++)fk(c[d],b)}function fp(a,b){for(var c=a.coordinates,d=0,e=c.length;d<e;d++)b.apply(null,c[d])}function fq(a,b){for(var c=a.coordinates,d=0,e=c.length;d<e;d++)for(var f=c[d],g=0,h=f.length;g<h;g++)b.apply(null,f[g])}function fr(a,b){for(var c=a.coordinates,d=0,e=c.length;d<e;d++)for(var f=c[d][0],g=0,h=f.length;g<h;g++)b.apply(null,f[g])}function fs(a,b){b.apply(null,a.coordinates)}function ft(a,b){for(var c=a.coordinates[0],d=0,e=c.length;d<e;d++)b.apply(null,c[d])}function fu(a){return a.source}function fv(a){return a.target}function fw(){function o(a){var b=Math.sin(a*=m)*n,c=Math.sin(m-a)*n,g=c*e+b*k,h=c*f+b*l,i=c*d+b*j;return[Math.atan2(h,g)/fh,Math.atan2(i,Math.sqrt(g*g+h*h))/fh]}var a,b,c,d,e,f,g,h,i,j,k,l,m,n;return o.distance=function(){return m==null&&(n=1/Math.sin(m=Math.acos(Math.max(-1,Math.min(1,d*j+c*i*Math.cos(g-a)))))),m},o.source=function(g){var h=Math.cos(a=g[0]*fh),i=Math.sin(a);return c=Math.cos(b=g[1]*fh),d=Math.sin(b),e=c*h,f=c*i,m=null,o},o.target=function(a){var b=Math.cos(g=a[0]*fh),c=Math.sin(g);return i=Math.cos(h=a[1]*fh),j=Math.sin(h),k=i*b,l=i*c,m=null,o},o}function fx(a,b){var c=fw().source(a).target(b);return c.distance(),c}function fA(a){var b=0,c=0;for(;;){if(a(b,c))return[b,c];b===0?(b=c+1,c=0):(b-=1,c+=1)}}function fB(a,b,c,d){var e,f,g,h,i,j,k;return e=d[a],f=e[0],g=e[1],e=d[b],h=e[0],i=e[1],e=d[c],j=e[0],k=e[1],(k-g)*(h-f)-(i-g)*(j-f)>0}function fC(a,b,c){return(c[0]-b[0])*(a[1]-b[1])<(c[1]-b[1])*(a[0]-b[0])}function fD(a,b,c,d){var e=a[0],f=b[0],g=c[0],h=d[0],i=a[1],j=b[1],k=c[1],l=d[1],m=e-g,n=f-e,o=h-g,p=i-k,q=j-i,r=l-k,s=(o*p-r*m)/(r*n-o*q);return[e+s*n,i+s*q]}function fF(a,b){var c={list:a.map(function(a,b){return{index:b,x:a[0],y:a[1]}}).sort(function(a,b){return a.y<b.y?-1:a.y>b.y?1:a.x<b.x?-1:a.x>b.x?1:0}),bottomSite:null},d={list:[],leftEnd:null,rightEnd:null,init:function(){d.leftEnd=d.createHalfEdge(null,"l"),d.rightEnd=d.createHalfEdge(null,"l"),d.leftEnd.r=d.rightEnd,d.rightEnd.l=d.leftEnd,d.list.unshift(d.leftEnd,d.rightEnd)},createHalfEdge:function(a,b){return{edge:a,side:b,vertex:null,l:null,r:null}},insert:function(a,b){b.l=a,b.r=a.r,a.r.l=b,a.r=b},leftBound:function(a){var b=d.leftEnd;do b=b.r;while(b!=d.rightEnd&&e.rightOf(b,a));return b=b.l,b},del:function(a){a.l.r=a.r,a.r.l=a.l,a.edge=null},right:function(a){return a.r},left:function(a){return a.l},leftRegion:function(a){return a.edge==null?c.bottomSite:a.edge.region[a.side]},rightRegion:function(a){return a.edge==null?c.bottomSite:a.edge.region[fE[a.side]]}},e={bisect:function(a,b){var c={region:{l:a,r:b},ep:{l:null,r:null}},d=b.x-a.x,e=b.y-a.y,f=d>0?d:-d,g=e>0?e:-e;return c.c=a.x*d+a.y*e+(d*d+e*e)*.5,f>g?(c.a=1,c.b=e/d,c.c/=d):(c.b=1,c.a=d/e,c.c/=e),c},intersect:function(a,b){var c=a.edge,d=b.edge;if(!c||!d||c.region.r==d.region.r)return null;var e=c.a*d.b-c.b*d.a;if(Math.abs(e)<1e-10)return null;var f=(c.c*d.b-d.c*c.b)/e,g=(d.c*c.a-c.c*d.a)/e,h=c.region.r,i=d.region.r,j,k;h.y<i.y||h.y==i.y&&h.x<i.x?(j=a,k=c):(j=b,k=d);var l=f>=k.region.r.x;return l&&j.side==="l"||!l&&j.side==="r"?null:{x:f,y:g}},rightOf:function(a,b){var c=a.edge,d=c.region.r,e=b.x>d.x;if(e&&a.side==="l")return 1;if(!e&&a.side==="r")return 0;if(c.a===1){var f=b.y-d.y,g=b.x-d.x,h=0,i=0;!e&&c.b<0||e&&c.b>=0?i=h=f>=c.b*g:(i=b.x+b.y*c.b>c.c,c.b<0&&(i=!i),i||(h=1));if(!h){var j=d.x-c.region.l.x;i=c.b*(g*g-f*f)<j*f*(1+2*g/j+c.b*c.b),c.b<0&&(i=!i)}}else{var k=c.c-c.a*b.x,l=b.y-k,m=b.x-d.x,n=k-d.y;i=l*l>m*m+n*n}return a.side==="l"?i:!i},endPoint:function(a,c,d){a.ep[c]=d;if(!a.ep[fE[c]])return;b(a)},distance:function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}},f={list:[],insert:function(a,b,c){a.vertex=b,a.ystar=b.y+c;for(var d=0,e=f.list,g=e.length;d<g;d++){var h=e[d];if(a.ystar>h.ystar||a.ystar==h.ystar&&b.x>h.vertex.x)continue;break}e.splice(d,0,a)},del:function(a){for(var b=0,c=f.list,d=c.length;b<d&&c[b]!=a;++b);c.splice(b,1)},empty:function(){return f.list.length===0},nextEvent:function(a){for(var b=0,c=f.list,d=c.length;b<d;++b)if(c[b]==a)return c[b+1];return null},min:function(){var a=f.list[0];return{x:a.vertex.x,y:a.ystar}},extractMin:function(){return f.list.shift()}};d.init(),c.bottomSite=c.list.shift();var g=c.list.shift(),h,i,j,k,l,m,n,o,p,q,r,s,t;for(;;){f.empty()||(h=f.min());if(g&&(f.empty()||g.y<h.y||g.y==h.y&&g.x<h.x))i=d.leftBound(g),j=d.right(i),n=d.rightRegion(i),s=e.bisect(n,g),m=d.createHalfEdge(s,"l"),d.insert(i,m),q=e.intersect
(i,m),q&&(f.del(i),f.insert(i,q,e.distance(q,g))),i=m,m=d.createHalfEdge(s,"r"),d.insert(i,m),q=e.intersect(m,j),q&&f.insert(m,q,e.distance(q,g)),g=c.list.shift();else if(!f.empty())i=f.extractMin(),k=d.left(i),j=d.right(i),l=d.right(j),n=d.leftRegion(i),o=d.rightRegion(j),r=i.vertex,e.endPoint(i.edge,i.side,r),e.endPoint(j.edge,j.side,r),d.del(i),f.del(j),d.del(j),t="l",n.y>o.y&&(p=n,n=o,o=p,t="r"),s=e.bisect(n,o),m=d.createHalfEdge(s,t),d.insert(k,m),e.endPoint(s,fE[t],r),q=e.intersect(k,m),q&&(f.del(k),f.insert(k,q,e.distance(q,n))),q=e.intersect(m,l),q&&f.insert(m,q,e.distance(q,n));else break}for(i=d.right(d.leftEnd);i!=d.rightEnd;i=d.right(i))b(i.edge)}function fG(){return{leaf:!0,nodes:[],point:null}}function fH(a,b,c,d,e,f){if(!a(b,c,d,e,f)){var g=(c+e)*.5,h=(d+f)*.5,i=b.nodes;i[0]&&fH(a,i[0],c,d,g,h),i[1]&&fH(a,i[1],g,d,e,h),i[2]&&fH(a,i[2],c,h,g,f),i[3]&&fH(a,i[3],g,h,e,f)}}function fI(a){return{x:a[0],y:a[1]}}function fL(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function fU(a){return a.substring(0,3)}function fV(a,b,c,d){var e,f,g=0,h=b.length,i=c.length;while(g<h){if(d>=i)return-1;e=b.charCodeAt(g++);if(e==37){f=gh[b.charAt(g++)];if(!f||(d=f(a,c,d))<0)return-1}else if(e!=c.charCodeAt(d++))return-1}return d}function fW(a){return new RegExp("^(?:"+a.map(d3.requote).join("|")+")","i")}function fX(a){var b=new j,c=-1,d=a.length;while(++c<d)b.set(a[c].toLowerCase(),c);return b}function gi(a,b,c){gb.lastIndex=0;var d=gb.exec(b.substring(c));return d?c+=d[0].length:-1}function gj(a,b,c){ga.lastIndex=0;var d=ga.exec(b.substring(c));return d?c+=d[0].length:-1}function gk(a,b,c){ge.lastIndex=0;var d=ge.exec(b.substring(c));return d?(a.m=gf.get(d[0].toLowerCase()),c+=d[0].length):-1}function gl(a,b,c){gc.lastIndex=0;var d=gc.exec(b.substring(c));return d?(a.m=gd.get(d[0].toLowerCase()),c+=d[0].length):-1}function gm(a,b,c){return fV(a,gg.c.toString(),b,c)}function gn(a,b,c){return fV(a,gg.x.toString(),b,c)}function go(a,b,c){return fV(a,gg.X.toString(),b,c)}function gp(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+4));return d?(a.y=+d[0],c+=d[0].length):-1}function gq(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+2));return d?(a.y=gr(+d[0]),c+=d[0].length):-1}function gr(a){return a+(a>68?1900:2e3)}function gs(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+2));return d?(a.m=d[0]-1,c+=d[0].length):-1}function gt(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+2));return d?(a.d=+d[0],c+=d[0].length):-1}function gu(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+2));return d?(a.H=+d[0],c+=d[0].length):-1}function gv(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+2));return d?(a.M=+d[0],c+=d[0].length):-1}function gw(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+2));return d?(a.S=+d[0],c+=d[0].length):-1}function gx(a,b,c){gy.lastIndex=0;var d=gy.exec(b.substring(c,c+3));return d?(a.L=+d[0],c+=d[0].length):-1}function gz(a,b,c){var d=gA.get(b.substring(c,c+=2).toLowerCase());return d==null?-1:(a.p=d,c)}function gB(a){var b=a.getTimezoneOffset(),c=b>0?"-":"+",d=~~(Math.abs(b)/60),e=Math.abs(b)%60;return c+fY(d)+fY(e)}function gD(a){return a.toISOString()}function gE(a,b,c){function d(b){var c=a(b),d=f(c,1);return b-c<d-b?c:d}function e(c){return b(c=a(new fJ(c-1)),1),c}function f(a,c){return b(a=new fJ(+a),c),a}function g(a,d,f){var g=e(a),h=[];if(f>1)while(g<d)c(g)%f||h.push(new Date(+g)),b(g,1);else while(g<d)h.push(new Date(+g)),b(g,1);return h}function h(a,b,c){try{fJ=fL;var d=new fL;return d._=a,g(d,b,c)}finally{fJ=Date}}a.floor=a,a.round=d,a.ceil=e,a.offset=f,a.range=g;var i=a.utc=gF(a);return i.floor=i,i.round=gF(d),i.ceil=gF(e),i.offset=gF(f),i.range=h,a}function gF(a){return function(b,c){try{fJ=fL;var d=new fL;return d._=b,a(d,c)._}finally{fJ=Date}}}function gG(a,b,c){function d(b){return a(b)}return d.invert=function(b){return gI(a.invert(b))},d.domain=function(b){return arguments.length?(a.domain(b),d):a.domain().map(gI)},d.nice=function(a){return d.domain(cD(d.domain(),function(){return a}))},d.ticks=function(c,e){var f=gH(d.domain());if(typeof c!="function"){var g=f[1]-f[0],h=g/c,i=d3.bisect(gM,h);if(i==gM.length)return b.year(f,c);if(!i)return a.ticks(c).map(gI);Math.log(h/gM[i-1])<Math.log(gM[i]/h)&&--i,c=b[i],e=c[1],c=c[0].range}return c(f[0],new Date(+f[1]+1),e)},d.tickFormat=function(){return c},d.copy=function(){return gG(a.copy(),b,c)},d3.rebind(d,a,"range","rangeRound","interpolate","clamp")}function gH(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function gI(a){return new Date(a)}function gJ(a){return function(b){var c=a.length-1,d=a[c];while(!d[1](b))d=a[--c];return d[0](b)}}function gK(a){var b=new Date(a,0,1);return b.setFullYear(a),b}function gL(a){var b=a.getFullYear(),c=gK(b),d=gK(b+1);return b+(a-c)/(d-c)}function gU(a){var b=new Date(Date.UTC(a,0,1));return b.setUTCFullYear(a),b}function gV(a){var b=a.getUTCFullYear(),c=gU(b),d=gU(b+1);return b+(a-c)/(d-c)}Date.now||(Date.now=function(){return+(new Date)});try{document.createElement("div").style.setProperty("opacity",0,"")}catch(a){var b=CSSStyleDeclaration.prototype,c=b.setProperty;b.setProperty=function(a,b,d){c.call(this,a,b+"",d)}}d3={version:"2.10.0"};var e=g;try{e(document.documentElement.childNodes)[0].nodeType}catch(h){e=f}var i=[].__proto__?function(a,b){a.__proto__=b}:function(a,b){for(var c in b)a[c]=b[c]};d3.map=function(a){var b=new j;for(var c in a)b.set(c,a[c]);return b},d(j,{has:function(a){return k+a in this},get:function(a){return this[k+a]},set:function(a,b){return this[k+a]=b},remove:function(a){return a=k+a,a in this&&delete this[a]},keys:function(){var a=[];return this.forEach(function(b){a.push(b)}),a},values:function(){var a=[];return this.forEach(function(b,c){a.push(c)}),a},entries:function(){var a=[];return this.forEach(function(b,c){a.push({key:b,value:c})}),a},forEach:function(a){for(var b in this)b.charCodeAt(0)===l&&a.call(this,b.substring(1),this[b])}});var k="\0",l=k.charCodeAt(0);d3.functor=p,d3.rebind=function(a,b){var c=1,d=arguments.length,e;while(++c<d)a[e=arguments[c]]=q(a,b,b[e]);return a},d3.ascending=function(a,b){return a<b?-1:a>b?1:a>=b?0:NaN},d3.descending=function(a,b){return b<a?-1:b>a?1:b>=a?0:NaN},d3.mean=function(a,b){var c=a.length,d,e=0,f=-1,g=0;if(arguments.length===1)while(++f<c)r(d=a[f])&&(e+=(d-e)/++g);else while(++f<c)r(d=b.call(a,a[f],f))&&(e+=(d-e)/++g);return g?e:undefined},d3.median=function(a,b){return arguments.length>1&&(a=a.map(b)),a=a.filter(r),a.length?d3.quantile(a.sort(d3.ascending),.5):undefined},d3.min=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&e>f&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&e>f&&(e=f)}return e},d3.max=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&f>e&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&f>e&&(e=f)}return e},d3.extent=function(a,b){var c=-1,d=a.length,e,f,g;if(arguments.length===1){while(++c<d&&((e=g=a[c])==null||e!=e))e=g=undefined;while(++c<d)(f=a[c])!=null&&(e>f&&(e=f),g<f&&(g=f))}else{while(++c<d&&((e=g=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&(e>f&&(e=f),g<f&&(g=f))}return[e,g]},d3.random={normal:function(a,b){var c=arguments.length;return c<2&&(b=1),c<1&&(a=0),function(){var c,d,e;do c=Math.random()*2-1,d=Math.random()*2-1,e=c*c+d*d;while(!e||e>1);return a+b*c*Math.sqrt(-2*Math.log(e)/e)}},logNormal:function(a,b){var c=arguments.length;c<2&&(b=1),c<1&&(a=0);var d=d3.random.normal();return function(){return Math.exp(a+b*d())}},irwinHall:function(a){return function(){for(var b=0,c=0;c<a;c++)b+=Math.random();return b/a}}},d3.sum=function(a,b){var c=0,d=a.length,e,f=-1;if(arguments.length===1)while(++f<d)isNaN(e=+a[f])||(c+=e);else while(++f<d)isNaN(e=+b.call(a,a[f],f))||(c+=e);return c},d3.quantile=function(a,b){var c=(a.length-1)*b+1,d=Math.floor(c),e=a[d-1],f=c-d;return f?e+f*(a[d]-e):e},d3.transpose=function(a){return d3.zip.apply(d3,a)},d3.zip=function(){if(!(e=arguments.length))return[];for(var a=-1,b=d3.min(arguments,s),c=new Array(b);++a<b;)for(var d=-1,e,f=c[a]=new Array(e);++d<e;)f[d]=arguments[d][a];return c},d3.bisector=function(a){return{left:function(b,c,d,e){arguments.length<3&&(d=0),arguments.length<4&&(e=b.length);while(d<e){var f=d+e>>>1;a.call(b,b[f],f)<c?d=f+1:e=f}return d},right:function(b,c,d,e){arguments.length<3&&(d=0),arguments.length<4&&(e=b.length);while(d<e){var f=d+e>>>1;c<a.call(b,b[f],f)?e=f:d=f+1}return d}}};var t=d3.bisector(function(a){return a});d3.bisectLeft=t.left,d3.bisect=d3.bisectRight=t.right,d3.first=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])>0&&(e=f);return e},d3.last=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])<=0&&(e=f);return e},d3.nest=function(){function f(c,g){if(g>=b.length)return e?e.call(a,c):d?c.sort(d):c;var h=-1,i=c.length,k=b[g++],l,m,n=new j,o,p={};while(++h<i)(o=n.get(l=k(m=c[h])))?o.push(m):n.set(l,[m]);return n.forEach(function(a){p[a]=f(n.get(a),g)}),p}function g(a,d){if(d>=b.length)return a;var e=[],f=c[d++],h;for(h in a)e.push({key:h,values:g(a[h],d)});return f&&e.sort(function(a,b){return f(a.key,b.key)}),e}var a={},b=[],c=[],d,e;return a.map=function(a){return f(a,0)},a.entries=function(a){return g(f(a,0),0)},a.key=function(c){return b.push(c),a},a.sortKeys=function(d){return c[b.length-1]=d,a},a.sortValues=function(b){return d=b,a},a.rollup=function(b){return e=b,a},a},d3.keys=function(a){var b=[];for(var c in a)b.push(c);return b},d3.values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},d3.entries=function(a){var b=[];for(var c in a)b.push({key:c,value:a[c]});return b},d3.permute=function(a,b){var c=[],d=-1,e=b.length;while(++d<e)c[d]=a[b[d]];return c},d3.merge=function(a){return Array.prototype.concat.apply([],a)},d3.split=function(a,b){var c=[],d=[],e,f=-1,g=a.length;arguments.length<2&&(b=u);while(++f<g)b.call(d,e=a[f],f)?d=[]:(d.length||c.push(d),d.push(e));return c},d3.range=function(a,b,c){arguments.length<3&&(c=1,arguments.length<2&&(b=a,a=0));if((b-a)/c===Infinity)throw new Error("infinite range");var d=[],e=w(Math.abs(c)),f=-1,g;a*=e,b*=e,c*=e;if(c<0)while((g=a+c*++f)>b)d.push(g/e);else while((g=a+c*++f)<b)d.push(g/e);return d},d3.requote=function(a){return a.replace(x,"\\$&")};var x=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;d3.round=function(a,b){return b?Math.round(a*(b=Math.pow(10,b)))/b:Math.round(a)},d3.xhr=function(a,b,c){var d=new XMLHttpRequest;arguments.length<3?(c=b,b=null):b&&d.overrideMimeType&&d.overrideMimeType(b),d.open("GET",a,!0),b&&d.setRequestHeader("Accept",b),d.onreadystatechange=function(){if(d.readyState===4){var a=d.status;c(!a&&d.response||a>=200&&a<300||a===304?d:null)}},d.send(null)},d3.text=function(a,b,c){function d(a){c(a&&a.responseText)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)},d3.json=function(a,b){d3.text(a,"application/json",function(a){b(a?JSON.parse(a):null)})},d3.html=function(a,b){d3.text(a,"text/html",function(a){if(a!=null){var c=document.createRange();c.selectNode(document.body),a=c.createContextualFragment(a)}b(a)})},d3.xml=function(a,b,c){function d(a){c(a&&a.responseXML)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)};var y={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};d3.ns={prefix:y,qualify:function(a){var b=a.indexOf(":"),c=a;return b>=0&&(c=a.substring(0,b),a=a.substring(b+1)),y.hasOwnProperty(c)?{space:y[c],local:a}:a}},d3.dispatch=function(){var a=new z,b=-1,c=arguments.length;while(++b<c)a[arguments[b]]=A(a);return a},z.prototype.on=function(a,b){var c=a.indexOf("."),d="";return c>0&&(d=a.substring(c+1),a=a.substring(0,c)),arguments.length<2?this[a].on(d):this[a].on(d,b)},d3.format=function(a){var b=B.exec(a),c=b[1]||" ",d=b[3]||"",e=b[5],f=+b[6],g=b[7],h=b[8],i=b[9],j=1,k="",l=!1;h&&(h=+h.substring(1)),e&&(c="0",g&&(f-=Math.floor((f-1)/4)));switch(i){case"n":g=!0,i="g";break;case"%":j=100,k="%",i="f";break;case"p":j=100,k="%",i="r";break;case"d":l=!0,h=0;break;case"s":j=-1,i="r"}return i=="r"&&!h&&(i="g"),i=C.get(i)||E,function(a){if(l&&a%1)return"";var b=a<0&&(a=-a)?"-":d;if(j<0){var m=d3.formatPrefix(a,h);a=m.scale(a),k=m.symbol}else a*=j;a=i(a,h);if(e){var n=a.length+b.length;n<f&&(a=(new Array(f-n+1)).join(c)+a),g&&(a=F(a)),a=b+a}else{g&&(a=F(a)),a=b+a;var n=a.length;n<f&&(a=(new Array(f-n+1)).join(c)+a)}return a+k}};var B=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,C=d3.map({g:function(a,b){return a.toPrecision(b)},e:function(a,b){return a.toExponential(b)},f:function(a,b){return a.toFixed(b)},r:function(a,b){return d3.round(a,b=D(a,b)).toFixed(Math.max(0,Math.min(20,b)))}}),G=["y","z","a","f","p","n","Î¼","m","","k","M","G","T","P","E","Z","Y"].map(H);d3.formatPrefix=function(a,b){var c=0;return a&&(a<0&&(a*=-1),b&&(a=d3.round(a,D(a,b))),c=1+Math.floor(1e-12+Math.log(a)/Math.LN10),c=Math.max(-24,Math.min(24,Math.floor((c<=0?c+1:c-1)/3)*3))),G[8+c/3]};var I=R(2),J=R(3),K=function(){return Q},L=d3.map({linear:K,poly:R,quad:function(){return I},cubic:function(){return J},sin:function(){return S},exp:function(){return T},circle:function(){return U},elastic:V,back:W,bounce:function(){return X}}),M=d3.map({"in":Q,out:O,"in-out":P,"out-in":function(a){return P(O(a))}});d3.ease=function(a){var b=a.indexOf("-"),c=b>=0?a.substring(0,b):a,d=b>=0?a.substring(b+1):"in";return c=L.get(c)||K,d=M.get(d)||Q,N(d(c.apply(null,Array.prototype.slice.call(arguments,1))))},d3.event=null,d3.transform=function(a){var b=document.createElementNS(d3.ns.prefix.svg,"g");return(d3.transform=function(a){b.setAttribute("transform",a);var c=b.transform.baseVal.consolidate();return new _(c?c.matrix:be)})(a)},_.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var bd=180/Math.PI,be={a:1,b:0,c:0,d:1,e:0,f:0};d3.interpolate=function(a,b){var c=d3.interpolators.length,d;while(--c>=0&&!(d=d3.interpolators[c](a,b)));return d},d3.interpolateNumber=function(a,b){return b-=a,function(c){return a+b*c}},d3.interpolateRound=function(a,b){return b-=a,function(c){return Math.round(a+b*c)}},d3.interpolateString=function(a,b){var c,d,e,f=0,g=0,h=[],i=[],j,k;bf.lastIndex=0;for(d=0;c=bf.exec(b);++d)c.index&&h.push(b.substring(f,g=c.index)),i.push({i:h.length,x:c[0]}),h.push(null),f=bf.lastIndex;f<b.length&&h.push(b.substring(f));for(d=0,j=i.length;(c=bf.exec(a))&&d<j;++d){k=i[d];if(k.x==c[0]){if(k.i)if(h[k.i+1]==null){h[k.i-1]+=k.x,h.splice(k.i,1);for(e=d+1;e<j;++e)i[e].i--}else{h[k.i-1]+=k.x+h[k.i+1],h.splice(k.i,2);for(e=d+1;e<j;++e)i[e].i-=2}else if(h[k.i+1]==null)h[k.i]=k.x;else{h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1);for(e=d+1;e<j;++e)i[e].i--}i.splice(d,1),j--,d--}else k.x=d3.interpolateNumber(parseFloat(c[0]),parseFloat(k.x))}while(d<j)k=i.pop(),h[k.i+1]==null?h[k.i]=k.x:(h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1)),j--;return h.length===1?h[0]==null?i[0].x:function(){return b}:function(a){for(d=0;d<j;++d)h[(k=i[d]).i]=k.x(a);return h.join("")}},d3.interpolateTransform=function(a,b){var c=[],d=[],e,f=d3.transform(a),g=d3.transform(b),h=f.translate,i=g.translate,j=f.rotate,k=g.rotate,l=f.skew,m=g.skew,n=f.scale,o=g.scale;return h[0]!=i[0]||h[1]!=i[1]?(c.push("translate(",null,",",null,")"),d.push({i:1,x:d3.interpolateNumber(h[0],i[0])},{i:3,x:d3.interpolateNumber(h[1],i[1])})):i[0]||i[1]?c.push("translate("+i+")"):c.push(""),j!=k?(j-k>180?k+=360:k-j>180&&(j+=360),d.push({i:c.push(c.pop()+"rotate(",null,")")-2,x:d3.interpolateNumber(j,k)})):k&&c.push(c.pop()+"rotate("+k+")"),l!=m?d.push({i:c.push(c.pop()+"skewX(",null,")")-2,x:d3.interpolateNumber(l,m)}):m&&c.push(c.pop()+"skewX("+m+")"),n[0]!=o[0]||n[1]!=o[1]?(e=c.push(c.pop()+"scale(",null,",",null,")"),d.push({i:e-4,x:d3.interpolateNumber(n[0],o[0])},{i:e-2,x:d3.interpolateNumber(n[1],o[1])})):(o[0]!=1||o[1]!=1)&&c.push(c.pop()+"scale("+o+")"),e=d.length,function(a){var b=-1,f;while(++b<e)c[(f=d[b]).i]=f.x(a);return c.join("")}},d3.interpolateRgb=function(a,b){a=d3.rgb(a),b=d3.rgb(b);var c=a.r,d=a.g,e=a.b,f=b.r-c,g=b.g-d,h=b.b-e;return function(a){return"#"+bl(Math.round(c+f*a))+bl(Math.round(d+g*a))+bl(Math.round(e+h*a))}},d3.interpolateHsl=function(a,b){a=d3.hsl(a),b=d3.hsl(b);var c=a.h,d=a.s,e=a.l,f=b.h-c,g=b.s-d,h=b.l-e;return f>180?f-=360:f<-180&&(f+=360),function(a){return bu(c+f*a,d+g*a,e+h*a)+""}},d3.interpolateLab=function(a,b){a=d3.lab(a),b=d3.lab(b);var c=a.l,d=a.a,e=a.b,f=b.l-c,g=b.a-d,h=b.b-e;return function(a){return bE(c+f*a,d+g*a,e+h*a)+""}},d3.interpolateHcl=function(a,b){a=d3.hcl(a),b=d3.hcl(b);var c=a.h,d=a.c,e=a.l,f=b.h-c,g=b.c-d,h=b.l-e;return f>180?f-=360:f<-180&&(f+=360),function(a){return bx(c+f*a,d+g*a,e+h*a)+""}},d3.interpolateArray=function(a,b){var c=[],d=[],e=a.length,f=b.length,g=Math.min(a.length,b.length),h;for(h=0;h<g;++h)c.push(d3.interpolate(a[h],b[h]));for(;h<e;++h)d[h]=a[h];for(;h<f;++h)d[h]=b[h];return function(a){for(h=0;h<g;++h)d[h]=c[h](a);return d}},d3.interpolateObject=function(a,b){var c={},d={},e;for(e in a)e in b?c[e]=bg(e)(a[e],b[e]):d[e]=a[e];for(e in b)e in a||(d[e]=b[e]);return function(a){for(e in c)d[e]=c[e](a);return d}};var bf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;d3.interpolators=[d3.interpolateObject,function(a,b){return b instanceof Array&&d3.interpolateArray(a,b)},function(a,b){return(typeof a=="string"||typeof b=="string")&&d3.interpolateString(a+"",b+"")},function(a,b){return(typeof b=="string"?br.has(b)||/^(#|rgb\(|hsl\()/.test(b):b instanceof bk||b instanceof bt)&&d3.interpolateRgb(a,b)},function(a,b){return!isNaN(a=+a)&&!isNaN(b=+b)&&d3.interpolateNumber(a,b)}],d3.rgb=function(a,b,c){return arguments.length===1?a instanceof bk?bj(a.r,a.g,a.b):bm(""+a,bj,bu):bj(~~a,~~b,~~c)},bk.prototype.brighter=function(a){a=Math.pow(.7,arguments.length?a:1);var b=this.r,c=this.g,d=this.b,e=30;return!b&&!c&&!d?bj(e,e,e):(b&&b<e&&(b=e),c&&c<e&&(c=e),d&&d<e&&(d=e),bj(Math.min(255,Math.floor(b/a)),Math.min(255,Math.floor(c/a)),Math.min(255,Math.floor(d/a))))},bk.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),bj(Math.floor(a*this.r),Math.floor(a*this.g),Math.floor(a*this.b))},bk.prototype.hsl=function(){return bn(this.r,this.g,this.b)},bk.prototype.toString=function(){return"#"+bl(this.r)+bl(this.g)+bl(this.b)};var br=d3.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});br.forEach(function(a,b){br.set(a,bm(b,bj,bu))}),d3.hsl=function(a,b,c){return arguments.length===1?a instanceof bt?bs(a.h,a.s,a.l):bm(""+a,bn,bs):bs(+a,+b,+c)},bt.prototype.brighter=function(a){return a=Math.pow(.7,arguments.length?a:1),bs(this.h,this.s,this.l/a)},bt.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),bs(this.h,this.s,a*this.l)},bt.prototype.rgb=function(){return bu(this.h,this.s,this.l)},bt.prototype.toString=function(){return this.rgb().toString()},d3.hcl=function(a,b,c){return arguments.length===1?a instanceof bw?bv(a.h,a.c,a.l):a instanceof bz?bF(a.l,a.a,a.b):bF((a=bo((a=d3.rgb(a)).r,a.g,a.b)).l,a.a,a.b):bv(+a,+b,+c)},bw.prototype.brighter=function(a){return bv(this.h,this.c,Math.min(100,this.l+bA*(arguments.length?a:1)))},bw.prototype.darker=function(a){return bv(this.h,this.c,Math.max(0,this.l-bA*(arguments.length?a:1)))},bw.prototype.rgb=function(){return bx(this.h,this.c,this.l).rgb()},bw.prototype.toString=function(){return this.rgb()+""},d3.lab=function(a,b,c){return arguments.length===1?a instanceof bz?by(a.l,a.a,a.b):a instanceof bw?bx(a.l,a.c,a.h):bo((a=d3.rgb(a)).r,a.g,a.b):by(+a,+b,+c)};var bA=18,bB=.95047,bC=1,bD=1.08883;bz.prototype.brighter=function(a){return by(Math.min(100,this.l+bA*(arguments.length?a:1)),this.a,this.b)},bz.prototype.darker=function(a){return by(Math.max(0,this.l-bA*(arguments.length?a:1)),this.a,this.b)},bz.prototype.rgb=function(){return bE(this.l,this.a,this.b)},bz.prototype.toString=function(){return this.rgb()+""};var bK=function(a,b){return b.querySelector(a)},bL=function(a,b){return b.querySelectorAll(a)},bM=document.documentElement,bN=bM.matchesSelector||bM.webkitMatchesSelector||bM.mozMatchesSelector||bM.msMatchesSelector||bM.oMatchesSelector,bO=function(a,b){return bN.call(a,b)};typeof Sizzle=="function"&&(bK=function(a,b){return Sizzle(a,b)[0]||null},bL=function(a,b){return Sizzle.uniqueSort(Sizzle(a,b))},bO=Sizzle.matchesSelector);var bP=[];d3.selection=function(){return cb},d3.selection.prototype=bP,bP.select=function(a){var b=[],c,d,e,f;typeof a!="function"&&(a=bQ(a));for(var g=-1,h=this.length;++g<h;){b.push(c=[]),c.parentNode=(e=this[g]).parentNode;for(var i=-1,j=e.length;++i<j;)(f=e[i])?(c.push(d=a.call(f,f.__data__,i)),d&&"__data__"in f&&(d.__data__=f.__data__)):c.push(null)}return bJ(b)},bP.selectAll=function(a){var b=[],c,d;typeof a!="function"&&(a=bR(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(d=h[i])b.push(c=e(a.call(d,d.__data__,i))),c.parentNode=d;return bJ(b)},bP.attr=function(a,b){if(arguments.length<2){if(typeof a=="string"){var c=this.node();return a=d3.ns.qualify(a),a.local?c.getAttributeNS(a.space,a.local):c.getAttribute(a)}for(b in a)this.each(bS(b,a[b]));return this}return this.each(bS(a,b))},bP.classed=function(a,b){if(arguments.length<2){if(typeof a=="string"){var c=this.node(),d=(a=a.trim().split(/^|\s+/g)).length,e=-1;if(b=c.classList){while(++e<d)if(!b.contains(a[e]))return!1}else{b=c.className,b.baseVal!=null&&(b=b.baseVal);while(++e<d)if(!bT(a[e]).test(b))return!1}return!0}for(b in a)this.each(bU(b,a[b]));return this}return this.each(bU(a,b))},bP.style=function(a,b,c){var d=arguments.length;if(d<3){if(typeof a!="string"){d<2&&(b="");for(c in a)this.each(bW(c,a[c],b));return this}if(d<2)return window.getComputedStyle(this.node(),null).getPropertyValue(a);c=""}return this.each(bW(a,b,c))},bP.property=function(a,b){if(arguments.length<2){if(typeof a=="string")return this.node()[a];for(b in a)this.each(bX(b,a[b]));return this}return this.each(bX(a,b))},bP.text=function(a){return arguments.length<1?this.node().textContent:this.each(typeof a=="function"?function(){var b=a.apply(this,arguments);this.textContent=b==null?"":b}:a==null?function(){this.textContent=""}:function(){this.textContent=a})},bP.html=function(a){return arguments.length<1?this.node().innerHTML:this.each(typeof a=="function"?function(){var b=a.apply(this,arguments);this.innerHTML=b==null?"":b}:a==null?function(){this.innerHTML=""}:function(){this.innerHTML=a})},bP.append=function(a){function b(){return this.appendChild(document.createElementNS(this.namespaceURI,a))}function c(){return this.appendChild(document.createElementNS(a.space,a.local))}return a=d3.ns.qualify(a),this.select(a.local?c:b)},bP.insert=function(a,b){function c(){return this.insertBefore(document.createElementNS(this.namespaceURI,a),bK(b,this))}function d(){return this.insertBefore(document.createElementNS(a.space,a.local),bK(b,this))}return a=d3.ns.qualify(a),this.select(a.local?d:c)},bP.remove=function(){return this.each(function(){var a=this.parentNode;a&&a.removeChild(this)})},bP.data=function(a,b){function g(a,c){var d,e=a.length,f=c.length,g=Math.min(e,f),l=Math.max(e,f),m=[],n=[],o=[],p,q;if(b){var r=new j,s=[],t,u=c.length;for(d=-1;++d<e;)t=b.call(p=a[d],p.__data__,d),r.has(t)?o[u++]=p:r.set(t,p),s.push(t);for(d=-1;++d<f;)t=b.call(c,q=c[d],d),r.has(t)?(m[d]=p=r.get(t),p.__data__=q,n[d]=o[d]=null):(n[d]=bY(q),m[d]=o[d]=null),r.remove(t);for(d=-1;++d<e;)r.has(s[d])&&(o[d]=a[d])}else{for(d=-1;++d<g;)p=a[d],q=c[d],p?(p.__data__=q,m[d]=p,n[d]=o[d]=null):(n[d]=bY(q),m[d]=o[d]=null);for(;d<f;++d)n[d]=bY(c[d]),m[d]=o[d]=null;for(;d<l;++d)o[d]=a[d],n[d]=m[d]=null}n.update=m,n.parentNode=m.parentNode=o.parentNode=a.parentNode,h.push(n),i.push(m),k.push(o)}var c=-1,d=this.length,e,f;if(!arguments.length){a=new Array(d=(e=this[0]).length);while(++c<d)if(f=e[c])a[c]=f.__data__;return a}var h=cc([]),i=bJ([]),k=bJ([]);if(typeof a=="function")while(++c<d)g(e=this[c],a.call(e,e.parentNode.__data__,c));else while(++c<d)g(e=this[c],a);return i.enter=function(){return h},i.exit=function(){return k},i},bP.datum=bP.map=function(a){return arguments.length<1?this.property("__data__"):this.property("__data__",a)},bP.filter=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bZ(a));for(var f=0,g=this.length;f<g;f++){b.push(c=[]),c.parentNode=(d=this[f]).parentNode;for(var h=0,i=d.length;h<i;h++)(e=d[h])&&a.call(e,e.__data__,h)&&c.push(e)}return bJ(b)},bP.order=function(){for(var a=-1,b=this.length;++a<b;)for(var c=this[a],d=c.length-1,e=c[d],f;--d>=0;)if(f=c[d])e&&e!==f.nextSibling&&e.parentNode.insertBefore(f,e),e=f;return this},bP.sort=function(a){a=b$.apply(this,arguments);for(var b=-1,c=this.length;++b<c;)this[b].sort(a);return this.order()},bP.on=function(a,b,c){var d=arguments.length;if(d<3){if(typeof a!="string"){d<2&&(b=!1);for(c in a)this.each(b_(c,a[c],b));return this}if(d<2)return(d=this.node()["__on"+a])&&d._;c=!1}return this.each(b_(a,b,c))},bP.each=function(a){return ca(this,function(b,c,d){a.call(b,b.__data__,c,d)})},bP.call=function(a){return a.apply(this,(arguments[0]=this,arguments)),this},bP.empty=function(){return!this.node()},bP.node=function(a){for(var b=0,c=this.length;b<c;b++)for(var d=this[b],e=0,f=d.length;e<f;e++){var g=d[e];if(g)return g}return null},bP.transition=function(){var a=[],b,c;for(var d=-1,e=this.length;++d<e;){a.push(b=[]);for(var f=this[d],g=-1,h=f.length;++g<h;)b.push((c=f[g])?{node:c,delay:cl,duration:cm}:null)}return ce(a,ch||++cg,Date.now())};var cb=bJ([[document]]);cb[0].parentNode=bM,d3.select=function(a){return typeof a=="string"?cb.select(a):bJ([[a]])},d3.selectAll=function(a){return typeof a=="string"?cb.selectAll(a):bJ([e(a)])};var cd=[];d3.selection.enter=cc,d3.selection.enter.prototype=cd,cd.append=bP.append,cd.insert=bP.insert,cd.empty=bP.empty,cd.node=bP.node,cd.select=function(a){var b=[],c,d,e,f,g;for(var h=-1,i=this.length;++h<i;){e=(f=this[h]).update,b.push(c=[]),c.parentNode=f.parentNode;for(var j=-1,k=f.length;++j<k;)(g=f[j])?(c.push(e[j]=d=a.call(f.parentNode,g.__data__,j)),d.__data__=g.__data__):c.push(null)}return bJ(b)};var cf=[],cg=0,ch=0,ci=0,cj=250,ck=d3.ease("cubic-in-out"),cl=ci,cm=cj,cn=ck;cf.call=bP.call,d3.transition=function(a){return arguments.length?ch?a.transition():a:cb.transition()},d3.transition.prototype=cf,cf.select=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bQ(a));for(var f=-1,g=this.length;++f<g;){b.push(c=[]);for(var h=this[f],i=-1,j=h.length;++i<j;)(e=h[i])&&(d=a.call(e.node,e.node.__data__,i))?("__data__"in e.node&&(d.__data__=e.node.__data__),c.push({node:d,delay:e.delay,duration:e.duration})):c.push(null)}return ce(b,this.id,this.time).ease(this.ease())},cf.selectAll=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bR(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(e=h[i]){d=a.call(e.node,e.node.__data__,i),b.push(c=[]);for(var k=-1,l=d.length;++k<l;)c.push({node:d[k],delay:e.delay,duration:e.duration})}return ce(b,this.id,this.time).ease(this.ease())},cf.filter=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bZ(a));for(var f=0,g=this.length;f<g;f++){b.push(c=[]);for(var d=this[f],h=0,i=d.length;h<i;h++)(e=d[h])&&a.call(e.node,e.node.__data__,h)&&c.push(e)}return ce(b,this.id,this.time).ease(this.ease())},cf.attr=function(a,b){if(arguments.length<2){for(b in a)this.attrTween(b,cr(a[b],b));return this}return this.attrTween(a,cr(b,a))},cf.attrTween=function(a,b){function d(a,d){var e=b.call(this,a,d,this.getAttribute(c));return e===cp?(this.removeAttribute(c),null):e&&function(a){this.setAttribute(c,e(a))}}function e(a,d){var e=b.call(this,a,d,this.getAttributeNS(c.space,c.local));return e===cp?(this.removeAttributeNS(c.space,c.local),null):e&&function(a){this.setAttributeNS(c.space,c.local,e(a))}}var c=d3.ns.qualify(a);return this.tween("attr."+a,c.local?e:d)},cf.style=function(a,b,c){var d=arguments.length;if(d<3){if(typeof a!="string"){d<2&&(b="");for(c in a)this.styleTween(c,cr(a[c],c),b);return this}c=""}return this.styleTween(a,cr(b,a),c)},cf.styleTween=function(a,b,c){return arguments.length<3&&(c=""),this.tween("style."+a,function(d,e){var f=b.call(this,d,e,window.getComputedStyle(this,null).getPropertyValue(a));return f===cp?(this.style.removeProperty(a),null):f&&function(b){this.style.setProperty(a,f(b),c)}})},cf.text=function(a){return this.tween("text",function(b,c){this.textContent=typeof a=="function"?a.call(this,b,c):a})},cf.remove=function(){return this.each("end.transition",function(){var a;!this.__transition__&&(a=this.parentNode)&&a.removeChild(this)})},cf.delay=function(a){return ca(this,typeof a=="function"?function(b,c,d){b.delay=a.call(b=b.node,b.__data__,c,d)|0}:(a|=0,function(b){b.delay=a}))},cf.duration=function(a){return ca(this,typeof a=="function"?function(b,c,d){b.duration=Math.max(1,a.call(b=b.node,b.__data__,c,d)|0)}:(a=Math.max(1,a|0),function(b){b.duration=a}))},cf.transition=function(){return this.select(n)},d3.tween=function(a,b){function c(c,d,e){var f=a.call(this,c,d);return f==null?e!=""&&cp:e!=f&&b(e,f)}function d(c,d,e){return e!=a&&b(e,a)}return typeof a=="function"?c:a==null?cq:(a+="",d)};var cp={},cs=null,ct,cu;d3.timer=function(a,b,c){var d=!1,e,f=cs;if(arguments.length<3){if(arguments.length<2)b=0;else if(!isFinite(b))return;c=Date.now()}while(f){if(f.callback===a){f.then=c,f.delay=b,d=!0;break}e=f,f=f.next}d||(cs={callback:a,then:c,delay:b,next:cs}),ct||(cu=clearTimeout(cu),ct=1,cx(cv))},d3.timer.flush=function(){var a,b=Date.now(),c=cs;while(c)a=b-c.then,c.delay||(c.flush=c.callback
(a)),c=c.next;cw()};var cx=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,17)};d3.mouse=function(a){return cz(a,Z())};var cy=/WebKit/.test(navigator.userAgent)?-1:0;d3.touches=function(a,b){return arguments.length<2&&(b=Z().touches),b?e(b).map(function(b){var c=cz(a,b);return c.identifier=b.identifier,c}):[]},d3.scale={},d3.scale.linear=function(){return cF([0,1],[0,1],d3.interpolate,!1)},d3.scale.log=function(){return cN(d3.scale.linear(),cP)};var cO=d3.format(".0e");cP.pow=function(a){return Math.pow(10,a)},cQ.pow=function(a){return-Math.pow(10,-a)},d3.scale.pow=function(){return cR(d3.scale.linear(),1)},d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5)},d3.scale.ordinal=function(){return cT([],{t:"range",a:[[]]})},d3.scale.category10=function(){return d3.scale.ordinal().range(cU)},d3.scale.category20=function(){return d3.scale.ordinal().range(cV)},d3.scale.category20b=function(){return d3.scale.ordinal().range(cW)},d3.scale.category20c=function(){return d3.scale.ordinal().range(cX)};var cU=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],cV=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],cW=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],cX=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];d3.scale.quantile=function(){return cY([],[])},d3.scale.quantize=function(){return cZ(0,1,[0,1])},d3.scale.threshold=function(){return c$([.5],[0,1])},d3.scale.identity=function(){return c_([0,1])},d3.svg={},d3.svg.arc=function(){function e(){var e=a.apply(this,arguments),f=b.apply(this,arguments),g=c.apply(this,arguments)+da,h=d.apply(this,arguments)+da,i=(h<g&&(i=g,g=h,h=i),h-g),j=i<Math.PI?"0":"1",k=Math.cos(g),l=Math.sin(g),m=Math.cos(h),n=Math.sin(h);return i>=db?e?"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"M0,"+e+"A"+e+","+e+" 0 1,0 0,"+ -e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"Z":e?"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L"+e*m+","+e*n+"A"+e+","+e+" 0 "+j+",0 "+e*k+","+e*l+"Z":"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L0,0"+"Z"}var a=dc,b=dd,c=de,d=df;return e.innerRadius=function(b){return arguments.length?(a=p(b),e):a},e.outerRadius=function(a){return arguments.length?(b=p(a),e):b},e.startAngle=function(a){return arguments.length?(c=p(a),e):c},e.endAngle=function(a){return arguments.length?(d=p(a),e):d},e.centroid=function(){var e=(a.apply(this,arguments)+b.apply(this,arguments))/2,f=(c.apply(this,arguments)+d.apply(this,arguments))/2+da;return[Math.cos(f)*e,Math.sin(f)*e]},e};var da=-Math.PI/2,db=2*Math.PI-1e-6;d3.svg.line=function(){return dg(m)};var dj=d3.map({linear:dk,"linear-closed":dl,"step-before":dm,"step-after":dn,basis:du,"basis-open":dv,"basis-closed":dw,bundle:dx,cardinal:dr,"cardinal-open":dp,"cardinal-closed":dq,monotone:dG});dj.forEach(function(a,b){b.key=a,b.closed=/-closed$/.test(a)});var dz=[0,2/3,1/3,0],dA=[0,1/3,2/3,0],dB=[0,1/6,2/3,1/6];d3.svg.line.radial=function(){var a=dg(dH);return a.radius=a.x,delete a.x,a.angle=a.y,delete a.y,a},dm.reverse=dn,dn.reverse=dm,d3.svg.area=function(){return dI(m)},d3.svg.area.radial=function(){var a=dI(dH);return a.radius=a.x,delete a.x,a.innerRadius=a.x0,delete a.x0,a.outerRadius=a.x1,delete a.x1,a.angle=a.y,delete a.y,a.startAngle=a.y0,delete a.y0,a.endAngle=a.y1,delete a.y1,a},d3.svg.chord=function(){function f(c,d){var e=g(this,a,c,d),f=g(this,b,c,d);return"M"+e.p0+i(e.r,e.p1,e.a1-e.a0)+(h(e,f)?j(e.r,e.p1,e.r,e.p0):j(e.r,e.p1,f.r,f.p0)+i(f.r,f.p1,f.a1-f.a0)+j(f.r,f.p1,e.r,e.p0))+"Z"}function g(a,b,f,g){var h=b.call(a,f,g),i=c.call(a,h,g),j=d.call(a,h,g)+da,k=e.call(a,h,g)+da;return{r:i,a0:j,a1:k,p0:[i*Math.cos(j),i*Math.sin(j)],p1:[i*Math.cos(k),i*Math.sin(k)]}}function h(a,b){return a.a0==b.a0&&a.a1==b.a1}function i(a,b,c){return"A"+a+","+a+" 0 "+ +(c>Math.PI)+",1 "+b}function j(a,b,c,d){return"Q 0,0 "+d}var a=dJ,b=dK,c=dL,d=de,e=df;return f.radius=function(a){return arguments.length?(c=p(a),f):c},f.source=function(b){return arguments.length?(a=p(b),f):a},f.target=function(a){return arguments.length?(b=p(a),f):b},f.startAngle=function(a){return arguments.length?(d=p(a),f):d},f.endAngle=function(a){return arguments.length?(e=p(a),f):e},f},d3.svg.diagonal=function(){function d(d,e){var f=a.call(this,d,e),g=b.call(this,d,e),h=(f.y+g.y)/2,i=[f,{x:f.x,y:h},{x:g.x,y:h},g];return i=i.map(c),"M"+i[0]+"C"+i[1]+" "+i[2]+" "+i[3]}var a=dJ,b=dK,c=dO;return d.source=function(b){return arguments.length?(a=p(b),d):a},d.target=function(a){return arguments.length?(b=p(a),d):b},d.projection=function(a){return arguments.length?(c=a,d):c},d},d3.svg.diagonal.radial=function(){var a=d3.svg.diagonal(),b=dO,c=a.projection;return a.projection=function(a){return arguments.length?c(dP(b=a)):b},a},d3.svg.mouse=d3.mouse,d3.svg.touches=d3.touches,d3.svg.symbol=function(){function c(c,d){return(dT.get(a.call(this,c,d))||dS)(b.call(this,c,d))}var a=dR,b=dQ;return c.type=function(b){return arguments.length?(a=p(b),c):a},c.size=function(a){return arguments.length?(b=p(a),c):b},c};var dT=d3.map({circle:dS,cross:function(a){var b=Math.sqrt(a/5)/2;return"M"+ -3*b+","+ -b+"H"+ -b+"V"+ -3*b+"H"+b+"V"+ -b+"H"+3*b+"V"+b+"H"+b+"V"+3*b+"H"+ -b+"V"+b+"H"+ -3*b+"Z"},diamond:function(a){var b=Math.sqrt(a/(2*dV)),c=b*dV;return"M0,"+ -b+"L"+c+",0"+" 0,"+b+" "+ -c+",0"+"Z"},square:function(a){var b=Math.sqrt(a)/2;return"M"+ -b+","+ -b+"L"+b+","+ -b+" "+b+","+b+" "+ -b+","+b+"Z"},"triangle-down":function(a){var b=Math.sqrt(a/dU),c=b*dU/2;return"M0,"+c+"L"+b+","+ -c+" "+ -b+","+ -c+"Z"},"triangle-up":function(a){var b=Math.sqrt(a/dU),c=b*dU/2;return"M0,"+ -c+"L"+b+","+c+" "+ -b+","+c+"Z"}});d3.svg.symbolTypes=dT.keys();var dU=Math.sqrt(3),dV=Math.tan(30*Math.PI/180);d3.svg.axis=function(){function k(k){k.each(function(){var k=d3.select(this),l=h==null?a.ticks?a.ticks.apply(a,g):a.domain():h,m=i==null?a.tickFormat?a.tickFormat.apply(a,g):String:i,n=dY(a,l,j),o=k.selectAll(".minor").data(n,String),p=o.enter().insert("line","g").attr("class","tick minor").style("opacity",1e-6),q=d3.transition(o.exit()).style("opacity",1e-6).remove(),r=d3.transition(o).style("opacity",1),s=k.selectAll("g").data(l,String),t=s.enter().insert("g","path").style("opacity",1e-6),u=d3.transition(s.exit()).style("opacity",1e-6).remove(),v=d3.transition(s).style("opacity",1),w,x=cC(a),y=k.selectAll(".domain").data([0]),z=y.enter().append("path").attr("class","domain"),A=d3.transition(y),B=a.copy(),C=this.__chart__||B;this.__chart__=B,t.append("line").attr("class","tick"),t.append("text");var D=t.select("line"),E=v.select("line"),F=s.select("text").text(m),G=t.select("text"),H=v.select("text");switch(b){case"bottom":w=dW,p.attr("y2",d),r.attr("x2",0).attr("y2",d),D.attr("y2",c),G.attr("y",Math.max(c,0)+f),E.attr("x2",0).attr("y2",c),H.attr("x",0).attr("y",Math.max(c,0)+f),F.attr("dy",".71em").attr("text-anchor","middle"),A.attr("d","M"+x[0]+","+e+"V0H"+x[1]+"V"+e);break;case"top":w=dW,p.attr("y2",-d),r.attr("x2",0).attr("y2",-d),D.attr("y2",-c),G.attr("y",-(Math.max(c,0)+f)),E.attr("x2",0).attr("y2",-c),H.attr("x",0).attr("y",-(Math.max(c,0)+f)),F.attr("dy","0em").attr("text-anchor","middle"),A.attr("d","M"+x[0]+","+ -e+"V0H"+x[1]+"V"+ -e);break;case"left":w=dX,p.attr("x2",-d),r.attr("x2",-d).attr("y2",0),D.attr("x2",-c),G.attr("x",-(Math.max(c,0)+f)),E.attr("x2",-c).attr("y2",0),H.attr("x",-(Math.max(c,0)+f)).attr("y",0),F.attr("dy",".32em").attr("text-anchor","end"),A.attr("d","M"+ -e+","+x[0]+"H0V"+x[1]+"H"+ -e);break;case"right":w=dX,p.attr("x2",d),r.attr("x2",d).attr("y2",0),D.attr("x2",c),G.attr("x",Math.max(c,0)+f),E.attr("x2",c).attr("y2",0),H.attr("x",Math.max(c,0)+f).attr("y",0),F.attr("dy",".32em").attr("text-anchor","start"),A.attr("d","M"+e+","+x[0]+"H0V"+x[1]+"H"+e)}if(a.ticks)t.call(w,C),v.call(w,B),u.call(w,B),p.call(w,C),r.call(w,B),q.call(w,B);else{var I=B.rangeBand()/2,J=function(a){return B(a)+I};t.call(w,J),v.call(w,J)}})}var a=d3.scale.linear(),b="bottom",c=6,d=6,e=6,f=3,g=[10],h=null,i,j=0;return k.scale=function(b){return arguments.length?(a=b,k):a},k.orient=function(a){return arguments.length?(b=a,k):b},k.ticks=function(){return arguments.length?(g=arguments,k):g},k.tickValues=function(a){return arguments.length?(h=a,k):h},k.tickFormat=function(a){return arguments.length?(i=a,k):i},k.tickSize=function(a,b,f){if(!arguments.length)return c;var g=arguments.length-1;return c=+a,d=g>1?+b:c,e=g>0?+arguments[g]:c,k},k.tickPadding=function(a){return arguments.length?(f=+a,k):f},k.tickSubdivide=function(a){return arguments.length?(j=+a,k):j},k},d3.svg.brush=function(){function g(a){a.each(function(){var a=d3.select(this),e=a.selectAll(".background").data([0]),f=a.selectAll(".extent").data([0]),l=a.selectAll(".resize").data(d,String),m;a.style("pointer-events","all").on("mousedown.brush",k).on("touchstart.brush",k),e.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),f.enter().append("rect").attr("class","extent").style("cursor","move"),l.enter().append("g").attr("class",function(a){return"resize "+a}).style("cursor",function(a){return dZ[a]}).append("rect").attr("x",function(a){return/[ew]$/.test(a)?-3:null}).attr("y",function(a){return/^[ns]/.test(a)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),l.style("display",g.empty()?"none":null),l.exit().remove(),b&&(m=cC(b),e.attr("x",m[0]).attr("width",m[1]-m[0]),i(a)),c&&(m=cC(c),e.attr("y",m[0]).attr("height",m[1]-m[0]),j(a)),h(a)})}function h(a){a.selectAll(".resize").attr("transform",function(a){return"translate("+e[+/e$/.test(a)][0]+","+e[+/^s/.test(a)][1]+")"})}function i(a){a.select(".extent").attr("x",e[0][0]),a.selectAll(".extent,.n>rect,.s>rect").attr("width",e[1][0]-e[0][0])}function j(a){a.select(".extent").attr("y",e[0][1]),a.selectAll(".extent,.e>rect,.w>rect").attr("height",e[1][1]-e[0][1])}function k(){function x(){var a=d3.event.changedTouches;return a?d3.touches(d,a)[0]:d3.mouse(d)}function y(){d3.event.keyCode==32&&(q||(r=null,s[0]-=e[1][0],s[1]-=e[1][1],q=2),Y())}function z(){d3.event.keyCode==32&&q==2&&(s[0]+=e[1][0],s[1]+=e[1][1],q=0,Y())}function A(){var a=x(),d=!1;t&&(a[0]+=t[0],a[1]+=t[1]),q||(d3.event.altKey?(r||(r=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]),s[0]=e[+(a[0]<r[0])][0],s[1]=e[+(a[1]<r[1])][1]):r=null),o&&B(a,b,0)&&(i(m),d=!0),p&&B(a,c,1)&&(j(m),d=!0),d&&(h(m),l({type:"brush",mode:q?"move":"resize"}))}function B(a,b,c){var d=cC(b),g=d[0],h=d[1],i=s[c],j=e[1][c]-e[0][c],k,l;q&&(g-=i,h-=j+i),k=Math.max(g,Math.min(h,a[c])),q?l=(k+=i)+j:(r&&(i=Math.max(g,Math.min(h,2*r[c]-k))),i<k?(l=k,k=i):l=i);if(e[0][c]!==k||e[1][c]!==l)return f=null,e[0][c]=k,e[1][c]=l,!0}function C(){A(),m.style("pointer-events","all").selectAll(".resize").style("display",g.empty()?"none":null),d3.select("body").style("cursor",null),u.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),l({type:"brushend"}),Y()}var d=this,k=d3.select(d3.event.target),l=a.of(d,arguments),m=d3.select(d),n=k.datum(),o=!/^(n|s)$/.test(n)&&b,p=!/^(e|w)$/.test(n)&&c,q=k.classed("extent"),r,s=x(),t,u=d3.select(window).on("mousemove.brush",A).on("mouseup.brush",C).on("touchmove.brush",A).on("touchend.brush",C).on("keydown.brush",y).on("keyup.brush",z);if(q)s[0]=e[0][0]-s[0],s[1]=e[0][1]-s[1];else if(n){var v=+/w$/.test(n),w=+/^n/.test(n);t=[e[1-v][0]-s[0],e[1-w][1]-s[1]],s[0]=e[v][0],s[1]=e[w][1]}else d3.event.altKey&&(r=s.slice());m.style("pointer-events","none").selectAll(".resize").style("display",null),d3.select("body").style("cursor",k.style("cursor")),l({type:"brushstart"}),A(),Y()}var a=$(g,"brushstart","brush","brushend"),b=null,c=null,d=d$[0],e=[[0,0],[0,0]],f;return g.x=function(a){return arguments.length?(b=a,d=d$[!b<<1|!c],g):b},g.y=function(a){return arguments.length?(c=a,d=d$[!b<<1|!c],g):c},g.extent=function(a){var d,h,i,j,k;return arguments.length?(f=[[0,0],[0,0]],b&&(d=a[0],h=a[1],c&&(d=d[0],h=h[0]),f[0][0]=d,f[1][0]=h,b.invert&&(d=b(d),h=b(h)),h<d&&(k=d,d=h,h=k),e[0][0]=d|0,e[1][0]=h|0),c&&(i=a[0],j=a[1],b&&(i=i[1],j=j[1]),f[0][1]=i,f[1][1]=j,c.invert&&(i=c(i),j=c(j)),j<i&&(k=i,i=j,j=k),e[0][1]=i|0,e[1][1]=j|0),g):(a=f||e,b&&(d=a[0][0],h=a[1][0],f||(d=e[0][0],h=e[1][0],b.invert&&(d=b.invert(d),h=b.invert(h)),h<d&&(k=d,d=h,h=k))),c&&(i=a[0][1],j=a[1][1],f||(i=e[0][1],j=e[1][1],c.invert&&(i=c.invert(i),j=c.invert(j)),j<i&&(k=i,i=j,j=k))),b&&c?[[d,i],[h,j]]:b?[d,h]:c&&[i,j])},g.clear=function(){return f=null,e[0][0]=e[0][1]=e[1][0]=e[1][1]=0,g},g.empty=function(){return b&&e[0][0]===e[1][0]||c&&e[0][1]===e[1][1]},d3.rebind(g,a,"on")};var dZ={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},d$=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];d3.behavior={},d3.behavior.drag=function(){function c(){this.on("mousedown.drag",d).on("touchstart.drag",d)}function d(){function j(){var a=c.parentNode,b=d3.event.changedTouches;return b?d3.touches(a,b)[0]:d3.mouse(a)}function k(){if(!c.parentNode)return l();var a=j(),b=a[0]-g[0],e=a[1]-g[1];h|=b|e,g=a,Y(),d({type:"drag",x:a[0]+f[0],y:a[1]+f[1],dx:b,dy:e})}function l(){d({type:"dragend"}),h&&(Y(),d3.event.target===e&&i.on("click.drag",m,!0)),i.on("mousemove.drag",null).on("touchmove.drag",null).on("mouseup.drag",null).on("touchend.drag",null)}function m(){Y(),i.on("click.drag",null)}var c=this,d=a.of(c,arguments),e=d3.event.target,f,g=j(),h=0,i=d3.select(window).on("mousemove.drag",k).on("touchmove.drag",k).on("mouseup.drag",l,!0).on("touchend.drag",l,!0);b?(f=b.apply(c,arguments),f=[f.x-g[0],f.y-g[1]]):f=[0,0],Y(),d({type:"dragstart"})}var a=$(c,"drag","dragstart","dragend"),b=null;return c.origin=function(a){return arguments.length?(b=a,c):b},d3.rebind(c,a,"on")},d3.behavior.zoom=function(){function l(){this.on("mousedown.zoom",r).on("mousewheel.zoom",s).on("mousemove.zoom",t).on("DOMMouseScroll.zoom",s).on("dblclick.zoom",u).on("touchstart.zoom",v).on("touchmove.zoom",w).on("touchend.zoom",v)}function m(b){return[(b[0]-a[0])/c,(b[1]-a[1])/c]}function n(b){return[b[0]*c+a[0],b[1]*c+a[1]]}function o(a){c=Math.max(e[0],Math.min(e[1],a))}function p(b,c){c=n(c),a[0]+=b[0]-c[0],a[1]+=b[1]-c[1]}function q(b){h&&h.domain(g.range().map(function(b){return(b-a[0])/c}).map(g.invert)),j&&j.domain(i.range().map(function(b){return(b-a[1])/c}).map(i.invert)),d3.event.preventDefault(),b({type:"zoom",scale:c,translate:a})}function r(){function h(){d=1,p(d3.mouse(a),g),q(b)}function i(){d&&Y(),e.on("mousemove.zoom",null).on("mouseup.zoom",null),d&&d3.event.target===c&&e.on("click.zoom",j,!0)}function j(){Y(),e.on("click.zoom",null)}var a=this,b=f.of(a,arguments),c=d3.event.target,d=0,e=d3.select(window).on("mousemove.zoom",h).on("mouseup.zoom",i),g=m(d3.mouse(a));window.focus(),Y()}function s(){b||(b=m(d3.mouse(this))),o(Math.pow(2,eb()*.002)*c),p(d3.mouse(this),b),q(f.of(this,arguments))}function t(){b=null}function u(){var a=d3.mouse(this),b=m(a);o(d3.event.shiftKey?c/2:c*2),p(a,b),q(f.of(this,arguments))}function v(){var a=d3.touches(this),e=Date.now();d=c,b={},a.forEach(function(a){b[a.identifier]=m(a)}),Y();if(a.length===1){if(e-k<500){var g=a[0],h=m(a[0]);o(c*2),p(g,h),q(f.of(this,arguments))}k=e}}function w(){var a=d3.touches(this),c=a[0],e=b[c.identifier];if(g=a[1]){var g,h=b[g.identifier];c=[(c[0]+g[0])/2,(c[1]+g[1])/2],e=[(e[0]+h[0])/2,(e[1]+h[1])/2],o(d3.event.scale*d)}p(c,e),k=null,q(f.of(this,arguments))}var a=[0,0],b,c=1,d,e=ea,f=$(l,"zoom"),g,h,i,j,k;return l.translate=function(b){return arguments.length?(a=b.map(Number),l):a},l.scale=function(a){return arguments.length?(c=+a,l):c},l.scaleExtent=function(a){return arguments.length?(e=a==null?ea:a.map(Number),l):e},l.x=function(a){return arguments.length?(h=a,g=a.copy(),l):h},l.y=function(a){return arguments.length?(j=a,i=a.copy(),l):j},d3.rebind(l,f,"on")};var d_,ea=[0,Infinity];d3.layout={},d3.layout.bundle=function(){return function(a){var b=[],c=-1,d=a.length;while(++c<d)b.push(ec(a[c]));return b}},d3.layout.chord=function(){function j(){var a={},j=[],l=d3.range(e),m=[],n,o,p,q,r;b=[],c=[],n=0,q=-1;while(++q<e){o=0,r=-1;while(++r<e)o+=d[q][r];j.push(o),m.push(d3.range(e)),n+=o}g&&l.sort(function(a,b){return g(j[a],j[b])}),h&&m.forEach(function(a,b){a.sort(function(a,c){return h(d[b][a],d[b][c])})}),n=(2*Math.PI-f*e)/n,o=0,q=-1;while(++q<e){p=o,r=-1;while(++r<e){var s=l[q],t=m[s][r],u=d[s][t],v=o,w=o+=u*n;a[s+"-"+t]={index:s,subindex:t,startAngle:v,endAngle:w,value:u}}c[s]={index:s,startAngle:p,endAngle:o,value:(o-p)/n},o+=f}q=-1;while(++q<e){r=q-1;while(++r<e){var x=a[q+"-"+r],y=a[r+"-"+q];(x.value||y.value)&&b.push(x.value<y.value?{source:y,target:x}:{source:x,target:y})}}i&&k()}function k(){b.sort(function(a,b){return i((a.source.value+a.target.value)/2,(b.source.value+b.target.value)/2)})}var a={},b,c,d,e,f=0,g,h,i;return a.matrix=function(f){return arguments.length?(e=(d=f)&&d.length,b=c=null,a):d},a.padding=function(d){return arguments.length?(f=d,b=c=null,a):f},a.sortGroups=function(d){return arguments.length?(g=d,b=c=null,a):g},a.sortSubgroups=function(c){return arguments.length?(h=c,b=null,a):h},a.sortChords=function(c){return arguments.length?(i=c,b&&k(),a):i},a.chords=function(){return b||j(),b},a.groups=function(){return c||j(),c},a},d3.layout.force=function(){function t(a){return function(b,c,d,e,f){if(b.point!==a){var g=b.cx-a.x,h=b.cy-a.y,i=1/Math.sqrt(g*g+h*h);if((e-c)*i<k){var j=b.charge*i*i;return a.px-=g*j,a.py-=h*j,!0}if(b.point&&isFinite(i)){var j=b.pointCharge*i*i;a.px-=g*j,a.py-=h*j}}return!b.charge}}function u(b){eh(eg=b),ef=a}var a={},b=d3.dispatch("start","tick","end"),c=[1,1],d,e,f=.9,g=em,h=en,i=-30,j=.1,k=.8,l,n=[],o=[],q,r,s;return a.tick=function(){if((e*=.99)<.005)return b.end({type:"end",alpha:e=0}),!0;var a=n.length,d=o.length,g,h,k,l,m,p,u,v,w;for(h=0;h<d;++h){k=o[h],l=k.source,m=k.target,v=m.x-l.x,w=m.y-l.y;if(p=v*v+w*w)p=e*r[h]*((p=Math.sqrt(p))-q[h])/p,v*=p,w*=p,m.x-=v*(u=l.weight/(m.weight+l.weight)),m.y-=w*u,l.x+=v*(u=1-u),l.y+=w*u}if(u=e*j){v=c[0]/2,w=c[1]/2,h=-1;if(u)while(++h<a)k=n[h],k.x+=(v-k.x)*u,k.y+=(w-k.y)*u}if(i){el(g=d3.geom.quadtree(n),e,s),h=-1;while(++h<a)(k=n[h]).fixed||g.visit(t(k))}h=-1;while(++h<a)k=n[h],k.fixed?(k.x=k.px,k.y=k.py):(k.x-=(k.px-(k.px=k.x))*f,k.y-=(k.py-(k.py=k.y))*f);b.tick({type:"tick",alpha:e})},a.nodes=function(b){return arguments.length?(n=b,a):n},a.links=function(b){return arguments.length?(o=b,a):o},a.size=function(b){return arguments.length?(c=b,a):c},a.linkDistance=function(b){return arguments.length?(g=p(b),a):g},a.distance=a.linkDistance,a.linkStrength=function(b){return arguments.length?(h=p(b),a):h},a.friction=function(b){return arguments.length?(f=b,a):f},a.charge=function(b){return arguments.length?(i=typeof b=="function"?b:+b,a):i},a.gravity=function(b){return arguments.length?(j=b,a):j},a.theta=function(b){return arguments.length?(k=b,a):k},a.alpha=function(c){return arguments.length?(e?c>0?e=c:e=0:c>0&&(b.start({type:"start",alpha:e=c}),d3.timer(a.tick)),a):e},a.start=function(){function p(a,c){var d=t(b),e=-1,f=d.length,g;while(++e<f)if(!isNaN(g=d[e][a]))return g;return Math.random()*c}function t(){if(!l){l=[];for(d=0;d<e;++d)l[d]=[];for(d=0;d<f;++d){var a=o[d];l[a.source.index].push(a.target),l[a.target.index].push(a.source)}}return l[b]}var b,d,e=n.length,f=o.length,j=c[0],k=c[1],l,m;for(b=0;b<e;++b)(m=n[b]).index=b,m.weight=0;q=[],r=[];for(b=0;b<f;++b)m=o[b],typeof m.source=="number"&&(m.source=n[m.source]),typeof m.target=="number"&&(m.target=n[m.target]),q[b]=g.call(this,m,b),r[b]=h.call(this,m,b),++m.source.weight,++m.target.weight;for(b=0;b<e;++b)m=n[b],isNaN(m.x)&&(m.x=p("x",j)),isNaN(m.y)&&(m.y=p("y",k)),isNaN(m.px)&&(m.px=m.x),isNaN(m.py)&&(m.py=m.y);s=[];if(typeof i=="function")for(b=0;b<e;++b)s[b]=+i.call(this,n[b],b);else for(b=0;b<e;++b)s[b]=i;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){d||(d=d3.behavior.drag().origin(m).on("dragstart",u).on("drag",ek).on("dragend",ej)),this.on("mouseover.force",eh).on("mouseout.force",ei).call(d)},d3.rebind(a,b,"on")};var ef,eg;d3.layout.partition=function(){function c(a,b,d,e){var f=a.children;a.x=b,a.y=a.depth*e,a.dx=d,a.dy=e;if(f&&(h=f.length)){var g=-1,h,i,j;d=a.value?d/a.value:0;while(++g<h)c(i=f[g],b,j=i.value*d,e),b+=j}}function d(a){var b=a.children,c=0;if(b&&(f=b.length)){var e=-1,f;while(++e<f)c=Math.max(c,d(b[e]))}return 1+c}function e(e,f){var g=a.call(this,e,f);return c(g[0],0,b[0],b[1]/d(g[0])),g}var a=d3.layout.hierarchy(),b=[1,1];return e.size=function(a){return arguments.length?(b=a,e):b},eC(e,a)},d3.layout.pie=function(){function e(f,g){var h=f.map(function(b,c){return+a.call(e,b,c)}),i=+(typeof c=="function"?c.apply(this,arguments):c),j=((typeof d=="function"?d.apply(this,arguments):d)-c)/d3.sum(h),k=d3.range(f.length);b!=null&&k.sort(b===eo?function(a,b){return h[b]-h[a]}:function(a,c){return b(f[a],f[c])});var l=[];return k.forEach(function(a){var b;l[a]={data:f[a],value:b=h[a],startAngle:i,endAngle:i+=b*j}}),l}var a=Number,b=eo,c=0,d=2*Math.PI;return e.value=function(b){return arguments.length?(a=b,e):a},e.sort=function(a){return arguments.length?(b=a,e):b},e.startAngle=function(a){return arguments.length?(c=a,e):c},e.endAngle=function(a){return arguments.length?(d=a,e):d},e};var eo={};d3.layout.stack=function(){function g(h,i){var j=h.map(function(b,c){return a.call(g,b,c)}),k=j.map(function(a,b){return a.map(function(a,b){return[e.call(g,a,b),f.call(g,a,b)]})}),l=b.call(g,k,i);j=d3.permute(j,l),k=d3.permute(k,l);var m=c.call(g,k,i),n=j.length,o=j[0].length,p,q,r;for(q=0;q<o;++q){d.call(g,j[0][q],r=m[q],k[0][q][1]);for(p=1;p<n;++p)d.call(g,j[p][q],r+=k[p-1][q][1],k[p][q][1])}return h}var a=m,b=eu,c=ev,d=er,e=ep,f=eq;return g.values=function(b){return arguments.length?(a=b,g):a},g.order=function(a){return arguments.length?(b=typeof a=="function"?a:es.get(a)||eu,g):b},g.offset=function(a){return arguments.length?(c=typeof a=="function"?a:et.get(a)||ev,g):c},g.x=function(a){return arguments.length?(e=a,g):e},g.y=function(a){return arguments.length?(f=a,g):f},g.out=function(a){return arguments.length?(d=a,g):d},g};var es=d3.map({"inside-out":function(a){var b=a.length,c,d,e=a.map(ew),f=a.map(ex),g=d3.range(b).sort(function(a,b){return e[a]-e[b]}),h=0,i=0,j=[],k=[];for(c=0;c<b;++c)d=g[c],h<i?(h+=f[d],j.push(d)):(i+=f[d],k.push(d));return k.reverse().concat(j)},reverse:function(a){return d3.range(a.length).reverse()},"default":eu}),et=d3.map({silhouette:function(a){var b=a.length,c=a[0].length,d=[],e=0,f,g,h,i=[];for(g=0;g<c;++g){for(f=0,h=0;f<b;f++)h+=a[f][g][1];h>e&&(e=h),d.push(h)}for(g=0;g<c;++g)i[g]=(e-d[g])/2;return i},wiggle:function(a){var b=a.length,c=a[0],d=c.length,e=0,f,g,h,i,j,k,l,m,n,o=[];o[0]=m=n=0;for(g=1;g<d;++g){for(f=0,i=0;f<b;++f)i+=a[f][g][1];for(f=0,j=0,l=c[g][0]-c[g-1][0];f<b;++f){for(h=0,k=(a[f][g][1]-a[f][g-1][1])/(2*l);h<f;++h)k+=(a[h][g][1]-a[h][g-1][1])/l;j+=k*a[f][g][1]}o[g]=m-=i?j/i*l:0,m<n&&(n=m)}for(g=0;g<d;++g)o[g]-=n;return o},expand:function(a){var b=a.length,c=a[0].length,d=1/b,e,f,g,h=[];for(f=0;f<c;++f){for(e=0,g=0;e<b;e++)g+=a[e][f][1];if(g)for(e=0;e<b;e++)a[e][f][1]/=g;else for(e=0;e<b;e++)a[e][f][1]=d}for(f=0;f<c;++f)h[f]=0;return h},zero:ev});d3.layout.histogram=function(){function e(e,f){var g=[],h=e.map(b,this),i=c.call(this,h,f),j=d.call(this,i,h,f),k,f=-1,l=h.length,m=j.length-1,n=a?1:1/l,o;while(++f<m)k=g[f]=[],k.dx=j[f+1]-(k.x=j[f]),k.y=0;if(m>0){f=-1;while(++f<l)o=h[f],o>=i[0]&&o<=i[1]&&(k=g[d3.bisect(j,o,1,m)-1],k.y+=n,k.push(e[f]))}return g}var a=!0,b=Number,c=eB,d=ez;return e.value=function(a){return arguments.length?(b=a,e):b},e.range=function(a){return arguments.length?(c=p(a),e):c},e.bins=function(a){return arguments.length?(d=typeof a=="number"?function(b){return eA(b,a)}:p(a),e):d},e.frequency=function(b){return arguments.length?(a=!!b,e):a},e},d3.layout.hierarchy=function(){function d(e,g,h){var i=b.call(f,e,g),j=eH?e:{data:e};j.depth=g,h.push(j);if(i&&(l=i.length)){var k=-1,l,m=j.children=[],n=0,o=g+1,p;while(++k<l)p=d(i[k],o,h),p.parent=j,m.push(p),n+=p.value;a&&m.sort(a),c&&(j.value=n)}else c&&(j.value=+c.call(f,e,g)||0);return j}function e(a,b){var d=a.children,g=0;if(d&&(i=d.length)){var h=-1,i,j=b+1;while(++h<i)g+=e(d[h],j)}else c&&(g=+c.call(f,eH?a:a.data,b)||0);return c&&(a.value=g),g}function f(a){var b=[];return d(a,0,b),b}var a=eF,b=eD,c=eE;return f.sort=function(b){return arguments.length?(a=b,f):a},f.children=function(a){return arguments.length?(b=a,f):b},f.value=function(a){return arguments.length?(c=a,f):c},f.revalue=function(a){return e(a,0),a},f};var eH=!1;d3.layout.pack=function(){function d(d,e){var f=a.call(this,d,e),g=f[0];g.x=0,g.y=0,fa(g,function(a){a.r=Math.sqrt(a.value)}),fa(g,eM);var h=c[0],i=c[1],j=Math.max(2*g.r/h,2*g.r/i);if(b>0){var k=b*j/2;fa(g,function(a){a.r+=k}),fa(g,eM),fa(g,function(a){a.r-=k}),j=Math.max(2*g.r/h,2*g.r/i)}return eP(g,h/2,i/2,1/j),f}var a=d3.layout.hierarchy().sort(eI),b=0,c=[1,1];return d.size=function(a){return arguments.length?(c=a,d):c},d.padding=function(a){return arguments.length?(b=+a,d):b},eC(d,a)},d3.layout.cluster=function(){function d(d,e){var f=a.call(this,d,e),g=f[0],h,i=0,j,k;fa(g,function(a){var c=a.children;c&&c.length?(a.x=eS(c),a.y=eR(c)):(a.x=h?i+=b(a,h):0,a.y=0,h=a)});var l=eT(g),m=eU(g),n=l.x-b(l,m)/2,o=m.x+b(m,l)/2;return fa(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=(1-(g.y?a.y/g.y:1))*c[1]}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=eV,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},eC(d,a)},d3.layout.tree=function(){function d(d,e){function h(a,c){var d=a.children,e=a._tree;if(d&&(f=d.length)){var f,g=d[0],i,k=g,l,m=-1;while(++m<f)l=d[m],h(l,i),k=j(l,i,k),i=l;fb(a);var n=.5*(g._tree.prelim+l._tree.prelim);c?(e.prelim=c._tree.prelim+b(a,c),e.mod=e.prelim-n):e.prelim=n}else c&&(e.prelim=c._tree.prelim+b(a,c))}function i(a,b){a.x=a._tree.prelim+b;var c=a.children;if(c&&(e=c.length)){var d=-1,e;b+=a._tree.mod;while(++d<e)i(c[d],b)}}function j(a,c,d){if(c){var e=a,f=a,g=c,h=a.parent.children[0],i=e._tree.mod,j=f._tree.mod,k=g._tree.mod,l=h._tree.mod,m;while(g=eX(g),e=eW(e),g&&e)h=eW(h),f=eX(f),f._tree.ancestor=a,m=g._tree.prelim+k-e._tree.prelim-i+b(g,e),m>0&&(fc(fd(g,a,d),a,m),i+=m,j+=m),k+=g._tree.mod,i+=e._tree.mod,l+=h._tree.mod,j+=f._tree.mod;g&&!eX(f)&&(f._tree.thread=g,f._tree.mod+=k-j),e&&!eW(h)&&(h._tree.thread=e,h._tree.mod+=i-l,d=a)}return d}var f=a.call(this,d,e),g=f[0];fa(g,function(a,b){a._tree={ancestor:a,prelim:0,mod:0,change:0,shift:0,number:b?b._tree.number+1:0}}),h(g),i(g,-g._tree.prelim);var k=eY(g,e$),l=eY(g,eZ),m=eY(g,e_),n=k.x-b(k,l)/2,o=l.x+b(l,k)/2,p=m.depth||1;return fa(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=a.depth/p*c[1],delete a._tree}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=eV,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},eC(d,a)},d3.layout.treemap=function(){function i(a,b){var c=-1,d=a.length,e,f;while(++c<d)f=(e=a[c]).value*(b<0?0:b),e.area=isNaN(f)||f<=0?0:f}function j(a){var b=a.children;if(b&&b.length){var c=e(a),d=[],f=b.slice(),g,h=Infinity,k,n=Math.min(c.dx,c.dy),o;i(f,c.dx*c.dy/a.value),d.area=0;while((o=f.length)>0)d.push(g=f[o-1]),d.area+=g.area,(k=l(d,n))<=h?(f.pop(),h=k):(d.area-=d.pop().area,m(d,n,c,!1),n=Math.min(c.dx,c.dy),d.length=d.area=0,h=Infinity);d.length&&(m(d,n,c,!0),d.length=d.area=0),b.forEach(j)}}function k(a){var b=a.children;if(b&&b.length){var c=e(a),d=b.slice(),f,g=[];i(d,c.dx*c.dy/a.value),g.area=0;while(f=d.pop())g.push(f),g.area+=f.area,f.z!=null&&(m(g,f.z?c.dx:c.dy,c,!d.length),g.length=g.area=0);b.forEach(k)}}function l(a,b){var c=a.area,d,e=0,f=Infinity,g=-1,i=a.length;while(++g<i){if(!(d=a[g].area))continue;d<f&&(f=d),d>e&&(e=d)}return c*=c,b*=b,c?Math.max(b*e*h/c,c/(b*f*h)):Infinity}function m(a,c,d,e){var f=-1,g=a.length,h=d.x,i=d.y,j=c?b(a.area/c):0,k;if(c==d.dx){if(e||j>d.dy)j=d.dy;while(++f<g)k=a[f],k.x=h,k.y=i,k.dy=j,h+=k.dx=Math.min(d.x+d.dx-h,j?b(k.area/j):0);k.z=!0,k.dx+=d.x+d.dx-h,d.y+=j,d.dy-=j}else{if(e||j>d.dx)j=d.dx;while(++f<g)k=a[f],k.x=h,k.y=i,k.dx=j,i+=k.dy=Math.min(d.y+d.dy-i,j?b(k.area/j):0);k.z=!1,k.dy+=d.y+d.dy-i,d.x+=j,d.dx-=j}}function n(b){var d=g||a(b),e=d[0];return e.x=0,e.y=0,e.dx=c[0],e.dy=c[1],g&&a.revalue(e),i([e],e.dx*e.dy/e.value),(g?k:j)(e),f&&(g=d),d}var a=d3.layout.hierarchy(),b=Math.round,c=[1,1],d=null,e=fe,f=!1,g,h=.5*(1+Math.sqrt(5));return n.size=function(a){return arguments.length?(c=a,n):c},n.padding=function(a){function b(b){var c=a.call(n,b,b.depth);return c==null?fe(b):ff(b,typeof c=="number"?[c,c,c,c]:c)}function c(b){return ff(b,a)}if(!arguments.length)return d;var f;return e=(d=a)==null?fe:(f=typeof a)==="function"?b:f==="number"?(a=[a,a,a,a],c):c,n},n.round=function(a){return arguments.length?(b=a?Math.round:Number,n):b!=Number},n.sticky=function(a){return arguments.length?(f=a,g=null,n):f},n.ratio=function(a){return arguments.length?(h=a,n):h},eC(n,a)},d3.csv=fg(",","text/csv"),d3.tsv=fg("\t","text/tab-separated-values"),d3.geo={};var fh=Math.PI/180;d3.geo.azimuthal=function(){function i(b){var f=b[0]*fh-e,i=b[1]*fh,j=Math.cos(f),k=Math.sin(f),l=Math.cos(i),m=Math.sin(i),n=a!=="orthographic"?h*m+g*l*j:null,o,p=a==="stereographic"?1/(1+n):a==="gnomonic"?1/n:a==="equidistant"?(o=Math.acos(n),o?o/Math.sin(o):0):a==="equalarea"?Math.sqrt(2/(1+n)):1,q=p*l*k,r=p*(h*l*j-g*m);return[c*q+d[0],c*r+d[1]]}var a="orthographic",b,c=200,d=[480,250],e,f,g,h;return i.invert=function(b){var f=(b[0]-d[0])/c,i=(b[1]-d[1])/c,j=Math.sqrt(f*f+i*i),k=a==="stereographic"?2*Math.atan(j):a==="gnomonic"?Math.atan(j):a==="equidistant"?j:a==="equalarea"?2*Math.asin(.5*j):Math.asin(j),l=Math.sin(k),m=Math.cos(k);return[(e+Math.atan2(f*l,j*g*m+i*h*l))/fh,Math.asin(m*h-(j?i*l*g/j:0))/fh]},i.mode=function(b){return arguments.length?(a=b+"",i):a},i.origin=function(a){return arguments.length?(b=a,e=b[0]*fh,f=b[1]*fh,g=Math.cos(f),h=Math.sin(f),i):b},i.scale=function(a){return arguments.length?(c=+a,i):c},i.translate=function(a){return arguments.length?(d=[+a[0],+a[1]],i):d},i.origin([0,0])},d3.geo.albers=function(){function i(a){var b=f*(fh*a[0]-e),i=Math.sqrt(g-2*f*Math.sin(fh*a[1]))/f;return[c*i*Math.sin(b)+d[0],c*(i*Math.cos(b)-h)+d[1]]}function j(){var c=fh*b[0],d=fh*b[1],j=fh*a[1],k=Math.sin(c),l=Math.cos(c);return e=fh*a[0],f=.5*(k+Math.sin(d)),g=l*l+2*f*k,h=Math.sqrt(g-2*f*Math.sin(j))/f,i}var a=[-98,38],b=[29.5,45.5],c=1e3,d=[480,250],e,f,g,h;return i.invert=function(a){var b=(a[0]-d[0])/c,i=(a[1]-d[1])/c,j=h+i,k=Math.atan2(b,j),l=Math.sqrt(b*b+j*j);return[(e+k/f)/fh,Math.asin((g-l*l*f*f)/(2*f))/fh]},i.origin=function(b){return arguments.length?(a=[+b[0],+b[1]],j()):a},i.parallels=function(a){return arguments.length?(b=[+a[0],+a[1]],j()):b},i.scale=function(a){return arguments.length?(c=+a,i):c},i.translate=function(a){return arguments.length?(d=[+a[0],+a[1]],i):d},j()},d3.geo.albersUsa=function(){function e(e){var f=e[0],g=e[1];return(g>50?b:f<-140?c:g<21?d:a)(e)}var a=d3.geo.albers(),b=d3.geo.albers().origin([-160,60]).parallels([55,65]),c=d3.geo.albers().origin([-160,20]).parallels([8,18]),d=d3.geo.albers().origin([-60,10]).parallels([8,18]);return e.scale=function(f){return arguments.length?(a.scale(f),b.scale(f*.6),c.scale(f),d.scale(f*1.5),e.translate(a.translate())):a.scale()},e.translate=function(f){if(!arguments.length)return a.translate();var g=a.scale()/1e3,h=f[0],i=f[1];return a.translate(f),b.translate([h-400*g,i+170*g]),c.translate([h-190*g,i+200*g]),d.translate([h+580*g,i+430*g]),e},e.scale(a.scale())},d3.geo.bonne=function(){function g(g){var h=g[0]*fh-c,i=g[1]*fh-d;if(e){var j=f+e-i,k=h*Math.cos(i)/j;h=j*Math.sin(k),i=j*Math.cos(k)-f}else h*=Math.cos(i),i*=-1;return[a*h+b[0],a*i+b[1]]}var a=200,b=[480,250],c,d,e,f;return g.invert=function(d){var g=(d[0]-b[0])/a,h=(d[1]-b[1])/a;if(e){var i=f+h,j=Math.sqrt(g*g+i*i);h=f+e-j,g=c+j*Math.atan2(g,i)/Math.cos(h)}else h*=-1,g/=Math.cos(h);return[g/fh,h/fh]},g.parallel=function(a){return arguments.length?(f=1/
Math.tan(e=a*fh),g):e/fh},g.origin=function(a){return arguments.length?(c=a[0]*fh,d=a[1]*fh,g):[c/fh,d/fh]},g.scale=function(b){return arguments.length?(a=+b,g):a},g.translate=function(a){return arguments.length?(b=[+a[0],+a[1]],g):b},g.origin([0,0]).parallel(45)},d3.geo.equirectangular=function(){function c(c){var d=c[0]/360,e=-c[1]/360;return[a*d+b[0],a*e+b[1]]}var a=500,b=[480,250];return c.invert=function(c){var d=(c[0]-b[0])/a,e=(c[1]-b[1])/a;return[360*d,-360*e]},c.scale=function(b){return arguments.length?(a=+b,c):a},c.translate=function(a){return arguments.length?(b=[+a[0],+a[1]],c):b},c},d3.geo.mercator=function(){function c(c){var d=c[0]/360,e=-(Math.log(Math.tan(Math.PI/4+c[1]*fh/2))/fh)/360;return[a*d+b[0],a*Math.max(-0.5,Math.min(.5,e))+b[1]]}var a=500,b=[480,250];return c.invert=function(c){var d=(c[0]-b[0])/a,e=(c[1]-b[1])/a;return[360*d,2*Math.atan(Math.exp(-360*e*fh))/fh-90]},c.scale=function(b){return arguments.length?(a=+b,c):a},c.translate=function(a){return arguments.length?(b=[+a[0],+a[1]],c):b},c},d3.geo.path=function(){function e(c,e){typeof a=="function"&&(b=fj(a.apply(this,arguments))),g(c);var f=d.length?d.join(""):null;return d=[],f}function f(a){return c(a).join(",")}function i(a){var b=l(a[0]),c=0,d=a.length;while(++c<d)b-=l(a[c]);return b}function j(a){var b=d3.geom.polygon(a[0].map(c)),d=b.area(),e=b.centroid(d<0?(d*=-1,1):-1),f=e[0],g=e[1],h=d,i=0,j=a.length;while(++i<j)b=d3.geom.polygon(a[i].map(c)),d=b.area(),e=b.centroid(d<0?(d*=-1,1):-1),f-=e[0],g-=e[1],h-=d;return[f,g,6*h]}function l(a){return Math.abs(d3.geom.polygon(a.map(c)).area())}var a=4.5,b=fj(a),c=d3.geo.albersUsa(),d=[],g=fi({FeatureCollection:function(a){var b=a.features,c=-1,e=b.length;while(++c<e)d.push(g(b[c].geometry))},Feature:function(a){g(a.geometry)},Point:function(a){d.push("M",f(a.coordinates),b)},MultiPoint:function(a){var c=a.coordinates,e=-1,g=c.length;while(++e<g)d.push("M",f(c[e]),b)},LineString:function(a){var b=a.coordinates,c=-1,e=b.length;d.push("M");while(++c<e)d.push(f(b[c]),"L");d.pop()},MultiLineString:function(a){var b=a.coordinates,c=-1,e=b.length,g,h,i;while(++c<e){g=b[c],h=-1,i=g.length,d.push("M");while(++h<i)d.push(f(g[h]),"L");d.pop()}},Polygon:function(a){var b=a.coordinates,c=-1,e=b.length,g,h,i;while(++c<e){g=b[c],h=-1;if((i=g.length-1)>0){d.push("M");while(++h<i)d.push(f(g[h]),"L");d[d.length-1]="Z"}}},MultiPolygon:function(a){var b=a.coordinates,c=-1,e=b.length,g,h,i,j,k,l;while(++c<e){g=b[c],h=-1,i=g.length;while(++h<i){j=g[h],k=-1;if((l=j.length-1)>0){d.push("M");while(++k<l)d.push(f(j[k]),"L");d[d.length-1]="Z"}}}},GeometryCollection:function(a){var b=a.geometries,c=-1,e=b.length;while(++c<e)d.push(g(b[c]))}}),h=e.area=fi({FeatureCollection:function(a){var b=0,c=a.features,d=-1,e=c.length;while(++d<e)b+=h(c[d]);return b},Feature:function(a){return h(a.geometry)},Polygon:function(a){return i(a.coordinates)},MultiPolygon:function(a){var b=0,c=a.coordinates,d=-1,e=c.length;while(++d<e)b+=i(c[d]);return b},GeometryCollection:function(a){var b=0,c=a.geometries,d=-1,e=c.length;while(++d<e)b+=h(c[d]);return b}},0),k=e.centroid=fi({Feature:function(a){return k(a.geometry)},Polygon:function(a){var b=j(a.coordinates);return[b[0]/b[2],b[1]/b[2]]},MultiPolygon:function(a){var b=0,c=a.coordinates,d,e=0,f=0,g=0,h=-1,i=c.length;while(++h<i)d=j(c[h]),e+=d[0],f+=d[1],g+=d[2];return[e/g,f/g]}});return e.projection=function(a){return c=a,e},e.pointRadius=function(c){return typeof c=="function"?a=c:(a=+c,b=fj(a)),e},e},d3.geo.bounds=function(a){var b=Infinity,c=Infinity,d=-Infinity,e=-Infinity;return fk(a,function(a,f){a<b&&(b=a),a>d&&(d=a),f<c&&(c=f),f>e&&(e=f)}),[[b,c],[d,e]]};var fl={Feature:fm,FeatureCollection:fn,GeometryCollection:fo,LineString:fp,MultiLineString:fq,MultiPoint:fp,MultiPolygon:fr,Point:fs,Polygon:ft};d3.geo.circle=function(){function e(){}function f(a){return d.distance(a)<c}function h(a){var b=-1,e=a.length,f=[],g,h,j,k,l;while(++b<e)l=d.distance(j=a[b]),l<c?(h&&f.push(fx(h,j)((k-c)/(k-l))),f.push(j),g=h=null):(h=j,!g&&f.length&&(f.push(fx(f[f.length-1],h)((c-k)/(l-k))),g=h)),k=l;return g=a[0],h=f[0],h&&j[0]===g[0]&&j[1]===g[1]&&(j[0]!==h[0]||j[1]!==h[1])&&f.push(h),i(f)}function i(a){var b=0,c=a.length,e,f,g=c?[a[0]]:a,h,i=d.source();while(++b<c){h=d.source(a[b-1])(a[b]).coordinates;for(e=0,f=h.length;++e<f;)g.push(h[e])}return d.source(i),g}var a=[0,0],b=89.99,c=b*fh,d=d3.geo.greatArc().source(a).target(m);e.clip=function(b){return typeof a=="function"&&d.source(a.apply(this,arguments)),g(b)||null};var g=fi({FeatureCollection:function(a){var b=a.features.map(g).filter(m);return b&&(a=Object.create(a),a.features=b,a)},Feature:function(a){var b=g(a.geometry);return b&&(a=Object.create(a),a.geometry=b,a)},Point:function(a){return f(a.coordinates)&&a},MultiPoint:function(a){var b=a.coordinates.filter(f);return b.length&&{type:a.type,coordinates:b}},LineString:function(a){var b=h(a.coordinates);return b.length&&(a=Object.create(a),a.coordinates=b,a)},MultiLineString:function(a){var b=a.coordinates.map(h).filter(function(a){return a.length});return b.length&&(a=Object.create(a),a.coordinates=b,a)},Polygon:function(a){var b=a.coordinates.map(h);return b[0].length&&(a=Object.create(a),a.coordinates=b,a)},MultiPolygon:function(a){var b=a.coordinates.map(function(a){return a.map(h)}).filter(function(a){return a[0].length});return b.length&&(a=Object.create(a),a.coordinates=b,a)},GeometryCollection:function(a){var b=a.geometries.map(g).filter(m);return b.length&&(a=Object.create(a),a.geometries=b,a)}});return e.origin=function(b){return arguments.length?(a=b,typeof a!="function"&&d.source(a),e):a},e.angle=function(a){return arguments.length?(c=(b=+a)*fh,e):b},d3.rebind(e,d,"precision")},d3.geo.greatArc=function(){function g(){var a=g.distance.apply(this,arguments),c=0,h=e/a,i=[b];while((c+=h)<1)i.push(f(c));return i.push(d),{type:"LineString",coordinates:i}}var a=fu,b,c=fv,d,e=6*fh,f=fw();return g.distance=function(){return typeof a=="function"&&f.source(b=a.apply(this,arguments)),typeof c=="function"&&f.target(d=c.apply(this,arguments)),f.distance()},g.source=function(c){return arguments.length?(a=c,typeof a!="function"&&f.source(b=a),g):a},g.target=function(a){return arguments.length?(c=a,typeof c!="function"&&f.target(d=c),g):c},g.precision=function(a){return arguments.length?(e=a*fh,g):e/fh},g},d3.geo.greatCircle=d3.geo.circle,d3.geom={},d3.geom.contour=function(a,b){var c=b||fA(a),d=[],e=c[0],f=c[1],g=0,h=0,i=NaN,j=NaN,k=0;do k=0,a(e-1,f-1)&&(k+=1),a(e,f-1)&&(k+=2),a(e-1,f)&&(k+=4),a(e,f)&&(k+=8),k===6?(g=j===-1?-1:1,h=0):k===9?(g=0,h=i===1?-1:1):(g=fy[k],h=fz[k]),g!=i&&h!=j&&(d.push([e,f]),i=g,j=h),e+=g,f+=h;while(c[0]!=e||c[1]!=f);return d};var fy=[1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,NaN],fz=[0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,NaN];d3.geom.hull=function(a){if(a.length<3)return[];var b=a.length,c=b-1,d=[],e=[],f,g,h=0,i,j,k,l,m,n,o,p;for(f=1;f<b;++f)a[f][1]<a[h][1]?h=f:a[f][1]==a[h][1]&&(h=a[f][0]<a[h][0]?f:h);for(f=0;f<b;++f){if(f===h)continue;j=a[f][1]-a[h][1],i=a[f][0]-a[h][0],d.push({angle:Math.atan2(j,i),index:f})}d.sort(function(a,b){return a.angle-b.angle}),o=d[0].angle,n=d[0].index,m=0;for(f=1;f<c;++f)g=d[f].index,o==d[f].angle?(i=a[n][0]-a[h][0],j=a[n][1]-a[h][1],k=a[g][0]-a[h][0],l=a[g][1]-a[h][1],i*i+j*j>=k*k+l*l?d[f].index=-1:(d[m].index=-1,o=d[f].angle,m=f,n=g)):(o=d[f].angle,m=f,n=g);e.push(h);for(f=0,g=0;f<2;++g)d[g].index!==-1&&(e.push(d[g].index),f++);p=e.length;for(;g<c;++g){if(d[g].index===-1)continue;while(!fB(e[p-2],e[p-1],d[g].index,a))--p;e[p++]=d[g].index}var q=[];for(f=0;f<p;++f)q.push(a[e[f]]);return q},d3.geom.polygon=function(a){return a.area=function(){var b=0,c=a.length,d=a[c-1][0]*a[0][1],e=a[c-1][1]*a[0][0];while(++b<c)d+=a[b-1][0]*a[b][1],e+=a[b-1][1]*a[b][0];return(e-d)*.5},a.centroid=function(b){var c=-1,d=a.length,e=0,f=0,g,h=a[d-1],i;arguments.length||(b=-1/(6*a.area()));while(++c<d)g=h,h=a[c],i=g[0]*h[1]-h[0]*g[1],e+=(g[0]+h[0])*i,f+=(g[1]+h[1])*i;return[e*b,f*b]},a.clip=function(b){var c,d=-1,e=a.length,f,g,h=a[e-1],i,j,k;while(++d<e){c=b.slice(),b.length=0,i=a[d],j=c[(g=c.length)-1],f=-1;while(++f<g)k=c[f],fC(k,h,i)?(fC(j,h,i)||b.push(fD(j,k,h,i)),b.push(k)):fC(j,h,i)&&b.push(fD(j,k,h,i)),j=k;h=i}return b},a},d3.geom.voronoi=function(a){var b=a.map(function(){return[]});return fF(a,function(a){var c,d,e,f,g,h;a.a===1&&a.b>=0?(c=a.ep.r,d=a.ep.l):(c=a.ep.l,d=a.ep.r),a.a===1?(g=c?c.y:-1e6,e=a.c-a.b*g,h=d?d.y:1e6,f=a.c-a.b*h):(e=c?c.x:-1e6,g=a.c-a.a*e,f=d?d.x:1e6,h=a.c-a.a*f);var i=[e,g],j=[f,h];b[a.region.l.index].push(i,j),b[a.region.r.index].push(i,j)}),b.map(function(b,c){var d=a[c][0],e=a[c][1];return b.forEach(function(a){a.angle=Math.atan2(a[0]-d,a[1]-e)}),b.sort(function(a,b){return a.angle-b.angle}).filter(function(a,c){return!c||a.angle-b[c-1].angle>1e-10})})};var fE={l:"r",r:"l"};d3.geom.delaunay=function(a){var b=a.map(function(){return[]}),c=[];return fF(a,function(c){b[c.region.l.index].push(a[c.region.r.index])}),b.forEach(function(b,d){var e=a[d],f=e[0],g=e[1];b.forEach(function(a){a.angle=Math.atan2(a[0]-f,a[1]-g)}),b.sort(function(a,b){return a.angle-b.angle});for(var h=0,i=b.length-1;h<i;h++)c.push([e,b[h],b[h+1]])}),c},d3.geom.quadtree=function(a,b,c,d,e){function k(a,b,c,d,e,f){if(isNaN(b.x)||isNaN(b.y))return;if(a.leaf){var g=a.point;g?Math.abs(g.x-b.x)+Math.abs(g.y-b.y)<.01?l(a,b,c,d,e,f):(a.point=null,l(a,g,c,d,e,f),l(a,b,c,d,e,f)):a.point=b}else l(a,b,c,d,e,f)}function l(a,b,c,d,e,f){var g=(c+e)*.5,h=(d+f)*.5,i=b.x>=g,j=b.y>=h,l=(j<<1)+i;a.leaf=!1,a=a.nodes[l]||(a.nodes[l]=fG()),i?c=g:e=g,j?d=h:f=h,k(a,b,c,d,e,f)}var f,g=-1,h=a.length;h&&isNaN(a[0].x)&&(a=a.map(fI));if(arguments.length<5)if(arguments.length===3)e=d=c,c=b;else{b=c=Infinity,d=e=-Infinity;while(++g<h)f=a[g],f.x<b&&(b=f.x),f.y<c&&(c=f.y),f.x>d&&(d=f.x),f.y>e&&(e=f.y);var i=d-b,j=e-c;i>j?e=c+i:d=b+j}var m=fG();return m.add=function(a){k(m,a,b,c,d,e)},m.visit=function(a){fH(a,m,b,c,d,e)},a.forEach(m.add),m},d3.time={};var fJ=Date,fK=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];fL.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){fM.setUTCDate.apply(this._,arguments)},setDay:function(){fM.setUTCDay.apply(this._,arguments)},setFullYear:function(){fM.setUTCFullYear.apply(this._,arguments)},setHours:function(){fM.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){fM.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){fM.setUTCMinutes.apply(this._,arguments)},setMonth:function(){fM.setUTCMonth.apply(this._,arguments)},setSeconds:function(){fM.setUTCSeconds.apply(this._,arguments)},setTime:function(){fM.setTime.apply(this._,arguments)}};var fM=Date.prototype,fN="%a %b %e %H:%M:%S %Y",fO="%m/%d/%y",fP="%H:%M:%S",fQ=fK,fR=fQ.map(fU),fS=["January","February","March","April","May","June","July","August","September","October","November","December"],fT=fS.map(fU);d3.time.format=function(a){function c(c){var d=[],e=-1,f=0,g,h;while(++e<b)a.charCodeAt(e)==37&&(d.push(a.substring(f,e),(h=gg[g=a.charAt(++e)])?h(c):g),f=e+1);return d.push(a.substring(f,e)),d.join("")}var b=a.length;return c.parse=function(b){var c={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},d=fV(c,a,b,0);if(d!=b.length)return null;"p"in c&&(c.H=c.H%12+c.p*12);var e=new fJ;return e.setFullYear(c.y,c.m,c.d),e.setHours(c.H,c.M,c.S,c.L),e},c.toString=function(){return a},c};var fY=d3.format("02d"),fZ=d3.format("03d"),f$=d3.format("04d"),f_=d3.format("2d"),ga=fW(fQ),gb=fW(fR),gc=fW(fS),gd=fX(fS),ge=fW(fT),gf=fX(fT),gg={a:function(a){return fR[a.getDay()]},A:function(a){return fQ[a.getDay()]},b:function(a){return fT[a.getMonth()]},B:function(a){return fS[a.getMonth()]},c:d3.time.format(fN),d:function(a){return fY(a.getDate())},e:function(a){return f_(a.getDate())},H:function(a){return fY(a.getHours())},I:function(a){return fY(a.getHours()%12||12)},j:function(a){return fZ(1+d3.time.dayOfYear(a))},L:function(a){return fZ(a.getMilliseconds())},m:function(a){return fY(a.getMonth()+1)},M:function(a){return fY(a.getMinutes())},p:function(a){return a.getHours()>=12?"PM":"AM"},S:function(a){return fY(a.getSeconds())},U:function(a){return fY(d3.time.sundayOfYear(a))},w:function(a){return a.getDay()},W:function(a){return fY(d3.time.mondayOfYear(a))},x:d3.time.format(fO),X:d3.time.format(fP),y:function(a){return fY(a.getFullYear()%100)},Y:function(a){return f$(a.getFullYear()%1e4)},Z:gB,"%":function(a){return"%"}},gh={a:gi,A:gj,b:gk,B:gl,c:gm,d:gt,e:gt,H:gu,I:gu,L:gx,m:gs,M:gv,p:gz,S:gw,x:gn,X:go,y:gq,Y:gp},gy=/^\s*\d+/,gA=d3.map({am:0,pm:1});d3.time.format.utc=function(a){function c(a){try{fJ=fL;var c=new fJ;return c._=a,b(c)}finally{fJ=Date}}var b=d3.time.format(a);return c.parse=function(a){try{fJ=fL;var c=b.parse(a);return c&&c._}finally{fJ=Date}},c.toString=b.toString,c};var gC=d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");d3.time.format.iso=Date.prototype.toISOString?gD:gC,gD.parse=function(a){var b=new Date(a);return isNaN(b)?null:b},gD.toString=gC.toString,d3.time.second=gE(function(a){return new fJ(Math.floor(a/1e3)*1e3)},function(a,b){a.setTime(a.getTime()+Math.floor(b)*1e3)},function(a){return a.getSeconds()}),d3.time.seconds=d3.time.second.range,d3.time.seconds.utc=d3.time.second.utc.range,d3.time.minute=gE(function(a){return new fJ(Math.floor(a/6e4)*6e4)},function(a,b){a.setTime(a.getTime()+Math.floor(b)*6e4)},function(a){return a.getMinutes()}),d3.time.minutes=d3.time.minute.range,d3.time.minutes.utc=d3.time.minute.utc.range,d3.time.hour=gE(function(a){var b=a.getTimezoneOffset()/60;return new fJ((Math.floor(a/36e5-b)+b)*36e5)},function(a,b){a.setTime(a.getTime()+Math.floor(b)*36e5)},function(a){return a.getHours()}),d3.time.hours=d3.time.hour.range,d3.time.hours.utc=d3.time.hour.utc.range,d3.time.day=gE(function(a){var b=new fJ(0,a.getMonth(),a.getDate());return b.setFullYear(a.getFullYear()),b},function(a,b){a.setDate(a.getDate()+b)},function(a){return a.getDate()-1}),d3.time.days=d3.time.day.range,d3.time.days.utc=d3.time.day.utc.range,d3.time.dayOfYear=function(a){var b=d3.time.year(a);return Math.floor((a-b-(a.getTimezoneOffset()-b.getTimezoneOffset())*6e4)/864e5)},fK.forEach(function(a,b){a=a.toLowerCase(),b=7-b;var c=d3.time[a]=gE(function(a){return(a=d3.time.day(a)).setDate(a.getDate()-(a.getDay()+b)%7),a},function(a,b){a.setDate(a.getDate()+Math.floor(b)*7)},function(a){var c=d3.time.year(a).getDay();return Math.floor((d3.time.dayOfYear(a)+(c+b)%7)/7)-(c!==b)});d3.time[a+"s"]=c.range,d3.time[a+"s"].utc=c.utc.range,d3.time[a+"OfYear"]=function(a){var c=d3.time.year(a).getDay();return Math.floor((d3.time.dayOfYear(a)+(c+b)%7)/7)}}),d3.time.week=d3.time.sunday,d3.time.weeks=d3.time.sunday.range,d3.time.weeks.utc=d3.time.sunday.utc.range,d3.time.weekOfYear=d3.time.sundayOfYear,d3.time.month=gE(function(a){return a=d3.time.day(a),a.setDate(1),a},function(a,b){a.setMonth(a.getMonth()+b)},function(a){return a.getMonth()}),d3.time.months=d3.time.month.range,d3.time.months.utc=d3.time.month.utc.range,d3.time.year=gE(function(a){return a=d3.time.day(a),a.setMonth(0,1),a},function(a,b){a.setFullYear(a.getFullYear()+b)},function(a){return a.getFullYear()}),d3.time.years=d3.time.year.range,d3.time.years.utc=d3.time.year.utc.range;var gM=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],gN=[[d3.time.second,1],[d3.time.second,5],[d3.time.second,15],[d3.time.second,30],[d3.time.minute,1],[d3.time.minute,5],[d3.time.minute,15],[d3.time.minute,30],[d3.time.hour,1],[d3.time.hour,3],[d3.time.hour,6],[d3.time.hour,12],[d3.time.day,1],[d3.time.day,2],[d3.time.week,1],[d3.time.month,1],[d3.time.month,3],[d3.time.year,1]],gO=[[d3.time.format("%Y"),function(a){return!0}],[d3.time.format("%B"),function(a){return a.getMonth()}],[d3.time.format("%b %d"),function(a){return a.getDate()!=1}],[d3.time.format("%a %d"),function(a){return a.getDay()&&a.getDate()!=1}],[d3.time.format("%I %p"),function(a){return a.getHours()}],[d3.time.format("%I:%M"),function(a){return a.getMinutes()}],[d3.time.format(":%S"),function(a){return a.getSeconds()}],[d3.time.format(".%L"),function(a){return a.getMilliseconds()}]],gP=d3.scale.linear(),gQ=gJ(gO);gN.year=function(a,b){return gP.domain(a.map(gL)).ticks(b).map(gK)},d3.time.scale=function(){return gG(d3.scale.linear(),gN,gQ)};var gR=gN.map(function(a){return[a[0].utc,a[1]]}),gS=[[d3.time.format.utc("%Y"),function(a){return!0}],[d3.time.format.utc("%B"),function(a){return a.getUTCMonth()}],[d3.time.format.utc("%b %d"),function(a){return a.getUTCDate()!=1}],[d3.time.format.utc("%a %d"),function(a){return a.getUTCDay()&&a.getUTCDate()!=1}],[d3.time.format.utc("%I %p"),function(a){return a.getUTCHours()}],[d3.time.format.utc("%I:%M"),function(a){return a.getUTCMinutes()}],[d3.time.format.utc(":%S"),function(a){return a.getUTCSeconds()}],[d3.time.format.utc(".%L"),function(a){return a.getUTCMilliseconds()}]],gT=gJ(gS);gR.year=function(a,b){return gP.domain(a.map(gV)).ticks(b).map(gU)},d3.time.scale.utc=function(){return gG(d3.scale.linear(),gR,gT)}})();


/* D3layout unminified*/

(function(){d3.layout = {};
// Implements hierarchical edge bundling using Holten's algorithm. For each
// input link, a path is computed that travels through the tree, up the parent
// hierarchy to the least common ancestor, and then back down to the destination
// node. Each path is simply an array of nodes.
d3.layout.bundle = function() {
  return function(links) {
    var paths = [],
        i = -1,
        n = links.length;
    while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
    return paths;
  };
};

function d3_layout_bundlePath(link) {
  var start = link.source,
      end = link.target,
      lca = d3_layout_bundleLeastCommonAncestor(start, end),
      points = [start];
  while (start !== lca) {
    start = start.parent;
    points.push(start);
  }
  var k = points.length;
  while (end !== lca) {
    points.splice(k, 0, end);
    end = end.parent;
  }
  return points;
}

function d3_layout_bundleAncestors(node) {
  var ancestors = [],
      parent = node.parent;
  while (parent != null) {
    ancestors.push(node);
    node = parent;
    parent = parent.parent;
  }
  ancestors.push(node);
  return ancestors;
}

function d3_layout_bundleLeastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = d3_layout_bundleAncestors(a),
      bNodes = d3_layout_bundleAncestors(b),
      aNode = aNodes.pop(),
      bNode = bNodes.pop(),
      sharedNode = null;
  while (aNode === bNode) {
    sharedNode = aNode;
    aNode = aNodes.pop();
    bNode = bNodes.pop();
  }
  return sharedNode;
}
d3.layout.chord = function() {
  var chord = {},
      chords,
      groups,
      matrix,
      n,
      padding = 0,
      sortGroups,
      sortSubgroups,
      sortChords;

  function relayout() {
    var subgroups = {},
        groupSums = [],
        groupIndex = d3.range(n),
        subgroupIndex = [],
        k,
        x,
        x0,
        i,
        j;

    chords = [];
    groups = [];

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(d3.range(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) {
      groupIndex.sort(function(a, b) {
        return sortGroups(groupSums[a], groupSums[b]);
      });
    }

    // Sort subgroups…
    if (sortSubgroups) {
      subgroupIndex.forEach(function(d, i) {
        d.sort(function(a, b) {
          return sortSubgroups(matrix[i][a], matrix[i][b]);
        });
      });
    }

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified.
    // TODO Allow padding to be specified as percentage?
    k = (2 * Math.PI - padding * n) / k;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[di + "-" + dj] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups.push({
        index: di,
        startAngle: x0,
        endAngle: x,
        value: (x - x0) / k
      });
      x += padding;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[i + "-" + j],
            target = subgroups[j + "-" + i];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    if (sortChords) resort();
  }

  function resort() {
    chords.sort(function(a, b) {
      return sortChords(
          (a.source.value + a.target.value) / 2,
          (b.source.value + b.target.value) / 2);
    });
  }

  chord.matrix = function(x) {
    if (!arguments.length) return matrix;
    n = (matrix = x) && matrix.length;
    chords = groups = null;
    return chord;
  };

  chord.padding = function(x) {
    if (!arguments.length) return padding;
    padding = x;
    chords = groups = null;
    return chord;
  };

  chord.sortGroups = function(x) {
    if (!arguments.length) return sortGroups;
    sortGroups = x;
    chords = groups = null;
    return chord;
  };

  chord.sortSubgroups = function(x) {
    if (!arguments.length) return sortSubgroups;
    sortSubgroups = x;
    chords = null;
    return chord;
  };

  chord.sortChords = function(x) {
    if (!arguments.length) return sortChords;
    sortChords = x;
    if (chords) resort();
    return chord;
  };

  chord.chords = function() {
    if (!chords) relayout();
    return chords;
  };

  chord.groups = function() {
    if (!groups) relayout();
    return groups;
  };

  return chord;
};
// A rudimentary force layout using Gauss-Seidel.
d3.layout.force = function() {
  var force = {},
      event = d3.dispatch("tick"),
      size = [1, 1],
      drag,
      alpha,
      friction = .9,
      linkDistance = d3_layout_forceLinkDistance,
      linkStrength = d3_layout_forceLinkStrength,
      charge = -30,
      gravity = .1,
      theta = .8,
      interval,
      nodes = [],
      links = [],
      distances,
      strengths,
      charges;

  function repulse(node) {
    return function(quad, x1, y1, x2, y2) {
      if (quad.point !== node) {
        var dx = quad.cx - node.x,
            dy = quad.cy - node.y,
            dn = 1 / Math.sqrt(dx * dx + dy * dy);

        /* Barnes-Hut criterion. */
        if ((x2 - x1) * dn < theta) {
          var k = quad.charge * dn * dn;
          node.px -= dx * k;
          node.py -= dy * k;
          return true;
        }

        if (quad.point && isFinite(dn)) {
          var k = quad.pointCharge * dn * dn;
          node.px -= dx * k;
          node.py -= dy * k;
        }
      }
      return !quad.charge;
    };
  }

  function tick() {
    var n = nodes.length,
        m = links.length,
        q,
        i, // current index
        o, // current object
        s, // current source
        t, // current target
        l, // current distance
        k, // current force
        x, // x-distance
        y; // y-distance

    // gauss-seidel relaxation for links
    for (i = 0; i < m; ++i) {
      o = links[i];
      s = o.source;
      t = o.target;
      x = t.x - s.x;
      y = t.y - s.y;
      if (l = (x * x + y * y)) {
        l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
        x *= l;
        y *= l;
        t.x -= x * (k = s.weight / (t.weight + s.weight));
        t.y -= y * k;
        s.x += x * (k = 1 - k);
        s.y += y * k;
      }
    }

    // apply gravity forces
    if (k = alpha * gravity) {
      x = size[0] / 2;
      y = size[1] / 2;
      i = -1; if (k) while (++i < n) {
        o = nodes[i];
        o.x += (x - o.x) * k;
        o.y += (y - o.y) * k;
      }
    }

    // compute quadtree center of mass and apply charge forces
    if (charge) {
      d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
      i = -1; while (++i < n) {
        if (!(o = nodes[i]).fixed) {
          q.visit(repulse(o));
        }
      }
    }

    // position verlet integration
    i = -1; while (++i < n) {
      o = nodes[i];
      if (o.fixed) {
        o.x = o.px;
        o.y = o.py;
      } else {
        o.x -= (o.px - (o.px = o.x)) * friction;
        o.y -= (o.py - (o.py = o.y)) * friction;
      }
    }

    event.tick({type: "tick", alpha: alpha});

    // simulated annealing, basically
    return (alpha *= .99) < .005;
  }

  force.on = function(type, listener) {
    event.on(type, listener);
    return force;
  };

  force.nodes = function(x) {
    if (!arguments.length) return nodes;
    nodes = x;
    return force;
  };

  force.links = function(x) {
    if (!arguments.length) return links;
    links = x;
    return force;
  };

  force.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return force;
  };

  force.linkDistance = function(x) {
    if (!arguments.length) return linkDistance;
    linkDistance = d3.functor(x);
    return force;
  };

  // For backwards-compatibility.
  force.distance = force.linkDistance;

  force.linkStrength = function(x) {
    if (!arguments.length) return linkStrength;
    linkStrength = d3.functor(x);
    return force;
  };

  force.friction = function(x) {
    if (!arguments.length) return friction;
    friction = x;
    return force;
  };

  force.charge = function(x) {
    if (!arguments.length) return charge;
    charge = typeof x === "function" ? x : +x;
    return force;
  };

  force.gravity = function(x) {
    if (!arguments.length) return gravity;
    gravity = x;
    return force;
  };

  force.theta = function(x) {
    if (!arguments.length) return theta;
    theta = x;
    return force;
  };

  force.start = function() {
    var i,
        j,
        n = nodes.length,
        m = links.length,
        w = size[0],
        h = size[1],
        neighbors,
        o;

    for (i = 0; i < n; ++i) {
      (o = nodes[i]).index = i;
      o.weight = 0;
    }

    distances = [];
    strengths = [];
    for (i = 0; i < m; ++i) {
      o = links[i];
      if (typeof o.source == "number") o.source = nodes[o.source];
      if (typeof o.target == "number") o.target = nodes[o.target];
      distances[i] = linkDistance.call(this, o, i);
      strengths[i] = linkStrength.call(this, o, i);
      ++o.source.weight;
      ++o.target.weight;
    }

    for (i = 0; i < n; ++i) {
      o = nodes[i];
      if (isNaN(o.x)) o.x = position("x", w);
      if (isNaN(o.y)) o.y = position("y", h);
      if (isNaN(o.px)) o.px = o.x;
      if (isNaN(o.py)) o.py = o.y;
    }

    charges = [];
    if (typeof charge === "function") {
      for (i = 0; i < n; ++i) {
        charges[i] = +charge.call(this, nodes[i], i);
      }
    } else {
      for (i = 0; i < n; ++i) {
        charges[i] = charge;
      }
    }

    // initialize node position based on first neighbor
    function position(dimension, size) {
      var neighbors = neighbor(i),
          j = -1,
          m = neighbors.length,
          x;
      while (++j < m) if (!isNaN(x = neighbors[j][dimension])) return x;
      return Math.random() * size;
    }

    // initialize neighbors lazily
    function neighbor() {
      if (!neighbors) {
        neighbors = [];
        for (j = 0; j < n; ++j) {
          neighbors[j] = [];
        }
        for (j = 0; j < m; ++j) {
          var o = links[j];
          neighbors[o.source.index].push(o.target);
          neighbors[o.target.index].push(o.source);
        }
      }
      return neighbors[i];
    }

    return force.resume();
  };

  force.resume = function() {
    alpha = .1;
    d3.timer(tick);
    return force;
  };

  force.stop = function() {
    alpha = 0;
    return force;
  };

  // use `node.call(force.drag)` to make nodes draggable
  force.drag = function() {
    if (!drag) drag = d3.behavior.drag()
        .origin(Object)
        .on("dragstart", dragstart)
        .on("drag", d3_layout_forceDrag)
        .on("dragend", d3_layout_forceDragEnd);

    this.on("mouseover.force", d3_layout_forceDragOver)
        .on("mouseout.force", d3_layout_forceDragOut)
        .call(drag);
  };

  function dragstart(d) {
    d3_layout_forceDragOver(d3_layout_forceDragNode = d);
    d3_layout_forceDragForce = force;
  }

  return force;
};

var d3_layout_forceDragForce,
    d3_layout_forceDragNode;

function d3_layout_forceDragOver(d) {
  d.fixed |= 2;
}

function d3_layout_forceDragOut(d) {
  if (d !== d3_layout_forceDragNode) d.fixed &= 1;
}

function d3_layout_forceDragEnd() {
  d3_layout_forceDrag();
  d3_layout_forceDragNode.fixed &= 1;
  d3_layout_forceDragForce = d3_layout_forceDragNode = null;
}

function d3_layout_forceDrag() {
  d3_layout_forceDragNode.px = d3.event.x;
  d3_layout_forceDragNode.py = d3.event.y;
  d3_layout_forceDragForce.resume(); // restart annealing
}

function d3_layout_forceAccumulate(quad, alpha, charges) {
  var cx = 0,
      cy = 0;
  quad.charge = 0;
  if (!quad.leaf) {
    var nodes = quad.nodes,
        n = nodes.length,
        i = -1,
        c;
    while (++i < n) {
      c = nodes[i];
      if (c == null) continue;
      d3_layout_forceAccumulate(c, alpha, charges);
      quad.charge += c.charge;
      cx += c.charge * c.cx;
      cy += c.charge * c.cy;
    }
  }
  if (quad.point) {
    // jitter internal nodes that are coincident
    if (!quad.leaf) {
      quad.point.x += Math.random() - .5;
      quad.point.y += Math.random() - .5;
    }
    var k = alpha * charges[quad.point.index];
    quad.charge += quad.pointCharge = k;
    cx += k * quad.point.x;
    cy += k * quad.point.y;
  }
  quad.cx = cx / quad.charge;
  quad.cy = cy / quad.charge;
}

function d3_layout_forceLinkDistance(link) {
  return 20;
}

function d3_layout_forceLinkStrength(link) {
  return 1;
}
d3.layout.partition = function() {
  var hierarchy = d3.layout.hierarchy(),
      size = [1, 1]; // width, height

  function position(node, x, dx, dy) {
    var children = node.children;
    node.x = x;
    node.y = node.depth * dy;
    node.dx = dx;
    node.dy = dy;
    if (children && (n = children.length)) {
      var i = -1,
          n,
          c,
          d;
      dx = node.value ? dx / node.value : 0;
      while (++i < n) {
        position(c = children[i], x, d = c.value * dx, dy);
        x += d;
      }
    }
  }

  function depth(node) {
    var children = node.children,
        d = 0;
    if (children && (n = children.length)) {
      var i = -1,
          n;
      while (++i < n) d = Math.max(d, depth(children[i]));
    }
    return 1 + d;
  }

  function partition(d, i) {
    var nodes = hierarchy.call(this, d, i);
    position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
    return nodes;
  }

  partition.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return partition;
  };

  return d3_layout_hierarchyRebind(partition, hierarchy);
};
d3.layout.pie = function() {
  var value = Number,
      sort = d3_layout_pieSortByValue,
      startAngle = 0,
      endAngle = 2 * Math.PI;

  function pie(data, i) {

    // Compute the numeric values for each data element.
    var values = data.map(function(d, i) { return +value.call(pie, d, i); });

    // Compute the start angle.
    var a = +(typeof startAngle === "function"
        ? startAngle.apply(this, arguments)
        : startAngle);

    // Compute the angular scale factor: from value to radians.
    var k = ((typeof endAngle === "function"
        ? endAngle.apply(this, arguments)
        : endAngle) - startAngle)
        / d3.sum(values);

    // Optionally sort the data.
    var index = d3.range(data.length);
    if (sort != null) index.sort(sort === d3_layout_pieSortByValue
        ? function(i, j) { return values[j] - values[i]; }
        : function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs!
    var arcs = index.map(function(i) {
      return {
        data: data[i],
        value: d = values[i],
        startAngle: a,
        endAngle: a += d * k
      };
    });

    // Return the arcs in the original data's order.
    return data.map(function(d, i) {
      return arcs[index[i]];
    });
  }

  /**
   * Specifies the value function *x*, which returns a nonnegative numeric value
   * for each datum. The default value function is `Number`. The value function
   * is passed two arguments: the current datum and the current index.
   */
  pie.value = function(x) {
    if (!arguments.length) return value;
    value = x;
    return pie;
  };

  /**
   * Specifies a sort comparison operator *x*. The comparator is passed two data
   * elements from the data array, a and b; it returns a negative value if a is
   * less than b, a positive value if a is greater than b, and zero if a equals
   * b.
   */
  pie.sort = function(x) {
    if (!arguments.length) return sort;
    sort = x;
    return pie;
  };

  /**
   * Specifies the overall start angle of the pie chart. Defaults to 0. The
   * start angle can be specified either as a constant or as a function; in the
   * case of a function, it is evaluated once per array (as opposed to per
   * element).
   */
  pie.startAngle = function(x) {
    if (!arguments.length) return startAngle;
    startAngle = x;
    return pie;
  };

  /**
   * Specifies the overall end angle of the pie chart. Defaults to 2π. The
   * end angle can be specified either as a constant or as a function; in the
   * case of a function, it is evaluated once per array (as opposed to per
   * element).
   */
  pie.endAngle = function(x) {
    if (!arguments.length) return endAngle;
    endAngle = x;
    return pie;
  };

  return pie;
};

var d3_layout_pieSortByValue = {};
// data is two-dimensional array of x,y; we populate y0
d3.layout.stack = function() {
  var values = Object,
      order = d3_layout_stackOrders["default"],
      offset = d3_layout_stackOffsets["zero"],
      out = d3_layout_stackOut,
      x = d3_layout_stackX,
      y = d3_layout_stackY;

  function stack(data, index) {

    // Convert series to canonical two-dimensional representation.
    var series = data.map(function(d, i) {
      return values.call(stack, d, i);
    });

    // Convert each series to canonical [[x,y]] representation.
    var points = series.map(function(d, i) {
      return d.map(function(v, i) {
        return [x.call(stack, v, i), y.call(stack, v, i)];
      });
    });

    // Compute the order of series, and permute them.
    var orders = order.call(stack, points, index);
    series = d3.permute(series, orders);
    points = d3.permute(points, orders);

    // Compute the baseline…
    var offsets = offset.call(stack, points, index);

    // And propagate it to other series.
    var n = series.length,
        m = series[0].length,
        i,
        j,
        o;
    for (j = 0; j < m; ++j) {
      out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
      for (i = 1; i < n; ++i) {
        out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
      }
    }

    return data;
  }

  stack.values = function(x) {
    if (!arguments.length) return values;
    values = x;
    return stack;
  };

  stack.order = function(x) {
    if (!arguments.length) return order;
    order = typeof x === "function" ? x : d3_layout_stackOrders[x];
    return stack;
  };

  stack.offset = function(x) {
    if (!arguments.length) return offset;
    offset = typeof x === "function" ? x : d3_layout_stackOffsets[x];
    return stack;
  };

  stack.x = function(z) {
    if (!arguments.length) return x;
    x = z;
    return stack;
  };

  stack.y = function(z) {
    if (!arguments.length) return y;
    y = z;
    return stack;
  };

  stack.out = function(z) {
    if (!arguments.length) return out;
    out = z;
    return stack;
  };

  return stack;
}

function d3_layout_stackX(d) {
  return d.x;
}

function d3_layout_stackY(d) {
  return d.y;
}

function d3_layout_stackOut(d, y0, y) {
  d.y0 = y0;
  d.y = y;
}

var d3_layout_stackOrders = {

  "inside-out": function(data) {
    var n = data.length,
        i,
        j,
        max = data.map(d3_layout_stackMaxIndex),
        sums = data.map(d3_layout_stackReduceSum),
        index = d3.range(n).sort(function(a, b) { return max[a] - max[b]; }),
        top = 0,
        bottom = 0,
        tops = [],
        bottoms = [];
    for (i = 0; i < n; ++i) {
      j = index[i];
      if (top < bottom) {
        top += sums[j];
        tops.push(j);
      } else {
        bottom += sums[j];
        bottoms.push(j);
      }
    }
    return bottoms.reverse().concat(tops);
  },

  "reverse": function(data) {
    return d3.range(data.length).reverse();
  },

  "default": function(data) {
    return d3.range(data.length);
  }

};

var d3_layout_stackOffsets = {

  "silhouette": function(data) {
    var n = data.length,
        m = data[0].length,
        sums = [],
        max = 0,
        i,
        j,
        o,
        y0 = [];
    for (j = 0; j < m; ++j) {
      for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
      if (o > max) max = o;
      sums.push(o);
    }
    for (j = 0; j < m; ++j) {
      y0[j] = (max - sums[j]) / 2;
    }
    return y0;
  },

  "wiggle": function(data) {
    var n = data.length,
        x = data[0],
        m = x.length,
        max = 0,
        i,
        j,
        k,
        s1,
        s2,
        s3,
        dx,
        o,
        o0,
        y0 = [];
    y0[0] = o = o0 = 0;
    for (j = 1; j < m; ++j) {
      for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
      for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
        for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
          s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
        }
        s2 += s3 * data[i][j][1];
      }
      y0[j] = o -= s1 ? s2 / s1 * dx : 0;
      if (o < o0) o0 = o;
    }
    for (j = 0; j < m; ++j) y0[j] -= o0;
    return y0;
  },

  "expand": function(data) {
    var n = data.length,
        m = data[0].length,
        k = 1 / n,
        i,
        j,
        o,
        y0 = [];
    for (j = 0; j < m; ++j) {
      for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
      if (o) for (i = 0; i < n; i++) data[i][j][1] /= o;
      else for (i = 0; i < n; i++) data[i][j][1] = k;
    }
    for (j = 0; j < m; ++j) y0[j] = 0;
    return y0;
  },

  "zero": function(data) {
    var j = -1,
        m = data[0].length,
        y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }

};

function d3_layout_stackMaxIndex(array) {
  var i = 1,
      j = 0,
      v = array[0][1],
      k,
      n = array.length;
  for (; i < n; ++i) {
    if ((k = array[i][1]) > v) {
      j = i;
      v = k;
    }
  }
  return j;
}

function d3_layout_stackReduceSum(d) {
  return d.reduce(d3_layout_stackSum, 0);
}

function d3_layout_stackSum(p, d) {
  return p + d[1];
}
d3.layout.histogram = function() {
  var frequency = true,
      valuer = Number,
      ranger = d3_layout_histogramRange,
      binner = d3_layout_histogramBinSturges;

  function histogram(data, i) {
    var bins = [],
        values = data.map(valuer, this),
        range = ranger.call(this, values, i),
        thresholds = binner.call(this, range, values, i),
        bin,
        i = -1,
        n = values.length,
        m = thresholds.length - 1,
        k = frequency ? 1 : 1 / n,
        x;

    // Initialize the bins.
    while (++i < m) {
      bin = bins[i] = [];
      bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
      bin.y = 0;
    }

    // Fill the bins, ignoring values outside the range.
    i = -1; while(++i < n) {
      x = values[i];
      if ((x >= range[0]) && (x <= range[1])) {
        bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
        bin.y += k;
        bin.push(data[i]);
      }
    }

    return bins;
  }

  // Specifies how to extract a value from the associated data. The default
  // value function is `Number`, which is equivalent to the identity function.
  histogram.value = function(x) {
    if (!arguments.length) return valuer;
    valuer = x;
    return histogram;
  };

  // Specifies the range of the histogram. Values outside the specified range
  // will be ignored. The argument `x` may be specified either as a two-element
  // array representing the minimum and maximum value of the range, or as a
  // function that returns the range given the array of values and the current
  // index `i`. The default range is the extent (minimum and maximum) of the
  // values.
  histogram.range = function(x) {
    if (!arguments.length) return ranger;
    ranger = d3.functor(x);
    return histogram;
  };

  // Specifies how to bin values in the histogram. The argument `x` may be
  // specified as a number, in which case the range of values will be split
  // uniformly into the given number of bins. Or, `x` may be an array of
  // threshold values, defining the bins; the specified array must contain the
  // rightmost (upper) value, thus specifying n + 1 values for n bins. Or, `x`
  // may be a function which is evaluated, being passed the range, the array of
  // values, and the current index `i`, returning an array of thresholds. The
  // default bin function will divide the values into uniform bins using
  // Sturges' formula.
  histogram.bins = function(x) {
    if (!arguments.length) return binner;
    binner = typeof x === "number"
        ? function(range) { return d3_layout_histogramBinFixed(range, x); }
        : d3.functor(x);
    return histogram;
  };

  // Specifies whether the histogram's `y` value is a count (frequency) or a
  // probability (density). The default value is true.
  histogram.frequency = function(x) {
    if (!arguments.length) return frequency;
    frequency = !!x;
    return histogram;
  };

  return histogram;
};

function d3_layout_histogramBinSturges(range, values) {
  return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
}

function d3_layout_histogramBinFixed(range, n) {
  var x = -1,
      b = +range[0],
      m = (range[1] - b) / n,
      f = [];
  while (++x <= n) f[x] = m * x + b;
  return f;
}

function d3_layout_histogramRange(values) {
  return [d3.min(values), d3.max(values)];
}
d3.layout.hierarchy = function() {
  var sort = d3_layout_hierarchySort,
      children = d3_layout_hierarchyChildren,
      value = d3_layout_hierarchyValue;

  // Recursively compute the node depth and value.
  // Also converts the data representation into a standard hierarchy structure.
  function recurse(data, depth, nodes) {
    var childs = children.call(hierarchy, data, depth),
        node = d3_layout_hierarchyInline ? data : {data: data};
    node.depth = depth;
    nodes.push(node);
    if (childs && (n = childs.length)) {
      var i = -1,
          n,
          c = node.children = [],
          v = 0,
          j = depth + 1;
      while (++i < n) {
        d = recurse(childs[i], j, nodes);
        d.parent = node;
        c.push(d);
        v += d.value;
      }
      if (sort) c.sort(sort);
      if (value) node.value = v;
    } else if (value) {
      node.value = +value.call(hierarchy, data, depth) || 0;
    }
    return node;
  }

  // Recursively re-evaluates the node value.
  function revalue(node, depth) {
    var children = node.children,
        v = 0;
    if (children && (n = children.length)) {
      var i = -1,
          n,
          j = depth + 1;
      while (++i < n) v += revalue(children[i], j);
    } else if (value) {
      v = +value.call(hierarchy, d3_layout_hierarchyInline ? node : node.data, depth) || 0;
    }
    if (value) node.value = v;
    return v;
  }

  function hierarchy(d) {
    var nodes = [];
    recurse(d, 0, nodes);
    return nodes;
  }

  hierarchy.sort = function(x) {
    if (!arguments.length) return sort;
    sort = x;
    return hierarchy;
  };

  hierarchy.children = function(x) {
    if (!arguments.length) return children;
    children = x;
    return hierarchy;
  };

  hierarchy.value = function(x) {
    if (!arguments.length) return value;
    value = x;
    return hierarchy;
  };

  // Re-evaluates the `value` property for the specified hierarchy.
  hierarchy.revalue = function(root) {
    revalue(root, 0);
    return root;
  };

  return hierarchy;
};

// A method assignment helper for hierarchy subclasses.
function d3_layout_hierarchyRebind(object, hierarchy) {
  object.sort = d3.rebind(object, hierarchy.sort);
  object.children = d3.rebind(object, hierarchy.children);
  object.links = d3_layout_hierarchyLinks;
  object.value = d3.rebind(object, hierarchy.value);

  // If the new API is used, enabling inlining.
  object.nodes = function(d) {
    d3_layout_hierarchyInline = true;
    return (object.nodes = object)(d);
  };

  return object;
}

function d3_layout_hierarchyChildren(d) {
  return d.children;
}

function d3_layout_hierarchyValue(d) {
  return d.value;
}

function d3_layout_hierarchySort(a, b) {
  return b.value - a.value;
}

// Returns an array source+target objects for the specified nodes.
function d3_layout_hierarchyLinks(nodes) {
  return d3.merge(nodes.map(function(parent) {
    return (parent.children || []).map(function(child) {
      return {source: parent, target: child};
    });
  }));
}

// For backwards-compatibility, don't enable inlining by default.
var d3_layout_hierarchyInline = false;
d3.layout.pack = function() {
  var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),
      size = [1, 1];

  function pack(d, i) {
    var nodes = hierarchy.call(this, d, i),
        root = nodes[0];

    // Recursively compute the layout.
    root.x = 0;
    root.y = 0;
    d3_layout_packTree(root);

    // Scale the layout to fit the requested size.
    var w = size[0],
        h = size[1],
        k = 1 / Math.max(2 * root.r / w, 2 * root.r / h);
    d3_layout_packTransform(root, w / 2, h / 2, k);

    return nodes;
  }

  pack.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return pack;
  };

  return d3_layout_hierarchyRebind(pack, hierarchy);
};

function d3_layout_packSort(a, b) {
  return a.value - b.value;
}

function d3_layout_packInsert(a, b) {
  var c = a._pack_next;
  a._pack_next = b;
  b._pack_prev = a;
  b._pack_next = c;
  c._pack_prev = b;
}

function d3_layout_packSplice(a, b) {
  a._pack_next = b;
  b._pack_prev = a;
}

function d3_layout_packIntersects(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r + b.r;
  return (dr * dr - dx * dx - dy * dy) > .001; // within epsilon
}

function d3_layout_packCircle(nodes) {
  var xMin = Infinity,
      xMax = -Infinity,
      yMin = Infinity,
      yMax = -Infinity,
      n = nodes.length,
      a, b, c, j, k;

  function bound(node) {
    xMin = Math.min(node.x - node.r, xMin);
    xMax = Math.max(node.x + node.r, xMax);
    yMin = Math.min(node.y - node.r, yMin);
    yMax = Math.max(node.y + node.r, yMax);
  }

  // Create node links.
  nodes.forEach(d3_layout_packLink);

  // Create first node.
  a = nodes[0];
  a.x = -a.r;
  a.y = 0;
  bound(a);

  // Create second node.
  if (n > 1) {
    b = nodes[1];
    b.x = b.r;
    b.y = 0;
    bound(b);

    // Create third node and build chain.
    if (n > 2) {
      c = nodes[2];
      d3_layout_packPlace(a, b, c);
      bound(c);
      d3_layout_packInsert(a, c);
      a._pack_prev = c;
      d3_layout_packInsert(c, b);
      b = a._pack_next;

      // Now iterate through the rest.
      for (var i = 3; i < n; i++) {
        d3_layout_packPlace(a, b, c = nodes[i]);

        // Search for the closest intersection.
        var isect = 0, s1 = 1, s2 = 1;
        for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
          if (d3_layout_packIntersects(j, c)) {
            isect = 1;
            break;
          }
        }
        if (isect == 1) {
          for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
            if (d3_layout_packIntersects(k, c)) {
              if (s2 < s1) {
                isect = -1;
                j = k;
              }
              break;
            }
          }
        }

        // Update node chain.
        if (isect == 0) {
          d3_layout_packInsert(a, c);
          b = c;
          bound(c);
        } else if (isect > 0) {
          d3_layout_packSplice(a, j);
          b = j;
          i--;
        } else { // isect < 0
          d3_layout_packSplice(j, b);
          a = j;
          i--;
        }
      }
    }
  }

  // Re-center the circles and return the encompassing radius.
  var cx = (xMin + xMax) / 2,
      cy = (yMin + yMax) / 2,
      cr = 0;
  for (var i = 0; i < n; i++) {
    var node = nodes[i];
    node.x -= cx;
    node.y -= cy;
    cr = Math.max(cr, node.r + Math.sqrt(node.x * node.x + node.y * node.y));
  }

  // Remove node links.
  nodes.forEach(d3_layout_packUnlink);

  return cr;
}

function d3_layout_packLink(node) {
  node._pack_next = node._pack_prev = node;
}

function d3_layout_packUnlink(node) {
  delete node._pack_next;
  delete node._pack_prev;
}

function d3_layout_packTree(node) {
  var children = node.children;
  if (children && children.length) {
    children.forEach(d3_layout_packTree);
    node.r = d3_layout_packCircle(children);
  } else {
    node.r = Math.sqrt(node.value);
  }
}

function d3_layout_packTransform(node, x, y, k) {
  var children = node.children;
  node.x = (x += k * node.x);
  node.y = (y += k * node.y);
  node.r *= k;
  if (children) {
    var i = -1, n = children.length;
    while (++i < n) d3_layout_packTransform(children[i], x, y, k);
  }
}

function d3_layout_packPlace(a, b, c) {
  var db = a.r + c.r,
      dx = b.x - a.x,
      dy = b.y - a.y;
  if (db && (dx || dy)) {
    var da = b.r + c.r,
        dc = Math.sqrt(dx * dx + dy * dy),
        cos = Math.max(-1, Math.min(1, (db * db + dc * dc - da * da) / (2 * db * dc))),
        theta = Math.acos(cos),
        x = cos * (db /= dc),
        y = Math.sin(theta) * db;
    c.x = a.x + x * dx + y * dy;
    c.y = a.y + x * dy - y * dx;
  } else {
    c.x = a.x + db;
    c.y = a.y;
  }
}
// Implements a hierarchical layout using the cluster (or dendogram) algorithm.
d3.layout.cluster = function() {
  var hierarchy = d3.layout.hierarchy().sort(null).value(null),
      separation = d3_layout_treeSeparation,
      size = [1, 1]; // width, height

  function cluster(d, i) {
    var nodes = hierarchy.call(this, d, i),
        root = nodes[0],
        previousNode,
        x = 0,
        kx,
        ky;

    // First walk, computing the initial x & y values.
    d3_layout_treeVisitAfter(root, function(node) {
      var children = node.children;
      if (children && children.length) {
        node.x = d3_layout_clusterX(children);
        node.y = d3_layout_clusterY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    // Compute the left-most, right-most, and depth-most nodes for extents.
    var left = d3_layout_clusterLeft(root),
        right = d3_layout_clusterRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    d3_layout_treeVisitAfter(root, function(node) {
      node.x = (node.x - x0) / (x1 - x0) * size[0];
      node.y = (1 - node.y / root.y) * size[1];
    });

    return nodes;
  }

  cluster.separation = function(x) {
    if (!arguments.length) return separation;
    separation = x;
    return cluster;
  };

  cluster.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return cluster;
  };

  return d3_layout_hierarchyRebind(cluster, hierarchy);
};

function d3_layout_clusterY(children) {
  return 1 + d3.max(children, function(child) {
    return child.y;
  });
}

function d3_layout_clusterX(children) {
  return children.reduce(function(x, child) {
    return x + child.x;
  }, 0) / children.length;
}

function d3_layout_clusterLeft(node) {
  var children = node.children;
  return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
}

function d3_layout_clusterRight(node) {
  var children = node.children, n;
  return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
}
// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
d3.layout.tree = function() {
  var hierarchy = d3.layout.hierarchy().sort(null).value(null),
      separation = d3_layout_treeSeparation,
      size = [1, 1]; // width, height

  function tree(d, i) {
    var nodes = hierarchy.call(this, d, i),
        root = nodes[0];

    function firstWalk(node, previousSibling) {
      var children = node.children,
          layout = node._tree;
      if (children && (n = children.length)) {
        var n,
            firstChild = children[0],
            previousChild,
            ancestor = firstChild,
            child,
            i = -1;
        while (++i < n) {
          child = children[i];
          firstWalk(child, previousChild);
          ancestor = apportion(child, previousChild, ancestor);
          previousChild = child;
        }
        d3_layout_treeShift(node);
        var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);
        if (previousSibling) {
          layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
          layout.mod = layout.prelim - midpoint;
        } else {
          layout.prelim = midpoint;
        }
      } else {
        if (previousSibling) {
          layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
        }
      }
    }

    function secondWalk(node, x) {
      node.x = node._tree.prelim + x;
      var children = node.children;
      if (children && (n = children.length)) {
        var i = -1,
            n;
        x += node._tree.mod;
        while (++i < n) {
          secondWalk(children[i], x);
        }
      }
    }

    function apportion(node, previousSibling, ancestor) {
      if (previousSibling) {
        var vip = node,
            vop = node,
            vim = previousSibling,
            vom = node.parent.children[0],
            sip = vip._tree.mod,
            sop = vop._tree.mod,
            sim = vim._tree.mod,
            som = vom._tree.mod,
            shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop._tree.ancestor = node;
          shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim._tree.mod;
          sip += vip._tree.mod;
          som += vom._tree.mod;
          sop += vop._tree.mod;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop._tree.thread = vim;
          vop._tree.mod += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom._tree.thread = vip;
          vom._tree.mod += sip - som;
          ancestor = node;
        }
      }
      return ancestor;
    }

    // Initialize temporary layout variables.
    d3_layout_treeVisitAfter(root, function(node, previousSibling) {
      node._tree = {
        ancestor: node,
        prelim: 0,
        mod: 0,
        change: 0,
        shift: 0,
        number: previousSibling ? previousSibling._tree.number + 1 : 0
      };
    });

    // Compute the layout using Buchheim et al.'s algorithm.
    firstWalk(root);
    secondWalk(root, -root._tree.prelim);

    // Compute the left-most, right-most, and depth-most nodes for extents.
    var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost),
        right = d3_layout_treeSearch(root, d3_layout_treeRightmost),
        deep = d3_layout_treeSearch(root, d3_layout_treeDeepest),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2,
        y1 = deep.depth || 1;

    // Clear temporary layout variables; transform x and y.
    d3_layout_treeVisitAfter(root, function(node) {
      node.x = (node.x - x0) / (x1 - x0) * size[0];
      node.y = node.depth / y1 * size[1];
      delete node._tree;
    });

    return nodes;
  }

  tree.separation = function(x) {
    if (!arguments.length) return separation;
    separation = x;
    return tree;
  };

  tree.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return tree;
  };

  return d3_layout_hierarchyRebind(tree, hierarchy);
};

function d3_layout_treeSeparation(a, b) {
  return a.parent == b.parent ? 1 : 2;
}

// function d3_layout_treeSeparationRadial(a, b) {
//   return (a.parent == b.parent ? 1 : 2) / a.depth;
// }

function d3_layout_treeLeft(node) {
  var children = node.children;
  return children && children.length ? children[0] : node._tree.thread;
}

function d3_layout_treeRight(node) {
  var children = node.children,
      n;
  return children && (n = children.length) ? children[n - 1] : node._tree.thread;
}

function d3_layout_treeSearch(node, compare) {
  var children = node.children;
  if (children && (n = children.length)) {
    var child,
        n,
        i = -1;
    while (++i < n) {
      if (compare(child = d3_layout_treeSearch(children[i], compare), node) > 0) {
        node = child;
      }
    }
  }
  return node;
}

function d3_layout_treeRightmost(a, b) {
  return a.x - b.x;
}

function d3_layout_treeLeftmost(a, b) {
  return b.x - a.x;
}

function d3_layout_treeDeepest(a, b) {
  return a.depth - b.depth;
}

function d3_layout_treeVisitAfter(node, callback) {
  function visit(node, previousSibling) {
    var children = node.children;
    if (children && (n = children.length)) {
      var child,
          previousChild = null,
          i = -1,
          n;
      while (++i < n) {
        child = children[i];
        visit(child, previousChild);
        previousChild = child;
      }
    }
    callback(node, previousSibling);
  }
  visit(node, null);
}

function d3_layout_treeShift(node) {
  var shift = 0,
      change = 0,
      children = node.children,
      i = children.length,
      child;
  while (--i >= 0) {
    child = children[i]._tree;
    child.prelim += shift;
    child.mod += shift;
    shift += child.shift + (change += child.change);
  }
}

function d3_layout_treeMove(ancestor, node, shift) {
  ancestor = ancestor._tree;
  node = node._tree;
  var change = shift / (node.number - ancestor.number);
  ancestor.change += change;
  node.change -= change;
  node.shift += shift;
  node.prelim += shift;
  node.mod += shift;
}

function d3_layout_treeAncestor(vim, node, ancestor) {
  return vim._tree.ancestor.parent == node.parent
      ? vim._tree.ancestor
      : ancestor;
}
// Squarified Treemaps by Mark Bruls, Kees Huizing, and Jarke J. van Wijk
// Modified to support a target aspect ratio by Jeff Heer
d3.layout.treemap = function() {
  var hierarchy = d3.layout.hierarchy(),
      round = Math.round,
      size = [1, 1], // width, height
      padding = null,
      pad = d3_layout_treemapPadNull,
      sticky = false,
      stickies,
      ratio = 0.5 * (1 + Math.sqrt(5)); // golden ratio

  // Compute the area for each child based on value & scale.
  function scale(children, k) {
    var i = -1,
        n = children.length,
        child,
        area;
    while (++i < n) {
      area = (child = children[i]).value * (k < 0 ? 0 : k);
      child.area = isNaN(area) || area <= 0 ? 0 : area;
    }
  }

  // Recursively arranges the specified node's children into squarified rows.
  function squarify(node) {
    var children = node.children;
    if (children && children.length) {
      var rect = pad(node),
          row = [],
          remaining = children.slice(), // copy-on-write
          child,
          best = Infinity, // the best row score so far
          score, // the current row score
          u = Math.min(rect.dx, rect.dy), // initial orientation
          n;
      scale(remaining, rect.dx * rect.dy / node.value);
      row.area = 0;
      while ((n = remaining.length) > 0) {
        row.push(child = remaining[n - 1]);
        row.area += child.area;
        if ((score = worst(row, u)) <= best) { // continue with this orientation
          remaining.pop();
          best = score;
        } else { // abort, and try a different orientation
          row.area -= row.pop().area;
          position(row, u, rect, false);
          u = Math.min(rect.dx, rect.dy);
          row.length = row.area = 0;
          best = Infinity;
        }
      }
      if (row.length) {
        position(row, u, rect, true);
        row.length = row.area = 0;
      }
      children.forEach(squarify);
    }
  }

  // Recursively resizes the specified node's children into existing rows.
  // Preserves the existing layout!
  function stickify(node) {
    var children = node.children;
    if (children && children.length) {
      var rect = pad(node),
          remaining = children.slice(), // copy-on-write
          child,
          row = [];
      scale(remaining, rect.dx * rect.dy / node.value);
      row.area = 0;
      while (child = remaining.pop()) {
        row.push(child);
        row.area += child.area;
        if (child.z != null) {
          position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
          row.length = row.area = 0;
        }
      }
      children.forEach(stickify);
    }
  }

  // Computes the score for the specified row, as the worst aspect ratio.
  function worst(row, u) {
    var s = row.area,
        r,
        rmax = 0,
        rmin = Infinity,
        i = -1,
        n = row.length;
    while (++i < n) {
      if (!(r = row[i].area)) continue;
      if (r < rmin) rmin = r;
      if (r > rmax) rmax = r;
    }
    s *= s;
    u *= u;
    return s
        ? Math.max((u * rmax * ratio) / s, s / (u * rmin * ratio))
        : Infinity;
  }

  // Positions the specified row of nodes. Modifies `rect`.
  function position(row, u, rect, flush) {
    var i = -1,
        n = row.length,
        x = rect.x,
        y = rect.y,
        v = u ? round(row.area / u) : 0,
        o;
    if (u == rect.dx) { // horizontal subdivision
      if (flush || v > rect.dy) v = v ? rect.dy : 0; // over+underflow
      while (++i < n) {
        o = row[i];
        o.x = x;
        o.y = y;
        o.dy = v;
        x += o.dx = v ? round(o.area / v) : 0;
      }
      o.z = true;
      o.dx += rect.x + rect.dx - x; // rounding error
      rect.y += v;
      rect.dy -= v;
    } else { // vertical subdivision
      if (flush || v > rect.dx) v = v ? rect.dx : 0; // over+underflow
      while (++i < n) {
        o = row[i];
        o.x = x;
        o.y = y;
        o.dx = v;
        y += o.dy = v ? round(o.area / v) : 0;
      }
      o.z = false;
      o.dy += rect.y + rect.dy - y; // rounding error
      rect.x += v;
      rect.dx -= v;
    }
  }

  function treemap(d) {
    var nodes = stickies || hierarchy(d),
        root = nodes[0];
    root.x = 0;
    root.y = 0;
    root.dx = size[0];
    root.dy = size[1];
    if (stickies) hierarchy.revalue(root);
    scale([root], root.dx * root.dy / root.value);
    (stickies ? stickify : squarify)(root);
    if (sticky) stickies = nodes;
    return nodes;
  }

  treemap.size = function(x) {
    if (!arguments.length) return size;
    size = x;
    return treemap;
  };

  treemap.padding = function(x) {
    if (!arguments.length) return padding;

    function padFunction(node) {
      var p = x.call(treemap, node, node.depth);
      return p == null
          ? d3_layout_treemapPadNull(node)
          : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p);
    }

    function padConstant(node) {
      return d3_layout_treemapPad(node, x);
    }

    var type;
    pad = (padding = x) == null ? d3_layout_treemapPadNull
        : (type = typeof x) === "function" ? padFunction
        : type === "number" ? (x = [x, x, x, x], padConstant)
        : padConstant;
    return treemap;
  };

  treemap.round = function(x) {
    if (!arguments.length) return round != Number;
    round = x ? Math.round : Number;
    return treemap;
  };

  treemap.sticky = function(x) {
    if (!arguments.length) return sticky;
    sticky = x;
    stickies = null;
    return treemap;
  };

  treemap.ratio = function(x) {
    if (!arguments.length) return ratio;
    ratio = x;
    return treemap;
  };

  return d3_layout_hierarchyRebind(treemap, hierarchy);
};

function d3_layout_treemapPadNull(node) {
  return {x: node.x, y: node.y, dx: node.dx, dy: node.dy};
}

function d3_layout_treemapPad(node, padding) {
  var x = node.x + padding[3],
      y = node.y + padding[0],
      dx = node.dx - padding[1] - padding[3],
      dy = node.dy - padding[0] - padding[2];
  if (dx < 0) { x += dx / 2; dx = 0; }
  if (dy < 0) { y += dy / 2; dy = 0; }
  return {x: x, y: y, dx: dx, dy: dy};
}
})();
