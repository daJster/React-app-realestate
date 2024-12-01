(() => {
    function i() {
        for (let e of document.querySelectorAll("[data-framer-original-sizes]")) {
            let t = e.getAttribute("data-framer-original-sizes");
            t === "" ? e.removeAttribute("sizes") : e.setAttribute("sizes", t), e.removeAttribute("data-framer-original-sizes")
        }
    }

    function a() {
        window.__framer_onRewriteBreakpoints = i
    }
    return a
})()()



function s(r, n, t) {
    window.__framer_disable_appear_effects_optimization__ || typeof animator > "u" || requestAnimationFrame(() => {
        performance.mark("framer-appear-start"), animator.animateAppearEffects(JSON.parse(window.__framer__appearAnimationsContent.text), (i, o, p) => {
            let e = document.querySelector(i);
            if (e)
                for (let [a, m] of Object.entries(o)) animator.startOptimizedAppearAnimation(e, a, m, p[a])
        }, r, n, t && window.matchMedia("(prefers-reduced-motion:reduce)").matches === !0, animator.getActiveVariantHash(JSON.parse(window.__framer__breakpoints.text))), performance.mark("framer-appear-end"), performance.measure("framer-appear", "framer-appear-start", "framer-appear-end")
    })
}

s("data-framer-appear-id", "__Appear_Animation_Transform__", false)