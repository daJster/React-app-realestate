import {
    D as h,
    E as m,
    F as u,
    G as y,
    H as _,
    I as b,
    J as v,
    L as k,
    O as F,
    Q as E,
    ba as P,
    da as I,
    e as c,
    h as g,
    na as S,
    ya as x
} from "./chunk-KYV2TJQL.mjs";
import {
    c as t
} from "./chunk-RIUMFBNJ.mjs";
var z = "default" in m ? h : m,
    d = {},
    w = z;
d.createRoot = w.createRoot;
d.hydrateRoot = w.hydrateRoot;
var M = d.createRoot,
    N = d.hydrateRoot;
var f = {
        augiA20Il: {
            elements: {
                CcTAhXHeW: "product-c",
                dWohjg438: "product-b",
                hekc9iz_L: "product-a",
                lNGilNLYH: "pricing",
                My0qyc9Yn: "product",
                SdJnzaJMc: "blog",
                uGySGglxf: "integrations",
                xbNIVNxxP: "security"
            },
            page: u(() => import("./3liOgvQqtdufodK3wWH40yVVno5Fiqgd7LHuTnqbBtg.CW24GRJD.mjs")),
            path: "/"
        }
    },
    D = [{
        code: "en",
        id: "default",
        name: "English",
        slug: ""
    }];
async function T({
    routeId: a,
    pathVariables: o,
    localeId: r
}) {
    await f[a].page.preload();
    let n = c(I, {
            isWebsite: !0,
            routeId: a,
            pathVariables: o,
            routes: f,
            collectionUtils: {},
            framerSiteId: "0f3987649171c26ebc8623e70c2f8cad2e127e5731d936de065c9ff4f9b58691",
            notFoundPage: u(() => import("./SitesNotFoundPage.js@1.1-IF5YC2NQ.mjs")),
            isReducedMotion: void 0,
            localeId: r,
            locales: D,
            preserveQueryParams: void 0
        }),
        s = c(P, {
            children: n,
            value: {
                enableAsyncURLUpdates: !1,
                useGranularSuspense: !1
            }
        });
    return c(y, {
        children: s,
        value: {
            routes: {}
        }
    })
}
var O = typeof document < "u";
if (O) {
    t.__framer_importFromPackage = (o, r) => () => c(F, {
        error: 'Package component not supported: "' + r + '" in "' + o + '"'
    }), t.process = {
        ...t.process,
        env: {
            ...t.process ? t.process.env : void 0,
            NODE_ENV: "production"
        }
    }, t.__framer_events = t.__framer_events || [], E();
    let a = document.getElementById("main");
    "framerHydrateV2" in a.dataset ? H(!0, a) : H(!1, a)
}

function V() {
    O && t.__framer_events.push(arguments)
}
async function H(a, o) {
    try {
        let R = function(e, G) {
                let l = G?.componentStack;
                console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.", e, l), !(Math.random() > .01) && V("published_site_load_recoverable_error", {
                    message: String(e),
                    componentStack: l,
                    stack: l ? void 0 : e instanceof Error && typeof e.stack == "string" ? e.stack : null
                })
            },
            r, n, s, i;
        if (a) {
            let e = JSON.parse(o.dataset.framerHydrateV2);
            r = e.routeId, n = e.localeId, s = e.pathVariables, i = e.breakpoints
        } else {
            let e = k(f, decodeURIComponent(location.pathname), !0, D);
            r = e.routeId, n = e.localeId, s = e.pathVariables
        }
        let p = await T({
            routeId: r,
            localeId: n,
            pathVariables: s
        });
        a ? (x("framer-rewrite-breakpoints", () => {
            S(i), t.__framer_onRewriteBreakpoints?.(i)
        }), g(() => {
            _(), v(), b(), N(o, p, {
                onRecoverableError: R
            })
        })) : M(o, {
            onRecoverableError: R
        }).render(p)
    } catch (r) {
        throw V("published_site_load_error", {
            message: String(r),
            stack: r instanceof Error && typeof r.stack == "string" ? r.stack : null
        }), r
    }
}
export {
    T as getPageRoot
};
//# sourceMappingURL=script_main.XE3KQKIR.mjs.map