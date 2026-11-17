// WindWave – live breakpoint and orientation indicator
(function () {
  var widthEl = document.getElementById("mqWidth");
  var nameEl = document.getElementById("mqName");
  var orientEl = document.getElementById("mqOrient");

  function update() {
    var w = window.innerWidth;
    widthEl.textContent = w;
    nameEl.textContent = w <= 600 ? "Mobile" : w <= 991 ? "Tablet" : "Desktop";
    orientEl.textContent = window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape";
  }

  window.addEventListener("resize", update);
  window.addEventListener("orientationchange", update);
  update();
})();
