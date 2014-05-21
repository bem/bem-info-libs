(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="default"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="attrs"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$7;__$ctx.__$a=2;__$r__$7=applyc(__$ctx,__$ref);return __$r__$7}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b34(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==5){__$ctx.__$a=0;return[function(){var __$r__$19;__$ctx.__$a=5;__$r__$19=applyc(__$ctx,__$ref);return __$r__$19}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="head"){if(__$ctx.__$a!==7){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$32;__$ctx.__$a=7;__$r__$32=applyc(__$ctx,__$ref);return __$r__$32}()]}}else if(__$t==="body"){if(__$ctx.__$a!==9){__$ctx.__$a=0;return[function(){var __$r__$34;__$ctx.__$a=9;__$r__$34=applyc(__$ctx,__$ref);return __$r__$34}(),__$ctx.ctx.scripts]}}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="mix"){if(__$ctx.block==="button"&&!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}__$ctx.__$a=0;return undefined}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==11){__$ctx.__$a=0;var __$r=__$b51(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b52(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b53(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b54(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b55(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply},function(){!function(global,bem_){if(bem_.I18N){return}global.BEM=bem_;var i18n=global.BEM.I18N=function(keyset,key){return key};i18n.keyset=function(){return i18n};i18n.key=function(key){return key};i18n.lang=function(){return}}(this,typeof BEM==="undefined"?{}:BEM)}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._button=undefined;ctx._mode=undefined;ctx.ctx=undefined;ctx._ieCommented=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;if(!__$ctx.ctx)return"";var ctx__$0=__$ctx.ctx,keyset__$1=ctx__$0.keyset,key__$2=ctx__$0.key,params__$3=ctx__$0.params||{};if(!(keyset__$1||key__$2))return"";if(ctx__$0.content!=null){params__$3.content=exports.apply(ctx__$0.content)}__$ctx._buf.push(BEM.I18N(keyset__$1,key__$2,params__$3));return}function __$b2(__$ctx,__$ref){__$ctx.__$a=0;var mods__$15=__$ctx.mods;var __$r__$16;var __$l0__$17=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$18;__$ctx.__$a=4;__$r__$18=applyc(__$ctx,__$ref);__$r__$16=__$r__$18;__$ctx._button=__$l0__$17;return}function __$b3(__$ctx,__$ref){__$ctx.__$a=0;var url__$20=__$ctx.ctx.url;var __$r__$21;var __$l0__$22=__$ctx._mode;__$ctx._mode="";var __$l1__$23=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$20+".ie"+v+".css",ie:"IE "+v}});var __$r__$24;__$ctx.__$a=6;__$r__$24=applyc(__$ctx,__$ref);__$r__$21=__$r__$24;__$ctx._mode=__$l0__$22;__$ctx.ctx=__$l1__$23;return}function __$b4(__$ctx,__$ref){__$ctx.__$a=0;var ie__$25=__$ctx.ctx.ie,hideRule__$26=!ie__$25?["gt IE 9","<!-->","<!--"]:ie__$25==="!IE"?[ie__$25,"<!-->","<!--"]:[ie__$25,"",""];var __$r__$27;var __$l0__$28=__$ctx._mode;__$ctx._mode="";var __$l3__$29=__$ctx.ctx;var __$l1__$30=__$l3__$29._ieCommented;__$l3__$29._ieCommented=true;var __$l2__$31=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$26[0]+"]>"+hideRule__$26[1],__$ctx.ctx,hideRule__$26[2]+"<![endif]-->"];__$r__$27=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$28;__$l3__$29._ieCommented=__$l1__$30;__$ctx.ctx=__$l2__$31;return}function __$b5(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$33;__$ctx.__$a=8;__$r__$33=applyc(__$ctx,__$ref);return}function __$b6(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$35=__$ctx.ctx;var __$r__$36;var __$l0__$37=__$ctx._mode;__$ctx._mode="";var __$l1__$38=__$ctx.ctx;__$ctx.ctx=[ctx__$35.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$35.title},{block:"ua"},ctx__$35.head,ctx__$35.styles,ctx__$35.favicon?{elem:"favicon",url:ctx__$35.favicon}:""]},__$ctx.extend(ctx__$35,{elem:"body"})]}];var __$r__$39;__$ctx.__$a=10;__$r__$39=applyc(__$ctx,__$ref);__$r__$36=__$r__$39;__$ctx._mode=__$l0__$37;__$ctx.ctx=__$l1__$38;return}function __$b7(__$ctx,__$ref){__$ctx.__$a=0;var _this__$40=__$ctx,BEM_INTERNAL__$41=_this__$40.BEM.INTERNAL,ctx__$42=__$ctx.ctx,isBEM__$43,tag__$44,res__$45;var __$r__$46;var __$l0__$47=__$ctx._str;__$ctx._str="";var vBlock__$48=__$ctx.block;var __$r__$49;var __$l1__$50=__$ctx._mode;__$ctx._mode="tag";__$r__$49=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$50;tag__$44=__$r__$49;typeof tag__$44!=="undefined"||(tag__$44=ctx__$42.tag);typeof tag__$44!=="undefined"||(tag__$44="div");if(tag__$44){var jsParams__$51,js__$52;if(vBlock__$48&&ctx__$42.js!==false){var __$r__$53;var __$l2__$54=__$ctx._mode;__$ctx._mode="js";__$r__$53=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$54;js__$52=__$r__$53;js__$52=js__$52?__$ctx.extend(ctx__$42.js,js__$52===true?{}:js__$52):ctx__$42.js===true?{}:ctx__$42.js;js__$52&&((jsParams__$51={})[BEM_INTERNAL__$41.buildClass(vBlock__$48,ctx__$42.elem)]=js__$52)}__$ctx._str+="<"+tag__$44;var __$r__$55;var __$l3__$56=__$ctx._mode;__$ctx._mode="bem";__$r__$55=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$56;isBEM__$43=__$r__$55;typeof isBEM__$43!=="undefined"||(isBEM__$43=typeof ctx__$42.bem!=="undefined"?ctx__$42.bem:ctx__$42.block||ctx__$42.elem);var __$r__$58;var __$l4__$59=__$ctx._mode;__$ctx._mode="cls";__$r__$58=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$59;var cls__$57=__$r__$58;cls__$57||(cls__$57=ctx__$42.cls);var addJSInitClass__$60=ctx__$42.block&&jsParams__$51;if(isBEM__$43||cls__$57){__$ctx._str+=' class="';if(isBEM__$43){__$ctx._str+=BEM_INTERNAL__$41.buildClasses(vBlock__$48,ctx__$42.elem,ctx__$42.elemMods||ctx__$42.mods);var __$r__$62;var __$l5__$63=__$ctx._mode;__$ctx._mode="mix";__$r__$62=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$63;var mix__$61=__$r__$62;ctx__$42.mix&&(mix__$61=mix__$61?mix__$61.concat(ctx__$42.mix):ctx__$42.mix);if(mix__$61){var visited__$64={},visitedKey__$65=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$64[visitedKey__$65(vBlock__$48,__$ctx.elem)]=true;__$ctx.isArray(mix__$61)||(mix__$61=[mix__$61]);for(var i__$66=0;i__$66<mix__$61.length;i__$66++){var mixItem__$67=mix__$61[i__$66],hasItem__$68=mixItem__$67.block||mixItem__$67.elem,mixBlock__$69=mixItem__$67.block||mixItem__$67._block||_this__$40.block,mixElem__$70=mixItem__$67.elem||mixItem__$67._elem||_this__$40.elem;hasItem__$68&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$41[hasItem__$68?"buildClasses":"buildModsClasses"](mixBlock__$69,mixItem__$67.elem||mixItem__$67._elem||(mixItem__$67.block?undefined:_this__$40.elem),mixItem__$67.elemMods||mixItem__$67.mods);if(mixItem__$67.js){(jsParams__$51||(jsParams__$51={}))[BEM_INTERNAL__$41.buildClass(mixBlock__$69,mixItem__$67.elem)]=mixItem__$67.js===true?{}:mixItem__$67.js;addJSInitClass__$60||(addJSInitClass__$60=mixBlock__$69&&!mixItem__$67.elem)}if(hasItem__$68&&!visited__$64[visitedKey__$65(mixBlock__$69,mixElem__$70)]){visited__$64[visitedKey__$65(mixBlock__$69,mixElem__$70)]=true;var __$r__$72;var __$l6__$73=__$ctx._mode;__$ctx._mode="mix";var __$l7__$74=__$ctx.block;__$ctx.block=mixBlock__$69;var __$l8__$75=__$ctx.elem;__$ctx.elem=mixElem__$70;__$r__$72=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$73;__$ctx.block=__$l7__$74;__$ctx.elem=__$l8__$75;var nestedMix__$71=__$r__$72;if(nestedMix__$71){for(var j__$76=0;j__$76<nestedMix__$71.length;j__$76++){var nestedItem__$77=nestedMix__$71[j__$76];if(!nestedItem__$77.block&&!nestedItem__$77.elem||!visited__$64[visitedKey__$65(nestedItem__$77.block,nestedItem__$77.elem)]){nestedItem__$77._block=mixBlock__$69;nestedItem__$77._elem=mixElem__$70;mix__$61.splice(i__$66+1,0,nestedItem__$77)}}}}}}}cls__$57&&(__$ctx._str+=isBEM__$43?" "+cls__$57:cls__$57);__$ctx._str+=addJSInitClass__$60?' i-bem"':'"'}if(isBEM__$43&&jsParams__$51){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$51))+'"'}var __$r__$79;var __$l9__$80=__$ctx._mode;__$ctx._mode="attrs";__$r__$79=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$80;var attrs__$78=__$r__$79;attrs__$78=__$ctx.extend(attrs__$78,ctx__$42.attrs);if(attrs__$78){var name__$81,attr__$82;for(name__$81 in attrs__$78){attr__$82=attrs__$78[name__$81];if(typeof attr__$82==="undefined")continue;__$ctx._str+=" "+name__$81+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$82)?attr__$82:__$ctx.reapply(attr__$82))+'"'}}}if(__$ctx.isShortTag(tag__$44)){__$ctx._str+="/>"}else{tag__$44&&(__$ctx._str+=">");var __$r__$84;var __$l10__$85=__$ctx._mode;__$ctx._mode="content";__$r__$84=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$85;var content__$83=__$r__$84;if(content__$83||content__$83===0){isBEM__$43=vBlock__$48||__$ctx.elem;var __$r__$86;var __$l11__$87=__$ctx._mode;__$ctx._mode="";var __$l12__$88=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$89=__$ctx.position;__$ctx.position=isBEM__$43?1:__$ctx.position;var __$l14__$90=__$ctx._listLength;__$ctx._listLength=isBEM__$43?1:__$ctx._listLength;var __$l15__$91=__$ctx.ctx;__$ctx.ctx=content__$83;__$r__$86=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$87;__$ctx._notNewList=__$l12__$88;__$ctx.position=__$l13__$89;__$ctx._listLength=__$l14__$90;__$ctx.ctx=__$l15__$91}tag__$44&&(__$ctx._str+="</"+tag__$44+">")}res__$45=__$ctx._str;__$r__$46=undefined;__$ctx._str=__$l0__$47;__$ctx._buf.push(res__$45);return}function __$b9(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$4=__$ctx.ctx,attrs__$5={href:ctx__$4.url};ctx__$4.target&&(attrs__$5.target=ctx__$4.target);__$ctx.mods.disabled&&(attrs__$5["aria-disabled"]=true);return __$ctx._.extend(function(){var __$r__$6;__$ctx.__$a=1;__$r__$6=applyc(__$ctx,__$ref);return __$r__$6}(),attrs__$5)}function __$b10(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$10=__$ctx.ctx,attrs__$11={};ctx__$10.tag||(attrs__$11.type=ctx__$10.type||"button");ctx__$10.name&&(attrs__$11.name=ctx__$10.name);ctx__$10.val&&(attrs__$11.value=ctx__$10.val);__$ctx.mods.disabled&&(attrs__$11.disabled="disabled");return __$ctx._.extend(function(){var __$r__$12;__$ctx.__$a=3;__$r__$12=applyc(__$ctx,__$ref);return __$r__$12}(),attrs__$11)}function __$b11(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$13=__$ctx.ctx,attrs__$14={role:"button"};ctx__$13.tabIndex&&(attrs__$14.tabindex=ctx__$13.tabIndex);return attrs__$14}function __$b34(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$8=__$ctx.ctx,content__$9=[__$ctx.ctx.icon];ctx__$8.text&&content__$9.push({elem:"text",content:ctx__$8.text});return content__$9}function __$b51(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$92;var __$l0__$93=__$ctx._mode;__$ctx._mode="";var __$l1__$94=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$95;__$ctx.__$a=11;__$r__$95=applyc(__$ctx,__$ref);__$r__$92=__$r__$95;__$ctx._mode=__$l0__$93;__$ctx.ctx=__$l1__$94;return}function __$b52(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$96=__$ctx.ctx;if(ctx__$96&&ctx__$96!==true||ctx__$96===0){__$ctx._str+=ctx__$96+""}return}function __$b53(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b54(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$97=__$ctx.ctx,len__$98=ctx__$97.length,i__$99=0,prevPos__$100=__$ctx.position,prevNotNewList__$101=__$ctx._notNewList;if(prevNotNewList__$101){__$ctx._listLength+=len__$98-1}else{__$ctx.position=0;__$ctx._listLength=len__$98}__$ctx._notNewList=true;while(i__$99<len__$98)!function(){var __$r__$102;var __$l0__$103=__$ctx.ctx;__$ctx.ctx=ctx__$97[i__$99++];__$r__$102=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$103;return __$r__$102}();prevNotNewList__$101||(__$ctx.position=prevPos__$100);return}function __$b55(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$104=__$ctx.ctx.block,vElem__$105=__$ctx.ctx.elem,block__$106=__$ctx._currBlock||__$ctx.block;var __$r__$107;var __$l0__$108=__$ctx._mode;__$ctx._mode="default";var __$l1__$109=__$ctx.block;__$ctx.block=vBlock__$104||(vElem__$105?block__$106:undefined);var __$l2__$110=__$ctx._currBlock;__$ctx._currBlock=vBlock__$104||vElem__$105?undefined:block__$106;var __$l3__$111=__$ctx.elem;__$ctx.elem=vElem__$105;var __$l4__$112=__$ctx.mods;__$ctx.mods=vBlock__$104?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$113=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$107=undefined;__$ctx._mode=__$l0__$108;__$ctx.block=__$l1__$109;__$ctx._currBlock=__$l2__$110;__$ctx.elem=__$l3__$111;__$ctx.mods=__$l4__$112;__$ctx.elemMods=__$l5__$113;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="i-bem"){if(__$ctx.elem==="i18n"){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b4(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}else if(__$t==="body"){if(__$ctx.__$a!==8){__$ctx.__$a=0;var __$r=__$b5(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}if(!__$ctx.elem&&__$ctx.__$a!==10){__$ctx.__$a=0;var __$r=__$b6(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b7(__$ctx,__$ref);if(__$r!==__$ref)return __$r;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="icon"){if(!__$ctx.elem&&__$ctx.ctx.url){__$ctx.__$a=0;return{style:"background-image:url("+__$ctx.ctx.url+")"}}}else if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["type"]==="link"&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b9(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.mods.type&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$b10(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b11(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="icon"){if(!__$ctx.elem){__$ctx.__$a=0;return"i"}}else if(__$t==="button"){if(!__$ctx.elem&&__$ctx.mods&&__$ctx.mods["type"]==="link"){__$ctx.__$a=0;return"a"}if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);