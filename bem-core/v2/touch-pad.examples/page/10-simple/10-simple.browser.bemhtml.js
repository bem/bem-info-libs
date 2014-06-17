(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="js"){if(__$ctx.block==="ua"&&!__$ctx.elem){__$ctx.__$a=0;return true}__$ctx.__$a=0;return undefined}else if(__$t==="attrs"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="page"){if(__$ctx.elem==="body"&&__$ctx.__$a!==3){__$ctx.__$a=0;return[function(){var __$r__$2;__$ctx.__$a=3;__$r__$2=applyc(__$ctx,__$ref);return __$r__$2}(),__$ctx.ctx.scripts]}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="mix"){if(__$ctx.block==="page"&&!__$ctx.elem&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=function(){var __$r__$0;__$ctx.__$a=1;__$r__$0=applyc(__$ctx,__$ref);return __$r__$0}().concat({block:"ua",js:true});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return undefined}else if(__$t==="head"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return[{block:"ua"},{elem:"meta",attrs:{name:"viewport",content:"width=device-width,"+(__$ctx.ctx.zoom?"initial-scale=1":"maximum-scale=1,initial-scale=1,user-scalable=0")}},{elem:"meta",attrs:{name:"format-detection",content:"telephone=no"}},{elem:"link",attrs:{name:"apple-mobile-web-app-capable",content:"yes"}},__$ctx.ctx.head]}}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="page"){if(__$ctx.elem==="body"&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b31(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b32(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b33(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b35(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b36(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b37(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b38(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b39(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._mode=undefined;ctx.ctx=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b31(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$1;__$ctx.__$a=2;__$r__$1=applyc(__$ctx,__$ref);return}function __$b32(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$3=__$ctx.ctx;var __$r__$4;var __$l0__$5=__$ctx._mode;__$ctx._mode="";var __$l1__$6=__$ctx.ctx;__$ctx.ctx=[ctx__$3.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$3.title},{block:"ua"},ctx__$3.head,ctx__$3.styles,ctx__$3.favicon?{elem:"favicon",url:ctx__$3.favicon}:""]},__$ctx.extend(ctx__$3,{elem:"body"})]}];var __$r__$7;__$ctx.__$a=4;__$r__$7=applyc(__$ctx,__$ref);__$r__$4=__$r__$7;__$ctx._mode=__$l0__$5;__$ctx.ctx=__$l1__$6;return}function __$b33(__$ctx,__$ref){__$ctx.__$a=0;var _this__$8=__$ctx,BEM_INTERNAL__$9=_this__$8.BEM.INTERNAL,ctx__$10=__$ctx.ctx,isBEM__$11,tag__$12,res__$13;var __$r__$14;var __$l0__$15=__$ctx._str;__$ctx._str="";var vBlock__$16=__$ctx.block;var __$r__$17;var __$l1__$18=__$ctx._mode;__$ctx._mode="tag";__$r__$17=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$18;tag__$12=__$r__$17;typeof tag__$12!=="undefined"||(tag__$12=ctx__$10.tag);typeof tag__$12!=="undefined"||(tag__$12="div");if(tag__$12){var jsParams__$19,js__$20;if(vBlock__$16&&ctx__$10.js!==false){var __$r__$21;var __$l2__$22=__$ctx._mode;__$ctx._mode="js";__$r__$21=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$22;js__$20=__$r__$21;js__$20=js__$20?__$ctx.extend(ctx__$10.js,js__$20===true?{}:js__$20):ctx__$10.js===true?{}:ctx__$10.js;js__$20&&((jsParams__$19={})[BEM_INTERNAL__$9.buildClass(vBlock__$16,ctx__$10.elem)]=js__$20)}__$ctx._str+="<"+tag__$12;var __$r__$23;var __$l3__$24=__$ctx._mode;__$ctx._mode="bem";__$r__$23=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$24;isBEM__$11=__$r__$23;typeof isBEM__$11!=="undefined"||(isBEM__$11=typeof ctx__$10.bem!=="undefined"?ctx__$10.bem:ctx__$10.block||ctx__$10.elem);var __$r__$26;var __$l4__$27=__$ctx._mode;__$ctx._mode="cls";__$r__$26=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$27;var cls__$25=__$r__$26;cls__$25||(cls__$25=ctx__$10.cls);var addJSInitClass__$28=ctx__$10.block&&jsParams__$19;if(isBEM__$11||cls__$25){__$ctx._str+=' class="';if(isBEM__$11){__$ctx._str+=BEM_INTERNAL__$9.buildClasses(vBlock__$16,ctx__$10.elem,ctx__$10.elemMods||ctx__$10.mods);var __$r__$30;var __$l5__$31=__$ctx._mode;__$ctx._mode="mix";__$r__$30=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$31;var mix__$29=__$r__$30;ctx__$10.mix&&(mix__$29=mix__$29?mix__$29.concat(ctx__$10.mix):ctx__$10.mix);if(mix__$29){var visited__$32={},visitedKey__$33=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$32[visitedKey__$33(vBlock__$16,__$ctx.elem)]=true;__$ctx.isArray(mix__$29)||(mix__$29=[mix__$29]);for(var i__$34=0;i__$34<mix__$29.length;i__$34++){var mixItem__$35=mix__$29[i__$34],hasItem__$36=mixItem__$35.block||mixItem__$35.elem,mixBlock__$37=mixItem__$35.block||mixItem__$35._block||_this__$8.block,mixElem__$38=mixItem__$35.elem||mixItem__$35._elem||_this__$8.elem;hasItem__$36&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$9[hasItem__$36?"buildClasses":"buildModsClasses"](mixBlock__$37,mixItem__$35.elem||mixItem__$35._elem||(mixItem__$35.block?undefined:_this__$8.elem),mixItem__$35.elemMods||mixItem__$35.mods);if(mixItem__$35.js){(jsParams__$19||(jsParams__$19={}))[BEM_INTERNAL__$9.buildClass(mixBlock__$37,mixItem__$35.elem)]=mixItem__$35.js===true?{}:mixItem__$35.js;addJSInitClass__$28||(addJSInitClass__$28=mixBlock__$37&&!mixItem__$35.elem)}if(hasItem__$36&&!visited__$32[visitedKey__$33(mixBlock__$37,mixElem__$38)]){visited__$32[visitedKey__$33(mixBlock__$37,mixElem__$38)]=true;var __$r__$40;var __$l6__$41=__$ctx._mode;__$ctx._mode="mix";var __$l7__$42=__$ctx.block;__$ctx.block=mixBlock__$37;var __$l8__$43=__$ctx.elem;__$ctx.elem=mixElem__$38;__$r__$40=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$41;__$ctx.block=__$l7__$42;__$ctx.elem=__$l8__$43;var nestedMix__$39=__$r__$40;if(nestedMix__$39){for(var j__$44=0;j__$44<nestedMix__$39.length;j__$44++){var nestedItem__$45=nestedMix__$39[j__$44];if(!nestedItem__$45.block&&!nestedItem__$45.elem||!visited__$32[visitedKey__$33(nestedItem__$45.block,nestedItem__$45.elem)]){nestedItem__$45._block=mixBlock__$37;nestedItem__$45._elem=mixElem__$38;mix__$29.splice(i__$34+1,0,nestedItem__$45)}}}}}}}cls__$25&&(__$ctx._str+=isBEM__$11?" "+cls__$25:cls__$25);__$ctx._str+=addJSInitClass__$28?' i-bem"':'"'}if(isBEM__$11&&jsParams__$19){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$19))+'"'}var __$r__$47;var __$l9__$48=__$ctx._mode;__$ctx._mode="attrs";__$r__$47=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$48;var attrs__$46=__$r__$47;attrs__$46=__$ctx.extend(attrs__$46,ctx__$10.attrs);if(attrs__$46){var name__$49,attr__$50;for(name__$49 in attrs__$46){attr__$50=attrs__$46[name__$49];if(typeof attr__$50==="undefined")continue;__$ctx._str+=" "+name__$49+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$50)?attr__$50:__$ctx.reapply(attr__$50))+'"'}}}if(__$ctx.isShortTag(tag__$12)){__$ctx._str+="/>"}else{tag__$12&&(__$ctx._str+=">");var __$r__$52;var __$l10__$53=__$ctx._mode;__$ctx._mode="content";__$r__$52=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$53;var content__$51=__$r__$52;if(content__$51||content__$51===0){isBEM__$11=vBlock__$16||__$ctx.elem;var __$r__$54;var __$l11__$55=__$ctx._mode;__$ctx._mode="";var __$l12__$56=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$57=__$ctx.position;__$ctx.position=isBEM__$11?1:__$ctx.position;var __$l14__$58=__$ctx._listLength;__$ctx._listLength=isBEM__$11?1:__$ctx._listLength;var __$l15__$59=__$ctx.ctx;__$ctx.ctx=content__$51;__$r__$54=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$55;__$ctx._notNewList=__$l12__$56;__$ctx.position=__$l13__$57;__$ctx._listLength=__$l14__$58;__$ctx.ctx=__$l15__$59}tag__$12&&(__$ctx._str+="</"+tag__$12+">")}res__$13=__$ctx._str;__$r__$14=undefined;__$ctx._str=__$l0__$15;__$ctx._buf.push(res__$13);return}function __$b35(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$60;var __$l0__$61=__$ctx._mode;__$ctx._mode="";var __$l1__$62=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$63;__$ctx.__$a=5;__$r__$63=applyc(__$ctx,__$ref);__$r__$60=__$r__$63;__$ctx._mode=__$l0__$61;__$ctx.ctx=__$l1__$62;return}function __$b36(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$64=__$ctx.ctx;if(ctx__$64&&ctx__$64!==true||ctx__$64===0){__$ctx._str+=ctx__$64+""}return}function __$b37(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b38(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$65=__$ctx.ctx,len__$66=ctx__$65.length,i__$67=0,prevPos__$68=__$ctx.position,prevNotNewList__$69=__$ctx._notNewList;if(prevNotNewList__$69){__$ctx._listLength+=len__$66-1}else{__$ctx.position=0;__$ctx._listLength=len__$66}__$ctx._notNewList=true;while(i__$67<len__$66)!function(){var __$r__$70;var __$l0__$71=__$ctx.ctx;__$ctx.ctx=ctx__$65[i__$67++];__$r__$70=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$71;return __$r__$70}();prevNotNewList__$69||(__$ctx.position=prevPos__$68);return}function __$b39(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$72=__$ctx.ctx.block,vElem__$73=__$ctx.ctx.elem,block__$74=__$ctx._currBlock||__$ctx.block;var __$r__$75;var __$l0__$76=__$ctx._mode;__$ctx._mode="default";var __$l1__$77=__$ctx.block;__$ctx.block=vBlock__$72||(vElem__$73?block__$74:undefined);var __$l2__$78=__$ctx._currBlock;__$ctx._currBlock=vBlock__$72||vElem__$73?undefined:block__$74;var __$l3__$79=__$ctx.elem;__$ctx.elem=vElem__$73;var __$l4__$80=__$ctx.mods;__$ctx.mods=vBlock__$72?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$81=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$75=undefined;__$ctx._mode=__$l0__$76;__$ctx.block=__$l1__$77;__$ctx._currBlock=__$l2__$78;__$ctx.elem=__$l3__$79;__$ctx.mods=__$l4__$80;__$ctx.elemMods=__$l5__$81;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}__$ctx.__$a=0;return undefined;return __$ref};
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