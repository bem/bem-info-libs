(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="checkbox-group"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="checkbox"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"box",content:{elem:"control",checked:__$ctx.mods.checked,disabled:__$ctx.mods.disabled,name:__$ctx.ctx.name,val:__$ctx.ctx.val}},__$ctx.ctx.text]}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="checkbox-group"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="checkbox"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$t=__$ctx.block;if(__$t==="checkbox-group"){if(!__$ctx.elem){__$ctx.__$a=0;return"span"}}else if(__$t==="checkbox"){var __$t=__$ctx.elem;if(__$t==="control"){__$ctx.__$a=0;return"input"}else if(__$t==="box"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return"label"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}__$ctx.__$a=0;return undefined}else if(__$t==="attrs"){if(__$ctx.block==="checkbox"&&__$ctx.elem==="control"){__$ctx.__$a=0;var __$r=__$b14(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return undefined}else if(__$t==="bem"){if(__$ctx.block==="ua"&&!__$ctx.elem){__$ctx.__$a=0;return false}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t==="default"){__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b21(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b22(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b23(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b24(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b25(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx._str=undefined;ctx._mode=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx.ctx=undefined;ctx.__$a=0;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var mods__$0=__$ctx.mods,ctx__$1=__$ctx.ctx;return(ctx__$1.options||[]).map(function(option,i){return[!!i&&!mods__$0.type&&{tag:"br"},{block:"checkbox",mods:{type:mods__$0.type,theme:mods__$0.theme,size:mods__$0.size,checked:option.checked,disabled:option.disabled||mods__$0.disabled},name:ctx__$1.name,val:option.val,text:option.text,icon:option.icon}]})}function __$b14(__$ctx,__$ref){__$ctx.__$a=0;var attrs__$2={type:"checkbox",autocomplete:"off"},ctx__$3=__$ctx.ctx;attrs__$2.name=ctx__$3.name;attrs__$2.value=ctx__$3.val;ctx__$3.checked&&(attrs__$2.checked="checked");ctx__$3.disabled&&(attrs__$2.disabled="disabled");return attrs__$2}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var _this__$4=__$ctx,BEM_INTERNAL__$5=_this__$4.BEM.INTERNAL,ctx__$6=__$ctx.ctx,isBEM__$7,tag__$8,res__$9;var __$r__$10;var __$l0__$11=__$ctx._str;__$ctx._str="";var vBlock__$12=__$ctx.block;var __$r__$13;var __$l1__$14=__$ctx._mode;__$ctx._mode="tag";__$r__$13=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$14;tag__$8=__$r__$13;typeof tag__$8!=="undefined"||(tag__$8=ctx__$6.tag);typeof tag__$8!=="undefined"||(tag__$8="div");if(tag__$8){var jsParams__$15,js__$16;if(vBlock__$12&&ctx__$6.js!==false){var __$r__$17;var __$l2__$18=__$ctx._mode;__$ctx._mode="js";__$r__$17=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$18;js__$16=__$r__$17;js__$16=js__$16?__$ctx.extend(ctx__$6.js,js__$16===true?{}:js__$16):ctx__$6.js===true?{}:ctx__$6.js;js__$16&&((jsParams__$15={})[BEM_INTERNAL__$5.buildClass(vBlock__$12,ctx__$6.elem)]=js__$16)}__$ctx._str+="<"+tag__$8;var __$r__$19;var __$l3__$20=__$ctx._mode;__$ctx._mode="bem";__$r__$19=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$20;isBEM__$7=__$r__$19;typeof isBEM__$7!=="undefined"||(isBEM__$7=typeof ctx__$6.bem!=="undefined"?ctx__$6.bem:ctx__$6.block||ctx__$6.elem);var __$r__$22;var __$l4__$23=__$ctx._mode;__$ctx._mode="cls";__$r__$22=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$23;var cls__$21=__$r__$22;cls__$21||(cls__$21=ctx__$6.cls);var addJSInitClass__$24=ctx__$6.block&&jsParams__$15;if(isBEM__$7||cls__$21){__$ctx._str+=' class="';if(isBEM__$7){__$ctx._str+=BEM_INTERNAL__$5.buildClasses(vBlock__$12,ctx__$6.elem,ctx__$6.elemMods||ctx__$6.mods);var __$r__$26;var __$l5__$27=__$ctx._mode;__$ctx._mode="mix";__$r__$26=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$27;var mix__$25=__$r__$26;ctx__$6.mix&&(mix__$25=mix__$25?mix__$25.concat(ctx__$6.mix):ctx__$6.mix);if(mix__$25){var visited__$28={},visitedKey__$29=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$28[visitedKey__$29(vBlock__$12,__$ctx.elem)]=true;__$ctx.isArray(mix__$25)||(mix__$25=[mix__$25]);for(var i__$30=0;i__$30<mix__$25.length;i__$30++){var mixItem__$31=mix__$25[i__$30],hasItem__$32=mixItem__$31.block||mixItem__$31.elem,mixBlock__$33=mixItem__$31.block||mixItem__$31._block||_this__$4.block,mixElem__$34=mixItem__$31.elem||mixItem__$31._elem||_this__$4.elem;hasItem__$32&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$5[hasItem__$32?"buildClasses":"buildModsClasses"](mixBlock__$33,mixItem__$31.elem||mixItem__$31._elem||(mixItem__$31.block?undefined:_this__$4.elem),mixItem__$31.elemMods||mixItem__$31.mods);if(mixItem__$31.js){(jsParams__$15||(jsParams__$15={}))[BEM_INTERNAL__$5.buildClass(mixBlock__$33,mixItem__$31.elem)]=mixItem__$31.js===true?{}:mixItem__$31.js;addJSInitClass__$24||(addJSInitClass__$24=mixBlock__$33&&!mixItem__$31.elem)}if(hasItem__$32&&!visited__$28[visitedKey__$29(mixBlock__$33,mixElem__$34)]){visited__$28[visitedKey__$29(mixBlock__$33,mixElem__$34)]=true;var __$r__$36;var __$l6__$37=__$ctx._mode;__$ctx._mode="mix";var __$l7__$38=__$ctx.block;__$ctx.block=mixBlock__$33;var __$l8__$39=__$ctx.elem;__$ctx.elem=mixElem__$34;__$r__$36=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$37;__$ctx.block=__$l7__$38;__$ctx.elem=__$l8__$39;var nestedMix__$35=__$r__$36;if(nestedMix__$35){for(var j__$40=0;j__$40<nestedMix__$35.length;j__$40++){var nestedItem__$41=nestedMix__$35[j__$40];if(!nestedItem__$41.block&&!nestedItem__$41.elem||!visited__$28[visitedKey__$29(nestedItem__$41.block,nestedItem__$41.elem)]){nestedItem__$41._block=mixBlock__$33;nestedItem__$41._elem=mixElem__$34;mix__$25.splice(i__$30+1,0,nestedItem__$41)}}}}}}}cls__$21&&(__$ctx._str+=isBEM__$7?" "+cls__$21:cls__$21);__$ctx._str+=addJSInitClass__$24?' i-bem"':'"'}if(isBEM__$7&&jsParams__$15){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$15))+'"'}var __$r__$43;var __$l9__$44=__$ctx._mode;__$ctx._mode="attrs";__$r__$43=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$44;var attrs__$42=__$r__$43;attrs__$42=__$ctx.extend(attrs__$42,ctx__$6.attrs);if(attrs__$42){var name__$45,attr__$46;for(name__$45 in attrs__$42){attr__$46=attrs__$42[name__$45];if(typeof attr__$46==="undefined")continue;__$ctx._str+=" "+name__$45+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$46)?attr__$46:__$ctx.reapply(attr__$46))+'"'}}}if(__$ctx.isShortTag(tag__$8)){__$ctx._str+="/>"}else{tag__$8&&(__$ctx._str+=">");var __$r__$48;var __$l10__$49=__$ctx._mode;__$ctx._mode="content";__$r__$48=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$49;var content__$47=__$r__$48;if(content__$47||content__$47===0){isBEM__$7=vBlock__$12||__$ctx.elem;var __$r__$50;var __$l11__$51=__$ctx._mode;__$ctx._mode="";var __$l12__$52=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$53=__$ctx.position;__$ctx.position=isBEM__$7?1:__$ctx.position;var __$l14__$54=__$ctx._listLength;__$ctx._listLength=isBEM__$7?1:__$ctx._listLength;var __$l15__$55=__$ctx.ctx;__$ctx.ctx=content__$47;__$r__$50=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$51;__$ctx._notNewList=__$l12__$52;__$ctx.position=__$l13__$53;__$ctx._listLength=__$l14__$54;__$ctx.ctx=__$l15__$55}tag__$8&&(__$ctx._str+="</"+tag__$8+">")}res__$9=__$ctx._str;__$r__$10=undefined;__$ctx._str=__$l0__$11;__$ctx._buf.push(res__$9);return}function __$b21(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$56;var __$l0__$57=__$ctx._mode;__$ctx._mode="";var __$l1__$58=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$59;__$ctx.__$a=1;__$r__$59=applyc(__$ctx,__$ref);__$r__$56=__$r__$59;__$ctx._mode=__$l0__$57;__$ctx.ctx=__$l1__$58;return}function __$b22(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$60=__$ctx.ctx;if(ctx__$60&&ctx__$60!==true||ctx__$60===0){__$ctx._str+=ctx__$60+""}return}function __$b23(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b24(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$61=__$ctx.ctx,len__$62=ctx__$61.length,i__$63=0,prevPos__$64=__$ctx.position,prevNotNewList__$65=__$ctx._notNewList;if(prevNotNewList__$65){__$ctx._listLength+=len__$62-1}else{__$ctx.position=0;__$ctx._listLength=len__$62}__$ctx._notNewList=true;while(i__$63<len__$62)!function(){var __$r__$66;var __$l0__$67=__$ctx.ctx;__$ctx.ctx=ctx__$61[i__$63++];__$r__$66=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$67;return __$r__$66}();prevNotNewList__$65||(__$ctx.position=prevPos__$64);return}function __$b25(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$68=__$ctx.ctx.block,vElem__$69=__$ctx.ctx.elem,block__$70=__$ctx._currBlock||__$ctx.block;var __$r__$71;var __$l0__$72=__$ctx._mode;__$ctx._mode="default";var __$l1__$73=__$ctx.block;__$ctx.block=vBlock__$68||(vElem__$69?block__$70:undefined);var __$l2__$74=__$ctx._currBlock;__$ctx._currBlock=vBlock__$68||vElem__$69?undefined:block__$70;var __$l3__$75=__$ctx.elem;__$ctx.elem=vElem__$69;var __$l4__$76=__$ctx.mods;__$ctx.mods=vBlock__$68?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$77=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$71=undefined;__$ctx._mode=__$l0__$72;__$ctx.block=__$l1__$73;__$ctx._currBlock=__$l2__$74;__$ctx.elem=__$l3__$75;__$ctx.mods=__$l4__$76;__$ctx.elemMods=__$l5__$77;return};
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