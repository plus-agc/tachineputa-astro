/* ======================================================================================================================
メインビジュアル タイトル出現
====================================================================================================================== */
(function () {
  ("use strict");

  const access = sessionStorage.getItem("access");

  let timer = 0;
  if (access) {
    timer = 0;
  }

  const load = function () {
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

  const drawer = function () {
    const elem = document.querySelector(".js-drawer");
    if (!elem) return;  // 要素が存在しない場合は処理をスキップ

    elem.addEventListener("click", function (e) {
      const isExpanded =
        e.currentTarget.getAttribute("aria-expanded") !== "false";
      e.currentTarget.setAttribute("aria-expanded", !isExpanded);

      document.documentElement.classList.toggle(`is-drawerActive`);
    });

    // ナビゲーションリンクを取得（#を含むすべてのリンク）
    const nav = document.querySelectorAll("#globalNav a[href*='#']");
    for (let i = 0; i < nav.length; i++) {
      nav[i].addEventListener("click", function (e) {
        // 現在のページ内リンクの場合のみドロワーを閉じる
        if (this.getAttribute('href').startsWith('#') ||
          this.getAttribute('href').includes(window.location.pathname + '#')) {
          document.documentElement.classList.remove(`is-drawerActive`);
          elem.setAttribute("aria-expanded", false);
        }
      });
    }
  };
  drawer();
})();
