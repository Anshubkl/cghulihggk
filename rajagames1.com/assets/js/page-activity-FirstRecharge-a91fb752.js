import {
    P as R,
    J as y,
    W as p,
    R as m,
    T as t,
    an as F,
    X as l,
    aj as P,
    K as j,
    r as I,
    Q as L,
    aq as T,
    U as x,
    V as W,
    Y as k,
    au as z,
    av as V,
    H as _,
    ap as M,
    al as $,
    Z as O,
    A as H
} from "./common.modules-0a990f43.js";
import {
    r as U
} from "./page-activity-DailySignIn-e50b2be7.js";
import {
    _ as C,
    i as B,
    k as q,
    c as A,
    g as N,
    a as E
} from "./page-activity-ActivityDetail-99521b85.js";
const G = {
        key: 0,
        class: "step"
    },
    J = R({
        __name: "Progress",
        props: {
            strokeWidth: {
                type: Number,
                default: 12
            },
            total: {
                type: Number,
                default: 0
            },
            numerical: {
                type: Number,
                default: 0
            },
            color: {
                type: String,
                default: "var(--text_color_L4)"
            },
            trackColor: {
                type: String,
                default: "var(--bg_color_L1)"
            },
            isShowStep: {
                type: Boolean,
                default: !0
            }
        },
        setup(f) {
            const e = f,
                u = y(() => ({
                    background: e.trackColor,
                    height: `${e.strokeWidth}px`,
                    "border-radius": `${e.strokeWidth}px`
                })),
                r = y(() => {
                    let n = "0";
                    return e.numerical == 0 || e.total == 0 ? n = "0" : e.numerical > e.total ? n = "100" : n = String((e.numerical / e.total * 100).toFixed(2)), {
                        background: e.color,
                        width: `${n}%`,
                        height: `${e.strokeWidth}px`,
                        "border-radius": `${e.strokeWidth}px`
                    }
                }),
                g = y(() => `${e.numerical}/${e.total}`);
            return (n, w) => (p(), m("div", {
                class: "progress",
                style: F(u.value)
            }, [t("div", {
                class: "line",
                style: F(r.value)
            }, null, 4), f.isShowStep ? (p(), m("div", G, l(g.value), 1)) : P("v-if", !0)], 4))
        }
    });
const K = C(J, [
        ["__scopeId", "data-v-bff59ba2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/Progress.vue"]
    ]),
    Q = {
        class: "head"
    },
    X = {
        class: "title"
    },
    Y = {
        class: "orange"
    },
    Z = {
        class: "description"
    },
    ee = {
        class: "foot"
    },
    te = ["onClick"],
    se = {
        class: "dialog-wrapper"
    },
    ae = {
        class: "dialog-title"
    },
    re = {
        class: "dialog-content"
    },
    oe = R({
        __name: "listItem",
        props: {
            list: {
                type: Array,
                default: () => [{
                    rewardAmount: 123
                }]
            },
            isRule: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["gorecharge"],
        setup(f, {
            emit: e
        }) {
            const {
                t: u
            } = j(), r = I(!1), g = I("");
            let n = !1;
            const {
                receiveFirstRechargeReward: w,
                ActiveSotre: S
            } = B(), {
                closeFirstSave: b
            } = q(), d = (o, s) => {
                const {
                    canReceive: c,
                    isFinshed: i
                } = o;
                if (!c) return "n2" + (s ? " rule" : "");
                if (c && !i) return "n1" + (s ? " rule" : "");
                if (i) return "n3" + (s ? " rule" : "");
                if (!i) return "n2" + (s ? " rule" : "")
            }, v = o => {
                const {
                    canReceive: s,
                    isFinshed: c
                } = o;
                return u(s ? c ? "claimed" : "receive" : "torecharge")
            }, h = async o => {
                const {
                    canReceive: s,
                    isFinshed: c
                } = o;
                if (!s) return e("gorecharge");
                if (c || n) return;
                n = !0;
                const i = await w(o.id);
                n = !1, i && (S.value.receiveAmount = o.rewardAmount, S.value.showReceiveDialog = !0, b())
            };
            return (o, s) => {
                const c = L("van-dialog"),
                    i = T("lazy");
                return p(), m(x, null, [(p(!0), m(x, null, W(f.list, (a, D) => (p(), m("div", {
                    key: D,
                    class: "first_list-item"
                }, [t("div", Q, [t("div", X, [V(l(o.$t("firstSave")), 1), t("span", null, l(a.rechargeAmount), 1)]), t("div", Y, "+ " + l(_(A)(a.rewardAmount)), 1)]), t("div", Z, l(o.$t("firstSaveT", [a.rechargeAmount, a.rewardAmount])), 1), t("div", ee, [k(K, {
                    "stroke-width": 16,
                    color: "var(--norm_secondary-color)",
                    total: a.rechargeAmount,
                    numerical: a.canReceive ? a.rechargeAmount : 0
                }, null, 8, ["total", "numerical"]), t("div", {
                    class: M(["btn", [d(a, f.isRule)]]),
                    onClick: ue => h(a)
                }, l(v(a)), 11, te)])]))), 128)), k(c, {
                    show: r.value,
                    "onUpdate:show": s[2] || (s[2] = a => r.value = a),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: z(() => [t("div", se, [$(t("img", null, null, 512), [
                        [i, _(N)("public", "succeed")]
                    ]), t("div", ae, l(o.$t("awardsReceived")), 1), t("div", re, [$(t("img", null, null, 512), [
                        [i, _(N)("wallet", "balance")]
                    ]), t("span", null, l(_(A)(g.value)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: s[0] || (s[0] = a => r.value = !1)
                    }, l(o.$t("confirm")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: s[1] || (s[1] = a => r.value = !1)
                    }, [$(t("img", null, null, 512), [
                        [i, _(E)("activity/DailyTask", "close")]
                    ])])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const ne = C(oe, [
        ["__scopeId", "data-v-48dabef8"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Activity/FirstRecharge/listItem.vue"]
    ]),
    ie = {
        class: "first_list"
    },
    le = R({
        __name: "index",
        setup(f) {
            const {
                ActiveSotre: e,
                getFirstRechargeList: u
            } = B(), {
                t: r
            } = j(), g = O(), n = y(() => {
                var d;
                return (d = e.value.FirstRechargeList) != null && d.length ? e.value.FirstRechargeList.reduce((v, h) => Math.max(v.rewardAmount || v, h.rewardAmount)) : "0"
            }), w = sessionStorage.getItem("fa1") || "1.00", S = y(() => [r("firstSave1", [A(n.value)]), r("firstSave2"), r("firstSave3"), r("firstSave4", [w]), r("firstSave5"), r("firstSave6")]), b = () => {
                g.push({
                    name: "Recharge"
                })
            };
            return H(() => {
                u()
            }), (d, v) => {
                const h = L("NavBar");
                return p(), m(x, null, [k(h, {
                    title: d.$t("firstSaveTitle"),
                    "left-arrow": "",
                    onClickLeft: v[0] || (v[0] = o => _(g).go(-1))
                }, null, 8, ["title"]), t("div", ie, [k(ne, {
                    list: _(e).FirstRechargeList,
                    onGorecharge: b
                }, null, 8, ["list"])]), k(U, {
                    name: d.$t("firstSaveRule"),
                    tiplist: S.value
                }, null, 8, ["name", "tiplist"])], 64)
            }
        }
    });
const ce = C(le, [
        ["__scopeId", "data-v-c0418dcc"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/activity/FirstRecharge/index.vue"]
    ]),
    fe = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ce
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    ne as f, fe as i
};
//# sourceMappingURL=page-activity-FirstRecharge-a91fb752.js.map