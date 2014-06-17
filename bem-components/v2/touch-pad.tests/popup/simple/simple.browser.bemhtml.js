(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="attrs"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="input"){if(__$ctx.elem==="control"&&!__$ctx._input__control&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b8(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$b9(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){if(__$ctx.elem==="body"&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b10(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx.__$a!==8){__$ctx.__$a=0;var __$r=__$b11(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b12(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="tag"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="content"){var __$t=__$ctx.block;if(__$t==="input"){var __$t=!__$ctx.elem;if(__$t){if(typeof __$ctx.ctx.content!=="undefined"){__$ctx.__$a=0;return __$ctx.ctx.content}__$ctx.__$a=0;var __$r=__$b29(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="ua"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==4){__$ctx.__$a=0;return[function(){var __$r__$23;__$ctx.__$a=4;__$r__$23=applyc(__$ctx,__$ref);return __$r__$23}(),"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");']}__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}else if(__$t==="page"){if(__$ctx.elem==="body"&&__$ctx.__$a!==7){__$ctx.__$a=0;return[function(){var __$r__$26;__$ctx.__$a=7;__$r__$26=applyc(__$ctx,__$ref);return __$r__$26}(),__$ctx.ctx.scripts]}}__$ctx.__$a=0;return __$ctx.ctx.content}else if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="input"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="popup"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"control"}]}}else if(__$t==="page"){if(!__$ctx.elem&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=function(){var __$r__$24;__$ctx.__$a=5;__$r__$24=applyc(__$ctx,__$ref);return __$r__$24}().concat({block:"ua",js:true});if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return undefined}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="head"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return[{block:"ua"},{elem:"meta",attrs:{name:"viewport",content:"width=device-width,"+(__$ctx.ctx.zoom?"initial-scale=1":"maximum-scale=1,initial-scale=1,user-scalable=0")}},{elem:"meta",attrs:{name:"format-detection",content:"telephone=no"}},{elem:"link",attrs:{name:"apple-mobile-web-app-capable",content:"yes"}},__$ctx.ctx.head]}}else if(__$t==="cls"){__$ctx.__$a=0;return undefined}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==9){__$ctx.__$a=0;var __$r=__$b52(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b53(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b54(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b55(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b56(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0}[function(exports,context){var undef,BEM_={},toString=Object.prototype.toString,slice=Array.prototype.slice,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undef}}else if(typeOfModName!=="undefined"){modName=undef}else if(elem&&typeof elem!=="string"){elem=undef}if(!(elem||modName)){return block}return elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";res+=elem?buildElemClass(block,elem):buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};context.BEMContext=BEMContext;function BEMContext(context,apply_){this.ctx=typeof context==="undefined"?"":context;this.apply=apply_;this._str="";var _this=this;this._buf={push:function(){var chunks=slice.call(arguments).join("");_this._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undef;this.elem=undef;this.mods=undef;this.elemMods=undef}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function BEMContext_apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx.ctx=undefined;ctx._input__controlAttrs=undefined;ctx.__$a=0;ctx._mode=undefined;ctx._input__control=undefined;ctx._input=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var baseAttrs__$0=function(){var __$r__$1;var __$l2__$2=__$ctx.ctx;var __$l0__$3=__$l2__$2._input__controlAttrs;__$l2__$2._input__controlAttrs=true;var __$r__$4;__$ctx.__$a=1;__$r__$4=applyc(__$ctx,__$ref);__$r__$1=__$r__$4;__$l2__$2._input__controlAttrs=__$l0__$3;return __$r__$1}(),attrs__$5=__$ctx.ctx.attrs||{};attrs__$5.autocomplete=attrs__$5.autocomplete||"off";attrs__$5.autocorrect=attrs__$5.autocorrect||"off";attrs__$5.autocapitalize=attrs__$5.autocapitalize||"off";attrs__$5.spellcheck=attrs__$5.spellcheck||"false";return __$ctx.extend(baseAttrs__$0,attrs__$5)}function __$b2(__$ctx,__$ref){__$ctx.__$a=0;var input__$11=__$ctx._input,attrs__$12={id:input__$11.id,name:input__$11.name,value:input__$11.val,maxlength:input__$11.maxLength,tabindex:input__$11.tabIndex,placeholder:input__$11.placeholder};input__$11.autocomplete===false&&(attrs__$12.autocomplete="off");__$ctx.mods.disabled&&(attrs__$12.disabled="disabled");return attrs__$12}function __$b3(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$19=__$ctx.ctx,attrs__$20={tabindex:ctx__$19.tabIndex},url__$21=ctx__$19.url,typeOfUrl__$22=typeof url__$21;typeOfUrl__$22!=="undefined"&&(attrs__$20.href=typeOfUrl__$22==="string"?url__$21:__$ctx.reapply(url__$21));typeof attrs__$20.href==="undefined"&&typeof attrs__$20.tabindex==="undefined"&&(attrs__$20.tabindex=0);ctx__$19.title&&(attrs__$20.title=ctx__$19.title);ctx__$19.target&&(attrs__$20.target=ctx__$19.target);return attrs__$20}function __$b8(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$6;var __$l0__$7=__$ctx._mode;__$ctx._mode="";var __$l1__$8=__$ctx.ctx;__$ctx.ctx={elem:"box",content:__$ctx.ctx};var __$l2__$9=__$ctx._input__control;__$ctx._input__control=true;var __$r__$10;__$ctx.__$a=2;__$r__$10=applyc(__$ctx,__$ref);__$r__$6=__$r__$10;__$ctx._mode=__$l0__$7;__$ctx.ctx=__$l1__$8;__$ctx._input__control=__$l2__$9;return}function __$b9(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$15=__$ctx.ctx;ctx__$15.id=ctx__$15.id||__$ctx.generateId();var __$r__$16;var __$l0__$17=__$ctx._input;__$ctx._input=ctx__$15;var __$r__$18;__$ctx.__$a=3;__$r__$18=applyc(__$ctx,__$ref);__$r__$16=__$r__$18;__$ctx._input=__$l0__$17;return}function __$b10(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$25;__$ctx.__$a=6;__$r__$25=applyc(__$ctx,__$ref);return}function __$b11(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$27=__$ctx.ctx;var __$r__$28;var __$l0__$29=__$ctx._mode;__$ctx._mode="";var __$l1__$30=__$ctx.ctx;__$ctx.ctx=[ctx__$27.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$27.title},{block:"ua"},ctx__$27.head,ctx__$27.styles,ctx__$27.favicon?{elem:"favicon",url:ctx__$27.favicon}:""]},__$ctx.extend(ctx__$27,{elem:"body"})]}];var __$r__$31;__$ctx.__$a=8;__$r__$31=applyc(__$ctx,__$ref);__$r__$28=__$r__$31;__$ctx._mode=__$l0__$29;__$ctx.ctx=__$l1__$30;return}function __$b12(__$ctx,__$ref){__$ctx.__$a=0;var _this__$32=__$ctx,BEM_INTERNAL__$33=_this__$32.BEM.INTERNAL,ctx__$34=__$ctx.ctx,isBEM__$35,tag__$36,res__$37;var __$r__$38;var __$l0__$39=__$ctx._str;__$ctx._str="";var vBlock__$40=__$ctx.block;var __$r__$41;var __$l1__$42=__$ctx._mode;__$ctx._mode="tag";__$r__$41=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$42;tag__$36=__$r__$41;typeof tag__$36!=="undefined"||(tag__$36=ctx__$34.tag);typeof tag__$36!=="undefined"||(tag__$36="div");if(tag__$36){var jsParams__$43,js__$44;if(vBlock__$40&&ctx__$34.js!==false){var __$r__$45;var __$l2__$46=__$ctx._mode;__$ctx._mode="js";__$r__$45=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$46;js__$44=__$r__$45;js__$44=js__$44?__$ctx.extend(ctx__$34.js,js__$44===true?{}:js__$44):ctx__$34.js===true?{}:ctx__$34.js;js__$44&&((jsParams__$43={})[BEM_INTERNAL__$33.buildClass(vBlock__$40,ctx__$34.elem)]=js__$44)}__$ctx._str+="<"+tag__$36;var __$r__$47;var __$l3__$48=__$ctx._mode;__$ctx._mode="bem";__$r__$47=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$48;isBEM__$35=__$r__$47;typeof isBEM__$35!=="undefined"||(isBEM__$35=typeof ctx__$34.bem!=="undefined"?ctx__$34.bem:ctx__$34.block||ctx__$34.elem);var __$r__$50;var __$l4__$51=__$ctx._mode;__$ctx._mode="cls";__$r__$50=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$51;var cls__$49=__$r__$50;cls__$49||(cls__$49=ctx__$34.cls);var addJSInitClass__$52=ctx__$34.block&&jsParams__$43;if(isBEM__$35||cls__$49){__$ctx._str+=' class="';if(isBEM__$35){__$ctx._str+=BEM_INTERNAL__$33.buildClasses(vBlock__$40,ctx__$34.elem,ctx__$34.elemMods||ctx__$34.mods);var __$r__$54;var __$l5__$55=__$ctx._mode;__$ctx._mode="mix";__$r__$54=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$55;var mix__$53=__$r__$54;ctx__$34.mix&&(mix__$53=mix__$53?mix__$53.concat(ctx__$34.mix):ctx__$34.mix);if(mix__$53){var visited__$56={},visitedKey__$57=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$56[visitedKey__$57(vBlock__$40,__$ctx.elem)]=true;__$ctx.isArray(mix__$53)||(mix__$53=[mix__$53]);for(var i__$58=0;i__$58<mix__$53.length;i__$58++){var mixItem__$59=mix__$53[i__$58],hasItem__$60=mixItem__$59.block||mixItem__$59.elem,mixBlock__$61=mixItem__$59.block||mixItem__$59._block||_this__$32.block,mixElem__$62=mixItem__$59.elem||mixItem__$59._elem||_this__$32.elem;hasItem__$60&&(__$ctx._str+=" ");__$ctx._str+=BEM_INTERNAL__$33[hasItem__$60?"buildClasses":"buildModsClasses"](mixBlock__$61,mixItem__$59.elem||mixItem__$59._elem||(mixItem__$59.block?undefined:_this__$32.elem),mixItem__$59.elemMods||mixItem__$59.mods);if(mixItem__$59.js){(jsParams__$43||(jsParams__$43={}))[BEM_INTERNAL__$33.buildClass(mixBlock__$61,mixItem__$59.elem)]=mixItem__$59.js===true?{}:mixItem__$59.js;addJSInitClass__$52||(addJSInitClass__$52=mixBlock__$61&&!mixItem__$59.elem)}if(hasItem__$60&&!visited__$56[visitedKey__$57(mixBlock__$61,mixElem__$62)]){visited__$56[visitedKey__$57(mixBlock__$61,mixElem__$62)]=true;var __$r__$64;var __$l6__$65=__$ctx._mode;__$ctx._mode="mix";var __$l7__$66=__$ctx.block;__$ctx.block=mixBlock__$61;var __$l8__$67=__$ctx.elem;__$ctx.elem=mixElem__$62;__$r__$64=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$65;__$ctx.block=__$l7__$66;__$ctx.elem=__$l8__$67;var nestedMix__$63=__$r__$64;if(nestedMix__$63){for(var j__$68=0;j__$68<nestedMix__$63.length;j__$68++){var nestedItem__$69=nestedMix__$63[j__$68];if(!nestedItem__$69.block&&!nestedItem__$69.elem||!visited__$56[visitedKey__$57(nestedItem__$69.block,nestedItem__$69.elem)]){nestedItem__$69._block=mixBlock__$61;nestedItem__$69._elem=mixElem__$62;mix__$53.splice(i__$58+1,0,nestedItem__$69)}}}}}}}cls__$49&&(__$ctx._str+=isBEM__$35?" "+cls__$49:cls__$49);__$ctx._str+=addJSInitClass__$52?' i-bem"':'"'}if(isBEM__$35&&jsParams__$43){__$ctx._str+=' data-bem="'+__$ctx.attrEscape(JSON.stringify(jsParams__$43))+'"'}var __$r__$71;var __$l9__$72=__$ctx._mode;__$ctx._mode="attrs";__$r__$71=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$72;var attrs__$70=__$r__$71;attrs__$70=__$ctx.extend(attrs__$70,ctx__$34.attrs);if(attrs__$70){var name__$73,attr__$74;for(name__$73 in attrs__$70){attr__$74=attrs__$70[name__$73];if(typeof attr__$74==="undefined")continue;__$ctx._str+=" "+name__$73+'="'+__$ctx.attrEscape(__$ctx.isSimple(attr__$74)?attr__$74:__$ctx.reapply(attr__$74))+'"'}}}if(__$ctx.isShortTag(tag__$36)){__$ctx._str+="/>"}else{tag__$36&&(__$ctx._str+=">");var __$r__$76;var __$l10__$77=__$ctx._mode;__$ctx._mode="content";__$r__$76=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$77;var content__$75=__$r__$76;if(content__$75||content__$75===0){isBEM__$35=vBlock__$40||__$ctx.elem;var __$r__$78;var __$l11__$79=__$ctx._mode;__$ctx._mode="";var __$l12__$80=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$81=__$ctx.position;__$ctx.position=isBEM__$35?1:__$ctx.position;var __$l14__$82=__$ctx._listLength;__$ctx._listLength=isBEM__$35?1:__$ctx._listLength;var __$l15__$83=__$ctx.ctx;__$ctx.ctx=content__$75;__$r__$78=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$79;__$ctx._notNewList=__$l12__$80;__$ctx.position=__$l13__$81;__$ctx._listLength=__$l14__$82;__$ctx.ctx=__$l15__$83}tag__$36&&(__$ctx._str+="</"+tag__$36+">")}res__$37=__$ctx._str;__$r__$38=undefined;__$ctx._str=__$l0__$39;__$ctx._buf.push(res__$37);return}function __$b29(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$13=__$ctx.ctx,content__$14=[{elem:"control"}];ctx__$13.label&&__$ctx.mods["has-label"]&&content__$14.unshift({elem:"label",content:ctx__$13.label});return content__$14}function __$b52(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$84;var __$l0__$85=__$ctx._mode;__$ctx._mode="";var __$l1__$86=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$87;__$ctx.__$a=9;__$r__$87=applyc(__$ctx,__$ref);__$r__$84=__$r__$87;__$ctx._mode=__$l0__$85;__$ctx.ctx=__$l1__$86;return}function __$b53(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$88=__$ctx.ctx;if(ctx__$88&&ctx__$88!==true||ctx__$88===0){__$ctx._str+=ctx__$88+""}return}function __$b54(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b55(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$89=__$ctx.ctx,len__$90=ctx__$89.length,i__$91=0,prevPos__$92=__$ctx.position,prevNotNewList__$93=__$ctx._notNewList;if(prevNotNewList__$93){__$ctx._listLength+=len__$90-1}else{__$ctx.position=0;__$ctx._listLength=len__$90}__$ctx._notNewList=true;while(i__$91<len__$90)!function(){var __$r__$94;var __$l0__$95=__$ctx.ctx;__$ctx.ctx=ctx__$89[i__$91++];__$r__$94=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$95;return __$r__$94}();prevNotNewList__$93||(__$ctx.position=prevPos__$92);return}function __$b56(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx||(__$ctx.ctx={});var vBlock__$96=__$ctx.ctx.block,vElem__$97=__$ctx.ctx.elem,block__$98=__$ctx._currBlock||__$ctx.block;var __$r__$99;var __$l0__$100=__$ctx._mode;__$ctx._mode="default";var __$l1__$101=__$ctx.block;__$ctx.block=vBlock__$96||(vElem__$97?block__$98:undefined);var __$l2__$102=__$ctx._currBlock;__$ctx._currBlock=vBlock__$96||vElem__$97?undefined:block__$98;var __$l3__$103=__$ctx.elem;__$ctx.elem=vElem__$97;var __$l4__$104=__$ctx.mods;__$ctx.mods=vBlock__$96?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$105=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$99=undefined;__$ctx._mode=__$l0__$100;__$ctx.block=__$l1__$101;__$ctx._currBlock=__$l2__$102;__$ctx.elem=__$l3__$103;__$ctx.mods=__$l4__$104;__$ctx.elemMods=__$l5__$105;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="input"){var __$t=__$ctx.elem;if(__$t==="control"){if(!__$ctx.ctx._input__controlAttrs&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="input"){var __$t=__$ctx.elem;if(__$t==="control"){__$ctx.__$a=0;return"input"}else if(__$t==="box"){__$ctx.__$a=0;return"span"}if(!__$ctx.elem){__$ctx.__$a=0;return"span"}}else if(__$t==="link"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.mods&&__$ctx.mods["pseudo"]===true&&!__$ctx.ctx.url){__$ctx.__$a=0;return"span"}__$ctx.__$a=0;return"a"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}}__$ctx.__$a=0;return undefined;return __$ref};
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