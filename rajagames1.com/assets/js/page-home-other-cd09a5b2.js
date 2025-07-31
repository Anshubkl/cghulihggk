import {
    P,
    Z,
    r as H,
    A as te,
    Q as ee,
    R as o,
    Y as C,
    T as e,
    X as r,
    aj as $,
    H as t,
    W as s,
    K as se,
    G as he,
    aq as J,
    ao as Y,
    ap as z,
    al as A,
    au as j,
    U as b,
    V as L,
    at as U,
    aS as we,
    aT as $e,
    aU as Ce,
    J as R,
    aA as _e,
    aB as pe,
    aJ as ye,
    aw as q,
    ax as K,
    an as ce,
    a9 as be,
    I as Se,
    D as fe,
    aN as Ie,
    av as Le,
    a7 as Te,
    aR as je,
    am as Ge
} from "./common.modules-0a990f43.js";
import {
    G as ie,
    A as ke,
    aT as He,
    _ as M,
    d as W,
    g as De,
    aU as ve,
    av as de,
    v as Q,
    ay as ue,
    c as le,
    aV as ge,
    a as X,
    aW as Ae,
    aB as Me,
    aX as Be,
    k as Pe,
    aP as Re
} from "./page-activity-ActivityDetail-99521b85.js";
const Ne = {
        class: "noticeBar__container"
    },
    xe = {
        class: "noticeBar__container-body"
    },
    ze = {
        key: 0,
        class: "noticeBar__container-body-text"
    },
    We = P({
        __name: "index",
        props: {
            color: {
                type: String,
                required: !1,
                default: "red"
            }
        },
        setup(n) {
            const g = Z(),
                y = ie(),
                c = H(null),
                p = H(y.messageList),
                f = async () => {
                    const i = await ke(He({
                        pageNo: 1,
                        pageSize: 5
                    }));
                    if (i) {
                        if (y.setMessage(i.data.list), p.value = i.data.list, !p.value.length) return;
                        c.value && clearInterval(c.value), c.value = setInterval(() => {
                            p.value.push(p.value.shift())
                        }, 7e3)
                    }
                };
            return te(() => {
                p.value || setTimeout(() => {
                    f()
                }, 1e3)
            }), (i, u) => {
                var v;
                const l = ee("svg-icon");
                return s(), o("div", Ne, [C(l, {
                    name: "noticeBarSpeaker"
                }), e("div", xe, [p.value && p.value[0] && p.value[0].siteMessage ? (s(), o("div", ze, r((v = p.value[0]) == null ? void 0 : v.siteMessage), 1)) : $("v-if", !0)]), e("button", {
                    onClick: u[0] || (u[0] = _ => t(g).push({
                        name: "Notification"
                    })),
                    class: "hotIcon"
                }, r(i.$t("more")), 1)])
            }
        }
    }),
    Oe = M(We, [
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/NoticeBar/index.vue"]
    ]),
    Ee = P({
        __name: "ChangLong",
        setup(n) {
            const {
                isAlowGame: g,
                goChangLong: y
            } = W(), c = async () => {
                g("", y)
            };
            return (p, f) => (s(), o("div", {
                class: "changlongEnter changlong",
                onClick: c
            }))
        }
    });
const Ue = M(Ee, [
        ["__scopeId", "data-v-0ac3de13"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/ChangLong.vue"]
    ]),
    Je = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    Fe = {
        class: "dialog__container-img"
    },
    qe = {
        alt: ""
    },
    Ke = {
        class: "dialog__container-title"
    },
    Ve = {
        class: "dialog__container-content"
    },
    Xe = {
        class: "dialog__container-footer"
    },
    Ye = P({
        __name: "HomeDialog",
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
                default: "comfirm"
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: "cancel"
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            pathname: {
                type: String,
                default: "public"
            },
            picname: {
                type: String,
                default: "superjackpotHome"
            }
        },
        emits: ["update:show", "confirm"],
        setup(n, {
            emit: g
        }) {
            const y = n,
                {
                    t: c
                } = se();
            he(() => y.show, i => {
                i ? window.addEventListener("touchmove", f, {
                    passive: !1
                }) : window.removeEventListener("touchmove", f)
            });

            function p(i) {
                y.clickOutSide && g("update:show", !1)
            }
            const f = i => {
                y.show && i.preventDefault()
            };
            return (i, u) => {
                const l = J("lazy");
                return s(), o("div", {
                    class: z(["dialog", {
                        active: n.show,
                        inactive: !n.show
                    }])
                }, [e("div", Je, [e("div", Fe, [Y(i.$slots, "header", {}, () => [A(e("img", qe, null, 512), [
                    [l, t(De)(n.pathname, n.picname)]
                ])], !0)]), e("div", Ke, [Y(i.$slots, "title", {}, () => [e("h1", null, r(t(c)(n.title)), 1)], !0)]), e("div", Ve, [Y(i.$slots, "content", {}, void 0, !0)]), e("div", Xe, [Y(i.$slots, "footer", {}, () => [n.showCancelBtn ? (s(), o("button", {
                    key: 0,
                    onClick: u[0] || (u[0] = () => {
                        g("update:show", !1)
                    })
                }, r(i.$t(n.cancelText)), 1)) : $("v-if", !0), e("button", {
                    onClick: u[1] || (u[1] = () => {
                        g("confirm")
                    })
                }, r(i.$t(n.confirmText)), 1)], !0)])]), e("div", {
                    class: "dialog__outside",
                    onClick: p
                })], 2)
            }
        }
    });
const Qe = M(Ye, [
        ["__scopeId", "data-v-c0caae78"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/HomeDialog.vue"]
    ]),
    Ze = {
        class: "swiper_box"
    },
    et = ["onClick"],
    tt = {
        key: 0,
        class: "swiper-button"
    },
    st = P({
        __name: "index",
        props: {
            isShowButton: {
                type: Boolean,
                default: !1
            }
        },
        setup(n) {
            const {
                getBannerApi: g,
                getBanner: y
            } = W(), c = H(0), p = [Ce], f = u => {
                u.activeIndex >= y.value.length ? c.value = u.activeIndex - y.value.length : c.value = u.activeIndex
            }, i = u => {
                u && (window.location.href = u)
            };
            return te(async () => {
                await g()
            }), (u, l) => {
                const v = J("lazy");
                return s(), o("div", Ze, [C(t($e), {
                    class: "my-swipe",
                    "slides-per-view": 1,
                    "space-between": 20,
                    onSlideChange: f,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    modules: p,
                    loop: !0
                }, {
                    default: j(() => [(s(!0), o(b, null, L(t(y), (_, B) => (s(), U(t(we), {
                        key: B
                    }, {
                        default: j(() => [A(e("img", {
                            onClick: N => i(_.url)
                        }, null, 8, et), [
                            [v, _.bannerUrl]
                        ])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }), t(y).length > 1 && n.isShowButton ? (s(), o("div", tt, [(s(!0), o(b, null, L(t(y).length, _ => (s(), o("span", {
                    key: _,
                    class: z({
                        active: c.value === _ - 1
                    })
                }, null, 2))), 128))])) : $("v-if", !0)])
            }
        }
    });
const ot = M(st, [
        ["__scopeId", "data-v-3ad7aed7"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/Swiper/index.vue"]
    ]),
    at = {
        class: "lobbyItem"
    },
    nt = {
        class: "h"
    },
    lt = {
        class: "b"
    },
    it = ["onClick"],
    rt = P({
        __name: "lobbyItem",
        props: {
            listData: {
                type: Array,
                required: !0
            },
            isMore: {
                type: Boolean,
                required: !1,
                default: !0
            },
            isLeft: {
                type: Boolean,
                required: !1,
                default: !0
            },
            gameType: {
                type: String,
                required: !1,
                default: ""
            }
        },
        emits: ["item-click", "more-click"],
        setup(n, {
            emit: g
        }) {
            const y = n,
                c = H(0),
                p = H(),
                f = l => {
                    c.value = l
                },
                i = R(() => ve(y.listData || [], 3));

            function u(l) {
                g("item-click", l)
            }
            return H(null), H([]), (l, v) => {
                const _ = J("lazy");
                return s(), o("div", at, [e("div", nt, [Y(l.$slots, "head", {}, void 0, !0)]), C(t(pe), {
                    class: "my-swipe",
                    ref_key: "swipeRef",
                    ref: p,
                    autoplay: !1,
                    onChange: f,
                    "lazy-render": !1,
                    "show-indicators": !1
                }, {
                    default: j(() => [(s(!0), o(b, null, L(i.value, (B, N) => (s(), U(t(_e), {
                        key: N
                    }, {
                        default: j(() => [e("div", lt, [(s(!0), o(b, null, L(B, (S, m) => (s(), o("div", {
                            key: m
                        }, [A(e("img", {
                            onClick: G => u(S)
                        }, null, 8, it), [
                            [_, S.img]
                        ]), e("p", null, r(l.gameType || S.vendorCode), 1), e("div", null, r(t(de)(S.gameNameEn || S.slotsName)), 1)]))), 128))])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }, 512), Y(l.$slots, "default", {}, void 0, !0)])
            }
        }
    });
const F = M(rt, [
        ["__scopeId", "data-v-317dee8b"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/lobbyItem.vue"]
    ]),
    O = n => (q("data-v-0760ed1c"), n = n(), K(), n),
    ct = {
        class: "lobby"
    },
    dt = {
        class: "lottery"
    },
    ut = {
        class: "h"
    },
    _t = O(() => e("div", {
        class: "left-title"
    }, null, -1)),
    pt = ["onClick"],
    vt = O(() => e("p", null, "lottery", -1)),
    mt = O(() => e("div", {
        class: "left-title pop"
    }, null, -1)),
    gt = O(() => e("div", {
        class: "left-title miniGame"
    }, null, -1)),
    ht = O(() => e("div", {
        class: "left-title slot"
    }, null, -1)),
    yt = O(() => e("div", {
        class: "left-title sport"
    }, null, -1)),
    ft = O(() => e("div", {
        class: "left-title live"
    }, null, -1)),
    kt = O(() => e("div", {
        class: "left-title chess"
    }, null, -1)),
    wt = O(() => e("div", {
        class: "left-title fishing"
    }, null, -1)),
    $t = P({
        __name: "lobby",
        emits: ["change-type"],
        setup(n, {
            emit: g
        }) {
            const y = ye("useHomeHook"),
                {
                    homeState: c,
                    isAlowGame: p,
                    isSassLotteryGame: f,
                    onItemClick: i,
                    openThirdGame: u,
                    gol2: l
                } = y,
                v = Z(),
                _ = Q(),
                B = [{
                    value: 1,
                    path: "WinGo"
                }, {
                    value: 3,
                    path: "5D"
                }, {
                    value: 2,
                    path: "K3"
                }, {
                    value: 4,
                    path: "WinTrx"
                }, {
                    value: 5,
                    path: "XoSo"
                }, {
                    value: 6,
                    path: "XoSo"
                }, {
                    value: 7,
                    path: "Binguo"
                }, {
                    value: 8,
                    path: "4D"
                }],
                N = R(() => {
                    var a;
                    const h = ((a = c.allGameList) == null ? void 0 : a.lottery) || [];
                    return ve(h || [], 3)
                }),
                S = R(() => {
                    var h;
                    return ((h = c.allGameList) == null ? void 0 : h.flash) || []
                }),
                m = R(() => {
                    var h, a, ae;
                    return ((ae = (a = (h = c.allGameList) == null ? void 0 : h.popular) == null ? void 0 : a.platformList) == null ? void 0 : ae.map(V => (V.img = V.imgUrl, V))) || []
                }),
                G = R(() => {
                    var h;
                    return ((h = c.allGameList) == null ? void 0 : h.slot.map(a => (a.img = a.vendorImg, a))) || []
                }),
                w = R(() => {
                    var h;
                    return ((h = c.allGameList) == null ? void 0 : h.chess.map(a => (a.img = a.vendorImg, a))) || []
                }),
                I = R(() => {
                    var h;
                    return ((h = c.allGameList) == null ? void 0 : h.fish) || []
                });
            R(() => {
                var h;
                return ((h = c.allGameList) == null ? void 0 : h.awardrecordlist.map(a => (a.img = a.imgUrl, a))) || []
            });
            const T = R(() => {
                    var h;
                    return ((h = c.allGameList) == null ? void 0 : h.video.map(a => (a.img = a.vendorImg, a))) || []
                }),
                d = R(() => {
                    var h;
                    return ((h = c.allGameList) == null ? void 0 : h.sport.map(a => (a.img = a.vendorImg, a))) || []
                }),
                x = h => {
                    if (f(h)) return u({ ...h,
                        vendorCode: "ARLottery"
                    });
                    v.push({
                        name: "AllLotteryGames-" + B[B.findIndex(a => a.value === h.id)].path,
                        query: {
                            id: h.id
                        }
                    })
                },
                D = h => {
                    g("change-type", h)
                },
                oe = (h, a) => {
                    sessionStorage.setItem("slotGamesList", JSON.stringify(c.allGameList[a])), sessionStorage.setItem("gameType", JSON.stringify(a)), sessionStorage.setItem("clickedItem", JSON.stringify(h)), v.push({
                        name: "AllOnlineGames"
                    })
                };

            function re() {
                _.getBigTurntableLink && window.open(_.getBigTurntableLink)
            }
            return (h, a) => {
                var V;
                const ae = J("lazy");
                return s(), o("div", ct, [e("div", dt, [e("div", ut, [_t, e("div", {
                    class: "right-more",
                    onClick: a[0] || (a[0] = k => t(l)("lottery"))
                }, r((V = t(c).allGameList) == null ? void 0 : V.lottery.length) + " Games", 1)]), C(t(pe), {
                    class: "my-swipe",
                    ref: "swipeRef",
                    autoplay: 3e3,
                    "lazy-render": !1,
                    "show-indicators": !1
                }, {
                    default: j(() => [(s(!0), o(b, null, L(N.value, (k, E) => (s(), U(t(_e), {
                        key: E,
                        class: "lotty-swipe"
                    }, {
                        default: j(() => [(s(!0), o(b, null, L(k, ne => (s(), o("div", {
                            class: "lotteryList",
                            key: ne.categoryCode
                        }, [A(e("img", {
                            onClick: fo => t(p)(ne, x)
                        }, null, 8, pt), [
                            [ae, ne.categoryImg]
                        ]), vt, e("div", null, r(ne.categoryCode), 1)]))), 128))]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }, 512)]), C(F, {
                    class: "lottery",
                    listData: m.value,
                    onItemClick: t(i)
                }, {
                    head: j(() => {
                        var k;
                        return [mt, e("div", {
                            class: "right-more",
                            onClick: a[1] || (a[1] = E => t(l)("popular"))
                        }, r((k = m.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData", "onItemClick"]), C(F, {
                    class: "lottery",
                    gameType: "Mini Games",
                    listData: S.value,
                    onMoreClick: a[3] || (a[3] = k => D("Flash")),
                    onItemClick: t(i)
                }, {
                    head: j(() => {
                        var k;
                        return [gt, e("div", {
                            class: "right-more",
                            onClick: a[2] || (a[2] = E => t(l)("falsh"))
                        }, r((k = S.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData", "onItemClick"]), C(F, {
                    class: "lottery",
                    gameType: "Slots",
                    listData: G.value,
                    onMoreClick: a[5] || (a[5] = k => D("Slot")),
                    onItemClick: a[6] || (a[6] = k => oe(k, "slot"))
                }, {
                    head: j(() => {
                        var k;
                        return [ht, e("div", {
                            class: "right-more",
                            onClick: a[4] || (a[4] = E => t(l)("slot"))
                        }, r((k = G.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData"]), t(_).getBigTurntableLink ? (s(), o("div", {
                    key: 0,
                    class: "videoBanner",
                    onClick: re,
                    ref: "turntableId"
                }, null, 512)) : $("v-if", !0), C(F, {
                    class: "lottery",
                    gameType: "Sports",
                    listData: d.value,
                    onMoreClick: a[8] || (a[8] = k => D("Sport")),
                    onItemClick: t(i)
                }, {
                    head: j(() => {
                        var k;
                        return [yt, e("div", {
                            class: "right-more",
                            onClick: a[7] || (a[7] = E => t(l)("sport"))
                        }, r((k = d.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData", "onItemClick"]), C(F, {
                    class: "lottery",
                    gameType: "Casino",
                    listData: T.value,
                    onMoreClick: a[10] || (a[10] = k => D("Video")),
                    onItemClick: t(i)
                }, {
                    head: j(() => {
                        var k;
                        return [ft, e("div", {
                            class: "right-more",
                            onClick: a[9] || (a[9] = E => t(l)("video"))
                        }, r((k = T.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData", "onItemClick"]), C(F, {
                    class: "lottery",
                    gameType: "Card Games",
                    listData: w.value,
                    onMoreClick: a[12] || (a[12] = k => D("Chess")),
                    onItemClick: a[13] || (a[13] = k => oe(k, "chess"))
                }, {
                    head: j(() => {
                        var k;
                        return [kt, e("div", {
                            class: "right-more",
                            onClick: a[11] || (a[11] = E => t(l)("chess"))
                        }, r((k = w.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData"]), C(F, {
                    class: "lottery",
                    gameType: "Fishing",
                    listData: I.value,
                    onMoreClick: a[15] || (a[15] = k => D("Fish")),
                    onItemClick: t(i)
                }, {
                    head: j(() => {
                        var k;
                        return [wt, e("div", {
                            class: "right-more",
                            onClick: a[14] || (a[14] = E => t(l)("fish"))
                        }, r((k = I.value) == null ? void 0 : k.length) + " Games", 1)]
                    }),
                    _: 1
                }, 8, ["listData", "onItemClick"])])
            }
        }
    });
const Ct = M($t, [
        ["__scopeId", "data-v-0760ed1c"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/lobby.vue"]
    ]),
    me = n => (q("data-v-7ad7fdeb"), n = n(), K(), n),
    bt = {
        key: 0
    },
    St = me(() => e("div", {
        class: "left-title"
    }, null, -1)),
    It = {
        class: "allGame"
    },
    Lt = {
        class: "gameImg"
    },
    Tt = ["onClick"],
    jt = {
        key: 1
    },
    Gt = me(() => e("div", {
        class: "left-title tit-platform"
    }, null, -1)),
    Ht = {
        class: "allGame"
    },
    Dt = {
        class: "gameImg"
    },
    At = ["onClick"],
    Mt = {
        class: "win-odds"
    },
    Bt = {
        class: "allGame"
    },
    Pt = {
        class: "gameImg"
    },
    Rt = ["onClick"],
    Nt = {
        class: "win-odds"
    },
    xt = {
        key: 2,
        class: "allGameMain"
    },
    zt = {
        class: "allGame"
    },
    Wt = {
        class: "gameImg"
    },
    Ot = ["onClick"],
    Et = me(() => e("p", null, "Card Games", -1)),
    Ut = {
        key: 3,
        class: "allGameMain"
    },
    Jt = {
        class: "allGame"
    },
    Ft = {
        class: "gameImg"
    },
    qt = ["onClick"],
    Kt = {
        key: 4,
        class: "allGameMain"
    },
    Vt = {
        class: "allGame"
    },
    Xt = {
        class: "gameImg"
    },
    Yt = ["onClick"],
    Qt = P({
        __name: "gameList",
        props: {
            activeType: {
                type: String,
                required: !0
            }
        },
        setup(n) {
            const g = n,
                y = ye("useHomeHook"),
                {
                    homeState: c,
                    onItemClick: p,
                    isSassLotteryGame: f,
                    openThirdGame: i,
                    gol2: u
                } = y,
                l = Z(),
                v = ie(),
                _ = R(() => c.allGameList[g.activeType.toLocaleLowerCase()] || []),
                B = [{
                    value: 1,
                    path: "WinGo"
                }, {
                    value: 3,
                    path: "5D"
                }, {
                    value: 2,
                    path: "K3"
                }, {
                    value: 4,
                    path: "WinTrx"
                }, {
                    value: 5,
                    path: "XoSo"
                }, {
                    value: 6,
                    path: "XoSo"
                }, {
                    value: 7,
                    path: "Binguo"
                }, {
                    value: 8,
                    path: "4D"
                }],
                N = m => {
                    if (f(m)) return i({ ...m,
                        vendorCode: "ARLottery"
                    });
                    l.push({
                        name: "AllLotteryGames-" + B[B.findIndex(G => G.value === m.id)].path,
                        query: {
                            id: m.id
                        }
                    })
                },
                S = (m, G) => {
                    sessionStorage.setItem("slotGamesList", JSON.stringify(c.allGameList[G])), sessionStorage.setItem("gameType", JSON.stringify(G)), sessionStorage.setItem("clickedItem", JSON.stringify(m)), l.push({
                        name: "AllOnlineGames"
                    })
                };
            return (m, G) => {
                var I, T;
                const w = J("lazy");
                return m.activeType === "Lottery" ? (s(), o("div", bt, [St, e("div", It, [(s(!0), o(b, null, L(_.value, d => (s(), o("div", {
                    class: "lotteryList",
                    key: d.categoryCode
                }, [e("section", Lt, [A(e("img", {
                    onClick: x => N(d)
                }, null, 8, Tt), [
                    [w, d.categoryImg]
                ])]), e("p", null, r(m.activeType), 1), e("div", null, r(d.categoryCode), 1)]))), 128))])])) : m.activeType === "Popular" ? (s(), o("div", jt, [Gt, e("div", Ht, [(s(!0), o(b, null, L((I = _.value) == null ? void 0 : I.platformList, d => (s(), o("div", {
                    class: "lotteryList",
                    key: d.categoryCode
                }, [e("section", Dt, [A(e("img", {
                    onClick: x => t(p)(d)
                }, null, 8, At), [
                    [w, d.img]
                ])]), e("div", Mt, [e("span", null, r(m.$t("Chances")), 1), e("span", null, r(d.winOdds) + "%", 1), e("div", {
                    class: "win-p",
                    style: ce({
                        width: `${Math.min(d.winOdds,100)}%`
                    })
                }, null, 4)])]))), 128))]), e("div", {
                    class: z(["left-title tit-popular", "tit-" + m.activeType])
                }, null, 2), e("div", Bt, [(s(!0), o(b, null, L((T = _.value) == null ? void 0 : T.clicksTopList, d => (s(), o("div", {
                    class: "lotteryList",
                    key: d.categoryCode
                }, [e("section", Pt, [A(e("img", {
                    onClick: x => t(p)(d)
                }, null, 8, Rt), [
                    [w, d.imgUrl]
                ])]), e("div", Nt, [e("span", null, r(m.$t("Chances")), 1), e("span", null, r(d.winOdds) + "%", 1), e("div", {
                    class: "win-p",
                    style: ce({
                        width: `${Math.min(d.winOdds,100)}%`
                    })
                }, null, 4)])]))), 128))]), t(v).token ? (s(), o("div", {
                    key: 0,
                    class: "raja_btn",
                    onClick: G[0] || (G[0] = d => t(u)("popular"))
                }, r(m.$t("viewAll")), 1)) : $("v-if", !0)])) : m.activeType === "Chess" ? (s(), o("div", xt, [e("div", {
                    class: z(["left-title", "tit-" + m.activeType])
                }, null, 2), e("div", zt, [(s(!0), o(b, null, L(_.value, d => (s(), o("div", {
                    class: "lotteryList",
                    key: d.categoryCode
                }, [e("section", Wt, [A(e("img", {
                    onClick: x => S(d, "chess")
                }, null, 8, Ot), [
                    [w, d.img]
                ])]), Et, e("div", null, r(d.vendorCode), 1)]))), 128))])])) : ["Slot"].includes(m.activeType) ? (s(), o("div", Ut, [e("div", {
                    class: z(["left-title", "tit-" + m.activeType])
                }, null, 2), e("div", Jt, [(s(!0), o(b, null, L(_.value, d => (s(), o("div", {
                    class: "lotteryList",
                    key: d.categoryCode
                }, [e("section", Ft, [A(e("img", {
                    onClick: x => S(d, m.activeType.toLocaleLowerCase())
                }, null, 8, qt), [
                    [w, d.img]
                ])]), e("p", null, r(m.activeType), 1), e("div", null, r(t(de)(d.vendorCode)), 1)]))), 128))])])) : (s(), o("div", Kt, [e("div", {
                    class: z(["left-title", "tit-" + m.activeType])
                }, null, 2), e("div", Vt, [(s(!0), o(b, null, L(_.value, d => (s(), o("div", {
                    class: "lotteryList",
                    key: d.categoryCode
                }, [e("section", Xt, [A(e("img", {
                    onClick: x => t(p)(d)
                }, null, 8, Yt), [
                    [w, d.img]
                ])]), e("p", null, r(m.activeType === "Flash" ? "Mini Games" : m.activeType), 1), e("div", null, r(t(de)(d.gameNameEn || d.vendorCode)), 1)]))), 128))]), t(v).token && ["Flash", "Fish"].includes(m.activeType) ? (s(), o("div", {
                    key: 0,
                    class: "raja_btn",
                    onClick: G[1] || (G[1] = d => t(u)(m.activeType.toLowerCase()))
                }, r(m.$t("viewAll")), 1)) : $("v-if", !0)]))
            }
        }
    });
const Zt = M(Qt, [
        ["__scopeId", "data-v-7ad7fdeb"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/gameList.vue"]
    ]),
    es = {
        class: "game"
    },
    ts = {
        key: 0,
        class: "sticky nav"
    },
    ss = ["onClick"],
    os = ["onClick"],
    as = P({
        __name: "game",
        setup(n) {
            const g = [{
                    type: "",
                    label: "Lobby",
                    icon: "lobby"
                }, {
                    type: "Lottery",
                    label: "Lottery",
                    icon: "lottery"
                }, {
                    type: "Popular",
                    label: "Popular",
                    icon: "popular"
                }, {
                    type: "Flash",
                    label: "Mini Games",
                    icon: "miniGame"
                }, {
                    type: "Slot",
                    label: "Slots",
                    icon: "slots"
                }, {
                    type: "Sport",
                    label: "Sports",
                    icon: "sports"
                }, {
                    type: "Video",
                    label: "Casino",
                    icon: "casino"
                }, {
                    type: "Chess",
                    label: "Card",
                    icon: "card"
                }, {
                    type: "Fish",
                    label: "Fishing",
                    icon: "fishing"
                }],
                y = ["Lottery", "Flash", "Slot", "Fish", "Popular", "Video", "Sport", "Chess"],
                c = W();
            be("useHomeHook", c);
            const {
                t: p
            } = se(), {
                getGameType: f,
                homeState: i,
                getAllGame: u
            } = c, l = H(""), v = Se([]), _ = H(null), B = async () => {
                await f(), i.gameTypeList.length > 0 && (i.gameTypeList.forEach(w => {
                    w.state === 1 && v.push({
                        isShow: w.state === 1,
                        title: p("code" + w.typeNameCode),
                        img: w.categoryImg,
                        key: w.categoryCode.toLocaleLowerCase()
                    })
                }), sessionStorage.setItem("gameMenu", JSON.stringify(v)))
            };

            function N(w, I, T = !1) {
                l.value = w;
                const d = I.currentTarget;
                if (_.value) {
                    const x = _.value,
                        D = x.offsetWidth,
                        oe = d.offsetLeft - x.offsetLeft,
                        re = d.offsetWidth,
                        h = Math.max(0, oe - (D - re) / 2);
                    x.scrollTo({
                        left: h,
                        behavior: "smooth"
                    })
                }
                T && _.value && window.scrollTo({
                    top: _.value.offsetTop - 24,
                    behavior: "smooth"
                })
            }
            const S = w => {
                    l.value = w
                },
                m = H(!1),
                G = () => {
                    if (_.value) {
                        const w = _.value.getBoundingClientRect().top - 40;
                        m.value = w <= 0
                    }
                };
            return te(() => {
                window.addEventListener("scroll", G)
            }), fe(() => {
                window.removeEventListener("scroll", G)
            }), B(), u(), (w, I) => (s(), o(b, null, [e("div", es, [m.value ? (s(), o("div", ts, [(s(), o(b, null, L(g, T => e("div", {
                key: T.type,
                class: z([l.value === T.type && "active", T.icon]),
                onClick: d => N(T.type, d, !0)
            }, null, 10, ss)), 64))])) : $("v-if", !0), e("div", {
                class: "nav",
                ref_key: "navRef",
                ref: _
            }, [(s(), o(b, null, L(g, T => e("div", {
                key: T.type,
                class: z([l.value === T.type && "active", T.icon]),
                onClick: d => N(T.type, d)
            }, null, 10, os)), 64))], 512)]), l.value == "" ? (s(), U(Ct, {
                key: 0,
                onChangeType: S
            })) : $("v-if", !0), y.includes(l.value) ? (s(), U(Zt, {
                key: 1,
                activeType: l.value
            }, null, 8, ["activeType"])) : $("v-if", !0)], 64))
        }
    });
const ns = M(as, [
        ["__scopeId", "data-v-d893fb78"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/game.vue"]
    ]),
    ls = n => (q("data-v-f8aa2def"), n = n(), K(), n),
    is = {
        class: "p3_winner"
    },
    rs = ls(() => e("div", {
        class: "title"
    }, null, -1)),
    cs = {
        class: "p3_winner-wrapper"
    },
    ds = {
        class: "info"
    },
    us = {
        class: "name"
    },
    _s = P({
        __name: "winner",
        setup(n) {
            const {
                homeState: g,
                getWinInfoDetail: y,
                getWinInfo: c
            } = W(), p = H(null), f = H(null);
            return te(async () => {
                await y(), Ie(f.value), g.winInfoList.length > 0 && (p.value = setInterval(async () => {
                    g.winInfoList.unshift(g.winInfoList.pop())
                }, 3e3))
            }), fe(() => {
                clearInterval(p.value)
            }), (i, u) => {
                const l = J("lazy");
                return s(), o("div", is, [rs, e("div", cs, [e("div", {
                    ref_key: "wrapperRef",
                    ref: f
                }, [(s(!0), o(b, null, L(t(c).slice(0, 6), v => (s(), o("div", {
                    class: "p3_winner-wrapper__item",
                    key: v
                }, [A(e("img", null, null, 512), [
                    [l, v.imgUrl]
                ]), e("div", ds, [e("div", null, [e("span", us, r(t(ue)(v.nickName)), 1)]), e("div", null, r(i.$t("winningAmountRaja")), 1), e("div", null, r(t(le)(v.amount || 0)), 1)])]))), 128))], 512)])])
            }
        }
    });
const ps = M(_s, [
        ["__scopeId", "data-v-f8aa2def"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/winner.vue"]
    ]),
    vs = n => (q("data-v-8f34c32e"), n = n(), K(), n),
    ms = {
        class: "dailyProfitRank"
    },
    gs = vs(() => e("div", {
        class: "title"
    }, null, -1)),
    hs = {
        class: "dailyProfitRank__content"
    },
    ys = {
        class: "dailyProfitRank__content-topThree"
    },
    fs = ["src"],
    ks = ["data-img"],
    ws = {
        class: "dailyProfitRank__content-list"
    },
    $s = {
        class: "left-rank"
    },
    Cs = ["src"],
    bs = ["data-img"],
    Ss = {
        class: "middle-name"
    },
    Is = {
        class: "right-box"
    },
    Ls = P({
        __name: "rank",
        setup(n) {
            const {
                t: g
            } = se(), {
                homeState: y
            } = W(), c = {
                nickName: g("noData"),
                userPhoto: "",
                price: 0,
                time: "",
                typeName: ""
            };
            he(() => y.rankList, i => {
                p.value.splice(0, i.length, ...i.sort((u, l) => l.price - u.price).slice(0, 3)), f.value.splice(0, i.length, ...i.sort((u, l) => l.price - u.price).slice(3, 10))
            });
            const p = H([c, c, c]),
                f = H([]);
            return (i, u) => {
                const l = J("lazy");
                return s(), o("div", ms, [gs, e("div", hs, [e("div", ys, [(s(!0), o(b, null, L(p.value, (v, _) => (s(), o("div", {
                    class: "dailyProfitRank__content-topThree__item",
                    key: _,
                    style: ce({
                        order: _ === 0 ? 2 : _ === 2 ? 3 : 1,
                        top: _ === 0 ? "0" : "30px"
                    })
                }, [e("div", {
                    class: z(["avat_icon", {
                        firstIcon: _ === 0
                    }])
                }, [t(ge)(v.userPhoto) ? A((s(), o("img", {
                    key: 1,
                    "data-img": t(X)("home", "avatar")
                }, null, 8, ks)), [
                    [l, t(X)("main/Avatar", v.userPhoto)]
                ]) : (s(), o("img", {
                    key: 0,
                    src: t(X)("home", "avatar")
                }, null, 8, fs))], 2), e("span", null, r(t(ue)(v.nickName)), 1), e("span", null, r(t(le)(v.price)), 1)], 4))), 128))]), e("div", ws, [(s(!0), o(b, null, L(f.value, (v, _) => (s(), o("div", {
                    class: z(["dailyProfitRank__content-list__item", `itemW-${_}`]),
                    key: _
                }, [e("span", $s, r(_ + 4), 1), t(ge)(v.userPhoto) ? A((s(), o("img", {
                    key: 1,
                    "data-img": t(X)("home", "avatar")
                }, null, 8, bs)), [
                    [l, t(X)("main/Avatar", v.userPhoto)]
                ]) : (s(), o("img", {
                    key: 0,
                    src: t(X)("home", "avatar")
                }, null, 8, Cs)), e("span", Ss, r(t(ue)(v.nickName)), 1), $(' <span class="middle-name">{{ formatString(item.nickName, 10) }}</span> '), e("span", Is, r(t(le)(v.price)), 1)], 2))), 128))])])])
            }
        }
    });
const Ts = M(Ls, [
        ["__scopeId", "data-v-8f34c32e"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/rank.vue"]
    ]),
    js = n => (q("data-v-fecc8fa2"), n = n(), K(), n),
    Gs = {
        class: "payMethod"
    },
    Hs = {
        class: "title"
    },
    Ds = js(() => e("div", {
        class: "pay-cont"
    }, null, -1)),
    As = {
        class: "payMethod"
    },
    Ms = {
        class: "title"
    },
    Bs = ["href"],
    Ps = P({
        __name: "team",
        setup(n) {
            se(), Z(), Q();
            const g = Q();
            let y = H([]);
            W(), R(() => g.getIsCanAppDownload);
            const c = R(() => [{
                    name: "insta",
                    link: "https://www.instagram.com/rajagames.world/"
                }, {
                    name: "facebook",
                    link: "https://www.facebook.com/rajagames.in"
                }, {
                    name: "x",
                    link: "https://x.com/rajagames_"
                }, {
                    name: "youtob",
                    link: "https://www.youtube.com/@rajagames_india"
                }, {
                    name: "tg",
                    link: "https://t.me/RajaGamesChannel"
                }, {
                    name: "whatApp",
                    link: "https://whatsapp.com/channel/0029VawYzzy23n3leWsoJq1x"
                }]),
                p = async () => {
                    const f = await ke(Ae());
                    f && (y.value = f.data || [])
                };
            return te(() => {
                p()
            }), (f, i) => (s(), o(b, null, [e("div", Gs, [e("div", Hs, r(f.$t("supportedMethods")), 1), Ds]), e("div", As, [e("div", Ms, r(f.$t("followUs")), 1), e("ul", null, [(s(!0), o(b, null, L(c.value, u => (s(), o("li", {
                key: u.name,
                class: z(u.name)
            }, [e("a", {
                href: u.link,
                target: "_blank"
            }, null, 8, Bs)], 2))), 128))])]), $('	<div class="payMethod">'), $('		<div class="titleImg"></div>'), $('		<p class="titleText">RAJA GAMES is owned and operated by Medium Rare India Pvt. Ltd., registration number: U12345KA2024PTC123456, registered address: 123 MG Road, Bengaluru, Karnataka, India. Contact us at support@rajagames.com. Payment agent company is Medium Rare Limited with address 45 Park Street, Level 3, Kolkata, West Bengal, India, and Registration number: HE 410775.</p>'), $("	</div>")], 64))
        }
    });
const Rs = M(Ps, [
        ["__scopeId", "data-v-fecc8fa2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/team.vue"]
    ]),
    Ns = n => (q("data-v-49091335"), n = n(), K(), n),
    xs = {
        class: "homeNav"
    },
    zs = Ns(() => e("div", {
        class: "homeNavTitle"
    }, null, -1)),
    Ws = {
        class: "tip"
    },
    Os = {
        class: "picContainer"
    },
    Es = {
        class: "multiple"
    },
    Us = {
        class: "gameName"
    },
    Js = {
        class: "bonusAmount"
    },
    Fs = P({
        __name: "bigaward",
        setup(n) {
            const {
                homeState: g
            } = W(), y = ie();
            Q();
            const c = H(0),
                p = H(),
                f = R(() => {
                    var l;
                    return ve(((l = g.allGameList) == null ? void 0 : l.awardrecordlist) || [], 3)
                }),
                i = l => {
                    c.value = l
                },
                u = () => {
                    Me.push({
                        name: "SuperJackpot"
                    })
                };
            return (l, v) => {
                const _ = J("lazy");
                return s(), o("div", xs, [zs, e("div", Ws, [Le(r(l.$t("bigAward")) + r(l.$t("cpsTip4")) + " ", 1), $("			<span>{{ currency(settingS.jackportMaxReswadAmount)}}</span>")]), C(t(pe), {
                    class: "my-swipe",
                    ref_key: "swipeRef",
                    ref: p,
                    autoplay: 3e3,
                    onChange: i,
                    "lazy-render": !1,
                    "show-indicators": !1
                }, {
                    default: j(() => [(s(!0), o(b, null, L(f.value, (B, N) => (s(), U(t(_e), {
                        key: N
                    }, {
                        default: j(() => [e("div", Os, [(s(!0), o(b, null, L(B, (S, m) => A((s(), o("div", {
                            alt: "",
                            key: m
                        }, [e("div", Es, r(S.multiple) + "X", 1), A(e("img", null, null, 512), [
                            [_, S.imgUrl]
                        ]), e("div", Us, r(S.gameName), 1), e("div", Js, r(t(le)(S.bonusAmount)), 1)])), [
                            [_, S.imgUrl]
                        ])), 128))])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }, 512), t(y).token ? (s(), o("div", {
                    key: 0,
                    class: "raja_btn",
                    onClick: u
                }, r(l.$t("jackEnter")), 1)) : $("v-if", !0)])
            }
        }
    });
const qs = M(Fs, [
        ["__scopeId", "data-v-49091335"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/bigaward.vue"]
    ]),
    Ks = P({
        __name: "Turntable",
        setup(n) {
            Z();
            const g = Q(),
                y = () => {
                    g.getTelegramExternalLink && window.open(g.getTelegramExternalLink)
                };
            return (c, p) => t(g).getTelegramExternalLink ? (s(), o("div", {
                key: 0,
                class: "turntable-telegram",
                onClick: y
            })) : $("v-if", !0)
        }
    });
const Vs = M(Ks, [
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/Home/rajaHome/Turntable.vue"]
    ]),
    Xs = n => (q("data-v-b3bd7e49"), n = n(), K(), n),
    Ys = Xs(() => e("svg", {
        class: "line",
        width: "1",
        height: "60",
        viewBox: "0 0 1 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [e("line", {
        x1: "0.5",
        x2: "0.5",
        y2: "60",
        stroke: "white"
    })], -1)),
    Qs = ["src"],
    Zs = {
        class: "text"
    },
    eo = P({
        __name: "DownloadPWA",
        setup(n) {
            const g = Te("show-pwa-download", !0),
                {
                    t: y
                } = se(),
                c = Q(),
                {
                    onDown: p
                } = W(),
                {
                    isShowDwa: f
                } = Be();
            return (i, u) => {
                const l = ee("van-icon");
                return t(f) ? (s(), o("div", {
                    key: 0,
                    class: "btn pwa-btn",
                    onClick: u[1] || (u[1] = (...v) => t(p) && t(p)(...v))
                }, [Ys, C(l, {
                    class: "close",
                    name: "close",
                    onClick: u[0] || (u[0] = je(v => g.value = !1, ["stop"]))
                }), e("img", {
                    class: "icon",
                    src: t(c).getWebIco
                }, null, 8, Qs), e("div", Zs, r(t(y)("addToDesktop")), 1)])) : $("v-if", !0)
            }
        }
    });
const to = M(eo, [
    ["__scopeId", "data-v-b3bd7e49"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/DownloadPWA.vue"]
]);
const so = {},
    oo = {
        class: "point point-flicker"
    };

function ao(n, g) {
    return s(), o("div", oo)
}
const no = M(so, [
        ["render", ao],
        ["__scopeId", "data-v-c10b67fb"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/components/common/Point.vue"]
    ]),
    lo = ["src"],
    io = {
        class: "content__right"
    },
    ro = {
        class: "rajaHome"
    },
    co = {
        key: 0,
        class: "nologin"
    },
    uo = {
        class: "raja-icon"
    },
    _o = {
        class: "promptHeader"
    },
    po = ["innerHTML"],
    vo = {
        class: "Laundry-Con"
    },
    mo = {
        class: "Laundry-Con_tip"
    },
    go = {
        class: "Landty-Con-tips"
    },
    ho = P({
        __name: "rajaHome",
        setup(n) {
            const {
                projectIcon: g,
                isAppDownloadIcon: y,
                showPWA: c,
                showChanglong: p
            } = W(), f = ie(), i = Z(), {
                closeLaundry: u,
                closePrompt: l,
                store: v,
                promptContent: _,
                beforeClosePrompt: B
            } = Pe(), {
                getSelfCustomerServiceLink: N
            } = Re({
                ServerType: 2
            });
            H(0);

            function S() {
                i.push({
                    name: "Messages"
                })
            }

            function m() {
                N()
            }
            const G = () => {
                u(), i.push({
                    name: "SuperJackpot"
                })
            };
            return (w, I) => {
                const T = ee("svg-icon"),
                    d = ee("NavBar"),
                    x = ee("van-dialog");
                return s(), o(b, null, [C(d, {
                    class: "rajaNav"
                }, {
                    left: j(() => [e("img", {
                        style: {
                            height: "40px"
                        },
                        src: t(g),
                        alt: ""
                    }, null, 8, lo)]),
                    right: j(() => [e("div", io, [e("div", {
                        class: "message",
                        onClick: S
                    }, [C(T, {
                        name: "notification"
                    }), A(C(no, {
                        class: "point"
                    }, null, 512), [
                        [Ge, !w.isRead]
                    ])]), $(' <div v-if="isAppDownload" class="homeIcon down" @click="onDown"></div> '), e("i", {
                        class: "rajaCustomer",
                        onClick: m
                    })])]),
                    _: 1
                }), e("div", ro, [t(f).getToken ? $("v-if", !0) : (s(), o("div", co, [e("div", {
                    class: "nav-btn login",
                    onClick: I[0] || (I[0] = D => t(i).push({
                        name: "login"
                    }))
                }, r(w.$t("login")), 1), e("div", {
                    class: "nav-btn",
                    onClick: I[1] || (I[1] = D => t(i).push({
                        name: "register"
                    }))
                }, r(w.$t("register")), 1)])), C(Oe), C(ot, {
                    isShowButton: !0
                }), e("div", uo, [e("div", {
                    class: "raja_trun",
                    onClick: I[2] || (I[2] = D => t(i).push({
                        name: "Turntable"
                    }))
                }), e("div", {
                    class: "raja_vip",
                    onClick: I[3] || (I[3] = D => t(i).push({
                        name: "vip"
                    }))
                }), $(`			<svg-icon name="raja_trun" @click="router.push({ name: 'Turntable' })"/>`), $(`			<svg-icon name="raja_vip" @click="router.push({ name: 'vip' })"/>`)]), C(ns), C(qs), $(" 中奖信息 "), C(ps), $(" 今日盈利排行榜 "), C(Ts), C(Rs)]), t(p) ? (s(), U(Ue, {
                    key: 0
                })) : $("v-if", !0), $("下载PWA应用"), t(c) && t(y) ? (s(), U(to, {
                    key: 1
                })) : $("v-if", !0), C(Vs), $(" 邀请转盘 "), $(" <InviteTurntable /> "), C(x, {
                    show: t(v).prompt,
                    "onUpdate:show": I[4] || (I[4] = D => t(v).prompt = D),
                    "confirm-button-text": w.$t("confirm"),
                    onConfirm: t(l),
                    "before-close": t(B)
                }, {
                    default: j(() => [e("div", _o, r(t(_).title), 1), e("div", {
                        class: "promptContent",
                        innerHTML: t(_).siteMessage
                    }, null, 8, po)]),
                    _: 1
                }, 8, ["show", "confirm-button-text", "onConfirm", "before-close"]), C(Qe, {
                    show: t(v).laundry,
                    "onUpdate:show": I[5] || (I[5] = D => t(v).laundry = D),
                    onConfirm: G,
                    "show-cancel-btn": !1,
                    confirmText: "OK",
                    title: w.$t("congratulations")
                }, {
                    content: j(() => [e("div", vo, [e("div", mo, r(w.$t("getSuper")), 1), e("div", go, r(w.$t("getRewards")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])], 64)
            }
        }
    });
const yo = M(ho, [
        ["__scopeId", "data-v-2564a95f"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar008-india-rajagame/src/views/home/other/rajaHome.vue"]
    ]),
    $o = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yo
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Ue as C, Qe as D, Oe as N, $o as r
};
//# sourceMappingURL=page-home-other-cd09a5b2.js.map