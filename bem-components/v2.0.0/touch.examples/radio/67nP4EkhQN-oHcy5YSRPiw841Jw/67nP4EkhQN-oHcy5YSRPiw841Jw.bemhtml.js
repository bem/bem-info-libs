(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "radio") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["type"] === "button") {
                    var __$r = __$b3(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 4) === 0) {
                    return [ function __$lb__$16() {
                        var __$r__$17;
                        var __$l0__$18 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$17 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$18;
                        return __$r__$17;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 16) === 0) {
                return [ function __$lb__$24() {
                    var __$r__$25;
                    var __$l0__$26 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$25 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$26;
                    return __$r__$25;
                }(), {
                    elem: "meta",
                    attrs: {
                        name: "viewport",
                        content: "width=device-width," + (__$ctx.ctx.zoom ? "initial-scale=1" : "maximum-scale=1,initial-scale=1,user-scalable=0")
                    }
                }, {
                    elem: "meta",
                    attrs: {
                        name: "format-detection",
                        content: "telephone=no"
                    }
                }, {
                    elem: "link",
                    attrs: {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }
                } ];
            }
            if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
                return [ function __$lb__$27() {
                    var __$r__$28;
                    var __$l0__$29 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$28 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$29;
                    return __$r__$28;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$2() {
                        var __$r__$3;
                        var __$l0__$4 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$3 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$4;
                        return __$r__$3;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "radio") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b30(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "radio") {
            if ($$elem === "control") {
                var __$r = __$b32(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b48(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b49(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 128) === 0) {
            var __$r = __$b51(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b55(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b2(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, content__$6 = [ ctx__$5.icon ];
    "text" in ctx__$5 && content__$6.push({
        elem: "text",
        content: ctx__$5.text
    });
    return content__$6;
}

function __$b3(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx, mods__$1 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: mods__$1.mode === "radio-check" ? "check" : "radio",
            checked: mods__$1.checked,
            disabled: mods__$1.disabled,
            theme: mods__$1.theme,
            size: mods__$1.size
        },
        title: ctx__$0.title,
        content: [ ctx__$0.icon, typeof ctx__$0.text !== "undefined" ? {
            elem: "text",
            content: ctx__$0.text
        } : "" ]
    }, {
        block: "radio",
        elem: "control",
        checked: mods__$1.checked,
        disabled: mods__$1.disabled,
        name: ctx__$0.name,
        val: ctx__$0.val
    } ];
}

function __$b4(__$ctx, __$ref) {
    var ctx__$15 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$15.name,
            val: ctx__$15.val
        }
    }, ctx__$15.text ];
}

function __$b30(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, attrs__$8 = {
        type: $$mods.type || "button",
        name: ctx__$7.name,
        value: ctx__$7.val
    };
    $$mods.disabled && (attrs__$8.disabled = "disabled");
    return __$ctx.extend(function __$lb__$9() {
        var __$r__$10;
        var __$l0__$11 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$10 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$11;
        return __$r__$10;
    }(), attrs__$8);
}

function __$b31(__$ctx, __$ref) {
    var ctx__$12 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$12.tabIndex,
        id: ctx__$12.id,
        title: ctx__$12.title
    };
}

function __$b32(__$ctx, __$ref) {
    var ctx__$13 = __$ctx.ctx, attrs__$14 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$13.name,
        value: ctx__$13.val
    };
    ctx__$13.checked && (attrs__$14.checked = "checked");
    ctx__$13.disabled && (attrs__$14.disabled = "disabled");
    return attrs__$14;
}

function __$b38(__$ctx, __$ref) {
    var mix__$19 = function __$lb__$20() {
        var __$r__$21;
        var __$l0__$22 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$21 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$22;
        return __$r__$21;
    }(), uaMix__$23 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$19 ? uaMix__$23.concat(mix__$19) : uaMix__$23;
}

function __$b48(__$ctx, __$ref) {
    var ctx__$30 = __$ctx.ctx;
    var __$r__$32;
    var __$l0__$33 = $$mode;
    $$mode = "";
    var __$l1__$34 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$30.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$30.title
            }, {
                block: "ua"
            }, ctx__$30.head, ctx__$30.styles, ctx__$30.favicon ? {
                elem: "favicon",
                url: ctx__$30.favicon
            } : "" ]
        }, ctx__$30 ]
    } ];
    var __$r__$36;
    var __$l2__$37 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$36 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$37;
    __$r__$32 = __$r__$36;
    $$mode = __$l0__$33;
    __$ctx.ctx = __$l1__$34;
    return;
}

function __$b49(__$ctx, __$ref) {
    var BEM_INTERNAL__$38 = __$ctx.BEM.INTERNAL, ctx__$39 = __$ctx.ctx, isBEM__$40, tag__$41, res__$42;
    var __$r__$44;
    var __$l0__$45 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$46 = $$block;
    var __$r__$48;
    var __$l1__$49 = $$mode;
    $$mode = "tag";
    __$r__$48 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$49;
    tag__$41 = __$r__$48;
    typeof tag__$41 !== "undefined" || (tag__$41 = ctx__$39.tag);
    typeof tag__$41 !== "undefined" || (tag__$41 = "div");
    if (tag__$41) {
        var jsParams__$50, js__$51;
        if (vBlock__$46 && ctx__$39.js !== false) {
            var __$r__$52;
            var __$l2__$53 = $$mode;
            $$mode = "js";
            __$r__$52 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$53;
            js__$51 = __$r__$52;
            js__$51 = js__$51 ? __$ctx.extend(ctx__$39.js, js__$51 === true ? {} : js__$51) : ctx__$39.js === true ? {} : ctx__$39.js;
            js__$51 && ((jsParams__$50 = {})[BEM_INTERNAL__$38.buildClass(vBlock__$46, ctx__$39.elem)] = js__$51);
        }
        __$ctx._str += "<" + tag__$41;
        var __$r__$54;
        var __$l3__$55 = $$mode;
        $$mode = "bem";
        __$r__$54 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$55;
        isBEM__$40 = __$r__$54;
        typeof isBEM__$40 !== "undefined" || (isBEM__$40 = typeof ctx__$39.bem !== "undefined" ? ctx__$39.bem : ctx__$39.block || ctx__$39.elem);
        var __$r__$57;
        var __$l4__$58 = $$mode;
        $$mode = "cls";
        __$r__$57 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$58;
        var cls__$56 = __$r__$57;
        cls__$56 || (cls__$56 = ctx__$39.cls);
        var addJSInitClass__$59 = ctx__$39.block && jsParams__$50 && !ctx__$39.elem;
        if (isBEM__$40 || cls__$56) {
            __$ctx._str += ' class="';
            if (isBEM__$40) {
                __$ctx._str += BEM_INTERNAL__$38.buildClasses(vBlock__$46, ctx__$39.elem, ctx__$39.elemMods || ctx__$39.mods);
                var __$r__$61;
                var __$l5__$62 = $$mode;
                $$mode = "mix";
                __$r__$61 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$62;
                var mix__$60 = __$r__$61;
                ctx__$39.mix && (mix__$60 = mix__$60 ? [].concat(mix__$60, ctx__$39.mix) : ctx__$39.mix);
                if (mix__$60) {
                    var visited__$63 = {}, visitedKey__$64 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$63[visitedKey__$64(vBlock__$46, $$elem)] = true;
                    __$ctx.isArray(mix__$60) || (mix__$60 = [ mix__$60 ]);
                    for (var i__$65 = 0; i__$65 < mix__$60.length; i__$65++) {
                        var mixItem__$66 = mix__$60[i__$65], hasItem__$67 = mixItem__$66.block || mixItem__$66.elem, mixBlock__$68 = mixItem__$66.block || mixItem__$66._block || $$block, mixElem__$69 = mixItem__$66.elem || mixItem__$66._elem || $$elem;
                        hasItem__$67 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$38[hasItem__$67 ? "buildClasses" : "buildModsClasses"](mixBlock__$68, mixItem__$66.elem || mixItem__$66._elem || (mixItem__$66.block ? undefined : $$elem), mixItem__$66.elemMods || mixItem__$66.mods);
                        if (mixItem__$66.js) {
                            (jsParams__$50 || (jsParams__$50 = {}))[BEM_INTERNAL__$38.buildClass(mixBlock__$68, mixItem__$66.elem)] = mixItem__$66.js === true ? {} : mixItem__$66.js;
                            addJSInitClass__$59 || (addJSInitClass__$59 = mixBlock__$68 && !mixItem__$66.elem);
                        }
                        if (hasItem__$67 && !visited__$63[visitedKey__$64(mixBlock__$68, mixElem__$69)]) {
                            visited__$63[visitedKey__$64(mixBlock__$68, mixElem__$69)] = true;
                            var __$r__$71;
                            var __$l6__$72 = $$mode;
                            $$mode = "mix";
                            var __$l7__$73 = $$block;
                            $$block = mixBlock__$68;
                            var __$l8__$74 = $$elem;
                            $$elem = mixElem__$69;
                            __$r__$71 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$72;
                            $$block = __$l7__$73;
                            $$elem = __$l8__$74;
                            var nestedMix__$70 = __$r__$71;
                            if (nestedMix__$70) {
                                for (var j__$75 = 0; j__$75 < nestedMix__$70.length; j__$75++) {
                                    var nestedItem__$76 = nestedMix__$70[j__$75];
                                    if (!nestedItem__$76.block && !nestedItem__$76.elem || !visited__$63[visitedKey__$64(nestedItem__$76.block, nestedItem__$76.elem)]) {
                                        nestedItem__$76._block = mixBlock__$68;
                                        nestedItem__$76._elem = mixElem__$69;
                                        mix__$60.splice(i__$65 + 1, 0, nestedItem__$76);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$56 && (__$ctx._str += isBEM__$40 ? " " + cls__$56 : cls__$56);
            __$ctx._str += addJSInitClass__$59 ? ' i-bem"' : '"';
        }
        if (isBEM__$40 && jsParams__$50) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$50)) + '"';
        }
        var __$r__$78;
        var __$l9__$79 = $$mode;
        $$mode = "attrs";
        __$r__$78 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$79;
        var attrs__$77 = __$r__$78;
        attrs__$77 = __$ctx.extend(attrs__$77, ctx__$39.attrs);
        if (attrs__$77) {
            var name__$80, attr__$81;
            for (name__$80 in attrs__$77) {
                attr__$81 = attrs__$77[name__$80];
                if (typeof attr__$81 === "undefined") continue;
                __$ctx._str += " " + name__$80 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$81) ? attr__$81 : __$ctx.reapply(attr__$81)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$41)) {
        __$ctx._str += "/>";
    } else {
        tag__$41 && (__$ctx._str += ">");
        var __$r__$83;
        var __$l10__$84 = $$mode;
        $$mode = "content";
        __$r__$83 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$84;
        var content__$82 = __$r__$83;
        if (content__$82 || content__$82 === 0) {
            isBEM__$40 = vBlock__$46 || $$elem;
            var __$r__$85;
            var __$l11__$86 = $$mode;
            $$mode = "";
            var __$l12__$87 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$88 = __$ctx.position;
            __$ctx.position = isBEM__$40 ? 1 : __$ctx.position;
            var __$l14__$89 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$40 ? 1 : __$ctx._listLength;
            var __$l15__$90 = __$ctx.ctx;
            __$ctx.ctx = content__$82;
            __$r__$85 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$86;
            __$ctx._notNewList = __$l12__$87;
            __$ctx.position = __$l13__$88;
            __$ctx._listLength = __$l14__$89;
            __$ctx.ctx = __$l15__$90;
        }
        tag__$41 && (__$ctx._str += "</" + tag__$41 + ">");
    }
    res__$42 = __$ctx._str;
    __$r__$44 = undefined;
    __$ctx._str = __$l0__$45;
    __$ctx._buf.push(res__$42);
    return;
}

function __$b51(__$ctx, __$ref) {
    var __$r__$92;
    var __$l0__$93 = $$mode;
    $$mode = "";
    var __$l1__$94 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$96;
    var __$l2__$97 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$96 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$97;
    __$r__$92 = __$r__$96;
    $$mode = __$l0__$93;
    __$ctx.ctx = __$l1__$94;
    return;
}

function __$b52(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$98 = __$ctx.ctx;
    if (ctx__$98 && ctx__$98 !== true || ctx__$98 === 0) {
        __$ctx._str += ctx__$98 + "";
    }
    return;
}

function __$b53(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b54(__$ctx, __$ref) {
    var ctx__$99 = __$ctx.ctx, len__$100 = ctx__$99.length, i__$101 = 0, prevPos__$102 = __$ctx.position, prevNotNewList__$103 = __$ctx._notNewList;
    if (prevNotNewList__$103) {
        __$ctx._listLength += len__$100 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$100;
    }
    __$ctx._notNewList = true;
    while (i__$101 < len__$100) (function __$lb__$104() {
        var __$r__$105;
        var __$l0__$106 = __$ctx.ctx;
        __$ctx.ctx = ctx__$99[i__$101++];
        __$r__$105 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$106;
        return __$r__$105;
    })();
    prevNotNewList__$103 || (__$ctx.position = prevPos__$102);
    return;
}

function __$b55(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$107 = __$ctx.ctx.block, vElem__$108 = __$ctx.ctx.elem, block__$109 = __$ctx._currBlock || $$block;
    var __$r__$111;
    var __$l0__$112 = $$mode;
    $$mode = "default";
    var __$l1__$113 = $$block;
    $$block = vBlock__$107 || (vElem__$108 ? block__$109 : undefined);
    var __$l2__$114 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$107 || vElem__$108 ? undefined : block__$109;
    var __$l3__$115 = $$elem;
    $$elem = vElem__$108;
    var __$l4__$116 = $$mods;
    $$mods = vBlock__$107 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$117 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$111 = undefined;
    $$mode = __$l0__$112;
    $$block = __$l1__$113;
    __$ctx._currBlock = __$l2__$114;
    $$elem = __$l3__$115;
    $$mods = __$l4__$116;
    $$elemMods = __$l5__$117;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "radio") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "head") {
            return "head";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        }
        if (!$$elem) {
            return "body";
        }
    }
    return undefined;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);