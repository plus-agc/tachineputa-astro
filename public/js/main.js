/* ======================================================================================================================
メインビジュアル タイトル出現
====================================================================================================================== */
(function() {
    ("use strict");

    const access = sessionStorage.getItem("access");

    let timer = 0;
    if (access) {
        timer = 0;
    }

    const load = function() {
        window.addEventListener("load", () => {
            document.documentElement.classList.add("is-loaded");
            setTimeout(() => {
                document.documentElement.classList.add("is-start");

                setTimeout(() => {
                    document.documentElement.classList.add("is-over");
                    sessionStorage.setItem("access", true);
                }, 1000);
            }, 3000);
        });
    };
    load();

    const drawer = function() {
        const elem = document.querySelector(".js-drawer");
        elem.addEventListener("click", function(e) {
            const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
            e.currentTarget.setAttribute("aria-expanded", !isExpanded);

            document.documentElement.classList.toggle(`is-drawerActive`);
        });

        const nav = document.querySelectorAll("#globalNav a[href^='#']");
        for (let i = 0; i < nav.length; i++) {
            nav[i].addEventListener("click", function(e) {
                document.documentElement.classList.remove(`is-drawerActive`);
                elem.setAttribute("aria-expanded", false);
            });
        }
    };
    drawer();
})();


/* ======================================================================================================================
パララックス
====================================================================================================================== */
const targetFactor = 0.25;
const windowHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);

const parallax = document.getElementsByClassName('parallax');
const targets = Array.prototype.slice.call(parallax);

window.addEventListener("scroll", () => {
    const scrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop);

    for (const target of targets) {
        const targetOffsetTop = target.offsetTop;
        const scrollYStart = targetOffsetTop - windowHeight;
        target.style.backgroundPositionY = (scrollY > scrollYStart) ? `${(scrollY - targetOffsetTop) * targetFactor}px` : 'top';
    }
});