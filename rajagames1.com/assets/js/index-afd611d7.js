import {
    P as R,
    Z as ce,
    $ as Q,
    Q as B,
    W as b,
    R as P,
    U as Z,
    V as we,
    T as t,
    Y as k,
    H as d,
    X as c,
    ap as ue,
    A as H,
    N as de,
    aC as ve,
    r as p,
    aq as me,
    al as N,
    aw as ke,
    ax as Se,
    q as $e,
    ai as Ie,
    J as D,
    G,
    at as j,
    au as A,
    aj as L,
    av as z,
    K as Ce,
    bf as Le,
    aO as ne,
    bB as Te,
    a7 as Ae,
    ao as W,
    an as De,
    B as Pe,
    bC as je,
    bD as Ne,
    bE as Be,
    bF as Fe,
    bG as Ee,
    am as M,
    aD as Ve,
    n as _e,
    bw as Oe,
    b4 as Re,
    bH as xe,
    bI as Ue,
    bJ as Ge,
    bK as He,
    bL as Me,
    bM as ze,
    bN as Ke,
    bO as We,
    bb as Ye,
    bP as qe,
    b9 as Xe,
    bQ as Je,
    bR as Qe,
    bS as Ze,
    bT as et,
    bU as tt,
    bV as at,
    bW as st,
    ba as ot,
    bX as nt,
    bY as it,
    bZ as lt,
    b_ as rt,
    b$ as ct,
    c0 as ut,
    c1 as dt,
    be as vt,
    c2 as mt,
    c3 as _t,
    c4 as pt,
    c5 as ft,
    c6 as gt,
    c7 as ht,
    c8 as yt,
    c9 as bt,
    ca as wt,
    cb as kt,
    cc as St,
    cd as $t,
    ce as It,
    cf as Ct,
    cg as Lt,
    ch as Tt
} from "./common.modules-0a990f43.js";
import {
    _ as F,
    G as pe,
    aP as fe,
    g as K,
    k as ae,
    i as ge,
    v as ee,
    c as te,
    a0 as At,
    a1 as Dt,
    dD as Pt,
    dE as jt,
    dF as Nt,
    dG as Bt,
    a_ as Ft,
    c2 as Et,
    a$ as Vt,
    b0 as Ot,
    K as he,
    a as ie,
    d as Rt,
    dH as xt,
    av as Ut,
    dI as le,
    dJ as Gt,
    aB as ye
} from "./page-activity-ActivityDetail-99521b85.js";
import {
    f as Ht
} from "./page-activity-FirstRecharge-a91fb752.js";
import "./native/index-2e083fd9.js";
import "./en-94a065ad.js";
import "./page-turntable-assets-d6267459.js";
import "./page-activity-DailySignIn-e50b2be7.js";
import "./page-activity-Championship-cf2a9178.js";
window.getBuildInfo = function() {
    return {
        buildTime: "7/18/2025, 6:32:45 PM",
        branch: " commitId:89d3a6d8c69f284504e0af420c6d1e27de524ac0"
    }
};
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
    new MutationObserver(n => {
        for (const i of n)
            if (i.type === "childList")
                for (const f of i.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(n) {
        const i = {};
        return n.integrity && (i.integrity = n.integrity), n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(n) {
        if (n.ep) return;
        n.ep = !0;
        const i = s(n);
        fetch(n.href, i)
    }
})();
const Mt = {
        class: "tabbar__container"
    },
    zt = ["onClick"],
    Kt = R({
        __name: "rajaTab",
        setup(a) {
            const e = ce(),
                s = Q();
            async function o(i) {
                await e.push({
                    name: i
                })
            }
            const n = [{
                icon: "Affiliate",
                title: "raja_affiliate",
                name: "promotion"
            }, {
                icon: "Wallet",
                title: "raja_wallet",
                name: "wallet"
            }, {
                icon: "Games",
                title: "raja_games",
                name: "home"
            }, {
                icon: "Activity",
                title: "raja_activity",
                name: "activity"
            }, {
                icon: "Profile",
                title: "raja_profile",
                name: "main"
            }];
            return (i, f) => {
                const v = B("svg-icon");
                return b(), P("div", Mt, [(b(), P(Z, null, we(n, (m, r) => t("div", {
                    class: ue(["tabbar__container-item", {
                        active: m.name === d(s).name
                    }]),
                    key: m + "" + r,
                    onClick: g => o(m.name)
                }, [k(v, {
                    name: m.name === d(s).name ? `${m.title}_a` : `${m.title}`
                }, null, 8, ["name"]), t("span", null, c(i.$t(m.icon)), 1)], 10, zt)), 64))])
            }
        }
    });
const Wt = F(Kt, [
    ["__scopeId", "data-v-38d5ed56"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/TabBar/rajaTab.vue"]
]);

function Yt() {
    const a = pe(),
        e = () => {
            document.visibilityState === "visible" ? a.setvisibility() : a.setvisibility(0)
        };
    H(() => {
        document.addEventListener("visibilitychange", e)
    }), de(() => {
        document.removeEventListener("visibilitychange", e)
    })
}
const qt = R({
    __name: "Customer",
    setup(a) {
        ve(h => ({
            "f6a705e1-currentFontFamily": E.value
        }));
        const e = p(!1),
            s = p({
                x: 0,
                y: 0
            }),
            o = p(0),
            n = p(0),
            i = p(0),
            f = p(0),
            v = p(0),
            m = p(0),
            r = p();
        let g, w, $, l;
        const {
            getSelfCustomerServiceLink: u
        } = fe({
            ServerType: 2
        });

        function S() {
            U(g, w, $, l) || u()
        }
        H(() => {
            r.value = document.getElementById("customerId")
        });

        function y(h) {
            e.value = !0;
            var I;
            h.touches ? I = h.touches[0] : I = h, s.value.x = I.clientX, s.value.y = I.clientY, o.value = r.value.offsetLeft, n.value = r.value.offsetTop, g = h.clientX, w = h.clientY
        }

        function _(h) {
            if (e.value) {
                var I, V = document.getElementById("customerId"),
                    x = V.clientWidth,
                    Y = V.clientHeight,
                    q = document.documentElement.clientHeight,
                    C = document.documentElement.clientWidth;
                h.touches ? I = h.touches[0] : I = h, i.value = I.clientX - s.value.x, f.value = I.clientY - s.value.y, v.value = o.value + i.value, m.value = n.value + f.value, v.value <= 0 && (v.value = 0), m.value <= 0 && (m.value = 0), v.value >= C - x && (v.value = C - x), m.value >= q - Y && (m.value = q - Y), r.value.style.left = v.value + "px", r.value.style.top = m.value + "px", document.addEventListener("touchmove", function() {
                    h.preventDefault()
                }, !1)
            }
            h.stopPropagation(), h.preventDefault()
        }

        function T(h) {
            e.value = !1, $ = h.clientX, l = h.clientY
        }

        function U(h, I, V, x) {
            return !(Math.sqrt((h - V) * (h - V) + (I - x) * (I - x)) <= 1)
        }
        const E = p("bahnschrift");
        return (h, I) => {
            const V = me("lazy");
            return b(), P("div", {
                class: "customer",
                onClick: S,
                onMousedown: y,
                onTouchstart: y,
                onMousemove: _,
                onTouchmove: _,
                onMouseup: T,
                id: "customerId"
            }, [N(t("img", null, null, 512), [
                [V, d(K)("home", "icon_sevice")]
            ])], 32)
        }
    }
});
const Xt = F(qt, [
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/Customer.vue"]
    ]),
    Jt = "/assets/png/fortune-7ead66ac.png",
    Qt = "/assets/png/logo-34e4ab3d.png";
const Zt = {},
    se = a => (ke("data-v-5eb72be7"), a = a(), Se(), a),
    ea = {
        class: "start-page"
    },
    ta = se(() => t("div", {
        class: "dice"
    }, null, -1)),
    aa = se(() => t("img", {
        class: "fortune",
        src: Jt
    }, null, -1)),
    sa = se(() => t("img", {
        class: "logo",
        src: Qt
    }, null, -1));

function oa(a, e) {
    return b(), P("div", ea, [t("div", null, [ta, t("p", null, c(a.$t("fairAndSafe")), 1), aa, sa])])
}
const na = F(Zt, [
        ["render", oa],
        ["__scopeId", "data-v-5eb72be7"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/entrance/raja/StartPage.vue"]
    ]),
    ia = {
        class: "header"
    },
    la = {
        class: "title"
    },
    ra = {
        class: "tip"
    },
    ca = {
        class: "container"
    },
    ua = {
        class: "footer"
    },
    da = R({
        __name: "dialog",
        setup(a) {
            const e = ce(),
                s = Q(),
                o = p(!1),
                {
                    closeFirstSave: n
                } = ae(),
                {
                    ActiveSotre: i,
                    getFirstRechargeList: f
                } = ge(),
                v = $e(new Date).format("YYYY-MM-DD"),
                m = Ie("firstSave", null),
                r = D(() => m.value == v),
                g = () => {
                    r.value ? (m.value = "", localStorage.removeItem("firstSave")) : m.value = v
                },
                w = () => {
                    o.value = !1, n()
                },
                $ = ["activity", "home", "main", "wallet", "promotion"];
            G(() => s.name, y => {
                $.includes(s.name) && l()
            });
            const l = () => {
                    if (m.value == v) return n();
                    f().then(y => {
                        if (!y.length) {
                            o.value = !1, n();
                            return
                        }
                        const _ = y.find(T => T.isFinshed);
                        _ && (i.value.isShowFirstSaveDialog = !1), _ || (o.value = !0)
                    })
                },
                u = () => {
                    o.value = !1, n(!0), e.push({
                        name: "FirstRecharge"
                    })
                },
                S = () => {
                    o.value = !1, n(!0), e.push({
                        name: "Recharge"
                    })
                };
            return H(() => {
                $.includes(s.name) && l()
            }), (y, _) => {
                const T = B("van-checkbox"),
                    U = B("van-dialog");
                return b(), j(U, {
                    show: o.value,
                    "onUpdate:show": _[1] || (_[1] = E => o.value = E),
                    className: "firstSaveDialog"
                }, {
                    title: A(() => [t("div", ia, [t("div", la, c(y.$t("firstDialogH")), 1), t("div", ra, c(y.$t("firstDialogTip")), 1)])]),
                    footer: A(() => [t("div", ua, [L(` <div class="active" :class="{ a: isActive}" @click="changeActive"><svg-icon name="active" />{{ $t('noTipToday') }}</div> `), t("div", {
                        class: ue(["active", {
                            a: r.value
                        }]),
                        onClick: g
                    }, [k(T, {
                        modelValue: r.value,
                        "onUpdate:modelValue": _[0] || (_[0] = E => r.value = E)
                    }, null, 8, ["modelValue"]), z(c(y.$t("noTipToday")), 1)], 2), t("div", {
                        class: "btn",
                        onClick: u
                    }, c(y.$t("activity")), 1)])]),
                    default: A(() => [t("div", ca, [k(Ht, {
                        list: d(i).FirstRechargeList,
                        onGorecharge: S
                    }, null, 8, ["list"])]), t("div", {
                        class: "close",
                        onClick: w
                    })]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const va = F(da, [
        ["__scopeId", "data-v-9cd12fb2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Activity/FirstRecharge/dialog.vue"]
    ]),
    ma = {
        class: "dialog-window"
    },
    _a = {
        class: "dialog-wrapper"
    },
    pa = {
        class: "dialog-title"
    },
    fa = {
        class: "dialog-content"
    },
    ga = {
        class: "dialog-window"
    },
    ha = {
        class: "dialog-wrapper"
    },
    ya = {
        class: "dialog-title"
    },
    ba = {
        class: "dialog-tips"
    },
    wa = {
        class: "dialog-content"
    },
    ka = {
        class: "dialog-tips",
        style: {
            "margin-bottom": "0"
        }
    },
    Sa = {
        class: "dialog-window"
    },
    $a = {
        class: "dialog-wrapper"
    },
    Ia = {
        class: "dialog-tips",
        style: {
            "margin-top": "10px"
        }
    },
    Ca = {
        class: "dialog-title",
        style: {
            "margin-top": "0"
        }
    },
    La = {
        class: "dialog-tips"
    },
    Ta = {
        class: "dialog-content"
    },
    Aa = {
        class: "dialog-18"
    },
    Da = {
        class: "tip_txt"
    },
    Pa = {
        class: "dialog-footer"
    },
    ja = {
        class: "dialog-18"
    },
    Na = {
        class: "dialog-footer"
    },
    Ba = R({
        __name: "AllPageDialog",
        setup(a) {
            const {
                ActiveSotre: e
            } = ge(), {
                store: s,
                closeInvite: o,
                showFirstSave: n,
                onReturnAwards: i
            } = ae(), f = p(!1), v = p(!1), m = localStorage.getItem("is18") || void 0, r = ee(), g = ["poppg", "POP888", "POP555", "pop", "POP678"], w = D(() => g.includes(r.projectName)), $ = l => {
                l ? (localStorage.setItem("is18", "1"), f.value = !1) : v.value = !0
            };
            return G(() => w.value, l => {
                l && (f.value = !(m && m === "1"))
            }, {
                immediate: !0
            }), (l, u) => {
                const S = B("van-dialog"),
                    y = me("lazy");
                return b(), P(Z, null, [d(n) ? (b(), j(va, {
                    key: 0
                })) : L("v-if", !0), k(S, {
                    show: d(e).showReceiveDialog,
                    "onUpdate:show": u[1] || (u[1] = _ => d(e).showReceiveDialog = _),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: A(() => [t("div", ma, [t("div", _a, [N(t("img", null, null, 512), [
                        [y, d(K)("public", "succeed")]
                    ]), t("div", pa, c(l.$t("awardsReceived")), 1), t("div", fa, [N(t("img", null, null, 512), [
                        [y, d(K)("activity/DailyTask", "amountIcon")]
                    ]), t("span", null, c(d(te)(d(e).receiveAmount)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: u[0] || (u[0] = _ => d(e).showReceiveDialog = !1)
                    }, c(l.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k(S, {
                    show: d(s).invite,
                    "onUpdate:show": u[3] || (u[3] = _ => d(s).invite = _),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: A(() => [t("div", ga, [t("div", ha, [N(t("img", null, null, 512), [
                        [y, d(K)("public", "succeed")]
                    ]), t("div", ya, c(l.$t("inviteTips")), 1), t("p", ba, c(l.$t("inviteAmount")), 1), t("div", wa, [t("span", ka, c(l.$t("commissionAmount")), 1), t("span", null, c(d(te)(d(s).rebateAmount)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: u[2] || (u[2] = _ => d(o)())
                    }, c(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k(S, {
                    show: d(s).oldUser,
                    "onUpdate:show": u[5] || (u[5] = _ => d(s).oldUser = _),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden"
                }, {
                    default: A(() => [t("div", Sa, [t("div", $a, [N(t("img", null, null, 512), [
                        [y, d(K)("public", "succeed")]
                    ]), t("p", Ia, c(l.$t("oldPromptTip")), 1), t("div", Ca, c(l.$t("oldPrompt")), 1), t("p", La, c(l.$t("oldPromptGift")), 1), t("div", Ta, [t("span", null, c(d(te)(d(s).returnAwards)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: u[4] || (u[4] = _ => d(i)())
                    }, c(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k(S, {
                    show: f.value,
                    "onUpdate:show": u[8] || (u[8] = _ => f.value = _),
                    className: "custom18dialog noOverHidden",
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !1
                }, {
                    default: A(() => [t("div", Aa, [t("div", null, [t("span", null, c(l.$t("loginTips", [d(r).projectName])), 1), t("div", Da, c(l.$t("brazildialog1")), 1)]), t("div", Pa, [t("div", {
                        class: "btn-cnf dialog-btn",
                        onClick: u[6] || (u[6] = _ => $(!0))
                    }, c(l.$t("brazildialog2")), 1), t("div", {
                        class: "btn-cancel dialog-btn",
                        onClick: u[7] || (u[7] = _ => $(!1))
                    }, c(l.$t("brazildialog3")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k(S, {
                    show: v.value,
                    "onUpdate:show": u[10] || (u[10] = _ => v.value = _),
                    className: "custom18dialog noAge",
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !1
                }, {
                    default: A(() => [t("div", ja, [t("div", null, [t("span", null, c(l.$t("brazildialog4")), 1)]), t("div", Na, [t("div", {
                        class: "btn-cancel dialog-btn no-btn",
                        onClick: u[9] || (u[9] = _ => v.value = !1)
                    }, c(l.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Fa = F(Ba, [
        ["__scopeId", "data-v-3d4fafbb"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/AllPageDialog.vue"]
    ]),
    Ea = R({
        __name: "App",
        setup(a) {
            ve(C => ({
                "f13b4d11-currentFontFamily": E.value
            }));
            const {
                openAll: e
            } = ae(), s = Et(), o = p(!1), n = p(!1), i = Q(), f = At(), v = ee(), {
                locale: m
            } = Ce(), r = pe(), g = p(!1), w = D(() => i.meta.tabBar), $ = "rajaHome", l = D(() => ["electronic", "blackGoldHome"].includes($) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path)), u = p(0), S = p(Math.floor(Math.random() * 1e4)), y = D(() => i.name + S.value), _ = () => {
                s.on("changeKeepAliveKey", () => {
                    S.value = Math.floor(Math.random() * 1e4)
                })
            };
            sessionStorage.getItem("isload") ? o.value = !1 : (n.value = !0, sessionStorage.setItem("isload", n.value.toString()), o.value = !0), v.getHomeSetting(), G(() => v.getAreacode, C => {
                C && f.setNumberType(C.substring(1))
            }), G(() => v.getDL, C => {
                m.value = C, r.updateLanguage(C), Vt(C), Ot(he.global.t)
            }), setTimeout(() => {
                o.value = !1
            }, 2e3);
            const T = p(!1),
                U = Dt();
            U.$subscribe((C, O) => {
                T.value = O.isLoading, U.setLoading(T.value)
            });
            const E = p("bahnschrift");
            let h = Pt(),
                I = v.getLanguage,
                V = jt(h, I);
            const x = async C => {
                    const O = [{
                            title: "vi",
                            fontStyle: "bahnschrift"
                        }, {
                            title: "else",
                            fontStyle: "'Roboto', 'Inter', sans-serif"
                        }],
                        X = O.findIndex(J => J.title == V);
                    X >= 0 ? E.value = O[X].fontStyle : E.value = O[O.length - 1].fontStyle
                },
                Y = () => {
                    s.on("keyChange", () => {
                        u.value++
                    }), s.on("changeIsGame", () => {
                        g.value = !g.value, T.value = !T.value
                    })
                },
                q = () => {
                    s.off("keyChange"), s.off("changeKeepAliveKey"), s.off("changeIsGame")
                };
            return f.setNumberType(v.getAreacode.substring(1)), x(), H(() => {
                Nt() && Bt(), e(), q(), Y(), _(), localStorage.getItem("language") && Ft(localStorage.getItem("language"))
            }), Yt(), (C, O) => {
                const X = B("LoadingView");
                return b(), P(Z, null, [k(X, {
                    loading: T.value,
                    type: "loading",
                    isGame: g.value
                }, {
                    default: A(() => [(b(), j(d(Te), {
                        key: u.value
                    }, {
                        default: A(({
                            Component: J
                        }) => [(b(), j(Le, {
                            max: 1
                        }, [d(i).meta.keepAlive ? (b(), j(ne(J), {
                            key: y.value
                        })) : L("v-if", !0)], 1024)), d(i).meta.keepAlive ? L("v-if", !0) : (b(), j(ne(J), {
                            key: 0
                        }))]),
                        _: 1
                    })), L("online custom service"), l.value ? (b(), j(Xt, {
                        key: 0
                    })) : L("v-if", !0), w.value ? (b(), j(Wt, {
                        key: 1
                    })) : L("v-if", !0)]),
                    _: 1
                }, 8, ["loading", "isGame"]), o.value ? (b(), j(na, {
                    key: 0
                })) : L("v-if", !0), k(Fa)], 64)
            }
        }
    });
const Va = F(Ea, [
    ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/entrance/raja/App.vue"]
]);
const Oa = {
        mounted(a, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let s = null;
            const o = e.value[0],
                n = e.value[1];
            a.__handleClick__ = function() {
                s && clearTimeout(s), s = setTimeout(() => {
                    o()
                }, n || 500)
            }, a.addEventListener("click", a.__handleClick__)
        },
        beforeUnmount(a) {
            a.removeEventListener("click", a.__handleClick__)
        }
    },
    Ra = {
        mounted(a, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let s = null;
            const o = e.value[0],
                n = e.value[1];
            a.__handleClick__ = function() {
                s && clearTimeout(s), a.disabled || (a.disabled = !0, o(), s = setTimeout(() => {
                    a.disabled = !1
                }, n || 500))
            }, a.addEventListener("click", a.__handleClick__)
        },
        beforeUnmount(a) {
            a.removeEventListener("click", a.__handleClick__)
        }
    },
    xa = {
        mounted(a, e) {
            a.addEventListener("input", s => {
                const n = a.value.replace(/\D+/g, "");
                a.value = n, e.value = n
            })
        }
    },
    Ua = a => ({
        beforeMount: (e, s) => {
            e.classList.add("ar-lazyload");
            const {
                value: o
            } = s;
            e.dataset.origin = o, a.observe(e)
        },
        updated(e, s) {
            e.dataset.origin = s.value, a.observe(e)
        },
        unmounted(e, s) {
            a.unobserve(e)
        },
        mounted(e, s) {
            a.observe(e)
        }
    }),
    Ga = {
        mounted(a, e) {
            let s = 0;
            const o = e.value && e.value.wait ? e.value.wait : 3e3,
                n = i => {
                    const f = Date.now();
                    f - s >= o && (s = f, e.value && e.value.handler && e.value.handler(i))
                };
            a.addEventListener("click", n), a._throttleClickCleanup = () => {
                a.removeEventListener("click", n)
            }
        },
        unmounted(a) {
            a._throttleClickCleanup && a._throttleClickCleanup(), delete a._throttleClickCleanup
        }
    },
    Ha = {
        mounted(a, e) {
            const {
                value: s
            } = e;
            let o = Ae("permission", null);
            o.value === null || !s || (o && (o = JSON.parse(o.value)), o && o[s] === !1 && (a.style.display = "none"))
        }
    },
    re = {
        debounce: Oa,
        throttle: Ra,
        onlyNum: xa,
        throttleClick: Ga,
        haspermission: Ha
    },
    Ma = {
        install: function(a) {
            Object.keys(re).forEach(s => {
                a.directive(s, re[s])
            });
            const e = new IntersectionObserver(s => {
                s.forEach(o => {
                    if (o.isIntersecting) {
                        const n = o.target;
                        n.src = n.dataset.origin || ie("images", "avatar"), n.onerror = () => {
                            e.unobserve(n);
                            let i = n.dataset.img || ie("images", "avatar");
                            if (!i || i != null && i.includes("undefined")) {
                                n.onerror = null;
                                return
                            }
                            n.src = i, n.style.objectFit = "contain"
                        }, n.classList.remove("ar-lazyload"), e.unobserve(n)
                    }
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            });
            a.directive("lazy", Ua(e))
        }
    },
    za = {
        class: "navbar-fixed"
    },
    Ka = {
        class: "navbar__content"
    },
    Wa = {
        class: "navbar__content-center"
    },
    Ya = {
        class: "navbar__content-title"
    },
    qa = R({
        __name: "NavBar",
        props: {
            title: {
                type: String,
                default: ""
            },
            placeholder: {
                type: Boolean,
                default: !0
            },
            leftArrow: {
                type: Boolean,
                default: !1
            },
            backgroundColor: {
                type: String,
                default: "#f7f8ff"
            },
            classN: {
                type: String,
                default: ""
            },
            headLogo: {
                type: Boolean,
                default: !1
            },
            headerUrl: {
                type: String,
                default: ""
            }
        },
        emits: ["click-left", "click-right"],
        setup(a, {
            emit: e
        }) {
            const s = p(),
                o = ee(),
                n = D(() => o.getHeadLogo),
                i = () => {
                    e("click-left")
                },
                f = () => {
                    e("click-right")
                };
            return H(() => {}), (v, m) => {
                const r = B("van-icon");
                return b(), P("div", {
                    class: "navbar",
                    ref_key: "navbar",
                    ref: s
                }, [t("div", za, [t("div", Ka, [t("div", {
                    class: "navbar__content-left",
                    onClick: i
                }, [W(v.$slots, "left", {}, () => [a.leftArrow ? (b(), j(r, {
                    key: 0,
                    name: "arrow-left"
                })) : L("v-if", !0)], !0)]), t("div", Wa, [a.headLogo ? (b(), P("div", {
                    key: 0,
                    class: "headLogo",
                    style: De({
                        backgroundImage: "url(" + (a.headerUrl || n.value) + ")"
                    })
                }, null, 4)) : L("v-if", !0), W(v.$slots, "center", {}, () => [t("div", Ya, c(a.title), 1)], !0)]), t("div", {
                    class: "navbar__content-right",
                    onClick: f
                }, [W(v.$slots, "right", {}, void 0, !0)])])])], 512)
            }
        }
    });
const Xa = F(qa, [
        ["__scopeId", "data-v-12a80a3e"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/NavBar.vue"]
    ]),
    Ja = () => {
        const a = ee(),
            e = D(() => a.getFirebaseConfig),
            s = p(!1),
            o = p(!1),
            n = p(!1),
            i = p(null),
            f = async () => {
                var r;
                if (!(s.value || !((r = e.value) != null && r.projectId))) try {
                    const g = {
                            apiKey: e.value.apiKey,
                            authDomain: e.value.authDomain,
                            projectId: e.value.projectId,
                            storageBucket: e.value.storageBucket,
                            messagingSenderId: e.value.messagingSenderId,
                            appId: e.value.appId,
                            measurementId: e.value.measurementId
                        },
                        w = je(g);
                    i.value = Ne(w), s.value = !0, v(), m()
                } catch (g) {
                    console.error("[Firebase] init error:", g)
                }
            },
            v = async () => {
                if (!s.value || !i.value) return console.warn("Firebase not init"), null;
                try {
                    if (o.value = !0, await Notification.requestPermission() !== "granted") return console.warn("not permission"), null;
                    const g = await Be(i.value, {
                        vapidKey: e.value.keyPair
                    });
                    return localStorage.setItem("fireBaseToken", g), n.value = !0, g
                } catch (r) {
                    return console.error("[Firebase]  Token error:", r), null
                } finally {
                    o.value = !1
                }
            },
            m = () => {
                if (!i.value) {
                    console.warn("Firebase not init");
                    return
                }
                Fe(i.value, r => {
                    const {
                        title: g,
                        body: w,
                        image: $
                    } = r.notification || {};
                    navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
                        type: "SHOW_NOTIFICATION",
                        payload: {
                            title: g,
                            body: w,
                            image: $
                        }
                    }), g && w && (Ee({
                        type: "primary",
                        message: `${g}：
${w}`,
                        className: "firebase-notify-with-img",
                        duration: 3e3
                    }), document.documentElement.style.setProperty("--notify-icon", `url(${$})`))
                })
            };
        return G(e, async r => {
            r != null && r.projectId && (await Pe(), await f())
        }, {
            immediate: !0
        }), {
            requestPermissionAndToken: v,
            listenForeground: m,
            isLoading: o,
            isReady: n
        }
    },
    Qa = {
        class: "ar-loading-view"
    },
    Za = {
        class: "loading-wrapper"
    },
    es = {
        class: "com__box"
    },
    ts = Ve('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
    as = {
        class: "skeleton-wrapper"
    },
    ss = {
        class: "iosDialog"
    },
    os = {
        class: "title"
    },
    ns = {
        class: "websit_info"
    },
    is = ["src"],
    ls = {
        class: "link"
    },
    rs = {
        class: "text"
    },
    cs = {
        class: "text"
    },
    us = {
        class: "text"
    },
    ds = ["src"],
    vs = R({
        __name: "LoadingView",
        props: {
            loading: {
                type: Boolean,
                required: !0
            },
            type: {
                type: String,
                required: !0
            },
            isGame: {
                type: Boolean,
                required: !0
            }
        },
        setup(a) {
            const e = a,
                s = p();
            let o = null;
            const {
                homeState: n,
                downloadIcon: i
            } = Rt(), f = Q(), {
                getSelfCustomerServiceLink: v
            } = fe({
                ServerType: 2
            }), m = window.location.href, r = D(() => location.origin || ""), g = D(() => f.name === "game"), w = p(!1), $ = xt(() => _e(() =>
                import ("./lottie_light-829eb3bb.js").then(l => l.l), ["assets/js/lottie_light-829eb3bb.js", "assets/js/common.modules-0a990f43.js", "assets/css/common-e210f711.css"]));
            return H(async () => {
                if (m.includes("?")) {
                    const l = new URLSearchParams(m.split("?")[1]);
                    l.size && l.get("goTo") === "worktraking" && v("worktraking")
                }
                "serviceWorker" in navigator && navigator.serviceWorker.register("/firebase-messaging-sw.js").then(() => {
                    const {
                        listenForeground: l
                    } = Ja();
                    l()
                })
            }), G(() => e.loading, async () => {
                e.type === "loading" && !e.isGame && (!o && !w.value && (w.value = !0, o = (await $()).loadAnimation({
                    container: s.value,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "/data.json"
                }), w.value = !1), e.loading ? o && o.play() : o && o.stop())
            }), de(() => {
                o && o.destroy(), o = null
            }), (l, u) => {
                const S = B("VanSkeleton"),
                    y = B("svg-icon"),
                    _ = B("van-popup");
                return b(), P(Z, null, [N(t("div", Qa, [W(l.$slots, "template", {}, () => [N(t("div", Za, [L(" <VanLoading /> "), N(t("div", {
                    ref_key: "element",
                    ref: s,
                    class: "loading-animat"
                }, null, 512), [
                    [M, !l.isGame]
                ]), N(t("div", es, [L(" loading "), ts, L(" 说明：组件名 ")], 512), [
                    [M, l.isGame]
                ]), L(' <div class="animation"></div> ')], 512), [
                    [M, l.type === "loading"]
                ]), N(t("div", as, [k(S, {
                    row: 10
                }), k(S, {
                    title: "",
                    avatar: "",
                    row: 5
                }), k(S, {
                    title: "",
                    row: 5
                })], 512), [
                    [M, l.type === "skeleton"]
                ])], !0)], 512), [
                    [M, l.loading && !g.value]
                ]), W(l.$slots, "default", {}, void 0, !0), k(_, {
                    show: d(n).iosDialog,
                    "onUpdate:show": u[0] || (u[0] = T => d(n).iosDialog = T),
                    round: "",
                    closeable: "",
                    position: "bottom",
                    style: {
                        height: "40%"
                    }
                }, {
                    default: A(() => [t("div", ss, [t("div", os, c(l.$t("pwaInstall")), 1), t("div", ns, [t("img", {
                        class: "icon",
                        src: d(i)
                    }, null, 8, is), t("div", ls, [t("div", null, c(r.value.split("://")[1]), 1), t("div", null, c(r.value), 1)])]), t("div", rs, [z("1. " + c(l.$t("pwaText1")) + " ", 1), k(y, {
                        name: "share"
                    })]), t("div", cs, [z("2. " + c(l.$t("pwaText2")) + " ", 1), t("span", null, [z(c(l.$t("pwaText3")) + " ", 1), k(y, {
                        name: "add_icon"
                    })])]), t("div", us, [z("3. " + c(l.$t("pwaText4")) + " ", 1), t("img", {
                        class: "icon",
                        src: d(i)
                    }, null, 8, ds)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const ms = F(vs, [
    ["__scopeId", "data-v-647954c7"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/LoadingView.vue"]
]);
const _s = ["xlink:href"],
    ps = {
        __name: "svgIcons",
        props: {
            name: {
                type: String,
                required: !0
            },
            color: {
                type: String,
                default: ""
            }
        },
        setup(a) {
            const e = a,
                s = D(() => `#icon-${e.name}`),
                o = D(() => e.name ? `svg-icon icon-${e.name}` : "svg-icon");
            return (n, i) => (b(), P("svg", Oe({
                class: o.value
            }, n.$attrs, {
                style: {
                    color: a.color
                }
            }), [t("use", {
                "xlink:href": s.value
            }, null, 8, _s)], 16))
        }
    },
    fs = F(ps, [
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/svgIcons.vue"]
    ]),
    gs = {
        class: "ar-searchbar__selector"
    },
    hs = {
        class: "ar-searchbar__selector-default"
    },
    ys = R({
        __name: "ArSelect",
        props: {
            selectName: {
                type: String,
                default: ""
            }
        },
        emits: ["click-select"],
        setup(a, {
            emit: e
        }) {
            const s = () => {
                e("click-select")
            };
            return (o, n) => {
                const i = B("van-icon");
                return b(), P("div", gs, [t("div", {
                    onClick: s
                }, [t("span", hs, c(d(Ut)(a.selectName)), 1), k(i, {
                    name: "arrow-down"
                })])])
            }
        }
    });
const bs = F(ys, [
    ["__scopeId", "data-v-fa757a88"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/ArSelect.vue"]
]);
Re({
    duration: 3500,
    zIndex: 4e3
});
const ws = a => {
    a.component("NavBar", Xa), a.component("LoadingView", ms), a.component("ArSelect", bs), a.component("svg-icon", fs), a.use(xe).use(Ue).use(Ge).use(He).use(Me).use(ze).use(Ke).use(We).use(Ye).use(qe).use(Xe).use(Je).use(Qe).use(Ze).use(et).use(tt).use(at).use(st).use(ot).use(nt).use(it).use(lt).use(rt).use(ct).use(ut).use(dt).use(vt).use(mt).use(_t).use(pt).use(ft).use(gt).use(ht).use(yt).use(bt).use(wt).use(kt).use(he).use(Ma).use(St).use($t).use(It);
    let e = a.config.globalProperties,
        s = {};
    s.TopHeight = 38, Object.keys(le.refiter).forEach(o => {
        s[o] = le.refiter[o]
    }), e.$u = s
};
({}).VITE_POINT && Gt[{}.VITE_POINT]();
ye.addRoute({
    path: "/",
    name: "home",
    component: () => _e(() =>
        import ("./page-home-other-cd09a5b2.js").then(a => a.r), ["assets/js/page-home-other-cd09a5b2.js", "assets/js/common.modules-0a990f43.js", "assets/css/common-e210f711.css", "assets/js/page-activity-ActivityDetail-99521b85.js", "assets/js/native/index-2e083fd9.js", "assets/js/en-94a065ad.js", "assets/js/page-turntable-assets-d6267459.js", "assets/css/page-activity-ActivityDetail-a597c4a3.css", "assets/css/page-home-other-7fdd9454.css"]),
    meta: {
        title: "home",
        tabBar: !0,
        keepAlive: !1
    }
});
const oe = Ct(Va),
    be = Lt();
ws(oe);
be.use(Tt);
oe.use(ye).use(be);
oe.mount("#app");
//# sourceMappingURL=index-afd611d7.js.map