(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="radio"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="js"){if(__$ctx.block==="radio"&&!__$ctx.elem){__$ctx.__$a=0;return true}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$t=__$ctx.block;if(__$t==="radio"){if(!__$ctx.elem){__$ctx.__$a=0;return"label"}var __$t=__$ctx.elem;if(__$t==="control"){__$ctx.__$a=0;return"input"}else if(__$t==="box"){__$ctx.__$a=0;return"span"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}__$ctx.__$a=0;return undefined}else if(__$t==="attrs"){if(__$ctx.block==="radio"&&__$ctx.elem==="control"){__$ctx.__$a=0;var __$r=__$b11(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return undefined}else if(__$t==="bem"){if(__$ctx.block==="ua"&&!__$ctx.elem){__$ctx.__$a=0;return false}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t==="default"){__$ctx.__$a=0;var __$r=__$b17(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b18(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b19(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b21(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b22(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx._str=undefined;ctx._mode=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx.ctx=undefined;ctx.__$a=0;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$0=__$ctx.ctx;return[{elem:"box",content:{elem:"control",checked:__$ctx.mods.checked,disabled:__$ctx.mods.disabled,name:ctx__$0.name,val:ctx__$0.val}},ctx__$0.text]}function __$b11(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$1=__$ctx.ctx,attrs__$2={type:"radio",autocomplete:"off",name:ctx__$1.name,value:ctx__$1.val};ctx__$1.checked&&(attrs__$2.checked="checked");ctx__$1.disabled&&(attrs__$2.disabled="disabled");return attrs__$2}function __$b17(__$ctx,__$ref){__$ctx.__$a=0;var _this__$3=__$ctx,BEM_INTERNAL__$4=_this__$3.BEM.INTERNAL,ctx__$5=__$ctx.ctx,isBEM__$6,tag__$7,res__$8;var __$r__$9;var __$l0__$10=__$ctx._str;__$ctx._str="";var vBlock__$11=__$ctx.block;var __$r__$12;var __$l1__$13=__$ctx._mode;__$ctx._mode="tag";__$r__$12=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$13;tag__$7=__$r__$12;typeof tag__$7!=="undefined"||(tag__$7=ctx__$5.tag);typeof tag__$7!=="undefined"||(tag__$7="div");if(tag__$7){var jsParams__$14,js__$15;if(vBlock__$11&&ctx__$5.js!==false){var __$r__$16;var __$l2__$17=__$ctx._mode;__$ctx._mode="js";__$r__$16=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$17;js__$15=__$r__$16;js__$15=js__$15?__$ctx.extend(ctx__$5.js,js__$15===true?{}:js__$15):ctx__$5.js===true?{}:ctx__$5.js;js__$15&&((jsParams__$14={})[BEM_INTERNAL__$4.buildClass(vBlock__$11,ctx__$5.elem)]=js__$15)}__$ctx._str+="<"+tag__$7;var __$r__$18;var __$l3__$19=__$ctx._mode;__$ctx._mode="bem";__$r__$18=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$19;isBEM__$6=__$r__$18;typeof isBEM__$6!=="undefined"||(isBEM__$6=typeof ctx__$5.bem!=="undefined"?ctx__$5.bem:ctx__$5.block||ctx__$5.elem);var __$r__$21;var __$l4__$22=__$ctx._mode;__$ctx._mode="cls";__$r__$21=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$22;var cls__$20=__$r__$21;cls__$20||(cls__$20=ctx__$5.cls);var addJSInitClass__$23=ctx__$5.block&&jsParams__$14;if(isBEM__$6||cls__$20){__$ctx._str+=' class="';if(isBEM__$6){__$ctx._str+=BEM_INTERNAL__$4.buildClasses(vBlock__$11,ctx__$5.elem,ctx__$5.elemMods||ctx__$5.mods);var __$r__$25;var __$l5__$26=__$ctx._mode;__$ctx._mode="mix";__$r__$25=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$26;var mix__$24=__$r__$25;ctx__$5.mix&&(mix__$24=mix__$24?mix__$24.concat(ctx__$5.mix):ctx__$5.mix);if(mix__$24){var visited__$27={},visitedKey__$28=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$27[visitedKey__$28(vBlock__$11,__$ctx.elem)]=true;__$ctx.isArray(mix__$24)||(mix__$24=[mix__$24]);for(var i__$29=0;i__$29<mix__$24.length;i__$29++){var mixItem__$30=mix__$24[i__$29],hasItem__$31=mixItem__$30.block||mixItem__$30.elem,mixBlock__$32=mixItem__$30.block||mixItem__$30._block||_this__$3.block,mixElem__$33=mixItem__$30.elem||mixItem__$30._elem||_this__$3.elem;hasItem__$31&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$4[hasItem__$31?"buildClasses":"buildModsClasses"](mixBlock__$32,mixItem__$30.elem||mixItem__$30._elem||(mixItem__$30.block?undefined:_this__$3.elem),mixItem__$30.elemMods||mixItem__$30.mods);if(mixItem__$30.js){(jsParams__$14||(jsParams__$14={}))[BEM_INTERNAL__$4.buildClass(mixBlock__$32,mixItem__$30.elem)]=mixItem__$30.js===true?{}:mixItem__$30.js;addJSInitClass__$23||(addJSInitClass__$23=mixBlock__$32&&!mixItem__$30.elem)}if(hasItem__$31&&!visited__$27[visitedKey__$28(mixBlock__$32,mixElem__$33)]){visited__$27[visitedKey__$28(mixBlock__$32,mixElem__$33)]=true;var __$r__$35;var __$l6__$36=__$ctx._mode;__$ctx._mode="mix";var __$l7__$37=__$ctx.block;__$ctx.block=mixBlock__$32;var __$l8__$38=__$ctx.elem;__$ctx.elem=mixElem__$33;__$r__$35=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$36;__$ctx.block=__$l7__$37;__$ctx.elem=__$l8__$38;var nestedMix__$34=__$r__$35;if(nestedMix__$34){for(var j__$39=0;j__$39<nestedMix__$34.length;j__$39++){var nestedItem__$40=nestedMix__$34[j__$39];if(!nestedItem__$40.block&&!nestedItem__$40.elem||!visited__$27[visitedKey__$28(nestedItem__$40.block,nestedItem__$40.elem)]){nestedItem__$40._block=mixBlock__$32;nestedItem__$40._elem=mixElem__$33;mix__$24.splice(i__$29+1,0,nestedItem__$40)}}}}}}}cls__$20&&(__$ctx._str+=isBEM__$6?" "+cls__$20:cls__$20);__$ctx._str+=addJSInitClass__$23?' i-bem"':'"'}if(isBEM__$6&&jsParams__$14){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$14))+'"'}var __$r__$42;var __$l9__$43=__$ctx._mode;__$ctx._mode="attrs";__$r__$42=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$43;var attrs__$41=__$r__$42;attrs__$41=__$ctx.extend(attrs__$41,ctx__$5.attrs);if(attrs__$41){var name__$44,attr__$45;for(name__$44 in attrs__$41){attr__$45=attrs__$41[name__$44];if(typeof attr__$45==="undefined")continue;__$ctx._str+=" "+name__$44+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$45)?attr__$45:__$ctx.reapply(attr__$45))+'"'}}}if(__$ctx.isShortTag(tag__$7)){__$ctx._str+="/>"}else{tag__$7&&(__$ctx._str+=">");var __$r__$47;var __$l10__$48=__$ctx._mode;__$ctx._mode="content";__$r__$47=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$48;var content__$46=__$r__$47;if(content__$46||content__$46===0){isBEM__$6=vBlock__$11||__$ctx.elem;var __$r__$49;var __$l11__$50=__$ctx._mode;__$ctx._mode="";var __$l12__$51=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$52=__$ctx.position;__$ctx.position=isBEM__$6?1:__$ctx.position;var __$l14__$53=__$ctx._listLength;__$ctx._listLength=isBEM__$6?1:__$ctx._listLength;var __$l15__$54=__$ctx.ctx;__$ctx.ctx=content__$46;__$r__$49=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$50;__$ctx._notNewList=__$l12__$51;__$ctx.position=__$l13__$52;__$ctx._listLength=__$l14__$53;__$ctx.ctx=__$l15__$54}tag__$7&&(__$ctx._str+="</"+tag__$7+">")}res__$8=__$ctx._str;__$r__$9=undefined;__$ctx._str=__$l0__$10;__$ctx._buf.push(res__$8);return}function __$b18(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$55;var __$l0__$56=__$ctx._mode;__$ctx._mode="";var __$l1__$57=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$58;__$ctx.__$a=1;__$r__$58=applyc(__$ctx,__$ref);__$r__$55=__$r__$58;__$ctx._mode=__$l0__$56;__$ctx.ctx=__$l1__$57;return}function __$b19(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$59=__$ctx.ctx;if(ctx__$59&&ctx__$59!==true||ctx__$59===0){__$ctx._str+=ctx__$59+""}return}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b21(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$60=__$ctx.ctx,len__$61=ctx__$60.length,i__$62=0,prevPos__$63=__$ctx.position,prevNotNewList__$64=__$ctx._notNewList;if(prevNotNewList__$64){__$ctx._listLength+=len__$61-1}else{__$ctx.position=0;__$ctx._listLength=len__$61}__$ctx._notNewList=true;while(i__$62<len__$61)!function(){var __$r__$65;var __$l0__$66=__$ctx.ctx;__$ctx.ctx=ctx__$60[i__$62++];__$r__$65=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$66;return __$r__$65}();prevNotNewList__$64||(__$ctx.position=prevPos__$63);return}function __$b22(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$67=__$ctx.ctx.block,vElem__$68=__$ctx.ctx.elem,block__$69=__$ctx._currBlock||__$ctx.block;var __$r__$70;var __$l0__$71=__$ctx._mode;__$ctx._mode="default";var __$l1__$72=__$ctx.block;__$ctx.block=vBlock__$67||(vElem__$68?block__$69:undefined);var __$l2__$73=__$ctx._currBlock;__$ctx._currBlock=vBlock__$67||vElem__$68?undefined:block__$69;var __$l3__$74=__$ctx.elem;__$ctx.elem=vElem__$68;var __$l4__$75=__$ctx.mods;__$ctx.mods=vBlock__$67?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$76=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$70=undefined;__$ctx._mode=__$l0__$71;__$ctx.block=__$l1__$72;__$ctx._currBlock=__$l2__$73;__$ctx.elem=__$l3__$74;__$ctx.mods=__$l4__$75;__$ctx.elemMods=__$l5__$76;return};
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