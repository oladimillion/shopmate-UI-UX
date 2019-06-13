(function () {
  const qs = ((selector, scope=document) => {
    return scope.querySelector(selector);
  });
  const qsa = ((selector, scope=document) => {
    return scope.querySelectorAll(selector);
  });
  function AddToCart() {
    const getBtnParentElement = ((button) => {
      if(button.offsetParent.classList.contains("card")){
        return button.offsetParent;
      } else {
        getBtnParentElement(button.offsetParent);
      }
    });
    Array.from(qsa("button.add__to__cart__btn"))
      .map((button) => {
        return {parent: getBtnParentElement(button), button};
      }).filter(data => !!data.parent)
      .forEach(({button, parent}) => {
        const img = (qs("img", parent));
        button.addEventListener("click", ()=>app.Animate(img, parent));
      });
  };
  window.app = window.app || {};
  window.app.AddToCart = AddToCart;
  window.qs = qs;
  window.qsa = qsa;
})();
