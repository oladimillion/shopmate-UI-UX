(function() {
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
          .addEventListener("click", ()=>app.Animate(img.parentNode, parent));
      });
  };
  const matchWindowSize = ((size="600") => {
    const media = window.matchMedia(`(max-width: ${size}px)`);
    return media.matches;
  })
  window.app = window.app || {};
  window.app.AddToCart = AddToCart;
  window.app.getParentNode = getParentNode;
  window.app.matchWindowSize = matchWindowSize;
  window.qs = qs;
  window.qsa = qsa;
})();
