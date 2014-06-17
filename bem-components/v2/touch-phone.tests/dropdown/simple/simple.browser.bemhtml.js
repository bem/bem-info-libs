(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$0;__$ctx.__$a=1;__$r__$0=applyc(__$ctx,__$ref);return __$r__$0}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}else if(__$t==="dropdown"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="popup"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="attrs"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="content"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="button"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}else if(__$t==="page"){if(!__$ctx.elem&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=function(){var __$r__$27;__$ctx.__$a=5;__$r__$27=applyc(__$ctx,__$ref);return __$r__$27}().concat({block:"ua",js:true});if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="button"){if(!__$ctx.elem&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$b44(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){if(__$ctx.elem==="body"&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b45(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx.__$a!==8){__$ctx.__$a=0;var __$r=__$b46(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b47(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="head"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return[{block:"ua"},{elem:"meta",attrs:{name:"viewport",content:"width=device-width,"+(__$ctx.ctx.zoom?"initial-scale=1":"maximum-scale=1,initial-scale=1,user-scalable=0")}},{elem:"meta",attrs:{name:"format-detection",content:"telephone=no"}},{elem:"link",attrs:{name:"apple-mobile-web-app-capable",content:"yes"}},__$ctx.ctx.head]}}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==9){__$ctx.__$a=0;var __$r=__$b58(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b59(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b60(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b61(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b62(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._button=undefined;ctx._mode=undefined;ctx.ctx=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b9(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$3=__$ctx.ctx,attrs__$4={};ctx__$3.tag||(attrs__$4.type=ctx__$3.type||"button");ctx__$3.name&&(attrs__$4.name=ctx__$3.name);ctx__$3.val&&(attrs__$4.value=ctx__$3.val);__$ctx.mods.disabled&&(attrs__$4.disabled="disabled");return __$ctx._.extend(function(){var __$r__$5;__$ctx.__$a=2;__$r__$5=applyc(__$ctx,__$ref);return __$r__$5}(),attrs__$4)}function __$b10(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$6=__$ctx.ctx,attrs__$7={role:"button"};ctx__$6.tabIndex&&(attrs__$7.tabindex=ctx__$6.tabIndex);return attrs__$7}function __$b11(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$16=__$ctx.ctx,attrs__$17={tabindex:ctx__$16.tabIndex},url__$18=ctx__$16.url,typeOfUrl__$19=typeof url__$18;typeOfUrl__$19!=="undefined"&&(attrs__$17.href=typeOfUrl__$19==="string"?url__$18:__$ctx.reapply(url__$18));typeof attrs__$17.href==="undefined"&&typeof attrs__$17.tabindex==="undefined"&&(attrs__$17.tabindex=0);ctx__$16.title&&(attrs__$17.title=ctx__$16.title);ctx__$16.target&&(attrs__$17.target=ctx__$16.target);return attrs__$17}function __$b32(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$1=__$ctx.ctx,content__$2=[__$ctx.ctx.icon];ctx__$1.text&&content__$2.push({elem:"text",content:ctx__$1.text});return content__$2}function __$b33(__$ctx,__$ref){__$ctx.__$a=0;var content__$12=__$ctx.ctx.content;if(__$ctx.isArray(content__$12))return content__$12;var res__$13=__$ctx.isSimple(content__$12)?{block:"button",text:content__$12}:content__$12;if(res__$13.block==="button"){var resMods__$14=res__$13.mods||(res__$13.mods={}),dropdownMods__$15=__$ctx.mods;resMods__$14.size||(resMods__$14.size=dropdownMods__$15.size);resMods__$14.theme||(resMods__$14.theme=dropdownMods__$15.theme);resMods__$14.disabled=dropdownMods__$15.disabled}return res__$13}function __$b34(__$ctx,__$ref){__$ctx.__$a=0;var content__$20=__$ctx.ctx.content;if(__$ctx.isArray(content__$20))return content__$20;var res__$21=__$ctx.isSimple(content__$20)?{block:"link",mods:{pseudo:true},content:content__$20}:content__$20;if(res__$21.block==="link"){var resMods__$22=res__$21.mods||(res__$21.mods={}),dropdownMods__$23=__$ctx.mods;resMods__$22.theme||(resMods__$22.theme=dropdownMods__$23.theme);resMods__$22.disabled=dropdownMods__$23.disabled}return res__$21}function __$b35(__$ctx,__$ref){__$ctx.__$a=0;var popup__$24=__$ctx.ctx.popup;if(__$ctx.isSimple(popup__$24)||popup__$24.block!=="popup"){popup__$24={block:"popup",content:popup__$24}}var popupMods__$25=popup__$24.mods||(popup__$24.mods={});popupMods__$25.theme||(popupMods__$25.theme=__$ctx.mods.theme);popupMods__$25.hasOwnProperty("autoclosable")||(popupMods__$25.autoclosable=true);return[{elem:"switcher",content:__$ctx.ctx.switcher},popup__$24]}function __$b44(__$ctx,__$ref){__$ctx.__$a=0;var mods__$8=__$ctx.mods;var __$r__$9;var __$l0__$10=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$11;__$ctx.__$a=3;__$r__$11=applyc(__$ctx,__$ref);__$r__$9=__$r__$11;__$ctx._button=__$l0__$10;return}function __$b45(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$28;__$ctx.__$a=6;__$r__$28=applyc(__$ctx,__$ref);return}function __$b46(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$30=__$ctx.ctx;var __$r__$31;var __$l0__$32=__$ctx._mode;__$ctx._mode="";var __$l1__$33=__$ctx.ctx;__$ctx.ctx=[ctx__$30.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$30.title},{block:"ua"},ctx__$30.head,ctx__$30.styles,ctx__$30.favicon?{elem:"favicon",url:ctx__$30.favicon}:""]},__$ctx.extend(ctx__$30,{elem:"body"})]}];var __$r__$34;__$ctx.__$a=8;__$r__$34=applyc(__$ctx,__$ref);__$r__$31=__$r__$34;__$ctx._mode=__$l0__$32;__$ctx.ctx=__$l1__$33;return}function __$b47(__$ctx,__$ref){__$ctx.__$a=0;var _this__$35=__$ctx,BEM_INTERNAL__$36=_this__$35.BEM.INTERNAL,ctx__$37=__$ctx.ctx,isBEM__$38,tag__$39,res__$40;var __$r__$41;var __$l0__$42=__$ctx._str;__$ctx._str="";var vBlock__$43=__$ctx.block;var __$r__$44;var __$l1__$45=__$ctx._mode;__$ctx._mode="tag";__$r__$44=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$45;tag__$39=__$r__$44;typeof tag__$39!=="undefined"||(tag__$39=ctx__$37.tag);typeof tag__$39!=="undefined"||(tag__$39="div");if(tag__$39){var jsParams__$46,js__$47;if(vBlock__$43&&ctx__$37.js!==false){var __$r__$48;var __$l2__$49=__$ctx._mode;__$ctx._mode="js";__$r__$48=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$49;js__$47=__$r__$48;js__$47=js__$47?__$ctx.extend(ctx__$37.js,js__$47===true?{}:js__$47):ctx__$37.js===true?{}:ctx__$37.js;js__$47&&((jsParams__$46={})[BEM_INTERNAL__$36.buildClass(vBlock__$43,ctx__$37.elem)]=js__$47)}__$ctx._str+="<"+tag__$39;var __$r__$50;var __$l3__$51=__$ctx._mode;__$ctx._mode="bem";__$r__$50=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$51;isBEM__$38=__$r__$50;typeof isBEM__$38!=="undefined"||(isBEM__$38=typeof ctx__$37.bem!=="undefined"?ctx__$37.bem:ctx__$37.block||ctx__$37.elem);var __$r__$53;var __$l4__$54=__$ctx._mode;__$ctx._mode="cls";__$r__$53=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$54;var cls__$52=__$r__$53;cls__$52||(cls__$52=ctx__$37.cls);var addJSInitClass__$55=ctx__$37.block&&jsParams__$46;if(isBEM__$38||cls__$52){__$ctx._str+=' class="';if(isBEM__$38){__$ctx._str+=BEM_INTERNAL__$36.buildClasses(vBlock__$43,ctx__$37.elem,ctx__$37.elemMods||ctx__$37.mods);var __$r__$57;var __$l5__$58=__$ctx._mode;__$ctx._mode="mix";__$r__$57=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$58;var mix__$56=__$r__$57;ctx__$37.mix&&(mix__$56=mix__$56?mix__$56.concat(ctx__$37.mix):ctx__$37.mix);if(mix__$56){var visited__$59={},visitedKey__$60=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$59[visitedKey__$60(vBlock__$43,__$ctx.elem)]=true;__$ctx.isArray(mix__$56)||(mix__$56=[mix__$56]);for(var i__$61=0;i__$61<mix__$56.length;i__$61++){var mixItem__$62=mix__$56[i__$61],hasItem__$63=mixItem__$62.block||mixItem__$62.elem,mixBlock__$64=mixItem__$62.block||mixItem__$62._block||_this__$35.block,mixElem__$65=mixItem__$62.elem||mixItem__$62._elem||_this__$35.elem;hasItem__$63&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$36[hasItem__$63?"buildClasses":"buildModsClasses"](mixBlock__$64,mixItem__$62.elem||mixItem__$62._elem||(mixItem__$62.block?undefined:_this__$35.elem),mixItem__$62.elemMods||mixItem__$62.mods);if(mixItem__$62.js){(jsParams__$46||(jsParams__$46={}))[BEM_INTERNAL__$36.buildClass(mixBlock__$64,mixItem__$62.elem)]=mixItem__$62.js===true?{}:mixItem__$62.js;addJSInitClass__$55||(addJSInitClass__$55=mixBlock__$64&&!mixItem__$62.elem)}if(hasItem__$63&&!visited__$59[visitedKey__$60(mixBlock__$64,mixElem__$65)]){visited__$59[visitedKey__$60(mixBlock__$64,mixElem__$65)]=true;var __$r__$67;var __$l6__$68=__$ctx._mode;__$ctx._mode="mix";var __$l7__$69=__$ctx.block;__$ctx.block=mixBlock__$64;var __$l8__$70=__$ctx.elem;__$ctx.elem=mixElem__$65;__$r__$67=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$68;__$ctx.block=__$l7__$69;__$ctx.elem=__$l8__$70;var nestedMix__$66=__$r__$67;if(nestedMix__$66){for(var j__$71=0;j__$71<nestedMix__$66.length;j__$71++){var nestedItem__$72=nestedMix__$66[j__$71];if(!nestedItem__$72.block&&!nestedItem__$72.elem||!visited__$59[visitedKey__$60(nestedItem__$72.block,nestedItem__$72.elem)]){nestedItem__$72._block=mixBlock__$64;nestedItem__$72._elem=mixElem__$65;mix__$56.splice(i__$61+1,0,nestedItem__$72)}}}}}}}cls__$52&&(__$ctx._str+=isBEM__$38?" "+cls__$52:cls__$52);__$ctx._str+=addJSInitClass__$55?' i-bem"':'"'}if(isBEM__$38&&jsParams__$46){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$46))+'"'}var __$r__$74;var __$l9__$75=__$ctx._mode;__$ctx._mode="attrs";__$r__$74=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$75;var attrs__$73=__$r__$74;attrs__$73=__$ctx.extend(attrs__$73,ctx__$37.attrs);if(attrs__$73){var name__$76,attr__$77;for(name__$76 in attrs__$73){attr__$77=attrs__$73[name__$76];if(typeof attr__$77==="undefined")continue;__$ctx._str+=" "+name__$76+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$77)?attr__$77:__$ctx.reapply(attr__$77))+'"'}}}if(__$ctx.isShortTag(tag__$39)){__$ctx._str+="/>"}else{tag__$39&&(__$ctx._str+=">");var __$r__$79;var __$l10__$80=__$ctx._mode;__$ctx._mode="content";__$r__$79=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$80;var content__$78=__$r__$79;if(content__$78||content__$78===0){isBEM__$38=vBlock__$43||__$ctx.elem;var __$r__$81;var __$l11__$82=__$ctx._mode;__$ctx._mode="";var __$l12__$83=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$84=__$ctx.position;__$ctx.position=isBEM__$38?1:__$ctx.position;var __$l14__$85=__$ctx._listLength;__$ctx._listLength=isBEM__$38?1:__$ctx._listLength;var __$l15__$86=__$ctx.ctx;__$ctx.ctx=content__$78;__$r__$81=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$82;__$ctx._notNewList=__$l12__$83;__$ctx.position=__$l13__$84;__$ctx._listLength=__$l14__$85;__$ctx.ctx=__$l15__$86}tag__$39&&(__$ctx._str+="</"+tag__$39+">")}res__$40=__$ctx._str;__$r__$41=undefined;__$ctx._str=__$l0__$42;__$ctx._buf.push(res__$40);return}function __$b58(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$87;var __$l0__$88=__$ctx._mode;__$ctx._mode="";var __$l1__$89=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$90;__$ctx.__$a=9;__$r__$90=applyc(__$ctx,__$ref);__$r__$87=__$r__$90;__$ctx._mode=__$l0__$88;__$ctx.ctx=__$l1__$89;return}function __$b59(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$91=__$ctx.ctx;if(ctx__$91&&ctx__$91!==true||ctx__$91===0){__$ctx._str+=ctx__$91+""}return}function __$b60(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b61(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$92=__$ctx.ctx,len__$93=ctx__$92.length,i__$94=0,prevPos__$95=__$ctx.position,prevNotNewList__$96=__$ctx._notNewList;if(prevNotNewList__$96){__$ctx._listLength+=len__$93-1}else{__$ctx.position=0;__$ctx._listLength=len__$93}__$ctx._notNewList=true;while(i__$94<len__$93)!function(){var __$r__$97;var __$l0__$98=__$ctx.ctx;__$ctx.ctx=ctx__$92[i__$94++];__$r__$97=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$98;return __$r__$97}();prevNotNewList__$96||(__$ctx.position=prevPos__$95);return}function __$b62(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$99=__$ctx.ctx.block,vElem__$100=__$ctx.ctx.elem,block__$101=__$ctx._currBlock||__$ctx.block;var __$r__$102;var __$l0__$103=__$ctx._mode;__$ctx._mode="default";var __$l1__$104=__$ctx.block;__$ctx.block=vBlock__$99||(vElem__$100?block__$101:undefined);var __$l2__$105=__$ctx._currBlock;__$ctx._currBlock=vBlock__$99||vElem__$100?undefined:block__$101;var __$l3__$106=__$ctx.elem;__$ctx.elem=vElem__$100;var __$l4__$107=__$ctx.mods;__$ctx.mods=vBlock__$99?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$108=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$102=undefined;__$ctx._mode=__$l0__$103;__$ctx.block=__$l1__$104;__$ctx._currBlock=__$l2__$105;__$ctx.elem=__$l3__$106;__$ctx.mods=__$l4__$107;__$ctx.elemMods=__$l5__$108;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="button"){if(__$ctx.elem==="text"&&typeof __$ctx._button.textMaxWidth==="number"){__$ctx.__$a=0;return{style:"max-width:"+__$ctx._button.textMaxWidth+"px"}}var __$t=!__$ctx.elem;if(__$t){if(!__$ctx.mods.type&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b9(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b10(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b11(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="button"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}}else if(__$t==="dropdown"){if(__$ctx.elem==="switcher"){__$ctx.__$a=0;return""}}else if(__$t==="link"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["pseudo"]===true&&!__$ctx.ctx.url){__$ctx.__$a=0;return"span"}__$ctx.__$a=0;return"a"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b32(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="dropdown"){var __$t=__$ctx.elem;if(__$t==="switcher"){var __$t=__$ctx.mods;if(__$t){var __$t=__$ctx.mods["switcher"];if(__$t==="button"){__$ctx.__$a=0;var __$r=__$b33(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="link"){__$ctx.__$a=0;var __$r=__$b34(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b35(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==4){__$ctx.__$a=0;return[function(){var __$r__$26;__$ctx.__$a=4;__$r__$26=applyc(__$ctx,__$ref);return __$r__$26}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){if(__$ctx.elem==="body"&&__$ctx.__$a!==7){__$ctx.__$a=0;return[function(){var __$r__$29;__$ctx.__$a=7;__$r__$29=applyc(__$ctx,__$ref);return __$r__$29}(),__$ctx.ctx.scripts]}}__$ctx.__$a=0;return __$ctx.ctx.content;return __$ref};
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