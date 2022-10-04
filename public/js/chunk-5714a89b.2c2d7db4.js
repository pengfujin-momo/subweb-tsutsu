(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-5714a89b"], { "04d1": function(t, e, o) { var a = o("342f"),
                l = a.match(/firefox\/(\d+)/i);
            t.exports = !!l && +l[1] }, "0cb2": function(t, e, o) { var a = o("7b0b"),
                l = Math.floor,
                n = "".replace,
                r = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                i = /\$([$&'`]|\d{1,2})/g;
            t.exports = function(t, e, o, s, c, u) { var d = o + t.length,
                    p = s.length,
                    f = i; return void 0 !== c && (c = a(c), f = r), n.call(u, f, (function(a, n) { var r; switch (n.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, o);
                        case "'":
                            return e.slice(d);
                        case "<":
                            r = c[n.slice(1, -1)]; break;
                        default:
                            var i = +n; if (0 === i) return a; if (i > p) { var u = l(i / 10); return 0 === u ? a : u <= p ? void 0 === s[u - 1] ? n.charAt(1) : s[u - 1] + n.charAt(1) : a }
                            r = s[i - 1] } return void 0 === r ? "" : r })) } }, "107c": function(t, e, o) { var a = o("d039");
            t.exports = a((function() { var t = RegExp("(?<a>b)", "string".charAt(5)); return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c") })) }, "14c3": function(t, e, o) { var a = o("c6b6"),
                l = o("9263");
            t.exports = function(t, e) { var o = t.exec; if ("function" === typeof o) { var n = o.call(t, e); if ("object" !== typeof n) throw TypeError("RegExp exec method returned something other than an Object or null"); return n } if ("RegExp" !== a(t)) throw TypeError("RegExp#exec called on incompatible receiver"); return l.call(t, e) } }, "25f0": function(t, e, o) { "use strict"; var a = o("6eeb"),
                l = o("825a"),
                n = o("d039"),
                r = o("ad6d"),
                i = "toString",
                s = RegExp.prototype,
                c = s[i],
                u = n((function() { return "/a/b" != c.call({ source: "a", flags: "b" }) })),
                d = c.name != i;
            (u || d) && a(RegExp.prototype, i, (function() { var t = l(this),
                    e = String(t.source),
                    o = t.flags,
                    a = String(void 0 === o && t instanceof RegExp && !("flags" in s) ? r.call(t) : o); return "/" + e + "/" + a }), { unsafe: !0 }) }, "4de4": function(t, e, o) { "use strict"; var a = o("23e7"),
                l = o("b727").filter,
                n = o("1dde"),
                r = n("filter");
            a({ target: "Array", proto: !0, forced: !r }, { filter: function(t) { return l(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, "4e82": function(t, e, o) { "use strict"; var a = o("23e7"),
                l = o("1c0b"),
                n = o("7b0b"),
                r = o("50c4"),
                i = o("d039"),
                s = o("addb"),
                c = o("a640"),
                u = o("04d1"),
                d = o("d998"),
                p = o("2d00"),
                f = o("512c"),
                m = [],
                h = m.sort,
                b = i((function() { m.sort(void 0) })),
                g = i((function() { m.sort(null) })),
                v = c("sort"),
                S = !i((function() { if (p) return p < 70; if (!(u && u > 3)) { if (d) return !0; if (f) return f < 603; var t, e, o, a, l = ""; for (t = 65; t < 76; t++) { switch (e = String.fromCharCode(t), t) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    o = 3; break;
                                case 68:
                                case 71:
                                    o = 4; break;
                                default:
                                    o = 2 } for (a = 0; a < 47; a++) m.push({ k: e + a, v: o }) } for (m.sort((function(t, e) { return e.v - t.v })), a = 0; a < m.length; a++) e = m[a].k.charAt(0), l.charAt(l.length - 1) !== e && (l += e); return "DGBEFHACIJK" !== l } })),
                x = b || !g || !v || !S,
                C = function(t) { return function(e, o) { return void 0 === o ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, o) || 0 : String(e) > String(o) ? 1 : -1 } };
            a({ target: "Array", proto: !0, forced: x }, { sort: function(t) { void 0 !== t && l(t); var e = n(this); if (S) return void 0 === t ? h.call(e) : h.call(e, t); var o, a, i = [],
                        c = r(e.length); for (a = 0; a < c; a++) a in e && i.push(e[a]);
                    i = s(i, C(t)), o = i.length, a = 0; while (a < o) e[a] = i[a++]; while (a < c) delete e[a++]; return e } }) }, "512c": function(t, e, o) { var a = o("342f"),
                l = a.match(/AppleWebKit\/(\d+)\./);
            t.exports = !!l && +l[1] }, 5319: function(t, e, o) { "use strict"; var a = o("d784"),
                l = o("d039"),
                n = o("825a"),
                r = o("50c4"),
                i = o("a691"),
                s = o("1d80"),
                c = o("8aa5"),
                u = o("0cb2"),
                d = o("14c3"),
                p = o("b622"),
                f = p("replace"),
                m = Math.max,
                h = Math.min,
                b = function(t) { return void 0 === t ? t : String(t) },
                g = function() { return "$0" === "a".replace(/./, "$0") }(),
                v = function() { return !!/./ [f] && "" === /./ [f]("a", "$0") }(),
                S = !l((function() { var t = /./; return t.exec = function() { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") }));
            a("replace", (function(t, e, o) { var a = v ? "$" : "$0"; return [function(t, o) { var a = s(this),
                        l = void 0 == t ? void 0 : t[f]; return void 0 !== l ? l.call(t, a, o) : e.call(String(a), t, o) }, function(t, l) { if ("string" === typeof l && -1 === l.indexOf(a) && -1 === l.indexOf("$<")) { var s = o(e, this, t, l); if (s.done) return s.value } var p = n(this),
                        f = String(t),
                        g = "function" === typeof l;
                    g || (l = String(l)); var v = p.global; if (v) { var S = p.unicode;
                        p.lastIndex = 0 } var x = []; while (1) { var C = d(p, f); if (null === C) break; if (x.push(C), !v) break; var y = String(C[0]); "" === y && (p.lastIndex = c(f, r(p.lastIndex), S)) } for (var _ = "", R = 0, k = 0; k < x.length; k++) { C = x[k]; for (var U = String(C[0]), w = m(h(i(C.index), f.length), 0), A = [], E = 1; E < C.length; E++) A.push(b(C[E])); var L = C.groups; if (g) { var P = [U].concat(A, w, f);
                            void 0 !== L && P.push(L); var I = String(l.apply(void 0, P)) } else I = u(U, f, w, A, L, l);
                        w >= R && (_ += f.slice(R, w) + I, R = w + U.length) } return _ + f.slice(R) }] }), !S || !g || v) }, "8aa5": function(t, e, o) { "use strict"; var a = o("6547").charAt;
            t.exports = function(t, e, o) { return e + (o ? a(t, e).length : 1) } }, 9263: function(t, e, o) { "use strict"; var a = o("ad6d"),
                l = o("9f7f"),
                n = o("5692"),
                r = o("7c73"),
                i = o("69f3").get,
                s = o("fce3"),
                c = o("107c"),
                u = RegExp.prototype.exec,
                d = n("native-string-replace", String.prototype.replace),
                p = u,
                f = function() { var t = /a/,
                        e = /b*/g; return u.call(t, "a"), u.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex }(),
                m = l.UNSUPPORTED_Y || l.BROKEN_CARET,
                h = void 0 !== /()??/.exec("")[1],
                b = f || h || m || s || c;
            b && (p = function(t) { var e, o, l, n, s, c, b, g = this,
                    v = i(g),
                    S = v.raw; if (S) return S.lastIndex = g.lastIndex, e = p.call(S, t), g.lastIndex = S.lastIndex, e; var x = v.groups,
                    C = m && g.sticky,
                    y = a.call(g),
                    _ = g.source,
                    R = 0,
                    k = t; if (C && (y = y.replace("y", ""), -1 === y.indexOf("g") && (y += "g"), k = String(t).slice(g.lastIndex), g.lastIndex > 0 && (!g.multiline || g.multiline && "\n" !== t[g.lastIndex - 1]) && (_ = "(?: " + _ + ")", k = " " + k, R++), o = new RegExp("^(?:" + _ + ")", y)), h && (o = new RegExp("^" + _ + "$(?!\\s)", y)), f && (l = g.lastIndex), n = u.call(C ? o : g, k), C ? n ? (n.input = n.input.slice(R), n[0] = n[0].slice(R), n.index = g.lastIndex, g.lastIndex += n[0].length) : g.lastIndex = 0 : f && n && (g.lastIndex = g.global ? n.index + n[0].length : l), h && n && n.length > 1 && d.call(n[0], o, (function() { for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (n[s] = void 0) })), n && x)
                    for (n.groups = c = r(null), s = 0; s < x.length; s++) b = x[s], c[b[0]] = n[b[1]]; return n }), t.exports = p }, "9f7f": function(t, e, o) { var a = o("d039"),
                l = function(t, e) { return RegExp(t, e) };
            e.UNSUPPORTED_Y = a((function() { var t = l("a", "y"); return t.lastIndex = 2, null != t.exec("abcd") })), e.BROKEN_CARET = a((function() { var t = l("^r", "gy"); return t.lastIndex = 2, null != t.exec("str") })) }, a640: function(t, e, o) { "use strict"; var a = o("d039");
            t.exports = function(t, e) { var o = [][t]; return !!o && a((function() { o.call(null, e || function() { throw 1 }, 1) })) } }, a9c7: function(t, e, o) { "use strict";
            o.r(e); var a = function() { var t = this,
                        e = t.$createElement,
                        o = t._self._c || e; return o("div", [o("el-row", { staticStyle: { "margin-top": "10px" } }, [o("el-col", [o("el-card", { staticStyle: { "margin-top": "20px", "max-width": "800px", margin: "auto", opacity: "0.8", "blackground-color": "#0F4677", "border-radius": "5px" } }, [o("div", { staticStyle: { "blackground-color": "#0F4677", "text-align": "center", "font-size": "25px !important", "font-weight": "bold !important" }, attrs: { slot: "header" }, slot: "header" }, [o("svg-icon", { staticStyle: { "margin-left": "20px" }, attrs: { "icon-class": "lock", title: "完整魔改版:v1.2" } }), t._v(" つつの订阅转换 "), o("svg-icon", { staticStyle: { "margin-left": "10px" }, attrs: { "icon-class": "telegram", title: "加入Telegram吹水群" }, on: { click: t.gotoTgChannel } })], 1), o("el-container", [o("el-form", { staticStyle: { width: "100%" }, attrs: { model: t.form, "label-width": "80px", "label-position": "left" } }, [o("el-form-item", { attrs: { label: "进阶选项:" } }, [o("div", { staticClass: "switch" }, [o("input", { staticClass: "cmn-toggle cmn-toggle-round", attrs: { id: "cmn-toggle-1", type: "checkbox" } }), o("label", { attrs: { for: "cmn-toggle-1" } })]), o("div", { staticClass: "switch" }, [o("input", { staticClass: "cmn-toggle cmn-toggle-round-flat", attrs: { id: "cmn-toggle-4", click: "selectMode()", type: "checkbox" } }), o("label", { attrs: { for: "cmn-toggle-4" } })]), o("div", { staticClass: "switch" }, [o("input", { staticClass: "cmn-toggle cmn-toggle-yes-no", attrs: { id: "cmn-toggle-7", type: "checkbox" } }), o("label", { staticClass: "cmn-toggle-label", attrs: { for: "cmn-toggle-7", "data-on": "1", "data-off": "2" } })]), o("el-radio", { attrs: { label: "1" }, model: { value: t.advanced, callback: function(e) { t.advanced = e }, expression: "advanced" } }, [t._v("基础模式")]), o("el-radio", { attrs: { label: "2" }, model: { value: t.advanced, callback: function(e) { t.advanced = e }, expression: "advanced" } }, [t._v("进阶模式")])], 1), o("el-form-item", { attrs: { label: "订阅链接:" } }, [o("el-input", { attrs: { type: "textarea", rows: "3", placeholder: "支持订阅或ss/ssr/vmess/trojan链接，多个链接每行一个或用 | 分隔" }, on: { blur: t.saveSubUrl }, model: { value: t.form.sourceSubUrl, callback: function(e) { t.$set(t.form, "sourceSubUrl", e) }, expression: "form.sourceSubUrl" } })], 1), o("el-form-item", { attrs: { label: "生成类型:" } }, [o("el-select", { staticStyle: { width: "100%" }, model: { value: t.form.clientType, callback: function(e) { t.$set(t.form, "clientType", e) }, expression: "form.clientType" } }, t._l(t.options.clientTypes, (function(t, e) { return o("el-option", { key: e, attrs: { label: e, value: t } }) })), 1)], 1), o("el-form-item", { attrs: { label: "远程配置:" } }, [o("el-select", { staticStyle: { width: "100%" }, attrs: { "allow-create": "", filterable: "", placeholder: "请选择" }, model: { value: t.form.remoteConfig, callback: function(e) { t.$set(t.form, "remoteConfig", e) }, expression: "form.remoteConfig" } }, t._l(t.options.remoteConfig, (function(e) { return o("el-option-group", { key: e.label, attrs: { label: e.label } }, t._l(e.options, (function(t) { return o("el-option", { key: t.value, attrs: { label: t.label, value: t.value } }) })), 1) })), 1)], 1), o("el-form-item", { attrs: { label: "后端地址:" } }, [o("el-select", { staticStyle: { width: "100%" }, attrs: { "allow-create": "", filterable: "", placeholder: "请选择" }, model: { value: t.form.customBackend, callback: function(e) { t.$set(t.form, "customBackend", e) }, expression: "form.customBackend" } }, t._l(t.options.customBackend, (function(t, e) { return o("el-option", { key: e, attrs: { label: e, value: t } }) })), 1)], 1), "2" === t.advanced ? o("div", [o("el-form-item", { attrs: { label: "包含节点:" } }, [o("el-input", { attrs: { placeholder: "节点名包含的关键字，支持正则" }, model: { value: t.form.includeRemarks, callback: function(e) { t.$set(t.form, "includeRemarks", e) }, expression: "form.includeRemarks" } })], 1), o("el-form-item", { attrs: { label: "排除节点:" } }, [o("el-input", { attrs: { placeholder: "节点名不包含的关键字，支持正则" }, model: { value: t.form.excludeRemarks, callback: function(e) { t.$set(t.form, "excludeRemarks", e) }, expression: "form.excludeRemarks" } })], 1), o("el-form-item", { attrs: { label: "输出名称:" } }, [o("el-input", { attrs: { placeholder: "返回的订阅文件名" }, model: { value: t.form.filename, callback: function(e) { t.$set(t.form, "filename", e) }, expression: "form.filename" } })], 1), o("el-form-item", { attrs: { "label-width": "0px" } }, [o("el-row", { attrs: { type: "flex" } }, [o("el-col", [o("el-checkbox", { attrs: { label: "输出为 Node List", border: "" }, model: { value: t.form.nodeList, callback: function(e) { t.$set(t.form, "nodeList", e) }, expression: "form.nodeList" } }), o("el-checkbox", { attrs: { label: "Emoji", border: "" }, model: { value: t.form.emoji, callback: function(e) { t.$set(t.form, "emoji", e) }, expression: "form.emoji" } }), o("el-checkbox", { attrs: { label: "排序节点", border: "" }, model: { value: t.form.sort, callback: function(e) { t.$set(t.form, "sort", e) }, expression: "form.sort" } }), o("el-checkbox", { attrs: { label: "启用 UDP", border: "" }, on: { change: function(e) { t.needUdp = !0 } }, model: { value: t.form.udp, callback: function(e) { t.$set(t.form, "udp", e) }, expression: "form.udp" } }), o("el-checkbox", { attrs: { label: "Surge.DoH", border: "" }, model: { value: t.form.tpl.surge.doh, callback: function(e) { t.$set(t.form.tpl.surge, "doh", e) }, expression: "form.tpl.surge.doh" } }), o("el-checkbox", { attrs: { label: "Clash.DoH", border: "" }, model: { value: t.form.tpl.clash.doh, callback: function(e) { t.$set(t.form.tpl.clash, "doh", e) }, expression: "form.tpl.clash.doh" } })], 1)], 1)], 1)], 1) : t._e(), o("div", { staticStyle: { "margin-top": "50px" } }), o("el-divider", { attrs: { "content-position": "center" } }, [o("i", { staticClass: "el-icon-magic-stick" })]), o("el-form-item", { attrs: { label: "定制订阅:" } }, [o("el-input", { staticClass: "copy-content", attrs: { disabled: "" }, model: { value: t.customSubUrl, callback: function(e) { t.customSubUrl = e }, expression: "customSubUrl" } }, [o("el-button", { directives: [{ name: "clipboard", rawName: "v-clipboard:copy", value: t.customSubUrl, expression: "customSubUrl", arg: "copy" }, { name: "clipboard", rawName: "v-clipboard:success", value: t.onCopy, expression: "onCopy", arg: "success" }], ref: "copy-btn", attrs: { slot: "append", icon: "el-icon-document-copy" }, slot: "append" }, [t._v("复制")])], 1)], 1), o("el-form-item", { attrs: { label: "订阅短链:" } }, [o("el-input", { staticClass: "copy-content", attrs: { disabled: "" }, model: { value: t.curtomShortSubUrl, callback: function(e) { t.curtomShortSubUrl = e }, expression: "curtomShortSubUrl" } }, [o("el-button", { directives: [{ name: "clipboard", rawName: "v-clipboard:copy", value: t.curtomShortSubUrl, expression: "curtomShortSubUrl", arg: "copy" }, { name: "clipboard", rawName: "v-clipboard:success", value: t.onCopy, expression: "onCopy", arg: "success" }], ref: "copy-btn", attrs: { slot: "append", icon: "el-icon-document-copy" }, slot: "append" }, [t._v("复制")])], 1)], 1), o("el-form-item", { staticStyle: { "margin-top": "40px", "text-align": "center" }, attrs: { "label-width": "0px" } }, [o("el-button", { staticStyle: { width: "120px" }, attrs: { type: "primary", disabled: 0 === t.form.sourceSubUrl.length }, on: { click: t.makeUrl } }, [t._v("生成订阅链接")]), o("el-button", { staticStyle: { width: "120px" }, attrs: { type: "primary", loading: t.loading, disabled: 0 === t.customSubUrl.length }, on: { click: t.makeShortUrl } }, [t._v("生成短链接")])], 1), o("el-form-item", { staticStyle: { "text-align": "center" }, attrs: { "label-width": "0px" } }, [o("el-button", { staticStyle: { width: "120px" }, attrs: { type: "primary", icon: "el-icon-upload", loading: t.loading }, on: { click: function(e) { t.dialogUploadConfigVisible = !0 } } }, [t._v("上传配置")]), o("el-button", { staticStyle: { width: "120px" }, attrs: { type: "primary", icon: "el-icon-connection", disabled: 0 === t.customSubUrl.length }, on: { click: t.clashInstall } }, [t._v("一键导入Clash")])], 1)], 1)], 1)], 1)], 1)], 1), o("el-dialog", { attrs: { visible: t.dialogUploadConfigVisible, "show-close": !1, "close-on-click-modal": !1, "close-on-press-escape": !1, width: "700px" }, on: { "update:visible": function(e) { t.dialogUploadConfigVisible = e } } }, [o("div", { attrs: { slot: "title" }, slot: "title" }, [t._v(" Remote config upload "), o("el-popover", { staticStyle: { "margin-left": "10px" }, attrs: { trigger: "hover", placement: "right" } }, [o("el-link", { attrs: { type: "primary", href: t.sampleConfig, target: "_blank", icon: "el-icon-info" } }, [t._v("参考配置")]), o("i", { staticClass: "el-icon-question", attrs: { slot: "reference" }, slot: "reference" })], 1)], 1), o("el-form", { attrs: { "label-position": "left" } }, [o("el-form-item", { attrs: { prop: "uploadConfig" } }, [o("el-input", { attrs: { type: "textarea", autosize: { minRows: 15, maxRows: 15 }, maxlength: "10000", "show-word-limit": "" }, model: { value: t.uploadConfig, callback: function(e) { t.uploadConfig = e }, expression: "uploadConfig" } })], 1)], 1), o("div", { staticClass: "dialog-footer", attrs: { slot: "footer" }, slot: "footer" }, [o("el-button", { attrs: { type: "primary" }, on: { click: function(e) { t.uploadConfig = "", t.dialogUploadConfigVisible = !1 } } }, [t._v("取 消")]), o("el-button", { attrs: { type: "primary", disabled: 0 === t.uploadConfig.length }, on: { click: t.confirmUploadConfig } }, [t._v("确 定")])], 1)], 1)], 1) },
                l = [],
                n = (o("ac1f"), o("5319"), o("b64b"), o("d3b7"), o("25f0"), o("4e82"), o("4de4"), "https://github.com/lhl77/sub-web-glorified"),
                r = "https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",
                i = "https://github.com/lhl77/sub-web-glorified",
                s = Object({ VUE_APP_VERCEL_GIT_COMMIT_SHA: "08f931cc993e9a960d07894235ad7524239adf82", VUE_APP_VERCEL_URL: "sub-tsutsu-gtfj02xda-tsutsu.vercel.app", VUE_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "つつ", VUE_APP_VERCEL_GIT_REPO_OWNER: "lhl77", VUE_APP_VERCEL_GIT_REPO_SLUG: "sub-web-tsutsu", VUE_APP_VERCEL_GIT_REPO_ID: "351753539", VUE_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "lhl77", VUE_APP_VERCEL_GIT_PROVIDER: "github", VUE_APP_VERCEL_ENV: "production", VUE_APP_VERCEL_GIT_COMMIT_MESSAGE: "update", VUE_APP_VERCEL_GIT_COMMIT_REF: "master", NODE_ENV: "production", VUE_APP_PROJECT: "https://github.com/lhl77/sub-web-glorified", VUE_APP_BOT_LINK: "https://t.me/water777777", VUE_APP_BACKEND_RELEASE: "https://github.com/lhl77/sub-web-glorified", VUE_APP_SUBCONVERTER_REMOTE_CONFIG: "https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini", VUE_APP_MYURLS_DEFAULT_BACKEND: "https://suo.yt", VUE_APP_CONFIG_UPLOAD_BACKEND: "https://api.wcc.best", VUE_APP_USE_STORAGE: "true", VUE_APP_CACHE_TTL: "86400", BASE_URL: "" }).VUE_APP_SUBCONVERTER_DEFAULT_BACKEND + "/sub?",
                c = "https://suo.yt/short",
                u = "https://api.wcc.best/config/upload",
                d = "https://t.me/water777777",
                p = { data: function() { var t = { backendVersion: "0.6.4", advanced: "1", isPC: !0, options: { clientTypes: { Clash: "clash", ClashR: "clashr", Surge2: "surge&ver=2", Surge3: "surge&ver=3", Surge4: "surge&ver=4", Quantumult: "quan", "Quantumult X": "quanx", Loon: "loon", Mellow: "mellow", Surfboard: "surfboard", "Shadowsocks(SIP002)": "ss", "Shadowsocks Android(SIP008)": "sssub", ShadowsocksR: "ssr", ShadowsocksD: "ssd", V2Ray: "v2ray", Trojan: "trojan", "混合订阅（mixed）": "mixed", "自动判断客户端": "auto" }, customBackend: { "api.tsutsu.cc (つつ提供-香港CN2稳定)": "https://api.tsutsu.cc/sub?", "api2.tsutsu.cc (つつ提供-香港CN2备用)": "https://api2.tsutsu.cc/sub?", "api.v1.mk（肥羊提供-四端八核负载)": "https://api.v1.mk/sub?", "subcon.dlj.tf (subconverter作者提供) ": "https://subcon.dlj.tf/sub?", "api.dler.io (sub作者&lhie1提供)": "https://api.dler.io/sub?", "api.wcc.best (sub-web作者提供)": "https://api.wcc.best/sub?", "api.hope140.live (hope提供-vercel)": "https://api.hope140.live/sub?", "sub.proxypoolv2.tk (Allen Xu提供-vercel)": "https://sub.proxypoolv2.tk/sub?", "sub.id9.cc (品云提供)": "https://sub.id9.cc/sub?", "ll.suying777.com (速鹰提供)": "https://ll.suying777.com/sub?" }, backendOptions: [{ value: "https://api.tsutsu.cc/sub?" }, { value: "https://api2.tsutsu.cc/sub?" }, { value: "https://api.v1.mk/sub?" }, { value: "https://subcon.dlj.tf/sub?" }, { value: "https://api.dler.io/sub?" }, { value: "https://api.wcc.best/sub?" }, { value: "https://api.hope140.live/sub?" }, { value: "https://sub.proxypoolv2.tk/sub?" }, { value: "https://sub.id9.cc/sub?" }, { value: "https://ll.suying777.com/sub?" }], remoteConfig: [{ label: "つつ自用,投稿请tg找 @Ox208", options: [{ label: "つつ自用-完整分组", value: "https://cdn.staticaly.com/gh/lhl77/sub-ini/main/tsutsu-full.ini" }, { label: "つつ自用-完整分组(地区自动选择)", value: "https://cdn.staticaly.com/gh/lhl77/sub-ini/main/tsutsu-full-urltest.ini" }, { label: "つつ自用-Immtel专用(地区自动选择)", value: "https://cdn.staticaly.com/gh/lhl77/sub-ini/main/tsutsu-full-urltest-imm.ini" }, { label: "つつ自用-超jb精简分组(含国内分流)", value: "https://cdn.staticaly.com/gh/lhl77/sub-ini/main/tsutsu-mini-gfw.ini" }] }, { label: "用户投稿", options: [{ label: "hope140自用配置 (与Github同步)", value: "https://cdn.staticaly.com/gh/hope140/Clash/beta/hope140.yaml" }, { label: "hope140去广告配置", value: "https://cdn.staticaly.com/gh/hope140/Clash/beta/Adblock.yaml" }, { label: "hope140全分组", value: "https://cdn.staticaly.com/gh/hope140/Clash/beta/All.yaml" }, { label: "Nine499自用规则", value: "https://cdn.staticaly.com/gh/Nine499/Clash-Rule/master/Rule" }, { label: "AllenXu精简版多国家", value: "https://raw.githubusercontent.com/hyt-allen-xu/webcdn/master/cdn_multicountry.ini" }, { label: "AllenXu小机场专用", value: "https://raw.githubusercontent.com/hyt-allen-xu/webcdn/master/smallairport.ini" }] }, { label: "ACL4SSR", options: [{ label: "ACL4SSR默认", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini" }, { label: "ACL4SSR去广告", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini" }, { label: "ACL4SSR无自动测速", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini" }, { label: "ACL4SSR无广告拦截", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini" }, { label: "ACL4SSR精简版", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini" }, { label: "ACL4SSR精简去广告", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini" }, { label: "ACL4SSR精简多重模式", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_MultiMode.ini" }, { label: "ACL4SSR精简版带港美日国家", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini" }, { label: "ACL4SSR全分组", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini" }, { label: "ACL4SSR全分组多模式", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini" }, { label: "ACL4SSR全分组重度用户", value: "https://cdn.staticaly.com/gh/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini" }] }, { label: "特殊", options: [{ label: "基础无规则", value: "https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini" }] }] }, form: { sourceSubUrl: "", clientType: "", customBackend: "", remoteConfig: "", excludeRemarks: "", includeRemarks: "", filename: "", emoji: !0, nodeList: !1, extraset: !1, sort: !1, udp: !1, tfo: !1, scv: !1, expand: !0, fdn: !1, appendType: !1, insert: !1, new_name: !0, tpl: { surge: { doh: !1 }, clash: { doh: !1 } } }, loading: !1, customSubUrl: "", curtomShortSubUrl: "", dialogUploadConfigVisible: !1, uploadConfig: "", uploadPassword: "", myBot: d, sampleConfig: r, needUdp: !1 },
                            e = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); if (e) { for (var o = t.options.remoteConfig[1].options, a = 0; a < o.length; a++) o[a].label.length > 10 && (o[a].label = o[a].label.replace(/\s.*/, "")); for (var l = {}, n = Object.keys(t.options.customBackend), i = 0; i < n.length; i++) { var s = n[i].replace(/\(.*/, "");
                                l[s] = t.options.customBackend[n[i]] }
                            t.options.customBackend = l } return t }, created: function() { document.title = "つつの订阅转换 ", this.isPC = this.$getOS().isPc, this.form.sourceSubUrl = this.getLocalStorageItem("sourceSubUrl") }, mounted: function() { this.form.clientType = "clash", this.form.customBackend = "https://api.tsutsu.cc/sub?", this.form.remoteConfig = "https://cdn.staticaly.com/gh/lhl77/sub-ini/main/tsutsu-full.ini" }, methods: { onCopy: function() { this.$message.success("Copied!") }, goToProject: function() { window.open(n) }, gotoTgChannel: function() { window.open(d) }, gotoGayhub: function() { window.open(i) }, gotoRemoteConfig: function() { window.open(r) }, clashInstall: function() { if ("" === this.customSubUrl) return this.$message.error("请先填写必填项，生成订阅链接"), !1; var t = "clash://install-config?url=";
                            window.open(t + encodeURIComponent("" !== this.curtomShortSubUrl ? this.curtomShortSubUrl : this.customSubUrl)) }, surgeInstall: function() { if ("" === this.customSubUrl) return this.$message.error("请先填写必填项，生成订阅链接"), !1; var t = "surge://install-config?url=";
                            window.open(t + this.customSubUrl) }, makeUrl: function() { var t = this; if ("" === this.form.sourceSubUrl || "" === this.form.clientType) return this.$message.error("订阅链接与客户端为必填项"), !1; var e = "" === this.form.customBackend ? s : this.form.customBackend,
                                o = "" === this.form.remoteConfig ? "" : this.form.remoteConfig,
                                a = this.form.sourceSubUrl; if (a = a.replace(/(\n|\r|\n\r)/g, "|"), -1 !== a.indexOf("losadhwse") && (-1 !== e.indexOf("py6.pw") || -1 !== e.indexOf("subconverter-web.now.sh") || -1 !== e.indexOf("subconverter.herokuapp.com") || -1 !== e.indexOf("api.wcc.best"))) return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。", "转换错误提示", { confirmButtonText: "确定", callback: function(e) { t.$message({ type: "error", message: "action: ".concat(e) }) } }), !1;
                            this.customSubUrl = e + "target=" + this.form.clientType + "&url=" + encodeURIComponent(a) + "&insert=" + this.form.insert, "" !== o && (this.customSubUrl += "&config=" + encodeURIComponent(o)), "2" === this.advanced && ("" !== this.form.excludeRemarks && (this.customSubUrl += "&exclude=" + encodeURIComponent(this.form.excludeRemarks)), "" !== this.form.includeRemarks && (this.customSubUrl += "&include=" + encodeURIComponent(this.form.includeRemarks)), "" !== this.form.filename && (this.customSubUrl += "&filename=" + encodeURIComponent(this.form.filename)), this.form.appendType && (this.customSubUrl += "&append_type=" + this.form.appendType.toString()), this.customSubUrl += "&emoji=" + this.form.emoji.toString() + "&list=" + this.form.nodeList.toString() + "&tfo=" + this.form.tfo.toString() + "&scv=" + this.form.scv.toString() + "&fdn=" + this.form.fdn.toString() + "&sort=" + this.form.sort.toString() + "&expand=" + this.form.expand.toString(), this.needUdp && (this.customSubUrl += "&udp=" + this.form.udp.toString()), !0 === this.form.tpl.surge.doh && (this.customSubUrl += "&surge.doh=true"), "clash" === this.form.clientType && (!0 === this.form.tpl.clash.doh && (this.customSubUrl += "&clash.doh=true"), this.customSubUrl += "&new_name=" + this.form.new_name.toString())), this.$copyText(this.customSubUrl), this.$message.success("定制订阅已复制到剪贴板") }, makeShortUrl: function() { var t = this; if ("" === this.customSubUrl) return this.$message.warning("请先生成订阅链接，再获取对应短链接"), !1;
                            this.loading = !0; var e = new FormData;
                            e.append("longUrl", btoa(this.customSubUrl)), this.$axios.post(c, e, { header: { "Content-Type": "application/form-data; charset=utf-8" } }).then((function(e) { 1 === e.data.Code && "" !== e.data.ShortUrl ? (t.curtomShortSubUrl = e.data.ShortUrl, t.$copyText(e.data.ShortUrl), t.$message.success("短链接已复制到剪贴板")) : t.$message.error("短链接获取失败：" + e.data.Message) })).catch((function() { t.$message.error("短链接获取失败") })).finally((function() { t.loading = !1 })) }, confirmUploadConfig: function() { var t = this; if ("" === this.uploadConfig) return this.$message.warning("远程配置不能为空"), !1;
                            this.loading = !0; var e = new FormData;
                            e.append("password", this.uploadPassword), e.append("config", this.uploadConfig), this.$axios.post(u, e, { header: { "Content-Type": "application/form-data; charset=utf-8" } }).then((function(e) { 1 === e.data.Code && "" !== e.data.url ? (t.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"), t.form.remoteConfig = e.data.Url, t.$copyText(t.form.remoteConfig), t.dialogUploadConfigVisible = !1) : t.$message.error("远程配置上传失败：" + e.data.Message) })).catch((function() { t.$message.error("远程配置上传失败") })).finally((function() { t.loading = !1 })) }, backendSearch: function(t, e) { var o = this.options.backendOptions,
                                a = t ? o.filter(this.createFilter(t)) : o;
                            e(a) }, createFilter: function(t) { return function(e) { return 0 === e.value.toLowerCase().indexOf(t.toLowerCase()) } }, getBackendVersion: function() { var t = this;
                            this.$axios.get(s.substring(0, s.length - 5) + "/version").then((function(e) { t.backendVersion = e.data.replace(/backend\n$/gm, ""), t.backendVersion = t.backendVersion.replace("subconverter", "") })) }, saveSubUrl: function() { "" !== this.form.sourceSubUrl && this.setLocalStorageItem("sourceSubUrl", this.form.sourceSubUrl) }, getLocalStorageItem: function(t) { var e = +new Date,
                                o = localStorage.getItem(t),
                                a = ""; if (null !== o) { var l = JSON.parse(o);
                                l.expire > e ? a = l.value : localStorage.removeItem(t) } return a }, setLocalStorageItem: function(t, e) { var o = "86400",
                                a = +new Date,
                                l = { setTime: a, ttl: parseInt(o), expire: a + 1e3 * o, value: e };
                            localStorage.setItem(t, JSON.stringify(l)) } } },
                f = p,
                m = o("2877"),
                h = Object(m["a"])(f, a, l, !1, null, null, null);
            e["default"] = h.exports }, ac1f: function(t, e, o) { "use strict"; var a = o("23e7"),
                l = o("9263");
            a({ target: "RegExp", proto: !0, forced: /./.exec !== l }, { exec: l }) }, ad6d: function(t, e, o) { "use strict"; var a = o("825a");
            t.exports = function() { var t = a(this),
                    e = ""; return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e } }, addb: function(t, e) { var o = Math.floor,
                a = function(t, e) { var r = t.length,
                        i = o(r / 2); return r < 8 ? l(t, e) : n(a(t.slice(0, i), e), a(t.slice(i), e), e) },
                l = function(t, e) { var o, a, l = t.length,
                        n = 1; while (n < l) { a = n, o = t[n]; while (a && e(t[a - 1], o) > 0) t[a] = t[--a];
                        a !== n++ && (t[a] = o) } return t },
                n = function(t, e, o) { var a = t.length,
                        l = e.length,
                        n = 0,
                        r = 0,
                        i = []; while (n < a || r < l) n < a && r < l ? i.push(o(t[n], e[r]) <= 0 ? t[n++] : e[r++]) : i.push(n < a ? t[n++] : e[r++]); return i };
            t.exports = a }, b64b: function(t, e, o) { var a = o("23e7"),
                l = o("7b0b"),
                n = o("df75"),
                r = o("d039"),
                i = r((function() { n(1) }));
            a({ target: "Object", stat: !0, forced: i }, { keys: function(t) { return n(l(t)) } }) }, d784: function(t, e, o) { "use strict";
            o("ac1f"); var a = o("6eeb"),
                l = o("9263"),
                n = o("d039"),
                r = o("b622"),
                i = o("9112"),
                s = r("species"),
                c = RegExp.prototype;
            t.exports = function(t, e, o, u) { var d = r(t),
                    p = !n((function() { var e = {}; return e[d] = function() { return 7 }, 7 != "" [t](e) })),
                    f = p && !n((function() { var e = !1,
                            o = /a/; return "split" === t && (o = {}, o.constructor = {}, o.constructor[s] = function() { return o }, o.flags = "", o[d] = /./ [d]), o.exec = function() { return e = !0, null }, o[d](""), !e })); if (!p || !f || o) { var m = /./ [d],
                        h = e(d, "" [t], (function(t, e, o, a, n) { var r = e.exec; return r === l || r === c.exec ? p && !n ? { done: !0, value: m.call(e, o, a) } : { done: !0, value: t.call(o, e, a) } : { done: !1 } }));
                    a(String.prototype, t, h[0]), a(c, d, h[1]) }
                u && i(c[d], "sham", !0) } }, d998: function(t, e, o) { var a = o("342f");
            t.exports = /MSIE|Trident/.test(a) }, fce3: function(t, e, o) { var a = o("d039");
            t.exports = a((function() { var t = RegExp(".", "string".charAt(0)); return !(t.dotAll && t.exec("\n") && "s" === t.flags) })) } }
]);