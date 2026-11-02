/* Selector de temas */
(function () {
  var raiz = document.documentElement;
  var botones = document.querySelectorAll(".temas button");
  var meta = document.querySelector('meta[name="theme-color"]');
  function aplicar(tema) {
    if (tema === "lima") delete raiz.dataset.tema; else raiz.dataset.tema = tema;
    botones.forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.tema === tema ? "true" : "false"); });
    if (meta) meta.content = getComputedStyle(raiz).getPropertyValue("--fondo").trim();
    var css = getComputedStyle(raiz), c = function (v) { return css.getPropertyValue(v).trim(); };
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1080'>" +
      "<rect width='1080' height='1080' fill='" + c("--fondo") + "'/>" +
      "<path d='M0 0 519 270 216 426 0 317ZM0 1080 519 810 216 654 0 763ZM557 540 805 411 1054 540 805 668Z' fill='" + c("--logo-claro") + "'/>" +
      "<path d='M0 0H557L1080 270 557 540 1080 810 557 1080H0L519 810 0 540 519 270Z' fill='" + c("--c2") + "'/></svg>";
    document.getElementById("icono").href = "data:image/svg+xml," + encodeURIComponent(svg);
  }
  var actual = raiz.dataset.tema || "lima";
  aplicar(actual);
  botones.forEach(function (b) {
    b.addEventListener("click", function () {
      aplicar(b.dataset.tema);
      try { localStorage.setItem("tema", b.dataset.tema); } catch (e) {}
    });
  });
})();
