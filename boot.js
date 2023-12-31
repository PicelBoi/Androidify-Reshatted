! function() {
    ! function(e, t) {
        "use strict";
        var n = "0.7.1",
            i = "",
            o = "?",
            r = "function",
            s = "undefined",
            a = "object",
            c = "major",
            l = "model",
            d = "name",
            u = "type",
            p = "vendor",
            f = "version",
            m = "architecture",
            w = "console",
            h = "mobile",
            g = "tablet",
            v = "smarttv",
            y = {
                extend: function(e, t) {
                    for (var n in t) - 1 !== "browser cpu device engine os".indexOf(n) && t[n].length % 2 === 0 && (e[n] = t[n].concat(e[n]));
                    return e
                },
                has: function(e, t) {
                    return "string" == typeof e ? -1 !== t.toLowerCase().indexOf(e.toLowerCase()) : void 0
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                }
            },
            b = {
                rgx: function() {
                    for (var e, n, i, o, c, l, d, u = 0, p = arguments; u < p.length; u += 2) {
                        var f = p[u],
                            m = p[u + 1];
                        if (typeof e === s) {
                            e = {};
                            for (o in m) c = m[o], typeof c === a ? e[c[0]] = t : e[c] = t
                        }
                        for (n = i = 0; n < f.length; n++)
                            if (l = f[n].exec(this.getUA())) {
                                for (o = 0; o < m.length; o++) d = l[++i], c = m[o], typeof c === a && c.length > 0 ? 2 == c.length ? e[c[0]] = typeof c[1] == r ? c[1].call(this, d) : c[1] : 3 == c.length ? e[c[0]] = typeof c[1] !== r || c[1].exec && c[1].test ? d ? d.replace(c[1], c[2]) : t : d ? c[1].call(this, d, c[2]) : t : 4 == c.length && (e[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : t) : e[c] = d ? d : t;
                                break
                            } if (l) break
                    }
                    return e
                },
                str: function(e, n) {
                    for (var i in n)
                        if (typeof n[i] === a && n[i].length > 0) {
                            for (var r = 0; r < n[i].length; r++)
                                if (y.has(n[i][r], e)) return i === o ? t : i
                        } else if (y.has(n[i], e)) return i === o ? t : i;
                    return e
                }
            },
            x = {
                browser: {
                    oldsafari: {
                        major: {
                            1: ["/8", "/1", "/3"],
                            2: "/4",
                            "?": "/"
                        },
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            RT: "ARM"
                        }
                    }
                }
            },
            E = {
                browser: [
                    [/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i],
                    [d, f, c],
                    [/\s(opr)\/((\d+)?[\w\.]+)/i],
                    [
                        [d, "Opera"], f, c
                    ],
                    [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],
                    [d, f, c],
                    [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],
                    [
                        [d, "IE"], f, c
                    ],
                    [/(yabrowser)\/((\d+)?[\w\.]+)/i],
                    [
                        [d, "Yandex"], f, c
                    ],
                    [/(comodo_dragon)\/((\d+)?[\w\.]+)/i],
                    [
                        [d, /_/g, " "], f, c
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],
                    [d, f, c],
                    [/(dolfin)\/((\d+)?[\w\.]+)/i],
                    [
                        [d, "Dolphin"], f, c
                    ],
                    [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],
                    [
                        [d, "Chrome"], f, c
                    ],
                    [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [f, c, [d, "Mobile Safari"]],
                    [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],
                    [f, c, d],
                    [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],
                    [d, [c, b.str, x.browser.oldsafari.major],
                        [f, b.str, x.browser.oldsafari.version]
                    ],
                    [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i],
                    [d, f, c],
                    [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],
                    [
                        [d, "Netscape"], f, c
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i],
                    [d, f, c]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [m, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [m, y.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [m, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [m, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [m, /ower/, "", y.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [m, "sparc"]
                    ],
                    [/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [m, y.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [l, p, [u, g]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [l, [p, "Apple"],
                        [u, g]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [l, "Apple TV"],
                        [p, "Apple"]
                    ],
                    [/(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [p, l, [u, g]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [l, [p, "Amazon"],
                        [u, g]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [l, b.str, x.device.amazon.model],
                        [p, "Amazon"],
                        [u, h]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [l, p, [u, h]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [l, [p, "Apple"],
                        [u, h]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [p, l, [u, h]],
                    [/\((bb10);\s(\w+)/i],
                    [
                        [p, "BlackBerry"], l, [u, h]
                    ],
                    [/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7))/i],
                    [
                        [p, "Asus"], l, [u, g]
                    ],
                    [/(sony)\s(tablet\s[ps])/i],
                    [p, l, [u, g]],
                    [/(nintendo)\s([wids3u]+)/i],
                    [p, l, [u, w]],
                    [/((playstation)\s[3portablevi]+)/i],
                    [
                        [p, "Sony"], l, [u, w]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [p, b.str, x.device.sprint.vendor],
                        [l, b.str, x.device.sprint.model],
                        [u, h]
                    ],
                    [/(Lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [
                        [p, "Lenovo"], l, [u, g]
                    ],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [p, [l, /_/g, " "],
                        [u, h]
                    ],
                    [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i],
                    [
                        [p, "Motorola"], l, [u, h]
                    ],
                    [/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i],
                    [
                        [p, "Motorola"], l, [u, g]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [p, "Samsung"], l, [u, g]
                    ],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [p, "Samsung"], l, [u, h]
                    ],
                    [/(sie)-(\w+)*/i],
                    [
                        [p, "Siemens"], l, [u, h]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [p, "Nokia"], l, [u, h]
                    ],
                    [/android\s3\.[\s\w-;]{10}((a\d{3}))/i],
                    [
                        [p, "Acer"], l, [u, g]
                    ],
                    [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [p, "LG"], l, [u, g]
                    ],
                    [/(lg) netcast\.tv/i],
                    [p, [u, v]],
                    [/((nexus\s[45]))/i, /(lg)[e;\s\/-]+(\w+)*/i],
                    [
                        [p, "LG"], l, [u, h]
                    ],
                    [/android.+((ideatab[a-z0-9\-\s]+))/i],
                    [
                        [p, "Lenovo"], l, [u, g]
                    ],
                    [/linux;.+((jolla));/i],
                    [p, l, [u, h]],
                    [/(mobile|tablet);.+rv\:.+gecko\//i],
                    [
                        [u, y.lowerize], p, l
                    ]
                ],
                engine: [
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [d, f],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [f, d]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [d, f],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [d, [f, b.str, x.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [d, "Windows"],
                        [f, b.str, x.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [d, "BlackBerry"], f
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [d, f],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [d, "Symbian"], f
                    ],
                    [/\((series40);/i],
                    [d],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [d, "Firefox OS"], f
                    ],
                    [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [d, f],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [d, "Chromium OS"], f
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [d, "Solaris"], f
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [d, f],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [d, "iOS"],
                        [f, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],
                    [d, [f, /_/g, "."]],
                    [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i],
                    [d, f]
                ]
            },
            k = function(t, n) {
                if (!(this instanceof k)) return new k(t, n).getResult();
                var o = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i),
                    r = n ? y.extend(E, n) : E;
                this.getBrowser = function() {
                    return b.rgx.apply(this, r.browser)
                }, this.getCPU = function() {
                    return b.rgx.apply(this, r.cpu)
                }, this.getDevice = function() {
                    return b.rgx.apply(this, r.device)
                }, this.getEngine = function() {
                    return b.rgx.apply(this, r.engine)
                }, this.getOS = function() {
                    return b.rgx.apply(this, r.os)
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return o
                }, this.setUA = function(e) {
                    return o = e, this
                }, this.setUA(o)
            };
        if (k.VERSION = n, k.BROWSER = {
                NAME: d,
                MAJOR: c,
                VERSION: f
            }, k.CPU = {
                ARCHITECTURE: m
            }, k.DEVICE = {
                MODEL: l,
                VENDOR: p,
                TYPE: u,
                CONSOLE: w,
                MOBILE: h,
                SMARTTV: v,
                TABLET: g
            }, k.ENGINE = {
                NAME: d,
                VERSION: f
            }, k.OS = {
                NAME: d,
                VERSION: f
            }, typeof exports !== s) typeof module !== s && module.exports && (exports = module.exports = k), exports.UAParser = k;
        else {
            e.UAParser = k, typeof define === r && define.amd && define(function() {
                return k
            });
            var S = e.jQuery || e.Zepto;
            if (typeof S !== s) {
                var C = new k;
                S.ua = C.getResult(), S.ua.get = function() {
                    return C.getUA()
                }, S.ua.set = function(e) {
                    C.setUA(e);
                    var t = C.getResult();
                    for (var n in t) S.ua[n] = t[n]
                }
            }
        }
    }(this), window.Modernizr = function(e, t, n) {
            function i(e) {
                m.cssText = e
            }

            function o(e, t) {
                return typeof e === t
            }
            var r, s, a, c = "2.8.3",
                l = {},
                d = !0,
                u = t.documentElement,
                p = "modernizr",
                f = t.createElement(p),
                m = f.style,
                w = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                h = {},
                g = [],
                v = g.slice,
                y = function(e, n, i, o) {
                    var r, s, a, c, l = t.createElement("div"),
                        d = t.body,
                        f = d || t.createElement("body");
                    if (parseInt(i, 10))
                        for (; i--;) a = t.createElement("div"), a.id = o ? o[i] : p + (i + 1), l.appendChild(a);
                    return r = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""), l.id = p, (d ? l : f).innerHTML += r, f.appendChild(l), d || (f.style.background = "", f.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(f)), s = n(l, e), d ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), u.style.overflow = c), !!s
                },
                b = {}.hasOwnProperty;
            a = o(b, "undefined") || o(b.call, "undefined") ? function(e, t) {
                return t in e && o(e.constructor.prototype[t], "undefined")
            } : function(e, t) {
                return b.call(e, t)
            }, Function.prototype.bind || (Function.prototype.bind = function(e) {
                var t = this;
                if ("function" != typeof t) throw new TypeError;
                var n = v.call(arguments, 1),
                    i = function() {
                        if (this instanceof i) {
                            var o = function() {};
                            o.prototype = t.prototype;
                            var r = new o,
                                s = t.apply(r, n.concat(v.call(arguments)));
                            return Object(s) === s ? s : r
                        }
                        return t.apply(e, n.concat(v.call(arguments)))
                    };
                return i
            }), h.canvas = function() {
                var e = t.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            }, h.webgl = function() {
                return !!e.WebGLRenderingContext
            }, h.touch = function() {
                var n;
                return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : y(["@media (", w.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                    n = 9 === e.offsetTop
                }), n
            }, h.video = function() {
                var e = t.createElement("video"),
                    n = !1;
                try {
                    (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (i) {}
                return n
            }, h.localstorage = function() {
                try {
                    return localStorage.setItem(p, p), localStorage.removeItem(p), !0
                } catch (e) {
                    return !1
                }
            }, h.webworkers = function() {
                return !!e.Worker
            };
            for (var x in h) a(h, x) && (s = x.toLowerCase(), l[s] = h[x](), g.push((l[s] ? "" : "no-") + s));
            return l.addTest = function(e, t) {
                    if ("object" == typeof e)
                        for (var i in e) a(e, i) && l.addTest(i, e[i]);
                    else {
                        if (e = e.toLowerCase(), l[e] !== n) return l;
                        t = "function" == typeof t ? t() : t, "undefined" != typeof d && d && (u.className += " " + (t ? "" : "no-") + e), l[e] = t
                    }
                    return l
                }, i(""), f = r = null,
                function(e, t) {
                    function n(e, t) {
                        var n = e.createElement("p"),
                            i = e.getElementsByTagName("head")[0] || e.documentElement;
                        return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                    }

                    function i() {
                        var e = v.elements;
                        return "string" == typeof e ? e.split(" ") : e
                    }

                    function o(e) {
                        var t = g[e[w]];
                        return t || (t = {}, h++, e[w] = h, g[h] = t), t
                    }

                    function r(e, n, i) {
                        if (n || (n = t), d) return n.createElement(e);
                        i || (i = o(n));
                        var r;
                        return r = i.cache[e] ? i.cache[e].cloneNode() : m.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !r.canHaveChildren || f.test(e) || r.tagUrn ? r : i.frag.appendChild(r)
                    }

                    function s(e, n) {
                        if (e || (e = t), d) return e.createDocumentFragment();
                        n = n || o(e);
                        for (var r = n.frag.cloneNode(), s = 0, a = i(), c = a.length; c > s; s++) r.createElement(a[s]);
                        return r
                    }

                    function a(e, t) {
                        t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                            return v.shivMethods ? r(n, e, t) : t.createElem(n)
                        }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
                            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                        }) + ");return n}")(v, t.frag)
                    }

                    function c(e) {
                        e || (e = t);
                        var i = o(e);
                        return !v.shivCSS || l || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || a(e, i), e
                    }
                    var l, d, u = "3.7.0",
                        p = e.html5 || {},
                        f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        w = "_html5shiv",
                        h = 0,
                        g = {};
                    ! function() {
                        try {
                            var e = t.createElement("a");
                            e.innerHTML = "<xyz></xyz>", l = "hidden" in e, d = 1 == e.childNodes.length || function() {
                                t.createElement("a");
                                var e = t.createDocumentFragment();
                                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                            }()
                        } catch (n) {
                            l = !0, d = !0
                        }
                    }();
                    var v = {
                        elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                        version: u,
                        shivCSS: p.shivCSS !== !1,
                        supportsUnknownElements: d,
                        shivMethods: p.shivMethods !== !1,
                        type: "default",
                        shivDocument: c,
                        createElement: r,
                        createDocumentFragment: s
                    };
                    e.html5 = v, c(t)
                }(this, t), l._version = c, l._prefixes = w, l.testStyles = y, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + g.join(" ") : ""), l
        }(this, this.document),
        function(e, t, n) {
            function i(e) {
                return "[object Function]" == h.call(e)
            }

            function o(e) {
                return "string" == typeof e
            }

            function r() {}

            function s(e) {
                return !e || "loaded" == e || "complete" == e || "uninitialized" == e
            }

            function a() {
                var e = g.shift();
                v = 1, e ? e.t ? m(function() {
                    ("c" == e.t ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
                }, 0) : (e(), a()) : v = 0
            }

            function c(e, n, i, o, r, c, l) {
                function d(t) {
                    if (!f && s(u.readyState) && (y.r = f = 1, !v && a(), u.onload = u.onreadystatechange = null, t)) {
                        "img" != e && m(function() {
                            x.removeChild(u)
                        }, 50);
                        for (var i in T[n]) T[n].hasOwnProperty(i) && T[n][i].onload()
                    }
                }
                var l = l || p.errorTimeout,
                    u = t.createElement(e),
                    f = 0,
                    h = 0,
                    y = {
                        t: i,
                        s: n,
                        e: r,
                        a: c,
                        x: l
                    };
                1 === T[n] && (h = 1, T[n] = []), "object" == e ? u.data = n : (u.src = n, u.type = e), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
                    d.call(this, h)
                }, g.splice(o, 0, y), "img" != e && (h || 2 === T[n] ? (x.insertBefore(u, b ? null : w), m(d, l)) : T[n].push(u))
            }

            function l(e, t, n, i, r) {
                return v = 0, t = t || "j", o(e) ? c("c" == t ? k : E, e, t, this.i++, n, i, r) : (g.splice(this.i++, 0, e), 1 == g.length && a()), this
            }

            function d() {
                var e = p;
                return e.loader = {
                    load: l,
                    i: 0
                }, e
            }
            var u, p, f = t.documentElement,
                m = e.setTimeout,
                w = t.getElementsByTagName("script")[0],
                h = {}.toString,
                g = [],
                v = 0,
                y = "MozAppearance" in f.style,
                b = y && !!t.createRange().compareNode,
                x = b ? f : w.parentNode,
                f = e.opera && "[object Opera]" == h.call(e.opera),
                f = !!t.attachEvent && !f,
                E = y ? "object" : f ? "script" : "img",
                k = f ? "script" : E,
                S = Array.isArray || function(e) {
                    return "[object Array]" == h.call(e)
                },
                C = [],
                T = {},
                N = {
                    timeout: function(e, t) {
                        return t.length && (e.timeout = t[0]), e
                    }
                };
            p = function(e) {
                function t(e) {
                    var t, n, i, e = e.split("!"),
                        o = C.length,
                        r = e.pop(),
                        s = e.length,
                        r = {
                            url: r,
                            origUrl: r,
                            prefixes: e
                        };
                    for (n = 0; s > n; n++) i = e[n].split("="), (t = N[i.shift()]) && (r = t(r, i));
                    for (n = 0; o > n; n++) r = C[n](r);
                    return r
                }

                function s(e, o, r, s, a) {
                    var c = t(e),
                        l = c.autoCallback;
                    c.url.split(".").pop().split("?").shift(), c.bypass || (o && (o = i(o) ? o : o[e] || o[s] || o[e.split("/").pop().split("?")[0]]), c.instead ? c.instead(e, o, r, s, a) : (T[c.url] ? c.noexec = !0 : T[c.url] = 1, r.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(o) || i(l)) && r.load(function() {
                        d(), o && o(c.origUrl, a, s), l && l(c.origUrl, a, s), T[c.url] = 2
                    })))
                }

                function a(e, t) {
                    function n(e, n) {
                        if (e) {
                            if (o(e)) n || (u = function() {
                                var e = [].slice.call(arguments);
                                p.apply(this, e), f()
                            }), s(e, u, t, 0, l);
                            else if (Object(e) === e)
                                for (c in a = function() {
                                        var t, n = 0;
                                        for (t in e) e.hasOwnProperty(t) && n++;
                                        return n
                                    }(), e) e.hasOwnProperty(c) && (!n && !--a && (i(u) ? u = function() {
                                    var e = [].slice.call(arguments);
                                    p.apply(this, e), f()
                                } : u[c] = function(e) {
                                    return function() {
                                        var t = [].slice.call(arguments);
                                        e && e.apply(this, t), f()
                                    }
                                }(p[c])), s(e[c], u, t, c, l))
                        } else !n && f()
                    }
                    var a, c, l = !!e.test,
                        d = e.load || e.both,
                        u = e.callback || r,
                        p = u,
                        f = e.complete || r;
                    n(l ? e.yep : e.nope, !!d), d && n(d)
                }
                var c, l, u = this.yepnope.loader;
                if (o(e)) s(e, 0, u, 0);
                else if (S(e))
                    for (c = 0; c < e.length; c++) l = e[c], o(l) ? s(l, 0, u, 0) : S(l) ? p(l) : Object(l) === l && a(l, u);
                else Object(e) === e && a(e, u)
            }, p.addPrefix = function(e, t) {
                N[e] = t
            }, p.addFilter = function(e) {
                C.push(e)
            }, p.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", u = function() {
                t.removeEventListener("DOMContentLoaded", u, 0), t.readyState = "complete"
            }, 0)), e.yepnope = d(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, n, i, o, c, l) {
                var d, u, f = t.createElement("script"),
                    o = o || p.errorTimeout;
                f.src = e;
                for (u in i) f.setAttribute(u, i[u]);
                n = l ? a : n || r, f.onreadystatechange = f.onload = function() {
                    !d && s(f.readyState) && (d = 1, n(), f.onload = f.onreadystatechange = null)
                }, m(function() {
                    d || (d = 1, n(1))
                }, o), c ? f.onload() : w.parentNode.insertBefore(f, w)
            }, e.yepnope.injectCss = function(e, n, i, o, s, c) {
                var l, o = t.createElement("link"),
                    n = c ? a : n || r;
                o.href = e, o.rel = "stylesheet", o.type = "text/css";
                for (l in i) o.setAttribute(l, i[l]);
                s || (w.parentNode.insertBefore(o, w), m(n, 0))
            }
        }(this, document), Modernizr.load = function() {
            yepnope.apply(window, [].slice.call(arguments, 0))
        },
        function() {
            function e() {
                var e = a.device.model ? a.device.model.toLowerCase() : "",
                    t = a.device.vendor ? a.device.vendor.toLowerCase() : "",
                    n = a.device.type ? a.device.type.toLowerCase() : "";
                return "mobile" == n && "htc" == t && "one" == e ? !0 : "tablet" == n && "asus" == t && "nexus 7" == e ? !0 : "tablet" == n && "samsung" == t && "nexus 10" == e ? !0 : /ipad|iphone|ipod/i.test(e) && !r ? !0 : !1
            }

            function t() {
                return null != window.screen ? window.screen.availWidth : null != window.innerWidth ? window.innerWidth : document.body.clientWidth
            }

            function n() {
                return null != window.screen ? window.screen.availHeight : null != window.innerHeight ? window.innerHeight : document.body.clientHeight
            }

            function i() {
                var e = 700;
                return Math.min(t(), n()) <= e
            } {
                var o = document.createElement("canvas"),
                    r = o.getContext("webgl"),
                    s = new UAParser,
                    a = s.getResult();
                a.os.name
            }
            if (ie9 || !Modernizr.canvas && !r) {
                var c = document.getElementById("browser-unsupported"),
                    l = document.getElementById("content");
                l.parentElement.removeChild(l), document.body.className = "", c.style.display = "block"
            }
            window.slow = e(), window.small = i(),
                function() {
                    window.performance || (window.performance = {
                        now: function() {
                            return Date.now()
                        }
                    }), Object.defineProperty || (Object.defineProperty = function() {}), Object.create || (Object.create = function() {})
                }()
        }()
}();