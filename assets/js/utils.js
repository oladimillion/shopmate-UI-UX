(function () {
  const qs = ((selector, scope=document) => {
    return scope.querySelector(selector);
  });
  const qsa = ((selector, scope=document) => {
    return scope.querySelectorAll(selector);
  });
  window.qs = qs;
  window.qsa = qsa;
})();
