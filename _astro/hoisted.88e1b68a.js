import "./Navbar.astro_astro_type_script_index_0_lang.849d72e6.js";
function lr(t) {
    if (void 0 === t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function nu(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
var Zs, je, _e, le, At, Ss, to, fu, _u, pi, nn, St = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, wi = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Bt = 1e8, ie = 1 / Bt, bs = 2 * Math.PI, Ra = bs / 4, La = 0, su = Math.sqrt, za = Math.cos, Ia = Math.sin, ke = function(t) {
    return "string" == typeof t
}, de = function(t) {
    return "function" == typeof t
}, Dr = function(t) {
    return "number" == typeof t
}, Js = function(t) {
    return typeof t > "u"
}, sr = function(t) {
    return "object" == typeof t
}, _t = function(t) {
    return !1 !== t
}, eo = function() {
    return typeof window < "u"
}, dn = function(t) {
    return de(t) || ke(t)
}, ou = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
, Ke = Array.isArray, Ts = /(?:-?\.?\d|\.)+/gi, uu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Di = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, fs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, au = /[+-]=-?[.\d]+/, lu = /[^,'"\[\]\s]+/gi, Na = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Pt = {}, Wn = {}, cu = function(t) {
    return (Wn = ri(t, Pt)) && pt
}, ro = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, Hn = function(t, e) {
    return !e && console.warn(t)
}, hu = function(t, e) {
    return t && (Pt[t] = e) && Wn && (Wn[t] = e) || Pt
}, tn = function() {
    return 0
}, Ya = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Sn = {
    suppressEvents: !0,
    kill: !1
}, Xa = {
    suppressEvents: !0
}, io = {}, br = [], Ps = {}, Et = {}, cs = {}, Eo = 30, Pn = [], no = "", so = function(t) {
    var e, r, n = t[0];
    if (sr(n) || de(n) || (t = [t]),
    !(e = (n._gsap || {}).harness)) {
        for (r = Pn.length; r-- && !Pn[r].targetTest(n); )
            ;
        e = Pn[r]
    }
    for (r = t.length; r--; )
        t[r] && (t[r]._gsap || (t[r]._gsap = new zu(t[r],e))) || t.splice(r, 1);
    return t
}, jr = function(t) {
    return t._gsap || so(Rt(t))[0]._gsap
}, du = function(t, e, r) {
    return (r = t[e]) && de(r) ? t[e]() : Js(r) && t.getAttribute && t.getAttribute(e) || r
}, dt = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, ge = function(t) {
    return Math.round(1e5 * t) / 1e5 || 0
}, Le = function(t) {
    return Math.round(1e7 * t) / 1e7 || 0
}, Ci = function(t, e) {
    var r = e.charAt(0)
      , n = parseFloat(e.substr(2));
    return t = parseFloat(t),
    "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
}, Va = function(t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; )
        ;
    return n < r
}, Gn = function() {
    var t, e, r = br.length, n = br.slice(0);
    for (Ps = {},
    br.length = 0,
    t = 0; t < r; t++)
        (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
}, Du = function(t, e, r, n) {
    br.length && !je && Gn(),
    t.render(e, r, n || je && e < 0 && (t._initted || t._startAt)),
    br.length && !je && Gn()
}, pu = function(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(lu).length < 2 ? e : ke(t) ? t.trim() : t
}, gu = function(t) {
    return t
}, It = function(t, e) {
    for (var r in e)
        r in t || (t[r] = e[r]);
    return t
}, Ua = function(t) {
    return function(e, r) {
        for (var n in r)
            n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
    }
}, ri = function(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t
}, wo = function t(e, r) {
    for (var n in r)
        "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = sr(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
    return e
}, qn = function(t, e) {
    var r, n = {};
    for (r in t)
        r in e || (n[r] = t[r]);
    return n
}, $i = function(t) {
    var e = t.parent || le
      , r = t.keyframes ? Ua(Ke(t.keyframes)) : It;
    if (_t(t.inherit))
        for (; e; )
            r(t, e.vars.defaults),
            e = e.parent || e._dp;
    return t
}, $a = function(t, e) {
    for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
        ;
    return r < 0
}, mu = function(t, e, r, n, i) {
    void 0 === r && (r = "_first"),
    void 0 === n && (n = "_last");
    var s, o = t[n];
    if (i)
        for (s = e[i]; o && o[i] > s; )
            o = o._prev;
    return o ? (e._next = o._next,
    o._next = e) : (e._next = t[r],
    t[r] = e),
    e._next ? e._next._prev = e : t[n] = e,
    e._prev = o,
    e.parent = e._dp = t,
    e
}, ns = function(t, e, r, n) {
    void 0 === r && (r = "_first"),
    void 0 === n && (n = "_last");
    var i = e._prev
      , s = e._next;
    i ? i._next = s : t[r] === e && (t[r] = s),
    s ? s._prev = i : t[n] === e && (t[n] = i),
    e._next = e._prev = e.parent = null
}, Pr = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, Kr = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; )
            r._dirty = 1,
            r = r.parent;
    return t
}, Wa = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
        e.totalDuration(),
        e = e.parent;
    return t
}, ks = function(t, e, r, n) {
    return t._startAt && (je ? t._startAt.revert(Sn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
}, Ha = function t(e) {
    return !e || e._ts && t(e.parent)
}, bo = function(t) {
    return t._repeat ? bi(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, bi = function(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r
}, jn = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, ss = function(t) {
    return t._end = Le(t._start + (t._tDur / Math.abs(t._ts || t._rts || ie) || 0))
}, os = function(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = Le(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
    ss(t),
    r._dirty || Kr(r, t)),
    t
}, Cu = function(t, e) {
    var r;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = jn(t.rawTime(), e),
    (!e._dur || fn(0, e.totalDuration(), r) - e._tTime > ie) && e.render(r, !0)),
    Kr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        t._zTime = -ie
    }
}, tr = function(t, e, r, n) {
    return e.parent && Pr(e),
    e._start = Le((Dr(r) ? r : r || t !== le ? kt(t, r, e) : t._time) + e._delay),
    e._end = Le(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
    mu(t, e, "_first", "_last", t._sort ? "_start" : 0),
    As(e) || (t._recent = e),
    n || Cu(t, e),
    t._ts < 0 && os(t, t._tTime),
    t
}, xu = function(t, e) {
    return (Pt.ScrollTrigger || ro("scrollTrigger", e)) && Pt.ScrollTrigger.create(e, t)
}, yu = function(t, e, r, n, i) {
    return uo(t, e, i),
    t._initted ? !r && t._pt && !je && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && _u !== bt.frame ? (br.push(t),
    t._lazy = [i, n],
    1) : void 0 : 1
}, Ga = function t(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
}, As = function(t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e
}, qa = function(t, e, r, n) {
    var i, s, o, a = t.ratio, u = e < 0 || !e && (!t._start && Ga(t) && (t._initted || !As(t)) || (t._ts < 0 || t._dp._ts < 0) && !As(t)) ? 0 : 1, l = t._rDelay, c = 0;
    if (l && t._repeat && (c = fn(0, t._tDur, e),
    s = bi(c, l),
    t._yoyo && 1 & s && (u = 1 - u),
    s !== bi(t._tTime, l) && (a = 1 - u,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    u !== a || je || n || t._zTime === ie || !e && t._zTime) {
        if (!t._initted && yu(t, e, n, r, c))
            return;
        for (o = t._zTime,
        t._zTime = e || (r ? ie : 0),
        r || (r = e && !o),
        t.ratio = u,
        t._from && (u = 1 - u),
        t._time = 0,
        t._tTime = c,
        i = t._pt; i; )
            i.r(u, i.d),
            i = i._next;
        e < 0 && ks(t, e, r, !0),
        t._onUpdate && !r && Lt(t, "onUpdate"),
        c && t._repeat && !r && t.parent && Lt(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === u && (u && Pr(t, 1),
        !r && !je && (Lt(t, u ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, ja = function(t, e, r) {
    var n;
    if (r > e)
        for (n = t._first; n && n._start <= r; ) {
            if ("isPause" === n.data && n._start > e)
                return n;
            n = n._next
        }
    else
        for (n = t._last; n && n._start >= r; ) {
            if ("isPause" === n.data && n._start < e)
                return n;
            n = n._prev
        }
}, Ti = function(t, e, r, n) {
    var i = t._repeat
      , s = Le(e) || 0
      , o = t._tTime / t._tDur;
    return o && !n && (t._time *= s / t._dur),
    t._dur = s,
    t._tDur = i ? i < 0 ? 1e10 : Le(s * (i + 1) + t._rDelay * i) : s,
    o > 0 && !n && os(t, t._tTime = t._tDur * o),
    t.parent && ss(t),
    r || Kr(t.parent, t),
    t
}, To = function(t) {
    return t instanceof ht ? Kr(t) : Ti(t, t._dur)
}, Ka = {
    _start: 0,
    endTime: tn,
    totalDuration: tn
}, kt = function t(e, r, n) {
    var i, s, o, a = e.labels, u = e._recent || Ka, l = e.duration() >= Bt ? u.endTime(!1) : e._dur;
    return ke(r) && (isNaN(r) || r in a) ? (s = r.charAt(0),
    o = "%" === r.substr(-1),
    i = r.indexOf("="),
    "<" === s || ">" === s ? (i >= 0 && (r = r.replace(/=/, "")),
    ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (o ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = l),
    a[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)),
    o && n && (s = s / 100 * (Ke(n) ? n[0] : n).totalDuration()),
    i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s)) : null == r ? l : +r
}, Wi = function(t, e, r) {
    var n, i, s = Dr(e[1]), o = (s ? 2 : 1) + (t < 2 ? 0 : 1), a = e[o];
    if (s && (a.duration = e[1]),
    a.parent = r,
    t) {
        for (n = a,
        i = r; i && !("immediateRender"in n); )
            n = i.vars.defaults || {},
            i = _t(i.vars.inherit) && i.parent;
        a.immediateRender = _t(n.immediateRender),
        t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
    }
    return new ve(e[0],a,e[o + 1])
}, Or = function(t, e) {
    return t || 0 === t ? e(t) : e
}, fn = function(t, e, r) {
    return r < t ? t : r > e ? e : r
}, qe = function(t, e) {
    return ke(t) && (e = Na.exec(t)) ? e[1] : ""
}, Qa = function(t, e, r) {
    return Or(r, (function(r) {
        return fn(t, e, r)
    }
    ))
}, Os = [].slice, Fu = function(t, e) {
    return t && sr(t) && "length"in t && (!e && !t.length || t.length - 1 in t && sr(t[0])) && !t.nodeType && t !== At
}, Za = function(t, e, r) {
    return void 0 === r && (r = []),
    t.forEach((function(t) {
        var n;
        return ke(t) && !e || Fu(t, 1) ? (n = r).push.apply(n, Rt(t)) : r.push(t)
    }
    )) || r
}, Rt = function(t, e, r) {
    return _e && !e && _e.selector ? _e.selector(t) : !ke(t) || r || !Ss && Si() ? Ke(t) ? Za(t, r) : Fu(t) ? Os.call(t, 0) : t ? [t] : [] : Os.call((e || to).querySelectorAll(t), 0)
}, Ms = function(t) {
    return t = Rt(t)[0] || Hn("Invalid scope") || {},
    function(e) {
        var r = t.current || t.nativeElement || t;
        return Rt(e, r.querySelectorAll ? r : r === t ? Hn("Invalid scope") || to.createElement("div") : t)
    }
}, vu = function(t) {
    return t.sort((function() {
        return .5 - Math.random()
    }
    ))
}, Eu = function(t) {
    if (de(t))
        return t;
    var e = sr(t) ? t : {
        each: t
    }
      , r = Qr(e.ease)
      , n = e.from || 0
      , i = parseFloat(e.base) || 0
      , s = {}
      , o = n > 0 && n < 1
      , a = isNaN(n) || o
      , u = e.axis
      , l = n
      , c = n;
    return ke(n) ? l = c = {
        center: .5,
        edges: .5,
        end: 1
    }[n] || 0 : !o && a && (l = n[0],
    c = n[1]),
    function(t, o, f) {
        var h, D, p, d, g, _, m, v, y, C = (f || e).length, F = s[C];
        if (!F) {
            if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, Bt])[1])) {
                for (m = -Bt; m < (m = f[y++].getBoundingClientRect().left) && y < C; )
                    ;
                y--
            }
            for (F = s[C] = [],
            h = a ? Math.min(y, C) * l - .5 : n % y,
            D = y === Bt ? 0 : a ? C * c / y - .5 : n / y | 0,
            m = 0,
            v = Bt,
            _ = 0; _ < C; _++)
                p = _ % y - h,
                d = D - (_ / y | 0),
                F[_] = g = u ? Math.abs("y" === u ? d : p) : su(p * p + d * d),
                g > m && (m = g),
                g < v && (v = g);
            "random" === n && vu(F),
            F.max = m - v,
            F.min = v,
            F.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (y > C ? C - 1 : u ? "y" === u ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === n ? -1 : 1),
            F.b = C < 0 ? i - C : i,
            F.u = qe(e.amount || e.each) || 0,
            r = r && C < 0 ? Bu(r) : r
        }
        return C = (F[t] - F.min) / F.max || 0,
        Le(F.b + (r ? r(C) : C) * F.v) + F.u
    }
}, Bs = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(r) {
        var n = Le(Math.round(parseFloat(r) / t) * t * e);
        return (n - n % 1) / e + (Dr(r) ? 0 : qe(r))
    }
}, wu = function(t, e) {
    var r, n, i = Ke(t);
    return !i && sr(t) && (r = i = t.radius || Bt,
    t.values ? (t = Rt(t.values),
    (n = !Dr(t[0])) && (r *= r)) : t = Bs(t.increment)),
    Or(e, i ? de(t) ? function(e) {
        return n = t(e),
        Math.abs(n - e) <= r ? n : e
    }
    : function(e) {
        for (var i, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = Bt, l = 0, c = t.length; c--; )
            n ? i = (i = t[c].x - o) * i + (s = t[c].y - a) * s : i = Math.abs(t[c] - o),
            i < u && (u = i,
            l = c);
        return l = !r || u <= r ? t[l] : e,
        n || l === e || Dr(e) ? l : l + qe(e)
    }
    : Bs(t))
}, bu = function(t, e, r, n) {
    return Or(Ke(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() {
        return Ke(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
    }
    ))
}, Ja = function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    return function(t) {
        return e.reduce((function(t, e) {
            return e(t)
        }
        ), t)
    }
}, el = function(t, e) {
    return function(r) {
        return t(parseFloat(r)) + (e || qe(r))
    }
}, tl = function(t, e, r) {
    return Su(t, e, 0, 1, r)
}, Tu = function(t, e, r) {
    return Or(r, (function(r) {
        return t[~~e(r)]
    }
    ))
}, rl = function t(e, r, n) {
    var i = r - e;
    return Ke(e) ? Tu(e, t(0, e.length), r) : Or(n, (function(t) {
        return (i + (t - e) % i) % i + e
    }
    ))
}, il = function t(e, r, n) {
    var i = r - e
      , s = 2 * i;
    return Ke(e) ? Tu(e, t(0, e.length - 1), r) : Or(n, (function(t) {
        return e + ((t = (s + (t - e) % s) % s || 0) > i ? s - t : t)
    }
    ))
}, rn = function(t) {
    for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        n = t.indexOf(")", e),
        i = "[" === t.charAt(e + 7),
        r = t.substr(e + 7, n - e - 7).match(i ? lu : Ts),
        o += t.substr(s, e - s) + bu(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5),
        s = n + 1;
    return o + t.substr(s, t.length - s)
}, Su = function(t, e, r, n, i) {
    var s = e - t
      , o = n - r;
    return Or(i, (function(e) {
        return r + ((e - t) / s * o || 0)
    }
    ))
}, nl = function t(e, r, n, i) {
    var s = isNaN(e + r) ? 0 : function(t) {
        return (1 - t) * e + t * r
    }
    ;
    if (!s) {
        var o, a, u, l, c, f = ke(e), h = {};
        if (!0 === n && (i = 1) && (n = null),
        f)
            e = {
                p: e
            },
            r = {
                p: r
            };
        else if (Ke(e) && !Ke(r)) {
            for (u = [],
            l = e.length,
            c = l - 2,
            a = 1; a < l; a++)
                u.push(t(e[a - 1], e[a]));
            l--,
            s = function(t) {
                t *= l;
                var e = Math.min(c, ~~t);
                return u[e](t - e)
            }
            ,
            n = r
        } else
            i || (e = ri(Ke(e) ? [] : {}, e));
        if (!u) {
            for (o in r)
                oo.call(h, e, o, "get", r[o]);
            s = function(t) {
                return fo(t, h) || (f ? e.p : e)
            }
        }
    }
    return Or(n, s)
}, So = function(t, e, r) {
    var n, i, s, o = t.labels, a = Bt;
    for (n in o)
        (i = o[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (s = n,
        a = i);
    return s
}, Lt = function(t, e, r) {
    var n, i, s, o = t.vars, a = o[e], u = _e, l = t._ctx;
    if (a)
        return n = o[e + "Params"],
        i = o.callbackScope || t,
        r && br.length && Gn(),
        l && (_e = l),
        s = n ? a.apply(i, n) : a.call(i),
        _e = u,
        s
}, Ii = function(t) {
    return Pr(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!je),
    t.progress() < 1 && Lt(t, "onInterrupt"),
    t
}, Pu = [], ku = function(t) {
    if (eo() && t) {
        var e = (t = !t.name && t.default || t).name
          , r = de(t)
          , n = e && !r && t.init ? function() {
            this._props = []
        }
        : t
          , i = {
            init: tn,
            render: fo,
            add: oo,
            kill: xl,
            modifier: Cl,
            rawVars: 0
        }
          , s = {
            targetTest: 0,
            get: 0,
            getSetter: lo,
            aliases: {},
            register: 0
        };
        if (Si(),
        t !== n) {
            if (Et[e])
                return;
            It(n, It(qn(t, i), s)),
            ri(n.prototype, ri(i, qn(t, s))),
            Et[n.prop = e] = n,
            t.targetTest && (Pn.push(n),
            io[e] = 1),
            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        hu(e, n),
        t.register && t.register(pt, n, Dt)
    } else
        t && Pu.push(t)
}, re = 255, Ni = {
    aqua: [0, re, re],
    lime: [0, re, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, re],
    navy: [0, 0, 128],
    white: [re, re, re],
    olive: [128, 128, 0],
    yellow: [re, re, 0],
    orange: [re, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [re, 0, 0],
    pink: [re, 192, 203],
    cyan: [0, re, re],
    transparent: [re, re, re, 0]
}, hs = function(t, e, r) {
    return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * re + .5 | 0
}, Au = function(t, e, r) {
    var n, i, s, o, a, u, l, c, f, h, D = t ? Dr(t) ? [t >> 16, t >> 8 & re, t & re] : 0 : Ni.black;
    if (!D) {
        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
        Ni[t])
            D = Ni[t];
        else if ("#" === t.charAt(0)) {
            if (t.length < 6 && (n = t.charAt(1),
            i = t.charAt(2),
            s = t.charAt(3),
            t = "#" + n + n + i + i + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
            9 === t.length)
                return [(D = parseInt(t.substr(1, 6), 16)) >> 16, D >> 8 & re, D & re, parseInt(t.substr(7), 16) / 255];
            D = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & re, t & re]
        } else if ("hsl" === t.substr(0, 3))
            if (D = h = t.match(Ts),
            e) {
                if (~t.indexOf("="))
                    return D = t.match(uu),
                    r && D.length < 4 && (D[3] = 1),
                    D
            } else
                o = +D[0] % 360 / 360,
                a = +D[1] / 100,
                n = 2 * (u = +D[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a),
                D.length > 3 && (D[3] *= 1),
                D[0] = hs(o + 1 / 3, n, i),
                D[1] = hs(o, n, i),
                D[2] = hs(o - 1 / 3, n, i);
        else
            D = t.match(Ts) || Ni.transparent;
        D = D.map(Number)
    }
    return e && !h && (n = D[0] / re,
    i = D[1] / re,
    s = D[2] / re,
    u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2,
    l === c ? o = a = 0 : (f = l - c,
    a = u > .5 ? f / (2 - l - c) : f / (l + c),
    o = l === n ? (i - s) / f + (i < s ? 6 : 0) : l === i ? (s - n) / f + 2 : (n - i) / f + 4,
    o *= 60),
    D[0] = ~~(o + .5),
    D[1] = ~~(100 * a + .5),
    D[2] = ~~(100 * u + .5)),
    r && D.length < 4 && (D[3] = 1),
    D
}, Ou = function(t) {
    var e = []
      , r = []
      , n = -1;
    return t.split(Tr).forEach((function(t) {
        var i = t.match(Di) || [];
        e.push.apply(e, i),
        r.push(n += i.length + 1)
    }
    )),
    e.c = r,
    e
}, Po = function(t, e, r) {
    var n, i, s, o, a = "", u = (t + a).match(Tr), l = e ? "hsla(" : "rgba(", c = 0;
    if (!u)
        return t;
    if (u = u.map((function(t) {
        return (t = Au(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
    }
    )),
    r && (s = Ou(t),
    (n = r.c).join(a) !== s.c.join(a)))
        for (o = (i = t.replace(Tr, "1").split(Di)).length - 1; c < o; c++)
            a += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
    if (!i)
        for (o = (i = t.split(Tr)).length - 1; c < o; c++)
            a += i[c] + u[c];
    return a + i[o]
}, Tr = function() {
    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in Ni)
        e += "|" + t + "\\b";
    return new RegExp(e + ")","gi")
}(), sl = /hsl[a]?\(/, Mu = function(t) {
    var e, r = t.join(" ");
    if (Tr.lastIndex = 0,
    Tr.test(r))
        return e = sl.test(r),
        t[1] = Po(t[1], e),
        t[0] = Po(t[0], e, Ou(t[1])),
        !0
}, bt = function() {
    var t, e, r, n, i, s, o = Date.now, a = 500, u = 33, l = o(), c = l, f = 1e3 / 240, h = f, D = [], p = function r(p) {
        var d, g, _, m, v = o() - c, y = !0 === p;
        if (v > a && (l += v - u),
        ((d = (_ = (c += v) - l) - h) > 0 || y) && (m = ++n.frame,
        i = _ - 1e3 * n.time,
        n.time = _ /= 1e3,
        h += d + (d >= f ? 4 : f - d),
        g = 1),
        y || (t = e(r)),
        g)
            for (s = 0; s < D.length; s++)
                D[s](_, i, m, p)
    };
    return n = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(t) {
            return i / (1e3 / (t || 60))
        },
        wake: function() {
            fu && (!Ss && eo() && (At = Ss = window,
            to = At.document || {},
            Pt.gsap = pt,
            (At.gsapVersions || (At.gsapVersions = [])).push(pt.version),
            cu(Wn || At.GreenSockGlobals || !At.gsap && At || {}),
            r = At.requestAnimationFrame,
            Pu.forEach(ku)),
            t && n.sleep(),
            e = r || function(t) {
                return setTimeout(t, h - 1e3 * n.time + 1 | 0)
            }
            ,
            nn = 1,
            p(2))
        },
        sleep: function() {
            (r ? At.cancelAnimationFrame : clearTimeout)(t),
            nn = 0,
            e = tn
        },
        lagSmoothing: function(t, e) {
            a = t || 1 / 0,
            u = Math.min(e || 33, a)
        },
        fps: function(t) {
            f = 1e3 / (t || 240),
            h = 1e3 * n.time + f
        },
        add: function(t, e, r) {
            var i = e ? function(e, r, s, o) {
                t(e, r, s, o),
                n.remove(i)
            }
            : t;
            return n.remove(t),
            D[r ? "unshift" : "push"](i),
            Si(),
            i
        },
        remove: function(t, e) {
            ~(e = D.indexOf(t)) && D.splice(e, 1) && s >= e && s--
        },
        _listeners: D
    }
}(), Si = function() {
    return !nn && bt.wake()
}, G = {}, ol = /^[\d.\-M][\d.\-,\s]/, ul = /["']/g, al = function(t) {
    for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++)
        r = s[a],
        e = a !== u - 1 ? r.lastIndexOf(",") : r.length,
        n = r.substr(0, e),
        i[o] = isNaN(n) ? n.replace(ul, "").trim() : +n,
        o = r.substr(e + 1).trim();
    return i
}, ll = function(t) {
    var e = t.indexOf("(") + 1
      , r = t.indexOf(")")
      , n = t.indexOf("(", e);
    return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
}, fl = function(t) {
    var e = (t + "").split("(")
      , r = G[e[0]];
    return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [al(e[1])] : ll(t).split(",").map(pu)) : G._CE && ol.test(t) ? G._CE("", t) : r
}, Bu = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, Ru = function t(e, r) {
    for (var n, i = e._first; i; )
        i instanceof ht ? t(i, r) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== r && (i.timeline ? t(i.timeline, r) : (n = i._ease,
        i._ease = i._yEase,
        i._yEase = n,
        i._yoyo = r)),
        i = i._next
}, Qr = function(t, e) {
    return t && (de(t) ? t : G[t] || fl(t)) || e
}, oi = function(t, e, r, n) {
    void 0 === r && (r = function(t) {
        return 1 - e(1 - t)
    }
    ),
    void 0 === n && (n = function(t) {
        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
    }
    );
    var i, s = {
        easeIn: e,
        easeOut: r,
        easeInOut: n
    };
    return dt(t, (function(t) {
        for (var e in G[t] = Pt[t] = s,
        G[i = t.toLowerCase()] = r,
        s)
            G[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = G[t + "." + e] = s[e]
    }
    )),
    s
}, Lu = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
    }
}, _s = function t(e, r, n) {
    var i = r >= 1 ? r : 1
      , s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1)
      , o = s / bs * (Math.asin(1 / i) || 0)
      , a = function(t) {
        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Ia((t - o) * s) + 1
    }
      , u = "out" === e ? a : "in" === e ? function(t) {
        return 1 - a(1 - t)
    }
    : Lu(a);
    return s = bs / s,
    u.config = function(r, n) {
        return t(e, r, n)
    }
    ,
    u
}, ds = function t(e, r) {
    void 0 === r && (r = 1.70158);
    var n = function(t) {
        return t ? --t * t * ((r + 1) * t + r) + 1 : 0
    }
      , i = "out" === e ? n : "in" === e ? function(t) {
        return 1 - n(1 - t)
    }
    : Lu(n);
    return i.config = function(r) {
        return t(e, r)
    }
    ,
    i
};
dt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
    var r = e < 5 ? e + 1 : e;
    oi(t + ",Power" + (r - 1), e ? function(t) {
        return Math.pow(t, r)
    }
    : function(t) {
        return t
    }
    , (function(t) {
        return 1 - Math.pow(1 - t, r)
    }
    ), (function(t) {
        return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
    }
    ))
}
)),
G.Linear.easeNone = G.none = G.Linear.easeIn,
oi("Elastic", _s("in"), _s("out"), _s()),
function(t, e) {
    var r = 1 / e
      , n = function(n) {
        return n < r ? t * n * n : n < .7272727272727273 ? t * Math.pow(n - 1.5 / e, 2) + .75 : n < .9090909090909092 ? t * (n -= 2.25 / e) * n + .9375 : t * Math.pow(n - 2.625 / e, 2) + .984375
    };
    oi("Bounce", (function(t) {
        return 1 - n(1 - t)
    }
    ), n)
}(7.5625, 2.75),
oi("Expo", (function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
}
)),
oi("Circ", (function(t) {
    return -(su(1 - t * t) - 1)
}
)),
oi("Sine", (function(t) {
    return 1 === t ? 1 : 1 - za(t * Ra)
}
)),
oi("Back", ds("in"), ds("out"), ds()),
G.SteppedEase = G.steps = Pt.SteppedEase = {
    config: function(t, e) {
        void 0 === t && (t = 1);
        var r = 1 / t
          , n = t + (e ? 0 : 1)
          , i = e ? 1 : 0
          , s = 1 - ie;
        return function(t) {
            return ((n * fn(0, s, t) | 0) + i) * r
        }
    }
},
wi.ease = G["quad.out"],
dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
    return no += t + "," + t + "Params,"
}
));
var zu = function(t, e) {
    this.id = La++,
    t._gsap = this,
    this.target = t,
    this.harness = e,
    this.get = e ? e.get : du,
    this.set = e ? e.getSetter : lo
}
  , sn = function() {
    function t(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Ti(this, +t.duration, 1, 1),
        this.data = t.data,
        _e && (this._ctx = _e,
        _e.data.push(this)),
        nn || bt.wake()
    }
    var e = t.prototype;
    return e.delay = function(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    e.duration = function(t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        Ti(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(t, e) {
        if (Si(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (os(this, t),
            !r._dp || r.parent || Cu(r, this); r && r.parent; )
                r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && tr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === ie || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        Du(this, t, e)),
        this
    }
    ,
    e.time = function(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + bo(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    e.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + bo(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? bi(this._tTime, r) + 1 : 1
    }
    ,
    e.timeScale = function(t) {
        if (!arguments.length)
            return this._rts === -ie ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? jn(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -ie ? 0 : this._rts,
        this.totalTime(fn(-Math.abs(this._delay), this._tDur, e), !0),
        ss(this),
        Wa(this)
    }
    ,
    e.paused = function(t) {
        return arguments.length ? (this._ps !== t && (this._ps = t,
        t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Si(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== ie && (this._tTime -= ie)))),
        this) : this._ps
    }
    ,
    e.startTime = function(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return e && (e._sort || !this.parent) && tr(e, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(t) {
        return this._start + (_t(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? jn(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(t) {
        void 0 === t && (t = Xa);
        var e = je;
        return je = t,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
        this.totalTime(-.01, t.suppressEvents)),
        "nested" !== this.data && !1 !== t.kill && this.kill(),
        je = e,
        this
    }
    ,
    e.globalTime = function(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            r = e._start + r / (e._ts || 1),
            e = e._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : r
    }
    ,
    e.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        To(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(t) {
        if (arguments.length) {
            var e = this._time;
            return this._rDelay = t,
            To(this),
            e ? this.time(e) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    e.seek = function(t, e) {
        return this.totalTime(kt(this, t), _t(e))
    }
    ,
    e.restart = function(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, _t(e))
    }
    ,
    e.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -ie : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -ie,
        this
    }
    ,
    e.isActive = function() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - ie))
    }
    ,
    e.eventCallback = function(t, e, r) {
        var n = this.vars;
        return arguments.length > 1 ? (e ? (n[t] = e,
        r && (n[t + "Params"] = r),
        "onUpdate" === t && (this._onUpdate = e)) : delete n[t],
        this) : n[t]
    }
    ,
    e.then = function(t) {
        var e = this;
        return new Promise((function(r) {
            var n = de(t) ? t : gu
              , i = function() {
                var t = e.then;
                e.then = null,
                de(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                r(n),
                e.then = t
            };
            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
        }
        ))
    }
    ,
    e.kill = function() {
        Ii(this)
    }
    ,
    t
}();
It(sn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ie,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var ht = function(t) {
    function e(e, r) {
        var n;
        return void 0 === e && (e = {}),
        (n = t.call(this, e) || this).labels = {},
        n.smoothChildTiming = !!e.smoothChildTiming,
        n.autoRemoveChildren = !!e.autoRemoveChildren,
        n._sort = _t(e.sortChildren),
        le && tr(e.parent || le, lr(n), r),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && xu(lr(n), e.scrollTrigger),
        n
    }
    nu(e, t);
    var r = e.prototype;
    return r.to = function(t, e, r) {
        return Wi(0, arguments, this),
        this
    }
    ,
    r.from = function(t, e, r) {
        return Wi(1, arguments, this),
        this
    }
    ,
    r.fromTo = function(t, e, r, n) {
        return Wi(2, arguments, this),
        this
    }
    ,
    r.set = function(t, e, r) {
        return e.duration = 0,
        e.parent = this,
        $i(e).repeatDelay || (e.repeat = 0),
        e.immediateRender = !!e.immediateRender,
        new ve(t,e,kt(this, r),1),
        this
    }
    ,
    r.call = function(t, e, r) {
        return tr(this, ve.delayedCall(0, t, e), r)
    }
    ,
    r.staggerTo = function(t, e, r, n, i, s, o) {
        return r.duration = e,
        r.stagger = r.stagger || n,
        r.onComplete = s,
        r.onCompleteParams = o,
        r.parent = this,
        new ve(t,r,kt(this, i)),
        this
    }
    ,
    r.staggerFrom = function(t, e, r, n, i, s, o) {
        return r.runBackwards = 1,
        $i(r).immediateRender = _t(r.immediateRender),
        this.staggerTo(t, e, r, n, i, s, o)
    }
    ,
    r.staggerFromTo = function(t, e, r, n, i, s, o, a) {
        return n.startAt = r,
        $i(n).immediateRender = _t(n.immediateRender),
        this.staggerTo(t, e, n, i, s, o, a)
    }
    ,
    r.render = function(t, e, r) {
        var n, i, s, o, a, u, l, c, f, h, D, p, d = this._time, g = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, m = t <= 0 ? 0 : Le(t), v = this._zTime < 0 != t < 0 && (this._initted || !_);
        if (this !== le && m > g && t >= 0 && (m = g),
        m !== this._tTime || r || v) {
            if (d !== this._time && _ && (m += this._time - d,
            t += this._time - d),
            n = m,
            f = this._start,
            u = !(c = this._ts),
            v && (_ || (d = this._zTime),
            (t || !e) && (this._zTime = t)),
            this._repeat) {
                if (D = this._yoyo,
                a = _ + this._rDelay,
                this._repeat < -1 && t < 0)
                    return this.totalTime(100 * a + t, e, r);
                if (n = Le(m % a),
                m === g ? (o = this._repeat,
                n = _) : ((o = ~~(m / a)) && o === m / a && (n = _,
                o--),
                n > _ && (n = _)),
                h = bi(this._tTime, a),
                !d && this._tTime && h !== o && this._tTime - h * a - this._dur <= 0 && (h = o),
                D && 1 & o && (n = _ - n,
                p = 1),
                o !== h && !this._lock) {
                    var y = D && 1 & h
                      , C = y === (D && 1 & o);
                    if (o < h && (y = !y),
                    d = y ? 0 : m % _ ? _ : m,
                    this._lock = 1,
                    this.render(d || (p ? 0 : Le(o * a)), e, !_)._lock = 0,
                    this._tTime = m,
                    !e && this.parent && Lt(this, "onRepeat"),
                    this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                    d && d !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (_ = this._dur,
                    g = this._tDur,
                    C && (this._lock = 2,
                    d = y ? _ : -1e-4,
                    this.render(d, !0),
                    this.vars.repeatRefresh && !p && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !u)
                        return this;
                    Ru(this, p)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && ((l = ja(this, Le(d), Le(n))) && (m -= n - (n = l._start))),
            this._tTime = m,
            this._time = n,
            this._act = !c,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = t,
            d = 0),
            !d && n && !e && !o && (Lt(this, "onStart"),
            this._tTime !== m))
                return this;
            if (n >= d && t >= 0)
                for (i = this._first; i; ) {
                    if (s = i._next,
                    (i._act || n >= i._start) && i._ts && l !== i) {
                        if (i.parent !== this)
                            return this.render(t, e, r);
                        if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r),
                        n !== this._time || !this._ts && !u) {
                            l = 0,
                            s && (m += this._zTime = -ie);
                            break
                        }
                    }
                    i = s
                }
            else {
                i = this._last;
                for (var F = t < 0 ? t : n; i; ) {
                    if (s = i._prev,
                    (i._act || F <= i._end) && i._ts && l !== i) {
                        if (i.parent !== this)
                            return this.render(t, e, r);
                        if (i.render(i._ts > 0 ? (F - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (F - i._start) * i._ts, e, r || je && (i._initted || i._startAt)),
                        n !== this._time || !this._ts && !u) {
                            l = 0,
                            s && (m += this._zTime = F ? -ie : ie);
                            break
                        }
                    }
                    i = s
                }
            }
            if (l && !e && (this.pause(),
            l.render(n >= d ? 0 : -ie)._zTime = n >= d ? 1 : -1,
            this._ts))
                return this._start = f,
                ss(this),
                this.render(t, e, r);
            this._onUpdate && !e && Lt(this, "onUpdate", !0),
            (m === g && this._tTime >= this.totalDuration() || !m && d) && (f === this._start || Math.abs(c) !== Math.abs(this._ts)) && (this._lock || ((t || !_) && (m === g && this._ts > 0 || !m && this._ts < 0) && Pr(this, 1),
            !e && (!(t < 0) || d) && (m || d || !g) && (Lt(this, m === g && t >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(m < g && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    r.add = function(t, e) {
        var r = this;
        if (Dr(e) || (e = kt(this, e, t)),
        !(t instanceof sn)) {
            if (Ke(t))
                return t.forEach((function(t) {
                    return r.add(t, e)
                }
                )),
                this;
            if (ke(t))
                return this.addLabel(t, e);
            if (!de(t))
                return this;
            t = ve.delayedCall(0, t)
        }
        return this !== t ? tr(this, t, e) : this
    }
    ,
    r.getChildren = function(t, e, r, n) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === r && (r = !0),
        void 0 === n && (n = -Bt);
        for (var i = [], s = this._first; s; )
            s._start >= n && (s instanceof ve ? e && i.push(s) : (r && i.push(s),
            t && i.push.apply(i, s.getChildren(!0, e, r)))),
            s = s._next;
        return i
    }
    ,
    r.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t)
                return e[r]
    }
    ,
    r.remove = function(t) {
        return ke(t) ? this.removeLabel(t) : de(t) ? this.killTweensOf(t) : (ns(this, t),
        t === this._recent && (this._recent = this._last),
        Kr(this))
    }
    ,
    r.totalTime = function(e, r) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Le(bt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
        t.prototype.totalTime.call(this, e, r),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    r.addLabel = function(t, e) {
        return this.labels[t] = kt(this, e),
        this
    }
    ,
    r.removeLabel = function(t) {
        return delete this.labels[t],
        this
    }
    ,
    r.addPause = function(t, e, r) {
        var n = ve.delayedCall(0, e || tn, r);
        return n.data = "isPause",
        this._hasPause = 1,
        tr(this, n, kt(this, t))
    }
    ,
    r.removePause = function(t) {
        var e = this._first;
        for (t = kt(this, t); e; )
            e._start === t && "isPause" === e.data && Pr(e),
            e = e._next
    }
    ,
    r.killTweensOf = function(t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
            yr !== n[i] && n[i].kill(t, e);
        return this
    }
    ,
    r.getTweensOf = function(t, e) {
        for (var r, n = [], i = Rt(t), s = this._first, o = Dr(e); s; )
            s instanceof ve ? Va(s._targets, i) && (o ? (!yr || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
            s = s._next;
        return n
    }
    ,
    r.tweenTo = function(t, e) {
        e = e || {};
        var r, n = this, i = kt(n, t), s = e, o = s.startAt, a = s.onStart, u = s.onStartParams, l = s.immediateRender, c = ve.to(n, It({
            ease: e.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: i,
            overwrite: "auto",
            duration: e.duration || Math.abs((i - (o && "time"in o ? o.time : n._time)) / n.timeScale()) || ie,
            onStart: function() {
                if (n.pause(),
                !r) {
                    var t = e.duration || Math.abs((i - (o && "time"in o ? o.time : n._time)) / n.timeScale());
                    c._dur !== t && Ti(c, t, 0, 1).render(c._time, !0, !0),
                    r = 1
                }
                a && a.apply(c, u || [])
            }
        }, e));
        return l ? c.render(0) : c
    }
    ,
    r.tweenFromTo = function(t, e, r) {
        return this.tweenTo(e, It({
            startAt: {
                time: kt(this, t)
            }
        }, r))
    }
    ,
    r.recent = function() {
        return this._recent
    }
    ,
    r.nextLabel = function(t) {
        return void 0 === t && (t = this._time),
        So(this, kt(this, t))
    }
    ,
    r.previousLabel = function(t) {
        return void 0 === t && (t = this._time),
        So(this, kt(this, t), 1)
    }
    ,
    r.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + ie)
    }
    ,
    r.shiftChildren = function(t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, s = this.labels; i; )
            i._start >= r && (i._start += t,
            i._end += t),
            i = i._next;
        if (e)
            for (n in s)
                s[n] >= r && (s[n] += t);
        return Kr(this)
    }
    ,
    r.invalidate = function(e) {
        var r = this._first;
        for (this._lock = 0; r; )
            r.invalidate(e),
            r = r._next;
        return t.prototype.invalidate.call(this, e)
    }
    ,
    r.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
            e = r._next,
            this.remove(r),
            r = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        Kr(this)
    }
    ,
    r.totalDuration = function(t) {
        var e, r, n, i = 0, s = this, o = s._last, a = Bt;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
            for (n = s.parent; o; )
                e = o._prev,
                o._dirty && o.totalDuration(),
                (r = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1,
                tr(s, o, r - o._delay, 1)._lock = 0) : a = r,
                r < 0 && o._ts && (i -= r,
                (!n && !s._dp || n && n.smoothChildTiming) && (s._start += r / s._ts,
                s._time -= r,
                s._tTime -= r),
                s.shiftChildren(-r, !1, -1 / 0),
                a = 0),
                o._end > i && o._ts && (i = o._end),
                o = e;
            Ti(s, s === le && s._time > i ? s._time : i, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(t) {
        if (le._ts && (Du(le, jn(t, le)),
        _u = bt.frame),
        bt.frame >= Eo) {
            Eo += St.autoSleep || 120;
            var e = le._first;
            if ((!e || !e._ts) && St.autoSleep && bt._listeners.length < 2) {
                for (; e && !e._ts; )
                    e = e._next;
                e || bt.sleep()
            }
        }
    }
    ,
    e
}(sn);
It(ht.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var yr, Rs, cl = function(t, e, r, n, i, s, o) {
    var a, u, l, c, f, h, D, p, d = new Dt(this._pt,t,e,0,1,Uu,null,i), g = 0, _ = 0;
    for (d.b = r,
    d.e = n,
    r += "",
    (D = ~(n += "").indexOf("random(")) && (n = rn(n)),
    s && (s(p = [r, n], t, e),
    r = p[0],
    n = p[1]),
    u = r.match(fs) || []; a = fs.exec(n); )
        c = a[0],
        f = n.substring(g, a.index),
        l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1),
        c !== u[_++] && (h = parseFloat(u[_ - 1]) || 0,
        d._pt = {
            _next: d._pt,
            p: f || 1 === _ ? f : ",",
            s: h,
            c: "=" === c.charAt(1) ? Ci(h, c) - h : parseFloat(c) - h,
            m: l && l < 4 ? Math.round : 0
        },
        g = fs.lastIndex);
    return d.c = g < n.length ? n.substring(g, n.length) : "",
    d.fp = o,
    (au.test(n) || D) && (d.e = 0),
    this._pt = d,
    d
}, oo = function(t, e, r, n, i, s, o, a, u, l) {
    de(n) && (n = n(i || 0, t, s));
    var c, f = t[e], h = "get" !== r ? r : de(f) ? u ? t[e.indexOf("set") || !de(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f, D = de(f) ? u ? pl : Xu : ao;
    if (ke(n) && (~n.indexOf("random(") && (n = rn(n)),
    "=" === n.charAt(1) && (((c = Ci(h, n) + (qe(h) || 0)) || 0 === c) && (n = c))),
    !l || h !== n || Rs)
        return isNaN(h * n) || "" === n ? (!f && !(e in t) && ro(e, n),
        cl.call(this, t, e, h, n, D, a || St.stringFilter, u)) : (c = new Dt(this._pt,t,e,+h || 0,n - (h || 0),"boolean" == typeof f ? ml : Vu,0,D),
        u && (c.fp = u),
        o && c.modifier(o, this, t),
        this._pt = c)
}, hl = function(t, e, r, n, i) {
    if (de(t) && (t = Hi(t, i, e, r, n)),
    !sr(t) || t.style && t.nodeType || Ke(t) || ou(t))
        return ke(t) ? Hi(t, i, e, r, n) : t;
    var s, o = {};
    for (s in t)
        o[s] = Hi(t[s], i, e, r, n);
    return o
}, Iu = function(t, e, r, n, i, s) {
    var o, a, u, l;
    if (Et[t] && !1 !== (o = new Et[t]).init(i, o.rawVars ? e[t] : hl(e[t], n, i, s, r), r, n, s) && (r._pt = a = new Dt(r._pt,i,t,0,1,o.render,o,0,o.priority),
    r !== pi))
        for (u = r._ptLookup[r._targets.indexOf(i)],
        l = o._props.length; l--; )
            u[o._props[l]] = a;
    return o
}, uo = function t(e, r, n) {
    var i, s, o, a, u, l, c, f, h, D, p, d, g, _ = e.vars, m = _.ease, v = _.startAt, y = _.immediateRender, C = _.lazy, F = _.onUpdate, E = _.onUpdateParams, x = _.callbackScope, b = _.runBackwards, w = _.yoyoEase, T = _.keyframes, A = _.autoRevert, k = e._dur, S = e._startAt, P = e._targets, B = e.parent, M = B && "nested" === B.data ? B.vars.targets : P, O = "auto" === e._overwrite && !Zs, L = e.timeline;
    if (L && (!T || !m) && (m = "none"),
    e._ease = Qr(m, wi.ease),
    e._yEase = w ? Bu(Qr(!0 === w ? m : w, wi.ease)) : 0,
    w && e._yoyo && !e._repeat && (w = e._yEase,
    e._yEase = e._ease,
    e._ease = w),
    e._from = !L && !!_.runBackwards,
    !L || T && !_.stagger) {
        if (d = (f = P[0] ? jr(P[0]).harness : 0) && _[f.prop],
        i = qn(_, io),
        S && (S._zTime < 0 && S.progress(1),
        r < 0 && b && y && !A ? S.render(-1, !0) : S.revert(b && k ? Sn : Ya),
        S._lazy = 0),
        v) {
            if (Pr(e._startAt = ve.set(P, It({
                data: "isStart",
                overwrite: !1,
                parent: B,
                immediateRender: !0,
                lazy: !S && _t(C),
                startAt: null,
                delay: 0,
                onUpdate: F,
                onUpdateParams: E,
                callbackScope: x,
                stagger: 0
            }, v))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            r < 0 && (je || !y && !A) && e._startAt.revert(Sn),
            y && k && r <= 0 && n <= 0)
                return void (r && (e._zTime = r))
        } else if (b && k && !S)
            if (r && (y = !1),
            o = It({
                overwrite: !1,
                data: "isFromStart",
                lazy: y && !S && _t(C),
                immediateRender: y,
                stagger: 0,
                parent: B
            }, i),
            d && (o[f.prop] = d),
            Pr(e._startAt = ve.set(P, o)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            r < 0 && (je ? e._startAt.revert(Sn) : e._startAt.render(-1, !0)),
            e._zTime = r,
            y) {
                if (!r)
                    return
            } else
                t(e._startAt, ie, ie);
        for (e._pt = e._ptCache = 0,
        C = k && _t(C) || C && !k,
        s = 0; s < P.length; s++) {
            if (c = (u = P[s])._gsap || so(P)[s]._gsap,
            e._ptLookup[s] = D = {},
            Ps[c.id] && br.length && Gn(),
            p = M === P ? s : M.indexOf(u),
            f && !1 !== (h = new f).init(u, d || i, e, p, M) && (e._pt = a = new Dt(e._pt,u,h.name,0,1,h.render,h,0,h.priority),
            h._props.forEach((function(t) {
                D[t] = a
            }
            )),
            h.priority && (l = 1)),
            !f || d)
                for (o in i)
                    Et[o] && (h = Iu(o, i, e, p, u, M)) ? h.priority && (l = 1) : D[o] = a = oo.call(e, u, o, "get", i[o], p, M, 0, _.stringFilter);
            e._op && e._op[s] && e.kill(u, e._op[s]),
            O && e._pt && (yr = e,
            le.killTweensOf(u, D, e.globalTime(r)),
            g = !e.parent,
            yr = 0),
            e._pt && C && (Ps[c.id] = 1)
        }
        l && $u(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = F,
    e._initted = (!e._op || e._pt) && !g,
    T && r <= 0 && L.render(Bt, !0, !0)
}, _l = function(t, e, r, n, i, s, o) {
    var a, u, l, c, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
    if (!f)
        for (f = t._ptCache[e] = [],
        l = t._ptLookup,
        c = t._targets.length; c--; ) {
            if ((a = l[c][e]) && a.d && a.d._pt)
                for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                    a = a._next;
            if (!a)
                return Rs = 1,
                t.vars[e] = "+=0",
                uo(t, o),
                Rs = 0,
                1;
            f.push(a)
        }
    for (c = f.length; c--; )
        (a = (u = f[c])._pt || u).s = !n && 0 !== n || i ? a.s + (n || 0) + s * a.c : n,
        a.c = r - a.s,
        u.e && (u.e = ge(r) + qe(u.e)),
        u.b && (u.b = a.s + qe(u.b))
}, dl = function(t, e) {
    var r, n, i, s, o = t[0] ? jr(t[0]).harness : 0, a = o && o.aliases;
    if (!a)
        return e;
    for (n in r = ri({}, e),
    a)
        if (n in r)
            for (i = (s = a[n].split(",")).length; i--; )
                r[s[i]] = r[n];
    return r
}, Dl = function(t, e, r, n) {
    var i, s, o = e.ease || n || "power1.inOut";
    if (Ke(e))
        s = r[t] || (r[t] = []),
        e.forEach((function(t, r) {
            return s.push({
                t: r / (e.length - 1) * 100,
                v: t,
                e: o
            })
        }
        ));
    else
        for (i in e)
            s = r[i] || (r[i] = []),
            "ease" === i || s.push({
                t: parseFloat(t),
                v: e[i],
                e: o
            })
}, Hi = function(t, e, r, n, i) {
    return de(t) ? t.call(e, r, n, i) : ke(t) && ~t.indexOf("random(") ? rn(t) : t
}, Nu = no + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Yu = {};
dt(Nu + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
    return Yu[t] = 1
}
));
var ve = function(t) {
    function e(e, r, n, i) {
        var s;
        "number" == typeof r && (n.duration = r,
        r = n,
        n = null);
        var o, a, u, l, c, f, h, D, p = (s = t.call(this, i ? r : $i(r)) || this).vars, d = p.duration, g = p.delay, _ = p.immediateRender, m = p.stagger, v = p.overwrite, y = p.keyframes, C = p.defaults, F = p.scrollTrigger, E = p.yoyoEase, x = r.parent || le, b = (Ke(e) || ou(e) ? Dr(e[0]) : "length"in r) ? [e] : Rt(e);
        if (s._targets = b.length ? so(b) : Hn("GSAP target " + e + " not found. https://greensock.com", !St.nullTargetWarn) || [],
        s._ptLookup = [],
        s._overwrite = v,
        y || m || dn(d) || dn(g)) {
            if (r = s.vars,
            (o = s.timeline = new ht({
                data: "nested",
                defaults: C || {},
                targets: x && "nested" === x.data ? x.vars.targets : b
            })).kill(),
            o.parent = o._dp = lr(s),
            o._start = 0,
            m || dn(d) || dn(g)) {
                if (l = b.length,
                h = m && Eu(m),
                sr(m))
                    for (c in m)
                        ~Nu.indexOf(c) && (D || (D = {}),
                        D[c] = m[c]);
                for (a = 0; a < l; a++)
                    (u = qn(r, Yu)).stagger = 0,
                    E && (u.yoyoEase = E),
                    D && ri(u, D),
                    f = b[a],
                    u.duration = +Hi(d, lr(s), a, f, b),
                    u.delay = (+Hi(g, lr(s), a, f, b) || 0) - s._delay,
                    !m && 1 === l && u.delay && (s._delay = g = u.delay,
                    s._start += g,
                    u.delay = 0),
                    o.to(f, u, h ? h(a, f, b) : 0),
                    o._ease = G.none;
                o.duration() ? d = g = 0 : s.timeline = 0
            } else if (y) {
                $i(It(o.vars.defaults, {
                    ease: "none"
                })),
                o._ease = Qr(y.ease || r.ease || "none");
                var w, T, A, k = 0;
                if (Ke(y))
                    y.forEach((function(t) {
                        return o.to(b, t, ">")
                    }
                    )),
                    o.duration();
                else {
                    for (c in u = {},
                    y)
                        "ease" === c || "easeEach" === c || Dl(c, y[c], u, y.easeEach);
                    for (c in u)
                        for (w = u[c].sort((function(t, e) {
                            return t.t - e.t
                        }
                        )),
                        k = 0,
                        a = 0; a < w.length; a++)
                            (A = {
                                ease: (T = w[a]).e,
                                duration: (T.t - (a ? w[a - 1].t : 0)) / 100 * d
                            })[c] = T.v,
                            o.to(b, A, k),
                            k += A.duration;
                    o.duration() < d && o.to({}, {
                        duration: d - o.duration()
                    })
                }
            }
            d || s.duration(d = o.duration())
        } else
            s.timeline = 0;
        return !0 === v && !Zs && (yr = lr(s),
        le.killTweensOf(b),
        yr = 0),
        tr(x, lr(s), n),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        (_ || !d && !y && s._start === Le(x._time) && _t(_) && Ha(lr(s)) && "nested" !== x.data) && (s._tTime = -ie,
        s.render(Math.max(0, -g) || 0)),
        F && xu(lr(s), F),
        s
    }
    nu(e, t);
    var r = e.prototype;
    return r.render = function(t, e, r) {
        var n, i, s, o, a, u, l, c, f, h = this._time, D = this._tDur, p = this._dur, d = t < 0, g = t > D - ie && !d ? D : t < ie ? 0 : t;
        if (p) {
            if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
                if (n = g,
                c = this.timeline,
                this._repeat) {
                    if (o = p + this._rDelay,
                    this._repeat < -1 && d)
                        return this.totalTime(100 * o + t, e, r);
                    if (n = Le(g % o),
                    g === D ? (s = this._repeat,
                    n = p) : ((s = ~~(g / o)) && s === g / o && (n = p,
                    s--),
                    n > p && (n = p)),
                    (u = this._yoyo && 1 & s) && (f = this._yEase,
                    n = p - n),
                    a = bi(this._tTime, o),
                    n === h && !r && this._initted)
                        return this._tTime = g,
                        this;
                    s !== a && (c && this._yEase && Ru(c, u),
                    this.vars.repeatRefresh && !u && !this._lock && (this._lock = r = 1,
                    this.render(Le(o * s), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (yu(this, d ? t : n, r, e, g))
                        return this._tTime = 0,
                        this;
                    if (h !== this._time)
                        return this;
                    if (p !== this._dur)
                        return this.render(t, e, r)
                }
                if (this._tTime = g,
                this._time = n,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = l = (f || this._ease)(n / p),
                this._from && (this.ratio = l = 1 - l),
                n && !h && !e && !s && (Lt(this, "onStart"),
                this._tTime !== g))
                    return this;
                for (i = this._pt; i; )
                    i.r(l, i.d),
                    i = i._next;
                c && c.render(t < 0 ? t : !n && u ? -ie : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t),
                this._onUpdate && !e && (d && ks(this, t, e, r),
                Lt(this, "onUpdate")),
                this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Lt(this, "onRepeat"),
                (g === this._tDur || !g) && this._tTime === g && (d && !this._onUpdate && ks(this, t, !0, !0),
                (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Pr(this, 1),
                !e && (!d || h) && (g || h || u) && (Lt(this, g === D ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(g < D && this.timeScale() > 0) && this._prom()))
            }
        } else
            qa(this, t, e, r);
        return this
    }
    ,
    r.targets = function() {
        return this._targets
    }
    ,
    r.invalidate = function(e) {
        return (!e || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(e),
        t.prototype.invalidate.call(this, e)
    }
    ,
    r.resetTo = function(t, e, r, n) {
        nn || bt.wake(),
        this._ts || this.play();
        var i, s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || uo(this, s),
        i = this._ease(s / this._dur),
        _l(this, t, e, r, n, i, s) ? this.resetTo(t, e, r, n) : (os(this, 0),
        this.parent || mu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    r.kill = function(t, e) {
        if (void 0 === e && (e = "all"),
        !(t || e && "all" !== e))
            return this._lazy = this._pt = 0,
            this.parent ? Ii(this) : this;
        if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, yr && !0 !== yr.vars.overwrite)._first || Ii(this),
            this.parent && r !== this.timeline.totalDuration() && Ti(this, this._dur * this.timeline._tDur / r, 0, 1),
            this
        }
        var n, i, s, o, a, u, l, c = this._targets, f = t ? Rt(t) : c, h = this._ptLookup, D = this._pt;
        if ((!e || "all" === e) && $a(c, f))
            return "all" === e && (this._pt = 0),
            Ii(this);
        for (n = this._op = this._op || [],
        "all" !== e && (ke(e) && (a = {},
        dt(e, (function(t) {
            return a[t] = 1
        }
        )),
        e = a),
        e = dl(c, e)),
        l = c.length; l--; )
            if (~f.indexOf(c[l]))
                for (a in i = h[l],
                "all" === e ? (n[l] = e,
                o = i,
                s = {}) : (s = n[l] = n[l] || {},
                o = e),
                o)
                    (u = i && i[a]) && ((!("kill"in u.d) || !0 === u.d.kill(a)) && ns(this, u, "_pt"),
                    delete i[a]),
                    "all" !== s && (s[a] = 1);
        return this._initted && !this._pt && D && Ii(this),
        this
    }
    ,
    e.to = function(t, r) {
        return new e(t,r,arguments[2])
    }
    ,
    e.from = function(t, e) {
        return Wi(1, arguments)
    }
    ,
    e.delayedCall = function(t, r, n, i) {
        return new e(r,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: i
        })
    }
    ,
    e.fromTo = function(t, e, r) {
        return Wi(2, arguments)
    }
    ,
    e.set = function(t, r) {
        return r.duration = 0,
        r.repeatDelay || (r.repeat = 0),
        new e(t,r)
    }
    ,
    e.killTweensOf = function(t, e, r) {
        return le.killTweensOf(t, e, r)
    }
    ,
    e
}(sn);
It(ve.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}),
dt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
    ve[t] = function() {
        var e = new ht
          , r = Os.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
        e[t].apply(e, r)
    }
}
));
var ao = function(t, e, r) {
    return t[e] = r
}
  , Xu = function(t, e, r) {
    return t[e](r)
}
  , pl = function(t, e, r, n) {
    return t[e](n.fp, r)
}
  , gl = function(t, e, r) {
    return t.setAttribute(e, r)
}
  , lo = function(t, e) {
    return de(t[e]) ? Xu : Js(t[e]) && t.setAttribute ? gl : ao
}
  , Vu = function(t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
}
  , ml = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
  , Uu = function(t, e) {
    var r = e._pt
      , n = "";
    if (!t && e.b)
        n = e.b;
    else if (1 === t && e.e)
        n = e.e;
    else {
        for (; r; )
            n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n,
            r = r._next;
        n += e.c
    }
    e.set(e.t, e.p, n, e)
}
  , fo = function(t, e) {
    for (var r = e._pt; r; )
        r.r(t, r.d),
        r = r._next
}
  , Cl = function(t, e, r, n) {
    for (var i, s = this._pt; s; )
        i = s._next,
        s.p === n && s.modifier(t, e, r),
        s = i
}
  , xl = function(t) {
    for (var e, r, n = this._pt; n; )
        r = n._next,
        n.p === t && !n.op || n.op === t ? ns(this, n, "_pt") : n.dep || (e = 1),
        n = r;
    return !e
}
  , yl = function(t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
}
  , $u = function(t) {
    for (var e, r, n, i, s = t._pt; s; ) {
        for (e = s._next,
        r = n; r && r.pr > s.pr; )
            r = r._next;
        (s._prev = r ? r._prev : i) ? s._prev._next = s : n = s,
        (s._next = r) ? r._prev = s : i = s,
        s = e
    }
    t._pt = n
}
  , Dt = function() {
    function t(t, e, r, n, i, s, o, a, u) {
        this.t = e,
        this.s = n,
        this.c = i,
        this.p = r,
        this.r = s || Vu,
        this.d = o || this,
        this.set = a || ao,
        this.pr = u || 0,
        this._next = t,
        t && (t._prev = this)
    }
    return t.prototype.modifier = function(t, e, r) {
        this.mSet = this.mSet || this.set,
        this.set = yl,
        this.m = t,
        this.mt = r,
        this.tween = e
    }
    ,
    t
}();
dt(no + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
    return io[t] = 1
}
)),
Pt.TweenMax = Pt.TweenLite = ve,
Pt.TimelineLite = Pt.TimelineMax = ht,
le = new ht({
    sortChildren: !1,
    defaults: wi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
}),
St.stringFilter = Mu;
var Zr = []
  , kn = {}
  , Fl = []
  , ko = 0
  , vl = 0
  , Ds = function(t) {
    return (kn[t] || Fl).map((function(t) {
        return t()
    }
    ))
}
  , Ls = function() {
    var t = Date.now()
      , e = [];
    t - ko > 2 && (Ds("matchMediaInit"),
    Zr.forEach((function(t) {
        var r, n, i, s, o = t.queries, a = t.conditions;
        for (n in o)
            (r = At.matchMedia(o[n]).matches) && (i = 1),
            r !== a[n] && (a[n] = r,
            s = 1);
        s && (t.revert(),
        i && e.push(t))
    }
    )),
    Ds("matchMediaRevert"),
    e.forEach((function(t) {
        return t.onMatch(t)
    }
    )),
    ko = t,
    Ds("matchMedia"))
}
  , Wu = function() {
    function t(t, e) {
        this.selector = e && Ms(e),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = vl++,
        t && this.add(t)
    }
    var e = t.prototype;
    return e.add = function(t, e, r) {
        de(t) && (r = e,
        e = t,
        t = de);
        var n = this
          , i = function() {
            var t, i = _e, s = n.selector;
            return i && i !== n && i.data.push(n),
            r && (n.selector = Ms(r)),
            _e = n,
            t = e.apply(n, arguments),
            de(t) && n._r.push(t),
            _e = i,
            n.selector = s,
            n.isReverted = !1,
            t
        };
        return n.last = i,
        t === de ? i(n) : t ? n[t] = i : i
    }
    ,
    e.ignore = function(t) {
        var e = _e;
        _e = null,
        t(this),
        _e = e
    }
    ,
    e.getTweens = function() {
        var e = [];
        return this.data.forEach((function(r) {
            return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof ve && !(r.parent && "nested" === r.parent.data) && e.push(r)
        }
        )),
        e
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(t, e) {
        var r = this;
        if (t) {
            var n = this.getTweens();
            this.data.forEach((function(t) {
                "isFlip" === t.data && (t.revert(),
                t.getChildren(!0, !0, !1).forEach((function(t) {
                    return n.splice(n.indexOf(t), 1)
                }
                )))
            }
            )),
            n.map((function(t) {
                return {
                    g: t.globalTime(0),
                    t: t
                }
            }
            )).sort((function(t, e) {
                return e.g - t.g || -1 / 0
            }
            )).forEach((function(e) {
                return e.t.revert(t)
            }
            )),
            this.data.forEach((function(e) {
                return !(e instanceof ve) && e.revert && e.revert(t)
            }
            )),
            this._r.forEach((function(e) {
                return e(t, r)
            }
            )),
            this.isReverted = !0
        } else
            this.data.forEach((function(t) {
                return t.kill && t.kill()
            }
            ));
        if (this.clear(),
        e)
            for (var i = Zr.length; i--; )
                Zr[i].id === this.id && Zr.splice(i, 1)
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    t
}()
  , El = function() {
    function t(t) {
        this.contexts = [],
        this.scope = t
    }
    var e = t.prototype;
    return e.add = function(t, e, r) {
        sr(t) || (t = {
            matches: t
        });
        var n, i, s, o = new Wu(0,r || this.scope), a = o.conditions = {};
        for (i in _e && !o.selector && (o.selector = _e.selector),
        this.contexts.push(o),
        e = o.add("onMatch", e),
        o.queries = t,
        t)
            "all" === i ? s = 1 : (n = At.matchMedia(t[i])) && (Zr.indexOf(o) < 0 && Zr.push(o),
            (a[i] = n.matches) && (s = 1),
            n.addListener ? n.addListener(Ls) : n.addEventListener("change", Ls));
        return s && e(o),
        this
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    e.kill = function(t) {
        this.contexts.forEach((function(e) {
            return e.kill(t, !0)
        }
        ))
    }
    ,
    t
}()
  , Kn = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
        e.forEach((function(t) {
            return ku(t)
        }
        ))
    },
    timeline: function(t) {
        return new ht(t)
    },
    getTweensOf: function(t, e) {
        return le.getTweensOf(t, e)
    },
    getProperty: function(t, e, r, n) {
        ke(t) && (t = Rt(t)[0]);
        var i = jr(t || {}).get
          , s = r ? gu : pu;
        return "native" === r && (r = ""),
        t && (e ? s((Et[e] && Et[e].get || i)(t, e, r, n)) : function(e, r, n) {
            return s((Et[e] && Et[e].get || i)(t, e, r, n))
        }
        )
    },
    quickSetter: function(t, e, r) {
        if ((t = Rt(t)).length > 1) {
            var n = t.map((function(t) {
                return pt.quickSetter(t, e, r)
            }
            ))
              , i = n.length;
            return function(t) {
                for (var e = i; e--; )
                    n[e](t)
            }
        }
        t = t[0] || {};
        var s = Et[e]
          , o = jr(t)
          , a = o.harness && (o.harness.aliases || {})[e] || e
          , u = s ? function(e) {
            var n = new s;
            pi._pt = 0,
            n.init(t, r ? e + r : e, pi, 0, [t]),
            n.render(1, n),
            pi._pt && fo(1, pi)
        }
        : o.set(t, a);
        return s ? u : function(e) {
            return u(t, a, r ? e + r : e, o, 1)
        }
    },
    quickTo: function(t, e, r) {
        var n, i = pt.to(t, ri(((n = {})[e] = "+=0.1",
        n.paused = !0,
        n), r || {})), s = function(t, r, n) {
            return i.resetTo(e, t, r, n)
        };
        return s.tween = i,
        s
    },
    isTweening: function(t) {
        return le.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Qr(t.ease, wi.ease)),
        wo(wi, t || {})
    },
    config: function(t) {
        return wo(St, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
          , r = t.effect
          , n = t.plugins
          , i = t.defaults
          , s = t.extendTimeline;
        (n || "").split(",").forEach((function(t) {
            return t && !Et[t] && !Pt[t] && Hn(e + " effect requires " + t + " plugin.")
        }
        )),
        cs[e] = function(t, e, n) {
            return r(Rt(t), It(e || {}, i), n)
        }
        ,
        s && (ht.prototype[e] = function(t, r, n) {
            return this.add(cs[e](t, sr(r) ? r : (n = r) && {}, this), n)
        }
        )
    },
    registerEase: function(t, e) {
        G[t] = Qr(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? Qr(t, e) : G
    },
    getById: function(t) {
        return le.getById(t)
    },
    exportRoot: function(t, e) {
        void 0 === t && (t = {});
        var r, n, i = new ht(t);
        for (i.smoothChildTiming = _t(t.smoothChildTiming),
        le.remove(i),
        i._dp = 0,
        i._time = i._tTime = le._time,
        r = le._first; r; )
            n = r._next,
            (e || !(!r._dur && r instanceof ve && r.vars.onComplete === r._targets[0])) && tr(i, r, r._start - r._delay),
            r = n;
        return tr(le, i, 0),
        i
    },
    context: function(t, e) {
        return t ? new Wu(t,e) : _e
    },
    matchMedia: function(t) {
        return new El(t)
    },
    matchMediaRefresh: function() {
        return Zr.forEach((function(t) {
            var e, r, n = t.conditions;
            for (r in n)
                n[r] && (n[r] = !1,
                e = 1);
            e && t.revert()
        }
        )) || Ls()
    },
    addEventListener: function(t, e) {
        var r = kn[t] || (kn[t] = []);
        ~r.indexOf(e) || r.push(e)
    },
    removeEventListener: function(t, e) {
        var r = kn[t]
          , n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    },
    utils: {
        wrap: rl,
        wrapYoyo: il,
        distribute: Eu,
        random: bu,
        snap: wu,
        normalize: tl,
        getUnit: qe,
        clamp: Qa,
        splitColor: Au,
        toArray: Rt,
        selector: Ms,
        mapRange: Su,
        pipe: Ja,
        unitize: el,
        interpolate: nl,
        shuffle: vu
    },
    install: cu,
    effects: cs,
    ticker: bt,
    updateRoot: ht.updateRoot,
    plugins: Et,
    globalTimeline: le,
    core: {
        PropTween: Dt,
        globals: hu,
        Tween: ve,
        Timeline: ht,
        Animation: sn,
        getCache: jr,
        _removeLinkedListItem: ns,
        reverting: function() {
            return je
        },
        context: function(t) {
            return t && _e && (_e.data.push(t),
            t._ctx = _e),
            _e
        },
        suppressOverwrites: function(t) {
            return Zs = t
        }
    }
};
dt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
    return Kn[t] = ve[t]
}
)),
bt.add(ht.updateRoot),
pi = Kn.to({}, {
    duration: 0
});
var wl = function(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
    return r
}
  , bl = function(t, e) {
    var r, n, i, s = t._targets;
    for (r in e)
        for (n = s.length; n--; )
            (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = wl(i, r)),
            i && i.modifier && i.modifier(e[r], t, s[n], r))
}
  , ps = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(t, r, n) {
            n._onInit = function(t) {
                var n, i;
                if (ke(r) && (n = {},
                dt(r, (function(t) {
                    return n[t] = 1
                }
                )),
                r = n),
                e) {
                    for (i in n = {},
                    r)
                        n[i] = e(r[i]);
                    r = n
                }
                bl(t, r)
            }
        }
    }
}
  , pt = Kn.registerPlugin({
    name: "attr",
    init: function(t, e, r, n, i) {
        var s, o, a;
        for (s in this.tween = r,
        e)
            a = t.getAttribute(s) || "",
            (o = this.add(t, "setAttribute", (a || 0) + "", e[s], n, i, 0, 0, s)).op = s,
            o.b = a,
            this._props.push(s)
    },
    render: function(t, e) {
        for (var r = e._pt; r; )
            je ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
    }
}, ps("roundProps", Bs), ps("modifiers"), ps("snap", wu)) || Kn;
ve.version = ht.version = pt.version = "3.12.2",
fu = 1,
eo() && Si(),
G.Power0,
G.Power1,
G.Power2,
G.Power3,
G.Power4,
G.Linear,
G.Quad,
G.Cubic,
G.Quart,
G.Quint,
G.Strong,
G.Elastic,
G.Back,
G.SteppedEase,
G.Bounce,
G.Sine,
G.Expo,
G.Circ;
var Ao, Fr, xi, co, Gr, Oo, ho, Ku, Tl = function() {
    return typeof window < "u"
}, pr = {}, $r = 180 / Math.PI, yi = Math.PI / 180, fi = Math.atan2, Mo = 1e8, _o = /([A-Z])/g, Sl = /(left|right|width|margin|padding|x)/i, Pl = /[\s,\(]\S/, rr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, zs = function(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
}, kl = function(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
}, Al = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
}, Ol = function(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
}, Hu = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, Gu = function(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
}, Ml = function(t, e, r) {
    return t.style[e] = r
}, Bl = function(t, e, r) {
    return t.style.setProperty(e, r)
}, Rl = function(t, e, r) {
    return t._gsap[e] = r
}, Ll = function(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r
}, zl = function(t, e, r, n, i) {
    var s = t._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(i, s)
}, Il = function(t, e, r, n, i) {
    var s = t._gsap;
    s[e] = r,
    s.renderTransform(i, s)
}, fe = "transform", qt = fe + "Origin", Nl = function t(e, r) {
    var n = this
      , i = this.target
      , s = i.style;
    if (e in pr && s) {
        if (this.tfm = this.tfm || {},
        "transform" === e)
            return rr.transform.split(",").forEach((function(e) {
                return t.call(n, e, r)
            }
            ));
        if (~(e = rr[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
            return n.tfm[t] = fr(i, t)
        }
        )) : this.tfm[e] = i._gsap.x ? i._gsap[e] : fr(i, e),
        this.props.indexOf(fe) >= 0)
            return;
        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(qt, r, "")),
        e = fe
    }
    (s || r) && this.props.push(e, r, s[e])
}, qu = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, Yl = function() {
    var t, e, r = this.props, n = this.target, i = n.style, s = n._gsap;
    for (t = 0; t < r.length; t += 3)
        r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(_o, "-$1").toLowerCase());
    if (this.tfm) {
        for (e in this.tfm)
            s[e] = this.tfm[e];
        s.svg && (s.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (!(t = ho()) || !t.isStart) && !i[fe] && (qu(i),
        s.uncache = 1)
    }
}, ju = function(t, e) {
    var r = {
        target: t,
        props: [],
        revert: Yl,
        save: Nl
    };
    return t._gsap || pt.core.getCache(t),
    e && e.split(",").forEach((function(t) {
        return r.save(t)
    }
    )),
    r
}, Is = function(t, e) {
    var r = Fr.createElementNS ? Fr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Fr.createElement(t);
    return r.style ? r : Fr.createElement(t)
}, ir = function t(e, r, n) {
    var i = getComputedStyle(e);
    return i[r] || i.getPropertyValue(r.replace(_o, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, Pi(r) || r, 1) || ""
}, Bo = "O,Moz,ms,Ms,Webkit".split(","), Pi = function(t, e, r) {
    var n = (e || Gr).style
      , i = 5;
    if (t in n && !r)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Bo[i] + t in n); )
        ;
    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Bo[i] : "") + t
}, Ns = function() {
    Tl() && window.document && (Ao = window,
    Fr = Ao.document,
    xi = Fr.documentElement,
    Gr = Is("div") || {
        style: {}
    },
    Is("div"),
    fe = Pi(fe),
    qt = fe + "Origin",
    Gr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Ku = !!Pi("perspective"),
    ho = pt.core.reverting,
    co = 1)
}, gs = function t(e) {
    var r, n = Is("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, s = this.nextSibling, o = this.style.cssText;
    if (xi.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            r = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (r = this._gsapBBox());
    return i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
    xi.removeChild(n),
    this.style.cssText = o,
    r
}, Ro = function(t, e) {
    for (var r = e.length; r--; )
        if (t.hasAttribute(e[r]))
            return t.getAttribute(e[r])
}, Qu = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = gs.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === gs || (e = gs.call(t, !0)),
    !e || e.width || e.x || e.y ? e : {
        x: +Ro(t, ["x", "cx", "x1"]) || 0,
        y: +Ro(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    }
}, Zu = function(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Qu(t))
}, on = function(t, e) {
    if (e) {
        var r = t.style;
        e in pr && e !== qt && (e = fe),
        r.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
        r.removeProperty(e.replace(_o, "-$1").toLowerCase())) : r.removeAttribute(e)
    }
}, vr = function(t, e, r, n, i, s) {
    var o = new Dt(t._pt,e,r,0,1,s ? Gu : Hu);
    return t._pt = o,
    o.b = n,
    o.e = i,
    t._props.push(r),
    o
}, Lo = {
    deg: 1,
    rad: 1,
    turn: 1
}, Xl = {
    grid: 1,
    flex: 1
}, kr = function t(e, r, n, i) {
    var s, o, a, u, l = parseFloat(n) || 0, c = (n + "").trim().substr((l + "").length) || "px", f = Gr.style, h = Sl.test(r), D = "svg" === e.tagName.toLowerCase(), p = (D ? "client" : "offset") + (h ? "Width" : "Height"), d = 100, g = "px" === i, _ = "%" === i;
    return i === c || !l || Lo[i] || Lo[c] ? l : ("px" !== c && !g && (l = t(e, r, n, "px")),
    u = e.getCTM && Zu(e),
    !_ && "%" !== c || !pr[r] && !~r.indexOf("adius") ? (f[h ? "width" : "height"] = d + (g ? c : i),
    o = ~r.indexOf("adius") || "em" === i && e.appendChild && !D ? e : e.parentNode,
    u && (o = (e.ownerSVGElement || {}).parentNode),
    (!o || o === Fr || !o.appendChild) && (o = Fr.body),
    (a = o._gsap) && _ && a.width && h && a.time === bt.time && !a.uncache ? ge(l / a.width * d) : ((_ || "%" === c) && !Xl[ir(o, "display")] && (f.position = ir(e, "position")),
    o === e && (f.position = "static"),
    o.appendChild(Gr),
    s = Gr[p],
    o.removeChild(Gr),
    f.position = "absolute",
    h && _ && ((a = jr(o)).time = bt.time,
    a.width = o[p]),
    ge(g ? s * l / d : s && l ? d / s * l : 0))) : (s = u ? e.getBBox()[h ? "width" : "height"] : e[p],
    ge(_ ? l / s * d : l / 100 * s)))
}, fr = function(t, e, r, n) {
    var i;
    return co || Ns(),
    e in rr && "transform" !== e && (~(e = rr[e]).indexOf(",") && (e = e.split(",")[0])),
    pr[e] && "transform" !== e ? (i = an(t, n),
    i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Zn(ir(t, qt)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Qn[e] && Qn[e](t, e, r) || ir(t, e) || du(t, e) || ("opacity" === e ? 1 : 0)),
    r && !~(i + "").trim().indexOf(" ") ? kr(t, e, i, r) + r : i
}, Vl = function(t, e, r, n) {
    if (!r || "none" === r) {
        var i = Pi(e, t, 1)
          , s = i && ir(t, i, 1);
        s && s !== r ? (e = i,
        r = s) : "borderColor" === e && (r = ir(t, "borderTopColor"))
    }
    var o, a, u, l, c, f, h, D, p, d, g, _ = new Dt(this._pt,t.style,e,0,1,Uu), m = 0, v = 0;
    if (_.b = r,
    _.e = n,
    r += "",
    "auto" === (n += "") && (t.style[e] = n,
    n = ir(t, e) || n,
    t.style[e] = r),
    Mu(o = [r, n]),
    n = o[1],
    u = (r = o[0]).match(Di) || [],
    (n.match(Di) || []).length) {
        for (; a = Di.exec(n); )
            h = a[0],
            p = n.substring(m, a.index),
            c ? c = (c + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (c = 1),
            h !== (f = u[v++] || "") && (l = parseFloat(f) || 0,
            g = f.substr((l + "").length),
            "=" === h.charAt(1) && (h = Ci(l, h) + g),
            D = parseFloat(h),
            d = h.substr((D + "").length),
            m = Di.lastIndex - d.length,
            d || (d = d || St.units[e] || g,
            m === n.length && (n += d,
            _.e += d)),
            g !== d && (l = kr(t, e, f, d) || 0),
            _._pt = {
                _next: _._pt,
                p: p || 1 === v ? p : ",",
                s: l,
                c: D - l,
                m: c && c < 4 || "zIndex" === e ? Math.round : 0
            });
        _.c = m < n.length ? n.substring(m, n.length) : ""
    } else
        _.r = "display" === e && "none" === n ? Gu : Hu;
    return au.test(n) && (_.e = 0),
    this._pt = _,
    _
}, zo = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Ul = function(t) {
    var e = t.split(" ")
      , r = e[0]
      , n = e[1] || "50%";
    return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (t = r,
    r = n,
    n = t),
    e[0] = zo[r] || r,
    e[1] = zo[n] || n,
    e.join(" ")
}, $l = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var r, n, i, s = e.t, o = s.style, a = e.u, u = s._gsap;
        if ("all" === a || !0 === a)
            o.cssText = "",
            n = 1;
        else
            for (i = (a = a.split(",")).length; --i > -1; )
                r = a[i],
                pr[r] && (n = 1,
                r = "transformOrigin" === r ? qt : fe),
                on(s, r);
        n && (on(s, fe),
        u && (u.svg && s.removeAttribute("transform"),
        an(s, 1),
        u.uncache = 1,
        qu(o)))
    }
}, Qn = {
    clearProps: function(t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
            var s = t._pt = new Dt(t._pt,e,r,0,0,$l);
            return s.u = n,
            s.pr = -10,
            s.tween = i,
            t._props.push(r),
            1
        }
    }
}, un = [1, 0, 0, 1, 0, 0], Ju = {}, ea = function(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
}, Io = function(t) {
    var e = ir(t, fe);
    return ea(e) ? un : e.substr(7).match(uu).map(ge)
}, Do = function(t, e) {
    var r, n, i, s, o = t._gsap || jr(t), a = t.style, u = Io(t);
    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? un : u : (u === un && !t.offsetParent && t !== xi && !o.svg && (i = a.display,
    a.display = "block",
    (!(r = t.parentNode) || !t.offsetParent) && (s = 1,
    n = t.nextElementSibling,
    xi.appendChild(t)),
    u = Io(t),
    i ? a.display = i : on(t, "display"),
    s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : xi.removeChild(t))),
    e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
}, Ys = function(t, e, r, n, i, s) {
    var o, a, u, l = t._gsap, c = i || Do(t, !0), f = l.xOrigin || 0, h = l.yOrigin || 0, D = l.xOffset || 0, p = l.yOffset || 0, d = c[0], g = c[1], _ = c[2], m = c[3], v = c[4], y = c[5], C = e.split(" "), F = parseFloat(C[0]) || 0, E = parseFloat(C[1]) || 0;
    r ? c !== un && (a = d * m - g * _) && (u = F * (-g / a) + E * (d / a) - (d * y - g * v) / a,
    F = F * (m / a) + E * (-_ / a) + (_ * y - m * v) / a,
    E = u) : (F = (o = Qu(t)).x + (~C[0].indexOf("%") ? F / 100 * o.width : F),
    E = o.y + (~(C[1] || C[0]).indexOf("%") ? E / 100 * o.height : E)),
    n || !1 !== n && l.smooth ? (v = F - f,
    y = E - h,
    l.xOffset = D + (v * d + y * _) - v,
    l.yOffset = p + (v * g + y * m) - y) : l.xOffset = l.yOffset = 0,
    l.xOrigin = F,
    l.yOrigin = E,
    l.smooth = !!n,
    l.origin = e,
    l.originIsAbsolute = !!r,
    t.style[qt] = "0px 0px",
    s && (vr(s, l, "xOrigin", f, F),
    vr(s, l, "yOrigin", h, E),
    vr(s, l, "xOffset", D, l.xOffset),
    vr(s, l, "yOffset", p, l.yOffset)),
    t.setAttribute("data-svg-origin", F + " " + E)
}, an = function(t, e) {
    var r = t._gsap || new zu(t);
    if ("x"in r && !e && !r.uncache)
        return r;
    var n, i, s, o, a, u, l, c, f, h, D, p, d, g, _, m, v, y, C, F, E, x, b, w, T, A, k, S, P, B, M, O, L = t.style, R = r.scaleX < 0, X = "px", z = "deg", Y = getComputedStyle(t), H = ir(t, qt) || "0";
    return n = i = s = u = l = c = f = h = D = 0,
    o = a = 1,
    r.svg = !(!t.getCTM || !Zu(t)),
    Y.translate && (("none" !== Y.translate || "none" !== Y.scale || "none" !== Y.rotate) && (L[fe] = ("none" !== Y.translate ? "translate3d(" + (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") + ("none" !== Y.scale ? "scale(" + Y.scale.split(" ").join(",") + ") " : "") + ("none" !== Y[fe] ? Y[fe] : "")),
    L.scale = L.rotate = L.translate = "none"),
    g = Do(t, r.svg),
    r.svg && (r.uncache ? (T = t.getBBox(),
    H = r.xOrigin - T.x + "px " + (r.yOrigin - T.y) + "px",
    w = "") : w = !e && t.getAttribute("data-svg-origin"),
    Ys(t, w || H, !!w || r.originIsAbsolute, !1 !== r.smooth, g)),
    p = r.xOrigin || 0,
    d = r.yOrigin || 0,
    g !== un && (y = g[0],
    C = g[1],
    F = g[2],
    E = g[3],
    n = x = g[4],
    i = b = g[5],
    6 === g.length ? (o = Math.sqrt(y * y + C * C),
    a = Math.sqrt(E * E + F * F),
    u = y || C ? fi(C, y) * $r : 0,
    (f = F || E ? fi(F, E) * $r + u : 0) && (a *= Math.abs(Math.cos(f * yi))),
    r.svg && (n -= p - (p * y + d * F),
    i -= d - (p * C + d * E))) : (O = g[6],
    B = g[7],
    k = g[8],
    S = g[9],
    P = g[10],
    M = g[11],
    n = g[12],
    i = g[13],
    s = g[14],
    l = (_ = fi(O, P)) * $r,
    _ && (w = x * (m = Math.cos(-_)) + k * (v = Math.sin(-_)),
    T = b * m + S * v,
    A = O * m + P * v,
    k = x * -v + k * m,
    S = b * -v + S * m,
    P = O * -v + P * m,
    M = B * -v + M * m,
    x = w,
    b = T,
    O = A),
    c = (_ = fi(-F, P)) * $r,
    _ && (m = Math.cos(-_),
    M = E * (v = Math.sin(-_)) + M * m,
    y = w = y * m - k * v,
    C = T = C * m - S * v,
    F = A = F * m - P * v),
    u = (_ = fi(C, y)) * $r,
    _ && (w = y * (m = Math.cos(_)) + C * (v = Math.sin(_)),
    T = x * m + b * v,
    C = C * m - y * v,
    b = b * m - x * v,
    y = w,
    x = T),
    l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0,
    c = 180 - c),
    o = ge(Math.sqrt(y * y + C * C + F * F)),
    a = ge(Math.sqrt(b * b + O * O)),
    _ = fi(x, b),
    f = Math.abs(_) > 2e-4 ? _ * $r : 0,
    D = M ? 1 / (M < 0 ? -M : M) : 0),
    r.svg && (w = t.getAttribute("transform"),
    r.forceCSS = t.setAttribute("transform", "") || !ea(ir(t, fe)),
    w && t.setAttribute("transform", w))),
    Math.abs(f) > 90 && Math.abs(f) < 270 && (R ? (o *= -1,
    f += u <= 0 ? 180 : -180,
    u += u <= 0 ? 180 : -180) : (a *= -1,
    f += f <= 0 ? 180 : -180)),
    e = e || r.uncache,
    r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + X,
    r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + X,
    r.z = s + X,
    r.scaleX = ge(o),
    r.scaleY = ge(a),
    r.rotation = ge(u) + z,
    r.rotationX = ge(l) + z,
    r.rotationY = ge(c) + z,
    r.skewX = f + z,
    r.skewY = h + z,
    r.transformPerspective = D + X,
    (r.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (L[qt] = Zn(H)),
    r.xOffset = r.yOffset = 0,
    r.force3D = St.force3D,
    r.renderTransform = r.svg ? Hl : Ku ? ta : Wl,
    r.uncache = 0,
    r
}, Zn = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, ms = function(t, e, r) {
    var n = qe(e);
    return ge(parseFloat(e) + parseFloat(kr(t, "x", r + "px", n))) + n
}, Wl = function(t, e) {
    e.z = "0px",
    e.rotationY = e.rotationX = "0deg",
    e.force3D = 0,
    ta(t, e)
}, Vr = "0deg", Ri = "0px", Ur = ") ", ta = function(t, e) {
    var r = e || this
      , n = r.xPercent
      , i = r.yPercent
      , s = r.x
      , o = r.y
      , a = r.z
      , u = r.rotation
      , l = r.rotationY
      , c = r.rotationX
      , f = r.skewX
      , h = r.skewY
      , D = r.scaleX
      , p = r.scaleY
      , d = r.transformPerspective
      , g = r.force3D
      , _ = r.target
      , m = r.zOrigin
      , v = ""
      , y = "auto" === g && t && 1 !== t || !0 === g;
    if (m && (c !== Vr || l !== Vr)) {
        var C, F = parseFloat(l) * yi, E = Math.sin(F), x = Math.cos(F);
        F = parseFloat(c) * yi,
        C = Math.cos(F),
        s = ms(_, s, E * C * -m),
        o = ms(_, o, -Math.sin(F) * -m),
        a = ms(_, a, x * C * -m + m)
    }
    d !== Ri && (v += "perspective(" + d + Ur),
    (n || i) && (v += "translate(" + n + "%, " + i + "%) "),
    (y || s !== Ri || o !== Ri || a !== Ri) && (v += a !== Ri || y ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Ur),
    u !== Vr && (v += "rotate(" + u + Ur),
    l !== Vr && (v += "rotateY(" + l + Ur),
    c !== Vr && (v += "rotateX(" + c + Ur),
    (f !== Vr || h !== Vr) && (v += "skew(" + f + ", " + h + Ur),
    (1 !== D || 1 !== p) && (v += "scale(" + D + ", " + p + Ur),
    _.style[fe] = v || "translate(0, 0)"
}, Hl = function(t, e) {
    var r, n, i, s, o, a = e || this, u = a.xPercent, l = a.yPercent, c = a.x, f = a.y, h = a.rotation, D = a.skewX, p = a.skewY, d = a.scaleX, g = a.scaleY, _ = a.target, m = a.xOrigin, v = a.yOrigin, y = a.xOffset, C = a.yOffset, F = a.forceCSS, E = parseFloat(c), x = parseFloat(f);
    h = parseFloat(h),
    D = parseFloat(D),
    (p = parseFloat(p)) && (D += p = parseFloat(p),
    h += p),
    h || D ? (h *= yi,
    D *= yi,
    r = Math.cos(h) * d,
    n = Math.sin(h) * d,
    i = Math.sin(h - D) * -g,
    s = Math.cos(h - D) * g,
    D && (p *= yi,
    o = Math.tan(D - p),
    i *= o = Math.sqrt(1 + o * o),
    s *= o,
    p && (o = Math.tan(p),
    r *= o = Math.sqrt(1 + o * o),
    n *= o)),
    r = ge(r),
    n = ge(n),
    i = ge(i),
    s = ge(s)) : (r = d,
    s = g,
    n = i = 0),
    (E && !~(c + "").indexOf("px") || x && !~(f + "").indexOf("px")) && (E = kr(_, "x", c, "px"),
    x = kr(_, "y", f, "px")),
    (m || v || y || C) && (E = ge(E + m - (m * r + v * i) + y),
    x = ge(x + v - (m * n + v * s) + C)),
    (u || l) && (o = _.getBBox(),
    E = ge(E + u / 100 * o.width),
    x = ge(x + l / 100 * o.height)),
    o = "matrix(" + r + "," + n + "," + i + "," + s + "," + E + "," + x + ")",
    _.setAttribute("transform", o),
    F && (_.style[fe] = o)
}, Gl = function(t, e, r, n, i) {
    var s, o, a = 360, u = ke(i), l = parseFloat(i) * (u && ~i.indexOf("rad") ? $r : 1) - n, c = n + l + "deg";
    return u && ("short" === (s = i.split("_")[1]) && ((l %= a) !== l % 180 && (l += l < 0 ? a : -a)),
    "cw" === s && l < 0 ? l = (l + a * Mo) % a - ~~(l / a) * a : "ccw" === s && l > 0 && (l = (l - a * Mo) % a - ~~(l / a) * a)),
    t._pt = o = new Dt(t._pt,e,r,n,l,kl),
    o.e = c,
    o.u = "deg",
    t._props.push(r),
    o
}, No = function(t, e) {
    for (var r in e)
        t[r] = e[r];
    return t
}, ql = function(t, e, r) {
    var n, i, s, o, a, u, l, c = No({}, r._gsap), f = r.style;
    for (i in c.svg ? (s = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    f[fe] = e,
    n = an(r, 1),
    on(r, fe),
    r.setAttribute("transform", s)) : (s = getComputedStyle(r)[fe],
    f[fe] = e,
    n = an(r, 1),
    f[fe] = s),
    pr)
        (s = c[i]) !== (o = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = qe(s) !== (l = qe(o)) ? kr(r, i, s, l) : parseFloat(s),
        u = parseFloat(o),
        t._pt = new Dt(t._pt,n,i,a,u - a,zs),
        t._pt.u = l || 0,
        t._props.push(i));
    No(n, c)
};
dt("padding,margin,Width,Radius", (function(t, e) {
    var r = "Top"
      , n = "Right"
      , i = "Bottom"
      , s = "Left"
      , o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map((function(r) {
        return e < 2 ? t + r : "border" + r + t
    }
    ));
    Qn[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
        var s, a;
        if (arguments.length < 4)
            return s = o.map((function(e) {
                return fr(t, e, r)
            }
            )),
            5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
        s = (n + "").split(" "),
        a = {},
        o.forEach((function(t, e) {
            return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
        }
        )),
        t.init(e, a, i)
    }
}
));
var ra = {
    name: "css",
    register: Ns,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, r, n, i) {
        var s, o, a, u, l, c, f, h, D, p, d, g, _, m, v, y, C = this._props, F = t.style, E = r.vars.startAt;
        for (f in co || Ns(),
        this.styles = this.styles || ju(t),
        y = this.styles.props,
        this.tween = r,
        e)
            if ("autoRound" !== f && (o = e[f],
            !Et[f] || !Iu(f, e, r, n, t, i)))
                if (l = typeof o,
                c = Qn[f],
                "function" === l && (l = typeof (o = o.call(r, n, t, i))),
                "string" === l && ~o.indexOf("random(") && (o = rn(o)),
                c)
                    c(this, t, f, o, r) && (v = 1);
                else if ("--" === f.substr(0, 2))
                    s = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                    o += "",
                    Tr.lastIndex = 0,
                    Tr.test(s) || (h = qe(s),
                    D = qe(o)),
                    D ? h !== D && (s = kr(t, f, s, D) + D) : h && (o += h),
                    this.add(F, "setProperty", s, o, n, i, 0, 0, f),
                    C.push(f),
                    y.push(f, 0, F[f]);
                else if ("undefined" !== l) {
                    if (E && f in E ? (s = "function" == typeof E[f] ? E[f].call(r, n, t, i) : E[f],
                    ke(s) && ~s.indexOf("random(") && (s = rn(s)),
                    qe(s + "") || (s += St.units[f] || qe(fr(t, f)) || ""),
                    "=" === (s + "").charAt(1) && (s = fr(t, f))) : s = fr(t, f),
                    u = parseFloat(s),
                    (p = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                    a = parseFloat(o),
                    f in rr && ("autoAlpha" === f && (1 === u && "hidden" === fr(t, "visibility") && a && (u = 0),
                    y.push("visibility", 0, F.visibility),
                    vr(this, F, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                    "scale" !== f && "transform" !== f && (~(f = rr[f]).indexOf(",") && (f = f.split(",")[0]))),
                    d = f in pr)
                        if (this.styles.save(f),
                        g || ((_ = t._gsap).renderTransform && !e.parseTransform || an(t, e.parseTransform),
                        m = !1 !== e.smoothOrigin && _.smooth,
                        (g = this._pt = new Dt(this._pt,F,fe,0,1,_.renderTransform,_,0,-1)).dep = 1),
                        "scale" === f)
                            this._pt = new Dt(this._pt,_,"scaleY",_.scaleY,(p ? Ci(_.scaleY, p + a) : a) - _.scaleY || 0,zs),
                            this._pt.u = 0,
                            C.push("scaleY", f),
                            f += "X";
                        else {
                            if ("transformOrigin" === f) {
                                y.push(qt, 0, F[qt]),
                                o = Ul(o),
                                _.svg ? Ys(t, o, 0, m, 0, this) : ((D = parseFloat(o.split(" ")[2]) || 0) !== _.zOrigin && vr(this, _, "zOrigin", _.zOrigin, D),
                                vr(this, F, f, Zn(s), Zn(o)));
                                continue
                            }
                            if ("svgOrigin" === f) {
                                Ys(t, o, 1, m, 0, this);
                                continue
                            }
                            if (f in Ju) {
                                Gl(this, _, f, u, p ? Ci(u, p + o) : o);
                                continue
                            }
                            if ("smoothOrigin" === f) {
                                vr(this, _, "smooth", _.smooth, o);
                                continue
                            }
                            if ("force3D" === f) {
                                _[f] = o;
                                continue
                            }
                            if ("transform" === f) {
                                ql(this, o, t);
                                continue
                            }
                        }
                    else
                        f in F || (f = Pi(f) || f);
                    if (d || (a || 0 === a) && (u || 0 === u) && !Pl.test(o) && f in F)
                        a || (a = 0),
                        (h = (s + "").substr((u + "").length)) !== (D = qe(o) || (f in St.units ? St.units[f] : h)) && (u = kr(t, f, s, D)),
                        this._pt = new Dt(this._pt,d ? _ : F,f,u,(p ? Ci(u, p + a) : a) - u,d || "px" !== D && "zIndex" !== f || !1 === e.autoRound ? zs : Ol),
                        this._pt.u = D || 0,
                        h !== D && "%" !== D && (this._pt.b = s,
                        this._pt.r = Al);
                    else if (f in F)
                        Vl.call(this, t, f, s, p ? p + o : o);
                    else if (f in t)
                        this.add(t, f, s || t[f], p ? p + o : o, n, i);
                    else if ("parseTransform" !== f) {
                        ro(f, o);
                        continue
                    }
                    d || (f in F ? y.push(f, 0, F[f]) : y.push(f, 1, s || t[f])),
                    C.push(f)
                }
        v && $u(this)
    },
    render: function(t, e) {
        if (e.tween._time || !ho())
            for (var r = e._pt; r; )
                r.r(t, r.d),
                r = r._next;
        else
            e.styles.revert()
    },
    get: fr,
    aliases: rr,
    getSetter: function(t, e, r) {
        var n = rr[e];
        return n && n.indexOf(",") < 0 && (e = n),
        e in pr && e !== qt && (t._gsap.x || fr(t, "x")) ? r && Oo === r ? "scale" === e ? Ll : Rl : (Oo = r || {}) && ("scale" === e ? zl : Il) : t.style && !Js(t.style[e]) ? Ml : ~e.indexOf("-") ? Bl : lo(t, e)
    },
    core: {
        _removeProperty: on,
        _getMatrix: Do
    }
};
pt.utils.checkPrefix = Pi,
pt.core.getStyleSaver = ju,
function(t, e, r, n) {
    var i = dt(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        pr[t] = 1
    }
    ));
    dt(e, (function(t) {
        St.units[t] = "deg",
        Ju[t] = 1
    }
    )),
    rr[i[13]] = t + "," + e,
    dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        rr[e[1]] = i[e[0]]
    }
    ))
}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"),
dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
    St.units[t] = "px"
}
)),
pt.registerPlugin(ra);
var me = pt.registerPlugin(ra) || pt;
function Yo(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n)
    }
}
function jl(t, e, r) {
    return e && Yo(t.prototype, e),
    r && Yo(t, r),
    t
}
me.core.Tween;
var ze, Xs, Tt, Er, wr, Fi, ia, Wr, Gi, na, hr, Ht, sa, oa = function() {
    return ze || typeof window < "u" && (ze = window.gsap) && ze.registerPlugin && ze
}, ua = 1, gi = [], U = [], nr = [], qi = Date.now, Vs = function(t, e) {
    return e
}, Kl = function() {
    var t = Gi.core
      , e = t.bridge || {}
      , r = t._scrollers
      , n = t._proxies;
    r.push.apply(r, U),
    n.push.apply(n, nr),
    U = r,
    nr = n,
    Vs = function(t, r) {
        return e[t](r)
    }
}, Sr = function(t, e) {
    return ~nr.indexOf(t) && nr[nr.indexOf(t) + 1][e]
}, ji = function(t) {
    return !!~na.indexOf(t)
}, rt = function(t, e, r, n, i) {
    return t.addEventListener(e, r, {
        passive: !n,
        capture: !!i
    })
}, tt = function(t, e, r, n) {
    return t.removeEventListener(e, r, !!n)
}, Dn = "scrollLeft", pn = "scrollTop", Us = function() {
    return hr && hr.isPressed || U.cache++
}, Jn = function(t, e) {
    var r = function r(n) {
        if (n || 0 === n) {
            ua && (Tt.history.scrollRestoration = "manual");
            var i = hr && hr.isPressed;
            n = r.v = Math.round(n) || (hr && hr.iOS ? 1 : 0),
            t(n),
            r.cacheID = U.cache,
            i && Vs("ss", n)
        } else
            (e || U.cache !== r.cacheID || Vs("ref")) && (r.cacheID = U.cache,
            r.v = t());
        return r.v + r.offset
    };
    return r.offset = 0,
    t && r
}, ot = {
    s: Dn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Jn((function(t) {
        return arguments.length ? Tt.scrollTo(t, be.sc()) : Tt.pageXOffset || Er[Dn] || wr[Dn] || Fi[Dn] || 0
    }
    ))
}, be = {
    s: pn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: ot,
    sc: Jn((function(t) {
        return arguments.length ? Tt.scrollTo(ot.sc(), t) : Tt.pageYOffset || Er[pn] || wr[pn] || Fi[pn] || 0
    }
    ))
}, ct = function(t, e) {
    return (e && e._ctx && e._ctx.selector || ze.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== ze.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
}, Ar = function(t, e) {
    var r = e.s
      , n = e.sc;
    ji(t) && (t = Er.scrollingElement || wr);
    var i = U.indexOf(t)
      , s = n === be.sc ? 1 : 2;
    !~i && (i = U.push(t) - 1),
    U[i + s] || rt(t, "scroll", Us);
    var o = U[i + s]
      , a = o || (U[i + s] = Jn(Sr(t, r), !0) || (ji(t) ? n : Jn((function(e) {
        return arguments.length ? t[r] = e : t[r]
    }
    ))));
    return a.target = t,
    o || (a.smooth = "smooth" === ze.getProperty(t, "scrollBehavior")),
    a
}, $s = function(t, e, r) {
    var n = t
      , i = t
      , s = qi()
      , o = s
      , a = e || 50
      , u = Math.max(500, 3 * a)
      , l = function(t, e) {
        var u = qi();
        e || u - s > a ? (i = n,
        n = t,
        o = s,
        s = u) : r ? n += t : n = i + (t - i) / (u - o) * (s - o)
    };
    return {
        update: l,
        reset: function() {
            i = n = r ? 0 : n,
            o = s = 0
        },
        getVelocity: function(t) {
            var e = o
              , a = i
              , c = qi();
            return (t || 0 === t) && t !== n && l(t),
            s === o || c - o > u ? 0 : (n + (r ? a : -a)) / ((r ? c : s) - e) * 1e3
        }
    }
}, Li = function(t, e) {
    return e && !t._gsapAllow && t.preventDefault(),
    t.changedTouches ? t.changedTouches[0] : t
}, Xo = function(t) {
    var e = Math.max.apply(Math, t)
      , r = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(r) ? e : r
}, aa = function() {
    (Gi = ze.core.globals().ScrollTrigger) && Gi.core && Kl()
}, la = function(t) {
    return (ze = t || oa()) && typeof document < "u" && document.body && (Tt = window,
    Er = document,
    wr = Er.documentElement,
    Fi = Er.body,
    na = [Tt, Er, wr, Fi],
    ze.utils.clamp,
    sa = ze.core.context || function() {}
    ,
    Wr = "onpointerenter"in Fi ? "pointer" : "mouse",
    ia = Ee.isTouch = Tt.matchMedia && Tt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Tt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Ht = Ee.eventTypes = ("ontouchstart"in wr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in wr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout((function() {
        return ua = 0
    }
    ), 500),
    aa(),
    Xs = 1),
    Xs
};
ot.op = be,
U.cache = 0;
var Ee = function() {
    function t(t) {
        this.init(t)
    }
    return t.prototype.init = function(t) {
        Xs || la(ze) || console.warn("Please gsap.registerPlugin(Observer)"),
        Gi || aa();
        var e = t.tolerance
          , r = t.dragMinimum
          , n = t.type
          , i = t.target
          , s = t.lineHeight
          , o = t.debounce
          , a = t.preventDefault
          , u = t.onStop
          , l = t.onStopDelay
          , c = t.ignore
          , f = t.wheelSpeed
          , h = t.event
          , D = t.onDragStart
          , p = t.onDragEnd
          , d = t.onDrag
          , g = t.onPress
          , _ = t.onRelease
          , m = t.onRight
          , v = t.onLeft
          , y = t.onUp
          , C = t.onDown
          , F = t.onChangeX
          , E = t.onChangeY
          , x = t.onChange
          , b = t.onToggleX
          , w = t.onToggleY
          , T = t.onHover
          , A = t.onHoverEnd
          , k = t.onMove
          , S = t.ignoreCheck
          , P = t.isNormalizer
          , B = t.onGestureStart
          , M = t.onGestureEnd
          , O = t.onWheel
          , L = t.onEnable
          , R = t.onDisable
          , X = t.onClick
          , z = t.scrollSpeed
          , Y = t.capture
          , H = t.allowClicks
          , U = t.lockAxis
          , I = t.onLockAxis;
        this.target = i = ct(i) || wr,
        this.vars = t,
        c && (c = ze.utils.toArray(c)),
        e = e || 1e-9,
        r = r || 0,
        f = f || 1,
        z = z || 1,
        n = n || "wheel,touch,pointer",
        o = !1 !== o,
        s || (s = parseFloat(Tt.getComputedStyle(Fi).lineHeight) || 22);
        var G, q, N, V, W, j, $, K = this, Q = 0, Z = 0, J = Ar(i, ot), et = Ar(i, be), nt = J(), it = et(), st = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === Ht[0], at = ji(i), ut = i.ownerDocument || Er, lt = [0, 0, 0], ft = [0, 0, 0], ht = 0, Dt = function() {
            return ht = qi()
        }, pt = function(t, e) {
            return (K.event = t) && c && ~c.indexOf(t.target) || e && st && "touch" !== t.pointerType || S && S(t, e)
        }, dt = function() {
            var t = K.deltaX = Xo(lt)
              , r = K.deltaY = Xo(ft)
              , n = Math.abs(t) >= e
              , i = Math.abs(r) >= e;
            x && (n || i) && x(K, t, r, lt, ft),
            n && (m && K.deltaX > 0 && m(K),
            v && K.deltaX < 0 && v(K),
            F && F(K),
            b && K.deltaX < 0 != Q < 0 && b(K),
            Q = K.deltaX,
            lt[0] = lt[1] = lt[2] = 0),
            i && (C && K.deltaY > 0 && C(K),
            y && K.deltaY < 0 && y(K),
            E && E(K),
            w && K.deltaY < 0 != Z < 0 && w(K),
            Z = K.deltaY,
            ft[0] = ft[1] = ft[2] = 0),
            (V || N) && (k && k(K),
            N && (d(K),
            N = !1),
            V = !1),
            j && !(j = !1) && I && I(K),
            W && (O(K),
            W = !1),
            G = 0
        }, gt = function(t, e, r) {
            lt[r] += t,
            ft[r] += e,
            K._vx.update(t),
            K._vy.update(e),
            o ? G || (G = requestAnimationFrame(dt)) : dt()
        }, _t = function(t, e) {
            U && !$ && (K.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y",
            j = !0),
            "y" !== $ && (lt[2] += t,
            K._vx.update(t, !0)),
            "x" !== $ && (ft[2] += e,
            K._vy.update(e, !0)),
            o ? G || (G = requestAnimationFrame(dt)) : dt()
        }, mt = function(t) {
            if (!pt(t, 1)) {
                var e = (t = Li(t, a)).clientX
                  , n = t.clientY
                  , i = e - K.x
                  , s = n - K.y
                  , o = K.isDragging;
                K.x = e,
                K.y = n,
                (o || Math.abs(K.startX - e) >= r || Math.abs(K.startY - n) >= r) && (d && (N = !0),
                o || (K.isDragging = !0),
                _t(i, s),
                o || D && D(K))
            }
        }, vt = K.onPress = function(t) {
            pt(t, 1) || t && t.button || (K.axis = $ = null,
            q.pause(),
            K.isPressed = !0,
            t = Li(t),
            Q = Z = 0,
            K.startX = K.x = t.clientX,
            K.startY = K.y = t.clientY,
            K._vx.reset(),
            K._vy.reset(),
            rt(P ? i : ut, Ht[1], mt, a, !0),
            K.deltaX = K.deltaY = 0,
            g && g(K))
        }
        , yt = K.onRelease = function(t) {
            if (!pt(t, 1)) {
                tt(P ? i : ut, Ht[1], mt, !0);
                var e = !isNaN(K.y - K.startY)
                  , r = K.isDragging && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3)
                  , n = Li(t);
                !r && e && (K._vx.reset(),
                K._vy.reset(),
                a && H && ze.delayedCall(.08, (function() {
                    if (qi() - ht > 300 && !t.defaultPrevented)
                        if (t.target.click)
                            t.target.click();
                        else if (ut.createEvent) {
                            var e = ut.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Tt, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                            t.target.dispatchEvent(e)
                        }
                }
                ))),
                K.isDragging = K.isGesturing = K.isPressed = !1,
                u && !P && q.restart(!0),
                p && r && p(K),
                _ && _(K, r)
            }
        }
        , Ct = function(t) {
            return t.touches && t.touches.length > 1 && (K.isGesturing = !0) && B(t, K.isDragging)
        }, Ft = function() {
            return (K.isGesturing = !1) || M(K)
        }, Et = function(t) {
            if (!pt(t)) {
                var e = J()
                  , r = et();
                gt((e - nt) * z, (r - it) * z, 1),
                nt = e,
                it = r,
                u && q.restart(!0)
            }
        }, xt = function(t) {
            if (!pt(t)) {
                t = Li(t, a),
                O && (W = !0);
                var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? Tt.innerHeight : 1) * f;
                gt(t.deltaX * e, t.deltaY * e, 0),
                u && !P && q.restart(!0)
            }
        }, bt = function(t) {
            if (!pt(t)) {
                var e = t.clientX
                  , r = t.clientY
                  , n = e - K.x
                  , i = r - K.y;
                K.x = e,
                K.y = r,
                V = !0,
                (n || i) && _t(n, i)
            }
        }, wt = function(t) {
            K.event = t,
            T(K)
        }, At = function(t) {
            K.event = t,
            A(K)
        }, kt = function(t) {
            return pt(t) || Li(t, a) && X(K)
        };
        q = K._dc = ze.delayedCall(l || .25, (function() {
            K._vx.reset(),
            K._vy.reset(),
            q.pause(),
            u && u(K)
        }
        )).pause(),
        K.deltaX = K.deltaY = 0,
        K._vx = $s(0, 50, !0),
        K._vy = $s(0, 50, !0),
        K.scrollX = J,
        K.scrollY = et,
        K.isDragging = K.isGesturing = K.isPressed = !1,
        sa(this),
        K.enable = function(t) {
            return K.isEnabled || (rt(at ? ut : i, "scroll", Us),
            n.indexOf("scroll") >= 0 && rt(at ? ut : i, "scroll", Et, a, Y),
            n.indexOf("wheel") >= 0 && rt(i, "wheel", xt, a, Y),
            (n.indexOf("touch") >= 0 && ia || n.indexOf("pointer") >= 0) && (rt(i, Ht[0], vt, a, Y),
            rt(ut, Ht[2], yt),
            rt(ut, Ht[3], yt),
            H && rt(i, "click", Dt, !1, !0),
            X && rt(i, "click", kt),
            B && rt(ut, "gesturestart", Ct),
            M && rt(ut, "gestureend", Ft),
            T && rt(i, Wr + "enter", wt),
            A && rt(i, Wr + "leave", At),
            k && rt(i, Wr + "move", bt)),
            K.isEnabled = !0,
            t && t.type && vt(t),
            L && L(K)),
            K
        }
        ,
        K.disable = function() {
            K.isEnabled && (gi.filter((function(t) {
                return t !== K && ji(t.target)
            }
            )).length || tt(at ? ut : i, "scroll", Us),
            K.isPressed && (K._vx.reset(),
            K._vy.reset(),
            tt(P ? i : ut, Ht[1], mt, !0)),
            tt(at ? ut : i, "scroll", Et, Y),
            tt(i, "wheel", xt, Y),
            tt(i, Ht[0], vt, Y),
            tt(ut, Ht[2], yt),
            tt(ut, Ht[3], yt),
            tt(i, "click", Dt, !0),
            tt(i, "click", kt),
            tt(ut, "gesturestart", Ct),
            tt(ut, "gestureend", Ft),
            tt(i, Wr + "enter", wt),
            tt(i, Wr + "leave", At),
            tt(i, Wr + "move", bt),
            K.isEnabled = K.isPressed = K.isDragging = !1,
            R && R(K))
        }
        ,
        K.kill = K.revert = function() {
            K.disable();
            var t = gi.indexOf(K);
            t >= 0 && gi.splice(t, 1),
            hr === K && (hr = 0)
        }
        ,
        gi.push(K),
        P && ji(i) && (hr = K),
        K.enable(h)
    }
    ,
    jl(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    t
}();
Ee.version = "3.12.2",
Ee.create = function(t) {
    return new Ee(t)
}
,
Ee.register = la,
Ee.getAll = function() {
    return gi.slice()
}
,
Ee.getById = function(t) {
    return gi.filter((function(e) {
        return e.vars.id === t
    }
    ))[0]
}
,
oa() && ze.registerPlugin(Ee);
var A, _i, H, ae, Gt, se, fa, es, ts, mi, An, gn, Xe, us, Ws, it, Vo, Uo, di, ca, Cs, ha, yt, _a, da, Da, xr, Hs, po, vi, go, xs, ln, nt, Qo, en, mn = 1, st = Date.now, ys = st(), zt = 0, Yi = 0, $o = function(t, e, r) {
    var n = vt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
    return r["_" + e + "Clamp"] = n,
    n ? t.substr(6, t.length - 7) : t
}, Wo = function(t, e) {
    return !e || vt(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
}, Ql = function t() {
    return Yi && requestAnimationFrame(t)
}, Ho = function() {
    return us = 1
}, Go = function() {
    return us = 0
}, er = function(t) {
    return t
}, Xi = function(t) {
    return Math.round(1e5 * t) / 1e5 || 0
}, pa = function() {
    return typeof window < "u"
}, ga = function() {
    return A || pa() && (A = window.gsap) && A.registerPlugin && A
}, ii = function(t) {
    return !!~fa.indexOf(t)
}, ma = function(t) {
    return ("Height" === t ? go : H["inner" + t]) || Gt["client" + t] || se["client" + t]
}, Ca = function(t) {
    return Sr(t, "getBoundingClientRect") || (ii(t) ? function() {
        return zn.width = H.innerWidth,
        zn.height = go,
        zn
    }
    : function() {
        return cr(t)
    }
    )
}, Zl = function(t, e, r) {
    var n = r.d
      , i = r.d2
      , s = r.a;
    return (s = Sr(t, "getBoundingClientRect")) ? function() {
        return s()[n]
    }
    : function() {
        return (e ? ma(i) : t["client" + i]) || 0
    }
}, Jl = function(t, e) {
    return !e || ~nr.indexOf(t) ? Ca(t) : function() {
        return zn
    }
}, _r = function(t, e) {
    var r = e.s
      , n = e.d2
      , i = e.d
      , s = e.a;
    return Math.max(0, (r = "scroll" + n) && (s = Sr(t, r)) ? s() - Ca(t)()[i] : ii(t) ? (Gt[r] || se[r]) - ma(n) : t[r] - t["offset" + n])
}, Cn = function(t, e) {
    for (var r = 0; r < di.length; r += 3)
        (!e || ~e.indexOf(di[r + 1])) && t(di[r], di[r + 1], di[r + 2])
}, vt = function(t) {
    return "string" == typeof t
}, ut = function(t) {
    return "function" == typeof t
}, On = function(t) {
    return "number" == typeof t
}, Hr = function(t) {
    return "object" == typeof t
}, zi = function(t, e, r) {
    return t && t.progress(e ? 0 : 1) && r && t.pause()
}, Fs = function(t, e) {
    if (t.enabled) {
        var r = e(t);
        r && r.totalTime && (t.callbackAnimation = r)
    }
}, ci = Math.abs, xa = "left", ya = "top", mo = "right", Co = "bottom", Jr = "width", ei = "height", Ki = "Right", Qi = "Left", Zi = "Top", Ji = "Bottom", Fe = "padding", Ot = "margin", ki = "Width", xo = "Height", Re = "px", Mt = function(t) {
    return H.getComputedStyle(t)
}, ef = function(t) {
    var e = Mt(t).position;
    t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
}, qo = function(t, e) {
    for (var r in e)
        r in t || (t[r] = e[r]);
    return t
}, cr = function(t, e) {
    var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== Mt(t)[Ws] && A.to(t, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , n = t.getBoundingClientRect();
    return r && r.progress(0).kill(),
    n
}, Gs = function(t, e) {
    var r = e.d2;
    return t["offset" + r] || t["client" + r] || 0
}, Fa = function(t) {
    var e, r = [], n = t.labels, i = t.duration();
    for (e in n)
        r.push(n[e] / i);
    return r
}, tf = function(t) {
    return function(e) {
        return A.utils.snap(Fa(t), e)
    }
}, yo = function(t) {
    var e = A.utils.snap(t)
      , r = Array.isArray(t) && t.slice(0).sort((function(t, e) {
        return t - e
    }
    ));
    return r ? function(t, n, i) {
        var s;
        if (void 0 === i && (i = .001),
        !n)
            return e(t);
        if (n > 0) {
            for (t -= i,
            s = 0; s < r.length; s++)
                if (r[s] >= t)
                    return r[s];
            return r[s - 1]
        }
        for (s = r.length,
        t += i; s--; )
            if (r[s] <= t)
                return r[s];
        return r[0]
    }
    : function(r, n, i) {
        void 0 === i && (i = .001);
        var s = e(r);
        return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
    }
}, rf = function(t) {
    return function(e, r) {
        return yo(Fa(t))(e, r.direction)
    }
}, xn = function(t, e, r, n) {
    return r.split(",").forEach((function(r) {
        return t(e, r, n)
    }
    ))
}, Pe = function(t, e, r, n, i) {
    return t.addEventListener(e, r, {
        passive: !n,
        capture: !!i
    })
}, Se = function(t, e, r, n) {
    return t.removeEventListener(e, r, !!n)
}, yn = function(t, e, r) {
    (r = r && r.wheelHandler) && (t(e, "wheel", r),
    t(e, "touchmove", r))
}, jo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Fn = {
    toggleActions: "play",
    anticipatePin: 0
}, rs = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Mn = function(t, e) {
    if (vt(t)) {
        var r = t.indexOf("=")
          , n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (n *= e / 100),
        t = t.substr(0, r - 1)),
        t = n + (t in rs ? rs[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
    }
    return t
}, vn = function(t, e, r, n, i, s, o, a) {
    var u = i.startColor
      , l = i.endColor
      , c = i.fontSize
      , f = i.indent
      , h = i.fontWeight
      , D = ae.createElement("div")
      , p = ii(r) || "fixed" === Sr(r, "pinType")
      , d = -1 !== t.indexOf("scroller")
      , g = p ? se : r
      , _ = -1 !== t.indexOf("start")
      , m = _ ? u : l
      , v = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return v += "position:" + ((d || a) && p ? "fixed;" : "absolute;"),
    (d || a || !p) && (v += (n === be ? mo : Co) + ":" + (s + parseFloat(f)) + "px;"),
    o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
    D._isStart = _,
    D.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
    D.style.cssText = v,
    D.innerText = e || 0 === e ? t + "-" + e : t,
    g.children[0] ? g.insertBefore(D, g.children[0]) : g.appendChild(D),
    D._offset = D["offset" + n.op.d2],
    Bn(D, 0, n, _),
    D
}, Bn = function(t, e, r, n) {
    var i = {
        display: "block"
    }
      , s = r[n ? "os2" : "p2"]
      , o = r[n ? "p2" : "os2"];
    t._isFlipped = n,
    i[r.a + "Percent"] = n ? -100 : 0,
    i[r.a] = n ? "1px" : 0,
    i["border" + s + ki] = 1,
    i["border" + o + ki] = 0,
    i[r.p] = e + "px",
    A.set(t, i)
}, Y = [], qs = {}, Ko = function() {
    return st() - zt > 34 && (ln || (ln = requestAnimationFrame(dr)))
}, hi = function() {
    (!yt || !yt.isPressed || yt.startX > se.clientWidth) && (U.cache++,
    yt ? ln || (ln = requestAnimationFrame(dr)) : dr(),
    zt || si("scrollStart"),
    zt = st())
}, vs = function() {
    Da = H.innerWidth,
    da = H.innerHeight
}, Vi = function() {
    U.cache++,
    !Xe && !ha && !ae.fullscreenElement && !ae.webkitFullscreenElement && (!_a || Da !== H.innerWidth || Math.abs(H.innerHeight - da) > .25 * H.innerHeight) && es.restart(!0)
}, ni = {}, nf = [], va = function t() {
    return Se(L, "scrollEnd", t) || qr(!0)
}, si = function(t) {
    return ni[t] && ni[t].map((function(t) {
        return t()
    }
    )) || nf
}, Ft = [], Ea = function(t) {
    for (var e = 0; e < Ft.length; e += 5)
        (!t || Ft[e + 4] && Ft[e + 4].query === t) && (Ft[e].style.cssText = Ft[e + 1],
        Ft[e].getBBox && Ft[e].setAttribute("transform", Ft[e + 2] || ""),
        Ft[e + 3].uncache = 1)
}, Fo = function(t, e) {
    var r;
    for (it = 0; it < Y.length; it++)
        (r = Y[it]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
    e && Ea(e),
    e || si("revert")
}, wa = function(t, e) {
    U.cache++,
    (e || !nt) && U.forEach((function(t) {
        return ut(t) && t.cacheID++ && (t.rec = 0)
    }
    )),
    vt(t) && (H.history.scrollRestoration = po = t)
}, ti = 0, sf = function() {
    if (Qo !== ti) {
        var t = Qo = ti;
        requestAnimationFrame((function() {
            return t === ti && qr(!0)
        }
        ))
    }
}, ba = function() {
    se.appendChild(vi),
    go = vi.offsetHeight || H.innerHeight,
    se.removeChild(vi)
}, qr = function(t, e) {
    if (!zt || t) {
        ba(),
        nt = L.isRefreshing = !0,
        U.forEach((function(t) {
            return ut(t) && ++t.cacheID && (t.rec = t())
        }
        ));
        var r = si("refreshInit");
        ca && L.sort(),
        e || Fo(),
        U.forEach((function(t) {
            ut(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
            t(0))
        }
        )),
        Y.slice(0).forEach((function(t) {
            return t.refresh()
        }
        )),
        Y.forEach((function(t, e) {
            if (t._subPinOffset && t.pin) {
                var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight"
                  , n = t.pin[r];
                t.revert(!0, 1),
                t.adjustPinSpacing(t.pin[r] - n),
                t.refresh()
            }
        }
        )),
        Y.forEach((function(t) {
            var e = _r(t.scroller, t._dir);
            ("max" === t.vars.end || t._endClamp && t.end > e) && t.setPositions(t.start, Math.max(t.start + 1, e), !0)
        }
        )),
        r.forEach((function(t) {
            return t && t.render && t.render(-1)
        }
        )),
        U.forEach((function(t) {
            ut(t) && (t.smooth && requestAnimationFrame((function() {
                return t.target.style.scrollBehavior = "smooth"
            }
            )),
            t.rec && t(t.rec))
        }
        )),
        wa(po, 1),
        es.pause(),
        ti++,
        nt = 2,
        dr(2),
        Y.forEach((function(t) {
            return ut(t.vars.onRefresh) && t.vars.onRefresh(t)
        }
        )),
        nt = L.isRefreshing = !1,
        si("refresh")
    } else
        Pe(L, "scrollEnd", va)
}, js = 0, Rn = 1, dr = function(t) {
    if (!nt || 2 === t) {
        L.isUpdating = !0,
        en && en.update(0);
        var e = Y.length
          , r = st()
          , n = r - ys >= 50
          , i = e && Y[0].scroll();
        if (Rn = js > i ? -1 : 1,
        nt || (js = i),
        n && (zt && !us && r - zt > 200 && (zt = 0,
        si("scrollEnd")),
        An = ys,
        ys = r),
        Rn < 0) {
            for (it = e; it-- > 0; )
                Y[it] && Y[it].update(0, n);
            Rn = 1
        } else
            for (it = 0; it < e; it++)
                Y[it] && Y[it].update(0, n);
        L.isUpdating = !1
    }
    ln = 0
}, Ks = [xa, ya, Co, mo, Ot + Ji, Ot + Ki, Ot + Zi, Ot + Qi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Ln = Ks.concat([Jr, ei, "boxSizing", "max" + ki, "max" + xo, "position", Ot, Fe, Fe + Zi, Fe + Ki, Fe + Ji, Fe + Qi]), of = function(t, e, r) {
    Ei(r);
    var n = t._gsap;
    if (n.spacerIsNative)
        Ei(n.spacerState);
    else if (t._gsap.swappedIn) {
        var i = e.parentNode;
        i && (i.insertBefore(t, e),
        i.removeChild(e))
    }
    t._gsap.swappedIn = !1
}, Es = function(t, e, r, n) {
    if (!t._gsap.swappedIn) {
        for (var i, s = Ks.length, o = e.style, a = t.style; s--; )
            o[i = Ks[s]] = r[i];
        o.position = "absolute" === r.position ? "absolute" : "relative",
        "inline" === r.display && (o.display = "inline-block"),
        a[Co] = a[mo] = "auto",
        o.flexBasis = r.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[Jr] = Gs(t, ot) + Re,
        o[ei] = Gs(t, be) + Re,
        o[Fe] = a[Ot] = a[ya] = a[xa] = "0",
        Ei(n),
        a[Jr] = a["max" + ki] = r[Jr],
        a[ei] = a["max" + xo] = r[ei],
        a[Fe] = r[Fe],
        t.parentNode !== e && (t.parentNode.insertBefore(e, t),
        e.appendChild(t)),
        t._gsap.swappedIn = !0
    }
}, uf = /([A-Z])/g, Ei = function(t) {
    if (t) {
        var e, r, n = t.t.style, i = t.length, s = 0;
        for ((t.t._gsap || A.core.getCache(t.t)).uncache = 1; s < i; s += 2)
            r = t[s + 1],
            e = t[s],
            r ? n[e] = r : n[e] && n.removeProperty(e.replace(uf, "-$1").toLowerCase())
    }
}, En = function(t) {
    for (var e = Ln.length, r = t.style, n = [], i = 0; i < e; i++)
        n.push(Ln[i], r[Ln[i]]);
    return n.t = t,
    n
}, af = function(t, e, r) {
    for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2)
        n = t[o],
        i.push(n, n in e ? e[n] : t[o + 1]);
    return i.t = t.t,
    i
}, zn = {
    left: 0,
    top: 0
}, Zo = function(t, e, r, n, i, s, o, a, u, l, c, f, h, D) {
    ut(t) && (t = t(a)),
    vt(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Mn("0" + t.substr(3), r) : 0));
    var p, d, g, _ = h ? h.time() : 0;
    if (h && h.seek(0),
    isNaN(t) || (t = +t),
    On(t))
        h && (t = A.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)),
        o && Bn(o, r, n, !0);
    else {
        ut(e) && (e = e(a));
        var m, v, y, C, F = (t || "0").split(" ");
        g = ct(e, a) || se,
        (!(m = cr(g) || {}) || !m.left && !m.top) && "none" === Mt(g).display && (C = g.style.display,
        g.style.display = "block",
        m = cr(g),
        C ? g.style.display = C : g.style.removeProperty("display")),
        v = Mn(F[0], m[n.d]),
        y = Mn(F[1] || "0", r),
        t = m[n.p] - u[n.p] - l + v + i - y,
        o && Bn(o, y, n, r - y < 20 || o._isStart && y > 20),
        r -= r - y
    }
    if (D && (a[D] = t || -.001,
    t < 0 && (t = 0)),
    s) {
        var E = t + r
          , x = s._isStart;
        p = "scroll" + n.d2,
        Bn(s, E, n, x && E > 20 || !x && (c ? Math.max(se[p], Gt[p]) : s.parentNode[p]) <= E + 1),
        c && (u = cr(o),
        c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + Re))
    }
    return h && g && (p = cr(g),
    h.seek(f),
    d = cr(g),
    h._caScrollDist = p[n.p] - d[n.p],
    t = t / h._caScrollDist * f),
    h && h.seek(_),
    h ? t : Math.round(t)
}, lf = /(webkit|moz|length|cssText|inset)/i, Jo = function(t, e, r, n) {
    if (t.parentNode !== e) {
        var i, s, o = t.style;
        if (e === se) {
            for (i in t._stOrig = o.cssText,
            s = Mt(t))
                !+i && !lf.test(i) && s[i] && "string" == typeof o[i] && "0" !== i && (o[i] = s[i]);
            o.top = r,
            o.left = n
        } else
            o.cssText = t._stOrig;
        A.core.getCache(t).uncache = 1,
        e.appendChild(t)
    }
}, Ta = function(t, e, r) {
    var n = e
      , i = n;
    return function(e) {
        var s = Math.round(t());
        return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (e = s,
        r && r()),
        i = n,
        n = e,
        e
    }
}, wn = function(t, e, r) {
    var n = {};
    n[e.p] = "+=" + r,
    A.set(t, n)
}, eu = function(t, e) {
    var r = Ar(t, e)
      , n = "_scroll" + e.p2
      , i = function e(i, s, o, a, u) {
        var l = e.tween
          , c = s.onComplete
          , f = {};
        o = o || r();
        var h = Ta(r, o, (function() {
            l.kill(),
            e.tween = 0
        }
        ));
        return u = a && u || 0,
        a = a || i - o,
        l && l.kill(),
        s[n] = i,
        s.modifiers = f,
        f[n] = function() {
            return h(o + a * l.ratio + u * l.ratio * l.ratio)
        }
        ,
        s.onUpdate = function() {
            U.cache++,
            dr()
        }
        ,
        s.onComplete = function() {
            e.tween = 0,
            c && c.call(l)
        }
        ,
        l = e.tween = A.to(t, s)
    };
    return t[n] = r,
    r.wheelHandler = function() {
        return i.tween && i.tween.kill() && (i.tween = 0)
    }
    ,
    Pe(t, "wheel", r.wheelHandler),
    L.isTouch && Pe(t, "touchmove", r.wheelHandler),
    i
}, L = function() {
    function t(e, r) {
        _i || t.register(A) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Hs(this),
        this.init(e, r)
    }
    return t.prototype.init = function(e, r) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        Yi) {
            var n, i, s, o, a, u, l, c, f, h, D, p, d, g, _, m, v, y, C, F, E, x, b, w, T, k, S, P, B, M, O, L, R, X, z, I, G, q, N, V = e = qo(vt(e) || On(e) || e.nodeType ? {
                trigger: e
            } : e, Fn), W = V.onUpdate, j = V.toggleClass, $ = V.id, K = V.onToggle, Q = V.onRefresh, Z = V.scrub, J = V.trigger, tt = V.pin, et = V.pinSpacing, rt = V.invalidateOnRefresh, at = V.anticipatePin, lt = V.onScrubComplete, ft = V.onSnapComplete, ht = V.once, Dt = V.snap, pt = V.pinReparent, dt = V.pinSpacer, gt = V.containerAnimation, _t = V.fastScrollEnd, mt = V.preventOverlaps, yt = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ot : be, Ct = !Z && 0 !== Z, Ft = ct(e.scroller || H), Et = A.core.getCache(Ft), xt = ii(Ft), bt = "fixed" === ("pinType"in e ? e.pinType : Sr(Ft, "pinType") || xt && "fixed"), wt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], Tt = Ct && e.toggleActions.split(" "), At = "markers"in e ? e.markers : Fn.markers, kt = xt ? 0 : parseFloat(Mt(Ft)["border" + yt.p2 + ki]) || 0, St = this, Pt = e.onRefreshInit && function() {
                return e.onRefreshInit(St)
            }
            , Bt = Zl(Ft, xt, yt), Lt = Jl(Ft, xt), Rt = 0, Xt = 0, Yt = 0, Ht = Ar(Ft, yt);
            if (St._startClamp = St._endClamp = !1,
            St._dir = yt,
            at *= 45,
            St.scroller = Ft,
            St.scroll = gt ? gt.time.bind(gt) : Ht,
            o = Ht(),
            St.vars = e,
            r = r || e.animation,
            "refreshPriority"in e && (ca = 1,
            -9999 === e.refreshPriority && (en = St)),
            Et.tweenScroll = Et.tweenScroll || {
                top: eu(Ft, be),
                left: eu(Ft, ot)
            },
            St.tweenTo = n = Et.tweenScroll[yt.p],
            St.scrubDuration = function(t) {
                (R = On(t) && t) ? L ? L.duration(t) : L = A.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    duration: R,
                    paused: !0,
                    onComplete: function() {
                        return lt && lt(St)
                    }
                }) : (L && L.progress(1).kill(),
                L = 0)
            }
            ,
            r && (r.vars.lazy = !1,
            r._initted && !St.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0),
            St.animation = r.pause(),
            r.scrollTrigger = St,
            St.scrubDuration(Z),
            M = 0,
            $ || ($ = r.vars.id)),
            Dt && ((!Hr(Dt) || Dt.push) && (Dt = {
                snapTo: Dt
            }),
            "scrollBehavior"in se.style && A.set(xt ? [se, Gt] : Ft, {
                scrollBehavior: "auto"
            }),
            U.forEach((function(t) {
                return ut(t) && t.target === (xt ? ae.scrollingElement || Gt : Ft) && (t.smooth = !1)
            }
            )),
            s = ut(Dt.snapTo) ? Dt.snapTo : "labels" === Dt.snapTo ? tf(r) : "labelsDirectional" === Dt.snapTo ? rf(r) : !1 !== Dt.directional ? function(t, e) {
                return yo(Dt.snapTo)(t, st() - Xt < 500 ? 0 : e.direction)
            }
            : A.utils.snap(Dt.snapTo),
            X = Dt.duration || {
                min: .1,
                max: 2
            },
            X = Hr(X) ? mi(X.min, X.max) : mi(X, X),
            z = A.delayedCall(Dt.delay || R / 2 || .1, (function() {
                var t = Ht()
                  , e = st() - Xt < 500
                  , i = n.tween;
                if (!(e || Math.abs(St.getVelocity()) < 10) || i || us || Rt === t)
                    St.isActive && Rt !== t && z.restart(!0);
                else {
                    var o = (t - u) / g
                      , a = r && !Ct ? r.totalProgress() : o
                      , c = e ? 0 : (a - O) / (st() - An) * 1e3 || 0
                      , f = A.utils.clamp(-o, 1 - o, ci(c / 2) * c / .185)
                      , h = o + (!1 === Dt.inertia ? 0 : f)
                      , D = mi(0, 1, s(h, St))
                      , p = Math.round(u + D * g)
                      , d = Dt
                      , _ = d.onStart
                      , m = d.onInterrupt
                      , v = d.onComplete;
                    if (t <= l && t >= u && p !== t) {
                        if (i && !i._initted && i.data <= ci(p - t))
                            return;
                        !1 === Dt.inertia && (f = D - o),
                        n(p, {
                            duration: X(ci(.185 * Math.max(ci(h - a), ci(D - a)) / c / .05 || 0)),
                            ease: Dt.ease || "power3",
                            data: ci(p - t),
                            onInterrupt: function() {
                                return z.restart(!0) && m && m(St)
                            },
                            onComplete: function() {
                                St.update(),
                                Rt = Ht(),
                                M = O = r && !Ct ? r.totalProgress() : St.progress,
                                ft && ft(St),
                                v && v(St)
                            }
                        }, t, f * g, p - t - f * g),
                        _ && _(St, n.tween)
                    }
                }
            }
            )).pause()),
            $ && (qs[$] = St),
            (N = (J = St.trigger = ct(J || !0 !== tt && tt)) && J._gsap && J._gsap.stRevert) && (N = N(St)),
            tt = !0 === tt ? J : ct(tt),
            vt(j) && (j = {
                targets: J,
                className: j
            }),
            tt && (!1 === et || et === Ot || (et = !(!et && tt.parentNode && tt.parentNode.style && "flex" === Mt(tt.parentNode).display) && Fe),
            St.pin = tt,
            (i = A.core.getCache(tt)).spacer ? _ = i.pinState : (dt && ((dt = ct(dt)) && !dt.nodeType && (dt = dt.current || dt.nativeElement),
            i.spacerIsNative = !!dt,
            dt && (i.spacerState = En(dt))),
            i.spacer = y = dt || ae.createElement("div"),
            y.classList.add("pin-spacer"),
            $ && y.classList.add("pin-spacer-" + $),
            i.pinState = _ = En(tt)),
            !1 !== e.force3D && A.set(tt, {
                force3D: !0
            }),
            St.spacer = y = i.spacer,
            B = Mt(tt),
            w = B[et + yt.os2],
            F = A.getProperty(tt),
            E = A.quickSetter(tt, yt.a, Re),
            Es(tt, y, B),
            v = En(tt)),
            At) {
                p = Hr(At) ? qo(At, jo) : jo,
                h = vn("scroller-start", $, Ft, yt, p, 0),
                D = vn("scroller-end", $, Ft, yt, p, 0, h),
                C = h["offset" + yt.op.d2];
                var Ut = ct(Sr(Ft, "content") || Ft);
                c = this.markerStart = vn("start", $, Ut, yt, p, C, 0, gt),
                f = this.markerEnd = vn("end", $, Ut, yt, p, C, 0, gt),
                gt && (q = A.quickSetter([c, f], yt.a, Re)),
                !bt && (!nr.length || !0 !== Sr(Ft, "fixedMarkers")) && (ef(xt ? se : Ft),
                A.set([h, D], {
                    force3D: !0
                }),
                k = A.quickSetter(h, yt.a, Re),
                P = A.quickSetter(D, yt.a, Re))
            }
            if (gt) {
                var It = gt.vars.onUpdate
                  , qt = gt.vars.onUpdateParams;
                gt.eventCallback("onUpdate", (function() {
                    St.update(0, 0, 1),
                    It && It.apply(gt, qt || [])
                }
                ))
            }
            if (St.previous = function() {
                return Y[Y.indexOf(St) - 1]
            }
            ,
            St.next = function() {
                return Y[Y.indexOf(St) + 1]
            }
            ,
            St.revert = function(t, e) {
                if (!e)
                    return St.kill(!0);
                var n = !1 !== t || !St.enabled
                  , i = Xe;
                n !== St.isReverted && (n && (I = Math.max(Ht(), St.scroll.rec || 0),
                Yt = St.progress,
                G = r && r.progress()),
                c && [c, f, h, D].forEach((function(t) {
                    return t.style.display = n ? "none" : "block"
                }
                )),
                n && (Xe = St,
                St.update(n)),
                tt && (!pt || !St.isActive) && (n ? of(tt, y, _) : Es(tt, y, Mt(tt), T)),
                n || St.update(n),
                Xe = i,
                St.isReverted = n)
            }
            ,
            St.refresh = function(i, s, p, C) {
                if (!Xe && St.enabled || s) {
                    if (tt && i && zt)
                        return void Pe(t, "scrollEnd", va);
                    !nt && Pt && Pt(St),
                    Xe = St,
                    n.tween && !p && (n.tween.kill(),
                    n.tween = 0),
                    L && L.pause(),
                    rt && r && r.revert({
                        kill: !1
                    }).invalidate(),
                    St.isReverted || St.revert(!0, !0),
                    St._subPinOffset = !1;
                    var E, w, k, P, B, M, O, R, X, H, U, q, N, V = Bt(), W = Lt(), j = gt ? gt.duration() : _r(Ft, yt), $ = g <= .01, K = 0, Z = C || 0, it = Hr(p) ? p.end : e.end, at = e.endTrigger || J, lt = Hr(p) ? p.start : e.start || (0 !== e.start && J ? tt ? "0 0" : "0 100%" : 0), ft = St.pinnedContainer = e.pinnedContainer && ct(e.pinnedContainer, St), ht = J && Math.max(0, Y.indexOf(St)) || 0, Dt = ht;
                    for (At && Hr(p) && (q = A.getProperty(h, yt.p),
                    N = A.getProperty(D, yt.p)); Dt--; )
                        (M = Y[Dt]).end || M.refresh(0, 1) || (Xe = St),
                        (O = M.pin) && (O === J || O === tt || O === ft) && !M.isReverted && (H || (H = []),
                        H.unshift(M),
                        M.revert(!0, !0)),
                        M !== Y[Dt] && (ht--,
                        Dt--);
                    for (ut(lt) && (lt = lt(St)),
                    lt = $o(lt, "start", St),
                    u = Zo(lt, J, V, yt, Ht(), c, h, St, W, kt, bt, j, gt, St._startClamp && "_startClamp") || (tt ? -.001 : 0),
                    ut(it) && (it = it(St)),
                    vt(it) && !it.indexOf("+=") && (~it.indexOf(" ") ? it = (vt(lt) ? lt.split(" ")[0] : "") + it : (K = Mn(it.substr(2), V),
                    it = vt(lt) ? lt : (gt ? A.utils.mapRange(0, gt.duration(), gt.scrollTrigger.start, gt.scrollTrigger.end, u) : u) + K,
                    at = J)),
                    it = $o(it, "end", St),
                    l = Math.max(u, Zo(it || (at ? "100% 0" : j), at, V, yt, Ht() + K, f, D, St, W, kt, bt, j, gt, St._endClamp && "_endClamp")) || -.001,
                    K = 0,
                    Dt = ht; Dt--; )
                        (O = (M = Y[Dt]).pin) && M.start - M._pinPush <= u && !gt && M.end > 0 && (E = M.end - (St._startClamp ? Math.max(0, M.start) : M.start),
                        (O === J && M.start - M._pinPush < u || O === ft) && isNaN(lt) && (K += E * (1 - M.progress)),
                        O === tt && (Z += E));
                    if (u += K,
                    l += K,
                    St._startClamp && (St._startClamp += K),
                    St._endClamp && !nt && (St._endClamp = l || -.001,
                    l = Math.min(l, _r(Ft, yt))),
                    g = l - u || (u -= .01) && .001,
                    $ && (Yt = A.utils.clamp(0, 1, A.utils.normalize(u, l, I))),
                    St._pinPush = Z,
                    c && K && ((E = {})[yt.a] = "+=" + K,
                    ft && (E[yt.p] = "-=" + Ht()),
                    A.set([c, f], E)),
                    tt)
                        E = Mt(tt),
                        P = yt === be,
                        k = Ht(),
                        x = parseFloat(F(yt.a)) + Z,
                        !j && l > 1 && (U = {
                            style: U = (xt ? ae.scrollingElement || Gt : Ft).style,
                            value: U["overflow" + yt.a.toUpperCase()]
                        },
                        xt && "scroll" !== Mt(se)["overflow" + yt.a.toUpperCase()] && (U.style["overflow" + yt.a.toUpperCase()] = "scroll")),
                        Es(tt, y, E),
                        v = En(tt),
                        w = cr(tt, !0),
                        R = bt && Ar(Ft, P ? ot : be)(),
                        et && ((T = [et + yt.os2, g + Z + Re]).t = y,
                        (Dt = et === Fe ? Gs(tt, yt) + g + Z : 0) && T.push(yt.d, Dt + Re),
                        Ei(T),
                        ft && Y.forEach((function(t) {
                            t.pin === ft && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                        }
                        )),
                        bt && Ht(I)),
                        bt && ((B = {
                            top: w.top + (P ? k - u : R) + Re,
                            left: w.left + (P ? R : k - u) + Re,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[Jr] = B["max" + ki] = Math.ceil(w.width) + Re,
                        B[ei] = B["max" + xo] = Math.ceil(w.height) + Re,
                        B[Ot] = B[Ot + Zi] = B[Ot + Ki] = B[Ot + Ji] = B[Ot + Qi] = "0",
                        B[Fe] = E[Fe],
                        B[Fe + Zi] = E[Fe + Zi],
                        B[Fe + Ki] = E[Fe + Ki],
                        B[Fe + Ji] = E[Fe + Ji],
                        B[Fe + Qi] = E[Fe + Qi],
                        m = af(_, B, pt),
                        nt && Ht(0)),
                        r ? (X = r._initted,
                        Cs(1),
                        r.render(r.duration(), !0, !0),
                        b = F(yt.a) - x + g + Z,
                        S = Math.abs(g - b) > 1,
                        bt && S && m.splice(m.length - 2, 2),
                        r.render(0, !0, !0),
                        X || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Cs(0)) : b = g,
                        U && (U.value ? U.style["overflow" + yt.a.toUpperCase()] = U.value : U.style.removeProperty("overflow-" + yt.a));
                    else if (J && Ht() && !gt)
                        for (w = J.parentNode; w && w !== se; )
                            w._pinOffset && (u -= w._pinOffset,
                            l -= w._pinOffset),
                            w = w.parentNode;
                    H && H.forEach((function(t) {
                        return t.revert(!1, !0)
                    }
                    )),
                    St.start = u,
                    St.end = l,
                    o = a = nt ? I : Ht(),
                    !gt && !nt && (o < I && Ht(I),
                    St.scroll.rec = 0),
                    St.revert(!1, !0),
                    Xt = st(),
                    z && (Rt = -1,
                    z.restart(!0)),
                    Xe = 0,
                    r && Ct && (r._initted || G) && r.progress() !== G && r.progress(G || 0, !0).render(r.time(), !0, !0),
                    ($ || Yt !== St.progress || gt) && (r && !Ct && r.totalProgress(gt && u < -.001 && !Yt ? A.utils.normalize(u, l, 0) : Yt, !0),
                    St.progress = $ || (o - u) / g === Yt ? 0 : Yt),
                    tt && et && (y._pinOffset = Math.round(St.progress * b)),
                    L && L.invalidate(),
                    isNaN(q) || (q -= A.getProperty(h, yt.p),
                    N -= A.getProperty(D, yt.p),
                    wn(h, yt, q),
                    wn(c, yt, q - (C || 0)),
                    wn(D, yt, N),
                    wn(f, yt, N - (C || 0))),
                    $ && !nt && St.update(),
                    Q && !nt && !d && (d = !0,
                    Q(St),
                    d = !1)
                }
            }
            ,
            St.getVelocity = function() {
                return (Ht() - a) / (st() - An) * 1e3 || 0
            }
            ,
            St.endAnimation = function() {
                zi(St.callbackAnimation),
                r && (L ? L.progress(1) : r.paused() ? Ct || zi(r, St.direction < 0, 1) : zi(r, r.reversed()))
            }
            ,
            St.labelToScroll = function(t) {
                return r && r.labels && (u || St.refresh() || u) + r.labels[t] / r.duration() * g || 0
            }
            ,
            St.getTrailing = function(t) {
                var e = Y.indexOf(St)
                  , r = St.direction > 0 ? Y.slice(0, e).reverse() : Y.slice(e + 1);
                return (vt(t) ? r.filter((function(e) {
                    return e.vars.preventOverlaps === t
                }
                )) : r).filter((function(t) {
                    return St.direction > 0 ? t.end <= u : t.start >= l
                }
                ))
            }
            ,
            St.update = function(t, e, i) {
                if (!gt || i || t) {
                    var s, c, f, D, p, d, _, C = !0 === nt ? I : St.scroll(), F = t ? 0 : (C - u) / g, T = F < 0 ? 0 : F > 1 ? 1 : F || 0, A = St.progress;
                    if (e && (a = o,
                    o = gt ? Ht() : C,
                    Dt && (O = M,
                    M = r && !Ct ? r.totalProgress() : T)),
                    at && !T && tt && !Xe && !mn && zt && u < C + (C - a) / (st() - An) * at && (T = 1e-4),
                    T !== A && St.enabled) {
                        if (D = (p = (s = St.isActive = !!T && T < 1) !== (!!A && A < 1)) || !!T != !!A,
                        St.direction = T > A ? 1 : -1,
                        St.progress = T,
                        D && !Xe && (c = T && !A ? 0 : 1 === T ? 1 : 1 === A ? 2 : 3,
                        Ct && (f = !p && "none" !== Tt[c + 1] && Tt[c + 1] || Tt[c],
                        _ = r && ("complete" === f || "reset" === f || f in r))),
                        mt && (p || _) && (_ || Z || !r) && (ut(mt) ? mt(St) : St.getTrailing(mt).forEach((function(t) {
                            return t.endAnimation()
                        }
                        ))),
                        Ct || (!L || Xe || mn ? r && r.totalProgress(T, !(!Xe || !Xt && !t)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start),
                        L.resetTo ? L.resetTo("totalProgress", T, r._tTime / r._tDur) : (L.vars.totalProgress = T,
                        L.invalidate().restart()))),
                        tt)
                            if (t && et && (y.style[et + yt.os2] = w),
                            bt) {
                                if (D) {
                                    if (d = !t && T > A && l + 1 > C && C + 1 >= _r(Ft, yt),
                                    pt)
                                        if (t || !s && !d)
                                            Jo(tt, y);
                                        else {
                                            var B = cr(tt, !0)
                                              , R = C - u;
                                            Jo(tt, se, B.top + (yt === be ? R : 0) + Re, B.left + (yt === be ? 0 : R) + Re)
                                        }
                                    Ei(s || d ? m : v),
                                    S && T < 1 && s || E(x + (1 !== T || d ? 0 : b))
                                }
                            } else
                                E(Xi(x + b * T));
                        Dt && !n.tween && !Xe && !mn && z.restart(!0),
                        j && (p || ht && T && (T < 1 || !xs)) && ts(j.targets).forEach((function(t) {
                            return t.classList[s || ht ? "add" : "remove"](j.className)
                        }
                        )),
                        W && !Ct && !t && W(St),
                        D && !Xe ? (Ct && (_ && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()),
                        W && W(St)),
                        (p || !xs) && (K && p && Fs(St, K),
                        wt[c] && Fs(St, wt[c]),
                        ht && (1 === T ? St.kill(!1, 1) : wt[c] = 0),
                        p || wt[c = 1 === T ? 1 : 3] && Fs(St, wt[c])),
                        _t && !s && Math.abs(St.getVelocity()) > (On(_t) ? _t : 2500) && (zi(St.callbackAnimation),
                        L ? L.progress(1) : zi(r, "reverse" === f ? 1 : !T, 1))) : Ct && W && !Xe && W(St)
                    }
                    if (P) {
                        var X = gt ? C / gt.duration() * (gt._caScrollDist || 0) : C;
                        k(X + (h._isFlipped ? 1 : 0)),
                        P(X)
                    }
                    q && q(-C / gt.duration() * (gt._caScrollDist || 0))
                }
            }
            ,
            St.enable = function(e, r) {
                St.enabled || (St.enabled = !0,
                Pe(Ft, "resize", Vi),
                xt || Pe(Ft, "scroll", hi),
                Pt && Pe(t, "refreshInit", Pt),
                !1 !== e && (St.progress = Yt = 0,
                o = a = Rt = Ht()),
                !1 !== r && St.refresh())
            }
            ,
            St.getTween = function(t) {
                return t && n ? n.tween : L
            }
            ,
            St.setPositions = function(t, e, r, n) {
                if (gt) {
                    var i = gt.scrollTrigger
                      , s = gt.duration()
                      , o = i.end - i.start;
                    t = i.start + o * t / s,
                    e = i.start + o * e / s
                }
                St.refresh(!1, !1, {
                    start: Wo(t, r && !!St._startClamp),
                    end: Wo(e, r && !!St._endClamp)
                }, n),
                St.update()
            }
            ,
            St.adjustPinSpacing = function(t) {
                if (T && t) {
                    var e = T.indexOf(yt.d) + 1;
                    T[e] = parseFloat(T[e]) + t + Re,
                    T[1] = parseFloat(T[1]) + t + Re,
                    Ei(T)
                }
            }
            ,
            St.disable = function(e, r) {
                if (St.enabled && (!1 !== e && St.revert(!0, !0),
                St.enabled = St.isActive = !1,
                r || L && L.pause(),
                I = 0,
                i && (i.uncache = 1),
                Pt && Se(t, "refreshInit", Pt),
                z && (z.pause(),
                n.tween && n.tween.kill() && (n.tween = 0)),
                !xt)) {
                    for (var s = Y.length; s--; )
                        if (Y[s].scroller === Ft && Y[s] !== St)
                            return;
                    Se(Ft, "resize", Vi),
                    xt || Se(Ft, "scroll", hi)
                }
            }
            ,
            St.kill = function(t, n) {
                St.disable(t, n),
                L && !n && L.kill(),
                $ && delete qs[$];
                var s = Y.indexOf(St);
                s >= 0 && Y.splice(s, 1),
                s === it && Rn > 0 && it--,
                s = 0,
                Y.forEach((function(t) {
                    return t.scroller === St.scroller && (s = 1)
                }
                )),
                s || nt || (St.scroll.rec = 0),
                r && (r.scrollTrigger = null,
                t && r.revert({
                    kill: !1
                }),
                n || r.kill()),
                c && [c, f, h, D].forEach((function(t) {
                    return t.parentNode && t.parentNode.removeChild(t)
                }
                )),
                en === St && (en = 0),
                tt && (i && (i.uncache = 1),
                s = 0,
                Y.forEach((function(t) {
                    return t.pin === tt && s++
                }
                )),
                s || (i.spacer = 0)),
                e.onKill && e.onKill(St)
            }
            ,
            Y.push(St),
            St.enable(!1, !1),
            N && N(St),
            r && r.add && !g) {
                var Nt = St.update;
                St.update = function() {
                    St.update = Nt,
                    u || l || St.refresh()
                }
                ,
                A.delayedCall(.01, St.update),
                g = .01,
                u = l = 0
            } else
                St.refresh();
            tt && sf()
        } else
            this.update = this.refresh = this.kill = er
    }
    ,
    t.register = function(e) {
        return _i || (A = e || ga(),
        pa() && window.document && t.enable(),
        _i = Yi),
        _i
    }
    ,
    t.defaults = function(t) {
        if (t)
            for (var e in t)
                Fn[e] = t[e];
        return Fn
    }
    ,
    t.disable = function(t, e) {
        Yi = 0,
        Y.forEach((function(r) {
            return r[e ? "kill" : "disable"](t)
        }
        )),
        Se(H, "wheel", hi),
        Se(ae, "scroll", hi),
        clearInterval(gn),
        Se(ae, "touchcancel", er),
        Se(se, "touchstart", er),
        xn(Se, ae, "pointerdown,touchstart,mousedown", Ho),
        xn(Se, ae, "pointerup,touchend,mouseup", Go),
        es.kill(),
        Cn(Se);
        for (var r = 0; r < U.length; r += 3)
            yn(Se, U[r], U[r + 1]),
            yn(Se, U[r], U[r + 2])
    }
    ,
    t.enable = function() {
        if (H = window,
        ae = document,
        Gt = ae.documentElement,
        se = ae.body,
        A && (ts = A.utils.toArray,
        mi = A.utils.clamp,
        Hs = A.core.context || er,
        Cs = A.core.suppressOverwrites || er,
        po = H.history.scrollRestoration || "auto",
        js = H.pageYOffset,
        A.core.globals("ScrollTrigger", t),
        se)) {
            Yi = 1,
            (vi = document.createElement("div")).style.height = "100vh",
            vi.style.position = "absolute",
            ba(),
            Ql(),
            Ee.register(A),
            t.isTouch = Ee.isTouch,
            xr = Ee.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Pe(H, "wheel", hi),
            fa = [H, ae, Gt, se],
            A.matchMedia ? (t.matchMedia = function(t) {
                var e, r = A.matchMedia();
                for (e in t)
                    r.add(e, t[e]);
                return r
            }
            ,
            A.addEventListener("matchMediaInit", (function() {
                return Fo()
            }
            )),
            A.addEventListener("matchMediaRevert", (function() {
                return Ea()
            }
            )),
            A.addEventListener("matchMedia", (function() {
                qr(0, 1),
                si("matchMedia")
            }
            )),
            A.matchMedia("(orientation: portrait)", (function() {
                return vs(),
                vs
            }
            ))) : console.warn("Requires GSAP 3.11.0 or later"),
            vs(),
            Pe(ae, "scroll", hi);
            var e, r, n = se.style, i = n.borderTopStyle, s = A.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            n.borderTopStyle = "solid",
            e = cr(se),
            be.m = Math.round(e.top + be.sc()) || 0,
            ot.m = Math.round(e.left + ot.sc()) || 0,
            i ? n.borderTopStyle = i : n.removeProperty("border-top-style"),
            gn = setInterval(Ko, 250),
            A.delayedCall(.5, (function() {
                return mn = 0
            }
            )),
            Pe(ae, "touchcancel", er),
            Pe(se, "touchstart", er),
            xn(Pe, ae, "pointerdown,touchstart,mousedown", Ho),
            xn(Pe, ae, "pointerup,touchend,mouseup", Go),
            Ws = A.utils.checkPrefix("transform"),
            Ln.push(Ws),
            _i = st(),
            es = A.delayedCall(.2, qr).pause(),
            di = [ae, "visibilitychange", function() {
                var t = H.innerWidth
                  , e = H.innerHeight;
                ae.hidden ? (Vo = t,
                Uo = e) : (Vo !== t || Uo !== e) && Vi()
            }
            , ae, "DOMContentLoaded", qr, H, "load", qr, H, "resize", Vi],
            Cn(Pe),
            Y.forEach((function(t) {
                return t.enable(0, 1)
            }
            )),
            r = 0; r < U.length; r += 3)
                yn(Se, U[r], U[r + 1]),
                yn(Se, U[r], U[r + 2])
        }
    }
    ,
    t.config = function(e) {
        "limitCallbacks"in e && (xs = !!e.limitCallbacks);
        var r = e.syncInterval;
        r && clearInterval(gn) || (gn = r) && setInterval(Ko, r),
        "ignoreMobileResize"in e && (_a = 1 === t.isTouch && e.ignoreMobileResize),
        "autoRefreshEvents"in e && (Cn(Se) || Cn(Pe, e.autoRefreshEvents || "none"),
        ha = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    t.scrollerProxy = function(t, e) {
        var r = ct(t)
          , n = U.indexOf(r)
          , i = ii(r);
        ~n && U.splice(n, i ? 6 : 2),
        e && (i ? nr.unshift(H, e, se, e, Gt, e) : nr.unshift(r, e))
    }
    ,
    t.clearMatchMedia = function(t) {
        Y.forEach((function(e) {
            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
        }
        ))
    }
    ,
    t.isInViewport = function(t, e, r) {
        var n = (vt(t) ? ct(t) : t).getBoundingClientRect()
          , i = n[r ? Jr : ei] * e || 0;
        return r ? n.right - i > 0 && n.left + i < H.innerWidth : n.bottom - i > 0 && n.top + i < H.innerHeight
    }
    ,
    t.positionInViewport = function(t, e, r) {
        vt(t) && (t = ct(t));
        var n = t.getBoundingClientRect()
          , i = n[r ? Jr : ei]
          , s = null == e ? i / 2 : e in rs ? rs[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
        return r ? (n.left + s) / H.innerWidth : (n.top + s) / H.innerHeight
    }
    ,
    t.killAll = function(t) {
        if (Y.slice(0).forEach((function(t) {
            return "ScrollSmoother" !== t.vars.id && t.kill()
        }
        )),
        !0 !== t) {
            var e = ni.killAll || [];
            ni = {},
            e.forEach((function(t) {
                return t()
            }
            ))
        }
    }
    ,
    t
}();
L.version = "3.12.2",
L.saveStyles = function(t) {
    return t ? ts(t).forEach((function(t) {
        if (t && t.style) {
            var e = Ft.indexOf(t);
            e >= 0 && Ft.splice(e, 5),
            Ft.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), A.core.getCache(t), Hs())
        }
    }
    )) : Ft
}
,
L.revert = function(t, e) {
    return Fo(!t, e)
}
,
L.create = function(t, e) {
    return new L(t,e)
}
,
L.refresh = function(t) {
    return t ? Vi() : (_i || L.register()) && qr(!0)
}
,
L.update = function(t) {
    return ++U.cache && dr(!0 === t ? 2 : 0)
}
,
L.clearScrollMemory = wa,
L.maxScroll = function(t, e) {
    return _r(t, e ? ot : be)
}
,
L.getScrollFunc = function(t, e) {
    return Ar(ct(t), e ? ot : be)
}
,
L.getById = function(t) {
    return qs[t]
}
,
L.getAll = function() {
    return Y.filter((function(t) {
        return "ScrollSmoother" !== t.vars.id
    }
    ))
}
,
L.isScrolling = function() {
    return !!zt
}
,
L.snapDirectional = yo,
L.addEventListener = function(t, e) {
    var r = ni[t] || (ni[t] = []);
    ~r.indexOf(e) || r.push(e)
}
,
L.removeEventListener = function(t, e) {
    var r = ni[t]
      , n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1)
}
,
L.batch = function(t, e) {
    var r, n = [], i = {}, s = e.interval || .016, o = e.batchMax || 1e9, a = function(t, e) {
        var r = []
          , n = []
          , i = A.delayedCall(s, (function() {
            e(r, n),
            r = [],
            n = []
        }
        )).pause();
        return function(t) {
            r.length || i.restart(!0),
            r.push(t.trigger),
            n.push(t),
            o <= r.length && i.progress(1)
        }
    };
    for (r in e)
        i[r] = "on" === r.substr(0, 2) && ut(e[r]) && "onRefreshInit" !== r ? a(0, e[r]) : e[r];
    return ut(o) && (o = o(),
    Pe(L, "refresh", (function() {
        return o = e.batchMax()
    }
    ))),
    ts(t).forEach((function(t) {
        var e = {};
        for (r in i)
            e[r] = i[r];
        e.trigger = t,
        n.push(L.create(e))
    }
    )),
    n
}
;
var ru, tu = function(t, e, r, n) {
    return e > n ? t(n) : e < 0 && t(0),
    r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
}, ws = function t(e, r) {
    !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Ee.isTouch ? " pinch-zoom" : "") : "none",
    e === Gt && t(se, r)
}, bn = {
    auto: 1,
    scroll: 1
}, ff = function(t) {
    var e, r = t.event, n = t.target, i = t.axis, s = (r.changedTouches ? r.changedTouches[0] : r).target, o = s._gsap || A.core.getCache(s), a = st();
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s !== se && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !bn[(e = Mt(s)).overflowY] && !bn[e.overflowX]); )
            s = s.parentNode;
        o._isScroll = s && s !== n && !ii(s) && (bn[(e = Mt(s)).overflowY] || bn[e.overflowX]),
        o._isScrollT = a
    }
    (o._isScroll || "x" === i) && (r.stopPropagation(),
    r._gsapAllow = !0)
}, Sa = function(t, e, r, n) {
    return Ee.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: n = n && ff,
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function() {
            return r && Pe(ae, Ee.eventTypes[0], iu, !1, !0)
        },
        onDisable: function() {
            return Se(ae, Ee.eventTypes[0], iu, !0)
        }
    })
}, cf = /(input|label|select|textarea)/i, iu = function(t) {
    var e = cf.test(t.target.tagName);
    (e || ru) && (t._gsapAllow = !0,
    ru = e)
}, hf = function(t) {
    Hr(t) || (t = {}),
    t.preventDefault = t.isNormalizer = t.allowClicks = !0,
    t.type || (t.type = "wheel,touch"),
    t.debounce = !!t.debounce,
    t.id = t.id || "normalizer";
    var e, r, n, i, s, o, a, u, l = t, c = l.normalizeScrollX, f = l.momentum, h = l.allowNestedScroll, D = l.onRelease, p = ct(t.target) || Gt, d = A.core.globals().ScrollSmoother, g = d && d.get(), _ = xr && (t.content && ct(t.content) || g && !1 !== t.content && !g.smooth() && g.content()), m = Ar(p, be), v = Ar(p, ot), y = 1, C = (Ee.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth, F = 0, E = ut(f) ? function() {
        return f(e)
    }
    : function() {
        return f || 2.8
    }
    , x = Sa(p, t.type, !0, h), b = function() {
        return i = !1
    }, w = er, T = er, k = function() {
        r = _r(p, be),
        T = mi(xr ? 1 : 0, r),
        c && (w = mi(0, _r(p, ot))),
        n = ti
    }, S = function() {
        _._gsap.y = Xi(parseFloat(_._gsap.y) + m.offset) + "px",
        _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(_._gsap.y) + ", 0, 1)",
        m.offset = m.cacheID = 0
    }, P = function() {
        k(),
        s.isActive() && s.vars.scrollY > r && (m() > r ? s.progress(1) && m(r) : s.resetTo("scrollY", r))
    };
    return _ && A.set(_, {
        y: "+=0"
    }),
    t.ignoreCheck = function(t) {
        return xr && "touchmove" === t.type && function() {
            if (i) {
                requestAnimationFrame(b);
                var t = Xi(e.deltaY / 2)
                  , r = T(m.v - t);
                if (_ && r !== m.v + m.offset) {
                    m.offset = r - m.v;
                    var n = Xi((parseFloat(_ && _._gsap.y) || 0) - m.offset);
                    _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)",
                    _._gsap.y = n + "px",
                    m.cacheID = U.cache,
                    dr()
                }
                return !0
            }
            m.offset && S(),
            i = !0
        }() || y > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
    }
    ,
    t.onPress = function() {
        i = !1;
        var t = y;
        y = Xi((H.visualViewport && H.visualViewport.scale || 1) / C),
        s.pause(),
        t !== y && ws(p, y > 1.01 || !c && "x"),
        o = v(),
        a = m(),
        k(),
        n = ti
    }
    ,
    t.onRelease = t.onGestureStart = function(t, e) {
        if (m.offset && S(),
        e) {
            U.cache++;
            var n, i, o = E();
            c && (i = (n = v()) + .05 * o * -t.velocityX / .227,
            o *= tu(v, n, i, _r(p, ot)),
            s.vars.scrollX = w(i)),
            i = (n = m()) + .05 * o * -t.velocityY / .227,
            o *= tu(m, n, i, _r(p, be)),
            s.vars.scrollY = T(i),
            s.invalidate().duration(o).play(.01),
            (xr && s.vars.scrollY >= r || n >= r - 1) && A.to({}, {
                onUpdate: P,
                duration: o
            })
        } else
            u.restart(!0);
        D && D(t)
    }
    ,
    t.onWheel = function() {
        s._ts && s.pause(),
        st() - F > 1e3 && (n = 0,
        F = st())
    }
    ,
    t.onChange = function(t, e, r, i, s) {
        if (ti !== n && k(),
        e && c && v(w(i[2] === e ? o + (t.startX - t.x) : v() + e - i[1])),
        r) {
            m.offset && S();
            var u = s[2] === r
              , l = u ? a + t.startY - t.y : m() + r - s[1]
              , f = T(l);
            u && l !== f && (a += f - l),
            m(f)
        }
        (r || e) && dr()
    }
    ,
    t.onEnable = function() {
        ws(p, !c && "x"),
        L.addEventListener("refresh", P),
        Pe(H, "resize", P),
        m.smooth && (m.target.style.scrollBehavior = "auto",
        m.smooth = v.smooth = !1),
        x.enable()
    }
    ,
    t.onDisable = function() {
        ws(p, !0),
        Se(H, "resize", P),
        L.removeEventListener("refresh", P),
        x.kill()
    }
    ,
    t.lockAxis = !1 !== t.lockAxis,
    (e = new Ee(t)).iOS = xr,
    xr && !m() && m(1),
    xr && A.ticker.add(er),
    u = e._dc,
    s = A.to(e, {
        ease: "power4",
        paused: !0,
        scrollX: c ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Ta(m, m(), (function() {
                return s.pause()
            }
            ))
        },
        onUpdate: dr,
        onComplete: u.vars.onComplete
    }),
    e
};
L.sort = function(t) {
    return Y.sort(t || function(t, e) {
        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
    }
    )
}
,
L.observe = function(t) {
    return new Ee(t)
}
,
L.normalizeScroll = function(t) {
    if (typeof t > "u")
        return yt;
    if (!0 === t && yt)
        return yt.enable();
    if (!1 === t)
        return yt && yt.kill();
    var e = t instanceof Ee ? t : hf(t);
    return yt && yt.target === e.target && yt.kill(),
    ii(e.target) && (yt = e),
    e
}
,
L.core = {
    _getVelocityProp: $s,
    _inputObserver: Sa,
    _scrollers: U,
    _proxies: nr,
    bridge: {
        ss: function() {
            zt || si("scrollStart"),
            zt = st()
        },
        ref: function() {
            return Xe
        }
    }
},
ga() && A.registerPlugin(L);
var _f = /(?:^\s+|\s+$)/g
  , df = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Pa(t) {
    var e = t.nodeType
      , r = "";
    if (1 === e || 9 === e || 11 === e) {
        if ("string" == typeof t.textContent)
            return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling)
            r += Pa(t)
    } else if (3 === e || 4 === e)
        return t.nodeValue;
    return r
}
function Qs(t, e, r, n) {
    for (var i, s = t.firstChild, o = []; s; )
        3 === s.nodeType ? (i = (s.nodeValue + "").replace(/^\n+/g, ""),
        n || (i = i.replace(/\s+/g, " ")),
        o.push.apply(o, ka(i, e, r, n))) : "br" === (s.nodeName + "").toLowerCase() ? o[o.length - 1] += "<br>" : o.push(s.outerHTML),
        s = s.nextSibling;
    for (i = o.length; i--; )
        "&" === o[i] && o.splice(i, 1, "&amp;");
    return o
}
function ka(t, e, r, n) {
    if (t += "",
    r && (t = t.trim ? t.trim() : t.replace(_f, "")),
    e && "" !== e)
        return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var i, s, o = [], a = t.length, u = 0; u < a; u++)
        ((s = t.charAt(u)).charCodeAt(0) >= 55296 && s.charCodeAt(0) <= 56319 || t.charCodeAt(u + 1) >= 65024 && t.charCodeAt(u + 1) <= 65039) && (i = ((t.substr(u, 12).split(df) || [])[1] || "").length || 2,
        s = t.substr(u, i),
        o.emoji = 1,
        u += i - 1),
        o.push(">" === s ? "&gt;" : "<" === s ? "&lt;" : !n || " " !== s || " " !== t.charAt(u - 1) && " " !== t.charAt(u + 1) ? s : "&nbsp;");
    return o
}
var Ui, Tn, Df = function() {
    return Ui || typeof window < "u" && (Ui = window.gsap) && Ui.registerPlugin && Ui
}, cn = {
    version: "3.12.2",
    name: "text",
    init: function(t, e, r) {
        "object" != typeof e && (e = {
            value: e
        });
        var n, i, s, o, a, u, l, c, f = t.nodeName.toUpperCase(), h = this, D = e, p = D.newClass, d = D.oldClass, g = D.preserveSpaces, _ = D.rtl, m = h.delimiter = e.delimiter || "", v = h.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : "");
        if (h.svg = t.getBBox && ("TEXT" === f || "TSPAN" === f),
        !("innerHTML"in t) && !h.svg)
            return !1;
        if (h.target = t,
        "value"in e) {
            for (s = Qs(t, m, !1, g),
            Tn || (Tn = document.createElement("div")),
            Tn.innerHTML = e.value,
            i = Qs(Tn, m, !1, g),
            h.from = r._from,
            (h.from || _) && !(_ && h.from) && (f = s,
            s = i,
            i = f),
            h.hasClass = !(!p && !d),
            h.newClass = _ ? d : p,
            h.oldClass = _ ? p : d,
            n = (f = s.length - i.length) < 0 ? s : i,
            f < 0 && (f = -f); --f > -1; )
                n.push(v);
            if ("diff" === e.type) {
                for (o = 0,
                a = [],
                u = [],
                l = "",
                f = 0; f < i.length; f++)
                    (c = i[f]) === s[f] ? l += c : (a[o] = l + c,
                    u[o++] = l + s[f],
                    l = "");
                i = a,
                s = u,
                l && (i.push(l),
                s.push(l))
            }
            e.speed && r.duration(Math.min(.05 / e.speed * n.length, e.maxDuration || 9999)),
            h.rtl = _,
            h.original = s,
            h.text = i,
            h._props.push("text")
        } else
            h.text = h.original = [""]
    },
    render: function(t, e) {
        t > 1 ? t = 1 : t < 0 && (t = 0),
        e.from && (t = 1 - t);
        var r, n, i, s = e.text, o = e.hasClass, a = e.newClass, u = e.oldClass, l = e.delimiter, c = e.target, f = e.fillChar, h = e.original, D = e.rtl, p = s.length, d = (D ? 1 - t : t) * p + .5 | 0;
        o && t ? (n = u && d !== p,
        i = ((r = a && d) ? "<span class='" + a + "'>" : "") + s.slice(0, d).join(l) + (r ? "</span>" : "") + (n ? "<span class='" + u + "'>" : "") + l + h.slice(d).join(l) + (n ? "</span>" : "")) : i = s.slice(0, d).join(l) + l + h.slice(d).join(l),
        e.svg ? c.textContent = i : c.innerHTML = "&nbsp;" === f && ~i.indexOf("  ") ? i.split("  ").join("&nbsp;&nbsp;") : i
    }
};
let Ve, Ue, $e, We, He, Ge, Aa;
function wt(t, e, r, n, i, s, o) {
    return void 0 !== t ? t : void 0 !== e ? e : void 0 !== r ? r : void 0 !== n ? n : void 0 !== i ? i : void 0 !== s ? s : void 0 !== o ? o : void 0
}
cn.splitInnerHTML = Qs,
cn.emojiSafeSplit = ka,
cn.getText = Pa,
Df() && Ui.registerPlugin(cn),
me.registerPlugin(L),
me.registerPlugin(cn),
L.defaults({
    markers: !1
});
let X = me.matchMedia();
X.add({
    isxs: "(min-width: 0px)",
    issm: "(min-width: 640px)",
    ismd: "(min-width: 768px)",
    islg: "(min-width: 1024px)",
    isxl: "(min-width: 1280px)",
    is2xl: "(min-width: 1536px)"
}, (t=>{
    let {isxs: e, issm: r, ismd: n, islg: i, isxl: s, is2xl: o} = t.conditions;
    return {
        isxs: e,
        issm: r,
        ismd: n,
        islg: i,
        isxl: s,
        is2xl: o
    }
}
)),
X.contexts[0].conditions.is2xl ? console.log("is2xl") : X.contexts[0].conditions.isxl ? console.log("isxl") : X.contexts[0].conditions.islg ? console.log("islg") : X.contexts[0].conditions.ismd ? console.log("ismd") : X.contexts[0].conditions.issm ? console.log("issm") : X.contexts[0].conditions.isxs && console.log("isxs");
const In = me.timeline({
    defaults: {
        ease: "power3.inOut"
    }
})
  , Oa = me.timeline({
    defaults: {
        duration: 1,
        ease: "none"
    }
});
Oa.set("#introTextColor", {
    text: {
        value: "be better."
    }
}).to("#introTextColor", {
    text: {
        value: "All in One"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "keyless"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "friendly"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "slick"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "continuous"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "doge006"
    }
}, "+=0.5"),
In.to("#introText", {
    scale: .5,
    opacity: 0,
    duration: 50,
    ease: "power3.inOut"
}, 18).to("#gradientSection", {
    "--gradient-color-progress": "150%",
    duration: 50
}, "+=0.5").to("#introTextGradient", {
    scale: 1.5,
    ease: "power3.inOut",
    duration: 50
}, "<"),
L.create({
    trigger: "#gradientSection",
    start: "top center",
    end: "bottom center",
    animation: In,
    onLeave: ()=>{
        In.pause()
    }
    ,
    onEnterBack: ()=>{
        In.play()
    }
    ,
    scrub: .3,
    pin: !0
}),
L.create({
    trigger: "#gradientSection",
    start: "top center",
    end: "bottom center",
    animation: Oa
});
const Ma = me.timeline({
    defaults: {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut"
    }
});
Ma.to("#DetectionEngineImg", {
    transform: "translate(50%, -100%)"
}).to("#ModDetectionImg", {
    transform: "translate(50%, 50%)"
}, 0).to("#MusicImg", {
    transform: "translate(-40%, -70%)"
}, 0).to("#ServerImg", {
    transform: "translate(0%, -20%)"
}, 0).to("#SmartBarImg", {
    transform: "translate(-50%, 400%)"
}, 0),
(X.contexts[0].conditions.is2xl || X.contexts[0].conditions.isxl || X.contexts[0].conditions.islg) && L.create({
    id: "interface",
    trigger: "#interfaceSection",
    start: "top top",
    end: "bottom center",
    animation: Ma,
    scrub: .3,
    pin: !0
}),
X.contexts[0].conditions.is2xl || X.contexts[0].conditions.isxl ? me.set("#scriptSearchSectionContainer", {
    scaleX: 2,
    skewY: 0,
    skewX: 0,
    scaleY: 2,
    translateX: 0,
    translateY: 0
}) : X.contexts[0].conditions.islg ? me.set("#scriptSearchSectionContainer", {
    scaleX: 2.5,
    skewY: 0,
    skewX: 0,
    scaleY: 2.5,
    translateX: 0,
    translateY: 0
}) : X.contexts[0].conditions.ismd || X.contexts[0].conditions.issm ? me.set("#scriptSearchSectionContainer", {
    scaleX: 3,
    skewY: 0,
    skewX: 0,
    scaleY: 3,
    translateX: 0,
    translateY: 0
}) : X.contexts[0].conditions.isxs && me.set("#scriptSearchSectionContainer", {
    scaleX: 7,
    skewY: 0,
    skewX: 0,
    scaleY: 7,
    translateX: 0,
    translateY: 0
}),
me.set("#scriptSearchSectionTextBehind", {
    scaleX: 1,
    skewY: 0,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 100,
    opacity: 0
});
let as = me.timeline({
    defaults: {
        duration: 1,
        ease: "none"
    }
});
wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 0, Aa = 1),
as.to("#scriptSearchSectionTextBehind", {
    scaleX: Ve,
    skewY: Ue,
    skewX: $e,
    scaleY: We,
    translateX: He,
    translateY: Ge,
    opacity: Aa
}, 0),
X.contexts[0].conditions.is2xl ? wt(Ve = .5, Ue = 0, $e = 0, We = .5, He = 0, Ge = 200) : X.contexts[0].conditions.isxl ? wt(Ve = .8, Ue = 0, $e = 0, We = .8, He = 0, Ge = 250) : X.contexts[0].conditions.islg ? wt(Ve = .9, Ue = 0, $e = 0, We = .9, He = 0, Ge = 250) : X.contexts[0].conditions.ismd ? wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 300) : X.contexts[0].conditions.issm ? wt(Ve = .8, Ue = 0, $e = 0, We = .8, He = 0, Ge = 200) : X.contexts[0].conditions.isxs && wt(Ve = .7, Ue = 0, $e = 0, We = .7, He = 0, Ge = 200),
as.to("#scriptSearchSectionContainer", {
    scaleX: Ve,
    skewY: Ue,
    skewX: $e,
    scaleY: We,
    translateX: He,
    translateY: Ge
}, 0),
X.contexts[0].conditions.is2xl ? wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 489) : X.contexts[0].conditions.isxl ? wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 400) : X.contexts[0].conditions.islg ? wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 300) : X.contexts[0].conditions.ismd ? wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 250) : X.contexts[0].conditions.issm ? wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 200) : X.contexts[0].conditions.isxs && wt(Ve = 1, Ue = 0, $e = 0, We = 1, He = 0, Ge = 150),
as.to("#scriptSearchSectionTextFront", {
    scaleX: Ve,
    skewY: Ue,
    skewX: $e,
    scaleY: We,
    translateX: He,
    translateY: Ge,
    opacity: 0,
    duration: .5
}, 0);
let is = document.querySelector("#scriptSearchSectionContainer video")
  , pf = new IntersectionObserver((t=>{
    t.forEach((t=>{
        t.isIntersecting ? is.play() : is.pause()
    }
    ))
}
),{
    threshold: .1
});
if (pf.observe(is),
L.create({
    trigger: "#scriptSearchSection",
    start: "top top",
    end: "bottom top",
    animation: as,
    scrub: .3,
    pin: !0,
    onEnter: ()=>{
        is.play()
    }
    ,
    anticipatePin: 1
}),
X.contexts[0].conditions.is2xl || X.contexts[0].conditions.isxl || X.contexts[0].conditions.islg || X.contexts[0].conditions.ismd) {
    const t = me.timeline({
        defaults: {
            ease: "none"
        },
        autoRemoveChildren: !0
    });
    let e = document.querySelectorAll(".undeniablyProCards").length
      , r = 750;
    t.set(".undeniablyProCards", {
        x: t=>t * r,
        left: -711.11,
        ease: "none"
    }),
    t.to(".undeniablyProCards", {
        duration: 100,
        x: t=>"+=" + e * r,
        modifiers: {
            x: me.utils.unitize((t=>parseFloat(t) % (e * r)))
        },
        ease: "none",
        repeat: -1
    }),
    L.create({
        trigger: "#cardsSection",
        start: "top bottom",
        end: "bottom top",
        animation: t,
        onLeave: ()=>{
            t.pause()
        }
        ,
        onEnterBack: ()=>{
            t.play()
        }
    })
}
const Ba = me.timeline({
    defaults: {
        duration: .9,
        ease: "expo.out",
        opacity: 0
    }
});
let Nn, Yn, Xn, Vn, Un, $n;
X.contexts[0].conditions.is2xl ? (me.set(".notificationBanner", {
    xPercent: 50,
    yPercent: 50,
    left: "50%",
    opacity: 0
}),
Nn = -110,
Yn = -50,
Xn = 10,
Vn = 0,
Un = -25,
$n = 0) : X.contexts[0].conditions.isxl ? (me.set(".notificationBanner", {
    xPercent: 50,
    bottom: 80,
    left: "50%",
    opacity: 0
}),
Nn = -110,
Yn = -50,
Xn = 10,
Vn = 0,
Un = -25,
$n = 0) : X.contexts[0].conditions.islg && (me.set(".notificationBanner", {
    xPercent: 50,
    yPercent: 50,
    left: "50%",
    opacity: 0
}),
Nn = -110,
Yn = -50,
Xn = 10,
Vn = 0,
Un = -25,
$n = 0),
Ba.set("#soundNotif", {
    yPercent: Nn
}).set("#spamNotif", {
    yPercent: Yn
}).set("#modNotif", {
    yPercent: Xn
}).to("#soundNotif", {
    xPercent: Vn,
    opacity: 1
}).to("#spamNotif", {
    xPercent: Un,
    opacity: 1
}, "+=0.15").to("#modNotif", {
    xPercent: $n,
    opacity: 1
}, "+=0.15"),
(X.contexts[0].conditions.is2xl || X.contexts[0].conditions.isxl || X.contexts[0].conditions.islg) && L.create({
    id: "smartDesign",
    trigger: "#notificationSection",
    start: ()=>`+=${document.querySelector("#navBar").clientHeight} center`,
    end: ()=>"bottom center",
    animation: Ba
});
let gf = window.innerWidth;
window.addEventListener("resize", (()=>{
    window.innerWidth !== gf && window.location.reload()
}
)),
document.addEventListener("DOMContentLoaded", (function() {
    let t = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver"in window) {
        let e = new IntersectionObserver((function(t, r) {
            t.forEach((function(t) {
                if (t.isIntersecting) {
                    for (let e in t.target.children) {
                        let r = t.target.children[e];
                        "string" == typeof r.tagName && "SOURCE" === r.tagName && (r.src = r.dataset.src)
                    }
                    t.target.load(),
                    t.target.classList.remove("lazy"),
                    e.unobserve(t.target)
                }
            }
            ))
        }
        ));
        t.forEach((function(t) {
            e.observe(t)
        }
        ))
    }
}
));
const mf = document.querySelectorAll("[class*='text-[']");
mf.forEach((t=>{
    const e = t.className.match(/text-\[(.*?)\]/)[1];
    parseInt(e) <= 25.333333333333332 ? t.classList.add("font-sftext") : parseInt(e) >= 26.666666666666664 && t.classList.add("font-sfdisplay")
}
)),
window.addEventListener("DOMContentLoaded", (()=>{
    const t = document.getElementById("hero").querySelectorAll(".opacity-0")
      , e = document.getElementById("heroTitleP")
      , r = document.getElementById("purchaseBtn")
      , n = document.getElementById("cardsTitle")
      , i = document.getElementById("cards").querySelectorAll("li")
      , s = document.querySelectorAll(".heroBlobs");
    t.forEach((t=>{
        t.classList.remove("opacity-0", "scale-150")
    }
    )),
    e.classList.add("opacity-70"),
    s.forEach((t=>{
        t.classList.remove("opacity-0", "scale-150")
    }
    )),
    i.forEach((t=>{
        t.classList.remove("!opacity-0", "scale-125")
    }
    )),
    n.classList.remove("opacity-0"),
    r.addEventListener("click", (()=>{
        document.getElementById("featureList").scrollIntoView({
            behavior: "smooth"
        })
    }
    )),
    setTimeout((()=>{
        s[0].classList.add("animate-pulse-subtle"),
        s[1].classList.add("animate-pulse-subtle-delayed")
    }
    ), 1e3)
}
));
