(function () {
  const getPosition = ((elem) => {
    const box = elem.getBoundingClientRect();
    const { clientLeft, clientTop } = document.body;
    const [top, left] = [
      (box.top +  window.pageYOffset - clientTop),
      (box.left + window.pageXOffset - clientLeft),
    ];
    return { top: top | 0, left: left | 0 };
  });
  function Animate(flyer, flyerParent) {
    const flyTo = qs("span.cart__icon");
    const flyerWidth = 100;
    const flyerHeight = 100;
    const flyerClone = flyer.cloneNode(true);
    const rect = getPosition(flyerParent);
    const coord = ((parent) => {
      return {
        left: rect.left + ((parent.clientWidth/2) - (flyerWidth/2)),
        top: rect.top + ((parent.clientHeight/2) - (flyerHeight/2)),
      };
    });
    const from = coord(flyerParent);
    document.body.append(flyerClone);
    Object.assign(flyerClone.style, {
      position: "absolute",
      top: from.top + "px",
      left: from.left + "px",
      width: flyerWidth + "px",
      "min-height": flyerHeight + "px",
      "z-index": 100,
      opacity: 0.9,
    });
    flyerClone.animate([ 
      {
        left: from.left + "px",
        top: from.top + "px",
        opacity: 0.9,
      },
      {
        left: (flyTo.offsetLeft - (flyerWidth/4)) + "px",
        top: (flyTo.offsetTop - (flyerHeight/4)) + "px",
        opacity: 0.5,
      }
    ], {
      duration: 1000,
      fill: "forwards",
      easing: "ease-in-out",
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout((() => {
      const elemItemCount = qsa("span.item__count");
      const count = parseInt(elemItemCount[0].innerText) + 1;
      flyerClone.remove();
      flyTo.animate([
        { transform: "translateX(-2px)" },
        { transform: "translateX(4px)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
      ], 300);
      elemItemCount.forEach((span) => {
        span.innerText = (count <= 9) ? count : "9+";
      });
    }), 1100);
  }
  window.app = window.app || {};
  window.app.Animate = Animate;
})();
