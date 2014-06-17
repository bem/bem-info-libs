(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["focused"]===true&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$ctx.extend(function(){var __$r__$0;__$ctx.__$a=1;__$r__$0=applyc(__$ctx,__$ref);return __$r__$0}(),{live:false});if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b5(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="attrs"){var __$t=__$ctx.block;if(__$t==="button"){var __$t=!__$ctx.elem;if(__$t){if(!__$ctx.mods.type&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b7(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b8(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.elem==="text"&&typeof __$ctx._button.textMaxWidth==="number"){__$ctx.__$a=0;return{style:"max-width:"+__$ctx._button.textMaxWidth+"px"}}}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){if(__$ctx.block==="button"&&!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$t=__$ctx.block;if(__$t==="button"){if(!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.tag||"button"}if(__$ctx.elem==="text"){__$ctx.__$a=0;return"span"}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){if(__$ctx.block==="button"&&!__$ctx.elem&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$b16(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b17(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b20(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b21(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b22(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b23(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b24(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._button=undefined;ctx._str=undefined;ctx._mode=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx.ctx=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b5(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$1=__$ctx.ctx,content__$2=[__$ctx.ctx.icon];ctx__$1.text&&content__$2.push({elem:"text",content:ctx__$1.text});return content__$2}function __$b7(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$3=__$ctx.ctx,attrs__$4={};ctx__$3.tag||(attrs__$4.type=ctx__$3.type||"button");ctx__$3.name&&(attrs__$4.name=ctx__$3.name);ctx__$3.val&&(attrs__$4.value=ctx__$3.val);__$ctx.mods.disabled&&(attrs__$4.disabled="disabled");return __$ctx._.extend(function(){var __$r__$5;__$ctx.__$a=2;__$r__$5=applyc(__$ctx,__$ref);return __$r__$5}(),attrs__$4)}function __$b8(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$6=__$ctx.ctx,attrs__$7={role:"button"};ctx__$6.tabIndex&&(attrs__$7.tabindex=ctx__$6.tabIndex);return attrs__$7}function __$b16(__$ctx,__$ref){__$ctx.__$a=0;var mods__$8=__$ctx.mods;var __$r__$9;var __$l0__$10=__$ctx._button;__$ctx._button=__$ctx.ctx;var __$r__$11;__$ctx.__$a=3;__$r__$11=applyc(__$ctx,__$ref);__$r__$9=__$r__$11;__$ctx._button=__$l0__$10;return}function __$b17(__$ctx,__$ref){__$ctx.__$a=0;var _this__$12=__$ctx,BEM_INTERNAL__$13=_this__$12.BEM.INTERNAL,ctx__$14=__$ctx.ctx,isBEM__$15,tag__$16,res__$17;var __$r__$18;var __$l0__$19=__$ctx._str;__$ctx._str="";var vBlock__$20=__$ctx.block;var __$r__$21;var __$l1__$22=__$ctx._mode;__$ctx._mode="tag";__$r__$21=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$22;tag__$16=__$r__$21;typeof tag__$16!=="undefined"||(tag__$16=ctx__$14.tag);typeof tag__$16!=="undefined"||(tag__$16="div");if(tag__$16){var jsParams__$23,js__$24;if(vBlock__$20&&ctx__$14.js!==false){var __$r__$25;var __$l2__$26=__$ctx._mode;__$ctx._mode="js";__$r__$25=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$26;js__$24=__$r__$25;js__$24=js__$24?__$ctx.extend(ctx__$14.js,js__$24===true?{}:js__$24):ctx__$14.js===true?{}:ctx__$14.js;js__$24&&((jsParams__$23={})[BEM_INTERNAL__$13.buildClass(vBlock__$20,ctx__$14.elem)]=js__$24)}__$ctx._str+="<"+tag__$16;var __$r__$27;var __$l3__$28=__$ctx._mode;__$ctx._mode="bem";__$r__$27=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$28;isBEM__$15=__$r__$27;typeof isBEM__$15!=="undefined"||(isBEM__$15=typeof ctx__$14.bem!=="undefined"?ctx__$14.bem:ctx__$14.block||ctx__$14.elem);var __$r__$30;var __$l4__$31=__$ctx._mode;__$ctx._mode="cls";__$r__$30=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$31;var cls__$29=__$r__$30;cls__$29||(cls__$29=ctx__$14.cls);var addJSInitClass__$32=ctx__$14.block&&jsParams__$23;if(isBEM__$15||cls__$29){__$ctx._str+=' class="';if(isBEM__$15){__$ctx._str+=BEM_INTERNAL__$13.buildClasses(vBlock__$20,ctx__$14.elem,ctx__$14.elemMods||ctx__$14.mods);var __$r__$34;var __$l5__$35=__$ctx._mode;__$ctx._mode="mix";__$r__$34=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$35;var mix__$33=__$r__$34;ctx__$14.mix&&(mix__$33=mix__$33?mix__$33.concat(ctx__$14.mix):ctx__$14.mix);if(mix__$33){var visited__$36={},visitedKey__$37=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$36[visitedKey__$37(vBlock__$20,__$ctx.elem)]=true;__$ctx.isArray(mix__$33)||(mix__$33=[mix__$33]);for(var i__$38=0;i__$38<mix__$33.length;i__$38++){var mixItem__$39=mix__$33[i__$38],hasItem__$40=mixItem__$39.block||mixItem__$39.elem,mixBlock__$41=mixItem__$39.block||mixItem__$39._block||_this__$12.block,mixElem__$42=mixItem__$39.elem||mixItem__$39._elem||_this__$12.elem;hasItem__$40&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$13[hasItem__$40?"buildClasses":"buildModsClasses"](mixBlock__$41,mixItem__$39.elem||mixItem__$39._elem||(mixItem__$39.block?undefined:_this__$12.elem),mixItem__$39.elemMods||mixItem__$39.mods);if(mixItem__$39.js){(jsParams__$23||(jsParams__$23={}))[BEM_INTERNAL__$13.buildClass(mixBlock__$41,mixItem__$39.elem)]=mixItem__$39.js===true?{}:mixItem__$39.js;addJSInitClass__$32||(addJSInitClass__$32=mixBlock__$41&&!mixItem__$39.elem)}if(hasItem__$40&&!visited__$36[visitedKey__$37(mixBlock__$41,mixElem__$42)]){visited__$36[visitedKey__$37(mixBlock__$41,mixElem__$42)]=true;var __$r__$44;var __$l6__$45=__$ctx._mode;__$ctx._mode="mix";var __$l7__$46=__$ctx.block;__$ctx.block=mixBlock__$41;var __$l8__$47=__$ctx.elem;__$ctx.elem=mixElem__$42;__$r__$44=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$45;__$ctx.block=__$l7__$46;__$ctx.elem=__$l8__$47;var nestedMix__$43=__$r__$44;if(nestedMix__$43){for(var j__$48=0;j__$48<nestedMix__$43.length;j__$48++){var nestedItem__$49=nestedMix__$43[j__$48];if(!nestedItem__$49.block&&!nestedItem__$49.elem||!visited__$36[visitedKey__$37(nestedItem__$49.block,nestedItem__$49.elem)]){nestedItem__$49._block=mixBlock__$41;nestedItem__$49._elem=mixElem__$42;mix__$33.splice(i__$38+1,0,nestedItem__$49)}}}}}}}cls__$29&&(__$ctx._str+=isBEM__$15?" "+cls__$29:cls__$29);__$ctx._str+=addJSInitClass__$32?' i-bem"':'"'}if(isBEM__$15&&jsParams__$23){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$23))+'"'}var __$r__$51;var __$l9__$52=__$ctx._mode;__$ctx._mode="attrs";__$r__$51=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$52;var attrs__$50=__$r__$51;attrs__$50=__$ctx.extend(attrs__$50,ctx__$14.attrs);if(attrs__$50){var name__$53,attr__$54;for(name__$53 in attrs__$50){attr__$54=attrs__$50[name__$53];if(typeof attr__$54==="undefined")continue;__$ctx._str+=" "+name__$53+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$54)?attr__$54:__$ctx.reapply(attr__$54))+'"'}}}if(__$ctx.isShortTag(tag__$16)){__$ctx._str+="/>"}else{tag__$16&&(__$ctx._str+=">");var __$r__$56;var __$l10__$57=__$ctx._mode;__$ctx._mode="content";__$r__$56=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$57;var content__$55=__$r__$56;if(content__$55||content__$55===0){isBEM__$15=vBlock__$20||__$ctx.elem;var __$r__$58;var __$l11__$59=__$ctx._mode;__$ctx._mode="";var __$l12__$60=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$61=__$ctx.position;__$ctx.position=isBEM__$15?1:__$ctx.position;var __$l14__$62=__$ctx._listLength;__$ctx._listLength=isBEM__$15?1:__$ctx._listLength;var __$l15__$63=__$ctx.ctx;__$ctx.ctx=content__$55;__$r__$58=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$59;__$ctx._notNewList=__$l12__$60;__$ctx.position=__$l13__$61;__$ctx._listLength=__$l14__$62;__$ctx.ctx=__$l15__$63}tag__$16&&(__$ctx._str+="</"+tag__$16+">")}res__$17=__$ctx._str;__$r__$18=undefined;__$ctx._str=__$l0__$19;__$ctx._buf.push(res__$17);return}function __$b20(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$64;var __$l0__$65=__$ctx._mode;__$ctx._mode="";var __$l1__$66=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$67;__$ctx.__$a=4;__$r__$67=applyc(__$ctx,__$ref);__$r__$64=__$r__$67;__$ctx._mode=__$l0__$65;__$ctx.ctx=__$l1__$66;return}function __$b21(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$68=__$ctx.ctx;if(ctx__$68&&ctx__$68!==true||ctx__$68===0){__$ctx._str+=ctx__$68+""}return}function __$b22(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b23(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$69=__$ctx.ctx,len__$70=ctx__$69.length,i__$71=0,prevPos__$72=__$ctx.position,prevNotNewList__$73=__$ctx._notNewList;if(prevNotNewList__$73){__$ctx._listLength+=len__$70-1}else{__$ctx.position=0;__$ctx._listLength=len__$70}__$ctx._notNewList=true;while(i__$71<len__$70)!function(){var __$r__$74;var __$l0__$75=__$ctx.ctx;__$ctx.ctx=ctx__$69[i__$71++];__$r__$74=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$75;return __$r__$74}();prevNotNewList__$73||(__$ctx.position=prevPos__$72);return}function __$b24(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$76=__$ctx.ctx.block,vElem__$77=__$ctx.ctx.elem,block__$78=__$ctx._currBlock||__$ctx.block;var __$r__$79;var __$l0__$80=__$ctx._mode;__$ctx._mode="default";var __$l1__$81=__$ctx.block;__$ctx.block=vBlock__$76||(vElem__$77?block__$78:undefined);var __$l2__$82=__$ctx._currBlock;__$ctx._currBlock=vBlock__$76||vElem__$77?undefined:block__$78;var __$l3__$83=__$ctx.elem;__$ctx.elem=vElem__$77;var __$l4__$84=__$ctx.mods;__$ctx.mods=vBlock__$76?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$85=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$79=undefined;__$ctx._mode=__$l0__$80;__$ctx.block=__$l1__$81;__$ctx._currBlock=__$l2__$82;__$ctx.elem=__$l3__$83;__$ctx.mods=__$l4__$84;__$ctx.elemMods=__$l5__$85;return};
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