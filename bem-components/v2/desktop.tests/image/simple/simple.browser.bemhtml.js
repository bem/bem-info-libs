(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="attrs"){var __$t=__$ctx.block;if(__$t==="image"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==1){__$ctx.__$a=0;return[function(){var __$r__$1;__$ctx.__$a=1;__$r__$1=applyc(__$ctx,__$ref);return __$r__$1}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="head"){if(__$ctx.__$a!==3){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$14;__$ctx.__$a=3;__$r__$14=applyc(__$ctx,__$ref);return __$r__$14}()]}}else if(__$t==="body"){if(__$ctx.__$a!==5){__$ctx.__$a=0;return[function(){var __$r__$16;__$ctx.__$a=5;__$r__$16=applyc(__$ctx,__$ref);return __$r__$16}(),__$ctx.ctx.scripts]}}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="js"){__$ctx.__$a=0;return undefined}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b31(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b32(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}else if(__$t==="body"){if(__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b33(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}if(!__$ctx.elem&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b34(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b35(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="mix"){__$ctx.__$a=0;return undefined}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==7){__$ctx.__$a=0;var __$r=__$b38(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b39(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b40(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b41(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b42(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.__$a=0;ctx._mode=undefined;ctx.ctx=undefined;ctx._ieCommented=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$0=__$ctx.ctx;return{src:ctx__$0.url,width:ctx__$0.width,height:ctx__$0.height,alt:ctx__$0.alt,title:ctx__$0.title}}function __$b31(__$ctx,__$ref){__$ctx.__$a=0;var url__$2=__$ctx.ctx.url;var __$r__$3;var __$l0__$4=__$ctx._mode;__$ctx._mode="";var __$l1__$5=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$2+".ie"+v+".css",ie:"IE "+v}});var __$r__$6;__$ctx.__$a=2;__$r__$6=applyc(__$ctx,__$ref);__$r__$3=__$r__$6;__$ctx._mode=__$l0__$4;__$ctx.ctx=__$l1__$5;return}function __$b32(__$ctx,__$ref){__$ctx.__$a=0;var ie__$7=__$ctx.ctx.ie,hideRule__$8=!ie__$7?["gt IE 9","<!-->","<!--"]:ie__$7==="!IE"?[ie__$7,"<!-->","<!--"]:[ie__$7,"",""];var __$r__$9;var __$l0__$10=__$ctx._mode;__$ctx._mode="";var __$l3__$11=__$ctx.ctx;var __$l1__$12=__$l3__$11._ieCommented;__$l3__$11._ieCommented=true;var __$l2__$13=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$8[0]+"]>"+hideRule__$8[1],__$ctx.ctx,hideRule__$8[2]+"<![endif]-->"];__$r__$9=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$10;__$l3__$11._ieCommented=__$l1__$12;__$ctx.ctx=__$l2__$13;return}function __$b33(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$15;__$ctx.__$a=4;__$r__$15=applyc(__$ctx,__$ref);return}function __$b34(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$17=__$ctx.ctx;var __$r__$18;var __$l0__$19=__$ctx._mode;__$ctx._mode="";var __$l1__$20=__$ctx.ctx;__$ctx.ctx=[ctx__$17.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$17.title},{block:"ua"},ctx__$17.head,ctx__$17.styles,ctx__$17.favicon?{elem:"favicon",url:ctx__$17.favicon}:""]},__$ctx.extend(ctx__$17,{elem:"body"})]}];var __$r__$21;__$ctx.__$a=6;__$r__$21=applyc(__$ctx,__$ref);__$r__$18=__$r__$21;__$ctx._mode=__$l0__$19;__$ctx.ctx=__$l1__$20;return}function __$b35(__$ctx,__$ref){__$ctx.__$a=0;var _this__$22=__$ctx,BEM_INTERNAL__$23=_this__$22.BEM.INTERNAL,ctx__$24=__$ctx.ctx,isBEM__$25,tag__$26,res__$27;var __$r__$28;var __$l0__$29=__$ctx._str;__$ctx._str="";var vBlock__$30=__$ctx.block;var __$r__$31;var __$l1__$32=__$ctx._mode;__$ctx._mode="tag";__$r__$31=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$32;tag__$26=__$r__$31;typeof tag__$26!=="undefined"||(tag__$26=ctx__$24.tag);typeof tag__$26!=="undefined"||(tag__$26="div");if(tag__$26){var jsParams__$33,js__$34;if(vBlock__$30&&ctx__$24.js!==false){var __$r__$35;var __$l2__$36=__$ctx._mode;__$ctx._mode="js";__$r__$35=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$36;js__$34=__$r__$35;js__$34=js__$34?__$ctx.extend(ctx__$24.js,js__$34===true?{}:js__$34):ctx__$24.js===true?{}:ctx__$24.js;js__$34&&((jsParams__$33={})[BEM_INTERNAL__$23.buildClass(vBlock__$30,ctx__$24.elem)]=js__$34)}__$ctx._str+="<"+tag__$26;var __$r__$37;var __$l3__$38=__$ctx._mode;__$ctx._mode="bem";__$r__$37=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$38;isBEM__$25=__$r__$37;typeof isBEM__$25!=="undefined"||(isBEM__$25=typeof ctx__$24.bem!=="undefined"?ctx__$24.bem:ctx__$24.block||ctx__$24.elem);var __$r__$40;var __$l4__$41=__$ctx._mode;__$ctx._mode="cls";__$r__$40=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$41;var cls__$39=__$r__$40;cls__$39||(cls__$39=ctx__$24.cls);var addJSInitClass__$42=ctx__$24.block&&jsParams__$33;if(isBEM__$25||cls__$39){__$ctx._str+=' class="';if(isBEM__$25){__$ctx._str+=BEM_INTERNAL__$23.buildClasses(vBlock__$30,ctx__$24.elem,ctx__$24.elemMods||ctx__$24.mods);var __$r__$44;var __$l5__$45=__$ctx._mode;__$ctx._mode="mix";__$r__$44=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$45;var mix__$43=__$r__$44;ctx__$24.mix&&(mix__$43=mix__$43?mix__$43.concat(ctx__$24.mix):ctx__$24.mix);if(mix__$43){var visited__$46={},visitedKey__$47=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$46[visitedKey__$47(vBlock__$30,__$ctx.elem)]=true;__$ctx.isArray(mix__$43)||(mix__$43=[mix__$43]);for(var i__$48=0;i__$48<mix__$43.length;i__$48++){var mixItem__$49=mix__$43[i__$48],hasItem__$50=mixItem__$49.block||mixItem__$49.elem,mixBlock__$51=mixItem__$49.block||mixItem__$49._block||_this__$22.block,mixElem__$52=mixItem__$49.elem||mixItem__$49._elem||_this__$22.elem;hasItem__$50&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$23[hasItem__$50?"buildClasses":"buildModsClasses"](mixBlock__$51,mixItem__$49.elem||mixItem__$49._elem||(mixItem__$49.block?undefined:_this__$22.elem),mixItem__$49.elemMods||mixItem__$49.mods);if(mixItem__$49.js){(jsParams__$33||(jsParams__$33={}))[BEM_INTERNAL__$23.buildClass(mixBlock__$51,mixItem__$49.elem)]=mixItem__$49.js===true?{}:mixItem__$49.js;addJSInitClass__$42||(addJSInitClass__$42=mixBlock__$51&&!mixItem__$49.elem)}if(hasItem__$50&&!visited__$46[visitedKey__$47(mixBlock__$51,mixElem__$52)]){visited__$46[visitedKey__$47(mixBlock__$51,mixElem__$52)]=true;var __$r__$54;var __$l6__$55=__$ctx._mode;__$ctx._mode="mix";var __$l7__$56=__$ctx.block;__$ctx.block=mixBlock__$51;var __$l8__$57=__$ctx.elem;__$ctx.elem=mixElem__$52;__$r__$54=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$55;__$ctx.block=__$l7__$56;__$ctx.elem=__$l8__$57;var nestedMix__$53=__$r__$54;if(nestedMix__$53){for(var j__$58=0;j__$58<nestedMix__$53.length;j__$58++){var nestedItem__$59=nestedMix__$53[j__$58];if(!nestedItem__$59.block&&!nestedItem__$59.elem||!visited__$46[visitedKey__$47(nestedItem__$59.block,nestedItem__$59.elem)]){nestedItem__$59._block=mixBlock__$51;nestedItem__$59._elem=mixElem__$52;mix__$43.splice(i__$48+1,0,nestedItem__$59)}}}}}}}cls__$39&&(__$ctx._str+=isBEM__$25?" "+cls__$39:cls__$39);__$ctx._str+=addJSInitClass__$42?' i-bem"':'"'}if(isBEM__$25&&jsParams__$33){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$33))+'"'}var __$r__$61;var __$l9__$62=__$ctx._mode;__$ctx._mode="attrs";__$r__$61=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$62;var attrs__$60=__$r__$61;attrs__$60=__$ctx.extend(attrs__$60,ctx__$24.attrs);if(attrs__$60){var name__$63,attr__$64;for(name__$63 in attrs__$60){attr__$64=attrs__$60[name__$63];if(typeof attr__$64==="undefined")continue;__$ctx._str+=" "+name__$63+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$64)?attr__$64:__$ctx.reapply(attr__$64))+'"'}}}if(__$ctx.isShortTag(tag__$26)){__$ctx._str+="/>"}else{tag__$26&&(__$ctx._str+=">");var __$r__$66;var __$l10__$67=__$ctx._mode;__$ctx._mode="content";__$r__$66=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$67;var content__$65=__$r__$66;if(content__$65||content__$65===0){isBEM__$25=vBlock__$30||__$ctx.elem;var __$r__$68;var __$l11__$69=__$ctx._mode;__$ctx._mode="";var __$l12__$70=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$71=__$ctx.position;__$ctx.position=isBEM__$25?1:__$ctx.position;var __$l14__$72=__$ctx._listLength;__$ctx._listLength=isBEM__$25?1:__$ctx._listLength;var __$l15__$73=__$ctx.ctx;__$ctx.ctx=content__$65;__$r__$68=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$69;__$ctx._notNewList=__$l12__$70;__$ctx.position=__$l13__$71;__$ctx._listLength=__$l14__$72;__$ctx.ctx=__$l15__$73}tag__$26&&(__$ctx._str+="</"+tag__$26+">")}res__$27=__$ctx._str;__$r__$28=undefined;__$ctx._str=__$l0__$29;__$ctx._buf.push(res__$27);return}function __$b38(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$74;var __$l0__$75=__$ctx._mode;__$ctx._mode="";var __$l1__$76=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$77;__$ctx.__$a=7;__$r__$77=applyc(__$ctx,__$ref);__$r__$74=__$r__$77;__$ctx._mode=__$l0__$75;__$ctx.ctx=__$l1__$76;return}function __$b39(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$78=__$ctx.ctx;if(ctx__$78&&ctx__$78!==true||ctx__$78===0){__$ctx._str+=ctx__$78+""}return}function __$b40(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b41(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$79=__$ctx.ctx,len__$80=ctx__$79.length,i__$81=0,prevPos__$82=__$ctx.position,prevNotNewList__$83=__$ctx._notNewList;if(prevNotNewList__$83){__$ctx._listLength+=len__$80-1}else{__$ctx.position=0;__$ctx._listLength=len__$80}__$ctx._notNewList=true;while(i__$81<len__$80)!function(){var __$r__$84;var __$l0__$85=__$ctx.ctx;__$ctx.ctx=ctx__$79[i__$81++];__$r__$84=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$85;return __$r__$84}();prevNotNewList__$83||(__$ctx.position=prevPos__$82);return}function __$b42(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$86=__$ctx.ctx.block,vElem__$87=__$ctx.ctx.elem,block__$88=__$ctx._currBlock||__$ctx.block;var __$r__$89;var __$l0__$90=__$ctx._mode;__$ctx._mode="default";var __$l1__$91=__$ctx.block;__$ctx.block=vBlock__$86||(vElem__$87?block__$88:undefined);var __$l2__$92=__$ctx._currBlock;__$ctx._currBlock=vBlock__$86||vElem__$87?undefined:block__$88;var __$l3__$93=__$ctx.elem;__$ctx.elem=vElem__$87;var __$l4__$94=__$ctx.mods;__$ctx.mods=vBlock__$86?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$95=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$89=undefined;__$ctx._mode=__$l0__$90;__$ctx.block=__$l1__$91;__$ctx._currBlock=__$l2__$92;__$ctx.elem=__$l3__$93;__$ctx.mods=__$l4__$94;__$ctx.elemMods=__$l5__$95;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="image"){if(!__$ctx.elem){__$ctx.__$a=0;return"img"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref};
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