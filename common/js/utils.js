(function () {
  const qs = ((selector, scope=document) => {
    return scope.querySelector(selector);
  });
  const qsa = ((selector, scope=document) => {
    return scope.querySelectorAll(selector);
  });
  const getParentNode = ((child, className) => {
    let parentNode = child.parentNode;
    while(!parentNode.classList.contains(className)){
      parentNode = parentNode.parentNode;
    } 
    return parentNode;
  });
  function AddToCart() {
    const getBtnParentElement = ((button) => {
      return getParentNode(button, "card");
    });
    Array.from(qsa("button.add__to__cart__btn"))
      .map((button) => {
        return {parent: getBtnParentElement(button), button};
      })
      .filter(data => !!data.parent)
      .forEach(({button, parent}) => {
        const img = (qs("img", parent));
        button
          .addEventListener("click", ()=>app.Animate(img, parent));
      });
  };
  window.app = window.app || {};
  window.app.AddToCart = AddToCart;
  window.app.getParentNode = getParentNode;
  window.qs = qs;
  window.qsa = qsa;
})();
