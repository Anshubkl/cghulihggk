import {
    P as C,
    K as O,
    Z as x,
    r as m,
    A as z,
    Q as L,
    aq as F,
    R as r,
    Y as b,
    T as e,
    X as n,
    av as A,
    H as p,
    U as w,
    V as R,
    ap as M,
    W as i,
    al as B,
    aj as j,
    ao as q,
    J as V,
    as as E,
    G,
    B as J,
    at as P,
    au as K
} from "./common.modules-0a990f43.js";
import {
    G as H,
    A as T,
    S as W,
    e as Q,
    c as k,
    a as D,
    _ as N,
    h as X
} from "./page-activity-ActivityDetail-99521b85.js";
import {
    u as Y,
    E as Z
} from "./page-activity-Championship-cf2a9178.js";
const ee = {
        class: "dailySignIn__container"
    },
    ne = {
        class: "dailySignIn__container-hero"
    },
    te = {
        class: "dailySignIn__container-hero__header"
    },
    ae = {
        class: "dailySignIn__container-hero__footer"
    },
    se = {
        class: "dailySignIn__container-content"
    },
    oe = {
        class: "dailySignIn__container-content__wrapper"
    },
    ie = {
        class: "dailySignIn__container-content__wrapper-block__header"
    },
    le = {
        class: "lastImage"
    },
    re = {
        class: "dailySignIn__container-content__footer"
    },
    ce = ["disabled"],
    ue = C({
        __name: "index",
        setup(h) {
            O();
            const v = x(),
                s = H().getUserInfo,
                o = m({}),
                g = m([]);
            let l = !1;

            function c() {
                v.go(-1)
            }

            function y(a) {
                v.push({
                    name: a === "rules" ? `${String(v.currentRoute.value.name)}-Rules` : `${String(v.currentRoute.value.name)}-Record`
                })
            }
            async function t() {
                await T(W({})) && localStorage.setItem("signedFlag", "1"), $()
            }
            const $ = async () => {
                const a = await T(Q({
                    uid: s.userId,
                    sign: s.sign
                }));
                localStorage.getItem("signedFlag") === "1" && (l = !0), g.value = a.data.signInRechargesList, o.value = a.data.signIn
            };
            return z(async () => {
                localStorage.setItem("signedFlag", "0"), $()
            }), (a, f) => {
                const S = L("NavBar"),
                    u = F("lazy");
                return i(), r("div", ee, [b(S, {
                    class: "activity",
                    title: a.$t("checkIn"),
                    backgroundColor: "#f95959",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: c
                }, null, 8, ["title"]), e("div", ne, [e("div", te, [e("h1", null, n(a.$t("code9007")), 1), e("p", null, n(a.$t("descRewordsBasedOnConsecutiveDays")), 1), e("div", null, [A(n(a.$t("checkedInConsecutively")), 1), e("span", null, n(o.value.signCount || 0), 1), A(n(a.$t("days")), 1)]), e("p", null, n(a.$t("comulativelyObtained")), 1), e("h1", null, n(p(k)(o.value.signInSum) || p(k)(0)), 1)]), e("div", ae, [e("button", {
                    onClick: f[0] || (f[0] = d => y("rules"))
                }, n(a.$t("playRules")), 1), e("button", {
                    onClick: f[1] || (f[1] = d => y("record"))
                }, n(a.$t("checkInRecord")), 1)])]), e("div", se, [e("div", oe, [(i(!0), r(w, null, R(g.value.slice(0, 6), (d, _) => (i(), r("div", {
                    key: _,
                    class: M(["dailySignIn__container-content__wrapper-block", {
                        signed: _ < o.value.signCount
                    }])
                }, [e("div", ie, [B(e("img", null, null, 512), [
                    [u, p(D)("activity/DailySignIn", "SignInTop")]
                ]), e("span", null, n(p(k)(d.bouns)), 1)]), B(e("img", null, null, 512), [
                    [u, p(D)("activity/DailySignIn", "coin")]
                ]), j(" {{ $t('continuous') }} "), e("span", null, n(d.day) + " " + n(a.$t("days")), 1)], 2))), 128)), (i(!0), r(w, null, R(g.value.slice(6, 7), d => (i(), r("div", {
                    class: M(["dailySignIn__container-content__wrapper-block", {
                        signed: o.value.signCount >= 7
                    }])
                }, [e("span", le, [B(e("img", null, null, 512), [
                    [u, p(D)("activity/DailySignIn", "day7Bg")]
                ])]), e("div", null, [e("span", null, n(p(k)(d.bouns)), 1), j(" {{ $t('continuous') }} "), e("span", null, n(d.day) + " " + n(a.$t("days")), 1)])], 2))), 256))]), e("div", re, [e("button", {
                    onClick: f[2] || (f[2] = d => {
                        d.stopPropagation(), t()
                    }),
                    disabled: p(l),
                    class: M({
                        greyBtn: p(l)
                    })
                }, n(a.$t("checkIn")), 11, ce)])])])
            }
        }
    });
const de = N(ue, [
        ["__scopeId", "data-v-f1e983bd"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/activity/DailySignIn/index.vue"]
    ]),
    Oe = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: de
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _e = {
        class: "rule ruleHead"
    },
    pe = {
        class: "head"
    },
    ge = {
        key: 0
    },
    ve = ["innerHTML"],
    ye = C({
        __name: "Rule",
        props: {
            tiplist: {
                type: Array,
                default: []
            },
            render: {
                type: String,
                default: "text"
            },
            name: {
                type: String,
                default: []
            }
        },
        setup(h) {
            return (v, I) => {
                const s = L("svg-icon");
                return i(), r("div", _e, [b(s, {
                    name: "ruleHead"
                }), e("div", pe, n(h.name), 1), (i(!0), r(w, null, R(h.tiplist, (o, g) => (i(), r("div", {
                    key: g
                }, [h.render === "text" ? (i(), r("div", ge, n(o), 1)) : (i(), r("div", {
                    key: 1,
                    innerHTML: o
                }, null, 8, ve))]))), 128)), q(v.$slots, "default", {}, void 0, !0)])
            }
        }
    });
const fe = N(ye, [
        ["__scopeId", "data-v-b64fa971"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/Rule.vue"]
    ]),
    me = {
        class: "infiniteScroll__loading"
    },
    Ie = C({
        __name: "List",
        props: {
            api: {
                type: Function,
                required: !0
            },
            distance: {
                type: Number,
                required: !1,
                default: 100
            },
            pageQuery: {
                type: null,
                required: !1,
                default: {}
            },
            list: {
                type: Array,
                required: !0
            },
            isAutoLoad: {
                type: Boolean,
                required: !1,
                default: !0
            },
            filterData: {
                type: Function,
                required: !1
            },
            showNoM: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange"],
        setup(h, {
            expose: v,
            emit: I
        }) {
            const s = h,
                o = V(() => {
                    let u = p(s.list);
                    return s.filterData ? s.filterData(u) : u
                }),
                {
                    isAutoLoad: g
                } = s,
                l = m(!1),
                c = m({
                    pageNo: 1,
                    pageSize: 10
                }),
                y = m(!1),
                t = async u => {
                    if (!c.value.pageNo || !c.value.pageSize) return;
                    y.value = !0;
                    let d = { ...c.value,
                        ...s.pageQuery,
                        ...u
                    };
                    const _ = await T(s.api(d));
                    if (_) {
                        c.value.pageNo = _.data.pageNo, I("pageChange", _.data), (_.data.totalCount === 0 || _.data.totalPage === c.value.pageNo) && (l.value = !0);
                        let U = c.value.pageNo === 1 ? _.data.list : [...s.list.concat(_.data.list)];
                        I("update:list", U), y.value = !1
                    } else y.value = !1;
                    S.value = !1
                },
                $ = () => {
                    c.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, l.value = !1, I("update:list", []), J(() => {
                        t()
                    })
                },
                {
                    elementRef: a
                } = Y($),
                {
                    bottom: f
                } = E(a);
            G(f, (u, d) => {
                const {
                    innerHeight: _
                } = window;
                S.value || u <= _ + s.distance && d !== 0 && c.value.pageNo >= 1 && !y.value && !l.value && (S.value = !0, t({
                    pageNo: c.value.pageNo + 1
                }), setTimeout(() => {
                    S.value = !1
                }, 1e3))
            });
            const S = m(!1);
            return z(async () => {
                g && t()
            }), v({
                resetRefresh: $
            }), (u, d) => {
                const _ = L("van-loading");
                return i(), r("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: a
                }, [q(u.$slots, "content", {
                    list: o.value
                }, void 0, !0), q(u.$slots, "loading", {}, () => [e("div", me, [y.value && !l.value ? (i(), P(_, {
                    key: 0,
                    class: "z-50"
                })) : j("v-if", !0), o.value.length === 0 && l.value ? (i(), P(Z, {
                    key: 1,
                    class: "empty"
                })) : l.value && u.showNoM ? (i(), r("div", {
                    key: 2,
                    ref: "pullTextRef"
                }, n(u.$t("noMoreThere")), 513)) : j("v-if", !0)])], !0)], 512)
            }
        }
    });
const he = N(Ie, [
        ["__scopeId", "data-v-61888f52"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/List.vue"]
    ]),
    Se = {
        class: "checkInRecord-container content"
    },
    $e = {
        class: "dailySignInRecord__container-wrapper"
    },
    ke = {
        class: "dailySignInRecord__container-wrapper__content-left"
    },
    be = {
        class: "dailySignInRecord__container-wrapper__content-right"
    },
    we = {
        alt: ""
    },
    Re = C({
        __name: "index",
        setup(h) {
            const v = x(),
                I = m({
                    pageSize: 20
                }),
                s = m({
                    list: [],
                    pageNo: 0,
                    totalPage: 0,
                    totalCount: 0
                });

            function o() {
                v.back()
            }
            return z(async () => {}), (g, l) => {
                const c = L("NavBar"),
                    y = F("lazy");
                return i(), r("div", Se, [b(c, {
                    title: g.$t("checkInRecord"),
                    "left-arrow": "",
                    onClickLeft: o
                }, null, 8, ["title"]), b(he, {
                    distance: 300,
                    api: p(X),
                    list: s.value.list,
                    "onUpdate:list": l[0] || (l[0] = t => s.value.list = t),
                    "page-query": I.value,
                    "onUpdate:pageQuery": l[1] || (l[1] = t => I.value = t),
                    isAutoLoad: !0
                }, {
                    content: K(() => [e("div", $e, [(i(!0), r(w, null, R(s.value.list, t => (i(), r("div", {
                        class: "dailySignInRecord__container-wrapper__content",
                        key: t.markDayTime
                    }, [e("div", ke, [e("h1", null, n(g.$t("continuousCheckedIn")) + n(t.continuousDayContinue) + n(g.$t("days")), 1), e("span", null, n(t.markDayTime), 1)]), e("div", be, [B(e("img", we, null, 512), [
                        [y, p(D)("activity/DailySignIn", "coin")]
                    ]), e("span", null, n(t.amount), 1)])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const Ce = N(Re, [
        ["__scopeId", "data-v-f8374830"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/activity/DailySignIn/Record/index.vue"]
    ]),
    Fe = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ce
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Le = {
        class: "dailySignInRules__container"
    },
    Ne = {
        class: "dailySignInRules__container-hero"
    },
    Be = {
        class: "dailySignInRules__container-hero__wrapper"
    },
    De = {
        class: "dailySignInRules__container-hero__wrapper-titlebox"
    },
    je = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    Te = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    ze = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    Me = C({
        __name: "index",
        setup(h) {
            const v = x(),
                s = H().getUserInfo,
                {
                    t: o
                } = O(),
                g = m({}),
                l = m([]),
                c = m([o("desc1"), o("desc2"), o("desc3"), o("desc4"), o("desc5"), o("desc6")]);

            function y() {
                v.go(-1)
            }
            return z(async () => {
                const t = await T(Q({
                    uid: s.userId,
                    sign: s.sign
                }));
                l.value = t.data.signInRechargesList, g.value = t.data.signIn
            }), (t, $) => {
                const a = L("NavBar");
                return i(), r("div", Le, [b(a, {
                    title: t.$t("playRules"),
                    "left-arrow": "",
                    onClickLeft: y
                }, null, 8, ["title"]), e("div", Ne, [e("div", Be, [e("div", De, [e("div", je, n(t.$t("ruleSignIn")), 1), e("div", Te, n(t.$t("ruleAcount")), 1), e("div", ze, n(t.$t("ruleBonus")), 1)]), e("ul", null, [(i(!0), r(w, null, R(l.value, (f, S) => (i(), r("li", {
                    key: S
                }, [e("div", null, n(f.day), 1), e("div", null, n(p(k)(f.amount)), 1), e("div", null, n(p(k)(f.bouns)), 1)]))), 128))])])]), b(fe, {
                    name: t.$t("rule"),
                    tiplist: c.value
                }, null, 8, ["name", "tiplist"])])
            }
        }
    });
const qe = N(Me, [
        ["__scopeId", "data-v-c1e312a2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/activity/DailySignIn/Rules/index.vue"]
    ]),
    He = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qe
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    he as L, Fe as a, He as b, Oe as i, fe as r
};
//# sourceMappingURL=page-activity-DailySignIn-e50b2be7.js.map