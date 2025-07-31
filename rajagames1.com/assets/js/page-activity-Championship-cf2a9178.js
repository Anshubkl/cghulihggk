import {
    P as q,
    ak as ae,
    r as w,
    G as M,
    J as Q,
    R as o,
    al as G,
    am as oe,
    T as e,
    an as ie,
    ao as D,
    W as n,
    ap as O,
    X as s,
    aj as g,
    H as u,
    M as le,
    Q as j,
    Y as b,
    aq as x,
    A as K,
    ar as Y,
    D as ue,
    L as re,
    N as ee,
    as as ce,
    B as de,
    at as H,
    K as te,
    Z as X,
    I as pe,
    au as U,
    U as I,
    V as P,
    O as ve,
    av as V,
    aw as fe,
    ax as _e
} from "./common.modules-0a990f43.js";
import {
    u as E,
    c as B,
    _ as N,
    g as me,
    a as he,
    r as ge,
    A as ye,
    b as ke,
    j as $e,
    f as Z,
    d as Te
} from "./page-activity-ActivityDetail-99521b85.js";
const we = {
        class: "item"
    },
    Ce = ["src"],
    Le = {
        class: "right"
    },
    Re = {
        key: 0
    },
    Se = {
        key: 1
    },
    be = {
        key: 2
    },
    De = {
        key: 3,
        class: "time"
    },
    Ie = ["innerHTML"],
    Be = {
        key: 4,
        class: "time"
    },
    Ae = {
        key: 5,
        class: "time"
    },
    Ne = {
        class: "foot"
    },
    je = {
        class: "amount"
    },
    qe = q({
        __name: "card",
        props: {
            bgImgWidth: {
                type: String,
                required: !1,
                default: "100%"
            },
            bgImgHeight: {
                type: String,
                required: !1,
                default: "150px"
            },
            itemD: {
                type: null,
                required: !1,
                default: {}
            },
            state: {
                type: Number,
                required: !1
            },
            isRefresh: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        emits: ["update:isRefresh"],
        setup(p, {
            emit: f
        }) {
            const c = p;

            function d() {
                if (c.state == 1) {
                    const a = m.value.replace(/-/g, "/"),
                        L = c.itemD.endTime.replace(/-/g, "/");
                    r.value = new Date(L).getTime() - new Date(a).getTime(), r.value > 0 && (v.value = le({
                        time: r.value,
                        onChange: $
                    }), v.value.start())
                }
            }
            const {
                serviceNowTime: m
            } = E(), {
                isRefresh: t
            } = ae(c, f), r = w(0), v = w();
            M(() => c.itemD.id, a => {
                d()
            }, {
                immediate: !0
            });
            const y = Q(() => v.value.current);

            function $(a) {
                a.total == 0 ? t.value = !0 : t.value = !1
            }

            function k(a) {
                const L = String(a.hours).padStart(2, "0"),
                    R = String(a.minutes).padStart(2, "0"),
                    S = String(a.seconds).padStart(2, "0");
                return L + ":" + R + ":" + S
            }
            return (a, L) => (n(), o("div", we, [G(e("img", {
                src: a.itemD.iconUrl,
                alt: "",
                style: ie(`width:${a.bgImgWidth};height:${a.bgImgHeight};`)
            }, null, 12, Ce), [
                [oe, a.itemD.iconUrl]
            ]), e("div", Le, [D(a.$slots, "content", {}, () => {
                var R, S;
                return [e("div", {
                    class: O(["head", `type${a.state}`])
                }, [a.state == 1 ? (n(), o("h1", Re, s(a.$t("cpsTip3")), 1)) : a.state == 0 ? (n(), o("h1", Se, s(a.$t("startTime")), 1)) : a.state == 2 ? (n(), o("h1", be, s(a.$t("ended")), 1)) : g("v-if", !0), a.state == 1 ? (n(), o("div", De, [e("p", {
                    innerHTML: a.$t("fifteenDays", [y.value.days])
                }, null, 8, Ie), e("h6", null, s(k(y.value)), 1)])) : g("v-if", !0), a.state == 0 ? (n(), o("div", Be, s((R = a.itemD) == null ? void 0 : R.startTime), 1)) : g("v-if", !0), a.state == 2 ? (n(), o("div", Ae, "00:00:00")) : g("v-if", !0)], 2), e("div", Ne, [e("h1", null, s(a.$t("winTips5")), 1), e("div", je, s(u(B)(((S = a.itemD) == null ? void 0 : S.sumBonus) || 0)), 1)])]
            }, !0)]), D(a.$slots, "footer", {}, void 0, !0)]))
        }
    });
const se = N(qe, [
    ["__scopeId", "data-v-277c60ca"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Activity/Championship/card.vue"]
]);
const Ue = {},
    Oe = {
        class: "empty__container"
    };

function Pe(p, f) {
    const c = j("svg-icon");
    return n(), o("div", Oe, [b(c, {
        name: "empty"
    }), D(p.$slots, "text", {}, () => [e("p", null, s(p.$t("noData")), 1)], !0)])
}
const J = N(Ue, [
        ["render", Pe],
        ["__scopeId", "data-v-f84b843f"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Empty/index.vue"]
    ]),
    Ve = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    He = {
        key: 0,
        class: "dialog__container-img"
    },
    Me = {
        class: "dialog__container-title"
    },
    ze = {
        class: "dialog__container-content"
    },
    Ee = {
        key: 1,
        class: "dialog__container-footer"
    },
    Je = ["src"],
    We = q({
        __name: "Dialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: ""
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: ""
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            isShowHeader: {
                type: Boolean,
                default: !0
            },
            imgUrl: {
                type: String,
                default: "tip"
            },
            showCloseIcon: {
                type: Boolean,
                default: !1
            },
            showFooter: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:show", "confirm"],
        setup(p, {
            emit: f
        }) {
            const c = p;
            M(() => c.show, t => {
                t ? window.addEventListener("touchmove", m, {
                    passive: !1
                }) : window.removeEventListener("touchmove", m)
            });

            function d(t) {
                c.clickOutSide && f("update:show", !1)
            }
            const m = t => {};
            return (t, r) => {
                const v = x("lazy");
                return n(), o("div", {
                    class: O(["dialog", {
                        active: p.show,
                        inactive: !p.show
                    }])
                }, [e("div", Ve, [p.isShowHeader ? (n(), o("div", He, [D(t.$slots, "header", {}, () => [G(e("img", {
                    class: O({
                        succed: p.imgUrl == "succeed"
                    }),
                    alt: ""
                }, null, 2), [
                    [v, u(me)("wallet", p.imgUrl)]
                ])], !0)])) : g("v-if", !0), e("div", Me, [D(t.$slots, "title", {}, () => [e("h1", null, s(p.title), 1)], !0)]), e("div", ze, [D(t.$slots, "content", {}, void 0, !0)]), p.showFooter ? (n(), o("div", Ee, [D(t.$slots, "footer", {}, () => [e("button", {
                    onClick: r[0] || (r[0] = () => {
                        f("confirm")
                    })
                }, s(p.confirmText || t.$t("confirm")), 1), p.showCancelBtn ? (n(), o("button", {
                    key: 0,
                    onClick: r[1] || (r[1] = () => {
                        f("update:show", !1)
                    })
                }, s(p.cancelText || t.$t("cancel")), 1)) : g("v-if", !0)], !0)])) : g("v-if", !0), p.showCloseIcon ? (n(), o("img", {
                    key: 2,
                    class: "close_img",
                    src: u(he)("common", "close"),
                    onClick: d
                }, null, 8, Je)) : g("v-if", !0)]), e("div", {
                    class: "dialog__outside",
                    onClick: d
                })], 2)
            }
        }
    });
const Fe = N(We, [
        ["__scopeId", "data-v-3e71d3da"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/Dialog.vue"]
    ]),
    F = re.messages();

function Qe(p) {
    const f = w();
    return K(() => {
        const c = "refresh" + ge();
        f.value && f.value.setAttribute("id", c), setTimeout(() => {
            Y.init({
                mainElement: "#" + c,
                triggerElement: "body",
                onRefresh() {
                    p()
                },
                instructionsReleaseToRefresh: F.vanPullRefresh.loosing,
                instructionsPullToRefresh: F.vanPullRefresh.pulling,
                instructionsRefreshing: F.loading
            })
        }, 200)
    }), ue(() => {
        Y.destroyAll()
    }), {
        elementRef: f
    }
}
const Ge = {
        class: "infiniteScroll__loading"
    },
    Ke = q({
        __name: "ListSimply",
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
            }
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange", "listChange"],
        setup(p, {
            expose: f,
            emit: c
        }) {
            const d = p,
                m = Q(() => {
                    let _ = u(d.list);
                    return d.filterData ? d.filterData(_) || [] : _ || []
                }),
                {
                    isAutoLoad: t
                } = d,
                r = w(!1),
                v = w({
                    pageNo: 1,
                    pageSize: 10
                }),
                y = w(!1),
                $ = async _ => {
                    if (!v.value.pageNo || !v.value.pageSize) return;
                    y.value = !0;
                    let A = { ...v.value,
                        ...d.pageQuery,
                        ..._
                    };
                    const i = await ye(d.api(A));
                    if (i) {
                        v.value.pageNo = i.data.pageNo, c("pageChange", i.data), (i.data.totalCount === 0 || i.data.totalPage === v.value.pageNo) && (r.value = !0);
                        let l = v.value.pageNo === 1 ? i.data.list : [...d.list.concat(i.data.list)];
                        c("update:list", l), c("listChange", i), y.value = !1
                    } else y.value = !1
                },
                k = w(!1);
            let a = null;
            async function L() {
                a && (a(), a = null), await $(), de(() => {
                    a = M(T, _ => {
                        const {
                            innerHeight: A
                        } = window;
                        k.value || _ <= A + d.distance && _ !== 0 && v.value.pageNo >= 1 && !y.value && !r.value && ($({
                            pageNo: v.value.pageNo + 1
                        }), k.value = !0, setTimeout(() => {
                            k.value = !1
                        }, 1e3))
                    })
                })
            }
            K(async () => {
                t && L()
            }), ee(async () => {});
            const R = () => {
                    v.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, r.value = !1, c("update:list", []), L()
                },
                {
                    elementRef: S
                } = Qe(R),
                {
                    bottom: T
                } = ce(S);
            return f({
                resetRefresh: R
            }), (_, A) => {
                const i = j("van-loading");
                return n(), o("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: S
                }, [D(_.$slots, "content", {
                    list: m.value
                }, void 0, !0), D(_.$slots, "loading", {}, () => [e("div", Ge, [y.value && !r.value ? (n(), H(i, {
                    key: 0,
                    class: "z-50"
                })) : g("v-if", !0), m.value.length === 0 && r.value ? D(_.$slots, "empty", {
                    key: 1
                }, () => [b(J)], !0) : r.value ? (n(), o("div", {
                    key: 2,
                    ref: "pullTextRef"
                }, s(_.$t("noMoreThere")), 513)) : g("v-if", !0)])], !0)], 512)
            }
        }
    });
const Xe = N(Ke, [
        ["__scopeId", "data-v-cbab7763"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/ListSimply.vue"]
    ]),
    Ye = {
        class: "championship"
    },
    Ze = {
        class: "tabs"
    },
    xe = ["onClick"],
    et = ["onClick"],
    tt = q({
        __name: "index",
        setup(p) {
            const {
                tabList: f,
                serviceNowTime: c,
                type: d
            } = E(), {
                t: m
            } = te(), t = X(), r = pe({
                state: 1
            }), v = w([]), y = w(), $ = w(!1), k = w(""), a = w(!1);
            M(a, i => {
                var l;
                a.value && ((l = y.value) == null || l.resetRefresh())
            });

            function L(i) {
                t.push({
                    name: "Championship-ChampionshipDetail",
                    query: {
                        championId: i
                    }
                })
            }

            function R(i) {
                var l;
                r.state = i, (l = y.value) == null || l.resetRefresh()
            }

            function S(i) {
                c.value = i.serviceNowTime
            }
            const T = w(null),
                _ = async i => {
                    T.value && clearTimeout(T.value), T.value = setTimeout(async () => {
                        var C;
                        if (i.isJoin) return;
                        const l = await A($e({
                            championId: i.id
                        }));
                        if (l) {
                            if (l.code == 0) ve(m("success")), (C = y.value) == null || C.resetRefresh();
                            else if ([803, 804, 805].includes(l.msgCode) && l.data != null) switch ($.value = !0, l.msgCode) {
                                case 803:
                                    k.value = m("cpsTip25", [l.data]);
                                    break;
                                case 804:
                                    k.value = m("cpsTip26", [l.data]);
                                    break;
                                case 805:
                                    k.value = m("cpsTip27", [d[l.data]]);
                                    break;
                                default:
                                    k.value = m(`code${l.msgCode}`)
                            }
                        }
                    }, 100)
                },
                A = async i => await i.then(C => C && C.code !== 0 ? [803, 804, 805].includes(C.msgCode) ? C : (Z(C), null) : C).catch(C => (Z(C), null));
            return (i, l) => {
                const C = j("NavBar"),
                    ne = j("van-sticky");
                return n(), o("div", Ye, [b(ne, null, {
                    default: U(() => [b(C, {
                        title: i.$t("cpsTip1"),
                        "left-arrow": "",
                        onClickLeft: l[0] || (l[0] = () => u(t).back())
                    }, null, 8, ["title"]), e("div", Ze, [(n(!0), o(I, null, P(u(f), h => (n(), o("div", {
                        key: h.key,
                        class: O({
                            active: r.state == h.key
                        }),
                        onClick: z => R(h.key)
                    }, s(h.title), 11, xe))), 128))])]),
                    _: 1
                }), b(Xe, {
                    list: v.value,
                    "onUpdate:list": l[2] || (l[2] = h => v.value = h),
                    api: u(ke),
                    "page-query": r,
                    "onUpdate:pageQuery": l[3] || (l[3] = h => r = h),
                    distance: 100,
                    ref_key: "listRef",
                    ref: y,
                    "is-auto-load": !0,
                    onListChange: S
                }, {
                    content: U(() => [(n(!0), o(I, null, P(v.value, h => (n(), o("div", {
                        key: h.id
                    }, [b(se, {
                        itemD: h,
                        state: h.state,
                        isRefresh: a.value,
                        "onUpdate:isRefresh": l[1] || (l[1] = z => a.value = z),
                        onClick: z => L(h.id)
                    }, null, 8, ["itemD", "state", "isRefresh", "onClick"]), [1].includes(h.state) ? (n(), o("div", {
                        key: 0,
                        class: O(["btn", {
                            active: !h.isJoin
                        }]),
                        onClick: z => _(h)
                    }, s(h.isJoin ? i.$t("cpsTip8") : i.$t("cpsTip9")), 11, et)) : g("v-if", !0)]))), 128))]),
                    _: 1
                }, 8, ["list", "api", "page-query"]), b(Fe, {
                    show: $.value,
                    "onUpdate:show": l[4] || (l[4] = h => $.value = h),
                    onConfirm: l[5] || (l[5] = () => $.value = !1),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0
                }, {
                    content: U(() => [e("h1", null, s(k.value), 1)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const st = N(tt, [
        ["__scopeId", "data-v-5ffc4111"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/activity/Championship/index.vue"]
    ]),
    Ot = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: st
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nt = {
        class: "title"
    },
    at = {
        class: "con"
    },
    ot = ["innerHTML"],
    it = ["innerHTML"],
    lt = {
        class: "condition"
    },
    ut = {
        key: 0
    },
    rt = {
        key: 1
    },
    ct = {
        key: 2
    },
    dt = {
        class: "ranking"
    },
    pt = {
        class: "top"
    },
    vt = q({
        __name: "rule",
        props: {
            data: {
                type: null,
                required: !1
            }
        },
        setup(p) {
            const {
                t: f
            } = te(), c = w(["0"]), {
                type: d
            } = E();

            function m(t, r) {
                return t == r ? f("cpsTip20", [t]) : f("cpsTip21", [t, r])
            }
            return (t, r) => {
                const v = j("van-collapse-item"),
                    y = j("van-collapse");
                return n(), H(y, {
                    modelValue: c.value,
                    "onUpdate:modelValue": r[0] || (r[0] = $ => c.value = $),
                    class: "rule"
                }, {
                    default: U(() => [b(v, {
                        name: "1"
                    }, {
                        title: U(() => [e("div", nt, s(t.$t("cpsTip5").toLocaleUpperCase()), 1)]),
                        default: U(() => [e("div", at, [e("h1", null, [e("span", null, s(t.$t("cpsTip11")), 1)]), e("div", {
                            innerHTML: t.$t("cpsTip12", [t.data.vendorCode, t.data.startTime, t.data.endTime])
                        }, null, 8, ot), e("h1", null, [e("span", null, s(t.$t("awardAmount")), 1)]), e("div", null, [V(s(t.$t("cpsTip13")), 1), e("span", null, s(u(B)(t.data.sumBonus || 0)), 1)]), e("h1", null, [e("span", null, s(t.$t("cpsTip14")), 1)]), e("div", null, [e("div", {
                            innerHTML: t.$t("cpsTip15", [t.data.vendorCode])
                        }, null, 8, it), e("div", lt, [t.data.conditionsBetAmount > 0 ? (n(), o("p", ut, [V(s(t.$t("betAmounts")) + " ", 1), e("span", null, s(u(B)(t.data.conditionsBetAmount || 0)), 1)])) : g("v-if", !0), t.data.conditionsRechargeAmount > 0 ? (n(), o("p", rt, [V(s(t.$t("rechageAmount")) + " ", 1), e("span", null, s(u(B)(t.data.conditionsRechargeAmount || 0)), 1)])) : g("v-if", !0), t.data.conditionsBindType ? (n(), o("p", ct, [V(s(t.$t("toBind")) + " ", 1), e("span", null, s(u(d)[t.data.conditionsBindType]), 1)])) : g("v-if", !0), t.data.conditionsBetAmount == 0 && t.data.conditionsRechargeAmount == 0 && !t.data.conditionsBindType ? (n(), o(I, {
                            key: 3
                        }, [V(s(t.$t("cpsTip10")), 1)], 64)) : g("v-if", !0)])]), e("h1", null, [e("span", null, s(t.$t("binguoPaimin")), 1)]), e("div", dt, [e("div", pt, [e("span", null, s(t.$t("binguoPaimin")), 1), e("span", null, s(t.$t("k3WarningTip4")), 1)]), (n(!0), o(I, null, P(t.data.rankingAwardsList, ($, k) => (n(), o("div", {
                            class: "info",
                            key: k
                        }, [e("span", null, s(m($.startRanking, $.endRanking)), 1), e("span", null, s(u(B)($.awardsAmount || 0)), 1)]))), 128)), t.data.rankingAwardsList.length == 0 ? (n(), H(J, {
                            key: 0
                        })) : g("v-if", !0)]), e("h1", null, [e("span", null, s(t.$t("cpsTip16")), 1)]), e("div", null, [e("p", null, s(t.$t("cpsTip17")), 1), e("p", null, s(t.$t("cpsTip18")), 1)]), e("h1", null, [e("span", null, s(t.$t("cpsTip19")), 1)]), e("p", null, [e("span", null, s(t.data.vendorCode), 1)])])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    });
const ft = N(vt, [
        ["__scopeId", "data-v-5c0f1c84"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Activity/Championship/rule.vue"]
    ]),
    _t = {
        class: "game"
    },
    mt = {
        class: "items"
    },
    ht = ["onClick"],
    gt = ["onClick"],
    yt = q({
        __name: "game",
        props: {
            data: {
                type: null,
                required: !1
            },
            arLotteryList: {
                type: null,
                required: !1
            }
        },
        setup(p) {
            const {
                onItemClick: f
            } = Te();
            return X(), (c, d) => {
                const m = x("lazy");
                return n(), o("div", _t, [e("h1", null, s(c.$t("cpsTip22")), 1), e("div", mt, [(n(!0), o(I, null, P(c.data, t => (n(), o("div", {
                    class: "item",
                    key: t.gameID,
                    onClick: r => u(f)(t)
                }, [G(e("img", null, null, 512), [
                    [m, t.img]
                ])], 8, ht))), 128)), (n(!0), o(I, null, P(c.arLotteryList, (t, r) => (n(), o("div", {
                    class: "lottery",
                    key: r,
                    onClick: v => u(f)(t)
                }, s(t.title), 9, gt))), 128)), c.data.length == 0 && c.arLotteryList.length == 0 ? (n(), H(J, {
                    key: 0
                })) : g("v-if", !0)])])
            }
        }
    });
const kt = N(yt, [
        ["__scopeId", "data-v-303ee053"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Activity/Championship/game.vue"]
    ]),
    W = p => (fe("data-v-a9d644da"), p = p(), _e(), p),
    $t = {
        class: "ChampionshipDetail"
    },
    Tt = {
        class: "ranking"
    },
    wt = {
        class: "title"
    },
    Ct = {
        class: "amount"
    },
    Lt = W(() => e("span", null, "--", -1)),
    Rt = W(() => e("span", null, "--", -1)),
    St = W(() => e("span", null, "--", -1)),
    bt = {
        class: "rankingList"
    },
    Dt = {
        class: "title"
    },
    It = W(() => e("span", null, "TOP", -1)),
    Bt = {
        key: 0,
        class: "txt"
    },
    At = {
        class: "refresh"
    },
    Nt = q({
        __name: "index",
        setup(p) {
            const {
                tabList: f,
                getChampionTaskDetailV: c,
                championTaskDetailVO: d,
                getTop10UserList: m,
                top10UserListVO: t,
                thirdGameListVO: r,
                arLotteryList: v
            } = E(), y = X(), $ = Q(() => {
                var T;
                return d.value ? (T = f.find(_ => _.key == d.value.state)) == null ? void 0 : T.title : ""
            }), k = w(), a = w(!1), L = w(null);

            function R() {
                c(k.value)
            }
            M(a, T => {
                a.value && R()
            });
            const S = () => {
                m(k.value)
            };
            return K(() => {
                k.value = Number(y.currentRoute.value.query.championId) || 0, k.value != 0 && (R(), S(), L.value = setInterval(S, 10 * 60 * 1e3))
            }), ee(() => {
                clearInterval(L.value)
            }), (T, _) => {
                const A = j("NavBar");
                return n(), o("div", $t, [b(A, {
                    title: $.value,
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = () => u(y).back())
                }, null, 8, ["title"]), JSON.stringify(u(d)) !== "{}" ? (n(), o(I, {
                    key: 0
                }, [b(se, {
                    itemD: u(d),
                    state: u(d).state,
                    isRefresh: a.value,
                    "onUpdate:isRefresh": _[1] || (_[1] = i => a.value = i)
                }, null, 8, ["itemD", "state", "isRefresh"]), e("div", Tt, [e("div", wt, [e("span", null, s(T.$t("binguoPaimin")), 1), e("span", null, s(T.$t("betAmounts")), 1), e("span", null, s(T.$t("k3WarningTip4")), 1)]), e("div", Ct, [u(d) && u(d).userJoinInfo ? (n(), o(I, {
                    key: 0
                }, [e("span", null, s(u(d).userJoinInfo.ranking), 1), e("span", null, s(u(B)(u(d).userJoinInfo.sumBetAmount || 0)), 1), e("span", null, s(u(B)(u(d).userJoinInfo.awardsAmount || 0)), 1)], 64)) : (n(), o(I, {
                    key: 1
                }, [Lt, Rt, St], 64))])])], 64)) : g("v-if", !0), e("div", bt, [e("div", Dt, [It, e("span", null, s(T.$t("account")), 1), e("span", null, s(T.$t("betAmounts")), 1), e("span", null, s(T.$t("k3WarningTip4")), 1)]), (n(!0), o(I, null, P(u(t), (i, l) => (n(), o("div", {
                    class: "info",
                    key: l
                }, [
                    [1, 2, 3].includes(i.ranking) ? (n(), o("span", {
                        key: 1,
                        class: O(`top${i.ranking}`)
                    }, null, 2)) : (n(), o("span", Bt, s(i.ranking), 1)), e("span", null, s(i.userName), 1), e("span", null, s(u(B)(i.sumBetAmount || 0)), 1), e("span", null, s(u(B)(i.awardsAmount || 0)), 1)
                ]))), 128)), e("div", At, s(T.$t("cpsTip28")), 1), u(t).length == 0 ? (n(), H(J, {
                    key: 0
                })) : g("v-if", !0)]), b(ft, {
                    data: u(d)
                }, null, 8, ["data"]), b(kt, {
                    data: u(r),
                    arLotteryList: u(v)
                }, null, 8, ["data", "arLotteryList"])])
            }
        }
    });
const jt = N(Nt, [
        ["__scopeId", "data-v-a9d644da"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/activity/Championship/ChampionshipDetail/index.vue"]
    ]),
    Pt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    se as C, Fe as D, J as E, Xe as L, Pt as a, Ot as i, Qe as u
};
//# sourceMappingURL=page-activity-Championship-cf2a9178.js.map