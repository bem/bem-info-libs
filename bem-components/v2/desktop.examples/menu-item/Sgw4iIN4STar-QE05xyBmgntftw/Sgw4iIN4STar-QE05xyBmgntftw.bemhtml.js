(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="attrs"){if(__$ctx.block==="menu-item"&&!__$ctx.elem){__$ctx.__$a=0;return{role:"menuitem"}}__$ctx.__$a=0;return undefined}else if(__$t==="js"){if(__$ctx.block==="menu-item"&&!__$ctx.elem){__$ctx.__$a=0;return{val:__$ctx.ctx.val}}__$ctx.__$a=0;return undefined}else if(__$t==="content"){if(__$ctx.block==="ua"&&!__$ctx.elem){__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="bem"){if(__$ctx.block==="ua"&&!__$ctx.elem){__$ctx.__$a=0;return false}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){if(__$ctx.block==="ua"&&!__$ctx.elem){__$ctx.__$a=0;return"script"}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t==="default"){__$ctx.__$a=0;var __$r=__$b13(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b14(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b15(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b16(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b17(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b18(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx._str=undefined;ctx._mode=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx.ctx=undefined;ctx.__$a=0;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b13(__$ctx,__$ref){__$ctx.__$a=0;var _this__$0=__$ctx,BEM_INTERNAL__$1=_this__$0.BEM.INTERNAL,ctx__$2=__$ctx.ctx,isBEM__$3,tag__$4,res__$5;var __$r__$6;var __$l0__$7=__$ctx._str;__$ctx._str="";var vBlock__$8=__$ctx.block;var __$r__$9;var __$l1__$10=__$ctx._mode;__$ctx._mode="tag";__$r__$9=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$10;tag__$4=__$r__$9;typeof tag__$4!=="undefined"||(tag__$4=ctx__$2.tag);typeof tag__$4!=="undefined"||(tag__$4="div");if(tag__$4){var jsParams__$11,js__$12;if(vBlock__$8&&ctx__$2.js!==false){var __$r__$13;var __$l2__$14=__$ctx._mode;__$ctx._mode="js";__$r__$13=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$14;js__$12=__$r__$13;js__$12=js__$12?__$ctx.extend(ctx__$2.js,js__$12===true?{}:js__$12):ctx__$2.js===true?{}:ctx__$2.js;js__$12&&((jsParams__$11={})[BEM_INTERNAL__$1.buildClass(vBlock__$8,ctx__$2.elem)]=js__$12)}__$ctx._str+="<"+tag__$4;var __$r__$15;var __$l3__$16=__$ctx._mode;__$ctx._mode="bem";__$r__$15=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$16;isBEM__$3=__$r__$15;typeof isBEM__$3!=="undefined"||(isBEM__$3=typeof ctx__$2.bem!=="undefined"?ctx__$2.bem:ctx__$2.block||ctx__$2.elem);var __$r__$18;var __$l4__$19=__$ctx._mode;__$ctx._mode="cls";__$r__$18=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$19;var cls__$17=__$r__$18;cls__$17||(cls__$17=ctx__$2.cls);var addJSInitClass__$20=ctx__$2.block&&jsParams__$11;if(isBEM__$3||cls__$17){__$ctx._str+=' class="';if(isBEM__$3){__$ctx._str+=BEM_INTERNAL__$1.buildClasses(vBlock__$8,ctx__$2.elem,ctx__$2.elemMods||ctx__$2.mods);var __$r__$22;var __$l5__$23=__$ctx._mode;__$ctx._mode="mix";__$r__$22=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$23;var mix__$21=__$r__$22;ctx__$2.mix&&(mix__$21=mix__$21?mix__$21.concat(ctx__$2.mix):ctx__$2.mix);if(mix__$21){var visited__$24={},visitedKey__$25=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$24[visitedKey__$25(vBlock__$8,__$ctx.elem)]=true;__$ctx.isArray(mix__$21)||(mix__$21=[mix__$21]);for(var i__$26=0;i__$26<mix__$21.length;i__$26++){var mixItem__$27=mix__$21[i__$26],hasItem__$28=mixItem__$27.block||mixItem__$27.elem,mixBlock__$29=mixItem__$27.block||mixItem__$27._block||_this__$0.block,mixElem__$30=mixItem__$27.elem||mixItem__$27._elem||_this__$0.elem;hasItem__$28&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$1[hasItem__$28?"buildClasses":"buildModsClasses"](mixBlock__$29,mixItem__$27.elem||mixItem__$27._elem||(mixItem__$27.block?undefined:_this__$0.elem),mixItem__$27.elemMods||mixItem__$27.mods);if(mixItem__$27.js){(jsParams__$11||(jsParams__$11={}))[BEM_INTERNAL__$1.buildClass(mixBlock__$29,mixItem__$27.elem)]=mixItem__$27.js===true?{}:mixItem__$27.js;addJSInitClass__$20||(addJSInitClass__$20=mixBlock__$29&&!mixItem__$27.elem)}if(hasItem__$28&&!visited__$24[visitedKey__$25(mixBlock__$29,mixElem__$30)]){visited__$24[visitedKey__$25(mixBlock__$29,mixElem__$30)]=true;var __$r__$32;var __$l6__$33=__$ctx._mode;__$ctx._mode="mix";var __$l7__$34=__$ctx.block;__$ctx.block=mixBlock__$29;var __$l8__$35=__$ctx.elem;__$ctx.elem=mixElem__$30;__$r__$32=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$33;__$ctx.block=__$l7__$34;__$ctx.elem=__$l8__$35;var nestedMix__$31=__$r__$32;if(nestedMix__$31){for(var j__$36=0;j__$36<nestedMix__$31.length;j__$36++){var nestedItem__$37=nestedMix__$31[j__$36];if(!nestedItem__$37.block&&!nestedItem__$37.elem||!visited__$24[visitedKey__$25(nestedItem__$37.block,nestedItem__$37.elem)]){nestedItem__$37._block=mixBlock__$29;nestedItem__$37._elem=mixElem__$30;mix__$21.splice(i__$26+1,0,nestedItem__$37)}}}}}}}cls__$17&&(__$ctx._str+=isBEM__$3?" "+cls__$17:cls__$17);__$ctx._str+=addJSInitClass__$20?' i-bem"':'"'}if(isBEM__$3&&jsParams__$11){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$11))+'"'}var __$r__$39;var __$l9__$40=__$ctx._mode;__$ctx._mode="attrs";__$r__$39=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$40;var attrs__$38=__$r__$39;attrs__$38=__$ctx.extend(attrs__$38,ctx__$2.attrs);if(attrs__$38){var name__$41,attr__$42;for(name__$41 in attrs__$38){attr__$42=attrs__$38[name__$41];if(typeof attr__$42==="undefined")continue;__$ctx._str+=" "+name__$41+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$42)?attr__$42:__$ctx.reapply(attr__$42))+'"'}}}if(__$ctx.isShortTag(tag__$4)){__$ctx._str+="/>"}else{tag__$4&&(__$ctx._str+=">");var __$r__$44;var __$l10__$45=__$ctx._mode;__$ctx._mode="content";__$r__$44=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$45;var content__$43=__$r__$44;if(content__$43||content__$43===0){isBEM__$3=vBlock__$8||__$ctx.elem;var __$r__$46;var __$l11__$47=__$ctx._mode;__$ctx._mode="";var __$l12__$48=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$49=__$ctx.position;__$ctx.position=isBEM__$3?1:__$ctx.position;var __$l14__$50=__$ctx._listLength;__$ctx._listLength=isBEM__$3?1:__$ctx._listLength;var __$l15__$51=__$ctx.ctx;__$ctx.ctx=content__$43;__$r__$46=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$47;__$ctx._notNewList=__$l12__$48;__$ctx.position=__$l13__$49;__$ctx._listLength=__$l14__$50;__$ctx.ctx=__$l15__$51}tag__$4&&(__$ctx._str+="</"+tag__$4+">")}res__$5=__$ctx._str;__$r__$6=undefined;__$ctx._str=__$l0__$7;__$ctx._buf.push(res__$5);return}function __$b14(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$52;var __$l0__$53=__$ctx._mode;__$ctx._mode="";var __$l1__$54=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$55;__$ctx.__$a=1;__$r__$55=applyc(__$ctx,__$ref);__$r__$52=__$r__$55;__$ctx._mode=__$l0__$53;__$ctx.ctx=__$l1__$54;return}function __$b15(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$56=__$ctx.ctx;if(ctx__$56&&ctx__$56!==true||ctx__$56===0){__$ctx._str+=ctx__$56+""}return}function __$b16(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b17(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$57=__$ctx.ctx,len__$58=ctx__$57.length,i__$59=0,prevPos__$60=__$ctx.position,prevNotNewList__$61=__$ctx._notNewList;if(prevNotNewList__$61){__$ctx._listLength+=len__$58-1}else{__$ctx.position=0;__$ctx._listLength=len__$58}__$ctx._notNewList=true;while(i__$59<len__$58)!function(){var __$r__$62;var __$l0__$63=__$ctx.ctx;__$ctx.ctx=ctx__$57[i__$59++];__$r__$62=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$63;return __$r__$62}();prevNotNewList__$61||(__$ctx.position=prevPos__$60);return}function __$b18(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$64=__$ctx.ctx.block,vElem__$65=__$ctx.ctx.elem,block__$66=__$ctx._currBlock||__$ctx.block;var __$r__$67;var __$l0__$68=__$ctx._mode;__$ctx._mode="default";var __$l1__$69=__$ctx.block;__$ctx.block=vBlock__$64||(vElem__$65?block__$66:undefined);var __$l2__$70=__$ctx._currBlock;__$ctx._currBlock=vBlock__$64||vElem__$65?undefined:block__$66;var __$l3__$71=__$ctx.elem;__$ctx.elem=vElem__$65;var __$l4__$72=__$ctx.mods;__$ctx.mods=vBlock__$64?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$73=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$67=undefined;__$ctx._mode=__$l0__$68;__$ctx.block=__$l1__$69;__$ctx._currBlock=__$l2__$70;__$ctx.elem=__$l3__$71;__$ctx.mods=__$l4__$72;__$ctx.elemMods=__$l5__$73;return};
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