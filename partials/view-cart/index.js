(async function () {
  const controller = app.Controller;
  const path = "partials/view-cart";
  const cssPath = "partials/view-cart/css";
  controller.addStyle(cssPath);
  controller.addStyle(cssPath, "index.md");
  controller.addStyle(cssPath, "index.sm");
  const cartItem = (await app.Template(path, "cart-item"));
  const cartItems = [...Array(8).keys()].map(_ => cartItem).join("");
  const template = (await app.Template(path))
    .replace("{{CartItems}}", cartItems);
  controller.render(template, "view__cart__modal");

  qsa(".close__view__cart").forEach((ele) => {
    ele.addEventListener("click", () => {
      const cart = qs("#viewcart__modal");
      cart.classList.remove("visible");
      cart.classList.add("hidden");
    });
  });
})();
